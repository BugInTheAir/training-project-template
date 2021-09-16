import ready from '../utilities/_helper';
import IDocument from '../models/_document';
import initData from '../utilities/_init-data';

const aFewSecond = 'A few seconds ago';
const admin = 'Administrator MOD';

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

ready(() => {
  // renderGrid();
  initData(initialData);
});
