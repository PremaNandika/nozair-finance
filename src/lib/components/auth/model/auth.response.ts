export type UserSession = {
	user: {
		id: string;
		email: string;
	};
	access_token: string;
	refresh_token: string;
};
