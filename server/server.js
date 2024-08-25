const express = require("express");
const app = express();
const cors = require("cors");
const { GoogleGenerativeAI } = require("@google/generative-ai");

//middleware
const googleAI = new GoogleGenerativeAI(process.env.API_KEY)
const model = googleAI.getGenerativeModel({ model : "gemini-1.5-flash"});
app.use(cors());
app.use(express.json());

//API endpoints
app.post("/api/test", async(req, res) => {
    try{
        return res.json({status: 'ok'});
    }
    catch(err){
        console.log(err);
    }
})

app.post("/api/ai", async (req, res) => {
    try {
        const result = await model.generateContent(req.body.content)
        return res.json({ message: result.response.text() });
    } catch (err) {
        console.error(err);
        return res.status(500).json({ error: "Something went wrong" });
    }
});


app.listen(5000, () => {
    console.log("Server is listening to port 5000")
})