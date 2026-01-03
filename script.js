const words = [
  "Penetration Tester",
  "Cybersecurity Researcher",
  "Ethical Hacker"
];

let i = 0, j = 0, del = false;
const el = document.querySelector(".type");

function type(){
  if(!del && j <= words[i].length){
    el.textContent = words[i].slice(0,j++);
  }else if(del && j >= 0){
    el.textContent = words[i].slice(0,j--);
  }

  if(j === words[i].length) del = true;
  if(del && j === 0){ del = false; i = (i+1)%words.length; }

  setTimeout(type, del ? 60 : 100);
}
type();

