import express from "express";
import routes from "./routes";
import cors from "cors";
import { resolve } from "path";
import { Server } from "http";
import socketio from "socket.io";

import "./database";

class App {
  constructor() {
    this.server = express();
    this.serv = Server(this.server);
    this.io = socketio(this.serv);

    this.middleware();
    this.routes();
  }

  middleware() {
    this.server.use((req, res, next) => {
      req.io = this.io;

      next();
    });
    this.server.use(express.json());
    this.server.use(
      "/files",
      express.static(resolve(__dirname, "..", "uploads", "resized"))
    );
    this.server.use(cors());
  }

  routes() {
    this.server.use(routes);
  }
}

export default new App().server;
