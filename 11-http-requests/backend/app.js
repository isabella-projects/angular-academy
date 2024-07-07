import bodyParser from "body-parser";
import express from "express";

import placesRoutes from "./routes/places.js";
import errorRoutes from "./routes/error.js";

const PORT = process.env.PORT;

const app = express();

app.use(express.static("images"));
app.use(bodyParser.json());

app.use((_req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods", "GET, PUT, DELETE");
    res.setHeader("Access-Control-Allow-Headers", "Content-Type");

    next();
});

app.use(placesRoutes);
app.use(errorRoutes);

app.listen(PORT, () => {
    console.log(`Server is listening at http://localhost:${PORT}`);
}).on("error", (error) => {
    if (error.errno === "EADDRINUSE") {
        console.error(`Port ${PORT} is busy!`);
    } else {
        throw error;
    }
});
