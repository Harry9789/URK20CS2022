function convert(){
    var m = parseFloat(document.getElementById('data').value);
    var f = document.getElementById('from').value;
    var t = document.getElementById('to').value;
    
    if (f=="US Dollar" && t=="Indian Rupee"){
        document.getElementById('answer').innerHTML = (m*79.97);
    } else if (f=="Indian Rupee" && t=="US Dollar"){
        document.getElementById('answer').innerHTML = (m*0.013);
    } else if ((f=="US Dollar" && t=="US Dollar") || (f=="Indian Rupee" && t=="Indian Rupee") ||(f=="Euro" && t=="Euro")){
        document.getElementById('answer').innerHTML = "Select different currencies"
    } else if (f=="Indian Rupee" && t=="Euro"){
        document.getElementById('answer').innerHTML = (m*0.013);
    }else if (f=="Euro" && t=="Indian Rupee"){
        document.getElementById('answer').innerHTML = (m*79.77);
    }else if (f=="US Dollar" && t=="Euro"){
        document.getElementById('answer').innerHTML = (m*1.00);
    }else if (f=="Euro" && t=="US Dollar"){
        document.getElementById('answer').innerHTML = (m*1.10);
    }
}
