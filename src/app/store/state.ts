import { Book } from '../models/book-model';
import { createSelector, createFeatureSelector } from '@ngrx/store';
import { User } from '../models/user-model';

export interface ApplicationState {
  Books: Book[];
  isLoading: boolean;
  Users: User[]
}

export const initialState: ApplicationState = {
  Books: [],
  isLoading: false,
  Users: []
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
