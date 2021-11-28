document.addEventListener('DOMContentLoaded', () => {
  const list = document.getElementById('story-list'),
    para = document.createElement('p');

  fetchStories();

  function fetchStories() {
    fetch('https://ent9gi2ec4szjte.m.pipedream.net')
    .then((response) => {
      return response.json();
    }).then((data) => {
      let storyArray = [];
      data.message.forEach(element => {
        storyArray.push(new NewsArticle({
          headline: element.webTitle,
          image: element.fields.thumbnail,
          body: element.fields.bodyText
        }))
      })
      listMaker(storyArray);
    });
  }

  function listMaker(array) {
    let li;
    console.log(array);
    array.forEach(element => {
      li = document.createElement('li')
      img = document.createElement('img')
      img.src = element.image
      li.innerText = element.headline;
      li.appendChild(img)
      list.appendChild(li)
    })
  }
})
