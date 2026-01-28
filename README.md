# Portfolio Website

A modern portfolio website built with React and Node.js, inspired by clean and minimal design principles.

## Features

- 🎨 Modern, clean UI design
- 📱 Fully responsive
- ⚡ Fast performance with Vite
- 🚀 React Router for navigation
- 📝 Articles/blog section
- 💼 Work/projects showcase
- 🎤 Speaking engagements
- 🛠️ Uses page

## Tech Stack

- **Frontend:** React 18, React Router, Vite
- **Backend:** Node.js, Express
- **Styling:** CSS3 (Custom CSS)

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Installation

1. Install all dependencies (root, client, and server):
```bash
npm run install-all
```

2. Start the development servers:
```bash
npm run dev
```

This will start:
- Frontend server on `http://localhost:3000`
- Backend server on `http://localhost:5000`

### Available Scripts

- `npm run dev` - Start both frontend and backend in development mode
- `npm run client` - Start only the frontend
- `npm run server` - Start only the backend
- `npm run build` - Build the frontend for production
- `npm start` - Start the production server

## Project Structure

```
portfolioN/
├── client/          # React frontend
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   └── App.jsx
│   └── package.json
├── server/          # Node.js backend
│   ├── server.js
│   └── package.json
└── package.json     # Root package.json
```

## Customization

Update the content in:
- `client/src/components/Hero.jsx` - Hero section
- `client/src/components/Speaking.jsx` - Speaking engagements
- `server/server.js` - Articles data
- `client/src/pages/Work.jsx` - Projects/work items
- `client/src/pages/Uses.jsx` - Tools and tech stack

## Deployment

1. Build the frontend:
```bash
npm run build
```

2. Set `NODE_ENV=production` and start the server:
```bash
NODE_ENV=production npm start
```

The server will serve the built React app in production mode.

## License

ISC
