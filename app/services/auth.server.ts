import { queries, type User } from "~/db/schema";
import { db, users } from "~/db/schema";
import { sql } from "drizzle-orm";

export async function login(email: string, password: string) {
  // Find user by email
  const [user] = await queries.users.findByEmail(email);

  // No user found or password doesn't match
  if (!user || user.password !== password) {
    return null;
  }

  return user;
}

export async function authenticateUser(email: string, password: string) {
  const [user] = await db
    .select()
    .from(users)
    .where(sql`${users.email} = ${email} AND ${users.password} = ${password}`);

  return user || null;
}

export async function getUserById(id: number): Promise<User | null> {
  const [user] = await queries.users.findById(id);
  return user || null;
}

export async function getUserByEmail(email: string): Promise<User | null> {
  const [user] = await queries.users.findByEmail(email);
  return user || null;
}
