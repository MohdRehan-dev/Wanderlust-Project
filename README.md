# Wanderlust — Vacation Rental Listing Application

Wanderlust is a full-stack vacation rental listing web application built using Node.js, Express.js, MongoDB, and EJS. Users can explore properties, create and manage listings, upload images, and share reviews.

**Live Demo:** https://delta-project-68j5.onrender.com

## Features

- User registration, login, and logout
- Create, view, edit, and delete property listings
- Listing ownership and authorization
- Image uploads using Cloudinary
- Property reviews and ratings
- Review author authorization
- Interactive location maps using Mapbox
- Server-side validation using Joi
- Flash messages and error handling
- MongoDB-backed sessions

## Technology Stack

**Frontend:** HTML5, CSS3, Bootstrap, EJS

**Backend:** Node.js, Express.js

**Database:** MongoDB, Mongoose

**Authentication:** Passport.js

**Image Storage:** Cloudinary, Multer

**Maps:** Mapbox

**Validation:** Joi

**Sessions:** Express Session, MongoDB session store

## Installation and Setup

1. Clone the GitHub repository.
2. Open the project folder.
3. Install dependencies:

   `npm install`

4. Create a `.env` file and configure the required environment variables:

   - `ATLASDB_URL`
   - `SECRET`
   - `MAP_TOKEN`
   - Cloudinary credentials (use the exact variable names referenced in the project)

5. Start the application:

   `node app.js`

6. Open `http://localhost:8080` in your browser.

Never commit your `.env` file or expose API credentials.

## Project Architecture

The application follows an MVC-style structure, separating models, controllers, routes, views, and middleware.

## Acknowledgement

This project was developed as part of the Apna College Full-Stack Web Development course with tutorial guidance. It was used to gain practical experience with backend development, database integration, authentication, authorization, file uploads, and deployment.