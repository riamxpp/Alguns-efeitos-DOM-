'use strict';

import TabNav from "./modules/tab-nav.js";
import VoltarParaTopo from "./modules/voltar-para-o-topo.js";
import DropDownMenu from "./modules/drop-down-menu.js";
import AumentarDiminuirImg from "./modules/aumentar-img.js"
import CaixaCreator from "./modules/caixa-creator.js";
import TollTipBox from "./modules/tooltype-box.js";
import Modal from "./modules/Modal.js";


const tabNav = new TabNav('[data-tab="content"] section', '[data-tab="menu"] li').init();
const scrollSuave = new VoltarParaTopo().init();
const dropDown = new DropDownMenu('[data-dropdown]').init();
const img = new AumentarDiminuirImg('.papagaio', '[data-aumenta]', '[data-diminui]', '.aumenta__diminui-img');
img.init();
const caixa = new CaixaCreator().init();
const tolltip = new TollTipBox('.tooltype-box').init();
const modal = new Modal('.inicia-modal', '.background-modal', '.modal button').init();