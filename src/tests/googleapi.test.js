const googleApi = require('../helpers/googleHelper')


it('GOOGLE API', async () => {
    const result = await googleApi('banco industrial Tecpán Guatemala')
    expect(result).toStrictEqual(
    [
           {
              "business_status": "OPERATIONAL",
              "formatted_address": "1a. Avenida 2-44, zona 2, Tecpán Guatemala, Cdad. de Guatemala 04006",
              "geometry": {
                 "location": {
                    "lat": 14.762636,
                    "lng": -90.99287199999999
                 },
                 "viewport": {
                    "northeast": {
                       "lat": 14.76393927989272,
                       "lng": -90.99158857010727
                    },
                    "southwest": {
                       "lat": 14.76123962010728,
                       "lng": -90.99428822989272
                    }
                 }
              },
              "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/generic_business-71.png",
              "id": "7d9bc7f14a2cdf6de86838095ebe22712fb60c35",
              "name": "Banco Industrial",
              "opening_hours": {
                 "open_now": true
              },
              "place_id": "ChIJJSk8bBBEiYURksJrqSs5dK0",
              "plus_code": {
                 "compound_code": "Q274+3V Tecpán Guatemala",
                 "global_code": "766FQ274+3V"
              },
              "rating": 3,
              "reference": "ChIJJSk8bBBEiYURksJrqSs5dK0",
              "types": [
                 "bank",
                 "finance",
                 "point_of_interest",
                 "establishment"
              ],
              "user_ratings_total": 5
           }
        ]
    );
  });