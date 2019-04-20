const x = new Ventus.WindowManager();

const createWindow = (title, x, y, width, height, query) => {
  window.x.createWindow.fromQuery(query, {
    title, x, y, width, height,
    animations: false,
    events: {
      closed: function () {
        this.destroy();
      }
    }
  }).open();
};

const $ = (selector) => (type, listener) => {
  const element = (selector ? document.querySelector(selector) : document);

  return type ? element.addEventListener(type, listener) : element;
};

$()('DOMContentLoaded', () => {
  createWindow('Blog', 100, 80, 630, 600, '#content');
});

$('.expose-button')('click', () => {
  window.x.mode = (window.x.mode === 'expose') ? 'default' : 'expose'
});

window.x = x;
