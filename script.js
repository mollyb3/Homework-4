const backgroundChoice = document.getElementById("backgroundChoice");
const userName = document.getElementById("userName");
const savedName = document.getElementById("savedName");

backgroundChoice.addEventListener("change", function () {
    document.body.classList.remove("lightblue", "lightgold");

    if (backgroundChoice.value === "lightblue") {
        document.body.classList.add("lightblue");
    } else if (backgroundChoice.value === "lightgold") {
        document.body.classList.add("lightgold");
    }
});

window.addEventListener("load", function () {
    const storedName = localStorage.getItem("name");

    if (storedName) {
        savedName.textContent = storedName;
        userName.value = storedName;
    }
});

userName.addEventListener("blur", function () {
    const typedName = userName.value.trim();

    if (typedName !== "") {
        localStorage.setItem("name", typedName);
        savedName.textContent = localStorage.getItem("name");
    }
});

if ("serviceWorker" in navigator) {
    navigator.serviceWorker.register("service-worker.js")
        .then(function () {
            console.log("Service Worker registered successfully.");
        })
        .catch(function (error) {
            console.log("Service Worker registration failed:", error);
        });
}
