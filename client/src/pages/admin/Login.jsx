import React, { useState, useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';
import { Helmet } from 'react-helmet-async';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const { login, isAdmin, loading } = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (isAdmin) {
      navigate('/admin/dashboard');
    }
  }, [isAdmin, navigate]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    try {
      await login(email, password);
    } catch (err) {
      setError('Invalid email or password');
    }
  };

  if (loading) return null;

  return (
    <>
      <Helmet>
        <title>Admin Login | Portfolio</title>
      </Helmet>
      <div className="flex min-h-screen items-center justify-center bg-offWhite dark:bg-darkCharcoal px-6">
        <div className="w-full max-w-md rounded-2xl bg-white dark:bg-black/20 p-8 shadow-xl">
          <h1 className="mb-6 font-heading text-3xl font-bold text-center">Admin Login</h1>
          {error && <p className="mb-4 text-center text-red-500">{error}</p>}
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <div className="flex flex-col gap-1">
              <label className="text-sm font-medium">Email</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="rounded border border-darkCharcoal/20 dark:border-offWhite/20 bg-transparent p-3 focus:border-electricIndigo focus:outline-none"
                required
              />
            </div>
            <div className="flex flex-col gap-1">
              <label className="text-sm font-medium">Password</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="rounded border border-darkCharcoal/20 dark:border-offWhite/20 bg-transparent p-3 focus:border-electricIndigo focus:outline-none"
                required
              />
            </div>
            <button
              type="submit"
              className="mt-4 rounded bg-electricIndigo p-3 font-medium text-white transition-colors hover:bg-electricIndigo/90"
            >
              Sign In
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;


