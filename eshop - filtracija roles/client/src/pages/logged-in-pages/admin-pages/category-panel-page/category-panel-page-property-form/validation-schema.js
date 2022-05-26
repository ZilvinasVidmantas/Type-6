import * as yup from 'yup';
import { emptyCollectionRef } from './category-panel-page-property-form-configuration';

const validationSchema = yup.object({
  propertiesData: yup.array()
    .of(yup.object({
      name: yup.string()
        .required('Privalomas pavadinimas'),
      type: yup.string()
        .required('Privalomas tipas'),
      collectionRef: yup.string()
        .when('type', {
          is: 'range',
          then: yup.string(),
          otherwise: yup.string().required(),
        }),
      collectionName: yup.string()
        .when(['collectionRef', 'type'], {
          is: (collectionRef, type) => type !== 'range' && collectionRef === emptyCollectionRef,
          then: yup.string().required('Privaloma nauja kolekcija'),
          otherwise: yup.string(),
        }),
    })),
});

export default validationSchema;
