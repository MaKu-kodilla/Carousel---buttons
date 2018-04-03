// js.scripts

$(function() {
    var carouselList = $('#carousel ul');
    var timerId;
    
    function runInterval() {
        timerId = setInterval(function () {
            $('#carousel ul').animate({marginLeft: '-500px'}, 500, function () {
                var firstItem = carouselList.find('li:first');
                var lastItem = carouselList.find('li:last');
                lastItem.after(firstItem);
                carouselList.css({marginLeft:0});
            });
        }, 3000);
    }

    function stopInterval() {
        clearInterval(timerId);
    }

    $("#carousel ul").mouseenter(stopInterval);
    $("#carousel ul").mouseleave(runInterval);
   
    $('#button-prev').click(function() {
        $('#carousel ul').animate({marginLeft: 0}, 500, function() {
            var firstItem = carouselList.find('li:first');
            var lastItem = carouselList.find('li:last');
            firstItem.before(lastItem);
            carouselList.css({marginLeft: '-500px'});
        });
    });
    
    $('#button-next').click(function() {
        $('#carousel ul').animate({marginLeft: '-500px'}, 500, function() {
            var firstItem = carouselList.find('li:first');
            var lastItem = carouselList.find('li:last');
            lastItem.after(firstItem);
            carouselList.css({marginLeft: 0});
        });
    });

    runInterval();
});
