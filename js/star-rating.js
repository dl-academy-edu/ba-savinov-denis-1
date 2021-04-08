let starRating = document.querySelectorAll(".hov_star");

//star rating accessibility

starRating.forEach((starRating) => starRating.addEventListener(`focus`, (event) => {
    selectStar = event.target;
    selectStar.addEventListener('keydown', (ev) => {
        if (ev.code === "Space" || ev.code === "Enter" || ev.code === "NumpadEnter") {
            selectStar.click();
        }
    });
}));