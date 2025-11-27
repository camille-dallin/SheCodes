function abrirModal(elemento) {
    const modal = document.getElementById("mentorModal");
    
    const nome = elemento.getAttribute("data-nome");
    const cargo = elemento.getAttribute("data-cargo");
    const img = elemento.getAttribute("data-img");
    const desc = elemento.getAttribute("data-desc");

    document.getElementById("modalNome").innerText = nome;
    document.getElementById("modalCargo").innerText = cargo;
    document.getElementById("modalImg").src = img;
    document.getElementById("modalDesc").innerText = desc;

    const botao = document.getElementById("btnAgendar");
    const select = document.getElementById("horarioSelect");
    
    botao.innerText = "Confirmar Agendamento";
    botao.style.backgroundColor = "#7f5af0";
    botao.style.borderColor = "#7f5af0";
    botao.disabled = false;
    botao.style.cursor = "pointer";
    select.disabled = false;
    select.value = ""; 

    modal.style.display = "flex";
}

function fecharModal() {
    document.getElementById("mentorModal").style.display = "none";
}

window.onclick = function(event) {
    const modal = document.getElementById("mentorModal");
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

function agendarMentoria() {
    const select = document.getElementById("horarioSelect");
    const botao = document.getElementById("btnAgendar");
    const horarioEscolhido = select.options[select.selectedIndex].text;

    if (select.value === "") {
        alert("Por favor, selecione um horário disponível.");
        return;
    }

    botao.innerText = "Agendado: " + horarioEscolhido;
    botao.style.backgroundColor = "#28a745"; 
    botao.style.borderColor = "#28a745";
    botao.disabled = true;
    botao.style.cursor = "not-allowed";

    select.disabled = true;

    alert(`Sucesso! Você receberá o link da chamada para ${horarioEscolhido} no seu e-mail.`);
}