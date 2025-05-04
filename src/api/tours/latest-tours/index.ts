import { supabase } from '@/utils/supabaseClient';

export const fetchLatestTours = async () => {
  const { data, error } = await supabase
    .from('aveji')
    .select('*')
    .order('created_at', { ascending: false })
    .limit(5);

  if (error) throw new Error(error.message);

  return data;
};
