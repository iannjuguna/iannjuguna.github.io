   
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
      $('#wb_infoBlock2Text').addClass('visibility-hidden');
      $('#reviewsImage1').addClass('visibility-hidden');
      $('#portfolio-image2').addClass('visibility-hidden');
      $("a[href*='#LayoutGridCarousel']").click(function(event)
      {
         event.preventDefault();
         $('html, body').stop().animate({ scrollTop: $('#wb_LayoutGridCarousel').offset().top }, 600, 'easeOutCubic');
      });
      $("a[href*='#infoBlock1']").click(function(event)
      {
         event.preventDefault();
         $('html, body').stop().animate({ scrollTop: $('#wb_infoBlock1').offset().top }, 600, 'easeOutSine');
      });
      $("a[href*='#testimonials']").click(function(event)
      {
         event.preventDefault();
         $('html, body').stop().animate({ scrollTop: $('#testimonials').offset().top }, 600, 'easeOutSine');
      });
      function onScrollinfoBlock2Text()
      {
         var $obj = $("#wb_infoBlock2Text");
         if (!$obj.hasClass("in-viewport") && $obj.inViewPort(false))
         {
            $obj.addClass("in-viewport");
            AnimateCss('wb_infoBlock2Text', 'transform-scale-in', 0, 2000);
         }
         else
         if ($obj.hasClass("in-viewport") && !$obj.inViewPort(true))
         {
            $obj.removeClass("in-viewport");
            AnimateCss('wb_infoBlock2Text', 'animate-fade-out', 0, 0);
         }
      }
      if (!$('#wb_infoBlock2Text').inViewPort(true))
      {
         $('#wb_infoBlock2Text').addClass("in-viewport");
      }
      onScrollinfoBlock2Text();
      $(window).scroll(function(event)
      {
         onScrollinfoBlock2Text();
      });
      $("#welcome-carousel").bootstrapcarousel({interval:0, pause: false});
      $('#welcome-carousel').parallax();
      $("a[href*='#newsletter']").click(function(event)
      {
         event.preventDefault();
         $('html, body').stop().animate({ scrollTop: $('#wb_newsletter').offset().top }, 600, 'easeOutSine');
      });
      $("a[href*='#links']").click(function(event)
      {
         event.preventDefault();
         $('html, body').stop().animate({ scrollTop: $('#wb_links').offset().top }, 600, 'easeOutSine');
      });
      $("a[href*='#faqLayoutGrid']").click(function(event)
      {
         event.preventDefault();
         $('html, body').stop().animate({ scrollTop: $('#wb_faqLayoutGrid').offset().top-88 }, 600, 'easeOutExpo');
      });
      function onScrollfaqLayoutGrid()
      {
         var $obj = $("#wb_faqLayoutGrid");
         if (!$obj.hasClass("in-viewport") && $obj.inViewPort(false))
         {
            $obj.addClass("in-viewport");
            AnimateCss('reviewsImage1', 'animate-fade-in-up', 0, 1000);
            AnimateCss('portfolio-image2', 'animate-fade-in-up', 500, 1000);
         }
      }
      onScrollfaqLayoutGrid();
      $(window).scroll(function(event)
      {
         onScrollfaqLayoutGrid();
      });
      $("#Accordion1").accordion(
      {
         event: 'click',
         animate: 'easeOutSine',
         active: false,
         collapsible: true,
         header: 'h4',
         heightStyle: 'content'
      });
      $("#Accordion1").data("height", $("#Accordion1").outerWidth());
      $(window).resize(function()
      {
         if ($("#Accordion1").data("height") != $("#Accordion1").outerWidth())
         {
            $("#Accordion1").accordion("refresh");
            $("#Accordion1").data("height", $("#Accordion1").outerWidth());
         }
      });
      $('#YouTube1').fancybox(
      {
         'padding' : 0,
         'autoScale' : false,
         'transitionIn' : 'none',
         'transitionOut' : 'none',
         'title' : '',
         'width' : 720,
         'height' : 405
      });
      $('#YouTube2').fancybox(
      {
         'padding' : 0,
         'autoScale' : false,
         'transitionIn' : 'none',
         'transitionOut' : 'none',
         'title' : '',
         'width' : 720,
         'height' : 405
      });
      $('#YouTube3').fancybox(
      {
         'padding' : 0,
         'autoScale' : false,
         'transitionIn' : 'none',
         'transitionOut' : 'none',
         'title' : '',
         'width' : 720,
         'height' : 405
      });
      const plyrYouTube3 = new Plyr('#wb_YouTube3', {loadSprite: false, iconUrl: 'css/plyr.svg'});
      function getSizeRegister_to_Play()
      {
         var dialogWidth = 366;
         var viewportWidth = null!=window.innerWidth?window.innerWidth:"CSS1Compat"==document.compatMode?document.documentElement.clientWidth:document.body.clientWidth;
         return {width: dialogWidth};
      }
      function onResizeRegister_to_Play()
      {
         var size = getSizeRegister_to_Play();
         $("#Register_to_Play").dialog('option', 'width', size.width);
         $("#Register_to_Play").dialog('option', 'position', { my: 'center', at: 'center', of: window } );
      }
      $("#Register_to_Play").dialog(
      {
         title: 'EPIC Facilitator Registration',
         modal: true,
         width: getSizeRegister_to_Play().width,
         position: { my: 'center', at: 'center', of: window },
         resizable: true,
         draggable: true,
         closeOnEscape: true,
         show: false,
         hide: false,
         autoOpen: false,
         classes: {'ui-dialog': 'Register_to_Play'} 
      });
      $(window).resize(function() { onResizeRegister_to_Play() } );
      onResizeRegister_to_Play();
      $('#ThemeableMenu2 .dropdown-toggle').dropdown({popperConfig:{placement:'bottom-start',modifiers:{computeStyle:{gpuAcceleration:false}}}});
      $(document).on('click','.ThemeableMenu2-navbar-collapse.show',function(e)
      {
         if ($(e.target).is('a') && ($(e.target).attr('class') != 'dropdown-toggle')) 
         {
            $(this).collapse('hide');
         }
      });
      var iOS = !!navigator.platform && /iPad|iPhone|iPod/.test(navigator.platform);
      if (iOS)
      {
         $('#welcome-carousel').css('background-attachment', 'scroll');
      }
   });
