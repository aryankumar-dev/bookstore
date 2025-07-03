import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { v4 as uuidv4 } from 'uuid';
import { readJSON, writeJSON } from '../utils/fileHandler.js';

const USERS_FILE = './data/users.json';

export const register = async (req, res) => {
  const { email, password } = req.body;
  const users = await readJSON(USERS_FILE);

  if (users.find((u) => u.email === email))
    return res.status(400).json({ message: 'User already exists' });

  const hashed = await bcrypt.hash(password, 10);
  const newUser = { id: uuidv4(), email, password: hashed };
  users.push(newUser);
  await writeJSON(USERS_FILE, users);
  res.status(201).json({ message: 'Registered successfully' });
};

export const login = async (req, res) => {
  const { email, password } = req.body;
  const users = await readJSON(USERS_FILE);
  const user = users.find((u) => u.email === email);

  if (!user || !(await bcrypt.compare(password, user.password)))
    return res.status(400).json({ message: 'Invalid credentials' });

  const token = jwt.sign({ id: user.id }, process.env.SECRET_KEY, {
    expiresIn: '1h',
  });

  res.cookie('token', token, {
    httpOnly: true,
    secure: false, 
  }).json({ message: 'Login successful' });
};

export const logout = (req, res) => {
  res.clearCookie('token').json({ message: 'Logged out' });
};
