$(document).ready(function () {
  var mySwiper = new Swiper('.swiper-container', {
    pagination: '.swiper-pagination',
    nextButton: '.swiper-button-next',
    prevButton: '.swiper-button-prev',
    slidesPerView: 3,
    centeredSlides: true,
    spaceBetween: 30,
    loop: true,
    paginationType: 'custom',
    paginationClickable: true,
    paginationCustomRender: function (swiper, current, total) {
      var html = '<div class="text-center tip">'
      for (var i = 0; i < total; i++) {
        if (i === (current + 5) % total || i === (current + 6) % total || i === (current + 7) % total) {
          html += '<img class="st-img" src="image/bluetip.png">'
        } else {
          html += '<img class="st-img" src="image/blacktip.png">'
        }
      }
      html += '</div>'
      return html
    }
  })
})

