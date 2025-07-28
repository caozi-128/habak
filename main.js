// 创建按钮元素
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

// 创建消息显示区域
const messageArea = document.createElement('div');
messageArea.style.fontSize = '20px';
messageArea.style.marginTop = '15px';
messageArea.style.color = '#ff6b6b';

// 添加点击事件
funButton.addEventListener('click', () => {
  messageArea.textContent = '你被骗了嘻嘻';
});

// 将元素添加到页面
document.body.appendChild(funButton);
document.body.appendChild(messageArea);
