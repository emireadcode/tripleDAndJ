<script lang="ts" setup>
import type { ClassifiedNavigationLinksType, ImgLinkType } from "./types";
import { inject, onBeforeMount, ref, watch, computed, type ShallowRef, triggerRef, } from 'vue';

type LinkImgType = {
  file: string;
  link: string;
};

type NavigationLinkParametersType = {
  moreSubCategoriesStartFromIndex: number | undefined;
  currentScrollHeight: number | undefined;
  currentSubCategoryIndex: number | undefined;
  isSubCategoryOrMoreSubCategoryWindowClosed: Boolean;
  name: string; 
  type: 'CATEGORY' | 'SEARCH' | 'AD-CAMPAIGN-LINK' | 'FOOTER-LINK';
  index: number | undefined;
  subcategory?: Boolean | undefined;
  showCollections: Boolean;
  path: string;
  typeClicked: 'MORE-SUBCATEGORY-CLICKED' | 'SUBCATEGORY-CLICKED' | '';
};

let 
  subcategory = ref<ClassifiedNavigationLinksType | undefined>(),
  moreSubCategoryLoopIndex = ref<number[]>([]),
  clickedIndex = ref<number>(0),
  navigationLinkParameters = inject('NAVIGATION-LINK-PARAMETERS') as ShallowRef<NavigationLinkParametersType>
;

const 
  props = defineProps<{
    headerHeight: number | undefined;
  }>(),
  compPaddingStyle = computed(() => {
    return 'padding:'+(props.headerHeight as number)+'px 20px 0 20px;';
  }),
  links = inject('LINKS') as ClassifiedNavigationLinksType
;

function openLink() {
  navigationLinkParameters.value.isSubCategoryOrMoreSubCategoryWindowClosed = true;
  triggerNavigationLinkParameters();
}

function triggerNavigationLinkParameters() {
  triggerRef(navigationLinkParameters);
}

function getMoreSubCategoryLoopIndex(a: number, b: number) {
  moreSubCategoryLoopIndex.value = [];
  for(let i=a; i<b; i++) {
    moreSubCategoryLoopIndex.value.push(i);
  }
}

function getLoop() {
  if(
    navigationLinkParameters.value.typeClicked === 'MORE-SUBCATEGORY-CLICKED'
    ||
    navigationLinkParameters.value.typeClicked === 'SUBCATEGORY-CLICKED'
  ) {
    if(navigationLinkParameters.value.typeClicked === 'MORE-SUBCATEGORY-CLICKED') {
      subcategory.value = (
        links[
          navigationLinkParameters.value.index as number
        ]?.subcategory as ClassifiedNavigationLinksType
      );
      getMoreSubCategoryLoopIndex(
        (navigationLinkParameters.value.moreSubCategoriesStartFromIndex as number), 
        Object.keys((subcategory.value as ClassifiedNavigationLinksType)).length
      );
    }
    else {
      subcategory.value = (
        (
          links[
            navigationLinkParameters.value.index as number
          ]?.subcategory as ClassifiedNavigationLinksType
        )[
          navigationLinkParameters.value.currentSubCategoryIndex as number
        ]
      );
    }
  }
}

function hasSubCategory() {
  try {
    if('subcategory' in (
        (subcategory.value as ClassifiedNavigationLinksType[number]).subcategory as ClassifiedNavigationLinksType
      )[clickedIndex.value]
    ) {
      return true;
    }
    else {
      return false;
    }
  }
  catch(e) {
    if('subcategory' in (
        subcategory.value as ClassifiedNavigationLinksType
      )
    ) {
      return true;
    }
    else {
      return false;
    }
  }
}

watch(
  () => [
    navigationLinkParameters.value.index, 
    navigationLinkParameters.value.currentSubCategoryIndex, 
    navigationLinkParameters.value.moreSubCategoriesStartFromIndex
  ],
  () => {
    clickedIndex.value = 0;
    getLoop();
  }
);

onBeforeMount(() => {
  getLoop();
});

</script>

<template>
  <template v-if="navigationLinkParameters.typeClicked === 'SUBCATEGORY-CLICKED'">
    <template v-if="'subcategory' in (
        subcategory as ClassifiedNavigationLinksType[number]
      )
    ">
      <div 
        class="w-100 h-100 position-relative" 
        :style="compPaddingStyle"
      >
        <div class="position-absolute d-block l-0 w-100 m-0" style="padding:5px 20px;height:40px">
          <div class="flex-box flex-direction-row justify-content-end position-relative align-items-center flex-nowrap h-100 w-100 m-0 p-0" style="background: url('http://localhost:5173/src/assets/images/leather-brown.jpeg') no-repeat center center fixed;-webkit-background-size: cover;-moz-background-size: cover;-o-background-size: cover;background-size: cover;">
            <div class="flex-fill align-self-stretch h-100 text-left m-0 p-0">
              <div style="padding: 0 10px 0 20px;" class="flex-box flex-direction-row justify-content-start align-items-center flex-nowrap w-100 h-100 m-0">
                <div style="color:#fff;">
                  {{ 
                    (links as ClassifiedNavigationLinksType)[navigationLinkParameters.index as number].name
                  }}
                </div>
                <div class="align-self-stretch h-100" style="padding:0 10px;">
                  <img src="http://localhost:5173/src/assets/logos/right-arrow.svg" class="h-100 align-middle" />
                </div>
                <div style="color:#fff;">
                  {{ 
                    (subcategory as ClassifiedNavigationLinksType[
                      number
                    ]).name
                  }}
                </div>
                <div class="align-self-stretch h-100" style="padding:0 10px;">
                  <img src="http://localhost:5173/src/assets/logos/right-arrow.svg" class="h-100 align-middle" />
                </div>
                <template v-if="hasSubCategory()">
                  <div style="color:#fff;">
                    <div class="flex-box flex-direction-row flex-nowrap m-0 p-0 align-items-center">
                      <div class="flex-shrink-0 flex-grow-0" style="padding-right:5px;">
                        {{ 
                          (
                            (
                              subcategory as ClassifiedNavigationLinksType[number]
                            ).subcategory as ClassifiedNavigationLinksType
                          )[clickedIndex].name
                        }}
                      </div>
                      <template v-if="(
                        (subcategory as ClassifiedNavigationLinksType[
                          number
                        ]).subcategory as ClassifiedNavigationLinksType
                      )[clickedIndex].extraname"
                      >
                        <div class="flex-shrink-0 flex-grow-0" style="padding:5px 2px;">
                          <div 
                            class="h-100 w-100" 
                            style="font-size:11px;padding:3px 5px;border-radius:5px;border:1px solid #fff;color:#fff;"
                          >
                            {{ 
                              (
                                (subcategory as ClassifiedNavigationLinksType[
                                  number
                                ]).subcategory as ClassifiedNavigationLinksType
                              )[clickedIndex].extraname
                            }}
                          </div>
                        </div>
                      </template>
                    </div>
                  </div>
                  <div class="align-self-stretch h-100" style="padding:0 10px;">
                    <img src="http://localhost:5173/src/assets/logos/right-arrow.svg" class="h-100 align-middle" />
                  </div>
                </template>
              </div>
            </div>
            <div class="flex-shrink-0 flex-grow-0 position-absolute text-right">
              <slot name="closed"></slot>
            </div>
          </div>
        </div>
        <div class="w-100 h-100" style="padding:40px 0px 10px 0px;">
          <div class="flex-box flex-direction-row h-100 w-100 m-0 flex-nowrap justify-content-center align-items-center">
            <div class="align-self-stretch h-100 overflow-x-hidden overflow-y-auto" style="padding:30px 2px 10px 2px;width:30%;border-right:2px solid #663600;">
              <ul class="list-style-none flex-box flex-direction-row m-0 p-0 flex-wrap justify-content-start align-items-center w-100">
                <li
                  v-for="i in Object.keys(((subcategory as ClassifiedNavigationLinksType[number]).subcategory as ClassifiedNavigationLinksType)).length" 
                  :key="(i-1) + 'SUB-SUB-CATEGORY'"
                  class="w-100 m-0"
                  style="padding: 5px 0px;"
                >
                  <template v-if="
                    (
                      (subcategory as ClassifiedNavigationLinksType[
                        number
                      ]).subcategory as ClassifiedNavigationLinksType
                    )[i-1] !== undefined
                    &&
                    'subcategory' in (
                      (subcategory as ClassifiedNavigationLinksType[
                        number
                      ]).subcategory as ClassifiedNavigationLinksType
                    )[i-1]
                    &&
                    (
                      (subcategory as ClassifiedNavigationLinksType[
                        number
                      ]).subcategory as ClassifiedNavigationLinksType
                    )[i-1].subcategory !== undefined
                    &&
                    Object.keys(
                      (
                        (subcategory as ClassifiedNavigationLinksType[
                          number
                        ]).subcategory as ClassifiedNavigationLinksType
                      )[i-1].subcategory as ClassifiedNavigationLinksType
                    ).length > 0
                  ">
                    <a 
                      @mouseover="(
                              (subcategory as ClassifiedNavigationLinksType[
                                number
                              ]).subcategory as ClassifiedNavigationLinksType
                            )[i-1].isHovered = true"
                      @mouseleave="(
                              (subcategory as ClassifiedNavigationLinksType[
                                number
                              ]).subcategory as ClassifiedNavigationLinksType
                            )[i-1].isHovered = false"
                      @click="() => {
                        clickedIndex = (i-1);
                        (
                          (subcategory as ClassifiedNavigationLinksType[
                            number
                          ]).subcategory as ClassifiedNavigationLinksType
                        )[i-1].isHovered = true;
                      }" 
                      class="d-block underline-none cursor-pointer sub text-break text-wrap"
                      style="padding:10px 2px;"
                      :style="(clickedIndex===(i-1))?'background-color: #663600;color:#fff;':''"
                    >
                      <div class="flex-box flex-direction-row flex-wrap justify-centent-start align-items-center w-100 m-0 p-0">
                        <div class="flex-grow-0 flex-shrink-0 align-self-stretch" style="padding-right: 5px;">
                          {{  
                            (
                              (subcategory as ClassifiedNavigationLinksType[
                                number
                              ]).subcategory as ClassifiedNavigationLinksType
                            )[i-1].name.toUpperCase()
                          }}
                        </div>
                        <template v-if="
                          (
                            (subcategory as ClassifiedNavigationLinksType[
                              number
                            ]).subcategory as ClassifiedNavigationLinksType
                          )[i-1].extraname"
                        >
                          <div class="flex-shrink-0 flex-grow-0 align-self-stretch">
                            <div 
                              style="padding: 2px;border-radius:5px;font-size:11px;" 
                              :style="(
                                (subcategory as ClassifiedNavigationLinksType[
                                  number
                                ]).subcategory as ClassifiedNavigationLinksType
                              )[i-1].isHovered || clickedIndex === (i-1)? 'border:1px solid #fff;' : 'border:1px solid black;'"
                              class="align-middle"
                            >
                              {{ 
                                (
                                  (subcategory as ClassifiedNavigationLinksType[
                                    number
                                  ]).subcategory as ClassifiedNavigationLinksType
                                )[i-1].extraname
                              }}
                            </div>
                          </div>
                        </template>
                      </div>
                    </a>
                  </template>
                  <template v-else>
                    <template v-if="
                      (
                        (subcategory as ClassifiedNavigationLinksType[
                          number
                        ]).subcategory as ClassifiedNavigationLinksType
                      )[i-1] !== undefined
                      &&
                      !('url' in (
                          (subcategory as ClassifiedNavigationLinksType[
                            number
                          ]).subcategory as ClassifiedNavigationLinksType
                        )[i-1]
                      )
                      &&
                      'img' in (
                        (subcategory as ClassifiedNavigationLinksType[
                          number
                        ]).subcategory as ClassifiedNavigationLinksType
                      )[i-1]
                      &&
                      Array.isArray((
                        (subcategory as ClassifiedNavigationLinksType[
                          number
                        ]).subcategory as ClassifiedNavigationLinksType
                      )[i-1].img)
                      &&
                      Object.keys((
                        (subcategory as ClassifiedNavigationLinksType[
                          number
                        ]).subcategory as ClassifiedNavigationLinksType
                      )[i-1].img as ImgLinkType).length > 0
                    ">
                      <a 
                        @mouseover="(
                                (subcategory as ClassifiedNavigationLinksType[
                                  number
                                ]).subcategory as ClassifiedNavigationLinksType
                              )[i-1].isHovered = true"
                        @mouseleave="(
                                (subcategory as ClassifiedNavigationLinksType[
                                  number
                                ]).subcategory as ClassifiedNavigationLinksType
                              )[i-1].isHovered = false"
                        @click="() => {
                          clickedIndex = (i-1);
                          (
                            (subcategory as ClassifiedNavigationLinksType[
                              number
                            ]).subcategory as ClassifiedNavigationLinksType
                          )[i-1].isHovered = true;
                        }" 
                        class="d-block underline-none cursor-pointer sub text-break text-wrap"
                        style="padding:10px 2px;"
                        :style="(clickedIndex===(i-1))?'background-color: #663600;color:#fff;':''"
                      >
                        <div class="flex-box flex-direction-row flex-wrap justify-centent-start align-items-center w-100 m-0 p-0">
                          <div class="flex-grow-0 flex-shrink-0 align-self-stretch" style="padding-right: 5px;">
                            {{  
                              (
                                (subcategory as ClassifiedNavigationLinksType[
                                  number
                                ]).subcategory as ClassifiedNavigationLinksType
                              )[i-1].name.toUpperCase()
                            }}
                          </div>
                          <template v-if="
                            (
                              (subcategory as ClassifiedNavigationLinksType[
                                number
                              ]).subcategory as ClassifiedNavigationLinksType
                            )[i-1].extraname"
                          >
                            <div class="flex-shrink-0 flex-grow-0 align-self-stretch">
                              <div 
                                style="padding: 2px;border-radius:5px;font-size:11px;" 
                                :style="(
                                  (subcategory as ClassifiedNavigationLinksType[
                                    number
                                  ]).subcategory as ClassifiedNavigationLinksType
                                )[i-1].isHovered || clickedIndex === (i-1)? 'border:1px solid #fff;' : 'border:1px solid black;'"
                                class="align-middle"
                              >
                                {{ 
                                  (
                                    (subcategory as ClassifiedNavigationLinksType[
                                      number
                                    ]).subcategory as ClassifiedNavigationLinksType
                                  )[i-1].extraname
                                }}
                              </div>
                            </div>
                          </template>
                        </div>
                      </a>
                    </template>
                    <template v-else>
                      <template v-if="navigationLinkParameters.path === (
                        (
                          (subcategory as ClassifiedNavigationLinksType[
                            number
                          ]).subcategory as ClassifiedNavigationLinksType
                        )[i-1].url as string).toLowerCase()
                      ">
                        <a 
                          @mouseover="(
                                  (subcategory as ClassifiedNavigationLinksType[
                                    number
                                  ]).subcategory as ClassifiedNavigationLinksType
                                )[i-1].isHovered = true"
                          @mouseleave="(
                                  (subcategory as ClassifiedNavigationLinksType[
                                    number
                                  ]).subcategory as ClassifiedNavigationLinksType
                                )[i-1].isHovered = false"
                          @click="() => {
                            openLink(); (
                                  (subcategory as ClassifiedNavigationLinksType[
                                    number
                                  ]).subcategory as ClassifiedNavigationLinksType
                                )[i-1].isHovered = false;
                          }" 
                          style="padding:10px 2px;"
                          class="underline-none cursor-pointer d-block sub text-break text-wrap"
                        >
                          <div class="flex-box flex-direction-row flex-wrap justify-centent-start align-items-center w-100 m-0 p-0">
                            <div class="flex-grow-0 flex-shrink-0 align-self-stretch" style="padding-right: 5px;">
                              {{  
                                (
                                  (subcategory as ClassifiedNavigationLinksType[
                                    number
                                  ]).subcategory as ClassifiedNavigationLinksType
                                )[i-1].name.toUpperCase()
                              }}
                            </div>
                            <template v-if="
                              (
                                (subcategory as ClassifiedNavigationLinksType[
                                  number
                                ]).subcategory as ClassifiedNavigationLinksType
                              )[i-1].extraname"
                            >
                              <div class="flex-shrink-0 flex-grow-0 align-self-stretch">
                                <div 
                                  style="padding: 2px;border-radius:5px;font-size:11px;" 
                                  class="align-middle"
                                  :style="(
                                    (subcategory as ClassifiedNavigationLinksType[
                                      number
                                    ]).subcategory as ClassifiedNavigationLinksType
                                  )[i-1].isHovered?'border:1px solid #fff;' : 'border:1px solid black;'"
                                >
                                  {{ 
                                    (
                                      (subcategory as ClassifiedNavigationLinksType[
                                        number
                                      ]).subcategory as ClassifiedNavigationLinksType
                                    )[i-1].extraname
                                  }}
                                </div>
                              </div>
                            </template>
                          </div>
                        </a>
                      </template>
                      <template v-else>
                        <RouterLink 
                          :to="
                            (
                              (
                                (subcategory as ClassifiedNavigationLinksType[
                                  number
                                ]).subcategory as ClassifiedNavigationLinksType
                              )[i-1].url as string
                            ).toLowerCase()
                          "
                          style="padding:10px 2px;"
                          class="underline-none cursor-pointer d-block sub text-break text-wrap" 
                          @click="(
                                  (subcategory as ClassifiedNavigationLinksType[
                                    number
                                  ]).subcategory as ClassifiedNavigationLinksType
                                )[i-1].isHovered = false"
                          @mouseover="(
                                  (subcategory as ClassifiedNavigationLinksType[
                                    number
                                  ]).subcategory as ClassifiedNavigationLinksType
                                )[i-1].isHovered = true"
                          @mouseleave="(
                                  (subcategory as ClassifiedNavigationLinksType[
                                    number
                                  ]).subcategory as ClassifiedNavigationLinksType
                                )[i-1].isHovered = false"
                        >
                          <div class="flex-box flex-direction-row flex-wrap justify-centent-start align-items-center w-100 m-0 p-0">
                            <div class="flex-grow-0 flex-shrink-0 align-self-stretch" style="padding-right: 5px;">
                              {{  
                                (
                                  (subcategory as ClassifiedNavigationLinksType[
                                    number
                                  ]).subcategory as ClassifiedNavigationLinksType
                                )[i-1].name.toUpperCase()
                              }}
                            </div>
                            <template v-if="
                              (
                                (subcategory as ClassifiedNavigationLinksType[
                                  number
                                ]).subcategory as ClassifiedNavigationLinksType
                              )[i-1].extraname"
                            >
                              <div class="flex-shrink-0 flex-grow-0 align-self-stretch">
                                <div 
                                  style="padding: 2px;border-radius:5px;font-size:11px;" 
                                  class="align-middle" 
                                  :style="(
                                    (subcategory as ClassifiedNavigationLinksType[
                                      number
                                    ]).subcategory as ClassifiedNavigationLinksType
                                  )[i-1].isHovered? 'border:1px solid #fff;' : 'border:1px solid black;'
                                  "
                                >
                                  {{ 
                                    (
                                      (subcategory as ClassifiedNavigationLinksType[
                                        number
                                      ]).subcategory as ClassifiedNavigationLinksType
                                    )[i-1].extraname
                                  }}
                                </div>
                              </div>
                            </template>
                          </div>
                        </RouterLink>
                      </template>
                    </template>
                  </template>
                </li>
              </ul>
            </div>
            <template v-if="'subcategory' in (
              (subcategory as ClassifiedNavigationLinksType[
                number
              ]).subcategory as ClassifiedNavigationLinksType
            )[clickedIndex]
            ">
              <div class="align-self-stretch h-100 overflow-x-hidden overflow-y-auto" style="padding:30px 2px 10px 2px;width:30%;border-right:2px solid #663600;">
                <ul 
                  class="list-style-none flex-box flex-direction-row flex-wrap w-100 p-0 m-0 justify-content-start align-items-center"
                >
                  <li 
                    v-for="i in Object.keys(
                      (
                        (
                          (
                            subcategory as ClassifiedNavigationLinksType[number]
                          ).subcategory as ClassifiedNavigationLinksType
                        )[clickedIndex].subcategory as ClassifiedNavigationLinksType
                      )
                    ).length
                    "
                    :key="(i-1)+'-SUB-SUB-CHILD-CARTEGORY'"
                    class="w-100 m-0"
                    style="padding: 5px 0px;"
                  >
                    <template v-if="navigationLinkParameters.path === (
                        (
                          (
                            (
                              subcategory as ClassifiedNavigationLinksType[number]
                            ).subcategory as ClassifiedNavigationLinksType
                          )[clickedIndex].subcategory as ClassifiedNavigationLinksType
                        )[i-1].url as string
                      )"
                    >
                      <a 
                        style="padding:10px 2px;" 
                        class="cursor-pointer underline-none d-block sub text-break text-wrap" 
                        @click="() => {
                          openLink();
                          (
                                (
                                  (subcategory as ClassifiedNavigationLinksType[
                                    number
                                  ]).subcategory as ClassifiedNavigationLinksType
                                )[clickedIndex].subcategory as ClassifiedNavigationLinksType
                              )[i-1].isHovered = false;
                        }"
                        @mouseover="(
                                (
                                  (subcategory as ClassifiedNavigationLinksType[
                                    number
                                  ]).subcategory as ClassifiedNavigationLinksType
                                )[clickedIndex].subcategory as ClassifiedNavigationLinksType
                              )[i-1].isHovered = true" 
                        @mouseleave="(
                                (
                                  (subcategory as ClassifiedNavigationLinksType[
                                    number
                                  ]).subcategory as ClassifiedNavigationLinksType
                                )[clickedIndex].subcategory as ClassifiedNavigationLinksType
                              )[i-1].isHovered = false"
                      >
                        <div class="flex-box flex-direction-row flex-wrap justify-content-start align-items-center m-0 p-0 w-100">
                          <div class="flex-shrink-0 flex-grow-0 align-self-stretch" style="padding-right: 5px;">
                            {{ 
                              (
                                (
                                  (
                                    (subcategory as ClassifiedNavigationLinksType[
                                      number
                                    ]).subcategory as ClassifiedNavigationLinksType
                                  )[clickedIndex].subcategory as ClassifiedNavigationLinksType
                                )[i-1].name
                              )
                            }}
                          </div>
                          <template v-if="(
                              (
                                (
                                  (subcategory as ClassifiedNavigationLinksType[
                                    number
                                  ]).subcategory as ClassifiedNavigationLinksType
                                )[clickedIndex].subcategory as ClassifiedNavigationLinksType
                              )[i-1].extraname
                            )
                            "
                          >
                            <div class="flex-shrink-0 flex-grow-0 align-self-stretch">
                              <div 
                                style="padding:2px;border-radius:5px;font-size:11px;" 
                                class="align-middle"
                                :style="(
                                  (
                                    (subcategory as ClassifiedNavigationLinksType[
                                      number
                                    ]).subcategory as ClassifiedNavigationLinksType
                                  )[clickedIndex].subcategory as ClassifiedNavigationLinksType
                                )[i-1].isHovered? 'border:1px solid #fff;' : 'border:1px solid black;'
                                "
                              >
                                {{ 
                                  (
                                    (
                                      (
                                        (subcategory as ClassifiedNavigationLinksType[
                                          number
                                        ]).subcategory as ClassifiedNavigationLinksType
                                      )[clickedIndex].subcategory as ClassifiedNavigationLinksType
                                    )[i-1].extraname
                                  )
                                }}
                              </div>
                            </div>
                          </template>
                        </div>
                      </a>
                    </template>
                    <template v-else>
                      <RouterLink
                        style="padding:10px 2px;" 
                        class="cursor-pointer underline-none d-block sub text-break text-wrap"
                        :to="(
                          (
                            (
                              (
                                subcategory as ClassifiedNavigationLinksType[number]
                              ).subcategory as ClassifiedNavigationLinksType
                            )[clickedIndex].subcategory as ClassifiedNavigationLinksType
                          )[i-1].url as string
                        )
                        " 
                        @click="(
                                (
                                  (subcategory as ClassifiedNavigationLinksType[
                                    number
                                  ]).subcategory as ClassifiedNavigationLinksType
                                )[clickedIndex].subcategory as ClassifiedNavigationLinksType
                              )[i-1].isHovered = false" 
                        @mouseover="(
                                (
                                  (subcategory as ClassifiedNavigationLinksType[
                                    number
                                  ]).subcategory as ClassifiedNavigationLinksType
                                )[clickedIndex].subcategory as ClassifiedNavigationLinksType
                              )[i-1].isHovered = true"
                        @mouseleave="(
                                (
                                  (subcategory as ClassifiedNavigationLinksType[
                                    number
                                  ]).subcategory as ClassifiedNavigationLinksType
                                )[clickedIndex].subcategory as ClassifiedNavigationLinksType
                              )[i-1].isHovered = false"
                      >
                        <div class="flex-box flex-direction-row flex-wrap justify-content-start align-items-center m-0 p-0 w-100">
                          <div class="flex-shrink-0 flex-grow-0 align-self-stretch" style="padding-right: 5px;">
                            {{ 
                              (
                                (
                                  (
                                    (subcategory as ClassifiedNavigationLinksType[
                                      number
                                    ]).subcategory as ClassifiedNavigationLinksType
                                  )[clickedIndex].subcategory as ClassifiedNavigationLinksType
                                )[i-1].name
                              )
                            }}
                          </div>
                          <template v-if="(
                              (
                                (
                                  (subcategory as ClassifiedNavigationLinksType[
                                    number
                                  ]).subcategory as ClassifiedNavigationLinksType
                                )[clickedIndex].subcategory as ClassifiedNavigationLinksType
                              )[i-1].extraname
                            )
                            "
                          >
                            <div class="flex-shrink-0 flex-grow-0 align-self-stretch">
                              <div 
                                style="padding:2px;border-radius:5px;font-size:11px;" 
                                class="align-middle" 
                                :style="(
                                  (
                                    (subcategory as ClassifiedNavigationLinksType[
                                      number
                                    ]).subcategory as ClassifiedNavigationLinksType
                                  )[clickedIndex].subcategory as ClassifiedNavigationLinksType
                                )[i-1].isHovered? 'border:1px solid #fff;' : 'border:1px solid black;'"
                              >
                                {{ 
                                  (
                                    (
                                      (
                                        (subcategory as ClassifiedNavigationLinksType[
                                          number
                                        ]).subcategory as ClassifiedNavigationLinksType
                                      )[clickedIndex].subcategory as ClassifiedNavigationLinksType
                                    )[i-1].extraname
                                  )
                                }}
                              </div>
                            </div>
                          </template>
                        </div>
                      </RouterLink>
                    </template>
                  </li>
                </ul>
              </div>
              <div class="align-self-stretch h-100 overflow-x-hidden overflow-y-auto" style="padding:2px;width:40%;">
                <template v-if="(
                  (subcategory as ClassifiedNavigationLinksType[
                    number
                  ]).subcategory as ClassifiedNavigationLinksType
                )[clickedIndex].img !== undefined && typeof (
                  (subcategory as ClassifiedNavigationLinksType[
                    number
                  ]).subcategory as ClassifiedNavigationLinksType
                )[clickedIndex].img !== 'string'
                ">
                  <ul class="list-style-none flex-box flex-direction-row flex-wrap justify-content-start align-items-center m-0 p-0 w-100">
                    <li 
                      class="flex-grow-0 flex-shrink-0" 
                      style="padding:2px;"
                      v-for="(im, i) in ((
                        (subcategory as ClassifiedNavigationLinksType[
                          number
                        ]).subcategory as ClassifiedNavigationLinksType
                      )[clickedIndex].img as LinkImgType[])"
                      :key="(i-1)+'-IMG-LINKS'"
                    >
                      <template v-if="navigationLinkParameters.path === (im as LinkImgType).link">
                        <a 
                          @click="openLink()"
                          class="underline-none cursor-pointer"
                        >
                          <img :src="'http://localhost:5173/src/assets/images/'+(im as LinkImgType).file" />
                        </a>
                      </template>
                      <template v-else>
                        <RouterLink :to="(im as LinkImgType).link" class="unnnderline-none cursor-pointer">
                          <img :src="'http://localhost:5173/src/assets/images/'+(im as LinkImgType).file" />
                        </RouterLink>
                      </template>
                    </li>
                  </ul>
                </template>
              </div>
            </template>
            <template v-else>
              <div 
                class="align-self-stretch h-100 overflow-x-hidden overflow-y-auto" 
                style="padding:2px;width:70%;"
              >
                <template v-if="(
                  (subcategory as ClassifiedNavigationLinksType[
                    number
                  ]).subcategory as ClassifiedNavigationLinksType
                )[clickedIndex].img !== undefined && typeof (
                  (subcategory as ClassifiedNavigationLinksType[
                    number
                  ]).subcategory as ClassifiedNavigationLinksType
                )[clickedIndex].img !== 'string'
                ">
                  <ul class="list-style-none flex-box flex-direction-row flex-wrap justify-content-start align-items-center m-0 p-0 w-100">
                    <li 
                      class="flex-grow-0 flex-shrink-0" 
                      style="padding:2px;"
                      v-for="(im, i) in ((
                        (subcategory as ClassifiedNavigationLinksType[
                          number
                        ]).subcategory as ClassifiedNavigationLinksType
                      )[clickedIndex].img as LinkImgType[])"
                      :key="(i-1)+'-IMG-LINKS'"
                    >
                      <template v-if="navigationLinkParameters.path === (im as LinkImgType).link">
                        <a 
                          @click="openLink()" 
                          class="underline-none cursor-pointer"
                        >
                          <img :src="'http://localhost:5173/src/assets/images/'+(im as LinkImgType).file" />
                        </a>
                      </template>
                      <template v-else>
                        <RouterLink :to="(im as LinkImgType).link" class="unnnderline-none">
                          <img :src="'http://localhost:5173/src/assets/images/'+(im as LinkImgType).file" />
                        </RouterLink>
                      </template>
                    </li>
                  </ul>
                </template>
              </div>
            </template>
          </div>
        </div>
      </div>
    </template>
  </template>
  <template v-else>
    <div 
      class="w-100 h-100 position-relative" 
      :style="compPaddingStyle"
    >
      <div class="position-absolute d-block l-0 w-100" style="padding:5px 20px;height:40px">
        <div class="d-block h-100 w-100" style="background: url('http://localhost:5173/src/assets/images/leather-brown.jpeg') no-repeat center center fixed;-webkit-background-size: cover;-moz-background-size: cover;-o-background-size: cover;background-size: cover;">
          <div style="float:right">
            <slot name="closed"></slot>
          </div>
        </div>
      </div>
      <div class="w-100 h-100" style="padding:40px 0px 10px 0px;">
        <div class="flex-box flex-direction-row h-100 w-100 m-0 flex-nowrap justify-content-center align-items-center">
          <div class="align-self-stretch h-100" style="width:50%;">
            <img src="http://localhost:5173/src/assets/images/more.jpg" class="w-100 h-100" />
          </div>
          <div class="align-self-stretch overflow-x-hidden overflow-y-auto" style="width:50%;border-right:2px solid #663600;">
            <ul
              class="list-style-none flex-box flex-direction-row p-0 w-100 m-0 flex-wrap justify-content-center align-items-center"
            >
              <li 
                v-for="i in moreSubCategoryLoopIndex" 
                class="w-100 text-left" 
                :key="i+'-SHOW-MORE'" 
                style="padding: 0 0 5px 2px;"
              >
                <template v-if="'subcategory' in ((subcategory as ClassifiedNavigationLinksType)[i] as ClassifiedNavigationLinksType[number])">
                  <a 
                    :style="(navigationLinkParameters.currentSubCategoryIndex === i && navigationLinkParameters.showCollections === true)? 'background-color:#663600;color:#fff;' : ''"
                    class="sub d-block underline-none cursor-pointer" 
                    style="padding:10px;" 
                    @click="() => {
                      navigationLinkParameters.typeClicked = 'SUBCATEGORY-CLICKED';
                      navigationLinkParameters.currentSubCategoryIndex = i;
                      navigationLinkParameters.isSubCategoryOrMoreSubCategoryWindowClosed = false;
                      triggerNavigationLinkParameters();
                    }"
                  >
                    {{ 
                      (subcategory as ClassifiedNavigationLinksType)[i].name
                    }}
                  </a>
                </template>
                <template v-else>
                  <template v-if="navigationLinkParameters.path === ((subcategory as ClassifiedNavigationLinksType)[i].url as string)">
                    <a 
                      @click="openLink()" 
                      class="sub d-block underline-none cursor-pointer" 
                      style="padding:10px;"
                      :style="(navigationLinkParameters.currentSubCategoryIndex === i && navigationLinkParameters.showCollections)? 'background-color:#663600;color:#fff;' : ''"
                    >
                      {{ 
                        (subcategory as ClassifiedNavigationLinksType)[i].name
                      }}
                    </a>
                  </template>
                  <template v-else>
                    <RouterLink 
                      :to="((subcategory as ClassifiedNavigationLinksType)[i].url as string)"
                      class="sub d-block underline-none cursor-pointer" 
                      style="padding:10px;"
                      :style="(navigationLinkParameters.currentSubCategoryIndex === i && navigationLinkParameters.showCollections)? 'background-color:#663600;color:#fff;' : ''"
                    >
                      {{ 
                        (subcategory as ClassifiedNavigationLinksType)[i].name
                      }}
                    </RouterLink>
                  </template>
                </template>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </template>
</template>

<style scoped>
.sub {
  font-size: 14px;
  color:black;
  border:1px solid transparent;
}
.sub:hover {
  background-color: #663600; 
  border: 1px solid #5A5A5A !important;
  color: #fff;
}
.sub:focus {
  background-color: #663600; 
  border: 1px solid #5A5A5A !important;
  color: #fff;
}
.sub:active {
  background-color: #663600; 
  border: 1px dashed #5A5A5A !important;
  color: #fff;
}
</style>
