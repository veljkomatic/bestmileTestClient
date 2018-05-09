import { actionTypes } from './types';

import openSocket from 'socket.io-client';
const socket = openSocket('http://localhost:8000');

export const subscribeToMissions = () => dispatch => {
	socket.emit('getMissions');

	socket.on('newStartingMission', (newStartingMission) => {
		dispatch({ type: actionTypes.NEW_STARTING_MISSION, payload: newStartingMission });
	});
  
	socket.on('finishedMission', (finishedMission) => {
		dispatch({ type: actionTypes.FINISHED_MISSION, payload: finishedMission });
	});
}