function download(filename, text) {
  var element = document.createElement('a');
  element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
  element.setAttribute('download', filename);

  element.style.display = 'none';
  document.body.appendChild(element);

  element.click();

  document.body.removeChild(element);
}

$(function() {
  $('#btnSubmit').click(function() {
    var numMeter = parseInt($('#textMeters').val());
    var pointsCount = parseInt($('#textPointsCount').val());
    var lines = $('#textPoints').val().split(/\r?\n/);
    var xmlResult = '';
    for(k in lines) {
      var p = lines[k].split(',');
      xmlResult += kml_ring_with_placeMark(parseFloat(p[1]), parseFloat(p[0]), numMeter, pointsCount, 0, 'point', 'point detail');
    }
    download('result.kml', kml_header('病例範圍') + xmlResult + kml_footer());
    return false;
  });
})
