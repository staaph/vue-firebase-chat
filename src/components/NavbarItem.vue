<template>
  <nav v-if="user">
    <div>
      <p class="my-1 mx-auto text-sm text-gray-900">
        Hey there, {{ user.displayName }}
      </p>
      <p class="my-1 mx-auto text-sm text-gray-900text-sm text-gray-600">
        Currently logged in as {{ user.email }}
      </p>
    </div>
    <button @click="handleClick">Logout</button>
  </nav>
</template>

<script>
import useLogout from '../composables/useLogout';
import getUser from '../composables/getUser';

export default {
  setup() {
    const { logout } = useLogout();
    const { user } = getUser();
    const handleClick = async () => {
      await logout();
    };
    return { handleClick, user };
  },
};
</script>

<style scoped>
nav {
  @apply p-5 flex justify-between items-center;
}
</style>
