# Chat App

# Project Name: UNIverseChat

The goal of this project is to have students login to our website to chat with a LLM chat bot that has been trained on the entire selected degrees materials and text books as well as assignments. The student will be able to save and retrieve chats form a database. This way, they can review their learning progress and get feedback from the chatbot.

This is a full-stack MERN project that includes a chatbot, user accounts, and authentication. The project is designed to allow users to create accounts, log in, and start chatting. The chatbot is powered by a custom LLM model deployed on the backend. The project is built using MongoDB, Express, React, Node.js, LangChain, Flask, and Docker.

The project uses MongoDB as a document database to store user information and chat history. Express and Node.js provide a web framework for handling requests and responses on the server side. React creates dynamic user interfaces on the client side using components and state management. LangChain provides an API for accessing the LLM model that generates chatbot responses based on natural language input. Flask serves as a bridge between LangChain and Express by sending and receiving data in JSON format. Docker containers simplify the deployment and management of the application.

## Requirements

- User accounts to save chats.
- User should have a username and a password.
- The website will use a custom LLM model deployed on the backend.
- ChatBot based on chosen degree

## Technologies

- MongoDB
- Express
- React
- Node.js
- LangChain
- Flask
- Docker
- LLAMA LLM 

## Installation

1. Clone the repository.
2. Install the dependencies.
3. Start the server.

## Usage

1. Create an account.
2. Select Degree program (BS CS only one planed atm)
3. Log in.
4. Start chatting!
5. Save and Retrive Chats

# UNIverseChat Project Progress Tracker

This markdown file is designed to track the progress of the UNIverseChat project, which aims to create a platform for students to interact with an LLM chatbot trained on degree materials, textbooks, and assignments. Users can save and retrieve chats from a database, enabling them to review their learning progress and receive feedback from the chatbot.

## Project Goals and Requirements

- User accounts with saved chat history
- Custom LLM model deployment on the backend
- Backend built with MongoDB, Express, Node.js, and Flask
- Frontend built with React
- LangChain API integration for LLM model access
- Docker for deployment and management

## Research Ideas NOT in order. (Just different Approaches to checkout)

1. **Training My Own Model on Textbook Data (GPT or LLAMA/Alpaca)**
    - [x] Collect and preprocess textbook data
    - [ ] Train the LLM model using GPT, LLAMA, or Alpaca
    - [ ] Evaluate the model's performance

2. **Fine-Tune Model**
    - [ ] Identify areas of improvement for the model
    - [ ] Fine-tune the model with additional data
    - [ ] Re-evaluate the model's performance

3. **Break Down Data into Chunks and Send to API**
    - [x] Create a function to divide input data into manageable chunks
    - [x] Send each chunk to the LangChain API for processing
    - [x] Receive and combine processed chunks from the LangChain API
    - [ ] Ensure the combined response is coherent and accurate

4. **Store Data in Database (Vector Database or Document)**
    - [ ] Decide on the database type (vector or document)
    - [x] Design the database schema for storing user information and chat history
    - [x] Implement the database with MongoDB
    - [ ] Test database CRUD operations

## Project Progress

### Backend

- [x] Set up Express and Node.js
- [x] Implement user account management (registration, login, authentication)
- [ ] Integrate Flask for communication with the LangChain API
- [ ] Deploy the custom LLM model
- [x] Set up MongoDB for storing user information and chat history
- [ ] Implement chat history retrieval functionality

### Frontend

- [x] Design and build the user interface using React
- [x] Create user account registration and login forms
- [ ] Implement chat interface for user interaction with the LLM chatbot
- [ ] Add functionality for saving and retrieving chat history

### Integration

- [x] Connect the frontend with the backend
- [ ] Test the entire application workflow
- [ ] Identify and fix any bugs or issues

### Deployment

- [ ] Set up Docker containers for application deployment
- [ ] Deploy the application to a server
- [ ] Perform stress testing and ensure smoothoperation

### Future Improvements

- [ ] Add support for more degree programs
- [ ] Improve the LLM model's training data
- [ ] Explore additional features to enhance user experience and learning


Feel free to modify or expand upon the structure provided in this markdown file to suit the specific needs and goals of the UNIverseChat project.














# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
