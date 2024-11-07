// Function to display alert on page load
window.onload = () => {
    alert("Welcome to my resume!");
};

// Function to download resume as PDF
const downloadResume = () => {
    // Placeholder function for future PDF download logic
    alert("Resume will be downloaded as a PDF soon!");
};

// Attach the download function to the button
document.addEventListener("DOMContentLoaded", () => {
    const downloadButton = document.createElement("button");
    downloadButton.innerText = "Download Resume";
    downloadButton.className = "download-btn";
    downloadButton.onclick = downloadResume;

    document.querySelector(".resume")?.appendChild(downloadButton);
});
