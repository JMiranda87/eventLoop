
// //Declared
// let counter = 0

// //base case (end our recursive call)

// function recursiveFunc(num=9){
//     if(counter == 1000){
//         console.log(counter)
//         return counter;
//     }
//     //Incrementing it
//     counter++;
//     recursiveFunc();
// }
//                 //End iteration condition
//                             //Incrementing
// //Declared                            
// for(let i = 0 ; i <= 1000 ; i++){

// }

// console.log(recursiveFunc());

let counter = 0;

function recursiveFunc(){
    counter++
    recursiveFunc()
}

try {
    recursiveFunc()
} catch (error){
    // console.error("Stack overflow error caught", error)
    console.log("Number of recursive calls before stack overflow :", counter )
}