const buttonElementsArray = document.querySelectorAll('button');

buttonElementsArray.forEach((btn) => {
    btn.addEventListener("click", () => { handleInputs(btn); })
})