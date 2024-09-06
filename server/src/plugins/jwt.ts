import { FastifyPluginCallback, FastifyReply, FastifyRequest } from 'fastify';
import fastifyJwt from '@fastify/jwt';

declare module 'fastify' {
  export interface FastifyInstance {
    authenticate: Function;
  }
};

declare module '@fastify/jwt' {
  interface FastifyJWT {
    user: {
      id: number
    };
  }
}


const authPlugin: FastifyPluginCallback = (server, undefined, done) => {
  server.register(fastifyJwt, { secret: process.env.JWT_SECRET || 'secret' });

  server.decorate('authenticate', async (req: FastifyRequest, reply: FastifyReply) => {
    try {
      await req.jwtVerify()
    } catch (error) {
      reply.send(error);
    }
  });

  done();
};

export default authPlugin;