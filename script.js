let output = document.getElementById("output")
console.log(output);

function display (num){
    output.value+= num;
}

function display1 (op){
    output.value
     +=op;

}

function display2(){
    try {
        output.value = eval(output.value)
    } catch (error) {
        alert(error)
    }
}
function display3(){
    output.value = " "
}
function display4(){
    output.value = output.value.slice(0, -1)
}

function display7() {
    if (num < 0) 
          return -1;
    else if (num == 0) 
        return 1;
    else {
        return (num * factorialize(num - 1));
    }
    output.value
  }
