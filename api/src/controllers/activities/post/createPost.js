const { Activity, Country } = require("../../../db");

const createPost = async ( activityName, description, difficulty, time, season, country ) => {
  try {

    if (!activityName|| !description|| !difficulty|| !time|| !season|| !country) throw new Error("Information incomplete")

    const newPost = await Activity.create({
      activityName,
      description,
      difficulty,
      time,
      season,
    });

    const findcountry = await Country.findAll({
      where: {
        name: country,
      },
    });

    newPost.addCountry(findcountry);
    return ("activity created succesfully")

  } catch (error) {
    return { error: error.message };
  }
};

module.exports = createPost;
