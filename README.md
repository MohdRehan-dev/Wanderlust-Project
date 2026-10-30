# Wanderlust — Vacation Rental Listing Application

A full-stack web application for exploring vacation rentals, managing property listings, and sharing reviews.

**[Live Demo](https://delta-project-68j5.onrender.com/listings)** · **[GitHub Repository](https://github.com/MohdRehan-dev/Wanderlust-Project)**

## Project Overview

Wanderlust is built with **Node.js, Express.js, MongoDB and EJS**. Visitors can browse property listings and view their details, images, reviews and locations. Registered users can publish listings and submit reviews.

The application follows an **MVC-style architecture**, with separate models, views, controllers and routes. It uses server-rendered EJS templates, session-based authentication and middleware-based authorization.

This is a learning project focused on property listings and reviews. Booking and payment functionality are not currently implemented.

## Features

### Authentication and Authorization

- User registration, login and logout using Passport.js.
- Session persistence using a MongoDB session store.
- Login requirements for creating listings and submitting reviews.
- Ownership checks for editing and deleting listings.
- Author checks for deleting reviews.
- Redirect handling after login for protected pages.

### Property Listings

- Create, browse, view, edit and delete property listings.
- Store property titles, descriptions, prices, locations and countries.
- Upload a property image using Multer and Cloudinary.
- Replace listing images during editing.
- Display listing owners and associated reviews.

### Reviews and Ratings

- Submit written reviews with ratings from 1 to 5.
- Display review authors.
- Allow authors to delete their reviews.
- Remove associated reviews when a listing is deleted.

### Maps and Validation

- Convert listing locations into geographic coordinates using Mapbox.
- Display property locations on interactive maps.
- Validate listing and review submissions using Joi.
- Display success and error flash messages.
- Render application errors through a shared error handler.

## Tech Stack

| Category | Technologies |
|---|---|
| Frontend | HTML5, CSS3, JavaScript, Bootstrap |
| Templates | EJS, EJS-Mate |
| Backend | Node.js, Express.js |
| Database | MongoDB, Mongoose |
| Authentication | Passport.js, Passport Local, Passport Local Mongoose |
| Sessions | Express Session, Connect Mongo |
| Image Uploads | Multer, Multer Storage Cloudinary |
| Image Storage | Cloudinary |
| Maps and Geocoding | Mapbox |
| Validation | Joi |
| Flash Messages | Connect Flash |
| Configuration | Dotenv |
| Form Method Override | Method Override |
| Deployment | Render |

## Folder Structure

| Path | Purpose |
|---|---|
| `app.js` | Application entry point, database connection, sessions and middleware setup |
| `cloudConfig.js` | Cloudinary configuration and upload storage |
| `controllers/` | Listing, review and user request handlers |
| `models/` | Mongoose schemas for listings, reviews and users |
| `routes/` | Listing, review and authentication routes |
| `views/listings/` | Listing pages, forms and error template |
| `views/users/` | Login and registration templates |
| `views/includes/` | Shared navigation, footer and flash messages |
| `views/layouts/` | Shared EJS page layout |
| `public/css/` | Application and rating styles |
| `public/js/` | Client-side scripts and map rendering |
| `middleware.js` | Authentication, authorization and validation middleware |
| `schema.js` | Joi validation schemas |
| `utils/` | Custom error class and asynchronous handler wrapper |
| `init/` | Development seed data and database initialization script |
| `package.json` | Dependencies, Node.js version and package metadata |
| `package-lock.json` | Dependency lockfile |
| `.gitignore` | Excludes `.env` and `node_modules/` |

## Installation

### Prerequisites

- **Node.js 22.14.0**, as specified in `package.json`.
- npm.
- A MongoDB database, either local or hosted on MongoDB Atlas.
- A Cloudinary account.
- A Mapbox access token.
- Git.

### 1. Clone the Repository

```bash
git clone https://github.com/MohdRehan-dev/Wanderlust-Project.git
cd Wanderlust-Project
```

### 2. Install Dependencies

```bash
npm ci
```

### 3. Configure Environment Variables

Create a `.env` file in the project root with the following variables:

```env
ATLASDB_URL=your_mongodb_connection_string
SECRET=your_random_session_secret

MAP_TOKEN=your_mapbox_access_token

CLOUD_NAME=your_cloudinary_cloud_name
CLOUD_API_KEY=your_cloudinary_api_key
CLOUD_API_SECRET=your_cloudinary_api_secret
```

| Variable | Purpose |
|---|---|
| `ATLASDB_URL` | MongoDB connection string used for application data and sessions |
| `SECRET` | Session signing and session-store encryption secret |
| `MAP_TOKEN` | Mapbox token used for geocoding and map display |
| `CLOUD_NAME` | Cloudinary cloud name |
| `CLOUD_API_KEY` | Cloudinary API key |
| `CLOUD_API_SECRET` | Cloudinary API secret |

For a local MongoDB database, use:

```env
ATLASDB_URL=mongodb://127.0.0.1:27017/wanderlust
```

For MongoDB Atlas, configure a database user and allow network access from the machine running the application.

Generate a random session secret with:

```bash
node -e "console.log(require('crypto').randomBytes(32).toString('hex'))"
```

Copy the generated value into `SECRET`.

> `.env` is excluded by `.gitignore`. Keep database credentials, the Cloudinary API secret and the session secret private.

### 4. Start the Application

```bash
node app.js
```

The application listens on **port 8080**.

Open:

```text
http://localhost:8080/listings
```

The current project does not define an `npm start` script. Use `node app.js`.

### 5. Create Your First Listing

Register an account, then create a listing through the application. This establishes the listing owner, uploads the image and generates map coordinates.

Database seeding is not required.

> The existing `init/index.js` script targets a local database, deletes existing listings and uses a hard-coded owner ID. It is a development utility, not part of the standard setup.

## Usage

1. Open the listings page to explore available properties.
2. Select a property to view its image, description, price, reviews and map.
3. Register through **Sign Up**, or log in with an existing account.
4. Select **Airbnb your home** to create a listing.
5. Enter the property details and upload an image.
6. Edit or delete your own listings from their detail pages.
7. Submit a review and a rating while logged in.
8. Delete reviews you authored.
9. Log out when finished.

## Screenshots

| Screen | Preview |
|---|---|
| Property Listings | Screenshot coming soon |
| Property Details and Map | Screenshot coming soon |
| Create Listing Form | Screenshot coming soon |
| Edit Listing Form | Screenshot coming soon |
| Login and Registration | Screenshot coming soon |

## Development Notes

- Pages are rendered on the server using EJS. This project does not use React.
- Search and category controls are currently interface elements; backend search and filtering are not implemented.
- Listing coordinates are generated when a listing is created. Updating the location does not currently regenerate its coordinates.
- Automated tests are not yet configured. The existing `npm test` script is a placeholder that exits with an error.
- When `NODE_ENV=production`, configuration must be supplied through the hosting environment because `.env` is not loaded.
- The current `app.js` logs `process.env.SECRET` at startup. Remove that statement before using real credentials, and replace the secret if it has been exposed in shared logs.

## Future Improvements

- Implement destination search and category filtering.
- Add pagination and sorting for property listings.
- Support multiple images per property.
- Add saved listings and wishlists.
- Refresh map coordinates when a listing location changes.
- Improve handling of missing images, invalid IDs and unsuccessful geocoding.
- Add automated tests for authentication, authorization, listings and reviews.
- Improve accessibility and mobile usability.
- Add booking requests and availability management.
- Support configurable server ports through environment variables.

## Contributing

Bug reports, suggestions and contributions are welcome.

For substantial changes, open an issue first to discuss the proposed implementation.

1. Fork the repository.
2. Create a feature branch:

   ```bash
   git checkout -b feature/your-feature
   ```

3. Implement your changes.
4. Test the affected application flows.
5. Commit with a descriptive message:

   ```bash
   git commit -m "Describe your change"
   ```

6. Push your branch:

   ```bash
   git push origin feature/your-feature
   ```

7. Open a pull request describing:
   - What changed and why.
   - How the change was tested.
   - Screenshots for interface changes, where applicable.

Do not include credentials, `.env` files or `node_modules/` in contributions.

## Acknowledgement

This project was developed as part of the **Apna College Full-Stack Web Development course**, with tutorial guidance.

It provided practical experience with Express application development, MongoDB data modelling, authentication, authorization, image uploads, map integration and deployment.

## License

The project declares **ISC** in `package.json`. A standalone `LICENSE` file is not currently included.

## Author

**Mohd Rehan Sayed**

[GitHub](https://github.com/MohdRehan-dev) · [LinkedIn](https://www.linkedin.com/in/mohd-rehan-sayed-89218222a/)
