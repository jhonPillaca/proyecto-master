$(window).ready(function () {
let carrousel = ('.carrousel_edu');
let content_cards = ('.cards');
let itemWidth = "";

$('.antr, .sigt').click(function () {
    let condition = $(this).hasClass("antr");
    if (condition)
        click(0, this);
    else
        click(1, this)
});



//función para sea responsive card carrousel

function Carrousel_Size() {
    let incno = 0;
    let dataItems = ("data-items");
    let itemClass = ('.item');
    let id = 0;
    let btnParentSb = '';
    let itemsSplit = '';
    let sampwidth = $(carrousel).width();
    let bodyWidth = $('body').width();

    $(content_cards).each(function () {
        id = id + 1;
        let itemNumbers = $(this).find(itemClass).length;

        btnParentSb = $(this).parent().attr(dataItems);
        itemsSplit = btnParentSb.split(',');
        $(this).parent().attr("id", "carrousel_edu" + id);


        if (bodyWidth >= 2000) {
            incno = itemsSplit[3];
            itemWidth = sampwidth / incno;
        }
        else if (bodyWidth >= 868) {
            incno = itemsSplit[2];
            itemWidth = sampwidth / incno;
        } else if (bodyWidth >= 668) {
            incno = itemsSplit[1];
            itemWidth = sampwidth / incno;
        }
        else {
            incno = itemsSplit[0];
            itemWidth = sampwidth / incno;
        }

        $(this).css({ 'transform': 'translateX(0px)', 'width': itemWidth * itemNumbers });
        $(this).find(itemClass).each(function () {
              $(this).outerWidth(itemWidth);


        });




        $(".antr").addClass("active");
        $(".sigt").removeClass("active");

    });

}


Carrousel_Size();


$(window).resize(function () {
    Carrousel_Size();
});



function Translate_Carrousel(e, card, s) {
    let btn_left = ('.antr');
    let btn_right = ('.sigt');
    let translateXval = '';
    let style_div = $(card + ' ' + content_cards).css('transform');

    let values = style_div.match(/-?[\d\.]+/g); // expresión regular 
    let xds = Math.abs(values[4]);
    if (e == 0) {
        translateXval = parseInt(xds) - parseInt(itemWidth * s);
        $(card + ' ' + btn_right).removeClass("active");

        if (translateXval <= itemWidth / 2) {
            translateXval = 0;
            $(card + ' ' + btn_left).addClass("active");
        }
    }
    else if (e == 1) {
        let itemsCondition = $(card).find(content_cards).width() - $(card).width();

        translateXval = parseInt(xds) + parseInt(itemWidth * s);
        $(card + ' ' + btn_left).removeClass("active");

        if (translateXval >= itemsCondition - itemWidth / 2) {
            translateXval = itemsCondition;
            $(card + ' ' + btn_right).addClass("active");
        }
    }
    $(card + ' ' + content_cards).css('transform', 'translateX(' + -translateXval + 'px)');
}

//obtnemos algunos datos al dar clik : como el data-slide 
function click(n, es) {
    let parent = "#" + $(es).parent().attr("id");
    let slide = $(parent).attr("data-slide");
    Translate_Carrousel(n, parent, slide);
}

});