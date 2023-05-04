const dropArea = document.querySelector('.drag-files')

dropArea.addEventListener('dragover', () => {
  dropArea.classList.add('dragover')
})

dropArea.addEventListener('dragleave', () => {
  dropArea.classList.remove('dragover')
})

/**
 * Aqui estão alguns exemplos de eventos que podem ser tratados com addEventListener:
 * 
 * click: Quando o usuário clica em um elemento HTML
 * mouseover: Quando o cursor do mouse entra em um elemento HTML
 * keydown: Quando uma tecla é pressionada no teclado
 * load: Quando a página é totalmente carregada
 * submit: Quando um formulário é enviado
 * change: Quando um elemento HTML, como um input ou select, é alterado pelo usuário
 * scroll: Quando o usuário rola a página
 resize: Quando o tamanho da janela do navegador é alterado 
 * dragover: é acionado quando um elemento está sendo arrastado sobre outro elemento. 
 */