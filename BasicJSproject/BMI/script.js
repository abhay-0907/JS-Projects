let cal = document.querySelector('form');

cal.addEventListener('submit', (e) => {
    e.preventDefault();

    let height = parseInt(document.querySelector('#height').value);
    let weight = parseInt(document.querySelector('#weight').value);
    let age = parseInt(document.querySelector('#Age').value);
    let heightResult = document.querySelector('#heightResult');
    let weightResult = document.querySelector('#weightResult');
    let ageResult = document.querySelector('#ageResult');
    
    // Clear previous results
    heightResult.innerText = '';
    weightResult.innerText = '';
    ageResult.innerText = '';

    // Validate height
    if (isNaN(height) || height <= 0) {
        heightResult.innerText = 'Please enter a valid height';
        return;
    }

    // Validate weight
    if (isNaN(weight) || weight <= 0) {
        weightResult.innerText = 'Please enter a valid weight';
        return;
    }

    // Validate age
    if (isNaN(age) || age <= 0) {
        ageResult.innerText = 'Please enter a valid age';
        return;
    }

    // Convert height from centimeters to meters if necessary
    height = height / 100;

    // Calculate BMI
    const bmi = weight / (height * height);
    let bmiCategory = '';

    // Determine BMI category
    if (bmi < 18.5) {
        bmiCategory = 'Underweight';
    } else if (bmi >= 18.5 && bmi < 24.9) {
        bmiCategory = 'Normal weight';
    } else if (bmi >= 25 && bmi < 29.9) {
        bmiCategory = 'Overweight';
    } else {
        bmiCategory = 'Obesity';
    }

    // Display BMI result
    document.getElementById('bmi-result').innerText = `Your BMI is ${bmi.toFixed(2)}, which is considered ${bmiCategory}.`;
});
