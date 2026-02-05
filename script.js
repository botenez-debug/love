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
