import { users } from "../data/users";

export async function getUsers() {
  return new Promise((resolve) =>
    setTimeout(() => resolve(users), 300)
  );
}