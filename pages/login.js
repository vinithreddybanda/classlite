import { supabase } from '../lib/supabaseClient';

export default function Login() {
  const handleLogin = async (provider) => {
    const { error } = await supabase.auth.signInWithOAuth({ provider });
    if (error) alert(error.message);
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-3xl font-bold">ClassLite Login</h1>
      <button
        className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        onClick={() => handleLogin('google')}
      >
        Login with Google
      </button>
      <button
        className="mt-2 px-4 py-2 bg-gray-700 text-white rounded hover:bg-gray-800"
        onClick={() => handleLogin('github')}
      >
        Login with GitHub
      </button>
    </div>
  );
}
