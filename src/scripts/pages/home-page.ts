import ready from '../utilities/_helper';
import IDocument from '../models/_document';
import initData from '../utilities/_init-data';

const aFewSecond = 'A few seconds ago';
const admin = 'Administrator MOD';
let toggleBurger = false;
const initialData: IDocument[] = [
  {
    icon: 'ms-Icon--FabricFolderFill',
    name: 'CAS',
    modifedBy: 'Megan Bowen',
    modified: 'April 30',
  },
  {
    icon: 'ms-Icon--ExcelDocument',
    name: 'CoasterAndBargeLoading.xlsx',
    modified: aFewSecond,
    modifedBy: admin,
  },
  {
    icon: 'ms-Icon--ExcelDocument',
    name: 'RevenueByServices.xlsx',
    modified: aFewSecond,
    modifedBy: admin,
  },
  {
    icon: 'ms-Icon--ExcelDocument',
    name: 'RevenueByServices2016.xlsx',
    modified: aFewSecond,
    modifedBy: admin,
  },
  {
    icon: 'ms-Icon--ExcelDocument',
    name: 'RevenueByServices2017.xlsx',
    modified: aFewSecond,
    modifedBy: admin,
  },
];

function toggleBurgerContainer(isToggled: boolean) {
  const element = document.getElementById('mini_navbar__container');
  if (element) {
    if (!isToggled) {
      toggleBurger = !isToggled;
      element.style.transform = 'none';
    } else {
      toggleBurger = !isToggled;
      element.style.transform = 'translateY(-103%)';
    }
  }
}

function initBurgerBtnEvent() {
  toggleBurgerContainer(toggleBurger);
}

ready(() => {
  // renderGrid();
  initData(initialData);
  const ele = document.getElementById('burger__btn');
  if (ele) {
    ele.addEventListener('click', initBurgerBtnEvent);
  }
});
