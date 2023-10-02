import { FastifyInstance } from "fastify";
import { z } from "zod";
import { knex } from "../database";
import { randomUUID } from "node:crypto";
import { checkSessionIdExists } from "../middlewares/check-session-id-exists";

//Request body: HTTPs ->
// Cookies <--> formas da gente montar contexto entre requisições

//Unitário: teste na unidde da sua aplicaçaõ
//integração : comunicação entre duas ou mais unidades
//e2e -ponta a ponta : simula um usuário operando na nossa aplicação

// front-end: abre a pagina de login, digite o texto "" no campo com ID email, clique no botão
// back-end: chamadas HTTP, WEBSOCKETS

// Pirâmide de testes: E2E (não dependem de nenhuma tecnologia, não depeendem de arquitetura )
// 2000 testes -> testes E2E => 16 MIN

export async function transactionsRoutes(app: FastifyInstance) {
  // listagem transação
  app.get(
    "/",
    {
      preHandler: [checkSessionIdExists],
    },
    async (req) => {
      const { sessionId } = req.cookies;

      const transactions = await knex("transactions")
        .where("session_id", sessionId)
        .select();

      return { transactions };
    }
  );

  // listagem transação por id
  app.get(
    "/:id",
    {
      preHandler: [checkSessionIdExists],
    },
    async (req) => {
      const getTransactionParamsSchema = z.object({
        id: z.string().uuid(),
      });

      const { id } = getTransactionParamsSchema.parse(req.params);

      const { sessionId } = req.cookies;

      const transaction = await knex("transactions")
        .where("id", id)
        .andWhere("session_id", sessionId)
        .first();
      return { transaction };
    }
  );

  // listagem do amount
  app.get(
    "/summary",
    {
      preHandler: [checkSessionIdExists],
    },
    async (req) => {
      const { sessionId } = req.cookies;

      const summary = await knex("transactions")
        .where("session_Id", sessionId)
        .sum("amount", { as: "amount" })
        .first();

      return { summary };
    }
  );

  // criando transação
  app.post("/", async (req, reply) => {
    const createTransactionsBodySchema = z.object({
      title: z.string(),
      amount: z.number(),
      type: z.enum(["credit", "debit"]),
    });

    const { title, amount, type } = createTransactionsBodySchema.parse(
      req.body
    );

    let sessionId = req.cookies.sessionId;

    if (!sessionId) {
      sessionId = randomUUID();

      reply.cookie("sessionId", sessionId, {
        path: "/",
        maxAge: 1000 * 60 * 60 * 24 * 7,
      });
    }

    await knex("transactions").insert({
      id: randomUUID(),
      title,
      amount: type === "credit" ? amount : amount * -1,
      session_id: sessionId,
    });

    return reply.status(201).send();
  });
}
