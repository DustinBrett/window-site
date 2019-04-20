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

$('.blog-button')('click', () => {
  createWindow('Blog', 150, 80, 630, 600, '#content');
});

$('.expose-button')('click', () => {
  window.x.mode = (window.x.mode === 'expose') ? 'default' : 'expose'
});

$('.expose-button2')('click', () => {
  window.x.mode = (window.x.mode === 'expose') ? 'default' : 'expose'
});

window.x = x;

document.getElementById('date').innerHTML = getFormattedDate(new Date());

setTime = () => {
  document.getElementById('time').innerHTML = new Date().toTimeString().substr(0, 8);
}

setTime();

window.setInterval(setTime, 1000);

function getFormattedDate(date) {
  let year = date.getFullYear();
  let month = (1 + date.getMonth()).toString().padStart(2, '0');
  let day = date.getDate().toString().padStart(2, '0');

  return month + '/' + day + '/' + year;
}
