class DoneTodoController {
    async done(request, response) {
        const { todo } = request;

        try {
            todo.done = true;
            return response.status(202).json(todo);
        } catch (error) {
            return response.status(500).json({message: error.message})
        }
    }
}

module.exports = new DoneTodoController