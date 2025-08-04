const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const { default: axios } = require("axios");
const app = express();
const PORT = process.env.PORT || 3000;

dotenv.config();
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
	res.json({ message: "Server is running" });
});

app.get("/products", async (req, res) => {
	const response = await axios.get("https://dummyjson.com/products");
	res.json(response.data);
});

app.listen(PORT, () => {
	console.log(`Server is running on http://localhost:${PORT}`);
});
