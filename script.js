// script.js
const cardTitle = document.getElementById('card-title');
const cardMessage = document.getElementById('card-message');
const ctaButton = document.getElementById('cta');
const titleInput = document.getElementById('title-input');
const messageInput = document.getElementById('message-input');
const ctaInput = document.getElementById('cta-input');
const downloadBtn = document.getElementById('download-btn');
const card = document.getElementById('card');

titleInput.addEventListener('input', () => {
  cardTitle.textContent = titleInput.value || 'Happy Holidays!';
});

messageInput.addEventListener('input', () => {
  cardMessage.textContent = messageInput.value || 'Wishing you a season filled with joy and magic! ✨';
});

ctaInput.addEventListener('input', () => {
  ctaButton.textContent = ctaInput.value || 'Your Call-to-Action';
});

downloadBtn.addEventListener('click', () => {
  html2canvas(card).then(canvas => {
    const link = document.createElement('a');
    link.download = 'greeting-card.png';
    link.href = canvas.toDataURL('image/png');
    link.click();
  });
});
