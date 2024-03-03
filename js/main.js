function toggleColorMode() {
    const body = document.body;

    // Alternar entre las clases light-mode y dark-mode en el cuerpo
    body.classList.toggle("light-mode");
    body.classList.toggle("dark-mode");
}