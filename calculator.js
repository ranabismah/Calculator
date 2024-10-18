var input = document.getElementById('inputBox');
var buttons = document.querySelectorAll('button');
var expression = "";
var buttonArray = buttons;
buttonArray.forEach(function (button) {
    button.addEventListener('click', function (e) {
        var target = e.target;
        if (target.innerHTML === '=') {
            try {
                expression = eval(expression);
                input.value = expression.toString();
            }
            catch (_a) {
                input.value = "Error";
            }
        }
        else if (target.innerHTML === 'AC') {
            expression = "";
            input.value = expression;
        }
        else if (target.innerHTML === 'DEL') {
            expression = expression.substring(0, expression.length - 1);
            input.value = expression;
        }
        else {
            expression += target.innerHTML;
            input.value = expression;
        }
    });
});
