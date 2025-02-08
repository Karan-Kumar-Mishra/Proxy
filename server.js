import express from "express";
import * as router from "./router/index.js";
import * as middleware from "./middleware/index.js";
import cors from "cors";
import path from "path";
import dotenv from "dotenv";
import { createProxyMiddleware } from 'http-proxy-middleware';
const app = express();
dotenv.config();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(middleware.bodyParserJson);
app.use(middleware.bodyParserUrlencoded);


app.use('/1', createProxyMiddleware({
    target: 'https://jsonplaceholder.typicode.com/todos/1',
    changeOrigin: true,
}));
app.use('/2', createProxyMiddleware({
    target: 'https://jsonplaceholder.typicode.com/todos/2',
    changeOrigin: true,
}));


app.listen(80, () => {
    console.log("Server is running...");
});

