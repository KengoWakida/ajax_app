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
  });
};

window.addEventListener('load',post); /* ページをロードしたとき */