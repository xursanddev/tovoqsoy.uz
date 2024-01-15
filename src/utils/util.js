import {init} from "@dreamcoder-uzbek/telegramjs";

export function sendMessage(n, t, d) {
    const tg = new init("6544530819:AAF2vfGfWfp9u501ER7Z4W1Ri36ugPZk6Jw", -1002068766009, "HTML");
    // tg.sendMessage(`<b>Yangi xabar keldi: \n\n👤 ISM:</b> \t<code>${n}</code>\n\t<b>📞 Telefon: </b><code>${t}</code>\n\t<b>💬Kommentariya: </b><i>${d}</i>`);
    tg.getUpdates().then(r => console.log(r));
}