<script setup lang="ts">

const 
  emits = defineEmits<{
    (e: "error:close", action: Boolean): void;
  }>()
;

defineProps<{
  error: string;
  bottom: string;
}>();

</script>

<template>
  <div class="d-block" :style="'padding-bottom:'+bottom+';'">
    <div class="d-block m-0" style="padding:3px;background-color:#ed5249;">
      <div class="p-0 m-0 position-relative flex-box flex-direction-row justify-content-end align-items-center">
        <div style="width:18px;height:18px;" class="t-0 position-absolute">
          <a 
            class="d-block h-100 cursor-pointer close-hover" 
            @click="emits('error:close', true)" 
            style="z-index:200;border-radius:50%;"
          >
            <div class="h-100 flex-box flex-direction-row justify-content-center align-items-center">
              <img src="http://localhost:5174/src/assets/icons/close.svg" style="width:10px;height:10px;" /> 
            </div>
          </a>
        </div>
      </div>
      <div class="d-block m-0" style="z-index:170;padding:3px;color:#fff;font-size:13px;">{{ 
        error
      }}
      </div>
    </div>
  </div>
</template>

<style scoped>
.close-hover {
  background-color: #663600;
}
.close-hover:hover {
  background-color: #46FF0B;
}
</style>