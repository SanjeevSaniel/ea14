/* Question - 1
Create a button , on click of which you should be able to hide a paragraph text, create another button onclick of which this paragraph should be visible
*/

$(".btn-hide").click(function () {
  $("p").hide();
});

$(".btn-show").click(function () {
  $("p").show();
});

/*
Create an ajax call, by using this api "https://jsonplaceholder.typicode.com/todos/12" and print the title as the heading of the page
*/
$(".btn-ajax").click(function () {
  $("#heading").load("https://jsonplaceholder.typicode.com/todos/12");
});
