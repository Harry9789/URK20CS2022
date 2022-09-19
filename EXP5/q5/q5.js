function flip() {
    var img = document.getElementById("coin");
    var head = document.getElementById("num_heads");
    var tail = document.getElementById("num_tails");
    var h = parseInt(head.innerHTML);
    var t = parseInt(tail.innerHTML);
    var lst = ["head.jpg", "tail.jpg"];
    var s = Math.floor(Math.random()*2);
    if (lst[s]==lst[0]) {
        head.innerHTML = h+1;
    } else {
        tail.innerHTML = t+1;
    };
    img.src = "images/coin.webp"+lst[s];
}
