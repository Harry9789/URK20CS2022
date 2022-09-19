function cake(){
    var s = document.getElementById('small').value;
    var m = document.getElementById('medium').value;
    var l = document.getElementById('large').value;

    var total = (s*100) + (m*200) + (l*400);
    var amt_tax = ((9/100)*total) + total;

    var cc = document.querySelector('input[name="tip"]:checked').value;
    var tip = ((cc/100)*amt_tax);
    var total_cost = amt_tax + tip;

    document.getElementById('price').innerHTML = total_cost + "rupees";
}