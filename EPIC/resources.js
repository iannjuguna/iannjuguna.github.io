   
   document.addEventListener('DOMContentLoaded', function(event)
   {
      var options = 
      {
         pdfOpenParams: { zoom: '47', pagemode: 'none', scrollbar: '0', toolbar: '0', statusbar: '0', messages: '0', navpanes: '0' },
         fallbackLink: '<p>This browser does not support inline PDFs. Please download the PDF to view it: <a href="[url]">Download PDF!</a></p>'
      };
      PDFObject.embed("EPIC Project Implementation Guide - compressed.pdf", "#Extension1", options);
   });
   
   document.addEventListener('DOMContentLoaded', function(event)
   {
      var options = 
      {
         pdfOpenParams: { zoom: '47', pagemode: 'none', scrollbar: '0', toolbar: '0', statusbar: '0', messages: '0', navpanes: '0' },
         fallbackLink: '<p>This browser does not support inline PDFs. Please download the PDF to view it: <a href="[url]">Download PDF!</a></p>'
      };
      PDFObject.embed("EPIC Newsletter.pdf", "#Extension2", options);
   });
   
   document.addEventListener('DOMContentLoaded', function(event)
   {
      var options = 
      {
         pdfOpenParams: { zoom: '47', pagemode: 'none', scrollbar: '0', toolbar: '0', statusbar: '0', messages: '0', navpanes: '0' },
         fallbackLink: '<p>This browser does not support inline PDFs. Please download the PDF to view it: <a href="[url]">Download PDF!</a></p>'
      };
      PDFObject.embed("EPIC Newsletter.pdf", "#Extension3", options);
   });
   
   document.addEventListener('DOMContentLoaded', function(event)
   {
      var options = 
      {
         pdfOpenParams: { zoom: '47', pagemode: 'none', scrollbar: '0', toolbar: '0', statusbar: '0', messages: '0', navpanes: '0' },
         fallbackLink: '<p>This browser does not support inline PDFs. Please download the PDF to view it: <a href="[url]">Download PDF!</a></p>'
      };
      PDFObject.embed("EPIC Newsletter.pdf", "#Extension4", options);
   });
   
   document.addEventListener('DOMContentLoaded', function(event)
   {
      var options = 
      {
         pdfOpenParams: { zoom: '47', pagemode: 'none', scrollbar: '0', toolbar: '0', statusbar: '0', messages: '0', navpanes: '0' },
         fallbackLink: '<p>This browser does not support inline PDFs. Please download the PDF to view it: <a href="[url]">Download PDF!</a></p>'
      };
      PDFObject.embed("Concept Note 1_Final.pdf", "#Extension5", options);
   });
   
   document.addEventListener('DOMContentLoaded', function(event)
   {
      var options = 
      {
         pdfOpenParams: { zoom: '47', pagemode: 'none', scrollbar: '0', toolbar: '0', statusbar: '0', messages: '0', navpanes: '0' },
         fallbackLink: '<p>This browser does not support inline PDFs. Please download the PDF to view it: <a href="[url]">Download PDF!</a></p>'
      };
      PDFObject.embed("Concept Note 2_Final.pdf", "#Extension6", options);
   });
   
   $(document).ready(function()
   {
      $("a[href*='#chooseUs']").click(function(event)
      {
         event.preventDefault();
         $('html, body').stop().animate({ scrollTop: $('#wb_chooseUs').offset().top }, 600, 'easeOutSine');
      });
      var implemetation_layerOpts =
      {
         modal: true,
         width: 1280,
         height: 722,
         position: { my: 'center', at: 'center', of: window },
         resizable: false,
         draggable: false,
         closeOnEscape: true,
         show: 'fade',
         hide: 'fade',
         autoOpen: false,
         classes: {'ui-dialog': 'implemetation_layer'}
      };
      $("#implemetation_layer").dialog(implemetation_layerOpts);
      $(".implemetation_layer .ui-dialog-titlebar").hide();
      $(".implemetation_layer").removeClass('ui-corner-all');
      $(".implemetation_layer").removeClass('ui-widget-content');
      $("#implemetation_layer").css({'padding':'0','height':'722px'});
      $("#implemetation_layer-close").click( function()
      {
         $("#implemetation_layer").dialog('close');
      });
      var Newsletter1Opts =
      {
         modal: true,
         width: 1280,
         height: 722,
         position: { my: 'center', at: 'center', of: window },
         resizable: false,
         draggable: false,
         closeOnEscape: true,
         show: 'fade',
         hide: 'fade',
         autoOpen: false,
         classes: {'ui-dialog': 'Newsletter1'}
      };
      $("#Newsletter1").dialog(Newsletter1Opts);
      $(".Newsletter1 .ui-dialog-titlebar").hide();
      $(".Newsletter1").removeClass('ui-corner-all');
      $(".Newsletter1").removeClass('ui-widget-content');
      $("#Newsletter1").css({'padding':'0','height':'722px'});
      $("#Newsletter1-close").click( function()
      {
         $("#Newsletter1").dialog('close');
      });
      var Newsletter2Opts =
      {
         modal: true,
         width: 1280,
         height: 722,
         position: { my: 'center', at: 'center', of: window },
         resizable: false,
         draggable: false,
         closeOnEscape: true,
         show: 'fade',
         hide: 'fade',
         autoOpen: false,
         classes: {'ui-dialog': 'Newsletter2'}
      };
      $("#Newsletter2").dialog(Newsletter2Opts);
      $(".Newsletter2 .ui-dialog-titlebar").hide();
      $(".Newsletter2").removeClass('ui-corner-all');
      $(".Newsletter2").removeClass('ui-widget-content');
      $("#Newsletter2").css({'padding':'0','height':'722px'});
      $("#Newsletter2-close").click( function()
      {
         $("#Newsletter2").dialog('close');
      });
      var Newsletter3Opts =
      {
         modal: true,
         width: 1280,
         height: 722,
         position: { my: 'center', at: 'center', of: window },
         resizable: false,
         draggable: false,
         closeOnEscape: true,
         show: 'fade',
         hide: 'fade',
         autoOpen: false,
         classes: {'ui-dialog': 'Newsletter3'}
      };
      $("#Newsletter3").dialog(Newsletter3Opts);
      $(".Newsletter3 .ui-dialog-titlebar").hide();
      $(".Newsletter3").removeClass('ui-corner-all');
      $(".Newsletter3").removeClass('ui-widget-content');
      $("#Newsletter3").css({'padding':'0','height':'722px'});
      $("#Newsletter3-close").click( function()
      {
         $("#Newsletter3").dialog('close');
      });
      var Concept_Note_1Opts =
      {
         modal: true,
         width: 1280,
         height: 722,
         position: { my: 'center', at: 'center', of: window },
         resizable: false,
         draggable: false,
         closeOnEscape: true,
         show: 'fade',
         hide: 'fade',
         autoOpen: false,
         classes: {'ui-dialog': 'Concept_Note_1'}
      };
      $("#Concept_Note_1").dialog(Concept_Note_1Opts);
      $(".Concept_Note_1 .ui-dialog-titlebar").hide();
      $(".Concept_Note_1").removeClass('ui-corner-all');
      $(".Concept_Note_1").removeClass('ui-widget-content');
      $("#Concept_Note_1").css({'padding':'0','height':'722px'});
      $("#Concept_Note_1-close").click( function()
      {
         $("#Concept_Note_1").dialog('close');
      });
      var Concept_Note_2Opts =
      {
         modal: true,
         width: 1280,
         height: 722,
         position: { my: 'center', at: 'center', of: window },
         resizable: false,
         draggable: false,
         closeOnEscape: true,
         show: 'fade',
         hide: 'fade',
         autoOpen: false,
         classes: {'ui-dialog': 'Concept_Note_2'}
      };
      $("#Concept_Note_2").dialog(Concept_Note_2Opts);
      $(".Concept_Note_2 .ui-dialog-titlebar").hide();
      $(".Concept_Note_2").removeClass('ui-corner-all');
      $(".Concept_Note_2").removeClass('ui-widget-content');
      $("#Concept_Note_2").css({'padding':'0','height':'722px'});
      $("#Concept_Note_2-close").click( function()
      {
         $("#Concept_Note_2").dialog('close');
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
      $('#ThemeableMenu2 .dropdown-toggle').dropdown({popperConfig:{placement:'bottom-start',modifiers:{computeStyle:{gpuAcceleration:false}}}});
      $(document).on('click','.ThemeableMenu2-navbar-collapse.show',function(e)
      {
         if ($(e.target).is('a') && ($(e.target).attr('class') != 'dropdown-toggle')) 
         {
            $(this).collapse('hide');
         }
      });
   });
