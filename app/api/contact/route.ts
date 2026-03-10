import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: Request) {
  try {
    const { name, phone, message } = (await request.json()) as {
      name?: string;
      phone?: string;
      message?: string;
    };

    if (!name || !phone) {
      return NextResponse.json(
        { ok: false, error: "Не указаны имя или телефон" },
        { status: 400 },
      );
    }

    const toEmail = process.env.CONTACT_TO_EMAIL;

    if (!toEmail) {
      console.error("Переменная окружения CONTACT_TO_EMAIL не задана");
      return NextResponse.json(
        { ok: false, error: "Сервис временно недоступен. Попробуйте позже." },
        { status: 500 },
      );
    }

    const port = Number(process.env.SMTP_PORT) || 465;
    const secure = port === 465;

    const fromAddress = process.env.SMTP_FROM || process.env.SMTP_USER;

    if (!fromAddress) {
      console.error("Не заданы SMTP_FROM и SMTP_USER для отправки писем");
      return NextResponse.json(
        { ok: false, error: "Сервис временно недоступен. Попробуйте позже." },
        { status: 500 },
      );
    }

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port,
      secure,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    await transporter.sendMail({
      from: fromAddress,
      to: toEmail,
      subject: "Новая заявка с сайта по бассейнам",
      text: [
        `Имя: ${name}`,
        `Телефон: ${phone}`,
        message ? `Сообщение: ${message}` : undefined,
      ]
        .filter(Boolean)
        .join("\n"),
    });

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("Ошибка отправки заявки:", error);
    return NextResponse.json(
      { ok: false, error: "Не удалось отправить заявку" },
      { status: 500 },
    );
  }
}

