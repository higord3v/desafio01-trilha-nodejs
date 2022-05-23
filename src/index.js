const express = require('express');
const cors = require('cors');

// const { v4: uuidv4 } = require('uuid');
const CreateUserController = require('./Controllers/CreateUserController');
const CheckExistsUserAccount = require('./middlewares/CheckExistsUserAccount');
const CheckExistsTodo = require('./middlewares/CheckExistsTodo');
const GetTodosController = require('./Controllers/GetTodosController');
const CreateTodoController = require('./Controllers/CreateTodoController')
const UpdateTodoController = require('./Controllers/UpdateTodoController')
const DoneTodoController = require('./Controllers/DoneTodoController')
const DeleteTodoController = require('./Controllers/DeleteTodoController')
const app = express();

app.use(cors());
app.use(express.json());

app.post('/users', CreateUserController.createUser);
app.get('/todos', CheckExistsUserAccount.check, GetTodosController.getTodos);
app.post('/todos', CheckExistsUserAccount.check, CreateTodoController.createTodo);
app.put('/todos/:id', [CheckExistsUserAccount.check, CheckExistsTodo.check], UpdateTodoController.update);
app.patch('/todos/:id/done', [CheckExistsUserAccount.check, CheckExistsTodo.check], DoneTodoController.done);
app.delete('/todos/:id', [CheckExistsUserAccount.check, CheckExistsTodo.check], DeleteTodoController.delete);

module.exports = app;