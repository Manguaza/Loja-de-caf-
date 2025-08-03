document.addEventListener("DOMContentLoaded", function () {
  const container = document.getElementById("translator-container");

  fetch("/src/pages/translate.html")
    .then((response) => {
      if (!response.ok) {
        throw new Error("Erro ao carregar o tradutor: " + response.statusText);
      }
      return response.text();
    })
    .then((html) => {
      container.innerHTML = html;
    })
    .catch((error) => {
      console.error("Erro ao carregar o tradutor:", error);
    });
});
