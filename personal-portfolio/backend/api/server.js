require("dotenv").config();

const app = require("./app");

const port = process.env.PORT || 3001

app.listen(port, () => console.info(`Servidor escutando na porta ${port}!`));
