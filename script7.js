let d1 = document.createElement('div');
document.body.append(d1);
d1.style.width='55%';
d1.style.height='90%';
let d2 = document.createElement('div');
let d2d1 = document.createElement('div');
d2d1.textContent='Magic Ball';
d2d1.style.cssText='color: #e2cfea; font-size:24px; display:flex; justify-content:center;';
d2.appendChild(d2d1);
let input = document.createElement('input');
input.type = 'text';
input.style.cssText = 'width:100%; padding:10px; background-color: #e2cfea; font-size:14px; margin-top:10px; border-radius:50px;';
d2.appendChild(input);
d2.style.cssText= 'width:100%; height:15%; display:flex; display:inline-block; align-content:center;';
d1.appendChild(d2);

let d3 = document.createElement('div');
d3.style.cssText='width:100%; height:70%; display:flex; align-content:center; justify-content: center;';
let d3d1 = document.createElement('div');
d3d1.style.cssText = 'width: 50vw; height: 50vw; max-width: 375px; max-height: 375px; border-radius: 50%; display: flex; align-items: center; justify-content: center; background-size: cover; background-position: center; background-image: url("IMG/blueBall.jpg");';
let ballText = document.createElement('div');
ballText.style.cssText = 'color: white; font-size: 75px; -webkit-text-stroke: 1px black;';
ballText.textContent = '';
d3d1.appendChild(ballText);
d1.appendChild(d3);
d3.appendChild(d3d1);

let d4 = document.createElement('div');
d4.style.cssText = 'width:100%; height:10%; display:flex; align-content:center; justify-content: center;';
let button = document.createElement('button');
button.style.cssText = 'width: 35%; height: 40%; font-size: 18px; background-color: #4B0081; color: white; border-radius: 10px;';
button.textContent='Ask the ball';
d4.appendChild(button);
d1.appendChild(d4);

button.addEventListener('click', function () {
    let random = Math.round(Math.random());
    if (random === 0) {
        ballText.textContent = 'No';
    } else {
        ballText.textContent = 'Yes';
    }
    setTimeout(function() {
        input.value = '';
    }, 3000);
});