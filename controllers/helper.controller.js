const allRoutes = require("../data/route.data");
const GetAllRoutes = async (req, res) => {
  try {
    return res.status(200).send({ status: true, data: allRoutes });
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
};

module.exports = { GetAllRoutes };
