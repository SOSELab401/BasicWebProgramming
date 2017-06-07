function pickImage()
{
	var name = [ "中正區", "安樂區", "中山區", "暖暖區", "七堵區", "仁愛區", "信義區" ];
	var length = name.length;
   index = Math.floor(0 + Math.random() * length );
   var button = document.getElementById("button");
   var note = name[index]+".html"
   button.setAttribute("onclick","location.href='note'"); 
window.open( note , '新視窗的名稱', config='height=高度,width=寬度');
}

function start() {
            //找到id為"displayButton"的網頁元素物件(就是那個按鈕的物件)
            var button = document.getElementById("button");
            //幫按鈕註冊事件處理器，一旦按鈕被使用者點擊，就會呼叫display function
            button.addEventListener("click", pickImage, false);
        }







window.addEventListener( "load", start, false );
        // 顯示訊息的function
        function display() {
            //找到id為"name"的網頁元素物件(就是那個文字欄位的物件)
            var textFieldObject = document.getElementById("name");
            //取得文字欄位的文字內容
            var content = textFieldObject.value;

            //組合出想在div區塊中呈現的html片段
            var message = "<h3>您的名字是" + content + "</h3>";

            //找到id為"display"的網頁元素物件(就是那個div區塊的物件)
            var divObject = document.getElementById("display");

            //將div區塊的內容改為我們準備好的html片段，網頁上的div就會顯示新的內容
            divObject.innerHTML = message;
        }

        //幫視窗註冊事件處理器，在網頁載入完成後，"load"事件就觸發，而"load"事件一發生，就會呼叫start function
        window.addEventListener("load", start, false);