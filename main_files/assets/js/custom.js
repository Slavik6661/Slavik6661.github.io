/*-----------------------------------------------------------------------------------

    Template Name: Madula

    Note: This is Custom Js file

-----------------------------------------------------------------------------------

    [Table of contents]

      01. mobile-nav
      02. search-box
      03. countNum
      04. accordion-item
      05. circular progress bar
      06. scrollTop
      07. services-slider
      08. review-slider
      09. brand-slide
      10. dental-project-slide
      11. reviewtwo-slider
      12. swiper-review-two-img
      13. swiper-review-two
      14. image-slider
      15. progress bar
      16. lightbox

-----------------------------------------------------------------------------------*/

jQuery(document).ready(function ($) {
  /* 01. mobile-nav */
  $(".mobile-nav .menu-item-has-children").on("click", function (event) {
    $(this).toggleClass("active");
    event.stopPropagation();
  });

  $("#mobile-menu").click(function () {
    $(this).toggleClass("open");
    $("#mobile-nav").toggleClass("open");
  });

  $("#desktop-menu").click(function () {
    $(this).toggleClass("open");
    $(".desktop-menu").toggleClass("open");
  });

  $("#res-cross").click(function () {
    $("#mobile-nav").removeClass("open");
    $("#mobile-menu").removeClass("open");
  });
});
/*** 02. search-box  ***/
if (jQuery(".search-box-outer").length) {
  jQuery(".search-box-outer").on("click", function () {
    jQuery("body").addClass("search-active");
  });
  jQuery(".close-search").on("click", function () {
    jQuery("body").removeClass("search-active");
  });
}

/* 03. countNum */
function inVisible(element) {
  var WindowTop = $(window).scrollTop();
  var WindowBottom = WindowTop + $(window).height();
  var ElementTop = element.offset().top;
  var ElementBottom = ElementTop + element.height();
  if (ElementBottom <= WindowBottom && ElementTop >= WindowTop)
    animate(element);
}

function animate(element) {
  if (!element.hasClass("ms-animated")) {
    var maxval = element.data("max");
    var html = element.html();
    element.addClass("ms-animated");
    $({
      countNum: element.html(),
    }).animate(
      {
        countNum: maxval,
      },
      {
        duration: 5000,
        easing: "linear",
        step: function () {
          element.html(Math.floor(this.countNum) + html);
        },
        complete: function () {
          element.html(this.countNum + html);
        },
      }
    );
  }
}
$(function () {
  $(window).scroll(function () {
    $("h2[data-max]").each(function () {
      inVisible($(this));
    });
  });
});

function inVisible(element) {
  var WindowTop = $(window).scrollTop();
  var WindowBottom = WindowTop + $(window).height();
  var ElementTop = element.offset().top;
  var ElementBottom = ElementTop + element.height();
  if (ElementBottom <= WindowBottom && ElementTop >= WindowTop)
    animate(element);
}

function animate(element) {
  if (!element.hasClass("ms-animated")) {
    var maxval = element.data("max");
    var html = element.html();
    element.addClass("ms-animated");
    $({
      countNum: element.html(),
    }).animate(
      {
        countNum: maxval,
      },
      {
        duration: 5000,
        easing: "linear",
        step: function () {
          element.html(Math.floor(this.countNum) + html);
        },
        complete: function () {
          element.html(this.countNum + html);
        },
      }
    );
  }
}
$(function () {
  $(window).scroll(function () {
    $("h2[data-max]").each(function () {
      inVisible($(this));
    });
  });
});

// end

/* 04. accordion-item */

$(".accordion-item .heading").on("click", function (e) {
  e.preventDefault();

  if ($(this).closest(".accordion-item").hasClass("active")) {
    $(".accordion-item").removeClass("active");
  } else {
    $(".accordion-item").removeClass("active");

    $(this).closest(".accordion-item").addClass("active");
  }
  var $content = $(this).next();
  $content.slideToggle(100);
  $(".accordion-item .content").not($content).slideUp("fast");
});

// end

/* 05. circular progress bar */

{
  function animateElements() {
    $(".progressbar").each(function () {
      var elementPos = $(this).offset().top;
      var topOfWindow = $(window).scrollTop();
      var percent = $(this).find(".circle").attr("data-percent");
      var percentage = parseInt(percent, 10) / parseInt(100, 10);
      var animate = $(this).data("animate");
      if (elementPos < topOfWindow + $(window).height() - 10 && !animate) {
        $(this).data("animate", true);
        $(this)
          .find(".circle")
          .circleProgress({
            startAngle: -Math.PI / 2,
            value: percent / 100,
            size: 150,
            thickness: 8,
            emptyFill: "#5454FF10",
            fill: {
              color: "#07c2eb",
            },
          })
          .on(
            "circle-animation-progress",
            function (event, progress, stepValue) {
              $(this)
                .find("div")
                .text((stepValue * 100).toFixed() + "%");
            }
          )
          .stop();
      }
    });
  }

  // Show animated elements
  animateElements();
  $(window).scroll(animateElements);
}

$(document).ready(function () {
  progress_bar();
});

function progress_bar() {
  var speed = 30;
  var items = $(".progress_bar").find(".progress_bar_item");

  items.each(function () {
    var item = $(this).find(".progress");
    var itemValue = item.data("progress");
    var i = 0;
    var value = $(this);

    var count = setInterval(function () {
      if (i <= itemValue) {
        var iStr = i.toString();
        item.css({
          width: iStr + "%",
        });
        value.find(".item_value").html(iStr + "%");
      } else {
        clearInterval(count);
      }
      i++;
    }, speed);
  });
}

/* 06. scrollTop */
function scrollTopPercentage() {
  const scrollPercentage = () => {
    const scrollTopPos = document.documentElement.scrollTop;
    const calcHeight =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;
    const scrollValue = Math.round((scrollTopPos / calcHeight) * 100);
    const scrollElementWrap = $("#scroll-percentage");

    scrollElementWrap.css(
      "background",
      `conic-gradient( #fff ${scrollValue}%, #58CBF2 ${scrollValue}%)`
    );

    // ScrollProgress
    if (scrollTopPos > 100) {
      scrollElementWrap.addClass("active");
    } else {
      scrollElementWrap.removeClass("active");
    }

    if (scrollValue < 99) {
      $("#scroll-percentage-value").text(`${scrollValue}%`);
    } else {
      $("#scroll-percentage-value").html(
        '<i class="fa-solid fa-arrow-up-long"></i>'
      );
    }
  };
  window.onscroll = scrollPercentage;
  window.onload = scrollPercentage;
  // Back to Top
  function scrollToTop() {
    document.documentElement.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }
  $("#scroll-percentage").on("click", scrollToTop);
}
scrollTopPercentage();

if (typeof Swiper !== "undefined") {
  /* 07. services-slider */
  var swiper = new Swiper(".services-slider", {
    slidesPerView: 4,
    spaceBetween: 0,
    loop: true,
    speed: 1000,
    freeMode: true,
    autoplay: {
      delay: 2000,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
      10: {
        slidesPerView: 1,
      },
      556: {
        slidesPerView: 2,
      },
      992: {
        slidesPerView: 3,
      },
      1200: {
        slidesPerView: 4,
      },
    },
  });
  /* 08. review-slider */
  var swiper = new Swiper(".review-slider", {
    slidesPerView: 2,
    spaceBetween: 160,
    loop: true,
    speed: 1000,
    freeMode: true,
    autoplay: {
      delay: 2000,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
      10: {
        slidesPerView: 1,
      },
      992: {
        slidesPerView: 2,
      },
    },
  });
  /* 09. brand-slide */
  var swiper = new Swiper(".brand-slide", {
    slidesPerView: 4,
    spaceBetween: 30,
    loop: true,
    speed: 1000,
    freeMode: true,
    autoplay: {
      delay: 2000,
    },
    breakpoints: {
      10: {
        slidesPerView: 1,
      },
      480: {
        slidesPerView: 2,
      },
      768: {
        slidesPerView: 3,
      },
      992: {
        slidesPerView: 4,
      },
      1200: {
        slidesPerView: 6,
      },
    },
  });

  /* 10. dental-project-slide */

  var swiper = new Swiper(".dental-project-slide", {
    slidesPerView: 3,
    spaceBetween: 22,
    loop: true,
    speed: 1000,
    freeMode: true,
    autoplay: {
      delay: 2000,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
      10: {
        slidesPerView: 1,
      },
      992: {
        slidesPerView: 2,
      },
      1200: {
        slidesPerView: 3,
      },
    },
  });

  /* 11. reviewtwo-slider */

  var swiper = new Swiper(".reviewtwo-slider", {
    slidesPerView: 3,
    spaceBetween: 24,
    loop: true,
    centeredSlides: true,
    speed: 2000,
    freeMode: true,
    autoplay: {
      delay: 2000,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
      10: {
        slidesPerView: 1,
      },
      556: {
        spaceBetween: 20,
      },
      992: {
        slidesPerView: 2,
      },
      1200: {
        slidesPerView: 3,
      },
    },
  });

  /* 12. swiper-review-two-img */

  var swiper = new Swiper(".swiper-review-two-img", {
    spaceBetween: 10,
    slidesPerView: 3,
    freeMode: true,
    watchSlidesProgress: true,
  });

  /* 13. swiper-review-two*/

  var swiper2 = new Swiper(".swiper-review-two", {
    spaceBetween: 10,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    thumbs: {
      swiper: swiper,
    },
  });

  /* 14. image-slider */

  var swiper = new Swiper(".image-slider", {
    slidesPerView: 1,
    spaceBetween: 0,
    loop: true,
    speed: 1000,
    freeMode: true,
    autoplay: {
      delay: 2000,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
}

/* 15. progress bar */

if ($(".progress-bar").length) {
  $(window).on("scroll", function () {
    let scroll = $(window).scrollTop();
    let oTop = $(".progress-bar").offset().top - window.innerHeight;
    if (scroll > oTop) {
      $(".progress-bar").addClass("progressbar-active");
    }
  });
}

/* 16. lightbox */
var boxWidth = $("#lightbox").width();
$(".white_content").animate({
  opacity: 0,
  width: 0,
  left: -10000,
});
$("#close").on("click", function () {
  $(".white_content").animate({
    opacity: 0,
    width: 0,
    left: -1000,
  });
});
$("#show").on("click", function () {
  $(".white_content").animate({
    opacity: 1,
    width: 500,
    left: 0,
  });
  $("#overlay").animate({
    opacity: 1,
    width: boxWidth,
    left: 0,
  });
});

/* 17. modle */

$(document).ready(function () {
  $(".openModalBtn").on("click", function (e) {
    e.preventDefault();
    $("body").addClass("no-scroll"); // Добавляем класс для блокировки скролла
    $("#modal").fadeIn();
  });

  $(".close-search").on("click", function (e) {
    e.preventDefault();
    console.log("click", $("#modal").fadeOut());
    $("#modal").fadeOut(); // Скрываем модальное окно
  });

  $(document).on("click", function (e) {
    if ($(e.target).is("#modal")) {
      $("#modal").fadeOut(); // Скрываем модальное окно
    }
  });
});
