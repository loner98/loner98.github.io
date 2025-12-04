var posts=["2025/12/03/hello-world/","2025/12/03/tags/","2025/12/04/自我介绍/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };