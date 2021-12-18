
let arr = document.querySelectorAll(".btn");

arr.forEach(function (element) {
    element.addEventListener("click", function () {

        arr.forEach(function (element) {
            element.classList.remove("active");
        })

        element.classList.add("active");

    },false)

});