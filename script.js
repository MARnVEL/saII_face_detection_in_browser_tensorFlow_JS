
/*
Pasos:
    1. Obtener acceso al video de la webcam.
    2. Realizar la detección de rostros usando TFJS
    3. Mostrar los resultados.
*/

let video = document.getElementById('video');
// let model
let canvas = document.getElementById('canvas');

let canvasContext = canvas.getContext('2d');

// Invertir el video horizontalmente
// canvasContext.scale(-1, 1);
// canvasContext.translate(-canvas.width, 0);

// import { faceWoman } from "./assets/faceWoman.jpg";
// const image = document.getElementById('imagen');

const iniciarCamara = () => {
    navigator.mediaDevices.getUserMedia({
        video: { width: 600, height: 400},
        audio: false,
    }).then(stream => {
        video.srcObject = stream;
        // video.addEventListener("loadeddata", detectar);

        // Invertir horizontalmente la salida del video
        // video.style.transform = "scaleX(-1)";
    });
};

const detectar = async () => {
    // console.log('probando')
    // const shot = canvasContext.drawImage( video, 0, 0, 600, 400 )
    // console.log(shot)
    const model = await faceDetection.SupportedModels.MediaPipeFaceDetector;
    
    // console.log(model)
    const detectorConfig = {
        runtime: 'tfjs',
        maxFaces: 100,
        modelType: 'full',
    };
    const detector = await faceDetection.createDetector(model, detectorConfig);
    // console.log(detector)
    const estimationConfig = {flipHorizontal: false};
    const faces = await detector.detectFaces( video, estimationConfig );
    console.log("Este es el resultado del detect", faces);
    
    canvasContext.drawImage(video, 0, 0, 600, 400);
    faces.forEach((face) => {

        // console.log(face.locationData)
        const xMin = face.locationData.relativeBoundingBox.xMin * canvas.width;
        const yMin = face.locationData.relativeBoundingBox.yMin * canvas.height;
        const xMax = face.locationData.relativeBoundingBox.xMax * canvas.width;
        const yMax = face.locationData.relativeBoundingBox.yMax * canvas.height;
        const height = face.locationData.relativeBoundingBox.height * canvas.height;
        const width = face.locationData.relativeBoundingBox.width * canvas.width;

        // console.log("Ancho del canvas", canvas.width)
        // console.log("xMin", xMin)
        // console.log("xMax", xMax)

        canvasContext.beginPath();
        canvasContext.lineWidth = "4";
        canvasContext.strokeStyle = "blue";
        canvasContext.rect(
            canvas.width - xMax,
            yMin,
            width,
            height
        );
        canvasContext.stroke();

        canvasContext.fillStyle = "red";
        const facePoints = face.locationData.relativeKeypoints
        // console.log("Estos son los relativePoints: ", facePoints)
        facePoints.forEach(point => {
            // console.log( "este es el 'x' por el ancho del canvas: ", point.x * canvas.width)
            
            canvasContext.fillRect( 
                (canvas.width - (point.x * canvas.width)),
                (point.y * canvas.height),
                5,
                5
            );
        });
        
        /* 
        canvasContext.beginPath();
        canvasContext.lineWidth = "4";
        canvasContext.strokeStyle = "blue";

        // Dibujar líneas horizontales
        canvasContext.moveTo(xMin, yMin);
        canvasContext.lineTo(xMax, yMin);
        canvasContext.moveTo(xMin, yMax);
        canvasContext.lineTo(xMax, yMax);

        // Dibujar líneas verticales
        canvasContext.moveTo(xMin, yMin);
        canvasContext.lineTo(xMin, yMax);
        canvasContext.moveTo(xMax, yMin);
        canvasContext.lineTo(xMax, yMax);

        canvasContext.stroke();
        */

    });

};

iniciarCamara();
video.addEventListener( "loadeddata", () => {
    setInterval( detectar, 180 );
    // detectar()
})



