const textInput = document.getElementById("textInput");
const currentCount = document.getElementById("currentCount");
const progressFill = document.getElementById("progressFill");

textInput.addEventListener("input", () => {
    let characterLength = textInput.value.length;
    const maxLength = Number(document.querySelector(".max-count").textContent);
    let percentage = (characterLength / maxLength) * 100;
    currentCount.textContent = characterLength;
    progressFill.style.width = `${percentage}%`;

    progressFill.classList.remove("warning", "danger");
    currentCount.classList.remove("warning", "danger");

    if (percentage > 80 && percentage < 100) {
        progressFill.classList.add("warning");
        currentCount.classList.add("warning");
    } else if (percentage >= 100) {
        progressFill.classList.add("danger");
        currentCount.classList.add("danger");
    }
});
