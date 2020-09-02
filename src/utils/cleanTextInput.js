/**
 * Formar Response format an standar response from Watson Assistant.
 *
 * @param   {Request}          req - The request html payload from the routes
 * @param   {Response}         res - The response httml to the route
 * @returns {null}
 */
module.exports = (response, filter=null) => {
    let output = response
    if(filter) {
        re = new RegExp(filter,"gi")
        output = output.replace(re, '')
        output = `${action.filter} ${output}`;

    }
    console.log(output, filter)
    output = output.replace(/(agencia)|(Agencias)|(agenci)|(agency)|( bi )/gi, "Banco Industrial")
    output = output.replace(/(buenos dias)|(ubicada)|(ubicacion)|(direccion)|(saludos)|(hay)|(Yo)|(cerca)|(cual)|(disculpen)|(estoy)|(necesito)|(tienen)|(miren)|(tendran)|(alguna)|(cierto)|(ustedes)|(Mira)|(\?)|(pagar)|(tarjeta)|(donde)|(encontrar)|(puedo)/gi,'')
    output = output.replace(/ {2,}/, " ")
    return output.replace(/^ +/g, '');
}


