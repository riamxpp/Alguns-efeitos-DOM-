export default class TabNav {
  constructor(imagens, content){
    this.content = document.querySelectorAll(imagens);
    this.imagens = document.querySelectorAll(content);
    this.content[0].classList.add('ativo');
    this.handleContent = this.handleContent.bind(this);
  }
  
  adicionandoEvento(){
    this.imagens.forEach((item, index) => {
      ['touch', 'click'].forEach(evento => {
        item.addEventListener(evento, () => {
          this.handleContent(index);
        })
      })
    })
  }

  handleContent(index){
    this.content.forEach(item =>{
      item.classList.remove('ativo')
    })
    this.content[index].classList.add('ativo');
  }

  init(){
    this.adicionandoEvento();
  }
} 
