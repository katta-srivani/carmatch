const Car=require("../models/Car");

const seedCars=async(req,res)=>{
    try{
        await Car.deleteMany();
        const cars = await Car.insertMany([
  {
    name: "Creta",
    brand: "Hyundai",
    price: 1500000,
    fuelType: "Petrol",
    familyType: "Family",
    usage: "Mixed",
    strengths: ["Safety", "Comfort"]
  },
  {
    name: "City",
    brand: "Honda",
    price: 1400000,
    fuelType: "Petrol",
    familyType: "Family",
    usage: "City",
    strengths: ["Mileage", "Comfort"]
  },
  {
    name: "Grand Vitara",
    brand: "Maruti Suzuki",
    price: 1600000,
    fuelType: "Hybrid",
    familyType: "Family",
    usage: "Mixed",
    strengths: ["Mileage", "Features"]
  },
  {
    name: "Nexon EV",
    brand: "Tata",
    price: 1700000,
    fuelType: "Electric",
    familyType: "Family",
    usage: "City",
    strengths: ["Safety", "Features"]
  },
  {
    name: "Thar",
    brand: "Mahindra",
    price: 1800000,
    fuelType: "Diesel",
    familyType: "Couple",
    usage: "Highway",
    strengths: ["Performance", "Adventure"]
  },
  {
    name: "Swift",
    brand: "Maruti Suzuki",
    price: 800000,
    fuelType: "Petrol",
    familyType: "Single",
    usage: "City",
    strengths: ["Mileage", "Budget"]
  },
  {
    name: "XUV700",
    brand: "Mahindra",
    price: 2200000,
    fuelType: "Petrol",
    familyType: "Family",
    usage: "Highway",
    strengths: ["Safety", "Features"]
  },
  {
    name: "Tiago",
    brand: "Tata",
    price: 700000,
    fuelType: "Petrol",
    familyType: "Single",
    usage: "City",
    strengths: ["Budget", "Safety"]
  }
]);

res.json({
    success:true,
    message:"cars seeded succesfully",
    count:cars.length

});



    }
    catch(error){
        res.status(500).json({
            success:fals,
            message:"seed failed",
            error: error.message,
        });
    }
}

const getCars = async (req, res) => {
  try {
    const cars = await Car.find();

    res.json({
      success: true,
      count: cars.length,
      cars,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to fetch cars",
      error: error.message,
    });
  }
};

const recommendCars = async (req, res) => {
  try {
    const { budget, familyType, usage, fuelType, priority } = req.body;

    const cars = await Car.find();

    const recommendations = cars.map((car) => {
      let score = 0;

      if (car.price <= budget) score += 20;

      if (car.familyType === familyType) score += 20;

      if (car.usage === usage) score += 20;

      if (car.fuelType === fuelType) score += 20;

      if (car.strengths.includes(priority)) score += 20;

      return {
        ...car.toObject(),
        matchScore: score,
      };
    });

    const topCars = recommendations
      .sort((a, b) => b.matchScore - a.matchScore)
      .slice(0, 3);

    res.json({
      success: true,
      recommendations: topCars,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Recommendation failed",
      error: error.message,
    });
  }
};

module.exports = {
  seedCars,
  getCars,
  recommendCars,
};