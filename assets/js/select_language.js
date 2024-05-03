//verifica se existe o localstorage e se existe a linguagem
if (!localStorage.getItem('language')) {
  localStorage.setItem('language', 'en');
}

let lang = localStorage.getItem('language');

// caso a linguagem seja pt-br altera o componente ativo
if (lang === 'pt-br') {
    document.querySelector('#icon-active').classList.add('flag-pt-br');
    document.querySelector('#icon-active').classList.remove('flag-en');
    document.querySelector('#language-active').innerHTML = 'Portuguese';
    document.querySelector('.portuguese').classList.add('active');

}

// caso a linguagem seja en altera o componente ativo
if (lang === 'en') {
    document.querySelector('#icon-active').classList.add('flag-usa');
    document.querySelector('#icon-active').classList.remove('flag-pt-br');
    document.querySelector('#language-active').innerHTML = 'English';
    document.querySelector('.english').classList.add('active');
}

// adiciona o evento de click nos componentes
document.querySelectorAll('.language').forEach(item => {
    item.addEventListener('click', event => {
        // remove a classe active do componente ativo
        document.querySelector('.active').classList.remove('active');
        // adiciona a classe active no componente clicado
        event.target.classList.add('active');
        // verifica se a linguagem é pt-br
        if (event.target.classList.contains('portuguese')) {
            // altera o icone
            document.querySelector('#icon-active').classList.add('flag-pt-br');
            document.querySelector('#icon-active').classList.remove('flag-usa');
            // altera o texto
            document.querySelector('#language-active').innerHTML = 'Portuguese';
            // altera a linguagem
            localStorage.setItem('language', 'pt-br');

            //redireciona para a url raiz com o parametro da linguagem
            window.location.href =  window.location.protocol + "//" + window.location.host.split('?')[0] + '?lang=' + localStorage.getItem('language');
        }
        // verifica se a linguagem é en
        if (event.target.classList.contains('english')) {
            // altera o icone
            document.querySelector('#icon-active').classList.add('flag-usa');
            document.querySelector('#icon-active').classList.remove('flag-pt-br');
            // altera o texto
            document.querySelector('#language-active').innerHTML = 'English';
            // altera a linguagem
            localStorage.setItem('language', 'en');

            //redireciona para a url raiz com o parametro da linguagem
            window.location.href =  window.location.protocol + "//" + window.location.host.split('?')[0] + '?lang=' + localStorage.getItem('language');
        }
    })
})

