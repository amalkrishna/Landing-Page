import $ from 'jquery';
import 'react-bootstrap'

function navMenu(){
$(".dropdown").hover(
    function() {
        $('.dropdown-menu', this).not('.in .dropdown-menu').stop( true, true ).slideDown("fast");
        $(this).toggleClass('open');
    },
    function() {
        $('.dropdown-menu', this).not('.in .dropdown-menu').stop( true, true ).slideUp("fast");
        $(this).toggleClass('open');
    }
);

// $('[id^=carousel-selector-]').click(function () {
// var id_selector = $(this).attr("id");
// try {
//     var id = /-(\d+)$/.exec(id_selector)[1];
//     console.log(id_selector, id);
//     $('#myCarousel').carousel(parseInt(id));
// } catch (e) {
//     console.log('Regex failed!', e);
// }
// });

}

module.exports.navMenu = navMenu;
