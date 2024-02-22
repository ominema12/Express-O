import express from "express";


const app = express();

app.use(express.json());
app.use(cookieParser());
app.listen(8800, () => {
    console.log("Connected!");
  });