let express = require("express");
let controller = require("./Controller/controller");
let socket = require("socket.io");
let app = express();

app.set("view engine" , "ejs");
app.use(express.static("./Public"))

controller(app);

let server = app.listen(process.env.PORT || 4000 , () => {
    console.log("Listening To Post 4000")
})


// Socket Setup
let io = socket(server);

io.on("connection" , (socket) => {
    console.log("Connected To Client Side" + socket.id);


   socket.on('chat', function(data){
    io.sockets.emit('chat', data);
    });


    socket.on('typing', function(data){
    socket.broadcast.emit('typing', data);
});
})