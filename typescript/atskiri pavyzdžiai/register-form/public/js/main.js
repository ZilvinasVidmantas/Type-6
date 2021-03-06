"use strict";
const isEmail = (value) => {
    return /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        .test(String(value).toLowerCase()) ? null : 'Blogas paštas';
};
const exists = (value) => value ? null : 'Privalomas laukas';
const validateForm = (values, validationSchema) => {
    const validationResult = {};
    for (const key in values) {
        const value = values[key];
        if (key in validationSchema) {
            const inputValidationResult = validationSchema[key](value);
            if (inputValidationResult) {
                validationResult[key] = inputValidationResult;
            }
        }
    }
    const errorCount = Object.keys(validationResult).length;
    return errorCount > 0 ? validationResult : null;
};
const values = {
    email: '',
    password: '',
};
const errors = {};
const touched = {};
const validationSchema = {
    email: (value) => exists(value) || isEmail(value),
    password: exists
};
const createUpdateField = (values, errors, validationSchema) => {
    return (e) => {
        const input = e.target;
        const inputName = input.name;
        values[inputName] = input.value;
        const fieldError = validationSchema[inputName](input.value);
        if (fieldError) {
            errors[inputName] = fieldError;
        }
        else {
            delete errors[inputName];
        }
    };
};
const updateField = createUpdateField(values, errors, validationSchema);
const formSelector = '#login-form';
const form = document.querySelector(formSelector);
if (form === null)
    throw new Error(`Nerasta forma, pagal selektorių: ${formSelector}`);
const submitButton = form.querySelector('[type=submit]');
if (submitButton === null)
    throw new Error(`Formoje nėra 'submit' mygtuko`);
submitButton.disabled = true;
const setButtonActivation = () => {
    const hasErrors = Object.keys(errors).length > 0;
    if (hasErrors) {
        submitButton.disabled = true;
        return;
    }
    for (const key in values) {
        const fieldName = key;
        if (!touched[fieldName]) {
            submitButton.disabled = true;
            return;
        }
    }
    submitButton.disabled = false;
};
const inputs = Object.keys(values)
    .map(fieldName => {
    const potentialField = form.querySelector(`input[name=${fieldName}]`);
    if (!potentialField)
        throw new Error(`Nerastas įvesties laukas su 'name="${fieldName}"'`);
    return potentialField;
});
inputs.forEach(input => {
    var _a;
    const inputName = input.name;
    input.value = values[inputName];
    const errorTextElement = document.createElement('small');
    (_a = input.parentElement) === null || _a === void 0 ? void 0 : _a.insertBefore(errorTextElement, input.nextElementSibling);
    input.addEventListener('blur', (e) => {
        updateField(e);
        touched[inputName] = true;
        setButtonActivation();
    });
    input.addEventListener('keyup', (e) => {
        updateField(e);
        const inputError = errors[inputName];
        if (inputError) {
            input.classList.add('is-invalid');
            errorTextElement.className = 'invalid-feedback';
            errorTextElement.innerHTML = inputError;
        }
        else {
            input.classList.remove('is-invalid');
        }
        setButtonActivation();
    });
});
const userDatabase = [
    {
        id: '1',
        email: 'admin@gmail.com',
        password: 'Vilnius123',
        name: 'Veilokas'
    },
    {
        id: '2',
        email: 'user1@gmail.com',
        password: 'Vilnius123',
        name: 'Serbentautas'
    }
];
const login = ({ email, password }) => {
    return userDatabase.find(x => x.email === email && x.password === password);
};
form.addEventListener('submit', (e) => {
    e.preventDefault();
    const user = login(values);
    if (user) {
        console.log('Pavyko prisijungti');
        console.log(user);
    }
    else {
        console.log('Nepavyko prisijungti');
    }
    console.log('Pasubmitinta forma');
});
//# sourceMappingURL=main.js.map