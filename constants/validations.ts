import { object, string } from 'yup';

export const signUpSchema = object({
  name: string().min(5, 'El nombre deberá tener mínimo 5 caracteres'),
  lastname: string().min(5, 'El apellido deberá tener mínimo 5 caracteres'),
  phoneNumber: string()
    .min(10, 'Debes ingresar los 10 dígitos')
    .max(10, 'Debes ingresar sólo los 10 dígitos'),
});
