const InvariantError = require('../../exceptions/InvariantError');
const { UserPayloadScema } = require('./schema');

const UsersValidator = {
    validateUserPayload: (payload) => {
        const validationResult = UserPayloadScema.validate(payload);

        if (validationResult.error) {
            throw new InvariantError(validationResult.error.message);
        }
    },
};

module.exports = UsersValidator;