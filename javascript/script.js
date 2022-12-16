var recebeItens = document.getElementById("recebeItens");

function adicionarTarefa() {

    if (document.getElementById("insiraLista").value !== "") {

        var novaTarefa = document.createElement("li");
        novaTarefa.innerHTML = document.getElementById("insiraLista").value;
    
        var removeLista = document.createElement("a");
        removeLista.innerHTML = " Excluir";
        removeLista.setAttribute("href", "javascript:;");
        removeLista.onclick = function() {
    
            recebeItens.removeChild(novaTarefa);
    
        }
    
        novaTarefa.appendChild(removeLista);
        recebeItens.appendChild(novaTarefa);
        document.getElementById("insiraLista")
    
    
    }

}
