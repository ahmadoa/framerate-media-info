<template>
  <nav class="Nav">
    <router-link to="/">
      <img src="@/assets/Logo.svg" alt="logo" class="h-7" />
    </router-link>
    <div class="flex items-center space-x-5">
      <router-link
        to="/movies"
        class="text-white font-semibold"
        active-class="activeLink"
        >Movies</router-link
      >
      <router-link
        to="/tv-shows"
        class="text-white font-semibold"
        active-class="activeLink"
        >Tv Shows</router-link
      >
      <button
        v-if="!isFound"
        @click="signInWithGoogle"
        class="flex gap-3 items-center bg-orange-700 p-2 rounded-xl"
      >
        <span class="text-white font-semibold bg-transparent"
          >Login With Google</span
        >
        <font-awesome-icon
          :icon="['fab', 'google']"
          class="text-lg text-yellow-400 bg-transparent"
        />
      </button>
      <DropdownMenu v-else>
        <DropdownMenuTrigger>
          <img :src="userData.photoURL" class="h-9 w-9 rounded-full" />
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuLabel class="bg-white">My Account</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem class="bg-white">
            <router-link
              to="/profile"
              class="link bg-transparent"
              active-class="activeLink"
              >Profile</router-link
            >
          </DropdownMenuItem>
          <DropdownMenuItem class="bg-white text-dark">
            <router-link
              to="/favorites"
              class="link bg-transparent"
              active-class="activeLink"
              >Favorites</router-link
            >
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem class="bg-white">
            <button @click="signOut">Log Out</button>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  </nav>
</template>

<script setup>
import { useUserStore } from "@/store/user";
import { storeToRefs } from "pinia";
import { signInWithGoogle, signOut } from "@/firebase/GoogleAuth";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const userStore = useUserStore();

const { isFound, userData } = storeToRefs(userStore);
</script>

<style scoped>
.Nav {
  @apply w-full px-10 h-16 flex items-center justify-between;
}

.link {
  @apply text-black font-semibold;
}

.activeLink {
  @apply text-orange-600 font-bold;
}
</style>
