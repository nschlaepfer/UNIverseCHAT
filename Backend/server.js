const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const cors = require('cors');
const chatMessagesRouter = require('./routes/chatMessages');
const config = require('config');
const jwtSecret = config.get('jwtSecret');
const User = require('./models/users');
const Prompt = require('./models/ChatMessage');
const updateUser = require('./updateUser');



const mongoose = require('mongoose');

const connectionString = config.get('mongoURI');
//const connectionString = 'mongodb+srv://test:test@cluster0.xmifvlk.mongodb.net/test';

mongoose.connect(connectionString, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => {
    console.log('Connected to MongoDB');
}).catch((error) => {
    console.error('Error connecting to MongoDB:', error);
});

// Your other server code...


const app = express();
app.use(express.json());
app.use(cors());




// Temporarily hardcoded user with hashed password
const users = [
    {
        username: "test",
        password: "$2b$10$kK/IgocyJ3R4u6FKbIhRLe7I6enMdk4Ykl5qhqtFpBIFCSavYqbS2", // bcrypt hash for "test"
        //password: "test",
    },
];


const authenticate = (req, res, next) => {
    const authHeader = req.headers.authorization;
    if (!authHeader) {
        return res.sendStatus(401);
    }

    const token = authHeader.split(' ')[1];
    jwt.verify(token, 'your_secret_key', (err, user) => {
        if (err) {
            return res.sendStatus(403);
        }
        req.user = user;
        next();
    });
};



app.post('/register', async (req, res) => {
    try {
        const { username, password, degree } = req.body;

        const userExists = await User.findOne({ username });

        if (userExists) {
            return res.status(400).send({ message: 'Account already exists' });
        }

        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = new User({ username, password: hashedPassword,degree });
        await newUser.save();

        res.status(201).send({ message: 'User registered' });
    } catch (error) {
        console.error(error);
        res.status(500).send({ message: 'Failed to register user' });
    }
});

app.post('/login', async (req, res) => {
    const { username, password } = req.body;
    const user = await User.findOne({ username });

    if (!user) {
        return res.status(400).send({ message: 'User not found' });
    }

    if (await bcrypt.compare(password, user.password)) {
        const token = jwt.sign({ username: user.username }, jwtSecret);
        res.json({ token });
    } else {
        res.status(401).send({ message: 'Invalid username or password' });
    }
});

// Route to update a user's username
app.put('/updateUsername/:userId', async (req, res) => {
    const { userId } = req.params;
    const { newUsername } = req.body;
  
    try {
      // Find the user by ID
      const user = await User.findById(userId);
  
      if (!user) {
        return res.status(404).json({ message: 'User not found' });
      }
  
      // Update the user's username
      user.username = newUsername;
  
      // Save the updated user to the database
      await user.save();
  
      res.json({ message: 'Username updated successfully' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Failed to update username' });
    }
  });
  
  // Route to update a user's password
  app.put('/updatePassword/:userId', async (req, res) => {
    const { userId } = req.params;
    const { currentPassword, newPassword } = req.body;
  
    try {
      // Find the user by ID
      const user = await User.findById(userId);
  
      if (!user) {
        return res.status(404).json({ message: 'User not found' });
      }
  
      // Check if the current password is correct
      const isMatch = await bcrypt.compare(currentPassword, user.password);
  
      if (!isMatch) {
        return res.status(401).json({ message: 'Incorrect password' });
      }
  
      // Update the user's password
      const hashedPassword = await bcrypt.hash(newPassword, 10);
      user.password = hashedPassword;
  
      // Save the updated user to the database
      await user.save();
  
      res.json({ message: 'Password updated successfully' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Failed to update password' });
    }
  });
  



  const ChatMessage = require('./models/ChatMessage');

  // create a new chat message
  const newMessage = new ChatMessage({
    user: userId, // user ID from your authentication system
    message: 'Hello, World!'
  });
  
  // save the chat message to the database
  newMessage.save()
    .then(savedMessage => {
      console.log('Chat message saved:', savedMessage);
    })
    .catch(error => {
      console.error('Error saving chat message:', error);
    });




app.get('/dashboard', authenticate, (req, res) => {
    res.send(`Welcome to the dashboard, ${req.user.username}!`);
});

app.listen(3001, () => {
    console.log('Server listening on port 3001');
});
