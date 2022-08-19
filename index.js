const mobile_screen = window.innerWidth;
const btn_left = document.getElementById("carousel-btn-left"),
  btn_right = document.getElementById("carousel-btn-right"),
  content = document.getElementById("con");
const content_scroll_width = content.scrollWidth;
const wrapper = document.getElementsByClassName("product_wrapper");
const clientWidth = wrapper[0].clientWidth;

(function (w) {
  w.addEventListener("load", function () {
    btn_left.style.display = "none";
    btn_right.style.display = "block";
    let content_scoll_left = content.scrollLeft;
    btn_right.addEventListener("click", () => {
      content_scoll_left += clientWidth;
      btn_left.style.display = "block";
      if (content_scoll_left + clientWidth >= content.scrollWidth) {
        content.scrollLeft = content.scrollWidth;
      }
      if (
        content_scoll_left + clientWidth >= content_scroll_width &&
        mobile_screen > 1200
      ) {
        btn_right.style.display = "none";
      }
      content.scrollLeft = content_scoll_left;
    });
    btn_left.addEventListener("click", () => {
      content_scoll_left -= clientWidth;
      if (content_scoll_left <= 0) {
        if (mobile_screen > 1200) {
          btn_left.style.display = "none";
        }
        btn_right.style.display = "block";
        content_scoll_left = 0;
      }
      content.scrollLeft = content_scoll_left;
    });
  });
})(window);

const scrollTrigger = () => {
  if (mobile_screen < 1200) {
    btn_right.style.display = "block";
    let content_scoll_left = content.scrollLeft;
    if (content_scoll_left + clientWidth >= content.scrollWidth) {
      btn_right.style.display = "none";
      btn_left.style.display = "block";
    }
    if (content_scoll_left <= 0) {
      btn_left.style.display = "none";
      content_scoll_left = 0;
    }
  }
};
