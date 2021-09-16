import IDocument from '../models/_document';
import createRowContent from './_create-row-content';

const initData = (data: IDocument[]) => {
  // TODO: implement code to Render grid'
  const ele = document.getElementById('detail__content');
  if (ele) {
    data.forEach(element => {
      ele.appendChild(createRowContent(element));
    });
  }
};

export default initData;
