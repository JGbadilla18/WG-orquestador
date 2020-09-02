require('dotenv').config({silent: true});

/**
 * Editable file
 * Configuration params, change the variables names
 * with the ones you have in the environment config
 */

// WHATSAPP TWILIO variables
exports.ACCOUNT_SID = process.env.ACCOUNT_SID;
exports.AUTH_TOKEN = process.env.AUTH_TOKEN;