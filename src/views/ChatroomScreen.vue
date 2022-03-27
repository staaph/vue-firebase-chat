<template>
  <div class="container">
    <Navbar />
    <ChatWindow />
    <ChatForm />
  </div>
</template>

<script>
import ChatForm from '../components/ChatForm.vue';
import ChatWindow from '../components/ChatWindow.vue';
import Navbar from '../components/NavbarItem.vue';

import getUser from '../composables/getUser';
import { watch } from 'vue';
import { useRouter } from 'vue-router';

export default {
  components: { Navbar, ChatForm, ChatWindow },
  setup() {
    const router = useRouter();
    const { user } = getUser();
    watch(user, () => {
      if (!user.value) {
        router.push({ name: 'Welcome' });
      }
    });
  },
};
</script>
