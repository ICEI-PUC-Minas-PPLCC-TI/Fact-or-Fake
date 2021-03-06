



const API_KEY = '1562820b9cfb4eb1a8cee664b129c26a';
var divTela = document.getElementById('tela');
divTela.style.display = 'none'


function exibeNoticias () {
    
    let texto = '';
    

    // Montar texto HTML das noticias
    let dados = JSON.parse (this.responseText);
    for (i=0; i< dados.articles.length; i++) {
        let noticia = dados.articles[i];
        let data = new Date (noticia.publishedAt);

        texto = texto + `
            <div class="box-noticia">
                <img src="${noticia.urlToImage}" alt="">
                <span class="titulo">${noticia.title}</span><br>
                <span class="creditos">${data.toLocaleDateString ()} - 
                    ${noticia.source.name} - 
                    ${noticia.author}</span><br>
                <span class="text">
                ${noticia.content} <a href="${noticia.url}">Leia mais ...</a>
                </span>
            </div>            
        `;
    };
    divTela.style.display = 'block'

    // Preencher a DIV com o texto HTML
    divTela.innerHTML = texto;
}


function executaPesquisa () {
    let query = document.getElementById('txtPesquisa').value;
    

    let  xhr  = new XMLHttpRequest ();
    
    
    xhr.onload = exibeNoticias;
    
    xhr.open('GET', `https://newsapi.org/v2/everything?q=${query}&apiKey=${API_KEY}`,true);
    

    
    xhr.send ();
}
document.getElementById ('btnPesquisa').addEventListener ('click',executaPesquisa);

