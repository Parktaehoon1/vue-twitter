<template>
  <div class="flex flex-col items-center space-y-4 mt-10">
    <i
      :class="`fab fa-twitter text-4xl text-primary ${
        loading ? 'animate-bounce' : ''
      }`"
    ></i>
    <span class="text-2xl font-bold">트위터 회원가입</span>
    <input
      v-model="username"
      type="text"
      class="rounded w-96 px-4 py-3 border border-gray-300 focus:ring-2 focus:border-primary focus:outline-none"
      placeholder="아이디"
    />
    <input
      v-model="email"
      type="text"
      class="rounded w-96 px-4 py-3 border border-gray-300 focus:ring-2 focus:border-primary focus:outline-none"
      placeholder="이메일"
    />
    <input
      v-model="password"
      type="password"
      class="rounded w-96 px-4 py-3 border border-gray-300 focus:ring-2 focus:border-primary focus:outline-none"
      placeholder="비밀번호"
    />
    <button v-if="loading" class="w-96 rounded bg-blue-50 text-white py-4">
      회원가입 중 입니다.
    </button>
    <button
      v-if="!loading"
      class="w-96 rounded bg-primary text-white py-4 hover:bg-dark"
      @click="onRegister"
    >
      회원가입
    </button>
    <router-link to="/login">
      <button class="text-primary">계정이 이미 있으신가요? 로그인 하기</button>
    </router-link>
  </div>
</template>

<script>
import { ref } from "vue";
import { auth, USER_COLLECTION } from "@/firebase";
import { useRouter } from "vue-router";
export default {
  setup() {
    const username = ref("");
    const email = ref("");
    const password = ref("");
    const loading = ref(false);
    const router = useRouter();

    const onRegister = async () => {
      try {
        loading.value = true;
        const credential = await auth.createUserWithEmailAndPassword(
          email.value,
          password.value
        );
        const user = credential.user;
        // const {user} = await auth.createUserWithEmailAndPassword(
        //   email.value,
        //   password.value
        // );
        // 코드와 동일.
        const doc = USER_COLLECTION.doc(user.uid);
        await doc.set({
          uid: user.uid,
          email: email.value,
          profile_image_url: "/profile.jpeg",
          num_tweets: 0,
          followers: [],
          followings: [],
          created_at: Date.now(),
        });
        alert("회원 가입에 성공하셨습니다. 로그인 해주세요.");
        router.push("/login");
        // 라우터로 이동
      } catch (err) {
        console.log(
          "🚀 ~ file: RegisterView.vue ~ line 51 ~ onRegister ~ err",
          err
        );
        alert(err.message);
      } finally {
        // finally는 try가 실행이되든 실패를 하든 실행되는 것
        loading.value = false;
      }
    };
    return {
      username,
      email,
      password,
      loading,
      onRegister,
    };
  },
};
</script>

<style></style>
