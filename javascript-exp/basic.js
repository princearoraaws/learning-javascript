function fun1(){
    console.log(`fun1`)
}

//fun1()

let x = ()=>
        {
            console.log(`funX`)
        }
x()

let test = x
console.log(x);
console.log(test);