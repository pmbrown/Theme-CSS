//  Dialog modal script adapted from Mark Otto's
//  https://codepen.io/emdeoh/pen/NWXPJOy

let toggler = document.querySelectorAll("[data-dialog]"),
  closers = document.querySelectorAll("[data-close]");
toggler &&
  (toggler.forEach(function (e) {
    let l = e.getAttribute("data-dialog"),
      t = document.querySelectorAll(l);
    e.addEventListener("click", (e) => {
      t.forEach(function (e) {
        e.showModal();
      });
    });
  }),
  closers.forEach(function (e) {
    e.addEventListener("click", (l) => {
      e.closest("dialog").close();
    });
}));
