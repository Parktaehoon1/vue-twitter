<template>
  <div class="flex-1 flex">
    <!-- profile section -->
    <div class="flex-1 flex flex-col border-r border-color">
      <!-- title -->
      <div class="px-3 py-1 flex border-b border-color">
        <button class="mr-2">
          <i
            class="fas fa-arrow-left text-primary p-3 rounded-full hover:bg-blue-50"
          ></i>
        </button>
        <div>
          <div class="font-extrabold text-lg">Taehoon</div>
          <div class="text-xs text-gray">393 트윗</div>
        </div>
      </div>
      <!-- background image -->
      <div class="bg-gray-300 h-40 relative flex-none">
        <!-- profile image -->
        <div
          class="w-28 h-28 border-4 border-white bg-gray-100 rounded-full absolute -bottom-14 left-2"
        >
          <img
            src="http://picsum.photos/200"
            class="rounded-full opacity-90 hover:opacity-100 cursor-pointer"
          />
        </div>
      </div>
      <!-- profile edit button -->
      <div class="text-right mt-2 mr-2">
        <button
          class="border text-sm border-primary text-primary px-3 py-2 hover:bg-blue-50 font-bold rounded-full"
        >
          프로필 수정
        </button>
      </div>
      <!-- user info -->
      <div class="mx-3 mt-2">
        <div class="font-extrabold text-lg">@taehoon.com</div>
        <div class="text-gray">@taehoon.com</div>
        <div>
          <span class="text-gray">가입일:</span>
          <span class="text-gray">2011년 10월</span>
        </div>
        <div>
          <span class="font-bold mr1">28</span>
          <span class="text-gray mr-3">팔로우중</span>
          <span class="font-bold mr-1">7</span>
          <span class="text-gray">팔로워</span>
        </div>
      </div>
      <!-- tabs -->
      <div class="flex border-b border-color mt-3">
        <div
          class="py-3 text-primary font-bold border-b border-primary text-center w-1/4 hover:bg-blue-50 cursor-pointer hover:text-primary"
        >
          트윗
        </div>
        <div
          class="py-3 text-gray font-bold text-center w-1/4 hover:bg-blue-50 cursor-pointer hover:text-primary"
        >
          트윗
        </div>
        <div
          class="py-3 text-gray font-bold text-center w-1/4 hover:bg-blue-50 cursor-pointer hover:text-primary"
        >
          트윗
        </div>
        <div
          class="py-3 text-gray font-bold text-center w-1/4 hover:bg-blue-50 cursor-pointer hover:text-primary"
        >
          트윗
        </div>
      </div>
      <!-- tweets -->
      <div class="overflow-y-auto">
        <Tweet v-for="tweet in 10" :key="tweet" />
      </div>
    </div>
    <!-- trend section -->
    <Trends />
  </div>
</template>

<script>
import Trends from "@/components/TrendsView.vue";
import Tweet from "@/components/TweetView.vue";
export default {
  components: {
    Trends,
    Tweet,
  },
  setup() {
    return {};
  },
};
</script>

<style></style>
