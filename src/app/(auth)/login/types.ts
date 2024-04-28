import { z } from 'zod';

export type ProfileType = 'patient' | 'caregiver';

export const LoginDataSchema = z.object({
	email: z.string().email({ message: 'Endereço de e-mail inválido.' }),
	password: z.string().min(8, { message: 'Minimo de 8 caracteres.' }),
});

export type LoginData = z.infer<typeof LoginDataSchema>;

export interface ILoginResponse {
	status: string;
	user: {
		userId: number;
		profileId: number;
		accountType: ProfileType;
	};
}
