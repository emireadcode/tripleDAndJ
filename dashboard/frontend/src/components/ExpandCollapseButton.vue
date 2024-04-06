<script setup lang="ts">
import type { ClassifiedNavigationLinksType, } from "./types/";
import {inject, type ShallowRef, triggerRef, computed, } from "vue";
import {
  collapseAnyExpandButtonAndFormExceptTheOneClicked,
  callMouseOverOrLeave,
  toggleButtonIcon,
} from "./utility/";

defineProps<{
  i?: number | undefined;
  j?: number | undefined;
  k?: number | undefined;
}>();
 
let 
  categoryAndOrSubCategory = inject('CATEGORY-AND-OR-SUBCATEGORY') as ShallowRef<ClassifiedNavigationLinksType>
;

function handleClick(i?: number | undefined, j?: number | undefined, k?: number | undefined) {
  collapseAnyExpandButtonAndFormExceptTheOneClicked('EXPAND-BUTTON-CLICKED', categoryAndOrSubCategory, ((i as number)-1), ((j as number)-1), ((k as number)-1), undefined);
  if(j===undefined && k===undefined) {
    (
      (categoryAndOrSubCategory.value as ClassifiedNavigationLinksType)[((i as number)-1)] as ClassifiedNavigationLinksType[number]
    ).isSubCategoryCollapsed = !(
      (
        (categoryAndOrSubCategory.value as ClassifiedNavigationLinksType)[((i as number)-1)] as ClassifiedNavigationLinksType[number]
      ).isSubCategoryCollapsed
    );
  }
  else {
    if(k===undefined) {
      (
        (
          ((categoryAndOrSubCategory.value as ClassifiedNavigationLinksType)[((i as number)-1)] as ClassifiedNavigationLinksType[number]).subcategory as ClassifiedNavigationLinksType
        )[((j as number)-1)] as ClassifiedNavigationLinksType[number]
      ).isSubCategoryCollapsed = !(
        (
          (
            ((categoryAndOrSubCategory.value as ClassifiedNavigationLinksType)[((i as number)-1)] as ClassifiedNavigationLinksType[number]).subcategory as ClassifiedNavigationLinksType
          )[((j as number)-1)] as ClassifiedNavigationLinksType[number]
        ).isSubCategoryCollapsed
      );
    }
    else {
      (
        (
          (
            (
              ((categoryAndOrSubCategory.value as ClassifiedNavigationLinksType)[((i as number)-1)] as ClassifiedNavigationLinksType[number]).subcategory as ClassifiedNavigationLinksType
            )[((j as number)-1)] as ClassifiedNavigationLinksType[number]
          ).subcategory as ClassifiedNavigationLinksType
        )[((k as number)-1)] as ClassifiedNavigationLinksType[number]
      ).isSubCategoryCollapsed = !(
        (
          (
            (
              (
                ((categoryAndOrSubCategory.value as ClassifiedNavigationLinksType)[((i as number)-1)] as ClassifiedNavigationLinksType[number]).subcategory as ClassifiedNavigationLinksType
              )[((j as number)-1)] as ClassifiedNavigationLinksType[number]
            ).subcategory as ClassifiedNavigationLinksType
          )[((k as number)-1)] as ClassifiedNavigationLinksType[number]
        ).isSubCategoryCollapsed
      );
    }
  }
  triggerRef(categoryAndOrSubCategory);
}

function localCallMouseOverOrLeave(status: 'isHoveredEdit' | 'isHoveredSubCategory' | 'isHoveredShowCollections' | 'isHoveredAddCollections' | 'isHoveredExpand', booleanValue: Boolean, i?: number | undefined, j?: number | undefined, k?: number | undefined, l?: number | undefined) {
  callMouseOverOrLeave(status, categoryAndOrSubCategory, booleanValue, i, j, k, l);
}

const localToggleButtonIcon = computed(() => {
  return (status: string[], icon: string[], i?: number | undefined, j?: number | undefined, k?: number | undefined, l?: number | undefined) => {
    return toggleButtonIcon(status, icon, categoryAndOrSubCategory, i, j, k, l);
  }
});
</script>

<template>
  <div style="width:33px;height:33px;">
    <a 
      :title="
        (
          (j===undefined && k===undefined)?
          (
            (categoryAndOrSubCategory as ClassifiedNavigationLinksType)[((i as number)-1)] as ClassifiedNavigationLinksType[number]
          )
          :
          (
            (k===undefined)?
            (
              (
                (
                  (
                    categoryAndOrSubCategory as ClassifiedNavigationLinksType
                  )[((i as number)-1)] as ClassifiedNavigationLinksType[number]
                ).subcategory as ClassifiedNavigationLinksType
              )[((j as number)-1)] as ClassifiedNavigationLinksType[number]
            )
            :
            (
              (
                (
                  (
                    (
                      (
                        categoryAndOrSubCategory as ClassifiedNavigationLinksType
                      )[((i as number)-1)] as ClassifiedNavigationLinksType[number]
                    ).subcategory as ClassifiedNavigationLinksType
                  )[((j as number)-1)] as ClassifiedNavigationLinksType[number]
                ).subcategory as ClassifiedNavigationLinksType
              )[((k as number)-1)] as ClassifiedNavigationLinksType[number]
            )
          )
        ).isSubCategoryCollapsed? 'Collapse' : 'Expand'
      " 
      @mouseover="
        localCallMouseOverOrLeave('isHoveredExpand', true, i, j, k)
      " 
      @mouseleave="
        localCallMouseOverOrLeave('isHoveredExpand', false, i, j, k)
      " 
      @click="
        handleClick(i, j, k)
      "
      style="border-radius:50%;" 
      class="text-center d-block btnhover h-100 cursor-pointer underline-none" 
      :style="
      (
        (j===undefined && k===undefined)?
        (
          (categoryAndOrSubCategory as ClassifiedNavigationLinksType)[((i as number)-1)] as ClassifiedNavigationLinksType[number]
        )
        :
        (
          (k===undefined)?
          (
            (
              (
                (categoryAndOrSubCategory as ClassifiedNavigationLinksType)[((i as number)-1)] as ClassifiedNavigationLinksType[number]
              ).subcategory as ClassifiedNavigationLinksType
            )[((j as number)-1)] as ClassifiedNavigationLinksType[number]
          )
          :
          (
            (
              (
                (
                  (
                    (categoryAndOrSubCategory as ClassifiedNavigationLinksType)[((i as number)-1)] as ClassifiedNavigationLinksType[number]
                  ).subcategory as ClassifiedNavigationLinksType
                )[((j as number)-1)] as ClassifiedNavigationLinksType[number]
              ).subcategory as ClassifiedNavigationLinksType
            )[((k as number)-1)] as ClassifiedNavigationLinksType[number]
          )
        )
      ).isSubCategoryCollapsed? 'background-color:#663600;' : ''
      "
    >
      <div class="w-100 h-100 flex-box flex-direction-row align-items-center justify-content-center p-0 m-0" style="padding:5px;">
        <img :src="'http://localhost:5174/src/assets/icons/'+
          localToggleButtonIcon(['isHoveredExpand', 'isSubCategoryCollapsed'], ['plus-hover.svg', 'minus-hover.svg', 'plus.svg'], i, j, k)
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