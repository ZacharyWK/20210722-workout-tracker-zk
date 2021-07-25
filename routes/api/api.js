const router = require("express").Router();
const Workout = require("../../model/workout.js");

router.post("/api/workouts", ({ body }, res) => {
  Workout.create()
    .then(workout => {
      res.json(workout);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});

router.put("/api/workouts/:id", )

router.get("/api/workouts/",)

router.get("/api/workouts/range",)

router.delete("/api/workouts/",)


module.exports = router;
