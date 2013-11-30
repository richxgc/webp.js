/*webp.js ver 0.1 WebAtom Media GPL 2013*/
window.onload = function(){
	var images, imageType;
	images = document.getElementsByTagName('img');
	for(i=0;i<images.length;i++){
		if(images[i].hasAttribute('data-src') && images[i].hasAttribute('data-format')){
			if(Modernizr.webp == false){
				imageType = '.' + images[i].getAttribute('data-format');
			}
			else{
				imageType = '.webp';
			}
			images[i].src = images[i].getAttribute('data-src') + imageType;
		}
	}
}