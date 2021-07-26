const router = require("express").Router();
const Workout = require("../../model/workout.js");

router.post("/api/workouts", ({ body }, res) => {
  Workout.create(body)
    .then((workout) => {
      res.json(workout);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
});

router.put("/api/workouts/:id", (req, res) => {
  Workout.updateOne({ _id: req.params.id }, { $push: { exercises: req.body } })
    .then((workout) => {
      res.json(workout);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
});

router.get("/api/workouts/", (req, res) => {
  Workout.aggregate([
      {
        $addFields: { totalDuration: { $sum: "$exercises.duration" } },
      },
    ])
    .sort({ date: -1 })
    .then((workout) => {
      res.json(workout);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
});

router.get("/api/workouts/range", (req, res) => {
  Workout.aggregate([
      {
        $addFields: { totalDuration: { $sum: "$exercises.duration" } },
      },
    ])
    .sort({ date: -1 })
    .then((workout) => {
      res.json(workout);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
});

// router.delete ("/api/workouts/",)

module.exports = router;
