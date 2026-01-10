# Women in Technology Society Bulletin Board

This project is a small interactive web application created for the university’s Society Expo to showcase and celebrate members of the Women in Technology Society.

The application allows visitors to draw a self-portrait (or any creative portrait), add their name and a short bio, and contribute it to a shared digital bulletin board. The goal is to create a welcoming, creative space that highlights individuality, community, and representation in technology.

## Technologies Used

Frontend:
- TypeScript
- React Router
- Vite
- TailwindCSS

Backend: 
- Supabase

## Prerequisites

- **Node.js**: Version 18 or higher. You can download from [nodejs.org](https://nodejs.org/).
- **npm**: Comes bundled with Node.js. Alternatively, you can use Yarn or pnpm if preferred.
- **Git**: For cloning the repository.

## Setup Instructions

### 1. Clone the repository

```bash
git clone https://github.com/phuongwj/wits-bulletin-board.git
cd wits-bulletin-board
```

### 2. Navigate to the Frontend Directory

```bash
cd frontend
```

### 3. Install Dependencies

Install the required dependencies using npm (or your preferred package manager).

```bash
npm install
```

This will install all the dependencies listed in `package.json`, including React Router, TypeScript, Vite, and development tools.

### 4. Start the Development Server

Run the development server to start the application localy.

```bash
npm run dev
```

This command will:
- Start the Vite development server
- Enable Hot Module Replacement (HMR) for instant updates
- Open your browser to `http://localhost:5173` (or the next available port)

You should see the application running in your browser. Any changes you make to the code will be automatically reflected.

## Troubleshooting

- If you encounter issues with dependencies, try deleting `node_modules` and running `npm install` again.
- Ensure your Node.js version is compatible (18+).
- Check that port 5173 is not in use by another application.
