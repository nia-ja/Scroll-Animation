const boxes = document.querySelectorAll(".box");

window.addEventListener("scroll",checkBoxes);
window.onLoad = checkBoxes();

function checkBoxes() {
    // to trigger it a bit earlier then tne bottom
    const triggerBottom = window.innerHeight / 5 * 4;

    boxes.forEach(box => {
        // returns DOMRect object providing information about the size of an element and its position relative to the viewport
        const boxTop = box.getBoundingClientRect().top;
        console.log(boxTop);
        if(boxTop < triggerBottom) {
            box.classList.add("show");
        } else {
            box.classList.remove("show");
        }
    })
}