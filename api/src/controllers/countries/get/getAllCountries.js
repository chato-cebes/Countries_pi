const { Country, Activity } = require ('../../../db');

const getAllCountries = async () => {
    return await Country.findAll({
        include: [{
          model: Activity,
          attribute: ["id"],
          through: "Country_Activity",
        }],
    });
};


module.exports= getAllCountries;