import {getUsers} from "./users";


export default function(){
    if(localStorage.username){
        document.getElementById("modalBtnCont")!.innerHTML = `<span>Hola, ${getUsers()[0].userName}</span>`;

        document.getElementById("btnAddPhoto")!.innerHTML = `<button class="btn btn-primary btn-block">add Photo</button> 
                                                            <button id="btnSingOff" class="btn btn-danger btn-block">Sing off</button>`;

        $('#btnSingOff').on('click', function(e){
            e.preventDefault();
            localStorage.clear();
            window.location.reload();

        });
    }
}