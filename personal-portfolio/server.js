require("dotenv").config();
const express = require("express");
const router = express.Router();
const cors = require("cors");
const nodemailer = require("nodemailer");
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

const contactEmail = nodemailer.createTransport({
  host: process.env.EMAIL_HOST,
  port: process.env.EMAIL_PORT,
  auth: {
    user: process.env.EMAIL_ADDRESS,
    pass: process.env.EMAIL_PASSWORD,
  },
  tls: {
    rejectUnauthorized: false,
  },
});

contactEmail.verify((error) => {
  if (error) {
    console.log(error);
  } else {
    console.log("Serviço de e-mails iniciado com sucesso!");
  }
});

router.post("/contact", (req, res) => {
  const name = req.body.firstName + req.body.lastName;
  const email = req.body.email;
  const message = req.body.message;
  const phone = req.body.phone;
  const mail = {
    from: name,
    to: process.env.EMAIL_ADDRESS,
    subject: "Contato via Formuário - Portfólio Web",
    html: `<p>Nome: ${name}</p>
           <p>E-mail: ${email}</p>
           <p>Telefone: ${phone}</p>
           <p>Mensagem: ${message}</p>`,
  };
  contactEmail.sendMail(mail, (error) => {
    if (error) {
      res.json(error);
    } else {
      res.json({ code: 200, status: "Mensagem Enviada" });
    }
  });
});
