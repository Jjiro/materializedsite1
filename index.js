// Sidenav
const sideNav = document.querySelector('.sidenav');
M.Sidenav.init(sideNav, {});

// Slider
const slider = document.querySelector('.slider');
M.Slider.init(slider, {
  indicators: false,
  height: 500,
  transition: 500,
  interval: 6000,
});

// Autocomplete
const ac = document.querySelector('.autocomplete');
M.Autocomplete.init(ac, {
  data: {
    Canyon: null,
    Beaches: null,
    Europe: null,
    Americas: null,
    Africa: null,
    Asia: null,
    Caribbean: null,
    Miami: null,
    Ibiza: null,
    Dubai: null,
    Zanzibar: null,
  },
});

// Material Boxed
const mb = document.querySelectorAll('.materialboxed');
M.Materialbox.init(mb, {});
