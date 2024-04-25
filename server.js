import dotenv from 'dotenv';
import express from 'express';
import cors from 'cors'
import { dbConnection } from './src/config/dbConfig.js';
import { adminRoutes } from './src/routes/AdminRoutes.js';
const app = express();
app.use(cors());


app.use(express.json());
app.use(express.urlencoded({ extended: true }));


dotenv.config();

app.use("/api/admin", adminRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
  dbConnection()
});