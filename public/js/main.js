// imports go at the top

import ChatMsg from './components/ChatMessage.js';

var socket = io();


function setUserID ({ sID, message }) {
    // save unique socket id to the client
    vm.socketID = sID;
 }
// utility functions for socket
// this will generate the ui for the message
function addNewMessage (message) {
    // debugger;
    vm.messages.push(message);
 }
function handleTypingEvent (user) {
  console.log('someone is typing');
}

const { createApp } = Vue

//const vm = Vue.createApp({})
// const is our variable
const vm = createApp({
    data() {
      return {
        socketID: "",
        message: '',
        messages:[],
        nickname: ''
      }
    },
    methods: {
        dispatchMessage () {
            console.log('send a message to the chat service');

            socket.emit('chat_message', { content: this.message, 
              name: this.nickname || 'anonymus',
              id: this.socketID });

            this.message = '';


        },
        dispatchTypingEvent () {
          // send the typing notifiacation to the server
          socket.emit('typing_event', { user: this.nickname || 'anonymus'})
        }

     },

    components: {

        newmsg: ChatMsg

    }
  }).mount('#app')
  socket.addEventListener('connected', setUserID);
  socket.addEventListener('new_message', addNewMessage);
  socket.addEventListener('typing', handleTypingEvent);