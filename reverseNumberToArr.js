function digitize(n) {
    // console.log(n)
    // //code here
    // var arr = []
    // while(n)
    //   {
    //     let i=0
    //     arr[i] = Math.floor(n % 10)
    //     n = n / 10
    //     console.log(arr[i])
    //     i++
    //   }
    // return arr
    var num = 123456;
var digits = num.toString().split('');
var realDigits = digits.map(Number).reverse()
console.log(realDigits);
  }

  digitize(34597)