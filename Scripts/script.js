var navbarElement;
var navbarClone;
var state = false;
function toggleNavbar()
{
    if ($(window).scrollTop() > 150)
    {
        var element = $("#navbar-main");
        element.css({'margin-top' : '-100px'});
        element.css({'margin-right' : '0px'});
        element.css({'margin-left' : '0px'});
        element.css({'top' : '0'});
        element.animate({margin: "0px 0px 0px 0px", document}, 800);
        element.addClass('navbar-fixed-top');
    }
    if ($(window).scrollTop() < 100 )
    {
        var element = $("#navbar-main");
        if (element.hasClass('navbar-fixed-top'))
        {
            stop();
            element.remove();
            element = navbarClone.clone();
            element.removeClass('navbar-fixed-top');
            // element.attr('id', 'navbar-main');
            // element.insertAfter('#header');
            $('#navbar-section').append(element);
            element.css({'top' : '-250'});
            element.css({'opacity': '0.0'});
            element.animate({opacity : "1.0", document}, 800);
        }
    }
}

function onLoad()
{
    if (state == false)
    {
        navbarClone = $("#navbar-main").clone();
        state = true;
    }
}

$(document).scroll(toggleNavbar);