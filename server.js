import express from 'express';
import cookieParser from 'cookie-parser';
import dotenv from 'dotenv';
import authRoutes from './routes/auth.js';
import bookRoutes from './routes/books.js';
import { logger } from './middleware/logger.js';
import { authenticate } from './middleware/auth.js';

dotenv.config();
const app = express();

app.use(express.json());
app.use(cookieParser());
app.use(logger);

app.use('/', authRoutes);
app.use('/books', authenticate, bookRoutes);




const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
