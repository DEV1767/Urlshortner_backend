import express from "express";
import userRoutes from "./src/routes/auth.route.js";
import urlroutes from "./src/routes/url.routes.js";

const app = express();

// middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// test route
app.get("/", (req, res) => {
  res.send("Server running");
});

// routes
app.use("/api/users", userRoutes);
app.use("/", urlroutes);

export default app;