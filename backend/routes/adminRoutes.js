const express = require("express");
const router = express.Router();
const Employee = require("../models/Employee");

// Obtenir les KPIs
router.get("/admin/kpis", async (req, res) => {
  try {
    const totalEmployees = await Employee.countDocuments({ status: "actif" });
    const employeesOnLeave = await Employee.countDocuments({ onLeave: true });

    res.json({
      totalEmployees,
      employeesOnLeave,
    });
  } catch (error) {
    res.status(500).json({ message: "Erreur serveur" });
  }
});

module.exports = router;
