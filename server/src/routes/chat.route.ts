import { FastifyInstance } from 'fastify';
import ChatController from '../controllers/chat.controller';

export default async function chatRoutes(fastify: FastifyInstance) {
  fastify.get('/chats', { preHandler: [fastify.authenticate] }, ChatController.getAllChats);
  fastify.post('/chats', { preHandler: [fastify.authenticate] }, ChatController.sendMessage);
}
