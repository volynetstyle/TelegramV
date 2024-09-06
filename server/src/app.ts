import fastify from 'fastify';
import chatRoutes from './routes/chat.route';
import jwtPlugin from './plugins/jwt';

const app = fastify({ logger: true });

app.register(jwtPlugin);
app.register(chatRoutes);

export default app;
