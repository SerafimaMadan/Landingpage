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
const positions = [], //сюда сложим на загрузке страницы позиции наших "якорных" блоков, чтобы не считать их каждый раз. и сюда же положим ссылки на соответствующие a.scroll-to
    currentActive = null, //здесь будет храниться id текущего блока, чтобы не менять классы по 100 раз за одну прокрутку 
    links = $('.nav-item, .nav-modal'); //сохраним массив всех a.nav-item

$(".anchor").each(function(){ //перебираем блоки, сохраняем позиции и ссылки на пункты меню
    positions.push({
        top: $(this).position().top - 100,
        a: links.filter('[href="#'+$(this).attr('id')+'"]')
    });
});

$(window).on('scroll',function() {
    const winTop = $(window).scrollTop();
    for(const i = 0; i < positions.length; i++){
        if(positions[i].top < winTop){ //если прокрутка страницы ниже нашего блока
            if(currentActive !== i){ //и если мы еще не добавили класс текущему блоку
                currentActive = i;
                links.filter('.active').removeClass('active'); //снимаем класс .active с текущего пункта меню
                positions[i].a.addClass("active");
            }
            break; //выходим из цикла, не нужно проверять блоки, которые выше
        }
    }
});