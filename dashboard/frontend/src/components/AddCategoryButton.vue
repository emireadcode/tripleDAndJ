<script setup lang="ts">
import type { ClassifiedNavigationLinksType, NewCategoryOrSubCategoryDetailsType} from "./types/";
import {inject, type ShallowRef, computed } from "vue";
import {
  addCategoryAndOrSubCategory,
  callMouseOverOrLeave,
  toggleButtonIcon,
} from "./utility/";

defineProps<{
  i?: number | undefined;
  j?: number | undefined;
  k?: number | undefined;
}>();

let 
  newCategoryOrSubCategory = inject('NEW-CATEGORY-OR-SUBCATEGORY') as ShallowRef<NewCategoryOrSubCategoryDetailsType>, 
  categoryAndOrSubCategory = inject('CATEGORY-AND-OR-SUBCATEGORY') as ShallowRef<ClassifiedNavigationLinksType>
;

const btnBackgroundCompStyle = computed(() => {
  return (i?: number | undefined, j?: number | undefined, k?: number | undefined) => {
    if(j===undefined && k===undefined) {
      return (
        (categoryAndOrSubCategory.value as ClassifiedNavigationLinksType)[((i as number)-1)] as ClassifiedNavigationLinksType[number]
      ).isClickedSubCategory? 'background-color:#663600;' : '';
    }
    else {
      if(k===undefined) {
        return  (
          (
            (
              (categoryAndOrSubCategory.value as ClassifiedNavigationLinksType)[((i as number)-1)] as ClassifiedNavigationLinksType[number]
            ).subcategory as ClassifiedNavigationLinksType
          )[(j as number)-1] as ClassifiedNavigationLinksType[number]
        ).isClickedSubCategory? 'background-color:#663600;' : '';
      }
      else {
        return (
          (
            (
              (
                (categoryAndOrSubCategory.value as ClassifiedNavigationLinksType)[((i as number)-1)] as ClassifiedNavigationLinksType[number]
              ).subcategory as ClassifiedNavigationLinksType
            )[(j as number)-1].subcategory as ClassifiedNavigationLinksType
          )[((k as number)-1)] as ClassifiedNavigationLinksType[number]
        ).isClickedSubCategory? 'background-color:#663600;' : '';
      }
    }
  }
}),
localToggleButtonIcon = computed(() => {
  return (status: string[], icon: string[], i?: number | undefined, j?: number | undefined, k?: number | undefined, l?: number | undefined) => {
    return toggleButtonIcon(status, icon, categoryAndOrSubCategory, i, j, k, l);
  }
});

function handleClick(i?: number | undefined, j?: number | undefined, k?: number | undefined) {
  if(j===undefined && k===undefined) {
    addCategoryAndOrSubCategory(((i as number)-1), undefined, undefined, 'FIRST', newCategoryOrSubCategory, categoryAndOrSubCategory);
  }
  else {
    if(k===undefined) {
      addCategoryAndOrSubCategory(((i as number)-1), ((j as number)-1), undefined, 'SECOND', newCategoryOrSubCategory, categoryAndOrSubCategory);
    }
    else {
      addCategoryAndOrSubCategory(((i as number)-1), ((j as number)-1), ((k as number)-1), 'THIRD', newCategoryOrSubCategory, categoryAndOrSubCategory);
    }
  }
}

function localCallMouseOverOrLeave(status: 'isHoveredSubCategory' | 'isHoveredShowCollections' | 'isHoveredAddCollections' | 'isHoveredExpand', booleanValue: Boolean, i?: number | undefined, j?: number | undefined, k?: number | undefined, l?: number | undefined) {
  callMouseOverOrLeave(status, categoryAndOrSubCategory, booleanValue, i, j, k, l);
}

</script>

<template>
  <div style="width:33px;height:33px;">
    <a 
      title="Add Subcategory" 
      @mouseover="
        localCallMouseOverOrLeave('isHoveredSubCategory', true, i, j, k)
      " 
      @mouseleave="
        localCallMouseOverOrLeave('isHoveredSubCategory', false, i, j, k)
      " 
      @click="
        handleClick(i, j, k)
      " 
      class="text-center d-block btnhover h-100 cursor-pointer underline-none" 
      style="border-radius:50%;"
      :style="
        btnBackgroundCompStyle(i, j, k)
      "
    >
      <div class="w-100 h-100 flex-box flex-direction-row align-items-center justify-content-center p-0 m-0" style="padding:5px;">
        <img 
          :src="'http://localhost:5174/src/assets/icons/'+
          localToggleButtonIcon(['isHoveredSubCategory', 'isClickedSubCategory'], ['categories.svg', 'categories-hover.svg'], i, j, k)
          " 
          style="width:30px;height:30px;" 
        />
      </div>
    </a>
  </div>
</template>

<style scoped>
.btnhover:hover {
  background-color:#663600;
}
</style>