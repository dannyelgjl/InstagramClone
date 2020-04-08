import Post from "../schemas/Post";

class PostController {
  async index(req, res) {}

  async store(req, res) {
    console.log(req.body);
    return res.json({ ok: true });
  }
}

export default new PostController();
