const tabs = document.querySelectorAll(".btn button");
const contents = document.querySelectorAll(".content .box");

tabs.forEach((tab, index) => {
    tab.addEventListener("click", () => {
        contents.forEach((content, contentIndex) => {
            content.style.display = (index === contentIndex) ? "block" : "none";
        });
    });
});

// Initially display the first tab content and hide others
contents.forEach((content, index) => {
    content.style.display = (index === 0) ? "block" : "none";
});
