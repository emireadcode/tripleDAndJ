<script setup lang="ts">
import type { ClassifiedNavigationLinksType, NewCategoryOrSubCategoryDetailsType, } from "./types/";
import {inject, type ShallowRef, computed, } from "vue";
import {
  callMouseOverOrLeave,
  toggleButtonIcon,
  openEditShowOrAddCollections
} from "./utility/";


let 
  newCategoryOrSubCategory = inject('NEW-CATEGORY-OR-SUBCATEGORY') as ShallowRef<NewCategoryOrSubCategoryDetailsType>,
  categoryAndOrSubCategory = inject('CATEGORY-AND-OR-SUBCATEGORY') as ShallowRef<ClassifiedNavigationLinksType>
;

function localCallMouseOverOrLeave(status: 'isHoveredAddImageLink' | 'isHoveredEdit' | 'isHoveredSubCategory' | 'isHoveredShowCollections' | 'isHoveredAddCollections' | 'isHoveredExpand', booleanValue: Boolean, i?: number | undefined, j?: number | undefined, k?: number | undefined, l?: number | undefined) {
  callMouseOverOrLeave(status, categoryAndOrSubCategory, booleanValue, i, j, k, l);
}

const 
  localToggleButtonIcon = computed(() => {
    return (status: string[], icon: string[], i?: number | undefined, j?: number | undefined, k?: number | undefined, l?: number | undefined) => {
      return toggleButtonIcon(status, icon, categoryAndOrSubCategory, i, j, k, l);
    }
  })
;

defineProps<{
  i?: number | undefined;
  j?: number | undefined;
  k?: number | undefined;
  l?: number | undefined;
}>();

function localOpenEditShowOrAddCollections(buttonType: 'isClickedAddImageLink' | 'isClickedEdit' | 'isClickedShowCollections' | 'isClickedAddCollections', i?: number | undefined, j?: number | undefined, k?: number | undefined, l?: number | undefined) {
  openEditShowOrAddCollections(newCategoryOrSubCategory, categoryAndOrSubCategory, buttonType, i, j, k, l);
}

</script>

<template>
  <div style="width:33px;height:33px;">
    <a 
      title="Add Image Link"
      @mouseover="
        localCallMouseOverOrLeave('isHoveredAddImageLink', true, i, j, k, l)
      " 
      @mouseleave="
        localCallMouseOverOrLeave('isHoveredAddImageLink', false, i, j, k, l)
      " 
      @click="localOpenEditShowOrAddCollections('isClickedAddImageLink', i, j , k, l)"
      class="text-center d-block h-100 cursor-pointer underline-none" 
      style="border-radius:50%;"
    >
      <div class="w-100 h-100 flex-box flex-direction-row align-items-center justify-content-center p-0 m-0" style="padding:5px;">
        <img :src="'http://localhost:5174/src/assets/icons/'+
          localToggleButtonIcon(['isHoveredAddImageLink', 'isClickedAddImageLink'], ['add-image-link.svg', 'add-image-link-hover.svg'], i, j, k, l)
          " 
          style="width:30px;height:30px;" 
        />
      </div>
    </a>
  </div>                                                        
</template>
