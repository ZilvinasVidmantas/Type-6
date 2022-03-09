const formSelector = '#login-form';
const form = document.querySelector<HTMLFormElement>(formSelector);
if (form === null) throw new Error(`Nerasta forma, pagal selektorių: ${formSelector}`);

const submitButton = form.querySelector<HTMLButtonElement | HTMLInputElement>('[type=submit]');
if (submitButton === null) throw new Error(`Formoje nėra 'submit' mygtuko`);
submitButton.disabled = true;

const validateForm = (inputs: HTMLInputElement[]) => {
  submitButton.disabled = inputs.some(input => !input.value);
}

const formInputs = Array.from(form.querySelectorAll<HTMLInputElement>('input[name]'));
if (formInputs.length === 0) throw new Error(`Formoje nėra įvesties laukų su 'name' atributais`);

formInputs.forEach(input => {
  input.addEventListener('keyup', () => validateForm(formInputs));
});

form.addEventListener('submit', () => {
  console.log('Pasubmitinta forma');
});



// Tiems, kam saule nešvieiča, galite:
/*
  1. Įgalinti funkcionalumą, jog įvedus bet ką į įvesties laukus,
  submit mygtukas pasidaro aktyvus

  2. Validuoti paštą, kad jis būtų validus paštas (SU TYPESCRIPT)

  3. Sukurti dirbtinę duomenų bazę, kurs įvedus teisingus duomenis consolėje būtų atspausdinti: PRISIJUNGTĖTĖ
*/