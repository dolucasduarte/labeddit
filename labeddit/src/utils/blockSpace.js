function blockSpace(event) {
  if (event.which === 32) return event.preventDefault();
}

export default blockSpace;
