function task(){
let list=document.querySelector("ul");
let newlist=document.createElement("li");
let input = document.getElementById("tex");
  let taskText = input.value.trim(); // removes extra spaces
// ✅ Check if input is empty
  if (taskText === "") {
    // alert("Please enter a task before adding!");
    return; // stop here if no text
  }
if (list.children.length >= 10) {
    // alert("You can only add up to 8 tasks!");
    return;
  }
list.appendChild(newlist)
newlist.textContent=document.getElementById("tex").value;
document.getElementById("tex").value="";
deleteTask(newlist);
}
function deleteTask(newlist){
    let delet=document.createElement("button");
    delet.textContent= "delete";
    delet.style.marginRight = "1%";       
    newlist.appendChild(delet)
    delet.onclick=function (){
        newlist.remove()
    }
    document.getElementById("tex").addEventListener("keypress", function (e) {
    if (e.key === "Enter") {
    task();
  }

});
}