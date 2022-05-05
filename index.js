var oldDateObj;
var newDateObj;
var haaletusAvatud;

function haaletusStart() {
    oldDateObj = new Date();
    newDateObj = new Date(oldDateObj.getTime() + 5*60000);
    console.log('Algusaeg: ', oldDateObj)
    console.log('Lõpuaeg: ', newDateObj)
    document.getElementById('timerStartBtn').disabled = true;
    console.log('Hääletamiseks on hetkel aega 5 sekundit')
    setTimeout(()=>{
        document.getElementById('haaletaBtn').disabled = true;
        console.log('Hääletus on lõppenud');
        // haaletusAvatud kirjutada sisse ka protseduuridesse ja siin insert into database, et avatud. If haaletusAvatud then mine edasi, muidu...
        haaletusAvatud = false;
    }, 5000)
}

function haaleta() {

}