

module.exports = (app) => {
    app.get("/" , (req, res) => {
        console.log(res.body)
        res.render("chat")
    })
}