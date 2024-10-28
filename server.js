import './config/envConfig.js'; 
import express from 'express';
import tasksRouter from './routes/tasks.js';
import sequelize from './config/db.js';

const app = express();  // Create an Express app
app.use(express.json());  // Enable JSON body parsing
app.use('/api/v1', tasksRouter);  // Use the API routes

// Connect to db and synchronize models
sequelize.sync()
  .then(() => {
    console.log('Database connected and synced');
  })
  .catch((err) => {
    console.error('Error connecting to the database:', err);
  });

const PORT = process.env.PORT || 3000;  // Set the port
app.listen(PORT, () => console.log(`Server running on port ${PORT} in ${process.env.NODE_ENV} mode`));  // Start the server