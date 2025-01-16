// scroll to top buttom
document.addEventListener("scroll", function () {
    const scrollBtn = document.getElementById("scrollToTop");
    if (window.scrollY > 100) {
        scrollBtn.style.display = "block";
    } else {
        scrollBtn.style.display = "none";
    }
});

function scrollToTop() {
    window.scrollTo({ top: 0, behaviour: "smooth" });
}