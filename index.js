import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import itemRoutes from "./routes/items.js";
import  cors  from "cors";
import dotenv from "dotenv";


const app = express();
dotenv.config();

app.use(express.urlencoded({limit: '30mb', extended: true})); 
app.use(express.json({limit: '30mb', extended: true}));
app.use(cors());

app.use('/items', itemRoutes);
 

const PORT = process.env.PORT || 5000;


mongoose.connect(process.env.CONNECTION_URL, { useNewUrlParser: true, })
  .then(() => app.listen(PORT, () => console.log(`Server Running on Port: http://localhost:${PORT}`)))
  .catch((error) => console.log(`${error} did not connect`));

