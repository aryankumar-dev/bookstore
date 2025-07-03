import jwt from 'jsonwebtoken';
import { readJSON } from '../utils/fileHandler.js';

export const authenticate = async (req, res, next) => {
  const token = req.cookies?.token;

  if (!token) return res.status(401).json({ message: 'Unauthorized' });

  try {
    const decoded = jwt.verify(token, process.env.SECRET_KEY);
    const users = await readJSON('./data/users.json');
    const user = users.find((u) => u.id === decoded.id);
    if (!user) return res.status(401).json({ message: 'User not found' });

    req.user = user;
    next();
  } catch {
    res.status(401).json({ message: 'Invalid token' });
  }
};
