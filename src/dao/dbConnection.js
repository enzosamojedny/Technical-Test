import dotenv from "dotenv";
import Airtable from "airtable";
dotenv.config();

Airtable.configure({ apiKey: process.env.AIRTABLE_TOKEN });
const airtable = new Airtable();
const base = airtable.base("appjqKaWles12VuyV");

function connectAirtable(tableNumber) {
  const tableName =
    tableNumber === 1 ? "tblIyz9qLjZw0uPxH" : "tbl0Ina4NQNJwM3Cv";
  return base.table(tableName);
}


export async function getAirtableConnection() {
  try {
    return await connectAirtable(1);
  } catch (error) {
    throw new Error("Could not establish Airtable connection");
  }
}

export async function postAirtableConnection(data) {
  try {
    const table = await getAirtableConnection();
    const response = await table
      .select({
        fields: ["Email", "Password"],
      })
      .firstPage();
    const findUser = response.find((user) => {
      return (
        user.fields?.Email === data.email &&
        user.fields?.Password === data.password
      );
    });

    if (findUser) {
      console.log("User found:", findUser);
    } else {
      throw new Error("user not found")
    }
  } catch (error) {
    throw new Error("Could not post connection");
  }
}

export async function sendFormData(data) {
  try {
    const table = connectAirtable(2);
    const fieldsToPost = {
      "Student": data.student,
      "Hours": data.hours,
      "Description": data.description,
    };

    const response = await table.create([{ fields: fieldsToPost }]);
    console.log(response);
    return response;
  } catch (error) {
    throw new Error("Could not send data");
  }
}
