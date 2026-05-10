import Fastify from "fastify";
import dotenv from "dotenv";
import cors from "@fastify/cors";

import { authRoutes } from "../auth/auth.route";
import companyRoutes from "./routes/company";
import jobRoutes from "./routes/job";
import candidateRoutes from "./routes/candidate";
import matchRoutes from "./routes/match";

dotenv.config();

const app = Fastify({ logger: true });

// Register CORS
app.register(cors, {
  origin: "*",
  credentials: true,
});

// Register routes
app.register(authRoutes);
app.register(companyRoutes, { prefix: "/company" });
app.register(jobRoutes, { prefix: "/job" });
app.register(candidateRoutes, { prefix: "/candidate" });
app.register(matchRoutes, { prefix: "/match" });

app.listen({ port: 3333 }, () => {
  console.log("🚀 API rodando em http://localhost:3333");
});