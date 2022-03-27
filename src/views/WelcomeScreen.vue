<template>
  <div class="welcome container my-24">
    <p class="font-bold">Welcome</p>
    <div v-if="showLogin">
      <h2>Login</h2>
      <LoginForm @login="enterChat" />
      <p>
        No account yet? <span @click="showLogin = false">Sign up</span> instead
      </p>
    </div>
    <div v-else>
      <h2>Sign up</h2>
      <SignupForm @signup="enterChat" />
      <p>
        Already registered? <span @click="showLogin = true">Login</span> instead
      </p>
    </div>
  </div>
</template>

<script>
import SignupForm from '../components/SignupForm.vue';
import LoginForm from '../components/LoginForm.vue';
import { ref } from 'vue';
import { useRouter } from 'vue-router';

export default {
  components: { SignupForm, LoginForm },
  setup() {
    const showLogin = ref(true);
    const router = useRouter();

    const enterChat = () => {
      router.push({ name: 'Chatroom' });
    };

    return { showLogin, enterChat };
  },
};
</script>

<style>
.welcome {
  @apply text-center;
}
/* form styles */
.welcome form {
  @apply w-80 mx-auto mt-4;
}
.welcome label {
  @apply block mx-4 my-2;
}
.welcome input {
  @apply w-full p-2 pl-3 rounded-xl border-4 border-solid border-white mx-auto my-3 outline-none;
}
.welcome span {
  @apply font-bold underline cursor-pointer;
}
.welcome button {
  @apply my-5 mx-auto;
}
</style>
