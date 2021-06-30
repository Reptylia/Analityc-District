
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

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}
/* 
const text = [
  'Ты у меня одна,\n',
  'Словно в ночи луна,\n',
  'Словно в году весна,\n',
  'Словно в степи сосна.\n'
];

 let line = 0;
  let count = 0;
  let result = '';
  function typeLine() {
    let interval = setTimeout(
      () => {
        result += text[line][count]
        document.querySelector('pre').innerHTML =result +'|';


      count++;
      if (count >= text[line].length) {
        count = 0;
        line++;
        if (line == text.length) {
          clearTimeout(interval);
           document.querySelector('pre').innerHTML =result;
          return true;
        }
      }
      typeLine();
    }, getRandomInt(getRandomInt(250*2.5)))
  }


  typeLine();

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

 */