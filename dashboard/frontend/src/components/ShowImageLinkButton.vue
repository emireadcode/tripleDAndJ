<script setup lang="ts">
import type { ClassifiedNavigationLinksType, NewCategoryOrSubCategoryDetailsType, } from "./types/";
import {inject, triggerRef, type ShallowRef, computed, ref, onMounted, onUnmounted, } from "vue";
import {
  callMouseOverOrLeave,
  toggleButtonIcon,
  openEditShowOrAddCollections
} from "./utility/";


let 
  newCategoryOrSubCategory = inject('NEW-CATEGORY-OR-SUBCATEGORY') as ShallowRef<NewCategoryOrSubCategoryDetailsType>,
  categoryAndOrSubCategory = inject('CATEGORY-AND-OR-SUBCATEGORY') as ShallowRef<ClassifiedNavigationLinksType>,
  modalTargetRef = ref<HTMLDivElement>()
;

function localCallMouseOverOrLeave(status: 'isHoveredShowImageLink' | 'isHoveredEdit' | 'isHoveredSubCategory' | 'isHoveredShowImageLink' | 'isHoveredAddCollections' | 'isHoveredExpand', booleanValue: Boolean, i?: number | undefined, j?: number | undefined, k?: number | undefined, l?: number | undefined) {
  callMouseOverOrLeave(status, categoryAndOrSubCategory, booleanValue, i, j, k, l);
}

const 
  localToggleButtonIcon = computed(() => {
    return (status: string[], icon: string[], i?: number | undefined, j?: number | undefined, k?: number | undefined, l?: number | undefined) => {
      return toggleButtonIcon(status, icon, categoryAndOrSubCategory, i, j, k, l);
    }
  }), 
  props = defineProps<{
    i?: number | undefined;
    j?: number | undefined;
    k?: number | undefined;
    l?: number | undefined;
  }>()
;

function isClickedShowImageLink(i?: number | undefined, j?: number | undefined, k?: number | undefined, l?: number | undefined) {
  return (
    (
      (
        (
          (
            (
              categoryAndOrSubCategory.value as ClassifiedNavigationLinksType
            )[((i as number)-1)] as ClassifiedNavigationLinksType[number]
          ).subcategory as ClassifiedNavigationLinksType
        )[((j as number)-1)] as ClassifiedNavigationLinksType[number]
      ).subcategory as ClassifiedNavigationLinksType
    )[((k as number)-1)] as ClassifiedNavigationLinksType[number]
  ).isClickedShowImageLink;
}

function handleClickOutside(evt: Event) {
  handleClickOutsideWithOtherParams(evt, props.i, props.j, props.k, props.l)
}

function handleClickOutsideWithOtherParams(evt: Event, i?: number | undefined, j?: number | undefined, k?: number | undefined, l?: number | undefined) {
  if(
    isClickedShowImageLink(
      i,
      j,
      k,
      l
    )
  ) {
    if(modalTargetRef.value && (evt.target as Node)) {
      const targetElement = modalTargetRef.value as HTMLDivElement;
      if (!targetElement.contains(evt.target as Node)) {
        (
          (
            (
              (
                (
                  (
                    categoryAndOrSubCategory.value as ClassifiedNavigationLinksType
                  )[((i as number)-1)] as ClassifiedNavigationLinksType[number]
                ).subcategory as ClassifiedNavigationLinksType
              )[((j as number)-1)] as ClassifiedNavigationLinksType[number]
            ).subcategory as ClassifiedNavigationLinksType
          )[((k as number)-1)] as ClassifiedNavigationLinksType[number]
        ).isClickedShowImageLink = false;
        triggerRef(categoryAndOrSubCategory);
        addBodyScroll();
      }
    }
  }
}

function removeBodyScroll() {
  document.body.style.overflow = 'hidden';
}

function addBodyScroll() {
  document.body.style.overflow = 'visible';
}

function localOpenEditShowOrAddCollections(buttonType: 'isClickedEdit' | 'isClickedShowImageLink' | 'isClickedAddCollections', i?: number | undefined, j?: number | undefined, k?: number | undefined, l?: number | undefined) {
  openEditShowOrAddCollections(newCategoryOrSubCategory, categoryAndOrSubCategory, buttonType, i, j, k, l);
}

onUnmounted(() => {
  window.removeEventListener('click', handleClickOutside);
}),

onMounted(() => {
  window.addEventListener('click', handleClickOutside);
});
</script>

<template>
  <div style="width:33px;height:33px;">
    <a 
      title="Show Image Links"
      @mouseover="
        localCallMouseOverOrLeave('isHoveredShowImageLink', true, i, j, k, l)
      " 
      @mouseleave="
        localCallMouseOverOrLeave('isHoveredShowImageLink', false, i, j, k, l)
      " 
      @click="localOpenEditShowOrAddCollections('isClickedShowImageLink', i, j , k, l);removeBodyScroll();"
      class="text-center d-block h-100 cursor-pointer underline-none" 
      style="border-radius:50%;"
    >
      <div class="w-100 h-100 flex-box flex-direction-row align-items-center justify-content-center p-0 m-0" style="padding:5px;">
        <img :src="'http://localhost:5174/src/assets/icons/'+
          localToggleButtonIcon(['isHoveredShowImageLink', 'isClickedShowImageLink'], ['show-image-link.svg', 'show-image-link-hover.svg'], i, j, k, l)
          " 
          style="width:30px;height:30px;" 
        />
      </div>
    </a>
  </div>                                                        
</template>
