<template>
  <div
    class="grid grid-cols-[1fr_minmax(1148px,_1280px)_1fr] bg-white h-32 border-b border-gray-300"
  >
    <div class="col-span-1"></div>
    <div
      class="nav-wrap col-span-1 w-full text-white flex flex-row items-center"
    >
      <!-- 로고 -->
      <RouterLink to="/" class="mx-10">
        <img :src="LogoImage" alt="로고" />
      </RouterLink>
      <!-- 검색창 -->
      <div
        class="sch border border-[#3396F4] p-3 mx-10 rounded-full min-w-[600px] flex items-center"
      >
        <input
          type="text"
          name="search"
          id="search"
          class="w-[500px] mx-5 text-xl text-black border-0 outline-none bg-white p-0 focus:bg-transparent"
          autocomplete="off"
        />
        <button class="w-6 mx-5">
          <img :src="Magnifier" alt="검색" />
        </button>
      </div>
      <!-- <BoardAlert ref="messageAlertRef" /> -->
    </div>
    <div class="col-span-1"></div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from "vue";
import LogoImage from "@/assets/logo.svg";
import Magnifier from "@/assets/magnifier.svg";
// import BoardAlert from "@/components/Presets/BoardAlert.vue";
// import { BoardAlert } from "@/components";
const messageAlertRef = ref(null);

// 전역 클릭 이벤트 핸들러
const handleGlobalClick = (e) => {
  if (messageAlertRef.value) {
    const modalElement = messageAlertRef.value.$el.querySelector(".modal");
    const iconElement =
      messageAlertRef.value.$el.querySelector(".notification-icon");

    // 모달이 열려있고, 클릭이 모달 외부에서 발생했으며, 알림 아이콘 외부인 경우
    if (
      modalElement &&
      !modalElement.contains(e.target) &&
      !iconElement.contains(e.target)
    ) {
      messageAlertRef.value.closeModal();
    }
  }
};

onMounted(() => {
  document.addEventListener("click", handleGlobalClick);
});

onUnmounted(() => {
  document.removeEventListener("click", handleGlobalClick);
});
</script>

<script>
let window_scrolling;

window.addEventListener("scroll", () => {
  if (!window_scrolling) {
    console.log("start wheeling!");
    document.documentElement.classList.remove("scroll-hidden");
  }

  // 일정시간 뒤에 스크롤 동작 멈춤을 감지
  clearTimeout(window_scrolling);
  window_scrolling = setTimeout(() => {
    console.log("stop wheeling!");
    window_scrolling = undefined;
    document.documentElement.classList.add("scroll-hidden");
  }, 400);
});
</script>

<style scoped>
.MessageAlert {
  position: relative;
}
</style>
