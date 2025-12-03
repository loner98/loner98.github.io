var posts=["2025/12/03/hello-world/","2025/12/03/tags/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };