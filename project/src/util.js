import {SortDirection, SortType} from './const';

export const sortByProperty = (property = SortType.PRICE, type) => {
  console.log(property);
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
  if (evt.key === 'Escape' || evt.key === 'Esc') {
    evt.preventDefault();
    func();
    document.removeEventListener('keydown', onEscKeyDown);
  }
};

export const onOverlayClick = (evt, func) => {
  if (evt.target === evt.currentTarget) {
    func();
  }
}
