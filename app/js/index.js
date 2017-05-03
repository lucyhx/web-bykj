$(document).ready(function () {
  var mySwiper = new Swiper('.swiper-container', {
    pagination: '.swiper-pagination',
    nextButton: '.swiper-button-next',
    prevButton: '.swiper-button-prev',
    slidesPerView: 3,
    loop: true,
    paginationType: 'custom',
    paginationClickable: true,
    paginationCustomRender: function (swiper, current, total) {
      var html = '<div class="text-center tip">'
      for (var i = 0; i < total; i++) {
        html += '<img class="st-img" src="image/'
          + ((i === (current - 1 ) % total || i === (current ) % total || i === (current + 1) % total)
            ? 'bluetip.png' : 'blacktip.png') + '">'
      }
      html += '</div>'
      return html
    },
    breakpoints: {
      // when window width is <= 480px
      480: {
        slidesPerView: 1,
        paginationCustomRender: function (swiper, current, total) {
          var html = '<div class="text-center tip">'
          for (var i = 0; i < total; i++) {
            html += '<img class="st-img" src="image/'
              + ((i === (current - 1 ) % total)
                ? 'bluetip.png' : 'blacktip.png') + '">'
          }
          html += '</div>'
          return html
        }
      },
      // when window width is <= 640px
      640: {
        slidesPerView: 2,
        paginationCustomRender: function (swiper, current, total) {
          var html = '<div class="text-center tip">'
          for (var i = 0; i < total; i++) {
            html += '<img class="st-img" src="image/'
              + ((i === (current - 1 ) % total || i === (current ) % total)
                ? 'bluetip.png' : 'blacktip.png') + '">'
          }
          html += '</div>'
          return html
        }
      }
    }
  })
})

