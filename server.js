const express = require('express')
const app = express()

const PORT = 3000

app.use(express.json())

app.get("/", (req, res) => {
    res.send(`go to "/update" path to update the user info and "/delete" for delete the user`)
})

const users = [
    {id:1,email : "alice@example.com", password : "alice@1234"},
    {id:2,email : "bob@example.com", password : "bob@1234"},
    {id:3,email : "joe@example.com", password : "joe@1234"}
]



app.put("/update", (req, res) => {
    const email = req.query.email;
    const password = req.query.password;
    const user = users.filter((i) => i.email === email)

    const id = user[0].id -1


    if(!user){
        return res.send(`No user found with the email : ${email}`)
    }

    if(!password){
        return res.send("Please enter the new password to update")
    }

    user.password = password;

    users[id].password = password;
    console.log(users)

    res.json(`password updated successfully`)

})

app.delete("/delete",(req, res) => {
   const email = req.query.email;
   const user = users.filter((i) => i.email !== email)
   
   console.log(user)

   res.send("user deleted successfully")

})


app.listen(PORT, () => {
    console.log(`Server is running in the port ${PORT}`)
})