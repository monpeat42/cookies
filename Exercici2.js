
function changeThemeColor(bg, text){
    const body = document.getElementById('body');
    body.style.backgroundColor = bg;
    body.style.color = text;
  }
var theme ='rand';
changeTheme(theme, changeThemeColor);

function changeTheme(theme, cb)
{
    if (theme == 'fosc')
       {
        var fosc = "black";
        var clar = "white";
        cb(fosc, clar);
       }
    else if (theme == 'clar')
    {
        var claro = "white";
        var oscuro = "black";
        cb(claro, oscuro);
    }
    else if (theme == 'rand')
    {
        var rand = document.getElementById("b3");
        var numr1 = Math.floor(Math.random() * 360);
        var numr2 = Math.floor(Math.random() * 100);
        var numr3 = Math.floor(Math.random() * 100);
        console.log(numr1, numr2, numr3);
        var r1 = `hsl(${numr1}, ${numr2}%, ${numr3}%)`;
        window.sessionStorage.setItem('color', 'rand');
        let color = window.sessionStorage.getItem('color');
    
        var rand2 = document.getElementById("b3");
        var numr4 = Math.floor(Math.random() * 360);
        var numr5 = Math.floor(Math.random() * 100);
        var numr6 = Math.floor(Math.random() * 100);
        var r2 = `hsl(${numr4}, ${numr5}%, ${numr6}%)`;
        window.sessionStorage.setItem('color2', 'rand2');
        let color2 = window.sessionStorage.getItem('color2');
        cb(r1, r2);
    }
}

/*function clar(){
    var blanc = document.getElementById("b1");
    blanc.style.background = "white";
    var body1 = document.getElementById("body");
    body1.style.color = "black";
    body1.style.backgroundColor = "white";
    window.sessionStorage.setItem('color', 'light');//sola funciona
    let color = window.sessionStorage.getItem('color');
    
}*/

/*
function fosc(){
    var negre = document.getElementById("b2");
    negre.style.background = "#E0FFFF";
    var body2 =document.getElementById("body");
    body2.style.color = "white";
    body2.style.backgroundColor = "black";
    window.sessionStorage.setItem('color', 'black');
    let color = window.sessionStorage.getItem('color');
}*/

/*function ft_randomHSl2(b){
    var rand = document.getElementById("b3");
    var numr1 = Math.floor(Math.random() * 360);
    var numr2 = Math.floor(Math.random() * 100);
    var numr3 = Math.floor(Math.random() * 100);
    console.log(numr1, numr2, numr3);
    var x = `hsl(${numr1}, ${numr2}%, ${numr3}%)`;
    window.sessionStorage.setItem('color', 'rand');
    let color = window.sessionStorage.getItem('color');
    b(x,x);
}

ft_randomHSl2(changeThemeColor);*/
/*    var rand = document.getElementById("b3");
    var numr1 = Math.floor(Math.random() * 360);
    var numr2 = Math.floor(Math.random() * 100);
    var numr3 = Math.floor(Math.random() * 100);
    console.log(numr1, numr2, numr3);
    var r1 = `hsl(${numr1}, ${numr2}%, ${numr3}%)`;
    window.sessionStorage.setItem('color', 'rand');
    let color = window.sessionStorage.getItem('color');

    var rand2 = document.getElementById("b3");
    var numr4 = Math.floor(Math.random() * 360);
    var numr5 = Math.floor(Math.random() * 100);
    var numr6 = Math.floor(Math.random() * 100);
    var r2 = `hsl(${numr4}, ${numr5}%, ${numr6}%)`;
    window.sessionStorage.setItem('color2', 'rand2');
    let color2 = window.sessionStorage.getItem('color2');
    b(r1, r2); */