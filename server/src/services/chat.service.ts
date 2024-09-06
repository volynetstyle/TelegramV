import ChatRepository from '../repositories/chat.repository';

class ChatService {
  async getAll() {
    return ChatRepository.getAll();
  }

  async createMessage(userId: number, message: string) {
    return ChatRepository.create(userId, message);
  }
}

export default new ChatService();
