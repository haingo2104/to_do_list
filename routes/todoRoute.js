import { Router } from "express";
import { CreateTodo, deleteTodo, home, UpdateTodo, viewTodo } from "../controller/todoController.js";

const todoRoute = Router()
todoRoute.get('/', home)
todoRoute.get('/create', CreateTodo)
todoRoute.get('/view/:id', viewTodo)
todoRoute.get('/delete/:id', deleteTodo)
todoRoute.post('/create', CreateTodo)
todoRoute.get('/update/:id',UpdateTodo)
todoRoute.post('/update/:id', UpdateTodo)

export default todoRoute