$(document).ready(function () {
    $(".btn-ricardo").click(function () {
        $(".btn-ricardo").hide();
        $(".social-ricardo").fadeIn();
    });
    $(".btn-alberto").click(function () {
        $(".btn-alberto").hide();
        $(".social-alberto").fadeIn();
    });
    $(".btn-thoma").click(function () {
        $(".btn-thoma").hide();
        $(".social-thoma").fadeIn();
    });
    $(".btn-menu").click(function(){
        $(".modal").show()
    })
    $(".btn-close").click(function(){
        $(".modal").hide()
    })
});