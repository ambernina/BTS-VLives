const express = require("express");
// const path = require("path");
const mongoose = require("mongoose");
const morgan = require("morgan");

const app = express();
const PORT = process.env.PORT || 3001;

const apiRoutes = require("./routes/ApiRoutes");

// Connect to the Mongo DB
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/BTSVLives", {
	useNewUrlParser: true,
	useUnifiedTopology: true
});

mongoose.connection.on("connected", () => {
	console.log("Mongoose connected!");
});

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

if (process.env.NODE_ENV === "production") {
	app.use(express.static("client/build"));
}

app.use(morgan("tiny"));
app.use("/api", apiRoutes);

// app.get("/api", (req, res) => {
//   const data = {
//     username: "amber"
//   };
//   res.json(data);
// });

app.listen(PORT, function() {
	console.log(`🌎 ==> API server now on port ${PORT}!`);
});
