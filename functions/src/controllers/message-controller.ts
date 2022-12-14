import {Request, Response} from "express";
import { ChatGPTAPI, getOpenAIAuth } from "chatgpt";
import { ChatResponse } from "../schemas/chat-response";

export async function getMessage(
    req: Request,
    res: Response
): Promise<void> {
  try {
    console.log("ddd----")
    const openAIAuth = await getOpenAIAuth({
      email: process.env.NEXT_PUBLIC_EMAIL,
      password: process.env.NEXT_PUBLIC_PASSWORD,
    });
    const api = new ChatGPTAPI({ ...openAIAuth });
    await api.ensureAuth();

    const conversation = api.getConversation();
    const responseSender = await conversation.sendMessage("requestSender");
    const responseCompany = await conversation.sendMessage("requestCompany");
    const responseSenderMessage = await conversation.sendMessage(
      "requestSenderMessage"
    );

    const chatResponse: ChatResponse = {
      responseSender,
      responseCompany,
      responseSenderMessage,
    };

    res.status(200).json({
      data: chatResponse,
    });
  } catch (e) {
    const error =
      "We're experiencing exceptionally high demand. Please hang tight and try it later.";
    res.status(503).json({
      error: error,
    });
    console.error(error);
  }
}
