"use strict";
const formSelector = '#login-form';
const form = document.querySelector(formSelector);
if (form === null)
    throw new Error(`Nerasta forma, pagal selektorių: ${formSelector}`);
const submitButton = form.querySelector('[type=submit]');
if (submitButton === null)
    throw new Error(`Formoje nėra 'submit' mygtuko`);
submitButton.disabled = true;
const validateForm = (inputs) => {
    submitButton.disabled = inputs.some(input => !input.value);
};
const formInputs = Array.from(form.querySelectorAll('input[name]'));
if (formInputs.length === 0)
    throw new Error(`Formoje nėra įvesties laukų su 'name' atributais`);
formInputs.forEach(input => {
    input.addEventListener('keyup', () => validateForm(formInputs));
});
form.addEventListener('submit', () => {
    console.log('Pasubmitinta forma');
});
//# sourceMappingURL=main.js.map