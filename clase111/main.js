
  Webcam.set({
    width:350,
    height:300,
    image_format : 'png',
    png_quality:90
  });

  camera = document.getElementById("camera");

Webcam.attach( '#camera' );

      
function take_snapshot()
{
    Webcam.snap(function(data_uri) {
        document.getElementById("result").innerHTML = '<img id="captured_image" src="'+data_uri+'"/>';
    });
}

  console.log('ml5 version:', ml5.version);
  
classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/oFAuPm_16/model.json',modelLoaded);

  function modelLoaded() {
    console.log('¡Modelo cargado!');
  }
 /*Escribe el código para almacenar la imagen capturada en la variable
 img, y luego utiliza la función classify() para clasificarla*/     
  function check()
  {
    img = document.getElementById('captured_image');
    classifier.classify(img, gotResult);
  }
  
  //Escribe el código para obtener el resultado. 
 //Define la función gotResult() y muestra en la consola 'error'. De lo contrario, muestra 'result'.
  function gotResult(error, results)
  {
   if (error)
   {
    console.error(error);
   }
   else
   {
    console.log(results)
    document,getElementById("result_object_name").innerHTML = result [0].label;
    document,getElementById("result_object_accuracy").innerHTML = result [0].cofidence.toFixed(3);
   }
  }






 
