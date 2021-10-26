export default class DropDownMenu {
  constructor(dropDowns){
    this.dropDowns = document.querySelectorAll(dropDowns);
    this.ativaDropDownMenu = this.ativaDropDownMenu.bind(this);
  }

  adicionandoEvento(){
    this.dropDowns.forEach(item =>{
      ['click', 'touchstart'].forEach((userEvent, index) => {
        item.addEventListener(userEvent, this.ativaDropDownMenu);
      });
    });
    
  }

  ativaDropDownMenu(event){
    this.meuItem = event.currentTarget

    this.meuItem.classList.toggle('ativo');
    this.cliqueFora(this.meuItem, () => {
      this.meuItem.classList.remove('ativo');
    });
  }
  
  cliqueFora(element, callback){
    const html = document.documentElement;
    const outside = 'data-outside'
  
    if(!element.hasAttribute(outside)){
      ['click', 'touchstart'].forEach(userEvent => {
        html.addEventListener(userEvent, vendoCliqueFora);
      });
      element.setAttribute(outside, '');
    }
    function vendoCliqueFora(event){
      if(!element.contains(event.target)){//sem essa verificação o bubble do javascript irá remover na hr
        callback()
        element.removeAttribute(outside);
        // console.log(this.myEvents)
        ['click', 'touchstart'].forEach(userEvent => {
          html.removeEventListener(userEvent, vendoCliqueFora);
        });
      }
    }
  }

  init(){
    this.adicionandoEvento();
    return this
  }
}