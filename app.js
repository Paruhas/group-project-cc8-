require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

// app.use((req, res, next) => {
//   res.status(400).json({ message: "Path not found." });
// });

// app.use(errorMiddleware);
// sequelize.sync({ force: false }).then(() => console.log("DB Sync"));

const port = process.env.PORT || 8000;
app.listen(port, () => console.log(`Server running on port ${port}`));
