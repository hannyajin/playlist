$(function() {

	// Soundcloud api key
	var client_id = '4484dd04f4ce2c7c66cc55b4aa64301b';

	// playlist
	var playlist = {
		name: "default",
		tracks: [
			'mourning ritual bad moon rising',
			'aphex twin avril14th',
			'laissez moi vanilla'
		]
	};

	var tracks = playlist.tracks;

	var iframe = $('#widget')[0];
	// SC widget
	var widget;

	// init soundcloud app
	SC.initialize({
		client_id: client_id
	});

	iframe.src = "http://w.soundcloud.com/player/?url=https://soundcloud.com/withlovexavier/drake-medley";
	widget = SC.Widget(iframe);


	// get track by name
	function getTrack(name) {
		SC.get('http://api.soundcloud.com/tracks', { q: name, limit: 3 }, function(tracks) {
			if (tracks.length == 0) {
				$('#error').append('No tracks found');
			} else {
				playTrack(tracks[0]);
			}
		});
	}	

	function playTrack(track) {
		var params = {
			auto_play: true,
			buying: false,
			sharing: false,
			show_playcount: false,
			show_comments: false
		};

		widget.load(track.uri, params);
		$('#trackname').text(track.title);
	}

	setTimeout(function() {
		console.log(tracks[0]);
		getTrack(tracks[0]);
	} , 500);

});