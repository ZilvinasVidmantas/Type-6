const formSelector = 'login-form';
const form = document.querySelector<HTMLFormElement>('#login-form');

if (form === null) {
  throw new Error(`Nerasta forma, pagal selektorių: ${formSelector}`);
} else {
  form.addEventListener('submit', () => {
    console.log('Pasubmitinta forma');
  });

  const inputs = (Array.from(form) as (HTMLInputElement | HTMLButtonElement)[])
    .filter(x => x.name) as HTMLInputElement[];

  inputs.forEach(x => {
    x.addEventListener('keyup', (e) => {
      const input = e.target as HTMLInputElement;
      console.log(input.value);
    })
  });
}

// Tiems, kam saule nešvieiča, galite:
/*
  1. Įgalinti funkcionalumą, jog įvedus bet ką į įvesties laukus,
  submit mygtukas pasidaro aktyvus

  2. Validuoti paštą, kad jis būtų validus paštas (SU TYPESCRIPT)

  3. Sukurti dirbtinę duomenų bazę, kurs įvedus teisingus duomenis consolėje būtų atspausdinti: PRISIJUNGTĖTĖ
*/