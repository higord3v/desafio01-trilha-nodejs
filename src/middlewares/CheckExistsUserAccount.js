const { users } = require('../inMemory/users');

class CheckExistsUserAccount {
    async check (request, response, next) {
        const { username } = request.headers;

        const userExists = users.find(user => user.username === username);

        if (!userExists) {
            return response.status(404).json({error: "User does not exists"})
        }

        request.user = userExists
        next();
    }
}

module.exports = new CheckExistsUserAccount;