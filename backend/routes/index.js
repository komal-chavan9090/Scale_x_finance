// routes/data.js
const express = require('express');
const router = express.Router();
const DataModel = require('../models/DataModel');

// Fetch data by token ID
router.get('/data/:tokenId', async (req, res) => {
  const { tokenId } = req.params;

  try {
    const data = await DataModel.findOne({ tokenId });
    if (!data) {
      return res.status(404).json({ error: 'Data not found' });
    }
    res.json(data);
  } catch (error) {
    console.error('Error fetching data:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

module.exports = router;
