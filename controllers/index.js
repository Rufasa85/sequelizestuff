const express = require('express');
const router = express.Router();

const apiRoutes = require("./api");
router.use("/api",apiRoutes);
const sessionRoutes = require("./sessionsRoutes")
router.use("/sessions",sessionRoutes)

module.exports = router;