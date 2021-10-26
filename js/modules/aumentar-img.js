export default class AumentarDiminuirImg {
  constructor(img, botaoAumentar, botaoDiminuir, div){
    this.img = document.querySelector(img);
    this.botaoAumentar = document.querySelector(botaoAumentar);
    this.botaoDiminuir = document.querySelector(botaoDiminuir);
    this.div = document.querySelector(div);
    this.paragrafo = document.createElement('p');
    this.tamanhoAtual = 100;
  }

  adicionandoEventos(){
    this.botaoAumentar.addEventListener('click', this.aumentaImagem);    
    this.botaoDiminuir.addEventListener('click', this.diminuiImagem);
  }

  bindEventos(){
    this.aumentaImagem = this.aumentaImagem.bind(this);
    this.diminuiImagem = this.diminuiImagem.bind(this);
  }

  aumentaImagem(){
    this.tamanhoAtual += 10;
    this.img.style.maxWidth = 400+'px';
    this.img.style.minWidth = 100+'px';
    this.img.style.width = this.tamanhoAtual+'px';
    if(this.tamanhoAtual === 400){
      console.log(this.paragrafo)
      this.paragrafo.innerText = 'Tamanho máximo atingido';
      this.div.appendChild(this.paragrafo);
      return
    }else if(this.tamanhoAtual === 100){
      this.paragrafo.innerText = 'Tamanho minimo atingido';
      this.div.appendChild(this.paragrafo);
      return 
    }else {
      if(this.div.lastChild === this.paragrafo){
        this.div.removeChild(this.paragrafo);
      }
    }
  }
  
  diminuiImagem(){
    this.tamanhoAtual -= 10
    if(this.tamanhoAtual >= 100){
      this.img.style.width = this.tamanhoAtual + 'px';
      this.paragrafo.innerText = ''
    }else {
      this.paragrafo.innerText = 'Tamanho mínimo atingido';
      this.div.appendChild(this.paragrafo);
    }
  }

  init(){
    this.bindEventos();
    this.adicionandoEventos();
    return this
  }
}
