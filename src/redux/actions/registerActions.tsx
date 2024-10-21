export const SET_VENUE_MANAGER = `SET_VENUE_MANAGER`;

interface SetVenueManagerAction {
  type: typeof SET_VENUE_MANAGER;
  payload: boolean;
}

export type RegisterActionTypes = SetVenueManagerAction;

export const setVenueManager = (isManager: boolean): RegisterActionTypes => ({
  type: SET_VENUE_MANAGER,
  payload: isManager,
});
