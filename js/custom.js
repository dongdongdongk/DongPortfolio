(function ($) {
  "use strict";

  // PRE LOADER
  $(window).load(function () {
    $(".preloader").fadeOut(1000); // set duration in brackets
  });

  // CUSTOM LINK
  $(".custom-link").click(function () {
    var el = $(this).attr("href");
    var elWrapped = $(el);
    var header_height = $(".navbar").height() + 10;

    scrollToDiv(elWrapped, header_height);
    return false;

    function scrollToDiv(element, navheight) {
      var offset = element.offset();
      var offsetTop = offset.top;
      var totalScroll = offsetTop - navheight;

      $("body,html").animate(
        {
          scrollTop: totalScroll,
        },
        300
      );
    }
  });
})(window.jQuery);

$(".projects-thumb .btn-more").click(function () {
  $("#projectModal").modal("show");
});

// 이미지 클릭 시 모달 열기
let imgList = document.querySelectorAll(".about-image");

imgList.forEach((img) => {
  img.onclick = function () {
    let modalImg = document.getElementById("modalImg");
    modalImg.src = this.src;
    $("#myModal").modal("show"); // 모달 창 열기
  };
});


// 모달 닫기 버튼 클릭 시 모달 창 닫기
document
  .getElementById("closeModalButton")
  .addEventListener("click", function () {
    $("#myModal").modal("hide"); // 모달 창 닫기
  });

document.addEventListener("DOMContentLoaded", function () {
  const springButton = document.getElementById("springButton");
  const mernButton = document.getElementById("mernButton");
  const allButton = document.getElementById("allButton");

  springButton.addEventListener("click", function () {
    toggleProjects("spring");
  });

  mernButton.addEventListener("click", function () {
    toggleProjects("mern");
  });

  allButton.addEventListener("click", function () {
    toggleProjects("all");
  });

  function toggleProjects(className) {
    const projects = document.querySelectorAll(".projects-thumb.main");
    projects.forEach((project) => {
      if (className === "all" || project.classList.contains(className)) {
        project.style.display = "block";
      } else {
        project.style.display = "none"; 
      }
    });
  }
});
