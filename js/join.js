const $id = document.getElementById("ID");
const $pw = document.getElementById("PW");
const $login = document.getElementById("BtnLogin");
const $BtnJoin = document.getElementById("BtnJoin");

function Enter(e){
    if(e.keyCode === 13){
        discrimination();
        $id.focus();
    }
}
