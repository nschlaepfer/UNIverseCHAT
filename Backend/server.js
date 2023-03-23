const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(cors());

const users = [];

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
    const hashedPassword = await bcrypt.hash(req.body.password, 10);
    const user = { username: req.body.username, password: hashedPassword };
    users.push(user);
    res.status(201).send({ message: 'User registered' });
  } catch {
    res.status(500).send({ message: 'Failed to register user' });
  }
});

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

app.get('/dashboard', authenticate, (req, res) => {
  res.send(`Welcome to the dashboard, ${req.user.username}!`);
});

app.listen(3001, () => {
  console.log('Server listening on port 3001');
});
