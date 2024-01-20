// 生成多图宫格
document$.subscribe(() => {
  const isLazy = true; // 是否应用懒加载
  
  // 查找所有的图片列表
  const imageListContainers = document.querySelectorAll('ul');

  imageListContainers.forEach(container => {
    if (container.previousElementSibling && container.previousElementSibling.nodeType === Node.COMMENT_NODE && container.previousElementSibling.textContent.includes('image-grid-start')) {
      const images = Array.from(container.querySelectorAll('li')).map(li => li.textContent.trim());

      // 为图片创建网格
      const grid = document.createElement('div');
      grid.className = 'image-grid';

      images.forEach(image => {
        const item = document.createElement('div');
        item.className = 'image-item';
        const img = document.createElement('img');
        img.src = image;
        if (isLazy) {
          img.loading = "lazy"; // 添加懒加载
        }
        item.appendChild(img);
        grid.appendChild(item);
      });

      // 插入网格并移除原始的markdown列表
      container.parentNode.insertBefore(grid, container);
      container.parentNode.removeChild(container);
      if (container.previousElementSibling.nodeType === Node.COMMENT_NODE) {
        container.parentNode.removeChild(container.previousElementSibling);
      }
    }
  });
});
