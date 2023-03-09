require("dotenv").config();

const express = require("express");
const router = express.Router();
const cors = require("cors");
const app = express();
const sibApi = require("sib-api-v3-sdk");

app.use(cors());
app.use(express.json());
app.use("/", router);
app.listen(5000, () => console.log("Servidor inicializado com sucesso!"));

app.post("/subscribe", (req, res) => {
  const { email } = req.body;
  const apikey = process.env.SIB_API_KEY;

  const defaultClient = sibApi.ApiClient.instance;
  const apiKey = defaultClient.authentications["api-key"];
  apiKey.apiKey = apikey;

  const createContact = new sibApi.CreateContact();
  createContact.email = email;
  createContact.listIds = [2];

  const apiInstance = new sibApi.ContactsApi();
  apiInstance.createContact(createContact).then(
    (data) => {
      return res.status(201).json(data);
    },
    (error) => {
      console.log(error);
      return res.status(500).json(error);
    }
  );
});

app.use((err, _req, res, _next) => {
  console.error(err.stack);
  res.status(500).send('Ocorreu um erro na sua aplicação.');
});
