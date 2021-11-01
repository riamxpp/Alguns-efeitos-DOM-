export default class tollTipBox {
  constructor(container){
    this.container = document.querySelectorAll(container);
  }

  adicionandoEvento(){
    this.container.forEach(item => {
      item.addEventListener('mouseover', this.onMouseOver);
      item.addEventListener('touchover', this.onMouseOver)
    })
  }

  onMouseOver(event){
    this.criandoDiv(event.currentTarget);
    event.currentTarget.addEventListener('mousemove', this.mouseMove);
    event.currentTarget.addEventListener('mouseleave', this.mouseLeave);

    event.currentTarget.addEventListener('touchmove', this.mouseMove);
    event.currentTarget.addEventListener('touchleave', this.mouseLeave);
  }
  
  mouseMove(event){
    let eventType = (event.type === 'mousemove')? 'mousemove' : 'touchmove';
    console.log(event);
    if(eventType === 'mousemove'){
      this.tollTipBox.style.top = event.clientY + 900 + 'px';
      if(event.clientX + 380 > window.innerWidth){
        this.tollTipBox.style.left = event.clientX - 200 + 'px'
      }else {
        this.tollTipBox.style.left = event.clientX + 'px'
      }
    }else if(eventType === 'touchmove'){
      this.tollTipBox.style.top = event.changedTouches[0].clientX + 900 + 'px'; 
      this.tollTipBox.style.left = event.changedTouches[0].clientY + 100 + 'px'
    }
  }
  
  mouseLeave(event){
    event.currentTarget.removeEventListener('mousemove', this.mouseMove);
    event.currentTarget.removeEventListener('mouseleave', this.mouseLeave);
    this.tollTipBox.remove();

    event.currentTarget.removeEventListener('touchmove', this.mouseMove);
    event.currentTarget.removeEventListener('touchleave', this.mouseLeave);
  }
  
  criandoDiv(element){
    const div = document.createElement('div');
    const text = element.getAttribute('aria-label');
    div.innerText = text;
    div.classList.add('tolltip-style');
    document.body.appendChild(div);
    this.tollTipBox = div
  }

  bindCallbacks(){
    this.onMouseOver = this.onMouseOver.bind(this);
    this.mouseMove = this.mouseMove.bind(this);
    this.mouseLeave = this.mouseLeave.bind(this);
  }

  init(){
    this.bindCallbacks();
    this.adicionandoEvento();
    return this;
  }
}
