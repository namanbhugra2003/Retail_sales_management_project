# Architecture Document

## Backend Architecture
The backend follows a layered architecture built using Node.js and Express.js. It exposes RESTful APIs that handle searching, filtering, sorting, and pagination of sales data. MongoDB Atlas is used as the database, and Mongoose is used as the ODM for database interactions. The backend is responsible for all business logic and data processing to ensure scalability and performance when working with large datasets.

## Frontend Architecture
The frontend is built using React with Vite as the build tool. It follows a component-based architecture where the UI is divided into reusable components such as Sidebar, Header, Filters, StatsBar, TransactionsTable, and Pagination. State management is handled using React hooks, and API communication is done via a dedicated service layer using Axios.

## Data Flow
1. The user interacts with the frontend UI (search, filters, sorting, pagination).
2. The frontend sends query parameters to the backend API.
3. The backend processes these parameters and constructs MongoDB queries.
4. MongoDB Atlas returns the filtered and paginated data.
5. The backend sends the response to the frontend.
6. The frontend renders the updated data in the table and summary cards.

## Folder Structure
The project is divided into two main parts: frontend and backend.

- Backend:
  - `controllers` – Handles incoming API requests and responses
  - `services` – Contains business logic and database queries
  - `models` – Defines Mongoose schemas
  - `routes` – Defines API routes
  - `config` – Database configuration
  - `utils` – Utility functions
  - `index.js` – Application entry point

- Frontend:
  - `components` – Reusable UI components
  - `services` – API communication logic
  - `styles` – Global and layout CSS files
  - `hooks` – Custom React hooks
  - `App.jsx` – Root component

## Module Responsibilities
- Controllers: Handle HTTP requests and send responses.
- Services: Implement core logic such as filtering, sorting, and pagination.
- Models: Define the structure of sales data in MongoDB.
- Routes: Map API endpoints to controllers.
- Frontend Components: Render UI and handle user interactions.
- API Service Layer: Handles communication between frontend and backend.
