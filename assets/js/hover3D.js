$(".feature__hover3d").hover3d({
    selector: ".features__item",
    sensitivity: -8,
    perspective   : 1000,
     // Helper class when mouse hover in the element
    hoverInClass  : "hover-in",

    // Helper class when mouse hover Out the element
    hoverOutClass : "hover-out",

    // Helper class when the mouse is hovering the element
    hoverClass    : "hover-3d"
});