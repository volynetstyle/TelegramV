

class UserController {
  async login(req: FastifyRequest, reply: FastifyReply) {
    const { username, password } = req.body as { username: string; password: string };

    const user = await userService.login(username, password);
    return reply.send(user);  
  }