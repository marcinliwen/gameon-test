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
        direction: "vertical",
      },
    },
    speed: 1000,
    /* autoplay: {
      delay: 4000,
    }, */
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
      header.classList.add('hideTopNav')
    } else {
      header.classList.remove("isSticky");
      header.classList.remove('hideTopNav')
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
  const showTopNavBtn = document.getElementById('show-top-nav');
  if(showTopNavBtn && header){
    showTopNavBtn.addEventListener('click',()=>{
        header.classList.toggle('hideTopNav')
    })
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

  
};

/** add 0 befor digit */
function addZerotoDigit(number) {
  return number < 10 ? "0" + number : number;
}
