module.exports = function check(str, bracketsConfig) {
  
  

  let res = 0
  let result = str
  let bracket = bracketsConfig.map( el => el.join(''))

 for (let i = 0; i <= bracket.length; i++ ) {
  bracket.forEach( el => {
    while(result.includes(el)){ result = result.replace(el, '')}
  })
 }
 

  
  res = result == '' ? true : false

  return res

}
