
class CreatePost{
   static createPostObject(formData){
      let obj = {};
      obj.name = name
      for(let data of formData){
         obj[data[0]] = data[1];
      }
      let date = new Date();
      obj.date = date.toLocaleString();
      return obj
   }
}
class FetchPostData{
   static async fetchData(body, url, method) {
    return await fetch(`http://localhost:3000/posts/${url}`, {
      method: method,
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
      },
      body: JSON.stringify(body),
    })
  }
 }

class GetData{
   static async fetchGet(url, method){
      return await fetch(`http://localhost:3000/posts/${url}`, {
         method: method
         })
   }
}

 class CreateCard{
    static createCard(post){
       return `
              <strong class="posted-by float-left"> 
                ${post.name}
              </strong>
              <span class="float-right">${post.date}</span>
              <h5 class="card-title">${post.title}</h5>
              <p class="card-text ">${post.message}</p>
              <button class="btn btn-danger float-right delete-button" data-id="${post._id}">Delete</button>
       `
    }
 }
 class AddPost{
    static addCart(post){
      let card = document.createElement("div")
      card.classList.add("card-body");
      card.id = "post";
      card.innerHTML = CreateCard.createCard(post);
      cardRow.insertBefore(card, cardRow.firstChild.nextElementSibling)
    }
 }
 class FillBlogWall{
    static fillBlogWall(){
      GetData.fetchGet("all", "GET").then(data => data.json())
      .then(postArray=> postArray.forEach(i=>{
         wall.push(i);
         AddPost.addCart(i);
      }))
    }
 }
 async function sendPost(ev){
   if (name) {
     ev.preventDefault();
     let postData = new FormData(postForm);
     let postObject = CreatePost.createPostObject(postData);
     console.log(postObject);
     if (postObject.name && postObject.title && postObject.message) {
       let post;
       await FetchPostData.fetchData(postObject, 'add', 'POST')
         .then(res => res.json()).then(a => post = a )
         if(post){
         await AddPost.addCart(post);
         document.querySelector("#title-name").value = "";
         document.querySelector("#message-text").value = "";
         }
     } else {
       console.log('Enter title or message');
     }
   } else console.log("You aren't authorized");
 }
 function deletePost(event){
   if(event.target.classList.contains("delete-button")){
     const conf = confirm("Удалить пост?")
     if(conf){
       console.log(event.target.getAttribute("data-id"))
       let id = event.target.getAttribute("data-id")
       GetData.fetchGet(`delete/${id}`,"DELETE")
       event.target.parentElement.remove()
     }
   }
 }