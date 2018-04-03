// js.scripts

$(function() {
    var $carouselList = $('#carousel ul');
    var $carouselButtons = $('.move-btn');
    var activeSlide = 1;
    var timerId;
    
    function runInterval() {
        timerId = setInterval(moveSlideNext, 3000);
    }

    function stopInterval() {
        clearInterval(timerId);
    }

    // $("#carousel ul").mouseenter(stopInterval);
    // $("#carousel ul").mouseleave(runInterval);

    function moveSlideNext() {
        $carouselList.animate({marginLeft: '-500px'}, 500, function () {
            var firstItem = $carouselList.find('li:first');
            var lastItem = $carouselList.find('li:last');
            lastItem.after(firstItem);
            $carouselList.css({marginLeft:0});
        });

        activeSlide++;
        if (activeSlide > 5) {
            activeSlide = 1;
        }
    }

    function moveSlidePrev() {
        $carouselList.animate({marginLeft: 0}, 500, function() {
            var firstItem = $carouselList.find('li:first');
            var lastItem = $carouselList.find('li:last');
            firstItem.before(lastItem);
            $carouselList.css({marginLeft: '-500px'});
        });
        
        activeSlide--;
        if (activeSlide < 1) {
            activeSlide = 5;
        }
    }
   
    $('#button-prev').click(function() {
        moveSlidePrev();
        console.log('active slide: ' + activeSlide);
    });
    
    $('#button-next').click(function() {
        moveSlideNext();
        console.log('active slide: ' + activeSlide);
    });

    $carouselButtons.each(function(){
        $(this).on('click', function(){
            console.log('active slide: ' + activeSlide + ' and go to: ' + $(this).attr('data-go-to'));
        });
    });

    // runInterval();
});
