import { actionTypes } from '../actionCreators/types';

const INITIAL_STATE = {
	missionsData: []
};

export default (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case actionTypes.NEW_STARTING_MISSION:
			return {
				...state,
				missionsData: [...state.missionsData, action.payload]
			};
		case actionTypes.FINISHED_MISSION:
			return {
				...state,
				missionsData: state.missionsData.filter((el) => JSON.stringify(el) !== JSON.stringify(action.payload))
			};
		default:
			return state;
	}
};
