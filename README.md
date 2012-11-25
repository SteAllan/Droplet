Droplet
=======

Droplet is a customisable, responsive navigation plugin aimed at simplifying and standardising navigation across multiple devices.

<h3>Usage</h3>
<pre>$.droplet('#selector');</pre>

<h3>Extend</h3>

<pre>
'buttonID': 'droplet-menu',		// The default button ID
'mode': 'droplet-responsive',	// Class added once the smaller breakpoint has been reached
'smallScreen': '768',
'largeScreen': '769',
'shortScreen': '',				// Optionally set a height at which the screen size could be considered too small for a fixed-position nav. Adds class of 'droplet-short' if specified
'Modernizr': false,				// Adds support for Modernizr Media Queries (recommended)
'unit': 'px'					// Choose the unit for the Modernizr media queries (defaults to px)
</pre>