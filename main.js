https://teachablemachine.withgoogle.com/models/kAu-0noum/

function startClassification() {
  navigator.mediaDevices.getUserMedia({ audio: true })
  classifier = ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/kAu-0noum/model.json", modelReady)
}

function modelReady() {
  classifier.classify(gotResults);

}


function gotResults(error, results) {
  if (error) {
    console.log(error)
  }
  else {
    console.log(results)

    document.getElementById("result_label").innerHTML = "i can hear - " +
      results[0].label;
    document.getElementById("result_confidence").innerHTML = "Accuracy - " +
      (results[0].confidence * 100).toFixed(2) + "%"

    img1 = document.getElementById("ear")


    if (results[0].label == "Dog") {
      img1.src = "dog.gif.png";

    }
    else if (results[0].label == "Cat") {
      img1.src = "cat.gif.gif";

    }
    else if (results[0].label == "Cow") {
      img1.src = "cow.gif.gif";

    }
    else {
      img1.src = "lion.gif.gif"
    }

  }

}
