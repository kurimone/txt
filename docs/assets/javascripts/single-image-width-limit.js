/* 根据横竖比例为单图设置不同的宽度限制 */
document$.subscribe(() => {
  const isLazy = true; // 是否应用懒加载

  const singleImages = document.querySelectorAll('.single-image img');

  singleImages.forEach(img => {
    if (isLazy) {
      img.loading = "lazy";
    }

    if (img.complete) {
      resizeImage(img);
    } else {
      img.onload = () => resizeImage(img);
    }
  });
});

function resizeImage(img) {
  n = img.naturalHeight - img.naturalWidth

  if (n > 5) {
    img.classList.add('portrait');
  } else if (n < -5) {
    img.classList.add('landscape');
  } else if (n = 0) {
    img.classList.add('square');
  }
}
