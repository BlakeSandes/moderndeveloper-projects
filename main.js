var container = document.querySelector('.container'),
didScroll;

container.addEventListener('scroll', function(ev) {
  ev.preventDefault();

  didScroll = true;
  console.log("scrolling");
}, false);
