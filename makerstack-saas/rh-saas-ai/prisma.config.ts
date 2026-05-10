import 'dotenv/config';
import { defineConfig } from 'prisma/config';

export default defineConfig({
  /**
   * 📌 Caminho do schema Prisma
   */
  schema: './prisma/schema.prisma',

  /**
   * 📌 Pasta de migrations
   */
  migrations: {
    path: './prisma/migrations',
  },

  /**
   * 📌 Configuração do banco
   */
  datasource: {
    url: "file:./dev.db",
  },

  /**
   * 📌 Engine
   */
  engine: 'classic',
});