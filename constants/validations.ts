import { object, string } from 'yup';

export const signUpSchema = object({
  name: string().min(5, 'El nombre deberá tener mínimo 5 caracteres'),
  lastname: string().min(5, 'El apellido deberá tener mínimo 5 caracteres'),
  phoneNumber: string().min(9, 'Ingresa un número celular válido'),
});
