<script setup>
import Header from "@/layouts/Header.vue";
import Sidebar from "@/layouts/Sidebar.vue";
import Conversation from "@/layouts/Conversation.vue";
import { useRouter } from "vue-router";
import { onMounted } from "vue";
import axios from "axios";

const router = useRouter();

const data = {
  loggedIn: localStorage.getItem("loggedIn"),
  token: localStorage.getItem("token"),
  user: [],
};

onMounted(() => {
  if (!data.loggedIn) {
    return router.push({ name: "login" });
  }

  axios
    .get("http://localhost:8000/api/user", {
      headers: { Authorization: "Bearer " + data.token },
    })
    .then((resp) => {
      console.log(resp);
      data.user = resp.data; // assign response to state user
    });
});
</script>

<template>
  <Header />

  <Sidebar />

  <Conversation />
</template>
