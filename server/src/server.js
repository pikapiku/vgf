const express = require("express")
const { userCreate }  = require("./user.js")
const  { PORT: portNo } = require("./config.js") 

const app = express()

const PORT = parseInt(process.env.PORT || portNo);
const HOST = process.env.IP || 'localhost';

console.log("hey")

app.post("/user/create", async (req, res) => {
    const { connections, pronouns, chioce, description } = req.body;
    try {
        const obj = await userCreate(connections, pronouns, choice, description);
        res.status(200).json(obj);
    } catch (err) {
        res.status(err.status ?? 500).json(err.message ?? '');
    }
})

app.delete("/user/delete", async (req, res) => {
    const { uId } = req.query;
    try {
      const obj = await dmRemove(authUserId, Number(dmId));
      res.status(200).json(obj);
    } catch (err) {
      res.status(err.status ?? 500).json(err.message ?? '');
    }
    res.json("user deleted")
})

app.post("/user/add", async (req, res) => {
    const { uId } = req.body;
    try {
        const obj = await userAddToQueue(authUserId, channelId, uId);
        res.status(200).json(obj);
    } catch (err) {
        res.status(err.status ?? 500).json(err.message ?? '');
    }
})

app.delete("/user/leave", async (req, res) => {
    const { uId } = req.query;
    try {
      const obj = await dmRemove(authUserId, Number(dmId));
      res.status(200).json(obj);
    } catch (err) {
      res.status(err.status ?? 500).json(err.message ?? '');
    }
    res.json("user left")
})

// =============== TROUBLE SHOOTING SERVERS ==================
app.get("/test/showUsers", async (req, res) => {
    try {
        const obj = await usersAll();
        res.status(200).json(obj);
    } catch (err) {
        res.status(err.status ?? 500).json(err.message ?? '');
    }
    res.json("user details provided")
})

app.get("/test/shoInQueue", async (req, res) => {
    try {
        const obj = await usersAll();
        res.status(200).json(obj);
    } catch (err) {
        res.status(err.status ?? 500).json(err.message ?? '');
    }
    res.json("user details provided")
})

app.get("/test/showMatching", async (req, res) => {
    try {
        const obj = await usersAll();
        res.status(200).json(obj);
    } catch (err) {
        res.status(err.status ?? 500).json(err.message ?? '');
    }
    res.json("user details provided")
})




// start server
app.listen(PORT, HOST, () => {
    console.log(`⚡️ Server listening on port ${PORT} at ${HOST}`);
});

  