const ratingContent = document.getElementById('rating-content');
const thankYouContent = document.getElementById('thank-you-content');
const submitBtn = document.getElementById('submit-btn');

submitBtn.addEventListener('click', () => {
  ratingContent.classList.toggle('hidden');
  thankYouContent.classList.toggle('hidden');
});
