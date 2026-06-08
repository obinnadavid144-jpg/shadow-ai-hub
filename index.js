const express = require("express");
const app = express();

app.use(express.json());

let messages = [];

// test route
app.get("/", (req, res) => {
  res.json({ status: "running", app: "Shadow AI Hub" });
});

// SEND TEXT (your "chat system")
app.post("/send", (req, res) => {
  const { user, text } = req.body;

  if (!user || !text) {
    return res.status(400).json({ error: "user and text required" });
  }

  const msg = {
    user,
    text,
    time: new Date().toISOString()
  };

  messages.push(msg);

  res.json({
    status: "sent",
    message: msg
  });
});

// GET ALL MESSAGES
app.get("/messages", (req, res) => {
  res.json({ messages });
});

const PORT = process.env.PORT || 7860;
app.listen(PORT, () => {
  console.log("Server running on port " + PORT);
});
