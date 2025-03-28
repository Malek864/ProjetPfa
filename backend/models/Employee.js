const mongoose = require("mongoose");

const EmployeeSchema = new mongoose.Schema({
  name: { type: String, required: true }, // Ajout de required Pour éviter de créer un employé sans nom ni email.
  email: { type: String, unique: true, required: true }, // Ajout email unique Évite la duplication des employés.
  role: { type: String, enum: ["admin", "employé"], default: "employé" }, // Ajout d'un rôle Pour différencier les administrateurs et employés.
  status: { type: String, enum: ["actif", "inactif"], default: "actif" },
  onLeave: { type: Boolean, default: false },
  leaveType: { type: String, enum: ["maladie", "vacances", "autre", "aucun"], default: "aucun" }
});

module.exports = mongoose.model("Employee", EmployeeSchema);
