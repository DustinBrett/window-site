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

$('#blog')('click', () => {
  createWindow('Blog', 150, 80, 630, 600, '#content');
});

$('#expose')('click', () => {
  window.x.mode = (window.x.mode === 'expose') ? 'default' : 'expose'
});

$('#task-view')('click', () => {
  window.x.mode = (window.x.mode === 'expose') ? 'default' : 'expose'
});

window.x = x;

setTime = () => {
  const now = new Date();
  const hour24 = now.getHours();
  const hour12 = hour24 % 12 ? hour24 % 12 : 12;
  const minute = now.getMinutes();
  const period = hour24 > 12 ? 'PM' : 'AM';

  document.getElementById('time').innerHTML = `${hour12}:${minute} ${period}`;
}

setTime();
window.setInterval(setTime, 1000);
