export type ProfileType = 'patient' | 'caregiver';

export interface IUserData {
	name: string;
	email: string;
	password: string;
}

export interface ISearchParams {
	profileType: ProfileType;
	userData: IUserData;
}
