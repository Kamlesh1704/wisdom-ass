# Wisdom App

This is a React-based application built to demonstrate dynamic theming, styled components, and functional user interfaces. The project includes features like theme switching, responsive layouts, and user details display.

## Features

- **Dynamic Theming:**
  - Support for both light and dark themes using props and styled-components.
  - Smooth transitions and consistent styling across components.

- **User Interface Components:**
  - User listing with search and sorting functionality.
  - User details page with a clean, minimalistic design.

- **Responsive Design:**
  - Optimized for mobile and desktop views.

- **Navigation:**
  - Go back functionality to easily return to the previous page.

## Project Setup

Follow these steps to set up the project locally:

### Prerequisites

Ensure you have the following installed:

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/Kamlesh1704/wisdom-ass.git
   ```

2. Navigate to the project directory:
   ```bash
   cd wisdom-app
   ```

3. Install the dependencies:
   ```bash
   npm install
   ```
   Or if you're using yarn:
   ```bash
   yarn install
   ```

### Running the Application

1. Start the development server:
   ```bash
   npm start
   ```
   Or:
   ```bash
   yarn start
   ```

2. Open your browser and navigate to:
   ```
   http://localhost:3000
   ```

### Folder Structure

```
wisdom-app/
├── public/        
├── src/           
│   ├── assets/   
│   ├── components/
│   ├── context/
│   ├── css/     
│   ├── App.js       
│   ├── index.js      
├── .gitignore         
├── README.md           
├── package.json       
├── package-lock.json 
```

### Key Components

1. **Home Page:**
   - Displays a list of users with search and sort functionality.
   - Uses styled-components for theme-based styling.

2. **User Details Page:**
   - Displays detailed information about a user.
   - Includes a "Go Back" button for easy navigation.

3. **Dynamic Theming:**
   - The `lightTheme` prop toggles between light and dark modes seamlessly.

### Scripts

- `npm start`: Runs the app in development mode.
- `npm run build`: Builds the app for production.

### Technologies Used

- **React.js**: Frontend library for building user interfaces.
- **Styled-components**: For CSS-in-JS styling.
- **JavaScript (ES6+)**: Core language for React development.
