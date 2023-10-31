window.onload = () => {
  /**
   * check media query
   */
  let isMobile = window.matchMedia("(max-width: 1024px)");
  /**
   * get vh for full height in mobile
   */
  if (isMobile) {
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty("--vh", `${vh}px`);
    window.addEventListener("resize", () => {
      // We execute the same script as before
      let vh = window.innerHeight * 0.01;
      document.documentElement.style.setProperty("--vh", `${vh}px`);
    });
  }
  /**
   * sliders - swiper.js
   */
  const homeSwiper = new Swiper(".home-swiper", {
    slidesPerView: 1,
    parallax: true,
    touchStartPreventDefault: false,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      renderBullet: function (index, className) {
        let counter = addZerotoDigit(index + 1);
        return (
          '<div class="' +
          className +
          '"><span class="counter">' +
          counter +
          '</span> <svg xmlns="http://www.w3.org/2000/svg" width="27" height="10" viewBox="0 0 27 10" fill="none"><path d="M20.0595 0.298717C20.0661 0.64154 19.9997 0.981827 19.8649 1.29548C19.7302 1.60914 19.5303 1.88873 19.2795 2.11467C18.7469 2.607 18.05 2.86885 17.3342 2.84595C16.7142 2.82056 16.1054 2.66883 15.5432 2.39914C14.8856 2.11357 14.2453 1.78757 13.6258 1.42311C12.8916 1.01199 12.1158 0.684625 11.3124 0.44707C10.3647 0.149165 9.37905 -0.00152583 8.38805 1.16468e-05C5.56752 1.16468e-05 3.46636 0.889806 2.08462 2.66913C0.623295 4.70614 -0.108507 7.19961 0.013027 9.72766H6.91144C6.90236 9.38378 6.96631 9.04203 7.0988 8.72614C7.23129 8.41026 7.42913 8.12797 7.67859 7.89871C8.22782 7.40603 8.94043 7.1494 9.66862 7.18242C10.4682 7.23424 11.2453 7.47569 11.9392 7.88747C12.8294 8.35737 13.847 8.82687 14.9919 9.29608C16.1435 9.76705 17.3724 10.006 18.6118 9.99989C21.4323 9.99989 23.5335 9.11503 24.9152 7.34526C26.3772 5.31364 27.1092 2.82401 26.9868 0.299965L20.0595 0.298717Z" fill="white"/></svg><span class="line"></span></div>'
        );
      },
    },
    breakpoints: {
      760: {
        //direction: "vertical",
      },
    },
    speed: 1000,
    autoplay: {
      delay: 10000,
    },
  });

  const reviewSwiper = new Swiper(".reviews-swiper", {
    //slidesPerView: 3,
    spaceBetween: 16,
    centeredSlides: true,
    touchStartPreventDefault: false,
    loop: true,
    effect: "coverflow",
    slidesPerView: "auto",
    coverflowEffect: {
      rotate: 0,
      stretch: 0,
      depth: 50,
      modifier: 1,
      scale: 0.9,
      slideShadows: false,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      type: "fraction",
      formatFractionCurrent: function (number) {
        return addZerotoDigit(number) + ".";
      },
      formatFractionTotal: function (number) {
        return addZerotoDigit(number);
      },
    },
    breakpoints: {
      760: {
        slidesPerView: 2,
      },
      1024: { slidesPerView: 3 },
    },
    speed: 1000,
    autoplay: {
      delay: 2000,
      disableOnInteraction: false,
      pauseOnMouseEnter: true,
    },
  });

  const coursesSwiper = new Swiper(".courses-swiper", {
    slidesPerView: 1,
    spaceBetween: 32,
    centeredSlides: true,
    touchStartPreventDefault: false,
    loop: true,
    effect: "coverflow",
    slidesPerView: "auto",
    coverflowEffect: {
      rotate: 0,
      stretch: 0,
      depth: 0,
      scale: 0.9,
      modifier: 1,
      slideShadows: false,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      type: "fraction",
      formatFractionCurrent: function (number) {
        return addZerotoDigit(number) + ".";
      },
      formatFractionTotal: function (number) {
        return addZerotoDigit(number);
      },
    },
    breakpoints: {
      760: {
        slidesPerView: 2,
      },
      1024: { slidesPerView: 3 },
    },
    speed: 1000,
    /* autoplay: {
      delay: 4000,
    }, */
  });
  const classesSwiper = new Swiper(".classes-swiper", {
    slidesPerView: 1,
    spaceBetween: 32,
    centeredSlides: true,
    touchStartPreventDefault: false,
    loop: true,
    effect: "coverflow",
    slidesPerView: "auto",
    coverflowEffect: {
      rotate: 0,
      stretch: 0,
      depth: 0,
      scale: 0.9,
      modifier: 1,
      slideShadows: false,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      type: "fraction",
      formatFractionCurrent: function (number) {
        return addZerotoDigit(number) + ".";
      },
      formatFractionTotal: function (number) {
        return addZerotoDigit(number);
      },
    },
    breakpoints: {
      760: {
        slidesPerView: 2,
      },
      1024: { slidesPerView: 3 },
    },
    speed: 1000,
    /* autoplay: {
      delay: 4000,
    }, */
  });
  const aboutusSwiper = new Swiper(".aboutus-swiper", {
    slidesPerView: 1,
    effect: "fade",
    touchStartPreventDefault: false,
    crossFade: true,
    speed: 1500,
    autoplay: {
      delay: 3000,
    },
  });
  const tabs = document.querySelector(".tabs-buttons .swiper-wrapper");
  const tabContent = new Swiper(".tabs-content", {
    touchStartPreventDefault: false,
    speed: 1000,
    autoplay: {
      delay: 4500,
    },
    onSlideChangeStart: function (swiper, event) {
      tabs.children[swiper.previousIndex].classList.remove("active");
      tabs.children[swiper.activeIndex].classList.add("active");
    },
    on: {
      slideChange: function (swiper) {
        tabButtons.slides.forEach((item) => {
          item.classList.remove("active-tab");
          item.classList.remove("swiper-slide-active");
        });
        tabButtons.slides[swiper.activeIndex].classList.add("active-tab");
        //tabButtons.slides[swiper.activeIndex].classList.add('swiper-slide-active')
        tabButtons.slideTo(swiper.activeIndex);
      },
    },
  });

  const tabsNav = document.querySelectorAll(".tab-btn");
  if (tabsNav.length > 0) {
    tabsNav.forEach((tab) => {
      tab.addEventListener("click", (e, index) => {
        e.stopPropagation();
      });
    });
  }
  const tabButtons = new Swiper(".tabs-buttons", {
    slidesPerView: "auto",
    speed: 1000,
    freeMode: true,
    // scrollbar: '.swiper-scrollbar',
    breakpoints: {
      760: {
        slidesPerView: 2,
      },
      1024: { slidesPerView: "auto" },
    },

    mousewheelControl: true,
    on: {
      click: function (swiper, event) {
        event.stopPropagation();
        //console.log("tap", swiper.clickedIndex);
        //console.log("target", event);
        if (
          event.target.classList.contains("swiper-slide") &&
          !event.target.classList.contains("active-tab")
        ) {
          //console.log("event go");
          event.target.parentElement
            .querySelector(".active-tab")
            .classList.remove("active-tab");
          event.target.classList.add("active-tab");
          tabContent.slideTo(swiper.clickedIndex);
        }
      },
    },
  });

  /**
   * sticky header
   */
  const header = document.getElementById("header");
  const sticky = 48; //height to scroll

  const stickyHeader = (target) => {
    var topDistance = 0;
    if (target > sticky) {
      header.classList.add("isSticky");
      header.classList.add("hideTopNav");
    } else {
      header.classList.remove("isSticky");
      header.classList.remove("hideTopNav");
      topDistance = target;
    }
  };

  function headerHandler() {
    if (window.scrollY > sticky) {
      header.classList.add("isSticky");
    }
    window.onscroll = function () {
      stickyHeader(window.scrollY);
    };
  }
  headerHandler();

  window.addEventListener("resize", () => {
    if (isMobile.matches) {
      headerHandler();
    }
  });

  /**
   * show top nav
   */
  const showTopNavBtn = document.getElementById("show-top-nav");
  if (showTopNavBtn && header) {
    showTopNavBtn.addEventListener("click", () => {
      header.classList.toggle("hideTopNav");
    });
  }
  /**
   * body overflow if mobile menu is open
   */
  const openMenu = document.getElementById("open-menu");
  const closeMenu = document.getElementById("close-menu");
  const menu = document.querySelector(".main-menu");
  if (openMenu) {
    openMenu.addEventListener("click", () => {
      menu.classList.add("is-open");
      document.body.classList.add("body-overflow");
    });
  }
  if (closeMenu) {
    closeMenu.addEventListener("click", () => {
      menu.classList.remove("is-open");
      document.body.classList.remove("body-overflow");
    });
  }

  /**
   * play video
   */
  var playButton = document.querySelector("#play_button");
  if (playButton) {
    playButton.addEventListener("click", function () {
      let video = document.querySelector("#video");
      video.play();
      video.setAttribute("controls", "");
      this.style.display = "none";
    });
  }
  /**
   * custom select
   */
  const options = document.querySelectorAll(".custom-select li");
  const selectInput = document.querySelector(".custom-select input");
  options.forEach((item) => {
    item.addEventListener("click", () => {
      selectInput.setAttribute("value", item.dataset.value);
    });
  });

  /**
   * Intersection Observer
   */
  let observerOptions = {
    threshold: 0.25,
  };
  let callback = (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.intersectionRatio >= 0.1) {
        //add delay to target
        if (entry.target.getAttribute("data-delay")) {
          entry.target.style.transitionDelay =
            entry.target.getAttribute("data-delay") + "ms";
        }
        entry.target.classList.add("is_visible");
      } else {
        entry.target.classList.remove("is_visible");
      }
      if (entry.isIntersecting) {
        observer.unobserve(entry.target);
      }
    });
  };
  let observer = new IntersectionObserver(callback, observerOptions);
  const inViews = document.querySelectorAll(".inView");
  if (inViews.length > 0) {
    inViews.forEach((inView) => {
      observer.observe(inView);
    });
  }

  const isWobbling = document.querySelector(".is_wobbling");
  if (isWobbling) {
    setInterval(function () {
      isWobbling.classList.add("wobble");
      const wobble = document.querySelectorAll(".wobble path");
      if (wobble) {
        wobble.forEach((item, index) => {
          item.style.animationDelay = (index + 1) * 50 + "ms";
        });
      }
      setTimeout(function () {
        isWobbling.classList.remove("wobble");
      }, 2000);
    }, 8000);
  }
  /**
   * video with custom controls
   */
  const supportsVideo = !!document.createElement("video").canPlayType;
  if (supportsVideo) {
    const customVideo = document.getElementById("custom-video");
    if (customVideo) {
      const videoContainer = document.getElementById("videoContainer");
      const video = document.getElementById("video");
      const videoControls = document.getElementById("video-controls");
      // Hide the default controls
      video.controls = false;

      // Display the user defined video controls
      videoControls.style.opacity = "1";
      const playpause = document.getElementById("playpause");
      const progress = document.getElementById("progress");
      const progressBar = document.getElementById("progress-bar");
      playpause.addEventListener("click", (e) => {
        if (video.paused || video.ended) {
          video.play();
          playpause.querySelector(".play").classList.add("hidden");
          playpause.querySelector(".pause").classList.remove("hidden");
        } else {
          video.pause();
          playpause.querySelector(".play").classList.remove("hidden");
          playpause.querySelector(".pause").classList.add("hidden");
        }
      });
      video.addEventListener("timeupdate", () => {
        progressBar.style.width = `${Math.floor(
          (video.currentTime * 100) / video.duration
        )}%`;
      });
      progress.addEventListener("click", (e) => {
        console.log("click");
        const rect = progress.getBoundingClientRect();
        const pos = (e.pageX - rect.left) / progress.offsetWidth;
        video.currentTime = pos * video.duration;
      });
    }
  }

  /**
   * scroll to top
   */
  const scrollToTpp = document.getElementById("scroll-to-top");
  if (scrollToTpp) {
    scrollToTpp.addEventListener("click", () => {
      window.scroll({
        top: 0,
        left: 0,
        behavior: "smooth",
      });
    });
  }
};

/** add 0 befor digit */
function addZerotoDigit(number) {
  return number < 10 ? "0" + number : number;
}
