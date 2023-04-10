var container = document.querySelector('#container');
var foto = new PANOLENS.ImagePanorama('1.jpg');
var foto2 = new PANOLENS.ImagePanorama('2.jpg');
var foto3 = new PANOLENS.ImagePanorama('3.jpg');

var viewer = new PANOLENS.Viewer({ container: container });
viewer.add(foto,foto2,foto3);

//infospot
var infospot = new PANOLENS.Infospot(350, PANOLENS.DataImage.Info);
infospot.position.set(0, -2000, -5000);
foto.add(infospot);

infospot.addEventListener('click', function () {
    onButtonClick(foto2);
});

var infospot2 = new PANOLENS.Infospot(350, PANOLENS.DataImage.Info);
infospot2.position.set(0, -2000, -5000);
foto2.add(infospot2);

infospot2.addEventListener('click', function () {
    onButtonClick(foto3);
});

var infospot3 = new PANOLENS.Infospot(350, PANOLENS.DataImage.Info);
infospot3.position.set(0, -2000, -5000);
foto3.add(infospot3);

infospot3.addEventListener('click', function () {
    onButtonClick(foto);
});

//bar progress
var bar = document.querySelector( '#bar' );

function onProgressUpdate ( event ) {
    var percentage = event.progress.loaded / event.progress.total * 100;
    bar.style.width = percentage + "%";
    if (percentage >= 100){
        bar.classList.add( 'hide' );
        setTimeout(function(){
        bar.style.width = 0;
        }, 1000);
    }
}

function onButtonClick(targetPanorama) {
    bar.classList.remove('hide');
    viewer.setPanorama(targetPanorama);
}

foto.addEventListener('progress', onProgressUpdate);
foto2.addEventListener('progress', onProgressUpdate);
foto3.addEventListener('progress', onProgressUpdate);