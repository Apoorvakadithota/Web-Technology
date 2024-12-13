$(document).ready(function () {
  // Smooth scrolling for links
  $("a").on("click", function (event) {
    if (this.hash !== "") {
      event.preventDefault();
      const hash = this.hash;

      // Animate scroll to the target section
      $("html, body").animate(
        {
          scrollTop: $(hash).offset().top,
        },
        800,
        function () {
          window.location.hash = hash; // Update the URL hash
        }
      );
    }
  });

  // Optimize scroll event listener with throttling
  let scrollTimeout;
  $(window).on("scroll", function () {
    if (scrollTimeout) {
      clearTimeout(scrollTimeout);
    }

    scrollTimeout = setTimeout(function () {
      const scrollPos = $(document).scrollTop();

      // Update active class on navigation links based on scroll position
      $("nav ul li a").each(function () {
        const section = $(this.hash);
        if (section.length) {
          const sectionTop = section.offset().top - 70; // Adjust offset for sticky headers
          const sectionBottom = sectionTop + section.outerHeight();

          if (scrollPos >= sectionTop && scrollPos < sectionBottom) {
            $("nav ul li a").removeClass("active");
            $(this).addClass("active");
          }
        }
      });
    }, 100); // Throttle interval
  });

  // Add smooth transition effect to active nav links
  $("nav ul li a").on("click", function () {
    $("nav ul li a").removeClass("active");
    $(this).addClass("active");
  });
});
