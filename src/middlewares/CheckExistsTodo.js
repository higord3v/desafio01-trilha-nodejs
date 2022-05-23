class CheckExistsTodo {
    async check (request, response, next) {
        const { user } = request;
        const { id } = request.params

        const todoExists = user.todos.find(todo => todo.id === id);

        if (!todoExists) {
            return response.status(404).json({error: "Todo does not exists"})
        }

        request.todo = todoExists;
        next();
    }
}

module.exports = new CheckExistsTodo;