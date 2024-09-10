// controllers/userController.js

import User from '../models/User'; // Adjust path to where your User model is defined

export async function getAllUsers(req, res) {
  try {
    const users = await User.find({});
    res.status(200).json(users);
  } catch (error) {
    console.error('Error fetching users:', error);
    res.status(500).json({ error: 'Failed to load users' });
  }
}

export async function createUser(req, res) {
  try {
    const newUser = new User(req.body); // Ensure req.body contains the necessary fields
    await newUser.save();
    res.status(201).json(newUser);
  } catch (error) {
    console.error('Error creating user:', error);
    res.status(500).json({ error: 'Failed to create user' });
  }
}
