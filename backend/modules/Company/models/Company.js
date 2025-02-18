const mongoose = require("mongoose");

const companySchema = new mongoose.Schema({
  name: { type: String, required: true },
  domain: { type: String, unique: true, required: true }, // e.g., company.crm.com
  admin: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true }, // Admin who bought CRM
  employees: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }], // All employees under CRM
  createdAt: { type: Date, default: Date.now },
  settingsAndConfig: {
    // e.g., { "theme": "dark", "language": "en", "timezone": "Asia/Kolkata" }
    type: Object,
    default: {},
  },
});

module.exports = mongoose.model("Company", companySchema);
