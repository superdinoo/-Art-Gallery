export const selectCurrentPage = (state: { pagination: { currentPage: number } }) =>
  state.pagination.currentPage;
