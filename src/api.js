import openSocket from 'socket.io-client';
const socket = openSocket('http://localhost:8000');

function subscribeToTimer(cb) {
  socket.emit('getMissions');
  socket.on('missions', (missions) => {
    cb(null, missions);
  });

}

export {
  subscribeToTimer,
};