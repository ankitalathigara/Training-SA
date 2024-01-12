// app.ts
import express from "express";
import { Sequelize } from "sequelize-typescript";
//import { UserController } from './controllers/UserController';
import path from "path";
// import { User } from "./models/user";
// import Category from "./models/category";
// Sequelize configuration
const env = "development";
const configPath = path.join(process.cwd(), "config", "config.json");
const config = require(configPath)[env];
const app = express();
const PORT = 3000;

// Sequelize configuration
const sequelize = new Sequelize({
  ...config,
});

// Sync models with the database
sequelize.sync().then(() => {
  console.log("Database synced");
});

// Routes
//app.get('/users', UserController.getAllUsers);

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
