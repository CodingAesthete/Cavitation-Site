import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

export default function SignUp() {
  const [formData, setFormData] = useState({});
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value
    })
  };

  console.log(formData);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);

      const res = await fetch('/api/auth/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      })

      const data = await res.json();

      if (data.success === false) {
        setLoading(false);
        setError(data.message);
        return;
      }
      setLoading(false);
      setError(null);
      navigate('/sign-in');

    } catch (error) {
      setLoading(false);
      setError(error.message);
    }
  }
  return (
    <div className='p-3 max-w-lg mx-auto' >
      <h1 className='text-3xl text-white text-center my-7 font-bold artistic-heading'>Присъединете се!</h1>
      <form onSubmit={handleSubmit} className='flex flex-col gap-4'>
        <input
          type='text'
          placeholder='потребителско име'
          className='border p-3 rounded-lg bg-blue-100 placeholder-black placeholder-opacity-75'
          id='username'
          onChange={handleChange}
        />
        <input
          type='email'
          placeholder='електронна поща'
          className='border p-3 rounded-lg bg-blue-100 placeholder-black placeholder-opacity-75'
          id='email'
          onChange={handleChange}
        />
        <input
          type='password'
          placeholder='парола'
          className='border p-3 rounded-lg bg-blue-100 placeholder-black placeholder-opacity-75'
          id='password'
          onChange={handleChange}
        />

        <button disabled={loading}
          className='bg-blue-600 text-white p-3 rounded-lg uppercase hover:opacity-95 disabled:opacity-80'
        >
          {loading ? 'Зареждане...' : 'Регистрирайте се'}
        </button>
      </form>
      <div className='flex gap-2 mt-5 font-bold tracking-wide text-lg bg-blue-50 bg-opacity-80 px-3'>
        <p className='text-violet-700'>Вече имате акаунт?</p>
        <Link to={'/sign-in'}>
          <span className='text-blue-900'>Впишете се</span>
        </Link>
      </div>
      {error && <p>{error}</p>}
    </div>
  )
}