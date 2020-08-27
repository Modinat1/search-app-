var fruitList = document.getElementById('fruits');
var filter = document.getElementById('filter');
filter.addEventListener('keyup', addFilter);



function addFilter(e){
    var text = e.target.value.toLowerCase();
    var fruit = fruitList.getElementsByTagName('li');
    Array.from(fruit).forEach(function(fruits){
        var fruitName = fruits.firstChild.textContent;
        if(fruitName.toLowerCase().indexOf(text) != -1){
            fruits.style.display = 'block';
        }else{
            fruits.style.display = 'none';
        }
    })
}























