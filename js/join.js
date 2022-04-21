const $Id = document.getElementById("ID");
const $Pw = document.getElementById("PW");
const $login = document.getElementById("BtnLogin");
const $BtnJoin = document.getElementById("BtnJoin");
const $IdCkText = document.getElementById("IdCkText");
const $PWmsg = document.getElementById("PWmsg");
const $PWCK = document.getElementById("PWCK"); 
$Id.addEventListener("focusout",IDCk);
$PWCK.addEventListener("focusout",PWLength);
$BtnJoin.addEventListener("click",Submit);
let temp = 0;
function IDCk(){
        for(let i=0;i<registerId.length; i++){
            console.log(registerId);
            if($Id.value === registerId[i]){
                $IdCkText.textContent = ''; 
                $IdCkText.textContent += "중복된 아이디 입니다.";
                $IdCkText.style.color = "red";
                // alert("중복된 아이디 입니다.");
                return false;
            }
            else if($Id.value.length < 4){
                $IdCkText.textContent = ''; 
                $IdCkText.textContent += "아이디를 4자 이상 입력해 주세요";
                $IdCkText.style.color = "red";
                
                // alert("아이디를 5자 이상 입력해 주세요");
                return false;
            }
            else{
                $IdCkText.textContent = ''; 
                $IdCkText.textContent += "사용 가능한 아이디 입니다.";
                $IdCkText.style.color = "green";
                console.log(registerId);
                temp++;
                // alert("사용 가능한 아이디 입니다.");
                return false;
            }
        }
    
}
function PWLength(){
    if($Pw.value != $PWCK.value){
        $PWmsg.textContent = '';
        $PWmsg.textContent += "비밀번호가 일치하지 않습니다.";
        $PWmsg.style.color = "red";
        
    }
    else if ($PWCK.value.length < 5){
        $PWmsg.textContent = '';
        $PWmsg.textContent += "비밀번호를 6자리 이상 입력해 주세요";
        $PWmsg.style.color = "red";

    }
    else {
        $PWmsg.textContent = '';
        $PWmsg.textContent += "비밀번호가 일치합니다.";
        $PWmsg.style.color = "green";
        temp++;
    }
}

function Submit(){
    if(temp === 2){
        temp++;
        registerId.push($Id.value);
        registerPw.push($PWCK.value);
        console.log(registerId);
        console.log(registerPw);
        // location.href="login.html";
    }
    else{
        alert("오류");   
    }
}
function Enter(e){
    if(e.keyCode === 13){
        discrimination();
        $Id.focus();
    }
}
