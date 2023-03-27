# Formulario-JavaScript

<h2>Formulário de Contato</h2>

<p>Este formulário permite que o usuário preencha seus dados pessoais para entrar em contato conosco. Os seguintes dados são solicitados:</p>

<ul>
  <li><strong>Nome completo:</strong> campo de texto para digitar o nome completo da pessoa física.</li>
  <li><strong>E-mail:</strong> campo de texto para digitar o endereço de e-mail da pessoa física.</li>
  <li><strong>Telefone:</strong> campo de seleção que permite ao usuário escolher o tipo de telefone (casa, trabalho ou celular) e digitar o número correspondente.</li>
  <li><strong>Endereço:</strong> campos de texto para digitar o logradouro, cidade, estado, CEP e país da pessoa física.</li>
</ul>

<p>Os valores padrões para cada campo são os seguintes:</p>

<pre><code>const dados = {
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
</code></pre>

<p>Você pode utilizar JavaScript para preencher os valores padrões no formulário, conforme necessário.</p>

# Extras
<p> Para esse exercício eu também criei a funcionalidade para quando clicado no botão "Salvar". Será exibido uma DIV com as informações preenchidas a serem enviadas</p>
<p> O CSS utilizado foi todo criado com Bootstrap</p>
