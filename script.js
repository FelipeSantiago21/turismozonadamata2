let count = 1 ;
document.getElementById("radio1").checked = true;
setInterval( function(){
    nextImage();
},2000)


function nextImage(){

    count ++;
    if(count>4){
        count=1;
    }
    document.getElementById("radio"+count).checked = true;
}
<label >First name:</label><br>
<input type="text" id="nome" ><br>
<input type= “number” id= “idade” ><br>
<input type= “email” id=”email_user”><br>
<input type="date"><br>
<input type= “password” id=”senha” ><br>
<button onclick="teste()">Enviar</button>
