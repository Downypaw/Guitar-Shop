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
