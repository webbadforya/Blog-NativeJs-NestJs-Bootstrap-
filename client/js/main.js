
      let name;
      let userName = document.getElementById('UserName');
      let logMenu = document.getElementById('log-menu');
      let logOut = document.getElementById('log-out');
      let logIn = document.getElementById('logIn');
      let mainForm = document.getElementById('mainForm');
      let sendPostButton = document.getElementById('sendPostButton');
      let postForm = document.getElementById('postForm');
      let cardRow = document.querySelector(".card-row");
      let wall = [];

      logIn.addEventListener('click', loginIn);

      mainForm.addEventListener('submit', registration);

      logOut.addEventListener('click', loginOut);

      sendPostButton.addEventListener('click', sendPost);

      document.querySelector("#post").addEventListener("click" , deletePost)

      FillBlogWall.fillBlogWall();


