const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Hello world!");
});

// Roda local só quando executado direto (na Vercel não precisa)
if (require.main === module) {
  app.listen(3000, () => console.log("http://localhost:3000"));
}

module.exports = app;