<template>
  <div class="speech-bubble">
      <p v-html="text"></p>
  </div>
</template>

<script>
export default {
    name: 'SpeechBubble',
    props: ['text'],
    data: function() {
        return {}
    },
    methods: {}
}
</script>

<style scoped>
.speech-bubble {
 position: relative;
    background: white;
    width: 200px;
    border: 2px solid black;
    border-radius: .4em;
    padding: 18px;
}

.speech-bubble:before {
 content: '';
 position: absolute;
 bottom: 0;
 left: 50%;
 width: 0;
 height: 0;
 border: 20px solid transparent;
 border-top-color: black;
 border-bottom: 0;
 border-left: 0;
 margin-left: -10px;
 margin-bottom: -20px;
}
.speech-bubble:after {
 content: '';
 position: absolute;
 bottom: 0;
 left: 50%;
 width: 0;
 height: 0;
 border: 15px solid transparent;
 border-top-color: white;
 border-bottom: 0;
 border-left: 0;
 margin-left: -8px;
 margin-bottom: -15px;
}
</style>
