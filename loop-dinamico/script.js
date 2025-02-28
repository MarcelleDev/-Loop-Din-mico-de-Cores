let cores = ["red", "blue", "green", "purple", "orange"];
let i = 0;
let intervalo;
let isRunning = false;

const toggleButton = document.getElementById("toggleButton");

toggleButton.addEventListener("click", () => {
    if (isRunning) {
        clearInterval(intervalo);
        toggleButton.textContent = "Iniciar";
    } else {
        intervalo = setInterval(() => {
            document.body.style.backgroundColor = cores[i];
            console.log(`Mudando para: ${cores[i]}`);
            i = (i + 1) % cores.length;
        }, 500);
        toggleButton.textContent = "Parar";
    }
    isRunning = !isRunning;
});
