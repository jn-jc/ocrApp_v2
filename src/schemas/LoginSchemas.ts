import * as yup from 'yup';

const loginSchema = yup.object().shape({
  email: yup
    .string()
    .email('Ingrese un correo electronico valido')
    .required('El correo electronico es requerido'),
  password: yup
    .string()
    .required(),
});

export { loginSchema };