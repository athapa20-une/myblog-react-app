# React Blog Application

This project is a simple blog application built with React and TypeScript. It fetches blog data from a Laravel API and displays a list of blog posts, along with detailed views for individual posts. The application demonstrates how to handle data fetching, routing, and state management in a modern React application.

## Installation

To set up and run the project locally, follow these steps:

1. Clone the repository:
   ```bash
   git clone https://github.com/athapa20-une/myblog-react-app.git
   ```

2. Navigate to the project directory:
   ```bash
   cd myblog-react-app
   ```

3. Install the required dependencies:
   ```bash
   npm install
   ```

4. Start the development server:
   ```bash
   npm start
   ```

The application should now be running at `http://localhost:3000`.

## Dependencies

The following dependencies are used in this project:

- **React**: A JavaScript library for building user interfaces.
- **TypeScript**: A superset of JavaScript that adds static typing.
- **react-router-dom**: For handling routing in the application.
- **CSS**: For styling the components.

You can check all the dependencies in the `package.json` file.

## Approach

### 1. **Project Setup**
   - The project was initialized using the `create-react-app` tool with the `typescript` template to provide a strong typing system and improve code quality.
   - React Router was set up to manage routing between the Blog List page and Blog Details page.

### 2. **Data Fetching**
   - The blog list and blog details are fetched from a Laravel API backend.
   - We used the `fetch` API to retrieve data, ensuring efficient and asynchronous data handling within `useEffect` hooks.

### 3. **State Management**
   - The `useState` and `useEffect` hooks were used for managing component state and side effects (fetching data).
   - The application efficiently handles loading, error, and data states to ensure a smooth user experience.

### 4. **Styling**
   - Basic CSS styling was applied to enhance the visual appearance of the blog list and blog details pages.
   - Separate CSS files (`BlogList.css` and `BlogDetails.css`) were used to manage component-specific styles.

## Challenges

1. **Data Fetching and API Integration**:
   - One of the main challenges was ensuring proper data fetching and handling of different data states (loading, error, and success).
   - The API structure changed, requiring adjustments to how data was accessed (e.g., adding checks for optional fields to avoid errors).

2. **TypeScript Integration**:
   - Defining accurate types for the data received from the API required careful inspection of the API response to avoid runtime errors.
   - Ensuring type safety while accessing nested properties like `post.user.name` required thoughtful handling of optional chaining.

3. **Handling Conditional Rendering**:
   - Managing cases where data might be `undefined` (e.g., missing `user` details) required implementing proper checks to prevent the application from breaking.

## Future Enhancements

- Implement pagination for the blog list page to handle a large number of posts.
- Add a search and filter functionality to help users find specific blog posts.
- Improve the styling and layout to make the application more visually appealing.
- Include user authentication to manage adding, editing, or deleting blog posts.

## License

- **Name:** Anish Thapa
- **Email**: athapa20@myune.edu.au
- **Student Id**: 220277013