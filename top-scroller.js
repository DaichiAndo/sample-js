(function () {
  const topScroller = function (hook, vm) {
    hook.doneEach(function () {
      // get scroll button
      const scrollToTop = document.getElementById('scroll-to-top');

      // add event function to scroll-button
      if (scrollToTop) {
        scrollToTop.addEventListener('click', function (e) {
          e.stopPropagation();
          const step = window.scrollY / 15;
          const scroll = function () {
            window.scrollTo(0, window.scrollY - step);
            if(window.scrollY > 0) {
              setTimeout(scroll, 15);
            }
          };
          scroll();
        });

        // add event function to window
        window.addEventListener('scroll', function (_) {
          const offset = window.document.documentElement.scrollTop;
          const scrollToTop = Docsify.dom.find('div#scroll-to-top');
          scrollToTop.style.display = offset >= 500 ? 'flex' : 'none';
        });
      }
    });
  };


  $docsify = $docsify || {};
  $docsify.plugins = [].concat($docsify.plugins || [], topScroller);
})();
