"use server";

import { redirect } from "next/dist/server/api-utils";
import axios from "axios";
import { UserType } from "../types/contact";

const API_URL = "http://localhost:3001";

export async function login(formData: FormData) {
  try {
    const response = await axios.get(
      `${API_URL}/users?email=${formData.get("email")}&password=${formData.get("password")}`,
    );
    const user: UserType = response.data[0];
    if (!user) throw new Error("Invalid credentials");
    //set user in the cookies

    redirect("/contact");
  } catch (err) {
    throw new Error("Failed to login");
  }
}

export function logout() {
  redirect("/login");
}
