const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const connectDB = require("./config/db");
const adminRoutes = require("./routes/adminRoutes");
const performanceRoutes = require("./routes/performanceRoutes");
const studentRoutes = require("./routes/studentRoutes");
// const bodyParser = require("body-parser");

dotenv.config();
connectDB();

const app = express();
app.use(cors());
app.use(express.json());
// app.use(bodyParser.json());

app.use("/api/admin", adminRoutes);
app.use("/api/performance", performanceRoutes);
app.use("/api/student", studentRoutes);


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
