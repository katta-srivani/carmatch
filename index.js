const express=require("express");
const cors=require("cors");
const dotenv=require("dotenv");
const connectDB=require("./config/db");
const carRoutes=require("./routes/carRoutes");

dotenv.config();


console.log("OPENROUTER_API_KEY:", process.env.OPENROUTER_API_KEY);
connectDB();

const app=express();

app.use(cors());

app.use(express.json());

app.get("/",(req,res) =>{
    res.json({
        success:true,
        message:"Car match Advisor API is running",
    })
});

app.use("/api", carRoutes);

const PORT=process.env.PORT||5000;
app.listen(PORT, () =>{
    console.log(`server running on port ${PORT}`);
})