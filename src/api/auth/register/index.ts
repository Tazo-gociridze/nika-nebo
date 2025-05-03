import { supabase } from '@/utils/supabaseClient';
import { RegistrationForm } from '../auth.types';

export const register = async (registrationValues: RegistrationForm) => {
  console.log(registrationValues);
  try {
    const { data, error } = await supabase.auth.signUp({
      email: registrationValues.email,
      password: registrationValues.password,
      options: {
        data: {
          username: registrationValues.username,
        },
      },
    });

    if (error) {
      console.error('Registration error:', error);
      throw error;
    }
    const userId = data.user?.id;

    if (userId) {
      const { error: userProfileError } = await supabase.from('user_profiles').insert({
        user_id: userId,
        username: registrationValues.username,
        phone: registrationValues.phone,
        email: registrationValues.email,
      });

      if (userProfileError) {
        console.error('user_profile insert error', userProfileError);
        throw userProfileError;
      }
    }
    console.log(data);
    return data;
  } catch (err) {
    console.error(err);
    throw err;
  }
};
