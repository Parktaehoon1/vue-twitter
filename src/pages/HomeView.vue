<template>
  <!-- main part -->
  <div class="flex-1 border-r border-gray-100 overflow-y-auto">
    <div class="flex flex-col">
      <!-- page title -->
      <div class="border-b border-gray-100 px-3 py-2 font-bold text-lg">홈</div>
      <!-- tweeting section -->
      <div class="flex px-3 py-3 border-b-8 border-gray-100">
        <img
          :src="currentUser.profile_image_url"
          class="w-10 h-10 rounded-full hover:opacity-80 cursor-pointer"
        />
        <div class="ml-2 flex-1 flex flex-col">
          <textarea
            @keyup.enter="onAddTweet"
            v-model="tweetBody"
            placeholder="무슨 일이 일어나고 있나요?"
            class="w-full text-lg font-bold focus:outline-none mb-3 resize-none"
          ></textarea>
          <div class="text-right">
            <button
              v-if="!tweetBody.length"
              class="
                bg-blue-50
                text-sm
                font-bold
                text-white
                px-4
                py-1
                rounded-full
              "
            >
              트윗
            </button>
            <button
              v-else
              @click="onAddTweet"
              class="
                bg-primary
                hover:bg-dark
                text-sm
                font-bold
                text-white
                px-4
                py-1
                rounded-full
              "
            >
              트윗
            </button>
          </div>
        </div>
      </div>
      <!-- tweets -->
      <Tweet
        :currentUser="currentUser"
        :tweet="tweet"
        v-for="tweet in tweets"
        :key="tweet.id"
      />
    </div>
  </div>
  <!-- trend part -->
  <Trends />
</template>

<script>
import Trends from "@/components/TrendsView.vue";
import Tweet from "@/components/TweetView.vue";
import { ref, computed, onBeforeMount } from "vue";
import store from "@/store";
import { TWEET_COLLECTION, USER_COLLECTION } from "@/firebase";
import addTweet from "@/utils/addTweet";
export default {
  components: {
    Trends,
    Tweet,
  },
  setup() {
    const tweetBody = ref("");
    const currentUser = computed(() => store.state.user);
    const tweets = ref([]);

    onBeforeMount(() => {
      TWEET_COLLECTION.orderBy("created_at", "desc").onSnapshot((snapshot) => {
        snapshot.docChanges().forEach(async (change) => {
          let tweet = await getUserInfo(change.doc.data());

          if (change.type === "added") {
            tweets.value.splice(change.newIndex, 0, tweet);
          } else if (change.type === "modified") {
            tweets.value.splice(change.oldIndex, 1, tweet);
          } else if (change.type === "removed") {
            tweets.value.splice(change.oldIndex, 1);
          }
        });
      });
    });

    const getUserInfo = async (tweet) => {
      const doc = await USER_COLLECTION.doc(tweet.uid).get();
      tweet.profile_image_url = doc.data().profile_image_url;
      tweet.email = doc.data().email;
      tweet.username = doc.data().username;
      return tweet;
    };

    const onAddTweet = async () => {
      try {
        await addTweet(tweetBody.value, currentUser.value);
        tweetBody.value = "";
      } catch (err) {
        console.log("on add tweet err on homepage", err);
      }
    };
    return {
      currentUser,
      tweetBody,
      onAddTweet,
      tweets,
    };
  },
};
</script>

<style></style>
