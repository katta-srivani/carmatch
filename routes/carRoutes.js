const express=require("express");

const{
    seedCars,
  getCars,
  recommendCars,
}=require("../controllers/carController");

const {explainCar}=require("../controllers/aiController");

const router=express.Router();

router.post("/seed",seedCars);
router.post("/recommend",recommendCars);
router.post("/explain",explainCar);
router.get("/cars",getCars);

module.exports=router;