$(document).ready(function () {
    $('.explore-items').hover(function () {
        const self = $(this);
        self.toggleClass('explore-hover');
    });
});