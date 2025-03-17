const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

// Home route
app.get("/", (req, res) => {
    res.json({ message: "Welcome to the web service!" });
});

// Get user by ID
app.get("/users/:id", (req, res) => {
    res.json({ userId: req.params.id, name: "John Doe" });
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});

