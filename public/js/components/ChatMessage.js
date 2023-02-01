export default {
    name: ' TheChatMessageComponent ',

    props: ['msg'],

    data(){
        return {
            // or this.msg.id ?
            // check to see if the message's sockect ID is the same as ours
            // if it IS, float to the right
            // else float to the left
            matchedID: this.$parent.socketID == this.msg.message.id
        }
    },

    template: `
    <article class="chat-messages" :class="{ 'other-messages' : matchedID }">
    <h2>{{ msg.message.name }}</h2>
    <p>{{ msg.message.content }}</p>
    </article>
    
    
    `
  
    
    // or type  msg.name and  msg.content  in the template
}