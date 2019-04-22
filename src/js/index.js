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

const exposeToggle = () => {
  window.x.mode = (window.x.mode === 'expose') ? 'default' : 'expose'
};

const setTime = () => {
  document.getElementById('time').innerHTML = new Date().toLocaleTimeString();
};

$('#blog')('click', () => createWindow('Blog', 150, 80, 630, 600, '#content'));
$('#expose')('click', exposeToggle);
$('#task-view')('click', exposeToggle);

setTime();

window.setInterval(setTime, 1000);
window.x = x;
