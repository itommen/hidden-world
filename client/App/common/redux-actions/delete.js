import { without } from 'lodash';

export function started(state, request) {
  const { id } = request;
  const tripPartToRemove = state.data.find(x => x.id === id);
  const newTripParts = without(state.data, tripPartToRemove);

  return {
    ...state,
    data: newTripParts,
    deleted: [...state.deleted, tripPartToRemove]
  };
}

export function resolved(state, meta) {
  const { previousAction: { payload: { request: { id } } } } = meta;
  const deleted = state.deleted.filter(x => x.id !== id);

  return {
    ...state,
    deleted
  };
}

export function rejected(state, meta) {
  const { previousAction: { payload: { request: { id } } } } = meta;
  const removedTripPart = state.deleted.find(x => x.id === id);

  return {
    ...state,
    data: [...state.data, removedTripPart]
  };
}
