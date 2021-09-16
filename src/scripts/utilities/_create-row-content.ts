import IDocument from '../models/_document';

const createRowContent = (element: IDocument) => {
  const detailRow = document.createElement('div');
  detailRow.classList.add('detail__row');
  const detailBtnPlaceholder = document.createElement('div');
  detailBtnPlaceholder.classList.add('detail__btn__placeholder');

  const iconColumn = document.createElement('div');
  iconColumn.classList.add('icon__column');
  const iconSpan = document.createElement('span');
  const img = document.createElement('i');
  img.classList.add('ms-Icon');
  img.classList.add('ms-font-xl');
  img.classList.add(element.icon);
  if (element.icon.includes('FabricFolderFill')) {
    img.style.color = 'Yellow';
  }
  iconSpan.appendChild(img);
  iconColumn.appendChild(iconSpan);

  const fileColumn = document.createElement('div');
  const fileSpan = document.createElement('span');
  const fileText = document.createTextNode(element.name);
  fileSpan.appendChild(fileText);
  fileSpan.classList.add('file__name');
  fileColumn.appendChild(fileSpan);
  fileColumn.classList.add('file__column');

  const modColumn = document.createElement('div');
  const modSpan = document.createElement('span');
  const modText = document.createTextNode(element.modified);
  modSpan.appendChild(modText);
  modColumn.appendChild(modSpan);
  modColumn.classList.add('rest__column');

  const modByColumn = document.createElement('div');
  const modBySpan = document.createElement('span');
  const modByText = document.createTextNode(element.modifedBy);
  modBySpan.appendChild(modByText);
  modByColumn.appendChild(modBySpan);
  modByColumn.classList.add('rest__column');

  detailRow.appendChild(detailBtnPlaceholder);
  detailRow.appendChild(iconColumn);
  detailRow.appendChild(fileColumn);
  detailRow.appendChild(modColumn);
  detailRow.appendChild(modByColumn);
  return detailRow;
};

export default createRowContent;
