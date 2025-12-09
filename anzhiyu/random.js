var posts=["2025/12/04/The-beginning/","2025/12/05/具身智能/","2025/12/09/一些docker命令/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };