document.addEventListener('DOMContentLoaded', () => {
  const list = document.getElementById('story-list');

  storyExtract();

  function storyExtract() {
    fetch('https://ent9gi2ec4szjte.m.pipedream.net')
    .then((response) => {
      return response.json();
    }).then((data) => {
        listMaker(data.message);
        console.log(data.message);
      });
  }
      
  function listMaker(array) {
    let li;
    console.log(array);
    array.forEach(element => {
      li = document.createElement('li') 
      li.innerText = element.webTitle;
      list.appendChild(li)
    })
  }
})