import { defineStore } from "pinia";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "@/firebase/firebase";
import { ref } from "vue";

export const useUserStore = defineStore("User", () => {
  const userData = ref({});
  const isFound = ref(false);

  onAuthStateChanged(auth, (user) => {
    if (user) {
      userData.value = user;
      isFound.value = true;
    } else {
      userData.value = {};
      isFound.value = false;
    }
  });

  return {
    userData,
    isFound,
  };
});
