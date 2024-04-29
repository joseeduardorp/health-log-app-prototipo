import { z } from 'zod';
import useSignUpModel from './model';

export type ProfileType = 'patient' | 'caregiver';

export const SignUpDataSchema = z.object({
	name: z.string().min(1, { message: 'Campo obrigatório.' }),
	email: z.string().email({ message: 'Endereço de e-mail inválido.' }),
	password: z.string().min(8, { message: 'Minimo de 8 caracteres.' }),
});

export type SignUpData = z.infer<typeof SignUpDataSchema> & {
	accountType: ProfileType;
};

export interface IResponse {
	status: string;
	user: {
		userId: number;
		profileId: number;
		name: string;
		email: string;
		accountType: ProfileType;
	};
}

export type SignUpViewProps = ReturnType<typeof useSignUpModel>;
