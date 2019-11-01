import { Book } from '../models/book-model';
import { createSelector, createFeatureSelector } from '@ngrx/store';

export interface ApplicationState {
  Books: Book[];
  isLoading: boolean;
}

export const initialState: ApplicationState = {
  Books: [],
  isLoading: false
};

export const selectApplicationState = createFeatureSelector<ApplicationState>('books');
export const selectBooks = createSelector(
  selectApplicationState,
  state => state.Books
);
export const isLoading = createSelector(
    selectApplicationState,
    state => state.isLoading
)
