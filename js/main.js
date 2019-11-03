//for block "page-team"
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
//for menu
const positions = [], //for anchor
    currentActive = null, //for id
    links = $('.nav-item, .nav-modal');

$(".anchor").each(function(){
    positions.push({
        top: $(this).position().top - 100,
        a: links.filter('[href="#'+$(this).attr('id')+'"]')
    });
});

$(window).on('scroll',function() {
    const winTop = $(window).scrollTop();
    for(const i = 0; i < positions.length; i++){
        if(positions[i].top < winTop){
            if(currentActive !== i){
                currentActive = i;
                links.filter('.active').removeClass('active');
                positions[i].a.addClass("active");
            }
            break;
        }
    }
});