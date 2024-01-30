import {
  getAirtableConnection,
  postAirtableConnection,
  sendFormData,
} from "../dao/dbConnection.js";

export async function getData(req, res, next) {
  try {
    await getAirtableConnection();
    res.status(200).json("success");
  } catch (error) {
    res.status(400).send({ message: error.message });
  }
}

export async function postData(req, res, next) {
  try {
    const data = req.body;
    if (data) {
      await postAirtableConnection(data);
      res.status(200).json("success");
    } else {
      throw new Error("data not received");
    }
    next();
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
}
export async function sendForm(req, res, next) {
  try {
    const data = req.body;
    if (data) {
      await sendFormData(data);
      res.status(200).json("success");
    } else {
      throw new Error("data not received");
    }
    next();
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
}
