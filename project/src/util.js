import {SortDirection, SortType} from './const';

export const sortByProperty = (property = SortType.PRICE, type) => {
  let resultType;

  if (type) {
    resultType = type;
  } else {
    resultType = property === SortType.PRICE ? SortDirection.DESCENDING : SortDirection.ASCENDING;
  }

  return resultType === SortDirection.ASCENDING
    ? (itemA, itemB) => itemA[property] - itemB[property]
    : (itemA, itemB) => itemB[property] - itemA[property];
}

export const onEscKeyDown = (evt, func) => {
  const bodyElement = document.querySelector('body');
  if (evt.key === 'Escape' || evt.key === 'Esc') {
    evt.preventDefault();
    func();
    bodyElement.classList.remove('page__body--unactive');
    document.removeEventListener('keydown', onEscKeyDown);
  }
};

export const onOverlayClick = (evt, func) => {
  if (evt.target === evt.currentTarget) {
    func();
  }
}
