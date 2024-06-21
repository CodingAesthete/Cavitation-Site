import { Link } from 'react-router-dom'

export default function SignUp() {
  return (
    <div className='p-3 max-w-lg mx-auto' >
      <h1 className='text-3xl text-white text-center my-7 font-bold artistic-heading'>Присъединете се!</h1>
      <form className='flex flex-col gap-4'>
        <input
          type='text'
          placeholder='потребителско име'
          className='border p-3 rounded-lg bg-blue-100 placeholder-black placeholder-opacity-75'
          id='username'
        />
        <input
          type='email'
          placeholder='електронна поща'
          className='border p-3 rounded-lg bg-blue-100 placeholder-black placeholder-opacity-75'
          id='email'
        />
        <input
          type='password'
          placeholder='парола'
          className='border p-3 rounded-lg bg-blue-100 placeholder-black placeholder-opacity-75'
          id='password'
        />

        <button
          className='bg-blue-600 text-white p-3 rounded-lg uppercase hover:opacity-95 disabled:opacity-80'
        >
          Регистрирайте се        </button>
      </form>
      <div className='flex gap-2 mt-5 font-bold tracking-wide text-lg bg-blue-50 bg-opacity-80 px-3'>
        <p className='text-violet-700'>Вече имате акаунт?</p>
        <Link to={'/sign-in'}>
          <span className='text-blue-900'>Впишете се</span>
        </Link>
      </div>
    </div>
  )
}