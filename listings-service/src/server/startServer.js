import bodyParser from "body-parser";
import cors from "cors";
import express from "express";

import accessEnv from "#root/helpers/accessEnv";

const PORT = accessEnv("PORT", 7100);

const app = express();

app.use(bodyParser());

app.use(
    cors({
        orgin: (orgin, cb) => cb(null, true),
        credentials: true
    })
);

app.listen(PORT, "0.0.0.0", () => {
    console.info(`listeing service listening on ${PORT}`)
})