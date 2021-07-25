function vertMirror(strng) {
    // Your code
    return strng.split('\n').map(line => line.split('').reverse().join('')).join('\n')
}
function horMirror(strng) {
    // Your code
    return strng.split('\n').reverse().join('\n')

}
function oper(fct, s) {
    // Your code
  return fct(s)
}

var s = 'abcd\nefgh\nijkl\nmnop'
//console.log(oper(horMirror,s))
console.log(oper(vertMirror,s))