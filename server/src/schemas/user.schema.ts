import { pgTable, text, serial, timestamp, boolean, varchar, bigint, integer, jsonb } from 'drizzle-orm/pg-core';

export const users = pgTable('users', {
  id: serial('id').primaryKey(),
  accessHash: bigint('access_hash', { mode: 'number' }),
  firstName: text('first_name'),
  lastName: text('last_name'),
  username: text('username'),
  phone: text('phone'),
  photo: jsonb('photo'),
  status: jsonb('status'), 
  restrictionReason: jsonb('restriction_reason'),  
  botInlinePlaceholder: text('bot_inline_placeholder'),
  langCode: varchar('lang_code', { length: 10 }),
  emojiStatus: jsonb('emoji_status'), 
  usernames: jsonb('usernames'),  
  storiesMaxId: integer('stories_max_id'),
  color: jsonb('color'),  
  profileColor: jsonb('profile_color'),  
  createdAt: timestamp('created_at').defaultNow(),
});
