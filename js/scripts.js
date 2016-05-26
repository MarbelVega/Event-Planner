(function() {
	$.datetimepicker.setLocale('en');
	$('#start_datetimepicker').datetimepicker({
		formatTime:'H:i',
		formatDate:'d.m.Y',
		defaultDate:'+03.01.1970',
		defaultTime:'10:00',
		timepickerScrollbar:false
	});
	
	$('#end_datetimepicker').datetimepicker({
		formatTime:'H:i',
		formatDate:'d.m.Y',
		defaultDate:'+03.01.1970',
		defaultTime:'10:00',
		timepickerScrollbar:false
	});

	$(document).ready(function(){
		
		$('input#eventName').characterCounter();
		
		// $( "#signup-form" ).submit(function( event ) {
		// 	$("#createEvent").removeClass('disabled');
		// 	event.preventDefault();
		// });
		 
		$('datalist').material_select();

		$('.datepicker').pickadate({
			selectMonths: true,
			selectYears: 15
		});
	});

})();