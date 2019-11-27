const router = require("express").Router();
const bookRoutes = require("./books");
const estadoRoutes = require("./estado");
const datosRoutes = require("./datos");

// Book routes
router.use("/books", bookRoutes);
router.use("/datos", datosRoutes);
router.use("/estado", estadoRoutes);

module.exports = router;
