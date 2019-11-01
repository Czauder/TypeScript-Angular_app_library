import { Book } from '../models/book-model';

export interface ApplicationState {
  Books: Book[];
  isLoading: boolean;
}

export const initialState: ApplicationState = {
  Books: [],
  isLoading: false
};
