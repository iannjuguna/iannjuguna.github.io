   
   function displaylightbox(url, options)
   {
      options.padding = 0;
      options.autoScale = true;
      options.href = url;
      options.type = 'iframe';
      $.fancybox(options);
   }
   
   $(document).ready(function()
   {
      $('#wb_Text1').addClass('visibility-hidden');
      $("a[href*='#infoBlock1']").click(function(event)
      {
         event.preventDefault();
         $('html, body').stop().animate({ scrollTop: $('#wb_infoBlock1').offset().top }, 600, 'easeOutSine');
      });
      function onScrollText1()
      {
         var $obj = $("#wb_Text1");
         if (!$obj.hasClass("in-viewport") && $obj.inViewPort(false))
         {
            $obj.addClass("in-viewport");
            AnimateCss('wb_Text1', 'transform-scale-in', 0, 2000);
         }
         else
         if ($obj.hasClass("in-viewport") && !$obj.inViewPort(true))
         {
            $obj.removeClass("in-viewport");
            AnimateCss('wb_Text1', 'animate-fade-out', 0, 0);
         }
      }
      if (!$('#wb_Text1').inViewPort(true))
      {
         $('#wb_Text1').addClass("in-viewport");
      }
      onScrollText1();
      $(window).scroll(function(event)
      {
         onScrollText1();
      });
      $("#Register_to_Join").dialog(
      {
         title: 'Register to Join the Global NFP Network',
         modal: true,
         width: 425,
         position: { my: 'center', at: 'center', of: window },
         resizable: true,
         draggable: true,
         closeOnEscape: true,
         show: { effect: 'fade', duration: 400 },
         hide: { effect: 'fade', duration: 400 },
         autoOpen: false,
         classes: {'ui-dialog': 'Register_to_Join'} 
      });
      $("#SlideShow1").conveyerbelt({speed:1, spacing: 5});
      $("a[href*='#links']").click(function(event)
      {
         event.preventDefault();
         $('html, body').stop().animate({ scrollTop: $('#wb_links').offset().top }, 600, 'easeOutSine');
      });
      $('#ThemeableMenu2 .dropdown-toggle').dropdown({popperConfig:{placement:'right-end',modifiers:{computeStyle:{gpuAcceleration:false}}}});
      $(document).on('click','.ThemeableMenu2-navbar-collapse.show',function(e)
      {
         if ($(e.target).is('a') && ($(e.target).attr('class') != 'dropdown-toggle')) 
         {
            $(this).collapse('hide');
         }
      });
   });
