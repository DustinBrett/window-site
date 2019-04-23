/* TODO
  - Account for DST in setTime
*/

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

const TIMEZONE_OFFSET = -7;
const MINUTE_MS = 60000;
const HOUR_MS = MINUTE_MS * 60;

const setTime = () => {
  const now = new Date();
  const utc = now.getTime() + (now.getTimezoneOffset() * MINUTE_MS);
  const time = new Date(utc + (HOUR_MS * TIMEZONE_OFFSET)).toLocaleTimeString();

  document.getElementById('time').innerHTML = time;
};

$('#blog')('click', () => createWindow('Blog', 150, 80, 630, 600, '#content'));
$('#expose')('click', exposeToggle);
$('#task-view')('click', exposeToggle);

setTime();

window.setInterval(setTime, 1000);
window.x = x;
