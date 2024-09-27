const dialog = document.querySelector("#loginDialog");
const showButton = document.querySelector(".sign");
const closeButton = document.querySelector("#closeDialog");
const nav = document.querySelector(".ylakohta");

// Kirjautumisikoni avaa dialogi-ikkunan
showButton.addEventListener("click", () => {
  dialog.showModal();
});

// "Peruuta" -painike sulkee dialogi-ikkunan
closeButton.addEventListener("click", () => {
  dialog.close();
});
