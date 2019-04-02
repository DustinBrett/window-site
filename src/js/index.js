document.addEventListener('DOMContentLoaded', () => {
  window.x = new Ventus.WindowManager();

  document.querySelector('.create-button').addEventListener('click', () => {
    window.x.createWindow({
      title: 'Window',
      x: 120,
      y: 60,
      width: 400,
      height: 250,
      events: {
        closed: () => this.destroy()
      }
    }).open();
  });

  document.querySelector('.expose-button').addEventListener('click', () => 
    !!(window.x.mode = (window.x.mode === 'expose') ? 'default' : 'expose')
  );
});
