
let ultima = ['Инициализация....  ','..........  ','Синхронизация.....  ','10% ','20%  ','30%  '
,'40%  ','50%  ','60%   ','70%   ','80%    ','90%    ','100%     ','Подача питания....  '];
let line = 0;
let point = 0;
let text = '';



let poppy = setInterval(lolly, 70);



function lolly() {
  text += ultima[line][point];
  document.querySelector('pre').innerHTML = text;
  console.log(point , line);
  point++;
  if(point >= ultima[line].length) {
    line++;
    point = 0;
    text = '';
  }
  
  if(line >= ultima.length) {
    clearTimeout(poppy);
  }
  if(line == 13 && point == 0) {
    document.body.style.backgroundImage = "url(https://steamuserimages-a.akamaihd.net/ugc/547511114433809034/DAA25E9D461A2C740B723027775F1BD943CE0ADD/?imw=1024&imh=768&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=true)";
    document.body.style.color = 'black';
  }
  
}

