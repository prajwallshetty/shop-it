import express from "express";

const app = express();

app.get("/api/health", (req, res) => {
    res.json({ status: "OK", message: "sucess" });
});

app.listen(3000, () => console.log("Server is running on port 3000"));