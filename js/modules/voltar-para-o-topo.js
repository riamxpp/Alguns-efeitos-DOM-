export default class VoltarParaTopo {
  criandoDiv(){
    const div = document.createElement('div');
    const a = document.createElement('a');
  
    div.classList.add('topo');
    a.innerText = 'Voltar para o topo'
    a.href = '#topo'
    div.appendChild(a);
    document.body.appendChild(div);
    return div;
  }
  
  adicionandoEvento(){
    const div = this.criandoDiv();
    if(div){
      this.link = div.querySelector('a');
      this.link.addEventListener('click', this.scrollSuave);
    }
  }
  scrollSuave(){
    this.link.scrollTo({
      top: 0,
      behavior: 'smooth'
    })  
  }
 
  bindEvents(){
    this.scrollSuave = this.scrollSuave.bind(this);
  }

  init(){
    this.bindEvents();
    this.adicionandoEvento();
    return this
  }
}
