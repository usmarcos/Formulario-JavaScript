//valores padrões
const dados = {
	nome: "Ada Lovelace",
	email: "ada@email.com",
	telefones: [
		{
			numero: "(11) 99123-4567",
			tipo: "casa"
		}
	],
	endereco: {
		logradouro: "Rua das programadoras",
		cidade: "Vale do silício",
		estado: "Codefornia",
		cep: "10100-100",
		pais: "Programaland"
	}
}

//preenchendo o formulário html com os valores padrões acima
document.getElementById("nome").value = dados.nome
document.getElementById("email").value = dados.email
document.getElementById("telefone").value = dados.telefones[0].numero //coloquei a posição pois é um array dentro de array
document.getElementById("tipo").value = dados.telefones[0].tipo //coloquei a posição pois é um array dentro de array
document.getElementById("logradouro").value = dados.endereco.logradouro
document.getElementById("cidade").value = dados.endereco.cidade
document.getElementById("estado").value = dados.endereco.estado
document.getElementById("cep").value = dados.endereco.cep
document.getElementById("pais").value = dados.endereco.pais

//criando um formdata com o id do form em tela
const form = document.getElementById("formulario")
const formData = new FormData(form)

//conforme exercício pediu, caso existe alteração no nome seja imprimido no console os dados do formulário
document.getElementById("nome").addEventListener("change", function (event) {
	formData.set('nome', document.getElementById("nome").value)
	for (const dados of formData.entries()) {
		console.log(`${dados[0]}, ${dados[1]}`)
	}
	//limpa o console depois de 5 segundos
	setTimeout(() => {
		console.clear()
	}, 5000)
})

/**
 * Extra:
 * Agora, estou aplicando funcionalidade ao botão submit
 */

//função para exibição dos valores em tela com o appendChild 
function exibeDados() {
	//criando um formdata para o exibeDados
	const form = document.getElementById("formulario")
	const formData = new FormData(form)
	//preenchendo os dados do objeto form com os dados que estão no html (com os dados padrões e caso tenham sido alterados)
	const dadosEmTela = {
		nome: formData.get("nome"),
		email: formData.get("email"),
		telefones: [
			{
				numero: formData.get("telefone"),
				tipo: formData.get("tipo")
			}
		],
		endereco: {
			logradouro: formData.get("logradouro"),
			cidade: formData.get("cidade"),
			estado: formData.get("estado"),
			cep: formData.get("cep"),
			pais: formData.get("pais")
		}
	}
	//criando uma div e colocando os dados enviados para exibição
	const div = document.createElement("div");
	div.innerHTML = `<br><h3 class="mt-3 container">Dados enviados</h3>
				<p class="mt-3 container">Nome: ${dadosEmTela.nome}</p>
                <p class="mt-3 container">E-mail: ${dadosEmTela.email}</p>
                <p class="mt-3 container">Telefone: ${dadosEmTela.telefones[0].numero}</p>
                <p class="mt-3 container">Tipo de telefone: ${dadosEmTela.telefones[0].tipo}</p>
                <p class="mt-3 container">Endereço: ${dadosEmTela.endereco.logradouro}, ${dadosEmTela.endereco.cidade}, ${dadosEmTela.endereco.estado}, ${dadosEmTela.endereco.cep}, ${dadosEmTela.endereco.pais}</p>`;
	document.body.appendChild(div)
	//remove os dados depois de 5 segundos
	setTimeout(() => {
		div.remove()
	}, 5000)
}

//quando acionado o botão de salvar (submit) exibe os dados em tela simulando o envio para o back, mas mostrando em tela
document.getElementById("formulario").addEventListener("submit", function (event) {
	event.preventDefault()
	exibeDados()
})

/*
* Também seria possível dessa forma.
document.getElementById("salvar").addEventListener("click", salvar);
function salvar(event){
	event.preventDefault()
	exibeDados()
}*/