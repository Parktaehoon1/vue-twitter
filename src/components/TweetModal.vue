<template>
  <div class="relative z-10" aria-labelledby="modal-title" role="dialog" aria-modal="true" @click="$emit('close-modal')">

  <div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>

  <div class="fixed inset-0 z-10 overflow-y-auto">
    <div class="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
     
     <!-- 컨텐츠 -->
      <div @click.stop class="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
            <div class="border-b border-gray-100 p-2">
                <button @click="$emit('close-modal')" class="fas fa-times text-primary text-lg p-2 h-10 w-10 hover:bg-blue-50 rounded-full"></button>
            </div>
            <!-- 트위팅  -->
             <div class="flex p-4">
        <img
          :src="currentUser.profile_image_url"
          class="w-10 h-10 rounded-full hover:opacity-80 cursor-pointer"
        />
        <div class="ml-2 flex-1 flex flex-col">
          <textarea
            v-model="tweetBody"
            rows="5"
            placeholder="무슨 일이 일어나고 있나요?"
            class="w-full text-lg font-bold focus:outline-none mb-3 resize-none"
          ></textarea>
          <div class="text-right">
            <button
              v-if="!tweetBody.length"
              class="bg-blue-50 text-sm font-bold text-white px-4 py-1 rounded-full"
            >
              트윗
            </button>
            <button
              v-else
              @click="onAddTweet"
              class="bg-primary hover:bg-dark text-sm font-bold text-white px-4 py-1 rounded-full"
            >
              트윗
            </button>
          </div>
        </div>
      </div>
      </div>
    </div>
  </div>
</div>

</template>

<script>
import {ref, computed} from 'vue'
import addTweet from '@/utils/addTweet'
import store from '@/store'
export default {
    setup(props, {emit}){
    const tweetBody = ref('');
    const currentUser = computed(()=>store.state.user)    
        console.log("cuurentuser",currentUser.value.profile_image_url)
    const onAddTweet = async () => {
      try {
        await addTweet(tweetBody.value, currentUser.value)
        tweetBody.value = "";
        emit('close-modal')
      } catch (err) {
        console.log("on add tweet err on homepage", err);
      }
    };
        return{
            tweetBody,
            onAddTweet,currentUser
        }
    }
}
</script>

<style>

</style>