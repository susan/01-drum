
document.addEventListener("DOMContentLoaded", (e) => {
  //const aTag= document.querySelector("[data-key='65']")
  //console.log(aTag)


  document.addEventListener("keydown", (e) => {
    //console.log(e.keyCode)
    const audioTag= document.querySelector(`audio[data-key="${e.keyCode}"]`)
    //console.log(audioTag)
    if (!audioTag) {
    	return;//if audiotag is not found ie null, end func.
    }
    audioTag.currentTime=0; //rewinds it
    audioTag.play()

    const keyTag= document.querySelector(`.key[data-key="${e.keyCode}"]`)
    console.log(keyTag)
    keyTag.classList.add('play');
  })

  const keyTagsArray = document.querySelectorAll('.key')
    console.log(keyTagsArray)
    keyTagsArray.forEach( key =>
	  	key.addEventListener('transitionend', (e) => {
	     console.log(e)
	     key.classList.remove('play')
  	})
  )

})//end of DOM Content Loaded
