const buildHTML = (XHR) => {
  const item = XHR.response.post;
  const html = `
    <div class="post">
      <div class="post-date">
        投稿日時:${item.created_at}
      </div>
      <div class="post-content">
        ${item.content}
      </div>
    </div>`;
  return html;
};


function post(){
  //リクエストを送信する処理
  //console.log("リクエスト送信 イベント発火");
  const submit = document.getElementById("submit"); /* idがsubmit(投稿ボタン）の要素を取得 */
    //console.log(submit)
  submit.addEventListener("click", (e) => { /* 投稿ボタンをクリックしたときの処理 */
    e.preventDefault();                           /* 投稿ボタンをクリックしたイベントを無効化 */
    //console.log("投稿ボタン押下のイベント発火")
    const form = document.getElementById("form"); /* idがformの要素を取得 */
    const formData = new FormData(form);          /* FormDataオブジェクトの生成 */
    //console.log(formData)
    const XHR = new XMLHttpRequest();             /* XMLHttpRequestオブジェクトの生成 */
    XHR.open("POST","/posts",true)                /* リクエストの内容を指定 */
    XHR.responseType = "json"                     /* レスポンスのデータフォーマットをjsonに指定 */
    XHR.send(formData);                           /* リクエストを送信 */
    XHR.onload = () => {                          /* 通信が成功した時の処理 */ 
      if (XHR.status != 200){                     /* レスポンスに何らかの問題があった場合 */  
        alert(`Error ${XHR.status}: ${XHR.statusText}`);
        return null;                              /* JavaScriptの処理から抜け出す */
      }
      
      //console.log(XHR.response);
      const list = document.getElementById("list");
      const formText = document.getElementById("content")
      //console.log(formText.value)               /* テキストフォームに入力した内容を取得 */

        list.insertAdjacentHTML("afterend",(XHR));
        formText.value = "";
    };
  });
};

window.addEventListener('load',post); /* ページをロードしたとき */