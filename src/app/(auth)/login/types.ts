import { z } from 'zod';
import useLoginModel from './model';

export type ProfileType = 'patient' | 'caregiver';

export const LoginDataSchema = z.object({
	email: z.string().email({ message: 'Endereço de e-mail inválido.' }),
	password: z.string().min(8, { message: 'Minimo de 8 caracteres.' }),
});

export type LoginData = z.infer<typeof LoginDataSchema> & {
	accountType: ProfileType;
};

export type LoginViewProps = ReturnType<typeof useLoginModel>;
