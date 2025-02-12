document.addEventListener("mousemove", function (e) {
    const cursor = document.querySelector(".cursor-glow");
    cursor.style.left = e.pageX + "px";
    cursor.style.top = e.pageY + "px";
});
