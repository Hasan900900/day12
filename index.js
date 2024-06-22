document.addEventListener("DOMContentLoaded", () => {
    const container = document.querySelector('.container');

    container.addEventListener('mousemove', (e) => {
        const newWidth = e.clientX;
        container.style.width = `${newWidth}px`;
    });

    container.addEventListener('mouseleave', () => {
        container.style.width = '10vw'; 
    });
});
