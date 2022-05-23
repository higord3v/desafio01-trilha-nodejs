const { v4: uuidv4 } = require ('uuid');
const { users } = require ('../inMemory/users')

class CreateUserController {
    async createUser(request, response) {
        const { name, username } = request.body;

        try {
            const newUser = {
                id: uuidv4(),
                username,
                name,
                todos: []
            }

            const usernameExists = users.find(user => user.username === username);
            
            if (usernameExists) {
                return response.status(400).json({error: "Username already exists"})
            }
            users.push(newUser);

            return response.status(201).json(newUser);
        } catch (error) {
            return response.status(500).json({message: error.message})
        }
    }
}

module.exports = new CreateUserController