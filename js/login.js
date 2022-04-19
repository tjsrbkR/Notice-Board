const $id = document.getElementById("ID");
const $pw = document.getElementById("PW");
const $login = document.getElementById("BtnLogin");
$login.addEventListener("click",discrimination);
$pw.addEventListener("keyup",Enter); 

function discrimination(){
    for(let i =0; i< register.length; i++){
        if($id.value === register[i].id && $pw.value === register[i].pw){
            alert("로그인 성공")
            location.href ="index.html"
            return false;
        }       
        else{
            alert("아이디 비밀번호를 확인해 주세요");
            $id.value = ''; 
            $pw.value = ''; 
            $id.focus();
            return false;
        }
    }
}
function Enter(e){
    if(e.keyCode === 13){
        discrimination();
        $id.focus();
    }
}