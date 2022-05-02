(function($){
  var factory = {
      init:function(){
          this.header();
          this.section1();
          this.section2();
          this.footer();
      },
      header:function(){
          $('.main-btn').on({
              mouseenter:function(){
                $('.sub-bg').stop().slideDown(300);
                $('.sub').stop().slideDown(300);
                $('.main-btn').removeClass('on');
                $(this).addClass('on');
              },
              focusin:function(){
                $('.sub-bg').stop().slideDown(300);
                $('.sub').stop().slideDown(300);
                $('.main-btn').removeClass('on');
                $(this).addClass('on');
              }
          });

          $('.container').on({
              mouseleave:function(){
                $('.sub-bg').stop().slideUp(300);
                $('.sub').stop().slideUp(300);
                $('.main-btn').removeClass('on');
              }
          })
      },
      section1:function(){
          let cnt=0

          function mainSlide(){
              $('.slide-wrap').stop().animate({left:`${-100*cnt}%`},600,function(){
                cnt>2?cnt=0:cnt;
                $('.slide-wrap').stop().animate({left:`${-100*cnt}%`},0)
              })
          }

          function nextCount(){
              cnt++;
              mainSlide();
          }

          function autoTimer(){
              setInterval(nextCount,3000);
          }
          autoTimer();
      },
      section2:function(){
          $('.close-btn').on({
              click:function(){
              $('#modal').stop().fadeOut(300);
              }
          })
          $('.link-btn').on({
              click:function(){
              $('#modal').stop().fadeIn(300);
              }
          })
      },
      footer:function(){

      }
  }
  factory.init();

})(jQuery);