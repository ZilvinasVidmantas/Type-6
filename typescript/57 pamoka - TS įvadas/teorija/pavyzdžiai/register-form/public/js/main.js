"use strict";
const formSelector = 'login-form';
const form = document.querySelector('#login-form');
if (form === null) {
    throw new Error(`Nerasta forma, pagal selektorių: ${formSelector}`);
}
else {
    form.addEventListener('submit', () => {
        console.log('Pasubmitinta forma');
    });
    const inputs = Array.from(form)
        .filter(x => x.name);
    inputs.forEach(x => {
        x.addEventListener('keyup', (e) => {
            const input = e.target;
            console.log(input.value);
        });
    });
}
//# sourceMappingURL=main.js.map