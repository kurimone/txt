// 通过类名选中元素，在其中文和数字间添加空格
function addSpaceBetweenChineseAndNumbersByClass(className) {
  var elements = document.querySelectorAll("." + className);
  elements.forEach(function (element) {
    var re1 = /([0-9])([\u4e00-\u9fa5])/g;
    var re2 = /([\u4e00-\u9fa5])([0-9])/g;
    var newText = element.innerText.replace(re1, "$1 $2").replace(re2, "$1 $2");
    element.innerText = newText;
  });
}

// 通过类名选中元素，在其之前插入一条分界线
function insertHrBeforeElementWithClass(className) {
  const targetElements = document.querySelectorAll(`.${className}`);
  targetElements.forEach(targetElement => {
    const hrElement = document.createElement('hr');
    targetElement.parentNode.insertBefore(hrElement, targetElement);
  });
}

document$.subscribe(
  addSpaceBetweenChineseAndNumbersByClass("git-revision-date-localized-plugin"),
  insertHrBeforeElementWithClass("md-source-file__fact")
);
