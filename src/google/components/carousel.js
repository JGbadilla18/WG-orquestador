const Button  = require('./button');

/**
 * Template Carousel to send to Facebook graph API.
 *
 * @param   {Object}          carouselObject - The structure with all the props for the carousel
 * @returns {Object}
 */
const renderCard = (payload) => ({
  body: `*${payload.title}* \n\n${payload.subtitle}${payload.buttons.map(button => Button[button.type](button))}`,
  mediaUrl: [payload.image_url],
}) 


module.exports = (payload) => ({
    response_type: 'card',
    card: payload.map(option => renderCard(option))
})