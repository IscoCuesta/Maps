const router = require("express").Router();
const estadoController = require("../../controllers/estadoController");

// Matches with "/api/estado"
router.route("/")
  .get(estadoController.findAll)
  .post(estadoController.create);

// Matches with "/api/books/:id"
router
  .route("/:id")
  .get(estadoController.findById)
  .put(estadoController.update)
  .delete(estadoController.remove);

module.exports = router;
