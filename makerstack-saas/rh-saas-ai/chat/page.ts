app.post("/chat", async (req: any) => {
  const { message } = req.body;

  const res = await client.messages.create({
    model: "claude-sonnet-4",
    max_tokens: 800,
    messages: [{ role: "user", content: message }],
  });

  return { role: "assistant", content: res.content };
});