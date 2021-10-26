export default class CaixaCreator {               
  constructor(){
    this.valores = document.querySelector('.propriedades__caixa-Creator');
    this.caixa = document.querySelector('.caixa__para-alterar div');

    this.alteraCaixa = {
      element: this.caixa,
      texto(value){
        this.element.innerText = value;
      },
      width(value){
        this.element.style.width = value + 'px';
      },
      height(value){
        this.element.style.height = value + 'px';
      },
      backgroundColor(value){
        this.element.style.backgroundColor = value;
      },
      color(value){
        this.element.style.color = value;
      },
      borderRadius(value){
        this.element.style.borderRadius = value + 'px';
      }
    }
  }                         
  
  adicionandoEvento(){
    this.valores.addEventListener('change', this.mudando);
  }

  mudando(event){
    const name = event.target.name;
    const value = event.target.value;
    this.alteraCaixa[name](value);
    this.salvandoValores(name, value);
  }

  salvandoValores(name, value){
    localStorage[name] = value
  }

  pegandoValores(){
    const propriedades = Object.keys(localStorage);
    propriedades.forEach(item => {
      this.alteraCaixa[item](localStorage[item]);
      this.valores.children[item].value = localStorage[item];
    })
  }

  bindEvents(){
    this.mudando = this.mudando.bind(this);
  }

  init(){
    this.bindEvents()
    this.adicionandoEvento(); 
    this.pegandoValores();
    return this
  }; 
}
