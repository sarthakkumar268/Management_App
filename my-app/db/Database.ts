import * as SQLite from "expo-sqlite";

export const db = await SQLite.openDatabaseAsync("myapp.db");

export async function initDatabase() {
  await db.execAsync(`
    CREATE TABLE IF NOT EXISTS tasks (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      title TEXT NOT NULL,
      pending NOT NULL DEFAULT 1,
      working NOT NULL DEFAULT 0,
      submit NOT NULL DEFAULT 0,
      deadline  TEXT NOT NULL
    );
  `);
}