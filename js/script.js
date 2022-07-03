const ratingContent = document.getElementById('rating-content');
const thankYouContent = document.getElementById('thank-you-content');
const submitBtn = document.getElementById('submit-btn');
const ratings = document.querySelectorAll('.rating');

function selectRating(e) {
  this.classList.toggle('selected');
}

function switchContent() {
  ratingContent.classList.toggle('hidden');
  thankYouContent.classList.toggle('hidden');
}

submitBtn.addEventListener('click', () => {
  switchContent();
});

ratings.forEach((rating) => {
  rating.addEventListener('click', selectRating);
});
