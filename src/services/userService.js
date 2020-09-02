const userModel = require('../models/userModel');

/**
 * Create user in our database
 *
 * @param   {Object}          payload - User attributes.
 * @returns {Object<userModel>}
 */
exports.createUser = (payload) => {
  return userModel.create({...payload, lastUpdate: Date.now()})
}

/**
 * Update user from Facebook with new session_id in the Database.
 *
 * @param   {Object<userModel>}          user - User entry from database.
 * @returns {String}
 */
exports.getUsers = () => {
  return userModel.find()
}

/**
 * Create user in our database
 * Return original false means that will return the updated user instead of the original one.
 * Always update variable lastUpdate
 *
 * @param   {String}          id - Id of user to be updated.
 * @param   {Object}          updatedUser - User attributes to be changed.
 * @returns {Object<userModel>}
 */
exports.updateUser = (id, updatedUser) => {
  return userModel.findByIdAndUpdate(id, {...updatedUser, lastUpdate: Date.now()}, {returnOriginal: false})
}

/**
 * Get User by facebook Id.
 *
 * @param   {String}          facebookId - User facebook id.
 * @returns {Object<userModel>}
 */
exports.getUserByFacebookId = (facebookId) => {
  return new Promise((resolve, rejected) => {
    userModel.findOne({
      facebookId: facebookId
    }).then(user => {
      if(user) {
        resolve(user)
      }
      rejected("User not found")
    }).catch(error => {
      rejected(error);
    })
  })
}

/**
 * Get User by whatsapp Id.
 *
 * @param   {String}          facebookId - User facebook id.
 * @returns {Object<userModel>}
 */
exports.getUserByWhatsappId = (whatsappId) => {
  return new Promise((resolve, rejected) => {
    userModel.findOne({
      whatsappId: whatsappId
    }).then(user => {
      if(user) {
        resolve(user)
      }
      rejected("User not found")
    }).catch(error => {
      rejected(error);
    })
  })
}