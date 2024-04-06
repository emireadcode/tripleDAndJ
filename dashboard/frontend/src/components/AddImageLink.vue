<script setup lang="ts">
import type { ClassifiedNavigationLinksType, NewCategoryOrSubCategoryDetailsType, } from "./types/";
import DisplayError from "./DisplayError.vue";
import {inject, type ShallowRef, triggerRef, onMounted, } from "vue";
import {
  errorCheckerStyle,
} from "./utility/";

defineProps<{
  i?: number | undefined;
  j?: number | undefined;
  k?: number | undefined;
}>();

let
  newCategoryOrSubCategory = inject('NEW-CATEGORY-OR-SUBCATEGORY') as ShallowRef<NewCategoryOrSubCategoryDetailsType> 
  //categoryAndOrSubCategory = inject('CATEGORY-AND-OR-SUBCATEGORY') as ShallowRef<ClassifiedNavigationLinksType>
;

function triggerNewCategoryOrSubCategoryDetails() {
    triggerRef(newCategoryOrSubCategory);
  }

function localErrorCheckerStyle(key: 'URL-PATH' | 'COVER-PHOTO' | 'CATEGORY') {
  return errorCheckerStyle(key, newCategoryOrSubCategory);
}

onMounted(() => {
  triggerRef(newCategoryOrSubCategory);
})

</script>

<template>
  <form @submit.prevent="">
    <template v-if="newCategoryOrSubCategory.error.checker.length > 0">
      <div 
        class="d-block" 
        :ref="(el) => newCategoryOrSubCategory.errorRef = el as HTMLDivElement" 
      >
        <DisplayError 
          @error:close="() => {
            newCategoryOrSubCategory.error.message = ''; 
            newCategoryOrSubCategory.error.checker=[]; 
            triggerNewCategoryOrSubCategoryDetails(); 
          }" 
          :bottom="'15px'" 
          :error="newCategoryOrSubCategory.error.message" 
        ></DisplayError>
      </div>
    </template>
    <div class="d-block" style="padding-bottom:15px;">
      <label 
        :ref="(el) => newCategoryOrSubCategory.nameRef = el as HTMLLabelElement"
        for="categoryorsubcategoryname"
      >
        Enter Title:
      </label>
      <input 
        id="categoryorsubcategoryname" 
        type="text" 
        :style="localErrorCheckerStyle('CATEGORY')" 
        v-model="newCategoryOrSubCategory.name" 
        @input="triggerNewCategoryOrSubCategoryDetails()" 
        style="height:40px;border:1px solid #663600;" 
        class="w-100" 
      />
    </div>
    <div class="d-block" style="padding-bottom:15px;">
      <label for="categoryorcollectionurlpath">URL Path:</label>
      <input 
        type="text" 
        id="categoryorcollectionurlpath"
        name="categoryorcollectionurlpath"
        v-model="newCategoryOrSubCategory.urlPath" 
        @input="triggerNewCategoryOrSubCategoryDetails()" 
        style="height:40px;border:1px solid #663600;" 
        class="w-100" 
        :style="localErrorCheckerStyle('URL-PATH')" 
        :disabled="newCategoryOrSubCategory.directlinkornot === 'NO'? true : false"
        readonly
      />
    </div>
    <slot name="uploadCoverPhoto"></slot>
    <div style="padding:15px 0 0 0;" class="flex-box flex-direction-row flex-nowrap align-items-center justify-content-start m-0 w-100">
      <div style="padding-right:3px;width:50%;">
        <button 
          class="w-100" 
          type="button"
        >
          Add
        </button>
      </div>
      <div style="padding-left:3px;width:50%;">
        <button 
          class="w-100" 
          style="background-color:red;color:#fff;" 
          type="button"
        >
          Cancel
        </button>
      </div>
    </div>
  </form>
</template>