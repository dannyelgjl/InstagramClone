import express from "express";
import routes from "./routes";
import cors from "cors";
import { resolve } from "path";
import { Server } from "http";
import socketio from "socket.io";

import "./database";

class App {
  constructor() {
    this.app = express();
    this.server = Server(this.app);
    this.io = socketio(this.server);

    this.middleware();
    this.routes();
  }

  middleware() {
    this.app.use((req, res, next) => {
      req.io = this.io;

      next();
    });

    this.app.use(express.json());
    this.app.use(
      "/files",
      express.static(resolve(__dirname, "..", "uploads", "resized"))
    );
    this.app.use(cors());
  }

  routes() {
    this.app.use(routes);
  }
}

export default new App().server;
