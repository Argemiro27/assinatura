document.getElementById('generate-html-button').addEventListener('click', function () {
    const cardAssinatura = document.querySelector('.card-assinatura');
    const generatedHTML = cardAssinatura.outerHTML;

    const finalGeneratedHTML = `
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap/dist/css/bootstrap.min.css">
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free/css/all.min.css">
        <style>a{ text-decoration: none; color: inherit;} /* ... (estilos) ... */ </style>
        ${generatedHTML}
    `;

    document.getElementById('generated-html').textContent = finalGeneratedHTML;
});


