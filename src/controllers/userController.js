var userService = require('../services/userService');

// Display list of all Users.
exports.getUsers = function(req, res) {
    userService.getUsers().then(users => {
        return res.status(200).json(users);
    }).catch(error => {
        console.error("Not users in the database", error)
        return res.status(500).send("Not users in the database")
    })
};

// Display user details.
exports.getUser = function(req, res) {
    userService.getUserByFacebookId(req.params.id).then(users => {
        return res.status(200).json(users);
    }).catch(error => {
        console.error("Not users in the database", error)
        return res.status(500).send("Not users in the database")
    })
};

// Update user details.
exports.updateUser = function(req, res) {
    userService.getUserByFacebookId(req.params.id, req.body.payload).then(updatedUser => {
        return res.status(200).json(updatedUser);
    }).catch(error => {
        console.error("User not update in the database", error)
        return res.status(500).send("User not update in the database")
    })
};

// Display user create form on GET.
exports.createUser = function(req, res) {
    userService.createUser({
        facebookId: req.body.facebookId,
        sessionId: req.body.sessionId,
        isAuth: req.body.isAuth,
    }).then(createdUser => {
        return res.status(200).json(createdUser);
    }).catch(error => {
        console.error("User not created in the database", error)
        return res.status(500).send("User not created in the database")
    })
};

// Display user delete form on GET.
exports.removeUser = function(req, res) {
    res.send('NOT IMPLEMENTED: User delete GET' + req.params.id);
};
