// ⚠️ ВАЖНО: укажи дату начала отношений
// Формат: ГОД, МЕСЯЦ-1, ДЕНЬ, ЧАС, МИНУТА
const startDate = new Date(2025, 1, 1, 18, 30);

function updateTimer() {
    const now = new Date();
    const diff = now - startDate;

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((diff / (1000 * 60)) % 60);

    document.getElementById("timeTogether").innerText =
        `${days} дней ${hours} часов ${minutes} минут`;
}

setInterval(updateTimer, 1000);
updateTimer();

function toggleSecret() {
    const el = document.getElementById("secret");
    el.style.display = el.style.display === "block" ? "none" : "block";
}
const phrases = [
    "Ты — лучшее, что со мной случалось ❤️",
    "Если ты когда нибудь подумаешь о том что я тебя не люблю это нитак знай ",
    "Я люблюююююю тебя моя радость 😊",
    "Ты — мое все!!",
    "С тобой я готов пойти на все милая 💞"
];

function showPhrase() {
    const random = Math.floor(Math.random() * phrases.length);
    document.getElementById("phrase").innerText = phrases[random];
}
document.addEventListener("click", function (e) {
    const heart = document.createElement("div");
    heart.className = "heart";
    heart.innerText = "❤️";

    heart.style.left = e.clientX + "px";
    heart.style.top = e.clientY + "px";

    document.body.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 1500);
});
