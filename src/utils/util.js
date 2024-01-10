import {init} from "@dreamcoder-uzbek/telegramjs";

export function sendMessage(n, t, d) {
    const tg = new init("6899102949:AAHNElkwiUXH-Nau3Ok5z8G5DiXF3rQ9Dzw", -1002131950784, "HTML");
    tg.sendMessage(`<b>Yangi xabar keldi: \n\n👤 ISM:</b> \t<code>${n}</code>\n\t<b>📞 Telefon: </b><code>${t}</code>\n\t<b>💬Kommentariya: </b><i>${d}</i>`);
    // tg.getUpdates().then(r => console.log(r));
}