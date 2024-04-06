<script setup lang="ts">
import { ref, onMounted, onUnmounted, } from "vue";

let imgref = ref<HTMLImageElement | undefined>();

const 
  emits = defineEmits<{
    (e: "company:name", action: Boolean): void;
  }>()
;

function isCompanyNameVisible() {
  let t = setInterval(() => {
    if((imgref.value as HTMLImageElement)?.offsetHeight) {
      emits("company:name", true);
      clearInterval(t);
    }
  }, 10)
}

onUnmounted(() => {
  window.removeEventListener('resize', isCompanyNameVisible);
});

onMounted(() => {
  isCompanyNameVisible();
  window.addEventListener('resize', isCompanyNameVisible);
});

</script>

<template>
  <div 
    style="padding: 10px 0px"
    class="flex-box flex-direction-row w-100 m-0 justify-content-center align-items-center"
  >
    <img 
      :ref="(el) => imgref = el as HTMLImageElement"
      src="http://localhost:5173/src/assets/logos/company-name-md.svg" 
    />
  </div>
</template>
