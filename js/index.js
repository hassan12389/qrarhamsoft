$(document).ready(function(){
    var anchorHash = window.location.href.toString();
    if( anchorHash.lastIndexOf('#') != -1 ) {
        anchorHash = anchorHash.substr(anchorHash.lastIndexOf('#'));
        if( $('a[href="'+ anchorHash +'"]').length > 0 ) {
            $('a[href="'+ anchorHash +'"]').trigger('click');
        }
    }
});
function rangeSlider (value) {
    document.getElementById('demo').innerHTML = value;
    document.getElementById('demo1').innerHTML = value;
}

//
// $(document).ready(function(){
// $('.owl-carousel').owlCarousel()}

$(document).ready(function(){
    $(".owl-carousel").owlCarousel(
        {
            loop:true,
            nav:false,
            autoplay:true,
            responsive:{
                0:{
                    items:5
                },
                600:{
                    items:6
                },
                1000:{
                    items:6
                }
            }
        }
    );
  });
