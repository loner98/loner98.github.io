var posts=["2025/12/03/hello-world/","2025/12/04/The-beginning/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };