document.addEventListener("DOMContentLoaded", function () {
    const gerarAssinaturaBtn = document.getElementById("gerar-assinatura");
    gerarAssinaturaBtn.addEventListener("click", function () {
        const nome = document.getElementById("nome");
        const funcao = document.getElementById("funcao");
        const email = document.getElementById("email");
        const telefone = document.getElementById("telefone");
        const endereco = document.getElementById("endereco");

        const nomeOutput = document.getElementById("nome-output");
        const funcaoOutput = document.getElementById("funcao-output");
        const emailOutput = document.getElementById("email-output");

        nomeOutput.textContent = nome.value;
        funcaoOutput.textContent = funcao.value;
        emailOutput.textContent = email.value;
        telefoneOutput.textContent = telefone.value;
        enderecoOutput.textContent = endereco.value;
    });
});


function copyHtmlToClipboard() {
    const generatedHtml = document.getElementById("generated-html").textContent;
    const tempTextArea = document.createElement("textarea");
    tempTextArea.value = generatedHtml;
    document.body.appendChild(tempTextArea);
    tempTextArea.select();
    document.execCommand("copy");
    document.body.removeChild(tempTextArea);
}