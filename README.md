# Real-time Chat Application

This project is a real-time chat application built with React and Socket.IO. It allows users to send and receive messages in real-time across multiple clients.

## Features

- Real-time messaging
- Timestamp for each message
- Simple and intuitive user interface

## Prerequisites

Before you begin, ensure you have met the following requirements:

- Node.js (v14.0.0 or later)
- npm (v6.0.0 or later)

## Installation

1. Clone the repository:

2. Install the dependencies for both the server and client:
   npm install

   ## Usage

To run the application, you need to start both the server and the client.

1. Start the server:

node server.mjs

The server will start running on `http://localhost:3000`.

2. In a new terminal, start the React application:
   npm run dev

   The React app will start running on `http://localhost:5173`.

3. Open your web browser and navigate to `http://localhost:5173` to use the chat application.

4. Open multiple browser windows to simulate different users chatting.

## Project Structure

- `server.mjs`: The WebSocket server using Socket.IO
- `src/App.tsx`: The main React component containing the chat functionality
- `src/main.tsx`: The entry point of the React application

## Technologies Used

- React
- TypeScript
- Socket.IO
- Vite (for building and serving the React app)
- Express (for the WebSocket server)

## Contributing

Contributions, issues, and feature requests are welcome. Feel free to check [issues page](https://github.com/gray-learn/bring-chatroom/issues) if you want to contribute.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.
