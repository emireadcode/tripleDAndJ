<script lang="ts" setup>
import ClassifiedNavigationLinksAndOthersOnTheSameLineWithClassifiedNavigationLinks from './ClassifiedNavigationLinksAndOthersOnTheSameLineWithClassifiedNavigationLinks.vue';
import CompanyLogoAndNameDisplayer from './CompanyLogoAndNameDisplayer.vue';
import SubCategoryLinks from './SubCategoryLinks.vue';
import { ref, onMounted, onUnmounted, watch, inject, type ShallowRef, } from "vue";

type NavigationLinkParametersType = {
  name: string; 
  type: 'CATEGORY' | 'SEARCH' | 'AD-CAMPAIGN-LINK' | 'FOOTER-LINK';
  index: number | undefined;
  subcategory?: Boolean | undefined;
  moreSubCategoriesStartFromIndex: number | undefined;
  currentScrollHeight: number | undefined;
  currentSubCategoryIndex: number | undefined;
  isSubCategoryOrMoreSubCategoryWindowClosed: Boolean;
  showCollections: Boolean;
  path: string;
  typeClicked: 'MORE-SUBCATEGORY-CLICKED' | 'SUBCATEGORY-CLICKED' | '';
};

let 
  headerHeight = ref<number>(),
  companyNameIsReady = ref<Boolean>(false),
  navigationLinkParameters = inject('NAVIGATION-LINK-PARAMETERS') as ShallowRef<NavigationLinkParametersType>
;

const 
  emits = defineEmits<{
    (e: "header:height", action: number): void;
  }>(),
  headerRef = ref<HTMLDivElement>()
;

function getHeaderHeight() {
  let prev = 0, count = 0;
  let t = setInterval(() => {
    headerHeight.value = headerRef.value?.offsetHeight as number;
    if(headerHeight.value && companyNameIsReady.value && headerRef.value?.style.backgroundImage) {
      emits("header:height", headerHeight.value);
      if(prev>0 && prev === headerHeight.value) {
        count++;
        if(count === 5) {
          clearInterval(t);
        }
      }
    }
    prev = headerHeight.value;
  }, 10);
}

watch(
  () => [
    (navigationLinkParameters.value as NavigationLinkParametersType).type,
    (navigationLinkParameters.value as NavigationLinkParametersType).isSubCategoryOrMoreSubCategoryWindowClosed
  ],
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  ([x, _y]) => {
    getHeaderHeight();
  }
)

onUnmounted(() => {
  window.removeEventListener('resize', getHeaderHeight);
});

onMounted(() => {
  getHeaderHeight();
  window.addEventListener('resize', getHeaderHeight);
});

</script>

<template>
  <div class="d-block w-100 position-relative">
    <div 
      id="bottom-header" 
      class="w-100 position-fixed m-0 p-0 l-0 r-0" 
      style="bottom:0;z-index:510;pointer-events:auto !important;background-image:url('http://localhost:5173/src/assets/images/leather-brown.jpeg');background-repeat: no-repeat;background-position: center center ;background-attachment:fixed;-webkit-background-size: cover;-moz-background-size: cover;-o-background-size: cover;background-size: cover;"
    >
      <div style="padding:10px 20px;" class="m-0 w-100">
        <ClassifiedNavigationLinksAndOthersOnTheSameLineWithClassifiedNavigationLinks 
          :bottom="true"
        ></ClassifiedNavigationLinksAndOthersOnTheSameLineWithClassifiedNavigationLinks>
      </div>
    </div>
    <div 
      id="top-header"
      :ref="(el) => headerRef = el as HTMLDivElement"
      class="w-100 position-fixed t-0 l-0 r-0 m-0 p-0"
      style="z-index:510;pointer-events:auto !important;background-image:url('http://localhost:5173/src/assets/images/leather-brown.jpeg');background-repeat: no-repeat;background-position: center center ;background-attachment:fixed;-webkit-background-size: cover;-moz-background-size: cover;-o-background-size: cover;background-size: cover;"
    >
      <div id="top-navs" style="padding-right:20px;padding-left:20px;" class="m-0 w-100">
        <ClassifiedNavigationLinksAndOthersOnTheSameLineWithClassifiedNavigationLinks 
          :bottom="false"
        ></ClassifiedNavigationLinksAndOthersOnTheSameLineWithClassifiedNavigationLinks>
      </div>
      <div id="company-name">
        <CompanyLogoAndNameDisplayer 
          @company:name="() => companyNameIsReady = true"
        ></CompanyLogoAndNameDisplayer>
      </div>
      <template v-if="
        (navigationLinkParameters as NavigationLinkParametersType).type === 'CATEGORY'
        &&
        ((navigationLinkParameters as NavigationLinkParametersType).subcategory as Boolean) === true
      ">
        <div id="subcategory-names">
          <SubCategoryLinks></SubCategoryLinks>
        </div>
      </template>
    </div>
  </div>
</template>

<style scoped>
@media only screen and (max-width: 991px) {
  #top-navs {
    padding-bottom: 10px;
    padding-top: 10px;
  }
  #bottom-header {
    display: block;
  }
  #company-name, #subcategory-names {
    display: none;
  }
}
@media only screen and (min-width: 990px) {
  #top-navs {
    padding-bottom: 0px;
    padding-top: 20px;
  }
  #bottom-header {
    display: none;
  }
  #company-name, #subcategory-names {
    display: block;
  }
}
</style>
