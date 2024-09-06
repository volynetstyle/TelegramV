import  db  from '../config/db';
import { chats } from '../schemas/chat.schema';

class ChatRepository {
  async getAll() {
    return db.select().from(chats);
  }

  async create(userId: number, message: string) {
    return db.insert(chats).values({ userId, message }).returning();
  }
}

export default new ChatRepository();
