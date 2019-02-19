let express = require("express");
let controller = require("./Controller/controller")
let app = express();

app.set("view engine" , "ejs");
app.use(express.static("./Public"))

controller(app);

app.listen(4000 , () => {
    console.log("Listening To Post 4000")
})