const usermodel = require("../Models/usermodel");

exports.createUser = async (req, res, next) => {
  try {
    const { name, age, email, phone_number, gender, user_type } = req.body;

    const UserDoc = new usermodel({
      name,
      age,
      email,
      phone_number,
      gender,
      user_type,
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

exports.getall = async (req, res, next) => {
  try {
    const getAllUser = await usermodel.find({}, { _id: 0 });
    return res.status(200).json({ data: getAllUser });
  } catch (err) {
    return res.status(400).json({ message: err.message });
  }
};

exports.remove = async (req, res, next) => {
  try {
    const { id } = req.params;
    const deleteUser = await usermodel.findByIdAndDelete(id);

    if (!deleteUser) {
      return res.status(404).json({ message: "User Data not Found" });
    } else {
      return res.json({
        message: "User deleted successfully",
        data: deleteUser,
      });
    }
  } catch (err) {
    console.log(err);
    return res.status(500).json({ message: err.message });
  }
};

exports.update = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { name, email, phone_number, gender, user_type } = req.body;

    const updatedObject = {};

    if (name) updatedObject.name = name;
    if (email) updatedObject.email = email;
    if (phone_number) updatedObject.phone_number = phone_number;
    if (gender) updatedObject.gender = gender;
    if (user_type) updatedObject.user_type = user_type;

    const updatedUser = await usermodel.findByIdAndUpdate(id, updatedObject, {
      new: true,
    });

    if (!updatedUser) {
      return res.status(400).json({ error: "User Not Found" });
    }
    return res
      .status(200)
      .json({
        message: "User Details Updated successfully",
        data: updatedUser,
      });
  } catch (err) {
    return res.status(400).json({ message: err.message });
  }
};

exports.getbyid = async (req, res) => {
  try {
    const { id } = req.params;
    const data = await usermodel.findById(id);
    return res.status(200).json({ data });
  } catch (err) {
    return res.status(400).json({ message: err.message });
  }
};



