const googleApi = require('../../helpers/googleHelper')
const cleanTextInput = require('../../utils/cleanTextInput')
const euclideanDistance = require('../../utils/euclideanDistance')
const CONSTANT = require('./constant');

const fromApiToText = (geometry, formatted_address, opening_hours) => (
    {
        "text": `📍 Direccion: ${formatted_address} \n📞 Telefono: +502 2420 3000 \n✔️ Esta abiero: ${opening_hours.open_now ? 'Si' : 'No'}`,
        "buttons": [
          {
            "url": `https://www.google.com.do/maps/search/Banco+Industrial+${geometry.location.lat},${geometry.location.lng}`,
            "title": "Ver mapa"
          }
        ],
        "buttonType": "web_url",
        "response_type": "button",
      }
)

const matchWithText = (text, condition) => {
  return text.toLowerCase().match(new RegExp(condition, 'gi'))
}

/**
 * 
 * Action to execute Location function
 * 
 * This function is to get near agencies from google maps
 * 
 */
 module.exports = (action) => {
    return new Promise((resolve, rejected) => {
      let list = [];
      if(action.payload && action.payload.length > 0) {
        let cleanText = cleanTextInput(action.payload, action.filter);           
        return googleApi(`Banco Industrial en ", "${cleanText}"`).then(response => {
          if(response && response.length > 0 && response[0] && response.length <= 10 && action.tryCount == 0) {
              const {lat, lng} = response[0].geometry.location;
              response.map(({name, geometry, formatted_address, opening_hours}) => {
                if(matchWithText(name, 'banco industrial') && euclideanDistance(lat, lng, geometry.location.lat, geometry.location.lng) <= 0.03) {
                  list.push(fromApiToText(geometry, formatted_address, opening_hours))
                }
              })
          }   
          else if ( action.tryCount == 1) {
            response.map(({name, geometry, formatted_address, opening_hours}) => {
              if(matchWithText(name, 'banco industrial') && formatted_address && 
              ((action.filter == 'municipio' &&  matchWithText(formatted_address, action.payload) || 
              matchWithText(formatted_address, cleanText)))) {
                list.push(fromApiToText(geometry, formatted_address, opening_hours))
              }
            })
          } else if (action.tryCount == 0) {
              resolve (CONSTANT.LOCATION_TRY_AGAIN_MESSAGE)
          }
          if(list && list.length !== 0) {
              list.push(CONSTANT.LOCATION_SOMETHING_ELSE)
              resolve(list)
          } else {
              resolve(CONSTANT.LOCATION_NOT_FOUND)
          } 
        }).catch(error => {
            rejected({code: 500, description: 'Google Server Error' + error})
        })
      } 
    })
}