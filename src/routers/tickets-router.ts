import { Router } from "express";
import { authenticateToken } from "@/middlewares";
import { getTicketTypes, getTickets, createTicket } from "@/controllers";

const ticketsRouter = Router();

ticketsRouter
  .all("/*", authenticateToken)
  .get("/tickets/types", getTicketTypes)
  .get("/tickets", getTickets)
  .post("/tickets", createTicket);

export { ticketsRouter };
