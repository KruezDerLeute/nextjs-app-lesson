import React from "react";
import { logout } from "../actions/auth";

function LogoutButton() {
  return (
    <form action={logout}>
      <button
        type='submit'
        className='rounded-md bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700'
      >
        Logout
      </button>
    </form>
  );
}

export default LogoutButton;
