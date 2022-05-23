class UpdateTodoController {
    async update(request, response) {
        const { todo } = request;
        const { title, deadline } = request.body;

        try {
            todo.title = title;
            todo.deadline = new Date(deadline);
            return response.status(202).json(todo);
        } catch (error) {
            return response.status(500).json({message: error.message})
        }
    }
}

module.exports = new UpdateTodoController