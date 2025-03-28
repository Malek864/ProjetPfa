require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const adminRoutes = require("./routes/adminRoutes");

const app = express();
app.use(cors());
app.use(express.json());


// Vérifier si la variable MONGO_URI est bien définie
if (!process.env.MONGO_URI) {
    console.error("ERREUR : MONGO_URI non défini dans .env !");
    process.exit(1); // Stopper le serveur si la connexion est impossible
  }

// Connexion à MongoDB
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log(" ✅MongoDB connecté"))
  .catch((err) => console.error(" ❌Erreur MongoDB:", err));

// Routes Admin
app.use("/admin", adminRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Serveur en écoute sur le port ${PORT}`));
