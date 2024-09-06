import { FastifyReply, FastifyRequest } from 'fastify';
import chatService from '../services/chat.service';

class ChatController {
  async getAllChats(req: FastifyRequest, reply: FastifyReply) {
    const chats = await chatService.getAll();
    return reply.send(chats);
  }

  async sendMessage(req: FastifyRequest, reply: FastifyReply) {
    const { message, userId } = req.body as { message: string; userId: number };
    const chat = await chatService.createMessage(userId, message);
    return reply.send(chat);
  }
}

export default new ChatController();
