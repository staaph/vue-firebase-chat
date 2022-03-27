<template>
  <div class="chat-window">
    <div v-if="error">{{ error }}</div>
    <div v-if="documents" class="messages" ref="messages">
      <div v-for="doc in formattedDocuments" :key="doc.id" class="single">
        <span class="created-at">{{ doc.createdAt }}</span>
        <span class="name">{{ doc.name }}</span>
        <span class="message">{{ doc.message }}</span>
      </div>
    </div>
  </div>
</template>

<script>
import getCollection from '../composables/getCollection';
import { formatDistanceToNow } from 'date-fns';
import { computed, onUpdated, ref } from 'vue';

export default {
  setup() {
    const { error, documents } = getCollection('messages');

    // eslint-disable-next-line vue/return-in-computed-property
    const formattedDocuments = computed(() => {
      if (documents.value) {
        return documents.value.map((doc) => {
          let time = formatDistanceToNow(doc.createdAt.toDate());
          return { ...doc, createdAt: time };
        });
      }
    });

    //auto-scroll
    const messages = ref(null);
    onUpdated(() => {
      messages.value.scrollTop = messages.value.scrollHeight;
    });

    return { error, documents, formattedDocuments, messages };
  },
};
</script>

<style scoped>
.chat-window {
  @apply bg-gray-800 m-2 px-4 py-3 rounded-2xl;
}
.single {
  @apply my-4 mx-0;
}
.created-at {
  @apply block text-gray-400 text-xs mb-1;
}
.name {
  @apply font-bold mr-2 text-white;
}
.messages {
  @apply max-h-80 overflow-auto text-gray-300;
}
</style>
