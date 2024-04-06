<script setup lang="ts">
import type { ClassifiedNavigationLinksType, NewCategoryOrSubCategoryDetailsType, } from "./types/";
import EnterSubCategoryYesOrNoDirectLinkIfYesThenURLPath from "./EnterSubCategoryYesOrNoDirectLinkIfYesThenURLPath.vue";
import {inject, type ShallowRef, watch, ref, triggerRef, onMounted, } from "vue";
import {
  pickFile,
  filePicked,
  errorCheckerStyle,
} from "./utility/";
import AddCategoryButton from "./AddCategoryButton.vue";
import AddProductButton from "./AddProductButton.vue";
import EditButton from "./EditButton.vue";
import ExpandCollapseButton from "./ExpandCollapseButton.vue";
import ShowProductsButton from "./ShowProductsButton.vue";
import EditCategoryOrSubCategory from "./EditCategoryOrSubCategory.vue";
import AddProduct from "./AddProduct.vue";
import ShowProduct from "./ShowProduct.vue";
import AddImageLinkButton from "./AddImageLinkButton.vue";
import ShowImageLinkButton from "./ShowImageLinkButton.vue";
import AddImageLink from "./AddImageLink.vue";
import ShowImageLink from "./ShowImageLink.vue";

defineProps<{
  menuClicked: Boolean;
}>();

let 
  leftArrowHover = ref<Boolean>(false),
  rightArrowHover = ref<Boolean>(false), 
  newCategoryOrSubCategory = inject('NEW-CATEGORY-OR-SUBCATEGORY') as ShallowRef<NewCategoryOrSubCategoryDetailsType>, 
  categoryAndOrSubCategory = inject('CATEGORY-AND-OR-SUBCATEGORY') as ShallowRef<ClassifiedNavigationLinksType>
;

function triggerNewCategoryOrSubCategoryDetails() {
  triggerRef(newCategoryOrSubCategory);
}

function localPickFile() {
  pickFile(newCategoryOrSubCategory);
  triggerNewCategoryOrSubCategoryDetails();
}
  
function localFilePicked(e: Event) {
  filePicked(e, newCategoryOrSubCategory);
  triggerNewCategoryOrSubCategoryDetails();
}

function localErrorCheckerStyle(key: 'URL-PATH' | 'COVER-PHOTO' | 'CATEGORY') {
  return errorCheckerStyle(key, newCategoryOrSubCategory);
}

watch(
  () => newCategoryOrSubCategory.value.name,
  (name) => {
    if(name.length > 0 && newCategoryOrSubCategory.value.error.checker.indexOf('CATEGORY') > -1) {
      newCategoryOrSubCategory.value.error.checker.splice(
        newCategoryOrSubCategory.value.error.checker.indexOf('CATEGORY'),
        1
      );
      if(newCategoryOrSubCategory.value.error.checker.length === 0) {
        newCategoryOrSubCategory.value.error.message = '';
      }
      triggerNewCategoryOrSubCategoryDetails();
    }
    else {
      if(
        name.length === 0 
        && 
        newCategoryOrSubCategory.value.error.message.length > 0
        &&
        newCategoryOrSubCategory.value.error.checker.indexOf('CATEGORY') === -1
      ) {
        newCategoryOrSubCategory.value.error.checker.push('CATEGORY');
        triggerNewCategoryOrSubCategoryDetails();
      }
    }
  }
);

watch(
  () => newCategoryOrSubCategory.value.urlPath,
  (urlPath) => {
    if(urlPath.length > 0 && newCategoryOrSubCategory.value.error.checker.indexOf('URL-PATH') > -1) {
      newCategoryOrSubCategory.value.error.checker.splice(
        newCategoryOrSubCategory.value.error.checker.indexOf('URL-PATH'),
        1
      );
      if(newCategoryOrSubCategory.value.error.checker.length === 0) {
        newCategoryOrSubCategory.value.error.message = '';
      }
      triggerNewCategoryOrSubCategoryDetails();
    }
    else {
      if(
        urlPath.length === 0 
        && 
        newCategoryOrSubCategory.value.error.message.length > 0
        &&
        newCategoryOrSubCategory.value.error.checker.indexOf('URL-PATH') === -1
      ) {
        newCategoryOrSubCategory.value.error.checker.push('URL-PATH');
        triggerNewCategoryOrSubCategoryDetails();
      }
    }
  }
);

watch(
  () => newCategoryOrSubCategory.value.coverPhoto.name,
  (name) => {
    if(name.length > 0 && newCategoryOrSubCategory.value.error.checker.indexOf('COVER-PHOTO') > -1) {
      newCategoryOrSubCategory.value.error.checker.splice(
        newCategoryOrSubCategory.value.error.checker.indexOf('COVER-PHOTO'),
        1
      );
      if(newCategoryOrSubCategory.value.error.checker.length === 0) {
        newCategoryOrSubCategory.value.error.message = '';
      }
      triggerNewCategoryOrSubCategoryDetails();
    }
    else {
      if(
        name.length === 0 
        && 
        newCategoryOrSubCategory.value.error.message.length > 0
        &&
        newCategoryOrSubCategory.value.error.checker.indexOf('COVER-PHOTO') === -1
      ) {
        newCategoryOrSubCategory.value.error.checker.push('COVER-PHOTO');
        triggerNewCategoryOrSubCategoryDetails();
      }
    }
  }
);

watch(
  () => newCategoryOrSubCategory.value.directlinkornot,
  (directlinkornot) => {
    if(directlinkornot === 'NO') {
      if(newCategoryOrSubCategory.value.error.checker.indexOf('URL-PATH') > -1) {
        newCategoryOrSubCategory.value.error.checker.splice(
          newCategoryOrSubCategory.value.error.checker.indexOf('URL-PATH'),
          1
        );
        if(newCategoryOrSubCategory.value.error.checker.length === 0) {
          newCategoryOrSubCategory.value.error.message = '';
        }
        triggerNewCategoryOrSubCategoryDetails();
      }
    }
    else {
      if(
        newCategoryOrSubCategory.value.error.message.length > 0
        &&
        newCategoryOrSubCategory.value.error.checker.indexOf('URL-PATH') === -1
      ) {
        newCategoryOrSubCategory.value.error.checker.push('URL-PATH');
        triggerNewCategoryOrSubCategoryDetails();
      }
    }
  }
);

onMounted(() => {
  triggerRef(newCategoryOrSubCategory);
})

</script>

<template>
  <div class="position-relative h-100 flex-box flex-direction-row w-100 p-0 m-0 flex-nowrap justify-content-start align-items-center">
    <div 
      class="position-fixed h-100 t-0" 
      style="z-index:320;width:45px;background-color:#fff;" 
      :style="menuClicked? 'left:0;' : 'left:320;'"
    >
      <div class="flex-box flex-direction-row flex-nowrap justify-content-center align-items-center p-0 m-0 w-100 h-100">
        <a 
          class="underline-none d-block cursor-pointer" 
          @mouseover="leftArrowHover = true" 
          @mouseleave="leftArrowHover = false" 
          style="border-radius:50%;" 
          :style="leftArrowHover?'background-color:#663600' : ''"
        >
          <img 
            :src="'http://localhost:5174/src/assets/icons/'+(leftArrowHover? 'left-arrow-hover.svg' : 'left-arrow.svg')" 
            style="width:40px;height:40px;" 
          />
        </a>
      </div>
    </div>
    <div class="flex-fill align-self-stretch h-100" style="z-index:300;">
      <div style="width:auto;padding:20px 49px">
        <table style="width:1200px;">
          <tbody>
            <tr 
              style="border:1px solid black;"  
              v-for="i in Object.keys(categoryAndOrSubCategory).length" 
              :key="(i-1)+'-TABLE'" 
            >
              <template v-if="
                (
                  (
                    categoryAndOrSubCategory as ClassifiedNavigationLinksType
                  )[(i-1)] as ClassifiedNavigationLinksType[number]
                ) !== undefined 
                && 
                'name' in (
                  (
                    categoryAndOrSubCategory as ClassifiedNavigationLinksType
                  )[(i-1)] as ClassifiedNavigationLinksType[number]
                )
                &&
                (
                  (
                    categoryAndOrSubCategory as ClassifiedNavigationLinksType
                  )[(i-1)] as ClassifiedNavigationLinksType[number]
                ).name === ''"
              >
                <td style="width:1200px;padding:15px 0px;">
                  <div class="w-100 flex-box flex-direction-row justify-content-start align-items-center flex-nowrap p-0 m-0">
                    <div style="width:300px;padding:10px;background-color:#D3D3D3;">
                      <EnterSubCategoryYesOrNoDirectLinkIfYesThenURLPath 
                        :i="i"
                      >
                        <template v-slot:uploadCoverPhoto>
                          <div class="d-block" style="padding-bottom:15px;">
                            <div class="d-block">
                              <button 
                                style="color:#fff;background-color: #663600;" 
                                class="w-100 btn" 
                                @click="localPickFile()" 
                                type="button"
                              >{{
                                (newCategoryOrSubCategory.coverPhoto.name === ''? 'Upload' : 'Change') + ' Cover Photo'
                              }}
                              </button>
                              <input
                                type="file"
                                style="display:none;"
                                :ref="(el) => {
                                  newCategoryOrSubCategory.coverPhoto.fileInputRef = el as HTMLInputElement;
                                }"
                                accept="image/*"
                                @change="(e) => localFilePicked(e)" 
                              />
                            </div>
                            <div 
                              class="d-block" 
                              style="padding:1px 0 0 0;"
                            >
                              <div 
                                :ref="(el) => newCategoryOrSubCategory.coverPhoto.srcErrorRef = el as HTMLDivElement"
                                class="flex-box flex-direction-row justify-content-center align-items-center flex-nowrap overflow-auto m-0" 
                                style="height:280px;border:1px solid gray;" 
                                :style="newCategoryOrSubCategory.coverPhoto.error !== ''? 'background-color:#ed5249;' : localErrorCheckerStyle('COVER-PHOTO')" 
                              >
                                <template v-if="
                                  newCategoryOrSubCategory.coverPhoto.name === ''
                                ">
                                  <div :style="(
                                    newCategoryOrSubCategory.coverPhoto.error !== '' 
                                    || 
                                    newCategoryOrSubCategory.error.checker.includes('COVER-PHOTO')
                                  )? 'color:#fff;' : 'color:black;'"
                                  >{{
                                    'Cover photo ' +
                                    (
                                      newCategoryOrSubCategory.coverPhoto.error !== ''
                                      ? 'dimension must be exactly equal to 530px by 489px.'
                                      :
                                      (
                                        newCategoryOrSubCategory.error.checker.includes('COVER-PHOTO')
                                        ? 'is missing' : 'dimension must be exactly equal to 530px by 489px.'
                                      )
                                    )
                                  }}
                                  </div>
                                </template>
                                <template v-else>
                                  <img
                                    :ref="(el) => { 
                                      newCategoryOrSubCategory.coverPhoto.fileOutputRef = el as HTMLImageElement;
                                    }" 
                                    :src="newCategoryOrSubCategory.coverPhoto.src"
                                  />
                                </template>
                              </div>
                            </div>
                          </div>
                        </template>
                      </EnterSubCategoryYesOrNoDirectLinkIfYesThenURLPath>
                    </div>
                  </div>
                </td>
              </template>
              <template v-else>
                <template v-if="
                  ((categoryAndOrSubCategory as ClassifiedNavigationLinksType)[(i-1)] as ClassifiedNavigationLinksType[number]) !== undefined
                  &&
                  'subcategory' in ((categoryAndOrSubCategory as ClassifiedNavigationLinksType)[(i-1)] as ClassifiedNavigationLinksType[number])
                  &&
                  ((categoryAndOrSubCategory as ClassifiedNavigationLinksType)[(i-1)] as ClassifiedNavigationLinksType[number]).subcategory !== undefined
                  &&
                  Object.keys(
                    ((categoryAndOrSubCategory as ClassifiedNavigationLinksType)[(i-1)] as ClassifiedNavigationLinksType[number]).subcategory as ClassifiedNavigationLinksType
                  ).length > 0
                ">
                  <td style="width:1200px;">
                    <table>
                      <tbody>
                        <tr style="border:1px solid black;">
                          <td style="width:300px;">
                            <div class="d-block">
                            {{ 
                              (
                                (
                                  categoryAndOrSubCategory as ClassifiedNavigationLinksType
                                )[(i-1)] as ClassifiedNavigationLinksType[number]
                              ).name
                            }}
                            </div>
                            <div class="d-block" style="padding:10px 0;">
                              <ul class="flex-box flex-direction-row flex-nowrap align-items-center justify-content-start list-style-none m-0 p-0">
                                <li class="flex-shrink-0 flex-grow-0" style="padding-left:10px;">
                                  <ExpandCollapseButton 
                                    :i="i" 
                                  >
                                  </ExpandCollapseButton>
                                </li>
                                <li class="flex-shrink-0 flex-grow-0" style="padding-left:10px;">
                                  <AddCategoryButton 
                                    :i="i" 
                                  >
                                  </AddCategoryButton>
                                </li>
                                <li class="flex-shrink-0 flex-grow-0" style="padding-left:10px;">
                                  <EditButton 
                                    :i="i" 
                                  >
                                  </EditButton>
                                </li>
                              </ul>
                            </div>
                            <template v-if="
                              (
                                (
                                  categoryAndOrSubCategory as ClassifiedNavigationLinksType
                                )[(i-1)] as ClassifiedNavigationLinksType[number]
                              ).isClickedEdit
                            "
                            >
                              <div class="d-block" style="padding:15px 0;">
                                <div style="width:300px;padding:10px;background-color:#D3D3D3;">
                                  <EditCategoryOrSubCategory 
                                    :i="i" 
                                  >
                                    <template v-slot:uploadCoverPhoto>
                                      <div class="d-block" style="padding-bottom:15px;">
                                        <div class="d-block">
                                          <button 
                                            style="color:#fff;background-color: #663600;" 
                                            class="w-100 btn" 
                                            @click="localPickFile()" 
                                            type="button"
                                          >{{
                                            (newCategoryOrSubCategory.coverPhoto.name === ''? 'Upload' : 'Change') + ' Cover Photo'
                                          }}
                                          </button>
                                          <input
                                            type="file"
                                            style="display:none;"
                                            :ref="(el) => {
                                              newCategoryOrSubCategory.coverPhoto.fileInputRef = el as HTMLInputElement;
                                            }"
                                            accept="image/*"
                                            @change="(e) => localFilePicked(e)" 
                                          />
                                        </div>
                                        <div 
                                          class="d-block" 
                                          style="padding:1px 0 0 0;"
                                        >
                                          <div 
                                            :ref="(el) => newCategoryOrSubCategory.coverPhoto.srcErrorRef = el as HTMLDivElement"
                                            class="flex-box flex-direction-row justify-content-center align-items-center flex-nowrap overflow-auto m-0" 
                                            style="height:280px;border:1px solid gray;" 
                                            :style="newCategoryOrSubCategory.coverPhoto.error !== ''? 'background-color:#ed5249;' : localErrorCheckerStyle('COVER-PHOTO')" 
                                          >
                                            <template v-if="
                                              newCategoryOrSubCategory.coverPhoto.name === ''
                                            ">
                                              <div :style="(
                                                newCategoryOrSubCategory.coverPhoto.error !== '' 
                                                || 
                                                newCategoryOrSubCategory.error.checker.includes('COVER-PHOTO')
                                              )? 'color:#fff;' : 'color:black;'"
                                              >{{
                                                'Cover photo ' +
                                                (
                                                  newCategoryOrSubCategory.coverPhoto.error !== ''
                                                  ? 'dimension must be exactly equal to 530px by 489px.'
                                                  :
                                                  (
                                                    newCategoryOrSubCategory.error.checker.includes('COVER-PHOTO')
                                                    ? 'is missing' : 'dimension must be exactly equal to 530px by 489px.'
                                                  )
                                                )
                                              }}
                                              </div>
                                            </template>
                                            <template v-else>
                                              <img
                                                :ref="(el) => { 
                                                  newCategoryOrSubCategory.coverPhoto.fileOutputRef = el as HTMLImageElement;
                                                }" 
                                                :src="newCategoryOrSubCategory.coverPhoto.src"
                                              />
                                            </template>
                                          </div>
                                        </div>
                                      </div>
                                    </template>
                                  </EditCategoryOrSubCategory>
                                </div>
                              </div>
                            </template>
                          </td>
                          <template v-if="
                            ((categoryAndOrSubCategory as ClassifiedNavigationLinksType)[(i-1)] as ClassifiedNavigationLinksType[number]) !== undefined
                            &&
                            'subcategory' in ((categoryAndOrSubCategory as ClassifiedNavigationLinksType)[(i-1)] as ClassifiedNavigationLinksType[number])
                            &&
                            ((categoryAndOrSubCategory as ClassifiedNavigationLinksType)[(i-1)] as ClassifiedNavigationLinksType[number]).subcategory !== undefined
                            &&
                            Object.keys(
                              ((categoryAndOrSubCategory as ClassifiedNavigationLinksType)[(i-1)] as ClassifiedNavigationLinksType[number]).subcategory as ClassifiedNavigationLinksType
                            ).length > 0
                          ">
                            <td style="width:900px;">
                              <template v-if="(
                                (categoryAndOrSubCategory as ClassifiedNavigationLinksType)[(i-1)] as ClassifiedNavigationLinksType[number]
                              ).isSubCategoryCollapsed === true
                              ">
                                <table>
                                  <tbody>
                                    <tr style="border:1px solid black;"  
                                      v-for="j in Object.keys(
                                        ((categoryAndOrSubCategory as ClassifiedNavigationLinksType)[(i-1)] as ClassifiedNavigationLinksType[number]).subcategory as ClassifiedNavigationLinksType
                                      ).length" 
                                      :key="(j-1)+'-TABLE-TABLE'"
                                    >
                                      <template v-if="
                                        (
                                          (
                                            ((categoryAndOrSubCategory as ClassifiedNavigationLinksType)[(i-1)] as ClassifiedNavigationLinksType[number]).subcategory as ClassifiedNavigationLinksType
                                          )[(j-1)] as ClassifiedNavigationLinksType[number]
                                        ) !== undefined 
                                        && 
                                        'name' in (
                                          (
                                            ((categoryAndOrSubCategory as ClassifiedNavigationLinksType)[(i-1)] as ClassifiedNavigationLinksType[number]).subcategory as ClassifiedNavigationLinksType
                                          )[(j-1)] as ClassifiedNavigationLinksType[number]
                                        )
                                        &&
                                        (
                                          (
                                            ((categoryAndOrSubCategory as ClassifiedNavigationLinksType)[(i-1)] as ClassifiedNavigationLinksType[number]).subcategory as ClassifiedNavigationLinksType
                                          )[(j-1)] as ClassifiedNavigationLinksType[number]
                                        ).name === ''"
                                      >
                                        <td style="width:900px;padding:15px 0px;">
                                          <div class="w-100 flex-box flex-direction-row justify-content-start align-items-center flex-nowrap p-0 m-0">
                                            <div style="width:300px;padding:10px;background-color:#D3D3D3;">
                                              <EnterSubCategoryYesOrNoDirectLinkIfYesThenURLPath 
                                                :i="i" 
                                                :j="j"
                                              >
                                              </EnterSubCategoryYesOrNoDirectLinkIfYesThenURLPath>
                                            </div>
                                          </div>
                                        </td>
                                      </template>
                                      <template v-else>
                                        <template v-if="
                                          (
                                            (
                                              ((categoryAndOrSubCategory as ClassifiedNavigationLinksType)[(i-1)] as ClassifiedNavigationLinksType[number]).subcategory as ClassifiedNavigationLinksType
                                            )[(j-1)] as ClassifiedNavigationLinksType[number]
                                          ) !== undefined
                                          &&
                                          'subcategory' in (
                                            (
                                              ((categoryAndOrSubCategory as ClassifiedNavigationLinksType)[(i-1)] as ClassifiedNavigationLinksType[number]).subcategory as ClassifiedNavigationLinksType
                                            )[(j-1)] as ClassifiedNavigationLinksType[number]
                                          )
                                          &&
                                          (
                                            (
                                              ((categoryAndOrSubCategory as ClassifiedNavigationLinksType)[(i-1)] as ClassifiedNavigationLinksType[number]).subcategory as ClassifiedNavigationLinksType
                                            )[(j-1)] as ClassifiedNavigationLinksType[number]
                                          ).subcategory !== undefined
                                          &&
                                          Object.keys(
                                            (
                                              (
                                                ((categoryAndOrSubCategory as ClassifiedNavigationLinksType)[(i-1)] as ClassifiedNavigationLinksType[number]).subcategory as ClassifiedNavigationLinksType
                                              )[(j-1)] as ClassifiedNavigationLinksType[number]
                                            ).subcategory as ClassifiedNavigationLinksType
                                          ).length > 0
                                        ">
                                          <td style="width:300px;">
                                            <div class="d-block">
                                              {{ 
                                                (
                                                  (
                                                    ((categoryAndOrSubCategory as ClassifiedNavigationLinksType)[(i-1)] as ClassifiedNavigationLinksType[number]).subcategory as ClassifiedNavigationLinksType
                                                  )[(j-1)] as ClassifiedNavigationLinksType[number]
                                                ).name
                                              }}
                                            </div>
                                            <div class="d-block" style="padding:10px 0;">
                                              <ul class="flex-box flex-direction-row flex-nowrap align-items-center justify-content-start list-style-none m-0 p-0">
                                                <li class="flex-shrink-0 flex-grow-0" style="padding-left:10px;">
                                                  <ExpandCollapseButton 
                                                    :i="i" 
                                                    :j="j" 
                                                  >
                                                  </ExpandCollapseButton>
                                                </li>
                                                <li class="flex-shrink-0 flex-grow-0" style="padding-left:10px;">
                                                  <AddCategoryButton 
                                                    :i="i" 
                                                    :j="j" 
                                                  >
                                                  </AddCategoryButton>
                                                </li>
                                                <li class="flex-grow-0 flex-shrink-0" style="padding-left:10px;">
                                                  <EditButton 
                                                    :i="i" 
                                                    :j="j" 
                                                  >
                                                  </EditButton>
                                                </li>
                                              </ul>
                                            </div>
                                            <template v-if="
                                              (
                                                (
                                                  ((categoryAndOrSubCategory as ClassifiedNavigationLinksType)[(i-1)] as ClassifiedNavigationLinksType[number]).subcategory as ClassifiedNavigationLinksType
                                                )[(j-1)] as ClassifiedNavigationLinksType[number]
                                              ).isClickedEdit
                                            "
                                            >
                                              <div class="d-block" style="padding:15px 0;">
                                                <div style="width:300px;padding:10px;background-color:#D3D3D3;">
                                                  <EditCategoryOrSubCategory 
                                                    :i="i" 
                                                    :j="j" 
                                                  >
                                                  </EditCategoryOrSubCategory>
                                                </div>
                                              </div>
                                            </template>
                                          </td>
                                          <template v-if="
                                            (
                                              (
                                                ((categoryAndOrSubCategory as ClassifiedNavigationLinksType)[(i-1)] as ClassifiedNavigationLinksType[number]).subcategory as ClassifiedNavigationLinksType
                                              )[(j-1)] as ClassifiedNavigationLinksType[number]
                                            ) !== undefined
                                            &&
                                            'subcategory' in (
                                              (
                                                ((categoryAndOrSubCategory as ClassifiedNavigationLinksType)[(i-1)] as ClassifiedNavigationLinksType[number]).subcategory as ClassifiedNavigationLinksType
                                              )[(j-1)] as ClassifiedNavigationLinksType[number]
                                            )
                                            &&
                                            (
                                              (
                                                ((categoryAndOrSubCategory as ClassifiedNavigationLinksType)[(i-1)] as ClassifiedNavigationLinksType[number]).subcategory as ClassifiedNavigationLinksType
                                              )[(j-1)] as ClassifiedNavigationLinksType[number]
                                            ).subcategory !== undefined
                                            &&
                                            Object.keys(
                                              (
                                                (
                                                  ((categoryAndOrSubCategory as ClassifiedNavigationLinksType)[(i-1)] as ClassifiedNavigationLinksType[number]).subcategory as ClassifiedNavigationLinksType
                                                )[(j-1)] as ClassifiedNavigationLinksType[number]
                                              ).subcategory as ClassifiedNavigationLinksType
                                            ).length > 0
                                          ">
                                            <td style="width:600px;">
                                              <template v-if="(
                                                (
                                                  ((categoryAndOrSubCategory as ClassifiedNavigationLinksType)[(i-1)] as ClassifiedNavigationLinksType[number]).subcategory as ClassifiedNavigationLinksType
                                                )[(j-1)] as ClassifiedNavigationLinksType[number]
                                              ).isSubCategoryCollapsed
                                              ">
                                                <table>
                                                  <tbody>
                                                    <tr 
                                                      style="border:1px solid black;"  
                                                      v-for="k in Object.keys(
                                                        (
                                                          (
                                                            (
                                                              categoryAndOrSubCategory as ClassifiedNavigationLinksType
                                                            )[(i-1)] as ClassifiedNavigationLinksType[number]
                                                          ).subcategory as ClassifiedNavigationLinksType
                                                        )[j-1].subcategory as ClassifiedNavigationLinksType
                                                      ).length
                                                      " 
                                                      :key="(k-1)+'-TABLE-TABLE-TABLE-B'"
                                                    >
                                                      <template v-if="
                                                        (
                                                          (
                                                            (
                                                              (
                                                                (categoryAndOrSubCategory as ClassifiedNavigationLinksType)[(i-1)] as ClassifiedNavigationLinksType[number]
                                                              ).subcategory as ClassifiedNavigationLinksType
                                                            )[j-1].subcategory as ClassifiedNavigationLinksType
                                                          )[(k-1)] as ClassifiedNavigationLinksType[number]
                                                        ) !== undefined 
                                                        && 
                                                        'name' in (
                                                          (
                                                            (
                                                              (
                                                                (categoryAndOrSubCategory as ClassifiedNavigationLinksType)[(i-1)] as ClassifiedNavigationLinksType[number]
                                                              ).subcategory as ClassifiedNavigationLinksType
                                                            )[j-1].subcategory as ClassifiedNavigationLinksType
                                                          )[(k-1)] as ClassifiedNavigationLinksType[number]
                                                        )
                                                        &&
                                                        (
                                                          (
                                                            (
                                                              (
                                                                (categoryAndOrSubCategory as ClassifiedNavigationLinksType)[(i-1)] as ClassifiedNavigationLinksType[number]
                                                              ).subcategory as ClassifiedNavigationLinksType
                                                            )[j-1].subcategory as ClassifiedNavigationLinksType
                                                          )[(k-1)] as ClassifiedNavigationLinksType[number]
                                                        ).name === ''"
                                                      >
                                                        <td style="width:600px;">
                                                          <div style="padding:15px 0;" class="w-100 flex-box flex-direction-row justify-content-start align-items-center flex-nowrap m-0">
                                                            <div style="width:300px;padding:10px;background-color:#D3D3D3;">
                                                              <EnterSubCategoryYesOrNoDirectLinkIfYesThenURLPath 
                                                                :i="i" 
                                                                :j="j" 
                                                                :k="k"
                                                              >
                                                              </EnterSubCategoryYesOrNoDirectLinkIfYesThenURLPath>
                                                            </div>
                                                          </div>
                                                        </td>
                                                      </template>
                                                      <template v-else>
                                                        <td style="width:300px;">
                                                          <div class="d-block">
                                                            {{ 
                                                              (
                                                                (
                                                                  (
                                                                    (
                                                                      (categoryAndOrSubCategory as ClassifiedNavigationLinksType)[(i-1)] as ClassifiedNavigationLinksType[number]
                                                                    ).subcategory as ClassifiedNavigationLinksType
                                                                  )[j-1].subcategory as ClassifiedNavigationLinksType
                                                                )[(k-1)] as ClassifiedNavigationLinksType[number]
                                                              ).name
                                                            }}
                                                          </div>
                                                          <div class="d-block" style="padding:10px 0;">
                                                            <ul class="flex-box flex-direction-row flex-nowrap align-items-center justify-content-start list-style-none m-0 p-0">
                                                              <li class="flex-shrink-0 flex-grow-0" style="padding-left:10px;">
                                                                <ExpandCollapseButton 
                                                                  :i="i" 
                                                                  :j="j" 
                                                                  :k="k" 
                                                                ></ExpandCollapseButton>
                                                              </li>
                                                              <li class="flex-shrink-0 flex-grow-0" style="padding-left:10px;">
                                                                <template v-if="(
                                                                  (
                                                                    (
                                                                      (
                                                                        (categoryAndOrSubCategory as ClassifiedNavigationLinksType)[(i-1)] as ClassifiedNavigationLinksType[number]
                                                                      ).subcategory as ClassifiedNavigationLinksType
                                                                    )[j-1].subcategory as ClassifiedNavigationLinksType
                                                                  )[(k-1)] as ClassifiedNavigationLinksType[number]
                                                                ).isdirectlink === false
                                                                "
                                                                >
                                                                  <AddCategoryButton 
                                                                    :i="i" 
                                                                    :j="j" 
                                                                    :k="k" 
                                                                  >
                                                                  </AddCategoryButton>
                                                                </template>
                                                                <template v-else>
                                                                  <AddProductButton 
                                                                    :i="i" 
                                                                    :j="j" 
                                                                    :k="k"
                                                                  >
                                                                  </AddProductButton>
                                                                </template>
                                                              </li>
                                                              <template v-if="(
                                                                  (
                                                                    (
                                                                      (
                                                                        (categoryAndOrSubCategory as ClassifiedNavigationLinksType)[(i-1)] as ClassifiedNavigationLinksType[number]
                                                                      ).subcategory as ClassifiedNavigationLinksType
                                                                    )[j-1].subcategory as ClassifiedNavigationLinksType
                                                                  )[(k-1)] as ClassifiedNavigationLinksType[number]
                                                                ).isdirectlink !== false
                                                                "
                                                              >
                                                                <li class="flex-shrink-0 flex-grow-0" style="padding-left:10px;">
                                                                  <ShowProductsButton 
                                                                    :i="i" 
                                                                    :j="j" 
                                                                    :k="k"
                                                                  >
                                                                  </ShowProductsButton>
                                                                </li>
                                                              </template>
                                                              <li class="flex-shrink-0 flex-grow-0" style="padding-left:10px;">
                                                                <AddImageLinkButton 
                                                                  :i="i" 
                                                                  :j="j" 
                                                                  :k="k"
                                                                ></AddImageLinkButton>
                                                              </li>
                                                              <li class="flex-shrink-0 flex-grow-0" style="padding-left:10px;">
                                                                <ShowImageLinkButton 
                                                                  :i="i" 
                                                                  :j="j" 
                                                                  :k="k"
                                                                ></ShowImageLinkButton>
                                                              </li>
                                                              <li class="flex-shrink-0 flex-grow-0" style="padding-left:10px;">
                                                                <EditButton 
                                                                  :i="i" 
                                                                  :j="j" 
                                                                  :k="k" 
                                                                ></EditButton>
                                                              </li>
                                                            </ul>
                                                          </div>
                                                          <template v-if="
                                                            (
                                                              (
                                                                (
                                                                  (
                                                                    (categoryAndOrSubCategory as ClassifiedNavigationLinksType)[(i-1)] as ClassifiedNavigationLinksType[number]
                                                                  ).subcategory as ClassifiedNavigationLinksType
                                                                )[j-1].subcategory as ClassifiedNavigationLinksType
                                                              )[(k-1)] as ClassifiedNavigationLinksType[number]
                                                            ).isClickedAddCollections
                                                          ">
                                                            <div 
                                                              class="d-block" 
                                                              style="padding:15px 0;"
                                                            >
                                                              <AddProduct
                                                                :i="i" 
                                                                :j="j"
                                                                :k="k"
                                                              >
                                                              </AddProduct>
                                                            </div>
                                                          </template>
                                                          <template v-if="
                                                            (
                                                              (
                                                                (
                                                                  (
                                                                    (categoryAndOrSubCategory as ClassifiedNavigationLinksType)[(i-1)] as ClassifiedNavigationLinksType[number]
                                                                  ).subcategory as ClassifiedNavigationLinksType
                                                                )[j-1].subcategory as ClassifiedNavigationLinksType
                                                              )[(k-1)] as ClassifiedNavigationLinksType[number]
                                                            ).isClickedEdit
                                                          ">
                                                            <div 
                                                              class="d-block" 
                                                              style="padding:15px 0;"
                                                            >
                                                              <div style="width:300px;padding:10px;background-color:#D3D3D3;">
                                                                <EditCategoryOrSubCategory
                                                                  :i="i" 
                                                                  :j="j"
                                                                  :k="k"
                                                                >
                                                                </EditCategoryOrSubCategory>
                                                              </div>
                                                            </div>
                                                          </template>
                                                          <template v-if="
                                                            (
                                                              (
                                                                (
                                                                  (
                                                                    (categoryAndOrSubCategory as ClassifiedNavigationLinksType)[(i-1)] as ClassifiedNavigationLinksType[number]
                                                                  ).subcategory as ClassifiedNavigationLinksType
                                                                )[j-1].subcategory as ClassifiedNavigationLinksType
                                                              )[(k-1)] as ClassifiedNavigationLinksType[number]
                                                            ).isClickedAddImageLink
                                                          ">
                                                            <div 
                                                              class="d-block" 
                                                              style="padding:15px 0;"
                                                            >
                                                              <div style="width:300px;padding:10px;background-color:#D3D3D3;">
                                                                <AddImageLink
                                                                  :i="i" 
                                                                  :j="j"
                                                                  :k="k"
                                                                >
                                                                  <template v-slot:uploadCoverPhoto>
                                                                    <div class="d-block" style="padding-bottom:15px;">
                                                                      <div class="d-block">
                                                                        <button 
                                                                          style="color:#fff;background-color: #663600;" 
                                                                          class="w-100 btn" 
                                                                          @click="localPickFile()" 
                                                                          type="button"
                                                                        >{{
                                                                          (newCategoryOrSubCategory.coverPhoto.name === ''? 'Upload' : 'Change') + ' Cover Photo'
                                                                        }}
                                                                        </button>
                                                                        <input
                                                                          type="file"
                                                                          style="display:none;"
                                                                          :ref="(el) => {
                                                                            newCategoryOrSubCategory.coverPhoto.fileInputRef = el as HTMLInputElement;
                                                                          }"
                                                                          accept="image/*"
                                                                          @change="(e) => localFilePicked(e)" 
                                                                        />
                                                                      </div>
                                                                      <div 
                                                                        class="d-block" 
                                                                        style="padding:1px 0 0 0;"
                                                                      >
                                                                        <div 
                                                                          :ref="(el) => newCategoryOrSubCategory.coverPhoto.srcErrorRef = el as HTMLDivElement"
                                                                          class="flex-box flex-direction-row justify-content-center align-items-center flex-nowrap overflow-auto m-0" 
                                                                          style="height:280px;border:1px solid gray;" 
                                                                          :style="newCategoryOrSubCategory.coverPhoto.error !== ''? 'background-color:#ed5249;' : localErrorCheckerStyle('COVER-PHOTO')" 
                                                                        >
                                                                          <template v-if="
                                                                            newCategoryOrSubCategory.coverPhoto.name === ''
                                                                          ">
                                                                            <div :style="(
                                                                              newCategoryOrSubCategory.coverPhoto.error !== '' 
                                                                              || 
                                                                              newCategoryOrSubCategory.error.checker.includes('COVER-PHOTO')
                                                                            )? 'color:#fff;' : 'color:black;'"
                                                                            >{{
                                                                              'Cover photo ' +
                                                                              (
                                                                                newCategoryOrSubCategory.coverPhoto.error !== ''
                                                                                ? 'dimension must be exactly equal to 530px by 489px.'
                                                                                :
                                                                                (
                                                                                  newCategoryOrSubCategory.error.checker.includes('COVER-PHOTO')
                                                                                  ? 'is missing' : 'dimension must be exactly equal to 530px by 489px.'
                                                                                )
                                                                              )
                                                                            }}
                                                                            </div>
                                                                          </template>
                                                                          <template v-else>
                                                                            <img
                                                                              :ref="(el) => { 
                                                                                newCategoryOrSubCategory.coverPhoto.fileOutputRef = el as HTMLImageElement;
                                                                              }" 
                                                                              :src="newCategoryOrSubCategory.coverPhoto.src"
                                                                            />
                                                                          </template>
                                                                        </div>
                                                                      </div>
                                                                    </div>
                                                                  </template>
                                                                </AddImageLink>
                                                              </div>
                                                            </div>
                                                          </template>
                                                          <Teleport to="body">
                                                            <div 
                                                              v-if="
                                                                (
                                                                  (
                                                                    (
                                                                      (
                                                                        (categoryAndOrSubCategory as ClassifiedNavigationLinksType)[(i-1)] as ClassifiedNavigationLinksType[number]
                                                                      ).subcategory as ClassifiedNavigationLinksType
                                                                    )[j-1].subcategory as ClassifiedNavigationLinksType
                                                                  )[(k-1)] as ClassifiedNavigationLinksType[number]
                                                                ).isClickedShowCollections
                                                                ||
                                                                (
                                                                  (
                                                                    (
                                                                      (
                                                                        (categoryAndOrSubCategory as ClassifiedNavigationLinksType)[(i-1)] as ClassifiedNavigationLinksType[number]
                                                                      ).subcategory as ClassifiedNavigationLinksType
                                                                    )[j-1].subcategory as ClassifiedNavigationLinksType
                                                                  )[(k-1)] as ClassifiedNavigationLinksType[number]
                                                                ).isClickedShowImageLink

                                                              " 
                                                              class="modal-mask"
                                                            >
                                                              <div class="modal-wrapper">
                                                                <div 
                                                                  class="scrollable w-100 h-100 t-0 r-0"
                                                                  style="background-color:transparent;"
                                                                >
                                                                  <div 
                                                                    class="h-auto modal-container w-100"
                                                                  >
                                                                    <template v-if="
                                                                      (
                                                                        (
                                                                          (
                                                                            (
                                                                              (categoryAndOrSubCategory as ClassifiedNavigationLinksType)[(i-1)] as ClassifiedNavigationLinksType[number]
                                                                            ).subcategory as ClassifiedNavigationLinksType
                                                                          )[j-1].subcategory as ClassifiedNavigationLinksType
                                                                        )[(k-1)] as ClassifiedNavigationLinksType[number]
                                                                      ).isClickedShowCollections
                                                                    "
                                                                    >
                                                                      <ShowProduct 
                                                                        :i="i" 
                                                                        :j="j" 
                                                                        :k="k" 
                                                                      ></ShowProduct>
                                                                    </template>
                                                                    <template v-else>
                                                                      <ShowImageLink 
                                                                        :i="i" 
                                                                        :j="j" 
                                                                        :k="k"
                                                                      ></ShowImageLink>
                                                                    </template>
                                                                  </div>
                                                                </div>
                                                              </div>
                                                            </div>
                                                          </Teleport>
                                                        </td>
                                                        <template v-if="
                                                          (
                                                            (
                                                              (
                                                                (
                                                                  (categoryAndOrSubCategory as ClassifiedNavigationLinksType)[(i-1)] as ClassifiedNavigationLinksType[number]
                                                                ).subcategory as ClassifiedNavigationLinksType
                                                              )[j-1].subcategory as ClassifiedNavigationLinksType
                                                            )[(k-1)] as ClassifiedNavigationLinksType[number]
                                                          ) !== undefined
                                                          &&
                                                          'subcategory' in (
                                                            (
                                                              (
                                                                (
                                                                  (categoryAndOrSubCategory as ClassifiedNavigationLinksType)[(i-1)] as ClassifiedNavigationLinksType[number]
                                                                ).subcategory as ClassifiedNavigationLinksType
                                                              )[j-1].subcategory as ClassifiedNavigationLinksType
                                                            )[(k-1)] as ClassifiedNavigationLinksType[number]
                                                          )
                                                          &&
                                                          (
                                                            (
                                                              (
                                                                (
                                                                  (categoryAndOrSubCategory as ClassifiedNavigationLinksType)[(i-1)] as ClassifiedNavigationLinksType[number]
                                                                ).subcategory as ClassifiedNavigationLinksType
                                                              )[j-1].subcategory as ClassifiedNavigationLinksType
                                                            )[(k-1)] as ClassifiedNavigationLinksType[number]
                                                          ).subcategory !== undefined
                                                          &&
                                                          Object.keys(
                                                            (
                                                              (
                                                                (
                                                                  (
                                                                    (categoryAndOrSubCategory as ClassifiedNavigationLinksType)[(i-1)] as ClassifiedNavigationLinksType[number]
                                                                  ).subcategory as ClassifiedNavigationLinksType
                                                                )[j-1].subcategory as ClassifiedNavigationLinksType
                                                              )[(k-1)] as ClassifiedNavigationLinksType[number]
                                                            ).subcategory as ClassifiedNavigationLinksType
                                                          ).length > 0
                                                        ">
                                                          <td style="width:300px;">
                                                            <template v-if="
                                                              (
                                                                (
                                                                  (
                                                                    (
                                                                      (categoryAndOrSubCategory as ClassifiedNavigationLinksType)[(i-1)] as ClassifiedNavigationLinksType[number]
                                                                    ).subcategory as ClassifiedNavigationLinksType
                                                                  )[j-1].subcategory as ClassifiedNavigationLinksType
                                                                )[(k-1)] as ClassifiedNavigationLinksType[number]
                                                              ).isSubCategoryCollapsed === true
                                                            ">
                                                              <table>
                                                                <tbody>
                                                                  <tr 
                                                                    style="border:1px solid black;" 
                                                                    v-for="l in Object.keys((
                                                                      (
                                                                        (
                                                                          (
                                                                            (categoryAndOrSubCategory as ClassifiedNavigationLinksType)[(i-1)] as ClassifiedNavigationLinksType[number]
                                                                          ).subcategory as ClassifiedNavigationLinksType
                                                                        )[j-1].subcategory as ClassifiedNavigationLinksType
                                                                      )[(k-1)] as ClassifiedNavigationLinksType[number]
                                                                    ).subcategory as ClassifiedNavigationLinksType).length" 
                                                                    :key="(l-1)+'-TABLE-TABLE-TABLE-TABLE-B'"
                                                                  >
                                                                    <template v-if="
                                                                      (
                                                                        (
                                                                          (
                                                                            (
                                                                              (
                                                                                (categoryAndOrSubCategory as ClassifiedNavigationLinksType)[(i-1)] as ClassifiedNavigationLinksType[number]
                                                                              ).subcategory as ClassifiedNavigationLinksType
                                                                            )[j-1].subcategory as ClassifiedNavigationLinksType
                                                                          )[(k-1)] as ClassifiedNavigationLinksType[number]
                                                                        ).subcategory as ClassifiedNavigationLinksType
                                                                      )[(l-1)] !== undefined 
                                                                      && 
                                                                      'name' in (
                                                                        (
                                                                          (
                                                                            (
                                                                              (
                                                                                (
                                                                                  (categoryAndOrSubCategory as ClassifiedNavigationLinksType)[(i-1)] as ClassifiedNavigationLinksType[number]
                                                                                ).subcategory as ClassifiedNavigationLinksType
                                                                              )[j-1].subcategory as ClassifiedNavigationLinksType
                                                                            )[(k-1)] as ClassifiedNavigationLinksType[number]
                                                                          ).subcategory as ClassifiedNavigationLinksType
                                                                        )[(l-1)] as ClassifiedNavigationLinksType[number]
                                                                      )
                                                                      &&
                                                                      (
                                                                        (
                                                                          (
                                                                            (
                                                                              (
                                                                                (
                                                                                  (categoryAndOrSubCategory as ClassifiedNavigationLinksType)[(i-1)] as ClassifiedNavigationLinksType[number]
                                                                                ).subcategory as ClassifiedNavigationLinksType
                                                                              )[j-1].subcategory as ClassifiedNavigationLinksType
                                                                            )[(k-1)] as ClassifiedNavigationLinksType[number]
                                                                          ).subcategory as ClassifiedNavigationLinksType
                                                                        )[(l-1)] as ClassifiedNavigationLinksType[number]
                                                                      ).name === ''"
                                                                    >
                                                                      <td style="width:300px;">
                                                                        <div style="padding:15px 0;" class="w-100 flex-box flex-direction-row justify-content-start align-items-center flex-nowrap m-0">
                                                                          <div style="width:300px;padding:10px;background-color:#D3D3D3;">
                                                                            <EnterSubCategoryYesOrNoDirectLinkIfYesThenURLPath 
                                                                              :i="i" 
                                                                              :j="j" 
                                                                              :k="k" 
                                                                              :l="l"
                                                                            >
                                                                            </EnterSubCategoryYesOrNoDirectLinkIfYesThenURLPath>
                                                                          </div>
                                                                        </div>
                                                                      </td>
                                                                    </template>
                                                                    <template v-else>
                                                                      <td style="width:300px;">
                                                                        <div class="d-block">
                                                                        {{ 
                                                                          (
                                                                            (
                                                                              (
                                                                                (
                                                                                  (
                                                                                    (
                                                                                      (categoryAndOrSubCategory as ClassifiedNavigationLinksType)[(i-1)] as ClassifiedNavigationLinksType[number]
                                                                                    ).subcategory as ClassifiedNavigationLinksType
                                                                                  )[j-1].subcategory as ClassifiedNavigationLinksType
                                                                                )[(k-1)] as ClassifiedNavigationLinksType[number]
                                                                              ).subcategory as ClassifiedNavigationLinksType
                                                                            )[(l-1)] as ClassifiedNavigationLinksType[number]
                                                                          ).name
                                                                        }}
                                                                        </div>
                                                                        <div class="d-block" style="padding:10px 0;">
                                                                          <ul class="flex-box flex-direction-row flex-nowrap align-items-center justify-content-start list-style-none m-0 p-0">
                                                                            <li class="flex-shrink-0 flex-grow-0" style="padding-left:10px;">
                                                                              <AddProductButton 
                                                                                :i="i" 
                                                                                :j="j" 
                                                                                :k="k" 
                                                                                :l="l"
                                                                              >
                                                                              </AddProductButton>
                                                                            </li>
                                                                            <li class="flex-shrink-0 flex-grow-0" style="padding-left:10px;">
                                                                              <ShowProductsButton 
                                                                                :i="i" 
                                                                                :j="j"
                                                                                :k="k" 
                                                                                :l="l"
                                                                              >
                                                                              </ShowProductsButton>
                                                                            </li>
                                                                            <li class="flex-shrink-0 flex-grow-0" style="padding-left:10px;">
                                                                              <EditButton 
                                                                                :i="i" 
                                                                                :j="j"
                                                                                :k="k" 
                                                                                :l="l"
                                                                              ></EditButton>
                                                                            </li>
                                                                          </ul>
                                                                        </div>
                                                                        <template v-if="
                                                                          (
                                                                            (
                                                                              (
                                                                                (
                                                                                  (
                                                                                    (
                                                                                      (categoryAndOrSubCategory as ClassifiedNavigationLinksType)[(i-1)] as ClassifiedNavigationLinksType[number]
                                                                                    ).subcategory as ClassifiedNavigationLinksType
                                                                                  )[j-1].subcategory as ClassifiedNavigationLinksType
                                                                                )[(k-1)] as ClassifiedNavigationLinksType[number]
                                                                              ).subcategory as ClassifiedNavigationLinksType
                                                                            )[(l-1)] as ClassifiedNavigationLinksType[number]
                                                                          ).isClickedAddCollections
                                                                        ">
                                                                          <div 
                                                                            class="d-block" 
                                                                            style="padding:15px 0;" 
                                                                          >
                                                                            <AddProduct 
                                                                              :i="i" 
                                                                              :j="j"
                                                                              :k="k" 
                                                                              :l="l"
                                                                            >
                                                                            </AddProduct>
                                                                          </div>
                                                                        </template>
                                                                        <template v-if="
                                                                          (
                                                                            (
                                                                              (
                                                                                (
                                                                                  (
                                                                                    (
                                                                                      (categoryAndOrSubCategory as ClassifiedNavigationLinksType)[(i-1)] as ClassifiedNavigationLinksType[number]
                                                                                    ).subcategory as ClassifiedNavigationLinksType
                                                                                  )[j-1].subcategory as ClassifiedNavigationLinksType
                                                                                )[(k-1)] as ClassifiedNavigationLinksType[number]
                                                                              ).subcategory as ClassifiedNavigationLinksType
                                                                            )[(l-1)] as ClassifiedNavigationLinksType[number]
                                                                          ).isClickedEdit
                                                                        ">
                                                                          <div 
                                                                            class="d-block" 
                                                                            style="padding:15px 0;" 
                                                                          >
                                                                            <div style="width:300px;padding:10px;background-color:#D3D3D3;">
                                                                              <EditCategoryOrSubCategory 
                                                                                :i="i" 
                                                                                :j="j"
                                                                                :k="k" 
                                                                                :l="l"
                                                                              >
                                                                              </EditCategoryOrSubCategory>
                                                                            </div>
                                                                          </div>
                                                                        </template>
                                                                        <Teleport to="body">
                                                                          <div 
                                                                            v-if="
                                                                              (
                                                                                (
                                                                                  (
                                                                                    (
                                                                                      (
                                                                                        (
                                                                                          (categoryAndOrSubCategory as ClassifiedNavigationLinksType)[(i-1)] as ClassifiedNavigationLinksType[number]
                                                                                        ).subcategory as ClassifiedNavigationLinksType
                                                                                      )[j-1].subcategory as ClassifiedNavigationLinksType
                                                                                    )[(k-1)] as ClassifiedNavigationLinksType[number]
                                                                                  ).subcategory as ClassifiedNavigationLinksType
                                                                                )[(l-1)] as ClassifiedNavigationLinksType[number]
                                                                              ).isClickedShowCollections
                                                                            " 
                                                                            class="modal-mask"
                                                                          >
                                                                            <div class="modal-wrapper">
                                                                              <div 
                                                                                class="scrollable w-100 h-100 t-0 r-0"
                                                                                style="background-color:transparent;"
                                                                              >
                                                                                <div 
                                                                                  class="h-auto modal-container w-100"
                                                                                >
                                                                                  <ShowProduct 
                                                                                    :i="i" 
                                                                                    :j="j"
                                                                                    :k="k" 
                                                                                    :l="l" 
                                                                                  ></ShowProduct>
                                                                                </div>
                                                                              </div>
                                                                            </div>
                                                                          </div>
                                                                        </Teleport>
                                                                      </td>
                                                                    </template>
                                                                  </tr>
                                                                </tbody>
                                                              </table>
                                                            </template>
                                                          </td>
                                                        </template>
                                                        <template v-else>
                                                          <td style="width:300px;"></td>
                                                        </template>
                                                      </template>
                                                    </tr>
                                                  </tbody>
                                                </table>
                                              </template>
                                            </td>
                                          </template>
                                          <template v-else>
                                            <td style="width:600px;"></td>
                                          </template>
                                        </template>
                                        <template v-else>
                                          <td style="width:300px;">
                                            <div class="d-block">
                                              {{ 
                                                (
                                                  (
                                                    ((categoryAndOrSubCategory as ClassifiedNavigationLinksType)[(i-1)] as ClassifiedNavigationLinksType[number]).subcategory as ClassifiedNavigationLinksType
                                                  )[(j-1)] as ClassifiedNavigationLinksType[number]
                                                ).name
                                              }}
                                            </div>
                                            <div class="d-block" style="padding:10px 0;">
                                              <ul class="flex-box flex-direction-row flex-nowrap align-items-center justify-content-start list-style-none m-0 p-0">
                                                <li class="flex-shrink-0 flex-grow-0" style="padding-left:10px;">
                                                  <template v-if="(
                                                    (
                                                      ((categoryAndOrSubCategory as ClassifiedNavigationLinksType)[(i-1)] as ClassifiedNavigationLinksType[number]).subcategory as ClassifiedNavigationLinksType
                                                    )[(j-1)] as ClassifiedNavigationLinksType[number]
                                                  ).isdirectlink === false
                                                  ">
                                                    <AddCategoryButton 
                                                      :i="i" 
                                                      :j="j" 
                                                    >
                                                    </AddCategoryButton>
                                                  </template>
                                                  <template v-else>
                                                    <AddProductButton 
                                                      :i="i" 
                                                      :j="j" 
                                                    >
                                                    </AddProductButton>
                                                  </template>
                                                </li>
                                                <template v-if="
                                                  (
                                                    (
                                                      ((categoryAndOrSubCategory as ClassifiedNavigationLinksType)[(i-1)] as ClassifiedNavigationLinksType[number]).subcategory as ClassifiedNavigationLinksType
                                                    )[(j-1)] as ClassifiedNavigationLinksType[number]
                                                  ).isdirectlink !== false
                                                ">
                                                  <li class="flex-shrink-0 flex-grow-0" style="padding-left:10px;">
                                                    <ShowProductsButton 
                                                      :i="i" 
                                                      :j="j"
                                                    >
                                                    </ShowProductsButton>
                                                  </li>
                                                </template>
                                                <li class="flex-shrink-0 flex-grow-0" style="padding-left:10px;">
                                                  <EditButton 
                                                    :i="i" 
                                                    :j="j" 
                                                  ></EditButton>
                                                </li>
                                              </ul>
                                            </div>
                                            <template v-if="
                                              (
                                                (
                                                  ((categoryAndOrSubCategory as ClassifiedNavigationLinksType)[(i-1)] as ClassifiedNavigationLinksType[number]).subcategory as ClassifiedNavigationLinksType
                                                )[(j-1)] as ClassifiedNavigationLinksType[number]
                                              ).isClickedAddCollections
                                            ">
                                              <div
                                                class="d-block" 
                                                style="padding:15px 0;"
                                              >
                                                <AddProduct
                                                  :i="i" 
                                                  :j="j" 
                                                >
                                                </AddProduct>
                                              </div>
                                            </template>
                                            <template v-if="
                                              (
                                                (
                                                  ((categoryAndOrSubCategory as ClassifiedNavigationLinksType)[(i-1)] as ClassifiedNavigationLinksType[number]).subcategory as ClassifiedNavigationLinksType
                                                )[(j-1)] as ClassifiedNavigationLinksType[number]
                                              ).isClickedEdit
                                            ">
                                              <div
                                                class="d-block" 
                                                style="padding:15px 0;"
                                              >
                                                <div style="width:300px;padding:10px;background-color:#D3D3D3;">
                                                  <EditCategoryOrSubCategory
                                                    :i="i" 
                                                    :j="j" 
                                                  >
                                                  </EditCategoryOrSubCategory>
                                                </div>
                                              </div>
                                            </template>
                                            <Teleport to="body">
                                              <div 
                                                v-if="
                                                  (
                                                    (
                                                      ((categoryAndOrSubCategory as ClassifiedNavigationLinksType)[(i-1)] as ClassifiedNavigationLinksType[number]).subcategory as ClassifiedNavigationLinksType
                                                    )[(j-1)] as ClassifiedNavigationLinksType[number]
                                                  ).isClickedShowCollections
                                                " 
                                                class="modal-mask"
                                              >
                                                <div class="modal-wrapper">
                                                  <div 
                                                    class="scrollable w-100 h-100 t-0 r-0"
                                                    style="background-color:transparent;"
                                                  >
                                                    <div 
                                                      class="h-auto modal-container w-100"
                                                    >
                                                      <ShowProduct 
                                                        :i="i" 
                                                        :j="j" 
                                                      ></ShowProduct>
                                                    </div>
                                                  </div>
                                                </div>
                                              </div>
                                            </Teleport>
                                          </td>
                                          <td style="width:600px;"></td>
                                        </template>
                                      </template>
                                    </tr>
                                  </tbody>
                                </table>
                              </template>
                            </td>
                          </template>
                          <template v-else>
                            <td style="width:900px;">
                            </td>
                          </template>
                        </tr>
                      </tbody>
                    </table>
                  </td>
                </template>
                <template v-else>
                  <td style="width:1200px;">
                    <div class="d-block">
                      {{ 
                        ((categoryAndOrSubCategory as ClassifiedNavigationLinksType)[(i-1)] as ClassifiedNavigationLinksType[number]).name
                      }}
                    </div>
                    <div class="d-block" style="padding:10px 0px;">
                      <ul class="flex-box flex-direction-row flex-nowrap align-items-center justify-content-start list-style-none m-0 p-0">
                        <li class="flex-shrink-0 flex-grow-0" style="padding-left:10px;">
                          <template v-if="(
                            (
                              categoryAndOrSubCategory as ClassifiedNavigationLinksType
                            )[(i-1)] as ClassifiedNavigationLinksType[number]
                          ).isdirectlink === false
                          ">
                            <div class="flex-box flex-direction-row m-0 justify-content-start align-items-center">
                              <AddCategoryButton 
                                :i="i" 
                              >
                              </AddCategoryButton>
                            </div>
                          </template>
                          <template v-else>
                            <div class="flex-box flex-direction-row m-0 justify-content-start align-items-center">
                              <AddProductButton 
                                :i="i" 
                              >
                              </AddProductButton>
                            </div>
                          </template>
                        </li>
                        <template v-if="(
                            (
                              categoryAndOrSubCategory as ClassifiedNavigationLinksType
                            )[(i-1)] as ClassifiedNavigationLinksType[number]
                          ).isdirectlink !== false
                        ">
                          <li class="flex-shrink-0 flex-grow-0" style="padding-left:10px;">
                            <div class="flex-box flex-direction-row m-0 justify-content-start align-items-center">
                              <ShowProductsButton 
                                :i="i"
                              >
                              </ShowProductsButton>
                            </div>
                          </li>
                        </template>
                        <li class="flex-shrink-0 flex-grow-0" style="padding-left:10px;">
                          <div class="flex-box flex-direction-row m-0 justify-content-start align-items-center">
                            <EditButton 
                              :i="i"
                            >
                            </EditButton>
                          </div>
                        </li>
                      </ul>
                    </div>
                    <template v-if="
                      (
                        (
                          categoryAndOrSubCategory as ClassifiedNavigationLinksType
                        )[(i-1)] as ClassifiedNavigationLinksType[number]
                      ).isClickedAddCollections
                    "
                    >
                      <div 
                        class="d-block" 
                        style="padding:15px 0;" 
                      >
                        <AddProduct 
                          :i="i"
                        ></AddProduct>  
                      </div>
                    </template>
                    <template v-if="
                      (
                        (
                          categoryAndOrSubCategory as ClassifiedNavigationLinksType
                        )[(i-1)] as ClassifiedNavigationLinksType[number]
                      ).isClickedEdit
                    "
                    >
                      <div 
                        class="d-block" 
                        style="padding:15px 0;" 
                      >
                        <div style="width:300px;padding:10px;background-color:#D3D3D3;">
                          <EditCategoryOrSubCategory 
                            :i="i"
                          >
                            <template v-slot:uploadCoverPhoto>
                              <div class="d-block" style="padding-bottom:15px;">
                                <div class="d-block">
                                  <button 
                                    style="color:#fff;background-color: #663600;" 
                                    class="w-100 btn" 
                                    @click="localPickFile()" 
                                    type="button"
                                  >{{
                                    (newCategoryOrSubCategory.coverPhoto.name === ''? 'Upload' : 'Change') + ' Cover Photo'
                                  }}
                                  </button>
                                  <input
                                    type="file"
                                    style="display:none;"
                                    :ref="(el) => {
                                      newCategoryOrSubCategory.coverPhoto.fileInputRef = el as HTMLInputElement;
                                    }"
                                    accept="image/*"
                                    @change="(e) => localFilePicked(e)" 
                                  />
                                </div>
                                <div 
                                  class="d-block" 
                                  style="padding:1px 0 0 0;"
                                >
                                  <div 
                                    :ref="(el) => newCategoryOrSubCategory.coverPhoto.srcErrorRef = el as HTMLDivElement"
                                    class="flex-box flex-direction-row justify-content-center align-items-center flex-nowrap overflow-auto m-0" 
                                    style="height:280px;border:1px solid gray;" 
                                    :style="newCategoryOrSubCategory.coverPhoto.error !== ''? 'background-color:#ed5249;' : localErrorCheckerStyle('COVER-PHOTO')" 
                                  >
                                    <template v-if="
                                      newCategoryOrSubCategory.coverPhoto.name === ''
                                    ">
                                      <div :style="(
                                        newCategoryOrSubCategory.coverPhoto.error !== '' 
                                        || 
                                        newCategoryOrSubCategory.error.checker.includes('COVER-PHOTO')
                                      )? 'color:#fff;' : 'color:black;'"
                                      >{{
                                        'Cover photo ' +
                                        (
                                          newCategoryOrSubCategory.coverPhoto.error !== ''
                                          ? 'dimension must be exactly equal to 530px by 489px.'
                                          :
                                          (
                                            newCategoryOrSubCategory.error.checker.includes('COVER-PHOTO')
                                            ? 'is missing' : 'dimension must be exactly equal to 530px by 489px.'
                                          )
                                        )
                                      }}
                                      </div>
                                    </template>
                                    <template v-else>
                                      <img
                                        :ref="(el) => { 
                                          newCategoryOrSubCategory.coverPhoto.fileOutputRef = el as HTMLImageElement;
                                        }" 
                                        :src="newCategoryOrSubCategory.coverPhoto.src"
                                      />
                                    </template>
                                  </div>
                                </div>
                              </div>
                            </template>
                          </EditCategoryOrSubCategory>  
                        </div>
                      </div>
                    </template>
                    <Teleport to="body">
                      <div 
                        v-if="
                          (
                            (
                              categoryAndOrSubCategory as ClassifiedNavigationLinksType
                            )[(i-1)] as ClassifiedNavigationLinksType[number]
                          ).isClickedShowCollections
                        " 
                        class="modal-mask"
                      >
                        <div class="modal-wrapper">
                          <div 
                            class="scrollable w-100 h-100 t-0 r-0"
                            style="background-color:transparent;"
                          >
                            <div 
                              class="h-auto modal-container w-100"
                            >
                              <ShowProduct 
                                :i="i" 
                              ></ShowProduct>
                            </div>
                          </div>
                        </div>
                      </div>
                    </Teleport>
                  </td>
                </template>
              </template>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    <div 
      class="h-100 position-fixed r-0 t-0" 
      style="z-index:320;width:45px;background-color:#fff;"
    >
      <div class="flex-box flex-direction-row flex-nowrap justify-content-center align-items-center p-0 m-0 w-100 h-100">
        <a 
          class="underline-none d-block cursor-pointer" 
          @mouseover="rightArrowHover = true" 
          @mouseleave="rightArrowHover = false" 
          style="border-radius:50%;" 
          :style="rightArrowHover?'background-color:#663600' : ''"
        >
          <img 
            :src="'http://localhost:5174/src/assets/icons/'+(rightArrowHover? 'right-arrow-hover.svg' : 'right-arrow.svg')" 
            style="width:40px;height:40px;" 
          />
        </a>
      </div>
    </div>
  </div>
</template>

<style scoped>
.modal-mask {
  position: fixed;
  background-color: white;
  z-index: 999;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  margin: 0px !important;
  background-color: rgba(0, 0, 0, 0.5);
  display: table;
}
.modal-wrapper {
  display: table-cell;
  vertical-align: middle;
}
.modal-container {
  background-color: #f8f8f8;
  border-radius: 2px;
  font-family: Helvetica, Arial, sans-serif;
}
.scrollable {
  transition: all 0.3s ease;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
  position: absolute;
  overflow-y: auto !important;
  overflow-x: hidden !important;
}
</style>