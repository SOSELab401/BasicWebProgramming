	
        
function start() {
         
var rd = Math.floor( Math.random() * 5 )+1;



if (rd == 1) {
rd = "http://www.starryparadise.com/";
mo = "往星空草原  請點我";
}

if (rd == 2) {
rd = "http://www.nmmst.gov.tw/chhtml/";
mo = "往海科館  請點我";
}

if (rd == 3) {
rd = "http://www.tonyhuang39.com/tony/tony1223.html";
mo = "往和平島 請點我";
}

if (rd == 4) {
rd = "http://blog.xuite.net/bobowin/me/22586385-%5B+%E5%9F%BA%E9%9A%86%E9%87%8E%E9%A4%90%E6%99%AF%E9%BB%9E+%5D+%E5%85%AB%E6%96%97%E5%AD%90%E6%BD%AE%E5%A2%83%E5%85%AC%E5%9C%92~%E5%93%88%E5%88%A9%E6%B3%A2%E7%89%B9%E5%B7%A8%E5%A4%A7%E9%A3%9B%E5%A4%A9%E6%8E%83%E5%B8%9A%E4%B9%9F%E5%9C%A8%E9%80%99%E5%87%BA%E7%8F%BE%E3%80%812017%E5%8F%88%E5%A4%9A%E4%BA%86%E9%B8%9A%E9%B5%A1%E8%9E%BA%E6%BA%9C%E6%BB%91%E6%A2%AF";
mo = "往潮境公園 請點我";
}

if (rd == 5) {
rd = "http://www.tonyhuang39.com/tony0285.html";
mo = "往外木山 請點我";
}

var ooo="<a href="+rd+">"+mo+" </a>";
document.write(ooo);
			 
			 }                //隨機超連結funtion
			 
					
