import type { AuthRequest } from './model/auth.request';
import type { UserSession } from './model/auth.response';

import { supabase } from '../base/utils/supabase';

const signUpWithEmail = async ({ email, password }: AuthRequest): Promise<UserSession | null> => {
	try {
		const { data, error } = await supabase.auth.signUp({ email, password });
		if (error) throw error;
		return data.session as UserSession;
	} catch (error) {
		console.error('Signup Error:', error);
		return null;
	}
};

const signInWithEmail = async ({ email, password }: AuthRequest): Promise<UserSession | null> => {
	try {
		const { data, error } = await supabase.auth.signInWithPassword({ email, password });
		if (error) throw error;
		return data.session as UserSession;
	} catch (error) {
		console.error('Signup Error:', error);
		return null;
	}
};

const signOut = async (): Promise<boolean> => {
	try {
		const { error } = await supabase.auth.signOut();
		if (error) throw error;
		return true;
	} catch (error) {
		console.error('Logout Error:', error);
		return false;
	}
};

const authService = {
	signUpWithEmail,
	signInWithEmail,
	signOut
};

export default authService;
