// 将window.onload修改为一个更安全的加载检查
(function() {
  // 检查DOM是否已加载
  function domReady(callback) {
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', callback);
    } else {
      callback();
    }
  }
  
  // 初始化语言切换器功能
  domReady(function() {
    console.log('External language switcher initialized');
    
    // 提供全局切换函数，也可由内联脚本使用
    window.switchLanguage = function(lang) {
      console.log('External switchLanguage called for:', lang);
      
      var currentPath = window.location.pathname;
      var newPath;
      
      // 英文 -> 中文
      if (lang === 'zh' && !currentPath.startsWith('/zh/')) {
        if (currentPath === '/' || currentPath === '') {
          newPath = '/zh/';
        } else {
          newPath = '/zh' + currentPath;
        }
        console.log('Redirecting to Chinese path:', newPath);
        window.location.href = newPath;
      }
      // 中文 -> 英文
      else if (lang === 'en' && currentPath.startsWith('/zh/')) {
        newPath = currentPath.replace('/zh/', '/');
        console.log('Redirecting to English path:', newPath);
        window.location.href = newPath;
      } else {
        console.log('Already on', lang, 'page, no redirect needed');
      }
    };
    
    // 兼容内联脚本中使用的函数名
    window.switchToLang = window.switchLanguage;
    
    // 添加事件监听器作为备份
    var langLinks = document.querySelectorAll('.lang-switcher a');
    console.log('Found language links:', langLinks.length);
    
    for (var i = 0; i < langLinks.length; i++) {
      langLinks[i].addEventListener('click', function(e) {
        // 防止默认行为
        e.preventDefault();
        e.stopPropagation();
        
        // 获取语言
        var lang = this.getAttribute('data-lang');
        console.log('Link clicked for language:', lang);
        
        // 保存到localStorage
        localStorage.setItem('preferredLanguage', lang);
        
        // 切换语言
        window.switchLanguage(lang);
        
        return false;
      });
    }
    
    // 检查是否应该根据存储的首选项重定向
    var storedLang = localStorage.getItem('preferredLanguage');
    if (storedLang) {
      var currentLang = document.documentElement.lang || 'en';
      console.log('Current lang:', currentLang, 'Stored lang:', storedLang);
      
      if (currentLang !== storedLang) {
        console.log('Redirecting to preferred language:', storedLang);
        window.switchLanguage(storedLang);
      }
    }
  });
})(); 