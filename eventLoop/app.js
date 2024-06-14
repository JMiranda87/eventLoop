//Part 1

let counter = 0;

function recursiveFunc(){
    // if (counter === 100){
    //     return "reach 100"
    // }
    counter++
    console.log(counter)
    recursiveFunc()
}

recursiveFunc()

// Part 2
try {
    recursiveFunc()
} catch (error){
    // console.error("Stack overflow error caught", error)
    console.log("Number of recursive calls before stack overflow :", counter )
}

//Part 3

const result = document.querySelector(".result");
console.log(result);

function isPrime(num) {
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return num > 1;
}

function printPrimeNumbersToNum(num) {
  for (let i = 2; i <= num; i++) {
    if (isPrime(i)) {
      let item = document.createElement("li");
      item.innerText = i;
      result.appendChild(item);
      console.log(result)
    }
  }
}

setTimeout(()=>{
    alert("calculations completed")
},10)
printPrimeNumbersToNum(10000)