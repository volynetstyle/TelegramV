import { pgTable, text, serial, timestamp, integer, jsonb } from 'drizzle-orm/pg-core';

export const chats = pgTable('chats', {
  id: serial('id').primaryKey(),
  title: text('title').notNull(),
  photo: jsonb('photo'),
  participantsCount: integer('participants_count').notNull(),
  date: integer('date').notNull(),
});
