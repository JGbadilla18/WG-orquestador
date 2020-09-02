/**
 * Template Image to send to Whatsapp Twilio API.
 *
 *
 * @param   {Object}          carouselObject - The structure with all the props for the carousel
 * @returns {Object}
 */
module.exports = (imageUrl) => ({
    response_type: 'image',
    mediaUrl: [imageUrl]
})