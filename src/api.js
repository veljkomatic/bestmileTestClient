import openSocket from 'socket.io-client';
const socket = openSocket('http://localhost:8000');

function subscribeToTimer() {
  console.log('wtf');
  socket.emit('getMissions');
  socket.on('missions', (missions) => {
    console.log('WTF', missions);
  });

}

export {
  subscribeToTimer,
};