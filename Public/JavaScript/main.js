let socket = io.connect("http://localhost:4000")

let chat = document.querySelector("#chat");
let name = document.querySelector("#name");
let text = document.querySelector("#text");
let btn = document.querySelector("#btn");
let feedback = document.querySelector("#feedback");

// Passing Data To Server
btn.addEventListener("click" , () => {
    socket.emit("chat" , {
        message : text.value,
        name : name.value
    })
    text.value = "";
})

// Feedback Event
text.addEventListener("keypress" , function() {
    socket.emit("typing" , name.value)
})


socket.on("chat" , (data) => {
    feedback.innerHTML = "";
    chat.innerHTML += `<p> <strong> ${data.name} </strong>:   ${data.message} </p> <hr />`
})

socket.on("typing" , (data) => {
    feedback.innerHTML = `<p><em> ${data}  is typing a message.. .</em></p>`
})