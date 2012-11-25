/*
*	Droplet.js
*	https://github.com/invmatt/Droplet
*	Version: 1.0.1
*	Usage: $.droplet('#selector');
*	Extend: $.droplet('#selector', {options});
*/

(function($){
    $.droplet = function(selector, settings){
        var config = {
            'buttonID': 'droplet-menu',		// The default button ID
			'mode': 'droplet-responsive',	// Class added once the smaller breakpoint has been reached
			'smallScreen': '768',
			'largeScreen': '769',
			'shortScreen': '',				// Optionally set a height at which the screen size could be considered too small for a fixed-position nav. Adds class of 'droplet-short' if specified
			'Modernizr': false,				// Adds support for Modernizr Media Queries (recommended)
			'unit': 'px'					// Choose the unit for the Modernizr media queries
        };
		
        if ( settings ){$.extend(config, settings);}
		
		// Set some basic vars
		var obj = $(selector);
		var child = obj.children('ul');
		var menuSize = "";
		var i = 0;
		
		if (config.Modernizr == true) {
			$("body").addClass("droplet-enabled-mdnz");
		}
					
		else {
			$("body").addClass("droplet-enabled");
		}
 
		$(function() { windowSize(); });
		$(window).resize(windowSize);
		
		function windowSize() {

			if ( (config.Modernizr == false && $(window).width() <= config.smallScreen) || (config.Modernizr == true && Modernizr.mq('only screen and (max-width : '+ config.smallScreen + config.unit +')')) ) {
				
				
				if (menuSize != "small") {
					menuSize = "small";
					$(obj).addClass(config.mode);
					
					$(obj).prepend('<div id="'+ config.buttonID +'">Main Menu</div>');
					$(child).css('display', 'none');
					
					$("#"+ config.buttonID +"").click(function() {
						
						if ($(child).css('display') == 'none') {
							$(child).slideDown("fast");
						}
						
						else if ($(child).css('display') == 'block') {
							$(child).slideUp("fast");
						}
						
					});
					
					if ( (config.shortScreen != '' && config.Modernizr == false && $(window).height() <= config.shortScreen) || (config.shortScreen != '' && config.Modernizr == true && Modernizr.mq('only screen and (max-height : '+ config.shortScreen + config.unit +')')) ) {
						$(obj).addClass('droplet-short');
					}

				} 
				
			}
			
			
			else if ( (config.Modernizr == false && $(window).width() >= config.largeScreen) || (config.Modernizr == true && Modernizr.mq('only screen and (min-width : '+ config.largeScreen + config.unit +')')) ) {
				if (menuSize != "large") {
					menuSize = "large";
					
					$(child).css('display', 'block');
					$(obj).removeClass(config.mode);
					$("#"+ config.buttonID +"").remove();
					
				}
				
			} 
			
		}
 
        return this;
    };
	
})(jQuery);