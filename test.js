

const num=Math.floor(Math.random()*10)+1
let usernum=prompt("enter a number")
let counter=1
while(usernum!=num){
    console.log("ff")
    if(!isNaN(usernum)){
        
        if(usernum>num){
            counter++
            alert("your number is biger")
        }
        else if(usernum<num){
            counter++
            alert("your number is smaller")
        }
    }
    else{
        alert("Nun:(")
    }
    usernum=prompt("enter a number")
}
alert(`you win!! in ${counter} steps`)