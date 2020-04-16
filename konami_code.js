const codes = [
  "ArrowUp",
  "ArrowUp",
  "ArrowDown",
  "ArrowDown",
  "ArrowLeft",
  "ArrowRight",
  "ArrowLeft",
  "ArrowRight",
  "b",
  "a"
];

let index = 0;

function init(){
  

document.body.addEventListener('keydown',function pressDown(e) {
  const key = e.key;
  if (key=== codes[index]){
    index++;
    
  if (index=== codes.length){
    alert("YES! CODE ACCEPTED!");
      index= 0;
    }
  } else {
    index = 0;
  }
});



