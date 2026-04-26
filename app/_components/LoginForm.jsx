"use client";

import React from "react";
import { login } from "../actions/auth";

function LoginForm() {
  return (
    <form action={login} className='space-x-4'>
      <div>
        <label className='block text-sm font-medium text-gray-700' htmlFor=''>
          Email
        </label>
        <input
          type='email'
          name='email'
          placeholder='Enter your email'
          required
          className='mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm p-2 '
        />
        <label className='block text-sm font-medium text-gray-700' htmlFor=''>
          Password
        </label>
        <input
          type='password'
          name='password'
          placeholder='Enter your password'
          required
          className='mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm p-2 '
        />
      </div>
      <button
        type='submit'
        className='mt-3 w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-600'
      >
        Login
      </button>
    </form>
  );
}

export default LoginForm;
