const faqmodel = require("../Models/faqmodel");

exports.createFaq = async (req, res, next) => {
  try {
    const { question, answer } = req.body;

    const FaqDoc = new faqmodel({
      question,
      answer,
    });
    await FaqDoc.save();
    return res
      .status(201)
      .json({ message: "Created Successfully", data: FaqDoc });
  } catch (err) {
    return res
      .status(400)
      .json({ error: "Something is Wrong", message: err.message });
  }
};

exports.getall = async (req, res, next) => {
  try {
    const getAllFaq = await faqmodel.find({}, { _id: 0 });
    return res.status(200).json({ data: getAllFaq });
  } catch (err) {
    return res.status(400).json({ message: err.message });
  }
};

exports.remove = async (req, res, next) => {
  try {
    const { id } = req.params;
    const deleteFaq = await faqmodel.findByIdAndDelete(id);

    if (!deleteFaq) {
      return res.status(404).json({ message: "User Data not Found" });
    } else {
      return res.json({
        message: "FAQ deleted successfully",
        data: deleteFaq,
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
    const { question , answer } = req.body;

    const updatedFaq = {};

    if (question) updatedFaq.question = question;
    if (answer) updatedFaq.answer = answer;

    const updatedUser = await faqmodel.findByIdAndUpdate(id, updatedFaq, {
      new: true,
    });

    if (!updatedUser) {
      return res.status(400).json({ error: "User Not Found" });
    }
    return res.status(200).json({
      message: "FAQ Updated successfully",
      data: updatedUser,
    });
  } catch (err) {
    return res.status(400).json({ message: err.message });
  }
};
