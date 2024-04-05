import React from 'react';
import Image from 'next/image';
import { useForm } from 'react-hook-form';

export default function Login() {
  const { register, handleSubmit, errors } = useForm();
  const onSubmit = data => console.log(data);

  return (
    <div className="flex h-screen bg-white dark:bg-gray-800">
      <div className="w-1/2">
        <Image src="/static/images/google.png" alt="Computer" width={500} height={500} />
      </div>
      <div className="w-1/2 flex flex-col justify-center">
        <h2 className="text-3xl font-semibold text-center dark:text-white">ENLYT</h2>
        <form onSubmit={handleSubmit(onSubmit)} className="max-w-md m-auto">
          <input name="email" ref={register({ required: true })} placeholder="Email" className="input input-bordered input-primary w-full max-w-xs" />
          {errors.email && <span>This field is required</span>}
          <input name="password" ref={register({ required: true })} type="password" placeholder="Password" className="input input-bordered input-primary w-full max-w-xs" />
          {errors.password && <span>This field is required</span>}
          <div className="flex justify-between">
            <button type="submit" className="btn btn-primary mt-4">Login</button>
            <a href="/signup" className="mt-5 underline">Don't have an account? Sign up</a>
          </div>
        </form>
      </div>
    </div>
  );
}