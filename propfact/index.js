$(document).ready(function () {
    $('.slider').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay:true,
        autoplaySpeed:1500,
        arrows:false,
        dots:true
    });
});

function showTab(tabId) {
    document.querySelectorAll('.tab').forEach(tab => tab.classList.remove('active'));
    document.querySelectorAll('.con').forEach(content => content.classList.remove('active'));
    event.target.classList.add('active');
    document.getElementById(tabId).classList.add('active');
  };

  const playBtn = document.getElementById('playBtn');
  const thumbnail = document.getElementById('thumbnail');
  const video = document.getElementById('video');
  
  playBtn.addEventListener('click', () => {
    thumbnail.style.display = 'none';
    playBtn.style.display = 'none';
    video.style.display = 'block';
  
    video.play();
  });