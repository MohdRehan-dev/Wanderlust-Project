require("dotenv").config();

const mongoose = require("mongoose");
const mbxGeocoding = require("@mapbox/mapbox-sdk/services/geocoding");

const Listing = require("../models/listing.js");
const User = require("../models/user.js");
const { data: sampleListings } = require("./data.js");

const geocodingClient = mbxGeocoding({
  accessToken: process.env.MAP_TOKEN,
});

const ownerId = "6ae8ff91d847f500976fe617";

async function addListings() {
  try {
    await mongoose.connect(process.env.ATLASDB_URL, {
      dbName: "test",
    });

    console.log("Connected to database:", mongoose.connection.name);

    // Check that the selected owner exists
    const owner = await User.findById(ownerId);

    if (!owner) {
      throw new Error("Owner not found in this database");
    }

    let added = 0;
    let skipped = 0;

    for (const item of sampleListings) {
      // Skip a listing if it already exists
      const existing = await Listing.findOne({
        title: item.title,
        location: item.location,
        country: item.country,
      });

      if (existing) {
        console.log("Already exists:", item.title);
        skipped++;
        continue;
      }

      // Find coordinates for the listing's location
      const response = await geocodingClient
        .forwardGeocode({
          query: `${item.location}, ${item.country}`,
          limit: 1,
        })
        .send();

      const place = response.body.features[0];

      if (!place) {
        console.log("Location not found; skipped:", item.title);
        skipped++;
        continue;
      }

      // Save the listing to Atlas
      await Listing.create({
        ...item,
        owner: ownerId,
        geometry: place.geometry,
        reviews: [],
      });

      console.log("Added:", item.title);
      added++;
    }

    console.log(`Finished: ${added} added, ${skipped} skipped`);
  } catch (error) {
    console.error("Seed failed:", error.message);
  } finally {
    await mongoose.disconnect();
  }
}

addListings();
