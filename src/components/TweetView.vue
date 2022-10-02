<template>
  <!-- tweets -->
  <div
    class="
      flex
      px-3
      py-3
      borderb
      border-gray-100
      hover:bg-gray-50
      cursor-pointer
    "
  >
    <img
      :src="currentUser.profile_image_url"
      class="w-10 h-10 rounded-full hover:opacity-80 cursor-pointer"
    />
    <div class="ml-3 flex-1 flex flex-col space-y-1">
      <div class="text-sm space-x-1">
        <span class="font-bold">{{ tweet.email }}</span>
        <span class="text-gray-500 text-xs">@{{ tweet.username }}</span>
        <span>·</span>
        <span class="text-gray-500 text-xs">{{
          moment(tweet.created_at).fromNow()
        }}</span>
      </div>
      <!-- tweet body -->
      <div>
        {{ tweet.tweet_body }}
      </div>
      <!-- tweet actions -->
      <div class="flex justify-between">
        <div
          @click="showCommentModal = true"
          class="text-gray-500 hover:text-primary"
        >
          <!-- comment 버튼 -->
          <i
            class="fa-regular fa-comment hover:bg-blue-50 rounded-full p-2"
          ></i>
          <span class="ml-1 text-sm">{{ tweet.num_comments }}</span>
        </div>
        <div class="text-gray-500 hover:text-green-500">
          <!-- retweet 버튼 -->
          <i class="fas fa-retweet hover:bg-green-50 rounded-full p-2"></i>
          <span class="ml-1 text-sm">{{ tweet.num_retweets }}</span>
        </div>
        <div class="text-gray-500 hover:text-red-500">
          <!-- like 버튼 -->
          <i class="far fa-heart hover:bg-red-50 rounded-full p-2"></i>
          <span class="ml-1 text-sm">{{ tweet.num_likes }}</span>
        </div>
        <div class="text-gray-500 hover:text-primary">
          <!-- share 버튼 -->
          <i class="far fa-share-square hover:bg-blue-50 rounded-full p-2"></i>
        </div>
      </div>
    </div>
  </div>
  <comment-modal
    :tweet="tweet"
    v-if="showCommentModal"
    @close-modal="showCommentModal = false"
  ></comment-modal>
</template>

<script>
import moment from "moment";
import { ref } from "vue";
import commentModal from "@/components/CommentModal.vue";
export default {
  components: { commentModal },
  props: ["currentUser", "tweet"],
  setup() {
    const showCommentModal = ref(false);
    return {
      moment,
      showCommentModal,
    };
  },
};
</script>

<style></style>
