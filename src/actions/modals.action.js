export const openEditModal = (id) => {
  return { type: "OPEN_EDIT_MODAL", payload: { id } };
};

export const CloseEditModal = () => {
  return { type: "CLOSE_EDIT_MODAL" };
};
