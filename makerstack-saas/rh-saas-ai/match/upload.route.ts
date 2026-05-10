app.register(require("fastify-multipart"));

app.post("/upload", async (req: any) => {
  const file = await req.file();

  const buffer = await file.toBuffer();

  // aqui tu pode usar PDF parser ou mandar direto pra IA
  const text = buffer.toString("utf-8");

  const parsed = await parseCV(text);

  return parsed;
});