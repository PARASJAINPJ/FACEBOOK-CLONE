let addBtn = document.getElementById("addBtn");
addBtn.addEventListener("click", function(e) {
  console.log("hi")
  let addTxt = document.getElementById("search");
  let notes = localStorage.getItem("notes");
  if (notes == null) {
    notesObj = [];
  } else {
    notesObj = JSON.parse(notes);
  }
  notesObj.push(addTxt.value);
  localStorage.setItem("notes", JSON.stringify(notesObj));
  addTxt.value = "";
//   console.log(notesObj);
  showNotes();
});

function showNotes() {
    let notes = localStorage.getItem("notes");
    if (notes == null) {
      notesObj = [];
    } else {
      notesObj = JSON.parse(notes);
    }
    let html = "";
    for(let i=notesObj.length-1; i>=0; i--){
        html += `
        <div class="posts">
        <div class="post-info">
            <img src="profile.jpg" id="pro">
            Mark Zuckerberg Shared a post.<br>15 August 2023
        </div>
        
       <p>${notesObj[i]}</p>
        <hr>
        <div class="feature-button">
            <button class="btn"><span class="iconify" data-icon="iconamoon:like-light"></span> Like</button>
            <button class="btn"><span class="iconify" data-icon="mdi:share-outline"></span> Share</button>
            <button id="${i}"onclick="deleteNote(this.id)" class="btn"><span class="iconify" data-icon="uil:comment"></span>Delete</button>
        </div>
        <hr>
    </div>`;
    }
    let notesElm = document.getElementById("p");
    if (notesObj.length != 0) {
      notesElm.innerHTML = html;
    } else {
      notesElm.innerHTML = ``;
    }
  }

  function deleteNote(index) {
    //   console.log("I am deleting", index);
    
      let notes = localStorage.getItem("notes");
      if (notes == null) {
        notesObj = [];
      } else {
        notesObj = JSON.parse(notes);
      }
    
      notesObj.splice(index, 1);
      localStorage.setItem("notes", JSON.stringify(notesObj));
      showNotes();
    }