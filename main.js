const funButton = document.createElement('button');
funButton.textContent = '点我会触发有意思的事情哦';
funButton.style.padding = '10px 20px';
funButton.style.fontSize = '16px';
funButton.style.cursor = 'pointer';
funButton.style.backgroundColor = '#4CAF50';
funButton.style.color = 'white';
funButton.style.border = 'none';
funButton.style.borderRadius = '4px';
funButton.style.margin = '20px';

// 添加点击事件
funButton.addEventListener('click', () => {
  console.log('你被骗了嘻嘻');
});

// 将按钮添加到页面
document.body.appendChild(funButton);
