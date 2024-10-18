const input = document.getElementById('inputBox') as HTMLInputElement;
const buttons = document.querySelectorAll('button');

let expression: string = "";

const buttonArray: NodeListOf<HTMLButtonElement> = buttons as NodeListOf<HTMLButtonElement>;
buttonArray.forEach(button => {
    button.addEventListener('click', (e: MouseEvent) => {
        const target = e.target as HTMLButtonElement;

        if (target.innerHTML === '=') {
            try {
                expression = eval(expression); 
                input.value = expression.toString();
            } catch {
                input.value = "Error"; 
            }
        } else if (target.innerHTML === 'AC') {
            expression = "";
            input.value = expression;
        } else if (target.innerHTML === 'DEL') {
            expression = expression.substring(0, expression.length - 1);
            input.value = expression;
        } else {
            expression += target.innerHTML;
            input.value = expression;
        }
    });
});
