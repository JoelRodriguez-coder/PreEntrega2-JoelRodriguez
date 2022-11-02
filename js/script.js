$( document ).ready(function() {
  var song = document.getElementsByTagName('audio')[0];
  song.load();
});
$(function () {
  var song = document.getElementsByTagName('audio')[0],
      sourceOgg = document.getElementsByTagName('audio')[0],
      sourceMp3 = document.getElementsByTagName('audio')[0];

  sourceOgg.src = 'https://radio.serviciosinformaticoslt.com:10443/radio/8040/AAC';
  sourceMp3.src = 'https://radio.serviciosinformaticoslt.com:10443/radio/8040/AAC';

  $('#player').click(function (e) {
      e.preventDefault();
      if (song.paused) song.play();
      else song.pause();
  });
  $('#player').bind('click', function() {
      if ($('#playback').attr('class') == 'fa fa-pause fa-lg beat')
          $('#playback').attr('class', 'fa fa-play fa-lg');
      else
          $('#playback').attr('class', 'fa fa-pause fa-lg beat');
  });
  song.addEventListener('ended', function () {
      song.pause();
      song.currentTime = 0;
      $('#playback').attr('class', 'fa fa-play fa-lg');
  });
});