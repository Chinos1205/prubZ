document.getElementById("quizForm").addEventListener("submit", function(event) {
    event.preventDefault();
    var q1 = document.querySelectorAll('input[name="q1"]:checked');
    var q2 = document.querySelectorAll('input[name="q2"]:checked');
    var q3 = document.querySelectorAll('input[name="q3"]:checked');
    var q4 = document.querySelectorAll('input[name="q4"]:checked');
    var q5 = document.querySelectorAll('input[name="q5"]:checked');

  
    var result = calculateResult(q1, q2, q3, q4, q5);
    displayResult(result);
  });
  
  function calculateResult(q1,  q2, q3, q4, q5) {
    var options = [];
  
    for (var i = 0; i < q1.length; i++) {
      options.push(q1[i].value);
    }
    for (var i = 0; i < q2.length; i++) {
        options.push(q2[i].value);
      }
      for (var i = 0; i < q3.length; i++) {
        options.push(q3[i].value);
      }
      for (var i = 0; i < q4.length; i++) {
        options.push(q4[i].value);
      }
      for (var i = 0; i < q5.length; i++) {
        options.push(q5[i].value);
      }
  
      var result = "Resultado 1";

    if (options.length >= 1 && options.length <= 3) {
        result = "Cabo";
        resultImage = "Cabo.jpg";
    } else if (options.length >= 4 && options.length <= 6) {
        result = "Bebé";
        resultImage = "Bebé.jpg";
      } else if (options.length >= 7 && options.length <= 9) {
        result = "Zoerina";
        resultImage = "Zoerina.jpg";
      } else if (options.length >= 10 && options.length <= 12) {
        result = "Pingu";
        resultImage = "Pingu.jpg";
      } else if (options.length >= 13 && options.length <= 15) {
        result = "Pug";
        resultImage = "pug.jpg";
      }
  
      return { result: result, image: resultImage };
    }
    
    function displayResult(resultData) {
      var result = resultData.result;
      var image = resultData.image;
    
      var resultElement = document.getElementById("result");
      resultElement.innerHTML = "Tu resultado es: " + result;
    
      var imageElement = document.createElement("img");
      imageElement.src = image;
      resultElement.appendChild(imageElement);
    }