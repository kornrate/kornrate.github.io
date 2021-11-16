import ScrollBooster from 'scrollbooster';


new ScrollBooster({
  viewport: document.querySelector('.container'),
  content: document.querySelector('.drag'),
  scrollMode: 'transform', // use CSS 'transform' property
  direction: 'horizontal', // allow only horizontal scrolling
  emulateScroll: true, // scroll on wheel events
});