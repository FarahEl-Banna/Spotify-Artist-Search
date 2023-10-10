# Spotify-Artist-Search
This is a basic Spotify application built using React, allowing users to search for artists and explore their albums. The application utilizes the Spotify API to fetch artist information and album details.

## Features
Spotify Authentication: Users can log in using their Spotify account through the Spotify Implicit Grant authentication flow.
Artist Search: Users can search for artists and view the search results. The search can be performed by typing the artist's name, and the results are displayed in real-time.
Browsing Artists: Users can see the list of artists based on the search results. Each artist is displayed with an image, popularity rating, number of followers, and can be clicked to view the artist's albums.
Browsing Artist Albums: Users can explore albums for a specific artist. Album details include the cover image, album name, list of artists, release year, total tracks, and a clickable link to the Spotify preview.
## Getting Started
Follow these instructions to run the project locally:

Clone this repository: 
https://github.com/your-username/spotify-artist-search.git

Navigate to the project directory:
cd spotify_artist_search

Install the dependencies:
npm install

Create a .env file in the root directory and add your Spotify API credentials:

REACT_APP_SPOTIFY_ID=your_client_id

Start the development server:
npm start

The application will be running at http://localhost:3000.

## Technical Choices
React: The application is built using React, taking advantage of its component-based architecture for building reusable UI elements.

React Router: React Router is used for navigation, enabling single-page functionality and smooth transitions between different views.

Fetch API: The application uses the native Fetch API for making HTTP requests to the Spotify API endpoints. Fetch provides a simple and powerful way to handle network requests, ensuring efficient data fetching.

## Application Structure
The project structure is organized as follows:

src/components: Contains individual components used in the application (ArtistCard, AlbumCard).

src/pages: Contains the main pages of the application (LoginPage, ArtistSearchPage, AlbumsPage).

src/helperfunctions.js: Contains helper functions responsible for making API calls and handling data fetching logic to enhance code modularity and readability.

src/index.js: The entry point of the application where the React app is rendered into the DOM.

## Additional Notes
Responsive Design: The application is designed to be responsive, ensuring a seamless user experience across various devices and screen sizes.
Error Handling: Error handling mechanisms are implemented for API requests to provide feedback to users in case of failed requests.

Feel free to explore the codebase and reach out if you have any questions or need further clarification on specific implementation details. Enjoy exploring !
