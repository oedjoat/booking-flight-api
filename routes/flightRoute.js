const router = require("express").Router()
const controller = require("../controllers/flightController")

router.get("/", controller.getFlights)
router.post("/", controller.bookFlight)
router.get("/:id", controller.getFlight)
router.put("/:id", controller.updateFlight)
router.delete("/:id", controller.deleteFlight)

module.exports = router