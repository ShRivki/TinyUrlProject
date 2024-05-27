import cors from "cors"
import bodyParser from "body-parser";

import express from 'express'  

import UsersRouter from "./Routers/UsersRouter.js";

import RedirectRouter from "./Routers/RedirectRouter.js";

import LinksRouter from "./Routers/LinksRouter.js";
import connectDB from "./database.js"

connectDB();
const app = express()
app.use(cors());
app.use(bodyParser.json());
//app.use(bodyParser.text());
const port = 3000

app.use('/links',LinksRouter);
app.use('/users', UsersRouter);
app.use('/', RedirectRouter);
app.listen(port, () => {
  console.log(`Example app listening on http://localhost:${port}`)
})

