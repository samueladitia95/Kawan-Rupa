"use strict";

const router = require("express").Router();
const { authentication } = require("../middlewares/security");
const EventController = require("../controllers/events");
const UserController = require("../controllers/users");
const TracksController = require("../controllers/tracks");

router.post("/user", UserController.identification);

router.get("/events", EventController.getAll);
router.get("/events/:id/detail", EventController.getOne);

router.use(authentication);

router.get("/tracked", TracksController.getAll);
router.post("/tracked", TracksController.addOne);
router.patch("/tracked/swapped", TracksController.swapOrder);
router.delete("/tracked/:id/delete", TracksController.deleteOne);

module.exports = router;
