window.setTimeout(function() {

var todo = Array()
var input = "sad"
while(input!=="quit")
{input=prompt("What would you like todo")
if(input==="new")
{todo.push(prompt("Enter a new todo"))
}
else if(input=="list")
{
    console.log(todo)
} }},500)