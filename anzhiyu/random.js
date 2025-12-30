var posts=["2025/12/15/C++笔记/","2025/12/09/一些docker命令/","2025/12/04/The-beginning/","2025/12/19/一些要记住的事情/","2025/12/05/具身智能/","2025/12/13/写点什么吧/","2025/12/18/私密树洞/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };