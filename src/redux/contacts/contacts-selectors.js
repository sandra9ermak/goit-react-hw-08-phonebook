export const getItems = (state) => state.contacts.items;
export const getFilter = (state) => state.contacts.filter;

export const getVisibleContacts = (state) => {
  const filter = getFilter(state);
  const items = getItems(state);

  return items.filter(
    (item) =>
      item.name.toLowerCase().includes(filter.toLowerCase()) ||
      item.number.includes(filter)
  );
};
