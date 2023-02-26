const { Activity, Country } = require("../../../db");

const getActivities = async () => {
  return await Activity.findAll({
    include: [{
      model: Country,
      attribute: ["key"],
      through: "Country_Activity",
    }],
  });
};

module.exports = getActivities;
