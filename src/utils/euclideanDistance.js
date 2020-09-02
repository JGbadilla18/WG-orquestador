/**
* Euclidean Distance
* 
* Euclidean distance is the square root of the square diference between each axis (x, y)
*
* @param   {Number}          x - X variable for object 1 (latitude)
* @param   {Number}          x1 - X variable for object 2 (longitude)
* @param   {Number}          y - Y variable for object 1 (latitude)
* @param   {Number}          y1 - Y1 variable for object 2 (longitude)
* @returns {Object}
*/

module.exports = (x,y,x1,y1) => (
    Math.sqrt(Math.pow(x - x1,2) + Math.pow(y - y1,2) )
)