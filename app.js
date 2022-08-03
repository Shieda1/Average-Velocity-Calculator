// https://calculator.swiftutors.com/average-velocity-calculator.html

const v1 =  document.getElementById('v1');
const v2 = document.getElementById('v2');
const v3 = document.getElementById('v3');
const btn = document.getElementById('btn');
const result = document.getElementById('result');

// radio buttons
const averageVelocityRadio = document.getElementById('averageVelocityRadio');
const initialVelocityRadio = document.getElementById('initialVelocityRadio');
const finalVelocityRadio = document.getElementById('finalVelocityRadio');

let averageVelocity;
let initialVelocity = v1;
let finalVelocity = v2;

// labels of the inpust
const variable1 = document.getElementById('variable1');
const variable2 = document.getElementById('variable2');

averageVelocityRadio.addEventListener('click', function() {
  variable1.textContent = '(Vi) Initial Velocity (m/s)';
  variable2.textContent = '(Vf) Final Velocity (m/s)';
  initialVelocity = v1;
  finalVelocity = v2;
  result.textContent = '';
});

initialVelocityRadio.addEventListener('click', function() {
  variable1.textContent = '(Va) Average Velocity (m/s)';
  variable2.textContent = '(Vf) Final Velocity (m/s)';
  averageVelocity = v1;
  finalVelocity = v2;
  result.textContent = '';
});

finalVelocityRadio.addEventListener('click', function() {
  variable1.textContent = '(Va) Average Velocity (m/s)';
  variable2.textContent = '(Vi) Initial Velocity (m/s)';
  averageVelocity = v1;
  initialVelocity = v2;
  result.textContent = '';
});

btn.addEventListener('click', function() {
  
  if(averageVelocityRadio.checked)
    result.textContent = `Average Velocity = ${computeAverageVelocity().toFixed(2)} m/s`;

  else if(initialVelocityRadio.checked)
    result.textContent = `Initial Velocity = ${computeInitialVelocity().toFixed(2)} m/s`;

  else if(finalVelocityRadio.checked)
    result.textContent = `Final Velocity = ${computeFinalVelocity().toFixed(2)} m/s`;
})

// calculation

function computeAverageVelocity() {
  return (Number(initialVelocity.value) + Number(finalVelocity.value)) / 2;
}

function computeInitialVelocity() {
  return (Number(averageVelocity.value) * 2) - Number(finalVelocity.value);
}

function computeFinalVelocity() {
  return (Number(averageVelocity.value) * 2) - Number(initialVelocity.value);
}