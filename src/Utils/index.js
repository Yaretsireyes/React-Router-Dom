/** 
 * this Function
*@param {Array} products cartProduct : Array of Objects
*@returns {numer} Total price
*/
export const totalPrice = (products) => {
    let sum = 0
    products.forEach(product => sum += product.price);
    return sum
} 
