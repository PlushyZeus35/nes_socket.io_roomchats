const socket = io();

const data = {
    roomIds: ['bulbasaur','charmander','squirtle']
}

let counter1 = document.getElementById('bulbasaurCounter');
let counter2 = document.getElementById('charmanderCounter');
let counter3 = document.getElementById('squirtleCounter');
socket.emit('chat:roomId', 'chat-resumen');
socket.emit('chat:resumen', data);

socket.on('chat:resumen', function(data){
    console.log(data);
    counter1.innerHTML = data[0];
    counter2.innerHTML = data[1];
    counter3.innerHTML = data[2];
});

socket.on('chat:update', function(){
    socket.emit('chat:resumen', data);
})