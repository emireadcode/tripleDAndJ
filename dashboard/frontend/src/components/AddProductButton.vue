<script setup lang="ts">
import type { ClassifiedNavigationLinksType, NewCategoryOrSubCategoryDetailsType, } from "./types/";
import {inject, type ShallowRef, computed, } from "vue";
import {
  callMouseOverOrLeave,
  toggleButtonIcon,
  openEditShowOrAddCollections,
} from "./utility/";

defineProps<{
  i?: number | undefined;
  j?: number | undefined;
  k?: number | undefined;
  l?: number | undefined;
}>();

let 
  newCategoryOrSubCategory = inject('NEW-CATEGORY-OR-SUBCATEGORY') as ShallowRef<NewCategoryOrSubCategoryDetailsType>,
  categoryAndOrSubCategory = inject('CATEGORY-AND-OR-SUBCATEGORY') as ShallowRef<ClassifiedNavigationLinksType>
;

const localToggleButtonIcon = computed(() => {
  return (status: string[], icon: string[], i?: number | undefined, j?: number | undefined, k?: number | undefined, l?: number | undefined) => {
    return toggleButtonIcon(status, icon, categoryAndOrSubCategory, i, j, k, l);
  }
});

function localCallMouseOverOrLeave(status: 'isHoveredSubCategory' | 'isHoveredShowCollections' | 'isHoveredAddCollections' | 'isHoveredExpand', booleanValue: Boolean, i?: number | undefined, j?: number | undefined, k?: number | undefined, l?: number | undefined) {
  callMouseOverOrLeave(status, categoryAndOrSubCategory, booleanValue, i, j, k, l);
}

function localOpenEditShowOrAddCollections(buttonType: 'isClickedEdit' | 'isClickedShowCollections' | 'isClickedAddCollections', i?: number | undefined, j?: number | undefined, k?: number | undefined, l?: number | undefined) {
  openEditShowOrAddCollections(newCategoryOrSubCategory, categoryAndOrSubCategory, buttonType, i, j, k, l);
}
</script>

<template>
  <div style="width:33px;height:33px;">
    <a 
      title="Add Product" 
      @mouseover="
        localCallMouseOverOrLeave('isHoveredAddCollections', true, i, j, k, l)
      " 
      @mouseleave="
        localCallMouseOverOrLeave('isHoveredAddCollections', false, i, j, k, l)
      " 
      @click="localOpenEditShowOrAddCollections('isClickedAddCollections', i, j , k, l)" 
      class="text-center d-block btnhover h-100 cursor-pointer underline-none" 
      style="border-radius:50%;"
      :style="
        (
          (j===undefined && k===undefined && l===undefined)?
          (
            (categoryAndOrSubCategory as ClassifiedNavigationLinksType)[((i as number)-1)] as ClassifiedNavigationLinksType[number]
          )
          :
          (
            (k===undefined && l===undefined)?
            (
              (
                (
                  (categoryAndOrSubCategory as ClassifiedNavigationLinksType)[((i as number)-1)] as ClassifiedNavigationLinksType[number]
                ).subcategory as ClassifiedNavigationLinksType
              )[(j as number)-1] as ClassifiedNavigationLinksType[number]
            )
            :
            (
              (l===undefined)?
              (
                (
                  (
                    (
                      (categoryAndOrSubCategory as ClassifiedNavigationLinksType)[((i as number)-1)] as ClassifiedNavigationLinksType[number]
                    ).subcategory as ClassifiedNavigationLinksType
                  )[(j as number)-1].subcategory as ClassifiedNavigationLinksType
                )[((k as number)-1)] as ClassifiedNavigationLinksType[number]
              )
              :
              (
                (
                  (
                    (
                      (
                        (
                          (categoryAndOrSubCategory as ClassifiedNavigationLinksType)[((i as number)-1)] as ClassifiedNavigationLinksType[number]
                        ).subcategory as ClassifiedNavigationLinksType
                      )[(j as number)-1].subcategory as ClassifiedNavigationLinksType
                    )[((k as number)-1)] as ClassifiedNavigationLinksType[number]
                  ).subcategory as ClassifiedNavigationLinksType
                )[(l as number)-1] as ClassifiedNavigationLinksType[number]
              )
            )
          )
        ).isClickedAddCollections? 'background-color:#663600;' : ''
      "
    >
      <div class="w-100 h-100 flex-box flex-direction-row align-items-center justify-content-center p-0 m-0" style="padding:5px;">
        <img 
          :src="'http://localhost:5174/src/assets/icons/'+
          localToggleButtonIcon(['isHoveredAddCollections', 'isClickedAddCollections'], ['product.svg', 'product-hover.svg'], i, j, k, l)
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
