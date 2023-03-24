const express = require('express');
const router = express.Router();
const User = require('./models/users');

router.put('/users/:id', async (req, res) => {
  const { id } = req.params;
  const { username, password } = req.body;

  try {
    const updatedUser = await User.findByIdAndUpdate(id, { username, password }, { new: true });

    if (!updatedUser) {
      return res.status(404).json({ message: 'User not found' });
    }

    res.status(200).json(updatedUser);
  } catch (error) {
    console.error(error);
    res.status(500).send({ message: 'Failed to update user' });
  }
});

module.exports = router;

