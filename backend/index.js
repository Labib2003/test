import express from "express";
import cors from "cors";
import { PrismaClient } from "@prisma/client";

const app = express();

app.use(express.json());
app.use(cors());

const prisma = new PrismaClient();

app.get("/", (_, res) => {
  res.send("Hello from backend");
});

app.get("/count", async (_, res) => {
  const response = await prisma.test.upsert({
    where: { id: 1 },
    update: { count: { increment: 1 } },
    create: { id: 1, count: 1 },
  });
  res.json(response);
});

app.listen(5000, () => console.log("server running"));
