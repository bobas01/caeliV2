btn1 = document.getElementById('btn1');
btn2 = document.getElementById('btn2');
btn5 = document.getElementById('btn5');
btn6 = document.getElementById('btn6');
btnValid1 = document.getElementById('btnValid1');
btnValid2 = document.getElementById('btnValid2');

slide1 = document.getElementById('slide1');
slide2 = document.getElementById('slide2');
slide3 = document.getElementById('slide3');
slide4 = document.getElementById('slide4');
slide5 = document.getElementById('slide5');
slide6 = document.getElementById('slide6');
table1 = document.getElementById('table1');
table2 = document.getElementById('table2');
table3 = document.getElementById('table3');
bigWork = document.getElementById('bigWork');
mediumWork = document.getElementById('mediumWork');
littleWork = document.getElementById('littleWork');


btn1.addEventListener('click', function () {
  slide2.classList.toggle('active');
  slide1.style.opacity = 0;
  setTimeout(function () {
    slide1.style.display = 'none';
  }, 500);
});
btn2.addEventListener('click', function () {
  slide3.classList.toggle('active2');
  slide2.style.opacity = 0;
  setTimeout(function () {
    slide2.style.display = 'none';
  }, 500);
});


  btn3 = document.getElementById('btn3');
  header = document.querySelector('header');
  p1 = document.getElementById('p1Slide4');
  p2 = document.getElementById('p2Slide4');
  p3 = document.getElementById('p3Slide4');
  btn3.addEventListener('click', function () {
    slide4.classList.toggle('active3');
    slide3.style.opacity = 0;
    setTimeout(function () {
      slide3.style.display = 'none';
      
    }, 500);
    setTimeout(function () {
      p1.style.display = 'block';
     
    }, 2000);
    setTimeout(function () {
      p2.style.display = 'block';      
    }, 5000);
    setTimeout(function () {
     p3.style.display = 'block';      
    }, 8000);
    setTimeout(function () {
      slide4.style.display = 'none';
      slide5.style.display = 'block';
    }, 10000);

  });

document.addEventListener("DOMContentLoaded", function(event) {
  document.querySelector('input[type="range"]').value = 0;
});
 // Fonction qui crée les divs à chaque fois que l'input range change de valeur
 function createDivs() {
  // On vide le contenu du container à chaque fois pour éviter les doublons
  document.getElementById("container").innerHTML = "";

  // On boucle de 0 à la valeur de l'input range
  for (let i = 0; i <= document.querySelector("input[type=range]").value; i += 25) {
    // On crée une div bigBox
    const bigBox = document.createElement("div");
    bigBox.classList.add("bigBox");
    
    // On crée deux div littleBox pour chaque bigBox
    const littleBox1 = document.createElement("div");
    littleBox1.classList.add("littleBox");
    littleBox1.innerHTML = '<img src="./img/alarm.svg" alt="alarm"><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officiis, ducimus.</p>';
    
    const littleBox2 = document.createElement("div");
    littleBox2.classList.add("littleBox");
    littleBox2.innerHTML = '<img src="./img/pouceVert.svg" alt="pouce vert"><p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perspiciatis, quisquam?</p>';
    
    // On ajoute les littleBox à la bigBox
    bigBox.appendChild(littleBox1);
    bigBox.appendChild(littleBox2);
    
    // On ajoute la bigBox au container
    document.getElementById("container").appendChild(bigBox);
  }
}

// Fonction qui vérifie la valeur de l'input range et cache les divs inutiles
function checkValue() {
  // On récupère la valeur de l'input range
  const value = document.querySelector("input[type=range]").value;

  // On cache toutes les bigBox
  const bigBoxes = document.querySelectorAll(".bigBox");
  bigBoxes.forEach((bigBox) => {
    bigBox.style.display = "none";
  });

  // Si la valeur est différente de 0, on affiche la bigBox correspondante
  if (value !== "0") {
    const index = value / 25 - 1;
    bigBoxes[index].style.display = "flex";
  }
}

btn5.addEventListener('click', function () {
  slide6.classList.toggle('active6');
  slide5.style.opacity = 0;
  setTimeout(function () {
    slide5.style.display = 'none';
  }, 500);
});
btnValid1.addEventListener('click', function () {
  table2.classList.toggle('active7');
  mediumWork.classList.toggle('active7');
  bigWork.style.display="none"
 
});
btnValid2.addEventListener('click', function () {
  table3.style.display="block";
  littleWork.classList.toggle('active8');
  mediumWork.style.display="none"
});





