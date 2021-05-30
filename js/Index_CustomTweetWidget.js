$('.twitter-block').delegate('#twitter-widget-0','DOMSubtreeModified propertychange', function() {
    //function call to override the base twitter styles
    customizeTweetMedia();
});

var customizeTweetMedia = function() {
    //border+outline
    $('.twitter-block').find('.twitter-timeline').css({"border": "4px solid rgb(255, 225, 241)", "outline" : "8px solid rgb(255, 189, 225)"});
    $('.twitter-block').find('.twitter-timeline').contents().find('.timeline-Widget').css({"border-radius": "0px"});
    $('.twitter-block').find('.twitter-timeline').contents().find('.timeline-header').css({"background-color" : "rgb(255, 230, 244)"});

    //highligh tweet
    $('.twitter-block').find('.twitter-timeline').contents().find('.timeline-Tweet').hover(function() {
        $(this).css("background-color","rgb(255, 230, 244)")
    }, function() {
        $(this).css("background-color","white");
    });

    //tweet border
    $('.twitter-block').find('.twitter-timeline').contents().find('.timeline-TweetList-tweet').css("border-top", "1px solid rgba(255, 20, 147, .14)")
    $('.twitter-block').find('.twitter-timeline').contents().find('.timeline-Body').css({"border-top": "1px solid rgba(255, 20, 147, .14)", "border-bottom": "1px solid rgba(255, 20, 147, .14)"})
    
    //info icon
    $('.twitter-block').find('.twitter-timeline').contents().find('.Icon--informationCircleWhite').css("background-image", "url('Images/twitter-info-icon.png')")
    
    //brand icon
    $('.twitter-block').find('.twitter-timeline').contents().find('.timeline-Tweet-brand .Icon--twitter').css({"background-image" : "url('Images/tweet-idle.png')"})
    $('.twitter-block').find('.twitter-timeline').contents().find('.timeline-Tweet').hover(function(){
        $(this).find('.timeline-Tweet-brand .Icon--twitter').css({"background-image" : "url('Images/tweet-hover.png')"})
    }, function(){
        $(this).find('.timeline-Tweet-brand .Icon--twitter').css({"background-image" : "url('Images/tweet-idle.png')"})
    });

    //heart icon
    $('.twitter-block').find('.twitter-timeline').contents().find('.TweetAction--heart .Icon').css({"background-image": "url('Images/twitter-like-idle.png')", "backgound-size": "25px 25px"})
    $('.twitter-block').find('.twitter-timeline').contents().find('.TweetAction--heart').hover(function(){
        $(this).find('.Icon').attr("style", "background-image: url('Images/twitter-like-hover.png') !important")
    }, function(){
        $(this).find('.Icon').css({"background-image": "url('Images/twitter-like-idle.png')"})
    });

    //share icon
    $('.twitter-block').find('.twitter-timeline').contents().find('.TweetAction--share .Icon').css({"background-image": "url('Images/twitter-share-idle.png')", "backgound-size": "25px 25px"})    
    $('.twitter-block').find('.twitter-timeline').contents().find('.TweetAction--share').hover(function(){
        $(this).find('.Icon').attr("style", "background-image: url('Images/twitter-share-hover.png') !important")
    }, function(){
        $(this).find('.Icon').attr("style", (selected) ? "background-image: url('Images/twitter-share-hover.png') !important" : "background-image: url('Images/twitter-share-idle.png') !important");
    });
    var selected = false;
    $('.twitter-block').find('.twitter-timeline').contents().find('.TweetAction--share').click(function(){
        selected = true;
        $('.twitter-block').find('.twitter-timeline').contents().find(".timeline-ShareMenu-container").show()
    });
    $(document).click(function(event) { 
        if(!$(event.target).closest('.TweetAction--share').length){
            selected = false
            $('.twitter-block').find('.twitter-timeline').contents().find('.TweetAction--share .Icon').attr("style", "background-image: url('Images/twitter-share-idle.png') !important")
        }        
    });
    //share dropdown
    $('.twitter-block').find('.twitter-timeline').contents().find(".timeline-ShareMenu-option").hover(function(){
        $(this).css({"background-color": "hotpink"})
    }, function(){
        $(this).css({"background-color": "rgb(255, 240, 248)"})
    });
    $('.twitter-block').find('.twitter-timeline').contents().find(".timeline-ShareMenu-caret").remove()
    $('.twitter-block').find('.twitter-timeline').contents().find(".timeline-ShareMenu-title").css({"color": "hotpink"})
    $('.twitter-block').find('.twitter-timeline').contents().find(".timeline-ShareMenu-container").css({"background-color": "rgb(255, 240, 248)"})
    $('.twitter-block').find('.twitter-timeline').hover(function(){
        $('.twitter-block').find('.twitter-timeline').contents().find(".timeline-ShareMenu-container").hide()
        $('.twitter-block').find('.twitter-timeline').contents().find('.TweetAction--share .Icon').attr("style", "background-image: url('Images/twitter-share-idle.png') !important")
    });
    
    //hyperlink color
    $('.twitter-block').find('.twitter-timeline').contents().find('.timeline-Widget a').css({"color" : "hotpink"})
    $('.twitter-block').find('.twitter-timeline').contents().find('.timeline-Widget a').hover(function(){
        $(this).css({"color" : "deeppink"})
    }, function(){
        $(this).css({"color" : "hotpink"})
    });

    //Load more
    $('.twitter-block').find('.twitter-timeline').contents().find('.timeline-LoadMore-endOfTimelineMessage').css("color")
    $('.twitter-block').find('.twitter-timeline').contents().find('.timeline-ShowMoreButton').css({"color" : "hotpink", "background-color": "white", "border": "1px solid hotpink"})
    $('.twitter-block').find('.twitter-timeline').contents().find('.timeline-ShowMoreButton').hover(function(){
        $(this).css({"color" : "white", "background-color": "hotpink"})
    }, function(){
        $(this).css({"color" : "hotpink", "background-color": "white"})
    });
    
    //empty timeline
    $('.twitter-block').find('.twitter-timeline').contents().find('.Button').css({"color" : "hotpink", "background-color": "white", "border": "1px solid hotpink"})
    $('.twitter-block').find('.twitter-timeline').contents().find('.Button').hover(function(){
        $(this).css({"background-color": "hotpink"})
    }, function(){
        $(this).css({"background-color": "white"})
    });
    

    $('.twitter-block').find('.twitter-timeline').contents().find('.timeline-TweetList').bind('DOMSubtreeModified propertychange', function() {
        customizeTweetMedia(this);
    });
}