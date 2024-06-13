// stack
const git = document.getElementById("git");
const html = document.getElementById("html");
const css = document.getElementById("css");
const bootstrap = document.getElementById("bootstrap");
const tailwind = document.getElementById("tailwind");
const javascript = document.getElementById("javascript");
const angular = document.getElementById("angular");
const node = document.getElementById("node");
const csharp = document.getElementById("csharp");
const net = document.getElementById("net");
const postgre = document.getElementById("postgre");
const mssql = document.getElementById("mssql");

// modales de proyectos

const openChess = document.querySelector("[chess-open-modal]");
const closeChess = document.querySelector("[chess-close-modal]");
const modalChess = document.querySelector("[chess-modal]");

openChess.addEventListener("click", () => {
  modalChess.showModal();
});
closeChess.addEventListener("click", () => {
  modalChess.close();
});

const openBlackjack = document.querySelector("[blackjack-open-modal]");
const closeBlackjack = document.querySelector("[blackjack-close-modal]");
const modalBlackjack = document.querySelector("[blackjack-modal]");
const irBlackjack = document.querySelector("[blackjack-ir]");

openBlackjack.addEventListener("click", () => {
  modalBlackjack.showModal();
});
closeBlackjack.addEventListener("click", () => {
  modalBlackjack.close();
});
irBlackjack.addEventListener("click", () => {
  window.open("https://auguscav.github.io/black-jack/", "_blank");
});

const openGenerador = document.querySelector("[generador-open-modal]");
const closeGenerador = document.querySelector("[generador-close-modal]");
const modalGenerador = document.querySelector("[generador-modal]");
const irGenerador = document.querySelector("[generador-ir]");

openGenerador.addEventListener("click", () => {
  modalGenerador.showModal();
});
closeGenerador.addEventListener("click", () => {
  modalGenerador.close();
});
irGenerador.addEventListener("click", () => {
  window.open("https://auguscav.github.io/generador-ideas-code/", "_blank");
});

const openGestor = document.querySelector("[gestor-open-modal]");
const closeGestor = document.querySelector("[gestor-close-modal]");
const modalGestor = document.querySelector("[gestor-modal]");

openGestor.addEventListener("click", () => {
  modalGestor.showModal();
});
closeGestor.addEventListener("click", () => {
  modalGestor.close();
});

const openCalc = document.querySelector("[calc-open-modal]");
const closeCalc = document.querySelector("[calc-close-modal]");
const modalCalc = document.querySelector("[calc-modal]");
const irCalc = document.querySelector("[calc-ir]");

openCalc.addEventListener("click", () => {
  modalCalc.showModal();
});
closeCalc.addEventListener("click", () => {
  modalCalc.close();
});
irCalc.addEventListener("click", () => {
  window.open("https://auguscav.github.io/calculadora/", "_blank");
});

//COpiar mail
document.getElementById("email").addEventListener("click", () => {
  showSnackbar("Email copiado");
  navigator.clipboard.writeText("augustoluiscavaignac@gmail.com");
});

function showSnackbar(message) {
  var snackbar = document.getElementById("snackbar");
  snackbar.textContent = message;
  snackbar.classList.add("show");
  setTimeout(function () {
    snackbar.classList.remove("show");
  }, 3000);
}

// Abrir stack
// git.addEventListener("click", () => {
//   window.open("https://git-scm.com/", "_blank");
// });
// html.addEventListener("click", () => {
//   window.open("https://developer.mozilla.org/es/docs/Web/HTML", "_blank");
// });
// css.addEventListener("click", () => {
//   window.open("https://developer.mozilla.org/es/docs/Web/CSS", "_blank");
// });
// bootstrap.addEventListener("click", () => {
//   window.open("https://getbootstrap.com/", "_blank");
// });
// tailwind.addEventListener("click", () => {
//   window.open("https://tailwindcss.com/", "_blank");
// });
// javascript.addEventListener("click", () => {
//   window.open("https://developer.mozilla.org/es/docs/Web/JavaScript", "_blank");
// });
// angular.addEventListener("click", () => {
//   window.open("https://angular.io/", "_blank");
// });
// node.addEventListener("click", () => {
//   window.open("https://nodejs.org/en", "_blank");
// });
// csharp.addEventListener("click", () => {
//   window.open("https://dotnet.microsoft.com/es-es/languages/csharp", "_blank");
// });
// net.addEventListener("click", () => {
//   window.open(
//     "https://dotnet.microsoft.com/es-es/learn/dotnet/what-is-dotnet",
//     "_blank"
//   );
// });
// postgre.addEventListener("click", () => {
//   window.open("https://www.postgresql.org/", "_blank");
// });
// mssql.addEventListener("click", () => {
//   window.open(
//     "https://learn.microsoft.com/es-es/sql/sql-server/what-is-sql-server?view=sql-server-ver16",
//     "_blank"
//   );
// });
