// const express = require("express");
// // const path = require("path");
// const mongoose = require("mongoose");
// const morgan = require("morgan");

// const app = express();
// const PORT = process.env.PORT || 3001;

// const apiRoutes = require("./routes/ApiRoutes");

// const MongoClient = require("mongodb").MongoClient;
// const uri =
// 	"mongodb+srv://first-user:helloyou@cluster0-kcg6f.mongodb.net/btsvlives?retryWrites=true&w=majority";
// const client = new MongoClient(uri, { useNewUrlParser: true });
// client.connect(err => {
// 	const collection = client.db("test").collection("devices");
// 	// perform actions on the collection object
// 	client.close();
// });

// // Connect to the Mongo DB
// mongoose.connect(uri || "mongodb://localhost/BTSVLives", {
// 	useNewUrlParser: true,
// 	useUnifiedTopology: true
// });

// mongoose.connection.on("connected", () => {
// 	console.log("Mongoose connected!");
// });

// // const Schema = mongoose.Schema;

// // const videoSchema = new Schema({
// // 	Date: {
// // 		type: Number,
// // 		required: true,
// // 	},
// // 	Title: {
// // 		type: String,
// // 		required: true,
// // 	},
// // 	Link: {
// // 		type: String,
// // 		required: true,
// // 	},
// // 	Members: {
// // 		type: String,
// // 		required: true,
// // 	},
// // });

// // const Video = mongoose.model("Video", videoSchema);

// require("./models/video");

// app.get("/api", (req, res) => {
// 	Video.find({})
// 		.then((data) => {
// 			console.log("data",data)
// 		})
// 		.catch((err) => console.log(err));

// 	res.json(data);
// });


// app.use(express.json());
// app.use(express.urlencoded({ extended: false }));

// if (process.env.NODE_ENV === "production") {
// 	app.use(express.static("client/build"));
// }

// app.use(morgan("tiny"));
// app.use("/api", apiRoutes);


// app.listen(PORT, function() {
// 	console.log(`🌎 ==> API server now on port ${PORT}!`);
// });
