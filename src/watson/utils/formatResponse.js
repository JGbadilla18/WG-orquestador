const actions = require('../actions');

/**
 * Format Response format an standar response from Watson Assistant.
 *
 * @param   {Request}          req - The request html payload from the routes
 * @param   {Response}         res - The response httml to the route
 * @returns {null}
 */
module.exports = async (response) => {
  // return new Promise((resolve, rejected) => {
    const generic = response.result.output.generic;
    const actionsResponse = response.result.output.user_defined && response.result.output.user_defined.actions ? response.result.output.user_defined.actions : [];
    let genericCp = generic;
    let actionsCp = [];

      if (actionsResponse) {
        for (let i = 0; i < actionsResponse.length; i++) {
          action = actionsResponse[i];
          if(action.response_type == "action") {
            googleResponse = await actions[action.action_type](action);
            genericCp.push(...googleResponse)
          }
          
          else if(action.response_index === 0) {
            genericCp = [action, ...genericCp]
          }
          else if(action.response_index > 0) {
            genericCp = [...genericCp.slice(0, action.response_index), action, ...genericCp.slice(action.response_index, genericCp.length + 1)]
          } else {
            genericCp.push(action)
          }
        }
      }
      const formatedResponse = ({
        "components": genericCp,
        "actions": actionsCp,
      })

      return formatedResponse;
}