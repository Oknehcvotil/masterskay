// Read-only setup helper. It never sends messages or changes bot/webhook settings.
const token = process.env.TELEGRAM_BOT_TOKEN?.trim();
if (!token || !/^\d+:[A-Za-z0-9_-]+$/.test(token)) {
  console.error("Заполни TELEGRAM_BOT_TOKEN в .env.local.");
  process.exitCode = 1;
} else {
  try {
    const response = await fetch(
      `https://api.telegram.org/bot${token}/getUpdates`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ timeout: 0, limit: 100 }),
        signal: AbortSignal.timeout(10_000),
      },
    );
    const data = await response.json();
    if (!response.ok || data?.ok !== true || !Array.isArray(data.result)) {
      console.error(
        "Telegram не вернул чаты. Проверь токен. Для бота с webhook используй отдельного нового бота; этот скрипт настройки не меняет.",
      );
      process.exitCode = 1;
    } else {
      const chats = new Map();
      for (const update of data.result) {
        const chat = (update.message || update.my_chat_member)?.chat;
        if (chat)
          chats.set(chat.id, {
            id: chat.id,
            type: chat.type,
            name: chat.title || chat.first_name || "",
          });
      }
      if (!chats.size)
        console.log(
          "Чаты не найдены. Нажми Start в новом боте или отправь ему /start в нужной группе, затем повтори команду.",
        );
      else console.table([...chats.values()]);
    }
  } catch {
    // Error text can include the token-bearing URL. Do not print it.
    console.error("Не удалось связаться с Telegram. Повтори позже.");
    process.exitCode = 1;
  }
}
