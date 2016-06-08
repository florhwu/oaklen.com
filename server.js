var express = require('express');
var app = express();

//Static routes
app.use(express.static("static"))

//Routes
app.get("/", function(req, res) {
    res.render("")
})

app.listen(process.env.PORT || 8000);
console.log ("SERVING ON PORT 8000");