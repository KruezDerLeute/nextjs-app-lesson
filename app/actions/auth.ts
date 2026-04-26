"use server";

import { redirect } from "next/navigation";
import axios from "axios";
import { UserType } from "../types/contact";

const API_URL = "http://localhost:3001";

export async function login(formData: FormData) {
  let response;
  console.log(formData);

  const email = String(formData.get("email") ?? "")
    .trim()
    .toLowerCase();
  const password = String(formData.get("password") ?? "").trim();

  try {
    response = await axios.get(`${API_URL}/users`);
  } catch (err) {
    console.error("Login request failed:", err);
    throw new Error("Failed to login");
  }

  const user: UserType | undefined = response.data.find(
    (item) => item.email.toLowerCase() === email && item.password === password,
  );
  if (!user) throw new Error("Invalid credentials");
  //set user in the cookies

  redirect("/contact");
}

export async function logout() {
  redirect("/login");
}
