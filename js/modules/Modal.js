export default class Modal {
  constructor(iniciaModal, modal, botao){
    this.iniciaModal = document.querySelector(iniciaModal);
    this.modal = document.querySelector(modal);
    this.botao = document.querySelector(botao);
  }

  addEvento(){
    ['touch', 'click'].forEach(evento => {
      this.iniciaModal.addEventListener(evento, this.startModal);
      this.botao.addEventListener(evento, this.fechaModalBotao);
      this.modal.addEventListener(evento, this.fechaModalFora);
    })

  }

  startModal(event){
    event.preventDefault();
    this.modal.classList.add('ativo');
  }

  fechaModalBotao(){
    this.modal.classList.remove('ativo');
  }

  fechaModalFora(){
    this.modal.classList.remove('ativo');
  }

  bindCallBacks(){
    this.startModal = this.startModal.bind(this);
    this.fechaModalBotao = this.fechaModalBotao.bind(this);
    this.fechaModalFora = this.fechaModalFora.bind(this);
  }

  init(){
    this.bindCallBacks();
    this.addEvento();
    return this;
  }
}