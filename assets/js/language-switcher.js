document.addEventListener('DOMContentLoaded', function() {
  // 检查是否有存储的语言偏好
  const storedLang = localStorage.getItem('preferredLanguage');
  
  // 如果有存储的语言偏好，并且当前页面不是该语言，则重定向
  if (storedLang) {
    const currentLang = document.documentElement.lang || 'en';
    
    // 只有当当前页面不是用户首选语言时才重定向
    if (currentLang !== storedLang) {
      redirectToLanguage(storedLang);
    }
  }
  
  // 为语言切换链接添加点击事件
  const langLinks = document.querySelectorAll('.dropdown-menu a');
  langLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      // 阻止默认行为，我们要自己处理跳转
      e.preventDefault();
      
      // 从data-lang属性获取语言
      const lang = this.getAttribute('data-lang');
      
      // 保存语言偏好
      localStorage.setItem('preferredLanguage', lang);
      
      // 根据当前页面路径跳转到对应语言的页面
      redirectToLanguage(lang);
    });
  });
  
  // 处理下拉菜单的点击事件
  const dropdownTriggers = document.querySelectorAll('.dropdown-trigger');
  dropdownTriggers.forEach(trigger => {
    trigger.addEventListener('click', function(e) {
      e.preventDefault();
      
      // 获取父元素
      const dropdown = this.closest('.lang-dropdown');
      
      // 切换open类
      dropdown.classList.toggle('open');
      
      // 点击外部时关闭下拉菜单
      const closeDropdown = function(event) {
        if (!dropdown.contains(event.target)) {
          dropdown.classList.remove('open');
          document.removeEventListener('click', closeDropdown);
        }
      };
      
      // 添加延迟，避免立即触发
      setTimeout(() => {
        document.addEventListener('click', closeDropdown);
      }, 0);
    });
  });
});

// 重定向到相应语言的页面
function redirectToLanguage(lang) {
  // 获取当前URL
  const currentPath = window.location.pathname;
  
  // 如果用户想要英文
  if (lang === 'en') {
    // 如果当前在中文页面，切换到英文
    if (currentPath.startsWith('/zh/')) {
      const newPath = currentPath.replace('/zh/', '/');
      window.location.href = newPath;
    }
  } 
  // 如果用户想要中文
  else if (lang === 'zh') {
    // 如果当前不是以/zh/开头
    if (!currentPath.startsWith('/zh/')) {
      // 处理首页情况
      if (currentPath === '/' || currentPath === '') {
        window.location.href = '/zh/';
      } else {
        // 对于其他页面，在路径中添加/zh/
        const newPath = '/zh' + currentPath;
        window.location.href = newPath;
      }
    }
  }
} 