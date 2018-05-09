import { actionTypes } from '../actionCreators/types';

const INITIAL_STATE = {
	missionsData: [],
	passengerTransported: 0,
	distanceCovered: 0,
	avgTripLength: 0
};

export default (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case actionTypes.NEW_STARTING_MISSION:
			return {
				...state,
				avgTripLength: (state.avgTripLength + parseInt(action.payload.Trip_distance, 10)) / (state.missionsData.length + 1),
				missionsData: [...state.missionsData, action.payload],
			};
		case actionTypes.FINISHED_MISSION:
			return {
				...state,
				passengerTransported: state.passengerTransported + parseInt(action.payload.Passenger_count, 10),
				distanceCovered: state.distanceCovered + parseInt(action.payload.Trip_distance, 10),
				missionsData: state.missionsData.filter((el) => el.id !== action.payload.id)
			};
		default:
			return state;
	}
};
