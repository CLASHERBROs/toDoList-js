window.setTimeout(function() {

var todo = Array()
var input = "sad"
while(input!=="quit")
{input=prompt("What would you like todo")
if(input==="new")
{todo.push(prompt("Enter a new todo"))
}
else if(input=="delete"){
    var del = prompt("What do you want to delete?")
    todo.forEach(function(color){
if(color==del)
{
    var index = todo.indexOf(color);
    todo.splice(index,1);
}
    });
}
else if(input=="list")
{ todo.forEach(function(color){
    console.log(color)
}
    
    );
} }},500)