const router = require("express").Router();
const Feedbacks = require("../models/Feedbacks");
const verify = require("../verifyToken");

//CREATE

router.post("/", async (req, res) => {
   if (true) {
    const newFeedbacks = new Feedbacks(req.body);
    try {
      const savedFeedbacks = await newFeedbacks.save();
      res.status(201).json(savedFeedbacks);
    } catch (err) {
      res.status(500).json(err);
    }
  } else{
    console.log("Error")
  }
});

//DELETE

router.delete("/:id", verify, async (req, res) => {
  if (req.user.isAdmin) {
    try {
      await Feedbacks.findByIdAndDelete(req.params.id);
      res.status(201).json("The feedback has been delete...");
    } catch (err) {
      res.status(500).json(err);
    }
  } else {
    res.status(403).json("You are not allowed!");
  }
});

//GET

router.get("/", verify, async (req, res) => {
    if (req.user.isAdmin) {
      try {
        const feedbacks = await Feedbacks.find();
        res.status(200).json(feedbacks.reverse());
      } catch (err) {
        res.status(500).json(err);
      }
    } else {
      res.status(403).json("You are not allowed!");
    }
  });

module.exports = router;