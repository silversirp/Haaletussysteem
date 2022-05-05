var oldDateObj;
var newDateObj;

function haaletusStart() {
    oldDateObj = new Date();
    newDateObj = new Date(oldDateObj.getTime() + 5*60000);
    console.log('Algusaeg: ', oldDateObj)
    console.log('Lõpuaeg: ', newDateObj)
    document.getElementById('timerStartBtn').disabled = true;
}

function haaleta() {

}