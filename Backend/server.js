const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const cors = require('cors');
const chatMessagesRouter = require('./routes/chatMessages');
const config = require('config');
const jwtSecret = config.get('jwtSecret');

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





//needed for DB Dont forget this. commented out for local test....
//const mongoose = require('mongoose');

// Replace the connection string with your own MongoDB connection string
//const connectionString = 'mongodb://<username>:<password>@<your-mongodb-host>:<port>/<database-name>';
//local connection string
// const connectionString = 'mongodb://localhost:3001/register';

// mongoose.connect(connectionString, {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// });

// const userSchema = new mongoose.Schema({
//   username: String,
//   password: String,
// });

// const User = mongoose.model('User', userSchema);


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





// ... For DB test. others are for local test

// app.post('/register', async (req, res) => {
//     try {
//       const hashedPassword = await bcrypt.hash(req.body.password, 10);
//       const user = new user({ username: req.body.username, password: hashedPassword });
//       await user.save();
//       res.status(201).send({ message: 'User registered' });
//     } catch (error) {
//       console.error(error);
//       res.status(500).send({ message: 'Failed to register user' });
//     }
//   });

//   app.post('/login', async (req, res) => {
//     const user = await User.findOne({ username: req.body.username }); //changed from User to users.. for local test
//     if (!user) {
//       return res.status(400).send({ message: 'User not found' });
//     }

//     if (await bcrypt.compare(req.body.password, user.password)) {
//       const token = jwt.sign({ username: user.username }, 'your_secret_key');
//       res.json({ token });
//     } else {
//       res.status(401).send({ message: 'Invalid username or password' });
//     }
//   });

// ... (rest of the code)

app.post('/register', async (req, res) => {
    try {
      const { username, password } = req.body;
  
      // Check if the user already exists
      const userExists = users.find((u) => u.username === username);
      if (userExists) {
        return res.status(400).send({ message: 'Account already exists' });
      }
  
      // Continue with the registration process if the user doesn't exist
      const hashedPassword = await bcrypt.hash(password, 10);
      const newUser = { username, password: hashedPassword };
      users.push(newUser);
      res.status(201).send({ message: 'User registered' });
  
    } catch (error) {
      console.error(error);
      res.status(500).send({ message: 'Failed to register user' });
    }
  });
  



//login route temp
app.post('/login', async (req, res) => {
    const user = users.find(u => u.username === req.body.username);
    if (!user) {
        return res.status(400).send({ message: 'User not found' });
    }

    if (await bcrypt.compare(req.body.password, user.password)) {
        const token = jwt.sign({ username: user.username }, 'your_secret_key');
        res.json({ token });
    } else {
        res.status(401).send({ message: 'Invalid username or password' });
    }
});


app.get('/api/chatMessages', async (req, res) => {
  try {
    const chatMessages = await ChatMessage.find({});
    res.json(chatMessages);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
    console.log('test');
  }
});




app.get('/dashboard', authenticate, (req, res) => {
    res.send(`Welcome to the dashboard, ${req.user.username}!`);
});

app.listen(3001, () => {
    console.log('Server listening on port 3001');
});
