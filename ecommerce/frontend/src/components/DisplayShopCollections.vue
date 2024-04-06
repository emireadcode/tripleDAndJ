<script lang="ts" setup>
import type { ClassifiedNavigationLinksType } from "./types";
import { inject, onMounted, ref, onUnmounted, watch, onBeforeMount, shallowRef, type ShallowRef, triggerRef, } from 'vue';
import DisplaySubCategoryOrMoreSubCategoryClicked from "./DisplaySubCategoryOrMoreSubCategoryClicked.vue"
import ShopFooter from "./ShopFooter.vue";
import { useRoute, useRouter, } from "vue-router";

const route = useRoute(), router = useRouter();

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

defineProps<{
  headerHeight?: number | undefined;
}>();

const 
  links = inject('LINKS') as ClassifiedNavigationLinksType,
  imgref = ref<HTMLImageElement>()
;

let 
  imgs = ref<string[]>(['c12.jpg','c13.jpg','c14.jpg','c15.jpg','c16.jpg','c17.jpg','c18.jpg','c2.jpg','c3.jpg','c1.jpg','c5.jpg','c6.jpg','c7.jpg','c4.jpg','c8.jpg','c9.jpg','c10.jpg','c11.jpg','v1.png','v2.png','v3.png','v4.png','v5.png','v6.png','v7.png']), 
  tempImgs = ref<string[]>(['c12.jpg','c13.jpg','c14.jpg','c15.jpg','c16.jpg','c17.jpg','c18.jpg','c2.jpg','c3.jpg','c1.jpg','c5.jpg','c6.jpg','c7.jpg','c4.jpg','c8.jpg','c9.jpg','c10.jpg','c11.jpg','v1.png','v2.png','v3.png','v4.png','v5.png','v6.png','v7.png']), 
  imgCoverHeight = ref<number>(0), 
  imgsRef = ref<HTMLImageElement[]>([]),
  left = ref<number>(0),
  t1 =  ref<ReturnType<typeof window.setInterval>>(), 
  t2 =  ref<ReturnType<typeof window.setInterval>>(),
  t3 = ref<ReturnType<typeof window.setInterval>>(),
  t4 = ref<ReturnType<typeof window.setTimeout>>(),
  subcategory = ref<ClassifiedNavigationLinksType | undefined>(),
  maxCategoryToBeShown = ref<number>(6),
  toBeShownCategories = ref<number[]>([]),
  innerBreak = ref<Boolean>(false),
  outerBreak = ref<Boolean>(false), 
  vPaths = ref<ClassifiedNavigationLinksType[number][]>([]),
  showCollections = ref<Boolean>(false),
  allSelectedNodes = ref<ClassifiedNavigationLinksType[]>([]),
  navigationLinkParameters = inject('NAVIGATION-LINK-PARAMETERS') as ShallowRef<NavigationLinkParametersType>,
  tempNavigationLinkParameters = shallowRef<NavigationLinkParametersType>() as ShallowRef<NavigationLinkParametersType>
;

function getToBeShownCategories(s: number) {
  if((navigationLinkParameters.value as NavigationLinkParametersType) !== undefined && 'index' in (navigationLinkParameters.value as NavigationLinkParametersType)) {
    let size = s;
    for(let i=0; i<size; i++) {
      if(i !== (navigationLinkParameters.value as NavigationLinkParametersType).index) {
        toBeShownCategories.value.push(i);
      }
      else {
        if(size === maxCategoryToBeShown.value) {
          size = maxCategoryToBeShown.value + 1;
        }
        continue;
      }
    }
  }
}

function startSlide() {
  if(
    (navigationLinkParameters.value as NavigationLinkParametersType).isSubCategoryOrMoreSubCategoryWindowClosed
  ) {
    let 
      counter1 = 0, 
      counter2 = 0, 
      started = false, 
      transitionend = false,
      done = false, 
      i = 0, 
      deleted = false,
      added = false,
      el = (document.getElementById("world") as HTMLDivElement)
    ;

    clearInterval(t1.value);
    clearInterval(t2.value);
    clearTimeout(t4.value);

    left.value = 0;
    imgs.value = JSON.parse(JSON.stringify(tempImgs.value));
    
    t4.value = setTimeout(() => {
      t1.value = setInterval(() => {
        if((done === true && transitionend === true) && started === false && (imgsRef.value[i] as HTMLImageElement) && (imgsRef.value[i-1] as HTMLImageElement)) {
          if(
            (navigationLinkParameters.value as NavigationLinkParametersType).isSubCategoryOrMoreSubCategoryWindowClosed
          ) {
            if(
              (-1*((imgsRef.value[i-1] as HTMLImageElement).offsetWidth+10))
              ===
              (-1*((imgsRef.value[i] as HTMLImageElement).offsetWidth+10))
            ) {
              left.value+= (-1);
            }
            else {
              left.value = -1*((imgsRef.value[i] as HTMLImageElement).offsetWidth+10);
            }
            imgs.value.splice((i-1), 1);
            deleted = true;
            i--;
            counter1 = 0;
            counter2 = 0;
            started = true;
          }
        }
        if((done === true && transitionend === true) && started === true) {
          counter2++;
        }
        if(counter2 === 2) {
          done = false;
          transitionend = false;
          started = false;
          added = false;
        }
        if(
          (navigationLinkParameters.value as NavigationLinkParametersType).isSubCategoryOrMoreSubCategoryWindowClosed === false
        ) {
          if(deleted && added) {
            tempImgs.value = JSON.parse(JSON.stringify(imgs.value));
          }
          else if(deleted || added) {
            if(deleted && !added) {
              tempImgs.value = JSON.parse(JSON.stringify(imgs.value));
              imgs.value = JSON.parse(JSON.stringify(tempImgs.value));
            }
            else {
              tempImgs.value = JSON.parse(JSON.stringify(imgs.value));
              tempImgs.value.splice(tempImgs.value.length-1,1);
            }
          }
          clearInterval(t1.value);
        }
      }, 1);

      t2.value = setInterval(() => {
        if((done === false && transitionend === false) && started === false && (imgsRef.value[i] as HTMLImageElement)) {
          if(
            (navigationLinkParameters.value as NavigationLinkParametersType).isSubCategoryOrMoreSubCategoryWindowClosed
          ) {
            let distance = -1*((imgsRef.value[i] as HTMLImageElement).offsetWidth+10);
            translateFunction(el, distance + 'px');
            i++;
            imgs.value.push(imgs.value[i-1]);
            added = true;
            if(el) {
              el.style.transition =" all 0.5s ease-out";
            }
            counter1 = 0;
            counter2 = 0;
            transitionend = true;
          }
        }
        if(transitionend === true && started === false && done === false) {
          counter1++;
        }
        if(counter1 === 2) {
          done = true;
          deleted = false;
        }
        if(
          (navigationLinkParameters.value as NavigationLinkParametersType).isSubCategoryOrMoreSubCategoryWindowClosed === false
        ) {
          if(deleted && added) {
            tempImgs.value = JSON.parse(JSON.stringify(imgs.value));
          }
          else if(deleted || added) {
            if(deleted && !added) {
              tempImgs.value = JSON.parse(JSON.stringify(imgs.value));
            }
            else {
              tempImgs.value = JSON.parse(JSON.stringify(imgs.value));
              tempImgs.value.splice(0, 1);
              imgs.value = JSON.parse(JSON.stringify(tempImgs.value));
            }
          }
          clearInterval(t2.value);
        }
      }, 1000);
      
      clearTimeout(t4.value);

    }, 10);
  }
}

function translateFunction(el: HTMLDivElement, distance: string) {
  if(el) {
    el.style.transform="translateX("+distance+")";
  }
}

function findCategoryIndex(parentNode: ClassifiedNavigationLinksType[number]) {
  let catIndex = 0;
  for(let i=0; i<Object.keys(links).length; i++) {
    if(JSON.stringify(links[i]) === JSON.stringify(parentNode)) {
      catIndex = i;
      break;
    }
  }
  return catIndex;
}

function lastMayBeAChildNodeOrNot(vPath: ClassifiedNavigationLinksType[number][]) {
  let isChildNode = false, allNodes = [];
  if(
    ('url' in vPath[vPath.length - 1]) 
    && 
    vPath[vPath.length - 1].url !== undefined
    &&
    ('subcategory' in vPath[vPath.length - 1])
    &&
    Object.keys(vPath[vPath.length - 1].subcategory as ClassifiedNavigationLinksType).length > 0
  ) {
    allNodes.push(vPath[vPath.length - 1]);
    for(let i=(vPath.length - 1); i>=0; i--) {
      if(
        ('url' in vPath[i]) 
        && 
        vPath[i].url !== undefined
        &&
        ('subcategory' in vPath[i])
        &&
        Object.keys(vPath[i].subcategory as ClassifiedNavigationLinksType).length > 0
      ) {
        for(let j=0; j<Object.keys(vPath[i].subcategory as ClassifiedNavigationLinksType).length; j++) {
          let vParentNode = (vPath[i].subcategory as ClassifiedNavigationLinksType)[j];
          if(JSON.stringify(vParentNode) === JSON.stringify(vPath[vPath.length - 1])) {
            isChildNode = true;
            allNodes.push(vParentNode);
            break;
          }
        }
      }
      if(isChildNode) {
        break;
      }
    }
  }
  else {
    if(vPath.length >= 2) {
      let last = vPath[vPath.length - 1];
      allNodes.push(last);
      for(let i=(vPath.length - 2); i>=0; i--) {
        let vPNode = vPath[i];
        for(let j=0; j<Object.keys(vPNode.subcategory as ClassifiedNavigationLinksType).length; j++) {
          if(JSON.stringify((vPNode.subcategory as ClassifiedNavigationLinksType)[j]) === JSON.stringify(last)) {
            allNodes.push(vPNode);
            last = JSON.parse(JSON.stringify(vPNode));
            isChildNode = true;
            break;
          }
        }
      }
    }
  }
  return {
    isChildNode,
    allNodes
  };
}

function findSubCategoryIndex(vParentNode: ClassifiedNavigationLinksType[number], vChildNode: ClassifiedNavigationLinksType[number]) {
  let subCategoryIndex = 0;
  for(let i=0; i<Object.keys(vParentNode.subcategory as ClassifiedNavigationLinksType).length; i++) {
    if(JSON.stringify((vParentNode.subcategory as ClassifiedNavigationLinksType)[i]) === JSON.stringify(vChildNode)) {
      subCategoryIndex = i;
      break;
    }
  }
  return subCategoryIndex;
}

function triggerNavigationLinkParameters() {
  triggerRef(navigationLinkParameters);
}

function handleRoute(link: ClassifiedNavigationLinksType) {
  if(route.params.categoryandsubcategory !== undefined) {
    let path = route.fullPath;
    for(let i=0; (i<(Object.keys(link).length) && innerBreak.value === false && outerBreak.value === false); i++) {
      let v = link[i];
      if(v !== undefined && 'url' in v && v.url !== undefined) {
        if(v.url === path) {
          (vPaths.value as ClassifiedNavigationLinksType[number][]).push(v);
          outerBreak.value = true;
        }
      }
      if(outerBreak.value === false) {
        if(v !== undefined && 'img' in v && v.img !== undefined && Array.isArray(v.img) && v.img.length > 0) {
          for(let j=0; j<v.img.length; j++) {
            let item = v.img[j];
            if(item.link === path) {
              (vPaths.value as ClassifiedNavigationLinksType[number][]).push(v);
              innerBreak.value = true;
              break;
            }
          }
        }
      }
      if(innerBreak.value || outerBreak.value) {
        let allSelectedNodesSize = JSON.parse(JSON.stringify(vPaths.value)).length;
        if(allSelectedNodesSize === 1) {
          allSelectedNodes.value = JSON.parse(JSON.stringify(vPaths.value));
          allSelectedNodesSize = allSelectedNodes.value.length;
          vPaths.value = [];
          if(!(('subcategory' in (allSelectedNodes.value[0] as ClassifiedNavigationLinksType[number])) && Object.keys((allSelectedNodes.value[0] as ClassifiedNavigationLinksType[number]).subcategory as ClassifiedNavigationLinksType).length > 0)) {
            showCollections.value = true;
          }
          navigationLinkParameters.value.name = (allSelectedNodes.value[0] as ClassifiedNavigationLinksType[number]).name;
          navigationLinkParameters.value.type = 'CATEGORY';
          navigationLinkParameters.value.index = findCategoryIndex((allSelectedNodes.value[0] as ClassifiedNavigationLinksType[number]));
          navigationLinkParameters.value.subcategory = ('subcategory' in (allSelectedNodes.value[0] as ClassifiedNavigationLinksType[number]));
          navigationLinkParameters.value.isSubCategoryOrMoreSubCategoryWindowClosed = true;
          navigationLinkParameters.value.moreSubCategoriesStartFromIndex = undefined;
          navigationLinkParameters.value.currentScrollHeight = 0;
          navigationLinkParameters.value.currentSubCategoryIndex = undefined;
          navigationLinkParameters.value.showCollections = showCollections.value;
          navigationLinkParameters.value.path = path;
          navigationLinkParameters.value.typeClicked = '';
        }
        else {
          let {isChildNode, allNodes } = lastMayBeAChildNodeOrNot(JSON.parse(JSON.stringify(vPaths.value)));
          allSelectedNodes.value = allNodes;
          vPaths.value = [];
          if(isChildNode === false) {
            if(!(
              ('subcategory' in (allSelectedNodes.value[allSelectedNodes.value.length - 1] as ClassifiedNavigationLinksType[number]))
              &&
              Object.keys((allSelectedNodes.value[allSelectedNodes.value.length - 1] as ClassifiedNavigationLinksType[number]).subcategory as ClassifiedNavigationLinksType).length > 0
            )) {
              showCollections.value = true;
            }
            navigationLinkParameters.value.name = (allSelectedNodes.value[allSelectedNodes.value.length - 1] as ClassifiedNavigationLinksType[number]).name;
            navigationLinkParameters.value.type = 'CATEGORY';
            navigationLinkParameters.value.index = findCategoryIndex((allSelectedNodes.value[allSelectedNodes.value.length - 1] as ClassifiedNavigationLinksType[number]));
            navigationLinkParameters.value.subcategory = ('subcategory' in (allSelectedNodes.value[allSelectedNodes.value.length - 1] as ClassifiedNavigationLinksType[number]));
            navigationLinkParameters.value.isSubCategoryOrMoreSubCategoryWindowClosed = true;
            navigationLinkParameters.value.moreSubCategoriesStartFromIndex = undefined;
            navigationLinkParameters.value.currentScrollHeight = 0;
            navigationLinkParameters.value.currentSubCategoryIndex = undefined;
            navigationLinkParameters.value.showCollections = showCollections.value;
            navigationLinkParameters.value.path = path;
            navigationLinkParameters.value.typeClicked = '';
          }
          else {
            showCollections.value = true;
            navigationLinkParameters.value.name = (allSelectedNodes.value[allSelectedNodes.value.length - 1] as ClassifiedNavigationLinksType[number]).name;
            navigationLinkParameters.value.type = 'CATEGORY';
            navigationLinkParameters.value.index = findCategoryIndex((allSelectedNodes.value[allSelectedNodes.value.length - 1] as ClassifiedNavigationLinksType[number]));
            navigationLinkParameters.value.subcategory = ('subcategory' in (allSelectedNodes.value[allSelectedNodes.value.length - 1] as ClassifiedNavigationLinksType[number]));
            navigationLinkParameters.value.isSubCategoryOrMoreSubCategoryWindowClosed = true;
            navigationLinkParameters.value.moreSubCategoriesStartFromIndex = undefined;
            navigationLinkParameters.value.currentScrollHeight = 0;
            navigationLinkParameters.value.currentSubCategoryIndex = findSubCategoryIndex(
              (allSelectedNodes.value[allSelectedNodes.value.length - 1] as ClassifiedNavigationLinksType[number]),
              (allSelectedNodes.value[allSelectedNodes.value.length - 2] as ClassifiedNavigationLinksType[number])
            );
            navigationLinkParameters.value.showCollections = showCollections.value;
            navigationLinkParameters.value.path = path;
            navigationLinkParameters.value.typeClicked = '';
          }
        }
        triggerNavigationLinkParameters();
        break;
      }
      else {
        if(v !== undefined && 'subcategory' in v && v.subcategory !== undefined && Object.keys(v.subcategory).length > 0) {
          (vPaths.value as ClassifiedNavigationLinksType[number][]).push(v);
          handleRoute(v.subcategory);
        }
      }
    }
  }
  else {
    router.push((links as ClassifiedNavigationLinksType)[0].url as string);
  }
}

function calculateImageCoverHeight() {
  clearInterval(t3.value);
  let count = 0, prev = -1;
  t3.value = setInterval(() => {
    if((imgref.value as HTMLImageElement)) {
      imgCoverHeight.value = ((imgref.value as HTMLImageElement).offsetWidth as number) - 30;
      if(
        count === 10
        &&
        prev === imgCoverHeight.value
        &&
        imgCoverHeight.value > 0
      ) {
        clearInterval(t3.value);
      }
      prev = imgCoverHeight.value;
      if(imgCoverHeight.value > 0) {
        count++;
      }
    }
  }, 10);
}

watch(
  () => route.params.categoryandsubcategory,
  () => {
    innerBreak.value = false;
    outerBreak.value = false;
    showCollections.value = false;
    vPaths.value = [];
    handleRoute(links);
    let t = setTimeout(() => {
      toBeShownCategories.value = [];
      if(Object.keys(links).length >= maxCategoryToBeShown.value) {
        getToBeShownCategories(maxCategoryToBeShown.value);
      }
      else {
        getToBeShownCategories(Object.keys(links).length);
      }
      if(
        showCollections.value === false 
        && 
        (navigationLinkParameters.value as NavigationLinkParametersType).isSubCategoryOrMoreSubCategoryWindowClosed
      ) {
        calculateImageCoverHeight();
        startSlide();
      }
      else {
        tempNavigationLinkParameters.value = JSON.parse(JSON.stringify(navigationLinkParameters.value));
      }
      clearTimeout(t)
    }, 5);
  }
);

watch(
  () => (navigationLinkParameters.value as NavigationLinkParametersType).isSubCategoryOrMoreSubCategoryWindowClosed,
  (x) => {
    if(x) {
      (tempNavigationLinkParameters.value as NavigationLinkParametersType).isSubCategoryOrMoreSubCategoryWindowClosed = true;
      let t = setTimeout(() => {
        toBeShownCategories.value = [];
        if(Object.keys(links).length >= maxCategoryToBeShown.value) {
          getToBeShownCategories(maxCategoryToBeShown.value);
        }
        else {
          getToBeShownCategories(Object.keys(links).length);
        }
        if(
          showCollections.value === false 
        ) {
          calculateImageCoverHeight();
          startSlide();
        }
        else {
          navigationLinkParameters.value = JSON.parse(JSON.stringify(tempNavigationLinkParameters.value));
          triggerNavigationLinkParameters();
        }
        clearTimeout(t)
      }, 5);
    }
  }
);

onBeforeMount(() => {
  innerBreak.value = false;
  outerBreak.value = false;
  showCollections.value = false;
  vPaths.value = [];
  handleRoute(links);
});

onUnmounted(() => {
  window.removeEventListener('resize', calculateImageCoverHeight);
});

onMounted(() => {
  if((navigationLinkParameters.value as NavigationLinkParametersType) !== undefined && 'index' in (navigationLinkParameters.value as NavigationLinkParametersType)) {
    subcategory.value = (links[(navigationLinkParameters.value as NavigationLinkParametersType).index as number]?.subcategory as ClassifiedNavigationLinksType);
  }
  if(
    showCollections.value === false 
    && 
    (navigationLinkParameters.value as NavigationLinkParametersType).isSubCategoryOrMoreSubCategoryWindowClosed
  ) {
    toBeShownCategories.value = [];
    if(Object.keys(links).length >= maxCategoryToBeShown.value) {
      getToBeShownCategories(maxCategoryToBeShown.value);
    }
    else {
      getToBeShownCategories(Object.keys(links).length);
    }
    calculateImageCoverHeight();
    startSlide();
  }
  tempNavigationLinkParameters.value = JSON.parse(JSON.stringify(navigationLinkParameters.value));
  window.addEventListener('resize', calculateImageCoverHeight);
});

</script>

<template>
  <div class="w-100 h-100">
    <template 
      v-if="(navigationLinkParameters as NavigationLinkParametersType).isSubCategoryOrMoreSubCategoryWindowClosed === false"
    >
      <DisplaySubCategoryOrMoreSubCategoryClicked 
        :headerHeight="headerHeight"
      >
        <template v-slot:closed>
          <slot name="close"></slot>
        </template>
      </DisplaySubCategoryOrMoreSubCategoryClicked>
    </template>
    <template v-else>
      <template v-if="showCollections">
        <div style="padding:400px 0;">SHOW THIS COLLECTION FROM DATABASE</div>
      </template>
      <template v-else>
        <div
          :style="'padding:'+((headerHeight as number)+2)+'px 0 0 0;'"
          class="flex-box flex-direction-row w-100 m-0 flex-nowrap justify-content-center align-items-center"
        >
          <div style="width:50%;">
            <img class="w-100" src="http://localhost:5173/src/assets/images/f1.jpg" />
          </div>
         <div style="width:50%;">
            <img class="w-100" src="http://localhost:5173/src/assets/images/f2.jpg" />
          </div>
        </div>
        <div 
          class="w-100" 
          style="padding: 20px 20px 0 20px;"
        >
          <template v-if="Object.keys(links).length >= maxCategoryToBeShown">
            <ul
              class="list-style-none flex-box flex-direction-row p-0 h-100 w-100 m-0 flex-wrap justify-content-center align-items-center"
            >
              <li 
                v-for="i in toBeShownCategories.length" 
                :key="(i-1)+'-SHOW-UP-TO-SIX-CATEGORY-COLLECTION'"
                style="width:50%;" 
                :style="((i-1)%2===0)?'float:right;padding:40px 10px 60px 70px;':'float:left;padding:40px 70px 60px 10px;'" 
              >
                <a class="w-100 underline-none">
                  <img 
                    :ref="(el) => imgref = el as HTMLImageElement"
                    :style="'height:'+imgCoverHeight+'px;'"
                    class="w-100" 
                    :src="'http://localhost:5173/src/assets/images/'+(links[toBeShownCategories[i-1]].img as string)" 
                  />
                </a>
                <span class="d-block" style="padding:15px 0">
                  {{ links[toBeShownCategories[i-1]].name.toUpperCase() }}
                </span>
                <div class="d-block" style="padding:15px 0">
                  <a class="shopnow">SHOP NOW</a>
                </div>
              </li>
            </ul>
          </template>
          <template v-else>
            <ul
              class="list-style-none flex-box flex-direction-row p-0 h-100 w-100 m-0 flex-wrap justify-content-center align-items-center"
            >
              <li 
                v-for="i in toBeShownCategories.length" 
                :key="(i-1)+'-SHOW-UP-TO-SIX-CATEGORY-COLLECTION'"
                style="width:50%;"
                :style="((i-1)%2===0)?'float:right;padding:40px 10px 60px 70px;':'float:left;padding:40px 70px 60px 10px;'" 
              >
                <a class="w-100 underline-none">
                  <img 
                    :ref="(el) => imgref = el as HTMLImageElement"
                    :style="'height:'+imgCoverHeight+'px;'"
                    class="w-100" 
                    :src="'http://localhost:5173/src/assets/images/'+(links[toBeShownCategories[i-1]].img as string)" 
                  />
                </a>
                <span class="d-block" style="padding:15px 0">
                  {{ links[toBeShownCategories[i-1]].name.toUpperCase() }}
                </span>
                <div class="d-block" style="padding:15px 0">
                  <a class="shopnow">SHOP NOW</a>
                </div>
              </li>
            </ul>
          </template>
        </div>
        <div class="w-100" style="height:760px;background-color:#663600;border-bottom:1px solid #fff;padding:100px 0 100px 90px">
          <div class="w-100 h-100" style="overflow:hidden;">
            <div id="world" class="h-100" :style="'padding-left:'+left+'px;'">
              <ul
                class="list-style-none flex-box flex-direction-row p-0 h-100 w-100 m-0 flex-nowrap justify-content-start align-items-center"
              >
                <li 
                  v-for="(img, i) in imgs" 
                  :key="i+'WORLD-IMAGES'" 
                  class="align-self-stretch"
                >
                  <div class="d-block" style="padding-right:10px;">
                    <a class="d-block underline-none">
                      <img :ref="(el) => imgsRef[i] = (el as HTMLImageElement)" :src="'http://localhost:5173/src/assets/images/'+img" class="h-100" />
                    </a>
                    <span class="d-block" style="padding:30px 0;color:#fff;">Dolce&Gabbana: a future under the banner of sustainability</span>
                    <a style="padding-bottom:30px;color:#fff;" class="underline-none">
                      DISCOVER MORE
                    </a>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </template>
      <ShopFooter 
      >
      </ShopFooter>
    </template>
  </div>
</template>

<style scoped>
.shopnow {
  background: linear-gradient(#663600, #663600 50%, #46FF0B 50%, #46FF0B);
  background-size: 100% 200%;
  /*trasition effect for background*/
  transition: background 0.5s;
  padding: 10px;
  text-decoration: none;
  color: #fff;
  cursor: pointer !important;
}

.shopnow:hover {
  background-position: 100% 100%;
  color: black;
}
</style>