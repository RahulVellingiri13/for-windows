const formmodel = require("../Models/formmodel");

exports.createForm = async (req, res, next) => {
  try {
    const {
      name,
      mobileNumber,
      email,
      country,
      state,
      city,
      pincode,
      address,
    } = req.body;

    const UserDoc = new formmodel({
      name,
      mobileNumber,
      email,
      country,
      state,
      city,
      pincode,
      address,
    });
    await UserDoc.save();
    return res
      .status(201)
      .json({ message: "Created Successfully", data: UserDoc });
  } catch (err) {
    return res
      .status(400)
      .json({ error: "Something is Wrong", message: err.message });
  }
};
