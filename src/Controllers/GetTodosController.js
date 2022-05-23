class GetTodosController {
    async getTodos(request, response) {
        const { user } = request;

        try {
            return response.status(200).json(user.todos);
        } catch (error) {
            return response.status(500).json({message: error.message})
        }
    }
}

module.exports = new GetTodosController