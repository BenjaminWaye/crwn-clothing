import { createSelector } from "reselect";

const selectCollection = (state) => state.collections;

export const selectCollectionSections = createSelector(
  [selectCollection],
  (collections) => collections.sections
);
