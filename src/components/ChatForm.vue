<template>
  <form>
    <textarea
      placeholder="Type a message and hit enter to send..."
      v-model="message"
      @keypress.enter.prevent="handleSubmit"
    ></textarea>
    <div v-if="error" class="error">{{ error }}</div>
  </form>
</template>

<script>
import useCollection from '../composables/useCollection';
import getUser from '../composables/getUser';
import { timestamp } from '../firebase/config';
import { ref } from 'vue';

export default {
  setup() {
    const { user } = getUser();
    const { addDoc, error } = useCollection('messages');

    const message = ref('');
    const handleSubmit = async () => {
      const chat = {
        name: user.value.displayName,
        message: message.value,
        createdAt: timestamp(),
      };
      await addDoc(chat);
      if (!error.value) {
        message.value = '';
      }
    };
    return { message, handleSubmit, error };
  },
};
</script>

<style scoped>
form {
  @apply m-2;
  /*margin: 10px;*/
}
textarea {
  @apply w-full max-w-full max-h-24 resize-none p-3 pl-4  box-border border rounded-2xl outline-none;
  font-family: inherit;
}
.error {
  @apply text-center text-red-600 py-2;
}
</style>
