//executando o cógigo quando o DOM carregar completamente
document.addEventListener('DOMContentLoaded', function() {
    //pega o elemento de ID darkModeCheck e armazena ele na variavel darkMode
    const darkMode = document.getElementById('darkModeCheck');
    //Passa por referencia o body da pagina
    const body = document.body;
    //evento para detectar se o usuario apertar o checkbox
    darkMode.addEventListener('change', function() {
        //muda os elementos para os de classe dark-mode
        body.classList.toggle('dark-mode', darkMode.checked);
    });
});
