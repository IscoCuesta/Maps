const router = require("express").Router();
const datosController = require("../../controllers/datosController");

// Matches with "/api/books"
router.route("/")
  .get(datosController.findAll)
  .post(datosController.create);

// Matches with "/api/books/:id"
router
  .route("/:id")
  .get(datosController.findById)
  .put(datosController.update)
  .delete(datosController.remove);

module.exports = router;
