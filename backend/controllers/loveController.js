const Love = require("../models/Love");

/**
 * GET love data (Public)
 */
exports.getLoveData = async (req, res) => {
  try {
    const data = await Love.findOne();
    res.json(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

/**
 * CREATE / UPDATE love data (Admin)
 */
exports.updateLoveData = async (req, res) => {
  try {
    const updated = await Love.findOneAndUpdate({}, req.body, {
      new: true,
      upsert: true,
    });
    res.json(updated);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

/**
 * SAVE proposal answer (YES / NO)
 */
exports.saveProposalAnswer = async (req, res) => {
  try {
    const { answer } = req.body;

    if (!["YES", "NO"].includes(answer)) {
      return res.status(400).json({ message: "Invalid answer" });
    }

    const updated = await Love.findOneAndUpdate(
      {},
      {
        proposalAnswer: answer,
        proposalAt: new Date(),
      },
      { new: true }
    );

    res.json(updated);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
