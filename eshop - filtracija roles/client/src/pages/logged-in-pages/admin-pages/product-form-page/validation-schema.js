import * as yup from 'yup';

const validationSchema = yup.object({
  category: yup.string()
    .required('Privaloma kategorija'),
  images: yup.array()
    .min(1, 'Privaloma nors viena nuotrauka')
    .max(5, 'Ne daugiau 5 nuotraukų'),
  properties: yup.array()
    .of(yup.object({
      value: yup.string()
        .required('Privaloma savybė'),
    })),
});

export default validationSchema;
