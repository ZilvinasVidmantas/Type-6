// Bendrinių tipų aprašymas
type Validator = (val: string) => null | string

type FormValues = {
  [key: string]: string
}

type ValidationSchema<Values extends FormValues> = {
  [key in keyof Values]: Validator
};

type Errors<Values extends FormValues> = {
  [key in keyof ValidationSchema<Values>]?: string
}

type ValidationResult<Values extends FormValues> = {
  [key in keyof Values]?: string
}

type CreateUpdateField<Values extends FormValues> = (
  values: Values,
  errors: Errors<Values>,
  validationSchema: ValidationSchema<Values>
) => (e: KeyboardEvent) => void;

// Konkrečių tipų aprašymas
type LoginFormValues = {
  email: string,
  password: string,
}

// Bendro naudojimo kintamieji
const isEmail: Validator = (value: string) => {
  return /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    .test(String(value).toLowerCase()) ? null : 'Blogas paštas'
};

const exists: Validator = (value: string) => value ? null : 'Privalomas laukas';

const validateForm = <T extends FormValues>(
  values: T,
  validationSchema: ValidationSchema<T>
): ValidationResult<T> | null => {
  const validationResult: ValidationResult<T> = {};

  for (const key in values) {
    const value = values[key];
    if (key in validationSchema) {
      const inputValidationResult = validationSchema[key](value);
      if (inputValidationResult) {
        validationResult[key] = inputValidationResult
      }
    }
  }

  const errorCount = Object.keys(validationResult).length;
  return errorCount > 0 ? validationResult : null;
}

// Konkretaus sprendimo/atvejo kintamieji
const values: LoginFormValues = {
  email: '',
  password: '',
};
const errors: Errors<LoginFormValues> = {};

const validationSchema: ValidationSchema<LoginFormValues> = {
  email: (value: string) => exists(value) || isEmail(value),
  password: exists
};

const createUpdateField: CreateUpdateField<FormValues> = (values, errors, validationSchema) => {
  return (e: KeyboardEvent) => {
    const input = e.target as HTMLInputElement;
    const inputName = input.name as keyof LoginFormValues;
    values[inputName] = input.value;
    const fieldError = validationSchema[inputName](input.value);
    if (fieldError) {
      errors[inputName] = fieldError;
    } else {
      delete errors[inputName]
    }
  }
}

const updateField = createUpdateField(values, errors, validationSchema);

// Konkretaus sprendimas
const formSelector = '#login-form';
const form = document.querySelector<HTMLFormElement>(formSelector);
if (form === null) throw new Error(`Nerasta forma, pagal selektorių: ${formSelector}`);

const submitButton = form.querySelector<HTMLButtonElement | HTMLInputElement>('[type=submit]');
if (submitButton === null) throw new Error(`Formoje nėra 'submit' mygtuko`);
submitButton.disabled = true;

const inputs = (Object.keys(values) as (keyof LoginFormValues)[])
  .map<HTMLInputElement>(fieldName => {
    const potentialField = form.querySelector<HTMLInputElement>(`input[name=${fieldName}]`);
    if (!potentialField) throw new Error(`Nerastas įvesties laukas su 'name="${fieldName}"'`);
    return potentialField;
  });

inputs.forEach(input => {
  const inputName = input.name as keyof LoginFormValues;
  input.value = values[inputName];
  const errorTextElement = document.createElement('small');
  input.parentElement?.insertBefore(errorTextElement, input.nextElementSibling);
  input.addEventListener('keyup', (e) => {
    updateField(e);
    const inputError = errors[inputName];
    if (inputError) {
      input.classList.add('is-invalid');
      errorTextElement.className = 'invalid-feedback';
      errorTextElement.innerHTML = inputError;
    } else {
      input.classList.remove('is-invalid');
    }
    const hasError = Object.keys(errors).length > 0;
    submitButton.disabled = hasError;
  });
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