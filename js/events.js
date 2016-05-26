(function() {

	var txtEventName = document.getElementById('eventName'),
		txtEventType = document.getElementById('eventType'),
		txtEventHost = document.getElementById('eventHost'),
		txtDateTimeStart = document.getElementById('start_datetimepicker'),
		txtDateTimeEnd = document.getElementById('end_datetimepicker'),
		txtGuestList = document.getElementById('guest-list'),
		txtLocation = document.getElementById('location'),
		txtMessage = document.getElementById('message');

	var rootRef = new Firebase('https://hasap.firebaseio.com'),
		usersRef = rootRef.child('users'),
		eventsRef = rootRef.child('events');

	btnCreateEvent.addEventListener('click', function() {
		eventsRef.push({
			eventName: txtEventName.value,
			eventType: txtEventType.value,
			eventHost: txtEventHost.value,
			startDateTimePicker: txtDateTimeStart.value,
			endDateTimePicker: txtDateTimeEnd.value,
			eventGuestList: txtGuestList.value,
			eventLocation: txtLocation.value,
			eventMessage: txtMessage.value,
		});
	});

	eventsRef.on('child_added', function (snapshot, prevChildKey) {
		var theEvent = snapshot.val();
		displayData(theEvent.eventName, theEvent.eventType, theEvent.eventHost, 
				theEvent.startDateTimePicker, theEvent.endDateTimePicker, 
				theEvent.eventGuestList, theEvent.eventLocation);
	});

	eventsRef.on('child_changed', function (snapshot) {
		var chngEvent = snapshot.val();
		displayData(theEvent.eventName, theEvent.eventType, theEvent.eventHost, 
				theEvent.startDateTimePicker, theEvent.endDateTimePicker, 
				theEvent.eventGuestList, theEvent.eventLocation);
	});

	eventsRef.once('value', function(snapshot) {
	  var count = 0;
	  snapshot.forEach(function(childSnapshot) {
	    count++;
	  });
	  return $('#badge').text(count);
	});


	function displayData(name, type, host, datestart, dateend, guest, location) {
		$('<tr />').
			prepend(
				$('<td />').text(name), 
				$('<td />').text(type), 
				$('<td />').text(host), 
				$('<td />').text(datestart), 
				$('<td />').text(dateend), 
				$('<td />').text(guest), 
				$('<td />').text(location)
			).prependTo("#events");
	}
	
})();