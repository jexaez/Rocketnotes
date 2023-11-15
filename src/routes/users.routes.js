const { Router } = require("express")

const UsersController = require("../controllers/UsersController")

const usersRoutes = Router()

const usersController = new UsersController();


function myMiddleware(request, response, next){
    console.log("Voce pasou pelo myMiddleware")
    console.log(request.body.isAdmin)

    if(!request.body.isAdmin){
        return response.json({ message: "user unauthorized" })
    }

    next()
}

usersRoutes.post("/", myMiddleware, usersController.create)

 module.exports = usersRoutes;