app.post("/auth/login", async (req: any) => {
  const { email, password } = req.body;

  const user = await prisma.user.findUnique({ where: { email } });

  if (!user) throw new Error("User not found");

  const valid = await comparePassword(password, user.password);

  if (!valid) throw new Error("Invalid password");

  const token = generateToken(user);

  return { token };
});