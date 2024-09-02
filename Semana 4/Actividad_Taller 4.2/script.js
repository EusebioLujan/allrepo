function checkAge(age){
    if(age >=18){
        return true;
    } else {
        return confirm("Do you have permission from your parents?");
    }
}
let age = prompt("How old are you?",)

checkAge(age)?alert("Access granded"):alert("Access denied")