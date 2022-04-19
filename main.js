Webcam.set({
    width: 320,
    height: 240,
    image_format: 'jpeg',
    jpeg_quality: 90
});
Webcam.attach('#camera');

function take_picture(){
    Webcam.snap( function(data_uri) {
        document.getElementById('pic').innerHTML = 
         '<img id="image1" src="'+data_uri+'"/>';
    } );
}
console.log(ml5.version);
var classifier = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/eIWwvmn4W/model.json",modelready);

function modelready(){
    console.log("Model is Ready boss")
}

function identify_object(){
    img= document.getElementById("image1");
    classifier.classify(img,classification_completed);
}

function classification_completed(error,result){
    if(error){
        console.error(error);
    }
    else{
        document.getElementById("object").innerHTML = result[0].label;
        document.getElementById("Accuracy").innerHTML = result[0].confidence.toFixed(2)*100+" % ";
    }
}