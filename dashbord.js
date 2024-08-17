import { 
    onAuthStateChanged,
    signOut

} 
from "https://www.gstatic.com/firebasejs/10.12.4/firebase-auth.js";

import { auth , db} from "./configue.js";
 
const btn = document.querySelector('#sign-out')

btn.addEventListener('click' , ()=>{
    signOut(auth).then(() => {
        window.location = 'login.html'
      }).catch((error) => {
        console.log(error);
      });
})

onAuthStateChanged(auth, (user) => {
    if (user) {
      const uid = user.uid;
      console.log(uid);
    } else {
      window.location = "login.html";
    }
  });


  const form = document.querySelector(`#form`)
  const title = document.querySelector(`#text`)
  const desc = document.querySelector(`#desc`)
  const div = document.querySelector(`#div`)



  let arr = []
  function renderCard() {
      div.innerHTML = '';
      arr.map((item) => {
          div.innerHTML += `  
          <div class="card" style="width: 25rem;"> 
          <div class="card-body">
              <h5 class="card-title">title:  ${item.title}</h5>
              <p class="card-text">Desc: ${item.desc}</p>
              <button class="del">delete</button>
              <button class="edit">edit</button>
              
          </div>
          </div> 
          <br />
          <br />
          `
          
      })
  }



  form.addEventListener('submit', (event) => {
      event.preventDefault();
      console.log(title.value);
      console.log(desc.value);

  //  push

  arr.push({
      title : title.value,
      desc : desc.value,
  })
  renderCard()
  title.value = ''
  desc.value = ''
  })
