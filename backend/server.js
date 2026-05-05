const express = require('express');
const os = require('os');
const app = express();

const PORT = 3000;
// We will pass these variables via Terraform later
const REGION = process.env.REGION || 'Default-Region';

app.get('/', (req, res) => {
  res.json({
    message: "Welcome to the High-Availability Store",
    region: REGION,
    container: os.hostname(),
    uptime: process.uptime()
  });
});

app.listen(PORT, () => {
  console.log(`Backend live in ${REGION} on port ${PORT}`);
});