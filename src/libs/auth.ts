import { lucia } from "lucia";
import { elysia } from "lucia/middleware";
import { betterSqlite3 } from "@lucia-auth/adapter-sqlite";
import { Database } from "better-sqlite3";

const db = new Database("auth.db");

// Create tables if they don't exist
db.exec(`
    CREATE TABLE IF NOT EXISTS user (
        id TEXT PRIMARY KEY,
        email TEXT UNIQUE,
        username TEXT,
        password TEXT,
        created_at DATETIME,
        updated_at DATETIME
    );
    CREATE TABLE IF NOT EXISTS session (
        id TEXT PRIMARY KEY,
        user_id TEXT REFERENCES user(id),
        expires_at DATETIME
    );
`);

export const auth = lucia({
    adapter: betterSqlite3(db, {
        user: "user",
        session: "session"
    }),
    env: process.env.NODE_ENV === "production" ? "PROD" : "DEV",
    middleware: elysia(),
    sessionCookie: {
        expires: false
    },
    getUserAttributes: (data) =
        return {
            email: data.email,
            username: data.username
        };
    }
});

export type Auth = typeof auth;
