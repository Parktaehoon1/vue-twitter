<template>
  <!-- tweets -->
  <div
    class="flex px-3 py-3 borderb border-gray-100 hover:bg-gray-50 cursor-pointer"
  >
    <img
      src="http://picsum.photos/200"
      class="w-10 h-10 rounded-full hover:opacity-80 cursor-pointer"
    />
    <div class="ml-3 flex-1 flex flex-col space-y-1">
      <div class="text-sm space-x-1">
        <span class="font-bold">박태훈</span>
        <span class="text-gray-500 text-xs">@taehoon</span>
        <span>·</span>
        <span class="text-gray-500 text-xs">7분</span>
      </div>
      <!-- tweet body -->
      <div>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Omnis tempore
        quidem, quisquam aperiam praesentium porro eos impedit fuga tenetur
        voluptatibus blanditiis laboriosam fugit, ducimus error excepturi
        facilis! Magnam, accusantium sed!
      </div>
      <!-- tweet actions -->
      <div class="flex justify-between">
        <div class="text-gray-500 hover:text-primary">
          <i
            class="fa-regular fa-comment hover:bg-blue-50 rounded-full p-2"
          ></i>
          <span class="ml-1 text-sm">1</span>
        </div>
        <div class="text-gray-500 hover:text-green-500">
          <i class="fas fa-retweet hover:bg-green-50 rounded-full p-2"></i>
          <span class="ml-1 text-sm">2</span>
        </div>
        <div class="text-gray-500 hover:text-red-500">
          <i class="far fa-heart hover:bg-red-50 rounded-full p-2"></i>
          <span class="ml-1 text-sm">3</span>
        </div>
        <div class="text-gray-500 hover:text-primary">
          <i class="far fa-share-square hover:bg-blue-50 rounded-full p-2"></i>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style></style>
