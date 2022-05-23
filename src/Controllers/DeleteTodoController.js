class DeleteTodoController {
    async delete(request, response) {
        const { user } = request;
        const { id } = request.params;
        try {
            const todoIndex = user.todos.findIndex(todo => todo.id === id);
            user.todos.splice(todoIndex, 1);
            return response.status(204).send();
        } catch (error) {
            return response.status(500).json({message: error.message})
        }
    }
}

module.exports = new DeleteTodoController