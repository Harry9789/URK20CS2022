function strg() {
    var s = document.getElementById('inp').value;
    arr = s.split(" ");

    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i].length > arr[j].length) {
                temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
            }
        }
    }
    document.getElementById('sh').innerHTML = arr[0];
    document.getElementById('lg').innerHTML = arr[arr.length - 1];
}