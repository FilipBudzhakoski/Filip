import express from "express";
const router = express.Router();

// Simulated OBD-II data
const sampleData = {
  id: 1,
  status: "OK",
  errorCodes: [],
  mileage: 120000,
  nextService: "Oil change in 2000 km"
};

router.get("/:id", (req, res) => {
  res.json(sampleData);
});

export default router;
