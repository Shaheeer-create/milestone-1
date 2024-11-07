// Function to display alert on page load
window.onload = function () {
    alert("Welcome to my resume!");
};
// Function to download resume as PDF
var downloadResume = function () {
    // Placeholder function for future PDF download logic
    alert("Resume will be downloaded as a PDF soon!");
};
// Attach the download function to the button
document.addEventListener("DOMContentLoaded", function () {
    var _a;
    var downloadButton = document.createElement("button");
    downloadButton.innerText = "Download Resume";
    downloadButton.className = "download-btn";
    downloadButton.onclick = downloadResume;
    (_a = document.querySelector(".resume")) === null || _a === void 0 ? void 0 : _a.appendChild(downloadButton);
});
