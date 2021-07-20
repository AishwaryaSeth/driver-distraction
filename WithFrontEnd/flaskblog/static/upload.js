function localFileVideoPlayer() {
	'use strict'
  var URL = window.URL || window.webkitURL
	var fileURL
  var displayMessage = function (message, isError, file) {
    var element = document.querySelector('#message')
    element.innerHTML = message
    element.className = isError ? 'error' : 'info'
		var element1=document.querySelector('#testing')
		element1.innerHTML= "Selected File: "+ fileURL
		  }
  var playSelectedFile = function (event) {
    var file = this.files[0]
    var type = file.type
    var videoNode = document.querySelector('video')
    var canPlay = videoNode.canPlayType(type)
    if (canPlay === '') canPlay = 'no'
    var message = 'Plays type "' + type + '": ' + canPlay
    var isError = canPlay === 'no'

    if (isError)
		{
      return;
    }

    fileURL = URL.createObjectURL(file)
    videoNode.src = fileURL
		displayMessage(message, isError,file)

  }
  var inputNode = document.querySelector('input')
  inputNode.addEventListener('change', playSelectedFile, false)
	return;
}
