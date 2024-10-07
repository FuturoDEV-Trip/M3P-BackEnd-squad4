const { Router, query } = require("express");
const DashboardController = require("../controllers/DashboardController");

const dashboardRoutes = new Router();

dashboardRoutes.get("/", DashboardController.info);

module.exports = dashboardRoutes;
