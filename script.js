var nav = $('nav');
var active = nav.find('.active');

var line = $('<div />').addClass('line');
line.appendTo(nav);

var pos = 0;
var wid = 0;

if(active.length) {
    pos = actvie.position().left;
    wod = active.width();
    line.css({
        left:pos,
        width:wid
    });
}
function animateLineTo(el) {
    console.log(el)
    if(!$(el).parent().hasClass('active') && !nav.hasClass('animate')) {
        nav.addClass('animate');
        nav.find('ul li').removeClass('active');

        var position = $(el).parent().position();
        var width = $(el).parent().position();

        if(position.left > pos) {
            line.animate({
                width: ((position.left - pos) + width)
            }, 300, function() {
                line.animate({
                    width:
                    left: position.left
                }


                }
            )}
            )}
        }
        else {

        }
        pos = position.left;
        wid = width;
    }



nav.find('ul li a').click(function(e) {
    e.preventDefault();
    console.log(this)
});