import express from 'express';
import dotenv from 'dotenv';
import connectDB from './config/db.js';
import Note from './models/Note.js';
import noteRoutes from './routes/noteRoutes.js';
import  cors from 'cors';
dotenv.config();

const PORT = process.env.PORT || 3000;

const app = express();
app.use(cors(
    {origin: process.env.FRONTEND_URL || 'http://localhost:5173'} // Replace with your frontend URL}
));

app.use(express.json());                            // parses JSON body
app.use(express.urlencoded({ extended: true }));

app.use("/api/notes", noteRoutes);

connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
}).catch((err) => {
  console.error("Failed to connect to DB:", err);
  process.exit(1);
});