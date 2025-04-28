document.addEventListener("DOMContentLoaded", function () {
    let count = 0;

    const counterDisplay = document.getElementById('display-counter')
    const counterButton = document.getElementById('button-counter')

    counterButton.addEventListener('click', function () {
        count++;

        counterDisplay.textContent = `You click  ${count} times`
    })


})