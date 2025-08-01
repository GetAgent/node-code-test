const express = require("express");
const app = express();
const port = 3000;

const CANDIDATES = [
  {
    id: "ae588a6b-3545-5714-bfe2-a5c2a65f547a",
    name: "Jimmy Coder",
    skills: ["javascript"],
  },
  {
    id: "ae588a6b-4540-5714-g344-a5c2a65f547a",
    name: "Sam John",
    skills: ["java", "nodejs"],
  },
  {
    id: "ae588a6b-4540-5714-bfe2-g2234grsasd",
    name: "Adam Coder",
    skills: ["es6", "aws", "nodejs", "reactjs"],
  },
  {
    id: "dadsgwerg33-4540-5714-bfe2-a5c2a65f547a",
    name: "Robin Coder",
    skills: ["reactjs", "es6"],
  },
  {
    id: "frvf434344-4540-5714-bfe2-a5c2a65f547a",
    name: "Jimmy Coder",
    skills: ["javascript", "es6", "nodejs", "express"],
  },
  {
    id: "ae588a6b-4540-5714-bfe2-sdvsds22434",
    name: "Henry Coder",
    skills: ["javascript"],
  },
  {
    id: "ae588a6b-24t4-2323-bfe2-a5c2a65f547a",
    name: "Caroline Coder",
    skills: ["javascript", "nodejs", "express", "reactjs", "mongodb"],
  },
  {
    id: "ae588a6b-4540-5335grv-bfe2-a5c2a65f547a",
    name: "Monica Coder",
    skills: ["nodejs", "express"],
  },
  {
    id: "7rrtb56be6-4540-5714-bjy4j79-a5c2a65f547a",
    name: "Elisa Coder",
    skills: ["java", "express"],
  },
  {
    id: "bq4v45v4-4540-5714-vfarfqwe-a5c2a65f547a",
    name: "Matt Coder",
    skills: ["reactjs", "nodejs", "express"],
  },
  {
    id: "h68j7n-4540-5714-bfe2-wetgwvwervwerg",
    name: "Andrew Coder",
    skills: ["express"],
  },
];

// Start the server
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});