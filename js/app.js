(() => {
    "use strict";
    let items = document.querySelectorAll(".item");
    for (const item of items) {
        let timerId = setInterval((function() {
            item.innerHTML = getRandomInt(0, 99);
            if (31 == item.innerHTML) {
                clearInterval(timerId);
                item.classList.add("active");
            }
        }), 500);
    }
    function getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min)) + min;
    }
})();