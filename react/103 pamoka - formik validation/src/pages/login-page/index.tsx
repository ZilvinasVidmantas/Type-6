import React, { useContext } from 'react';
import { useSearchParams } from 'react-router-dom';
import { useFormik, FormikConfig, FormikProps } from 'formik';
import { TextField } from '@mui/material';

import AuthContext from '../../features/auth/auth-context';
import AuthForm from '../../components/auth-form';

type LoginValues = {
  email: string,
  password: string,
};

type LoginFormikConfig = FormikConfig<LoginValues>;
type LoginFormikProps = FormikProps<LoginValues>;

const initialValues: LoginValues = {
  email: '',
  password: '',
};

const validate: LoginFormikConfig['validate'] = ({ email, password }) => {
  const newErrors: LoginFormikProps['errors'] = {};

  if (email === '') newErrors.email = 'Negali būti tuščia';
  if (email.length < 5) newErrors.email = 'Mažiausiai 5 simboliai';

  if (password === '') newErrors.password = 'Negali būti tuščia';
  if (password.length < 5) newErrors.password = 'Mažiausiai 5 simboliai';

  return newErrors;
};

/*
  Pakeiskite validate funkciją yup schema
    * Sukurkite Yup validacijos schemą:
      * https://github.com/jquense/yup
      * https://formik.org/docs/examples/with-material-ui
      * Stuktūra:
        * email:
          * privaloma
          * min 6 simboliai
          * max 32 simboliai
          * turi būti paštas
        * password:
          * min 1 diždioji
          * min 1 mažoji
          * min 1 skaičius
          * min 8 simboliai
          * max 32 simboliai
    * pateikia validacijos schemą useFormik nustatymams
    * Pačią schemą išsaugokite virš komponento
*/

const LoginPage: React.FC = () => {
  const [searchParams] = useSearchParams();
  const { login } = useContext(AuthContext);

  const handleLogin: LoginFormikConfig['onSubmit'] = ({ email, password }) => {
    const nextPage = searchParams.get('next') ?? '/';
    login({ email, password }, nextPage);
  };

  const {
    // Formik savybės - LoginFormikProps
    // -> šiuo metu esančios reikšmės. Pirmo užkrovimo atveju, jos lygios nustatymui initialValues
    values,
    // -> išsaugoti paliesti įvesties laukai. Pirmo užkrovimo metu, tuščias objektas(standartiškai).
    touched,
    // -> išsaugotosklaidos. Pirmo užkrovimo metu, tuščias objektas(standartiškai).
    errors,
    // -> funkcija, kurią reikia uždėti ant įvesties lauko evento onChange. Įvesties laukui BŪTINA nustatyti name savybę, nes pagal name savybę yra keičiamas atitinkamos reikšmės(formik.values)
    handleChange,
    // -> funkcija, kurią reikia uždėti ant įvesties lauko evento onBlur. Įvesties laukui BŪTINA nustatyti 'name' savybę, nes pagal 'name' savybę yra keičiamas atitinkamos palietimo reikšmės(formik.touched)
    handleBlur,
    // -> funkcija, kurią reikia uždėti ant formos onSubmit elemento. Ši funkcija įvykdo e.preventDefault(), patikrina reikšmes naudojant 'validate' nustatymo funkciją ir jei nėra klaidų kviečia 'onSubmit' nustatymo funkciją
    handleSubmit,
  } = useFormik<LoginValues>({
    // Nustatymai - LoginFormikConfig
    // Privalomi nustatymai
    // -> Pradinės reikšmės
    initialValues,
    // -> Funkcija, kuris bus vykdoma, po sėkmingos validacijos. Jei yra klaidų, ši funkcija nevyks.
    onSubmit: handleLogin,
    // Neprivalomi nustatymai
    // -> Tikrina reikšmes ir turi grąžinti tos pačios struktūros OPTIONAL objektą
    validate,
    // -> Nurodoma, ar tikrinti formos reikšmes(formuojant klaidas) pasikeitus bet kuriai formos reikšmei
    // validateOnChange: false, // default -> true
    // -> Nurodoma, ar tikrinti formos reikšmes(formuojant klaidas) įvykus 'onBlur' įvykiui
    // validateOnBlur: false, // default -> true
  });

  return (
    <div>
      <pre style={{
        position: 'fixed', top: 300, left: 50, fontSize: 20,
      }}
      >
        {JSON.stringify({ values, touched, errors }, null, 4)}
      </pre>
      <div style={{ paddingLeft: 300 }}>
        <AuthForm
          formTitle="Login"
          submitText="Login"
          onSubmit={handleSubmit}
        >
          <TextField
            name="email"
            type="email"
            label="Email"
            fullWidth
            value={values.email}
            onChange={handleChange}
            onBlur={handleBlur}
            error={touched.email && Boolean(errors.email)}
            helperText={touched.email && errors.email}
          />
          <TextField
            name="password"
            type="text"
            label="Password"
            fullWidth
            value={values.password}
            onChange={handleChange}
            onBlur={handleBlur}
            error={touched.password && Boolean(errors.password)}
            helperText={touched.password && errors.password}
          />
        </AuthForm>
      </div>
    </div>
  );
};

export default LoginPage;
