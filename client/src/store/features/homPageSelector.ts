import { createSelector } from "reselect";
import { IRootAppState } from "../../types";

const homePageSelector = (state: IRootAppState) => state.homePage;

export const makeSelectCollection = createSelector(
  homePageSelector,
  (homePage) => homePage.collection
);
