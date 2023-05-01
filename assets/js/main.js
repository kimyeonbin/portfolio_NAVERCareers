$(function(){
    /**
     * @헤더내비
     */
    $('.gnb .nav-item').hover(function(){
        if($(this).has('.sub').length){
            $('.header').addClass('on');
            $(this).find('.sub').addClass('on');
        }},function(){
            $('.header,.header .sub').removeClass('on');}
        );
    /**
     * @사이트언어변경
     */
    $('.gnb .btn-lang').click(function(){
        $('.gnb .lang-box').toggleClass('on');
    });
    /**
     * @모바일검색창_열고닫기
     */
    $('.btn-search').click(function(){
        $('.group-career2').addClass('on');
        $('body').addClass('hidden');
        $('.header').addClass('hidden');
    });
    $('.group-career2 .btn-close').click(function(){
        $('.group-career2').removeClass('on');
        $('body').removeClass('hidden');
        $('.header').removeClass('hidden');
    });
    /**
     * @모바일검색_아코디언메뉴
     */
    $('.group-career2 .career').click(function(){
        $(this).toggleClass('on').siblings('.group-career2 .depth2, .sc-team .group-career2 .item > .chk-box').stop().slideToggle();
    });
    $('.group-career2 .sub').click(function(){
        $(this).toggleClass('on').siblings('.group-career2 .depth3').stop().slideToggle();
    });
    /**
     * @모바일검색_전체선택
     */
    $('.all').click(function(){
        sort=$(this).data('sort');
        if($(this).prev().prop('checked')){
            $(sort).find('input').prop('checked',false);
        }else{
            $(sort).find('input').prop('checked',true);
        };
    });
    /**
     * @모바일검색_전체삭제
     */
    $('.group-career2 .btn-clear').click(function(){
        $('.group-career2 input[type=checkbox]').prop('checked',false)
    });
    /**
     * @직군검색
     */
    $('.group-career1 select').change(function(){
        $(this).css('color','#000');
    });
    $('.group-career1 select').click(function(){
        $(this).toggleClass('active');
    });
    /**
     * @사이드내비_버튼
     */
    $('.gnb .btn-menu').click(function(){
        $('.gnb .btn-menu, .gnb .side-nav').toggleClass('on');
    });
    /**
     * @사이드내비_아코디언메뉴
     */
    $('.side-nav .nav').click(function(){
        $(this).toggleClass('active').siblings('.side-nav .depth2').stop().slideToggle();
    });
    /**
     * @사이드내비_언어변경
     */
    $('.side-nav .lang').click(function(e){
        e.preventDefault();
        $(this).toggleClass('active').siblings('.side-nav .lang').removeClass('active');
    });
    /**
     * @video슬라이드
     */
    const VideoSlide = new Swiper('.video-slide',{
        simulateTouch:false,
        loop:true,
        autoplay:{
            delay:3000,
        },
        speed:600,
    });
    /**
     * @people슬라이드
     */
    const peopleSlide = new Swiper('.people-slider',{
        slidesPerView:1,
        spaceBetween:30,
        navigation:{
            nextEl:'.btn-next',
            prevEl:'.btn-prev',
        },
        breakpoints:{
            768:{
                slidesPerView:1.1,
            },
        }
    });
    /**
     * @benefits슬라이드
     */
    const benefitsSlide = new Swiper('.benefits-slider',{
        slidesPerView:1,
        spaceBetween:30,
        navigation:{
            nextEl:'.btn-next',
            prevEl:'.btn-prev',
        },
        breakpoints:{
            768:{
                slidesPerView:2,
            },
            1025:{
                slidesPerView:3,
            }
        }
    });  
    /**
     * @관련사이트
     */
    $('.footer .related-area .btn-related').click(function(){
        $('.footer .related-area').toggleClass('active');
    });
    /**
     * @모바일검색창_너비조절
     */
    $(window).resize(function(){
        
        windowVal = $(window).width();

        if(windowVal >= 768){
            $('body').removeClass('hidden');
        }else{
            if($('.sc-team .group-career2').hasClass('on')){
                $('body').addClass('hidden');
            }
        }
    });
});
