var posts=["2026/03/07/Blog/","2026/03/07/Moveit/","2026/03/07/ROS2-humble/","2025/12/04/The-beginning/","2025/12/15/C++笔记/","2025/12/09/一些docker命令/","2026/01/15/任务规划/","2025/12/19/一些要记住的事情/","2025/12/05/具身智能/","2026/01/10/相关论文/","2025/12/13/写点什么吧/","2025/12/18/私密树洞/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };