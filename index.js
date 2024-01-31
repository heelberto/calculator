//basic math operationss
const add = function(_num1,_num2) {
	return _num1 + _num2;
};

const subtract = function(_num1,_num2) {
	return _num1-_num2;
};

const multiply = function(_num1,_num2) {
	return _num1*_num2;
};

const divide = function(_num1,_num2){
    return _num1 / _num2;
}

let num1 = 0, num2 = 0, operator = "";

const operate = function(_num1,_num2,_operator){
    switch(_operator){
        case "+":
            return add(_num1,_num2);
        case "-":
            return subtract(_num1,_num2);
        case "*":
            return multiply(_num1,_num2);
        case "/":
            return divide(_num1,_num2);
        default:
            alert("Not a supported operator");
    }
}