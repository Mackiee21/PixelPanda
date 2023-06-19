const express = require("express");
const path = require("path");
const cors = require("cors");
const { application } = require("express");


const app = express();

//middlewares
app.use(cors());
app.use(express.json());

app.use(express.static(path.join(__dirname, "client", "dist")));

app.get("*", (_, res) => {
    res.sendFile(path.join(__dirname, "./client/dist/index.html"));
})

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => console.log(`listening to port ${PORT}`));