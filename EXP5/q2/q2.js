function calculate(){
    var w = parseFloat(document.getElementById('weight').value);
    var h = parseFloat(document.getElementById('height').value);

    var bmi = w/(h*h);

    document.getElementById('score').innerHTML = bmi;

    if (bmi<18){
        document.getElementById('type').innerHTML = "Underweight";
    } else if (bmi>=18 || bmi<=25){
        document.getElementById('type').innerHTML = "Normal";
    } else if (bmi>=26 || bmi<=30){
        document.getElementById('type').innerHTML = "Overweight";
    }else if (bmi>30){
        document.getElementById('type').innerHTML = "Obese";
    }else{
        document.getElementById('type').innerHTML = "Please enter correct inputs!";
    }
}