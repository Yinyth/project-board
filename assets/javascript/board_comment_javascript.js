var oAns;
document.onclick = function (e) {
  e = e || event;
  var target = e.target;

  if (target.className === 'board-btn') {
    var msgTitle = $('.board-title').value;
    var content = $('.board-content').value;

    if (msgTitle && content) {
      var oLi = document.createElement('li');
      oLi.innerHTML = `
                    <div class="message-head">
                    <p class="message-title">標題：${msgTitle}</p>
                    <hr />
                    <p class="message-comment">內容：${content}</p>
                    </div>
                    <div class="reply">
                    </div>
                    <button class="answer">回覆</button>
                    `;

      $('.msg-area').insertBefore(oLi, $('.msg-area').firstChild);
      $('.board-content').value = '';
      $('.board-title').value = '';
    } else {
      alert('輸入內容不可為空或者空格');
    }
    return;
  }

  if (target.className === 'answer') {
    $('.popup').style.display = 'flex';
    oAns = target.previousElementSibling.previousElementSibling;
    return;
  }

  if (target.className === 'pop-btn reDo') {
    var reDoContent = $('.pop-reply').value;

    if (reDoContent) {
      var oP = document.createElement('p');
      oP.innerHTML = `回覆：` + reDoContent;
      oAns.appendChild(oP);
    }

    $('.popup').style.display = 'none';
    $('.pop-reply').value = '';
    return;
  }

  if (target.className === 'pop-btn cancel') {
    $('.popup').style.display = 'none';
    $('.pop-reply').value = '';
    return;
  }
};

function $(selector) {
  return document.querySelector(selector);
}
