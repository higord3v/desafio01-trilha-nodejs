const { v4: uuidv4 } = require ('uuid');

class CreateTodoController {
    async createTodo(request, response) {
        const { title, deadline } = request.body;
        const { user } = request
        try {
            const newTodo = {
                id: uuidv4(),
                title,
                done: false,
                deadline: new Date(deadline),
                created_at: new Date()
            }

            user.todos.push(newTodo);
            return response.status(201).json(newTodo);
        } catch (error) {
            return response.status(500).json({message: error.message})
        }
    }
}

module.exports = new CreateTodoController