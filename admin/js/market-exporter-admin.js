(function( $ ) {
	'use strict';

	/**
	 * All of the code for your admin-facing JavaScript source
	 * should reside in this file.
	 *
	 * Note: It has been assumed you will write jQuery code here, so the
	 * $ function reference has been prepared for usage within the scope
	 * of this function.
	 *
	 * This enables you to define handlers, for when the DOM is ready:
	 *
	 * $(function() {
	 *
	 * });
	 *
	 * When the window is loaded:
	 *
	 * $( window ).load(function() {
	 *
	 * });
	 *
	 * ...and/or other possibilities.
	 *
	 * Ideally, it is not considered best practise to attach more than a
	 * single DOM-ready or window-load handler for a particular page.
	 * Although scripts in the WordPress core, Plugins and Themes may be
	 * practising this, we should strive to set a better example in our own work.
	 */

	$(document).ready(function() {
        $('#vendor').select2({
            minimumResultsForSearch: Infinity
		});

        $('#model').select2({
            minimumResultsForSearch: Infinity
        });

        $('#market_category').select2({
            minimumResultsForSearch: Infinity
        });

        $('#params').select2({
            minimumResultsForSearch: Infinity
        });

		$('#cron').select2({
			minimumResultsForSearch: Infinity
		});


		$('#rate-notice').on('click', function() {
			$.post( ajax_strings.ajax_url, {
				_ajax_nonce: ajax_strings.nonce,
				action: 'dismiss_rate_notice'
			});
		});

    });


})( jQuery );

function toggle(source) {
  var checkboxes = document.getElementsByName('files[]');
  for ( var i=0, n=checkboxes.length; i<n; i++ ) {
    checkboxes[i].checked = source.checked;
  }
}
