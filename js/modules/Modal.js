export default class Modal {
  constructor(iniciaModal, modal, botao){
    this.iniciaModal = document.querySelector(iniciaModal);
    this.modal = document.querySelector(modal);
    this.botao = document.querySelector(botao);
  }

  addEvento(){
    this.iniciaModal.addEventListener('click', this.startModal);
    this.botao.addEventListener('click', this.fechaModalBotao);
    this.modal.addEventListener('click', this.fechaModalFora);
  }

  startModal(event){
    event.preventDefault();
    this.modal.classList.add('ativo');
    console.log('clickou');
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