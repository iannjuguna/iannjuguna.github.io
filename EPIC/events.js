   
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
      $("#EPIC_Version_II_Game_Session").dialog(
      {
         title: 'EPIC Version II Game Session',
         modal: true,
         width: 324,
         height: 307,
         position: { my: 'center', at: 'center', of: window },
         resizable: true,
         draggable: true,
         closeOnEscape: true,
         show: false,
         hide: false,
         autoOpen: false,
         classes: {'ui-dialog': 'EPIC_Version_II_Game_Session'} 
      });
      $("#Overall_EPIC_Game_V1_Evaluation").on('dialogclose', function(event, ui)
      {
         $('#Overall_EPIC_Game_V1_Evaluation').dialog('close');
      });
      $("#Overall_EPIC_Game_V1_Evaluation").dialog(
      {
         title: 'Overall EPIC Game V1 Evaluation - EPIC Prototype Testing',
         modal: true,
         width: 810,
         position: { my: 'center', at: 'center', of: window },
         resizable: true,
         draggable: true,
         closeOnEscape: true,
         show: false,
         hide: false,
         autoOpen: false,
         classes: {'ui-dialog': 'Overall_EPIC_Game_V1_Evaluation'} 
      });
      $('#Overall_Workshop_Evaluation .modal-dialog').draggable({handle: '.modal-header'});
      $("#Overall_Facilitators_Evaluation").dialog(
      {
         title: 'Overall Facilitators Evaluation of EPIC Game V1 Play Session- EPIC Prototype Testing',
         modal: true,
         width: 810,
         position: { my: 'center', at: 'center', of: window },
         resizable: true,
         draggable: true,
         closeOnEscape: true,
         show: false,
         hide: false,
         autoOpen: false,
         classes: {'ui-dialog': 'Overall_Facilitators_Evaluation'} 
      });
      $('#ThemeableMenu2 .dropdown-toggle').dropdown({popperConfig:{placement:'bottom-start',modifiers:{computeStyle:{gpuAcceleration:false}}}});
      $(document).on('click','.ThemeableMenu2-navbar-collapse.show',function(e)
      {
         if ($(e.target).is('a') && ($(e.target).attr('class') != 'dropdown-toggle')) 
         {
            $(this).collapse('hide');
         }
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
      $("#AFRO__EPIC_Version_II_Pilot_Test").dialog(
      {
         title: 'AFRO: EPIC Version II Pilot Test',
         modal: true,
         width: 324,
         height: 307,
         position: { my: 'center', at: 'center', of: window },
         resizable: true,
         draggable: true,
         closeOnEscape: true,
         show: false,
         hide: false,
         autoOpen: false,
         classes: {'ui-dialog': 'AFRO__EPIC_Version_II_Pilot_Test'} 
      });
      $("#EMRO__EPIC_Version_II_Game_Session").dialog(
      {
         title: 'EMRO: EPIC Version II Game Session',
         modal: true,
         width: 324,
         height: 307,
         position: { my: 'center', at: 'center', of: window },
         resizable: true,
         draggable: true,
         closeOnEscape: true,
         show: false,
         hide: false,
         autoOpen: false,
         classes: {'ui-dialog': 'EMRO__EPIC_Version_II_Game_Session'} 
      });
      $("#EPIC_Facilitator_Registration").dialog(
      {
         title: 'EPIC Facilitator Registration',
         modal: true,
         width: 366,
         position: { my: 'center', at: 'center', of: window },
         resizable: true,
         draggable: true,
         closeOnEscape: true,
         show: false,
         hide: false,
         autoOpen: false,
         classes: {'ui-dialog': 'EPIC_Facilitator_Registration'} 
      });
   });
