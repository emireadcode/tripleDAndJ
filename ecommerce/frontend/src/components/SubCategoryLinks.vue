<script lang="ts" setup>
import type { ClassifiedNavigationLinksType } from "./types/";
import { onMounted, ref, watch, inject, onUnmounted, type ShallowRef, triggerRef, } from "vue";
import { map, reduce, from, } from 'rxjs';
import {useRouter} from "vue-router";

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

const 
  links = (inject('LINKS') as ClassifiedNavigationLinksType),
  router = useRouter()
;

let 
  padding = ref<{paddingLeft:string;paddingRight:string;}[]>([]),
  uldomref1 = ref<HTMLUListElement>(),
  thereShouldBeMore = ref<Boolean>(false),
  moreSubCategoriesStartFromIndex = ref<number | undefined>(),
  subcategory = ref<ClassifiedNavigationLinksType | undefined>(),
  moreSubCategory = ref<Boolean>(false),
  navigationLinkParameters = inject('NAVIGATION-LINK-PARAMETERS') as ShallowRef<NavigationLinkParametersType>
;

function measureText(str: string, fontsize: number = 10, padding: {paddingLeft: string; paddingRight: string;}) {
  const widths = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0.2796875,0.2765625,0.3546875,0.5546875,0.5546875,0.8890625,0.665625,0.190625,0.3328125,0.3328125,0.3890625,0.5828125,0.2765625,0.3328125,0.2765625,0.3015625,0.5546875,0.5546875,0.5546875,0.5546875,0.5546875,0.5546875,0.5546875,0.5546875,0.5546875,0.5546875,0.2765625,0.2765625,0.584375,0.5828125,0.584375,0.5546875,1.0140625,0.665625,0.665625,0.721875,0.721875,0.665625,0.609375,0.7765625,0.721875,0.2765625,0.5,0.665625,0.5546875,0.8328125,0.721875,0.7765625,0.665625,0.7765625,0.721875,0.665625,0.609375,0.721875,0.665625,0.94375,0.665625,0.665625,0.609375,0.2765625,0.3546875,0.2765625,0.4765625,0.5546875,0.3328125,0.5546875,0.5546875,0.5,0.5546875,0.5546875,0.2765625,0.5546875,0.5546875,0.221875,0.240625,0.5,0.221875,0.8328125,0.5546875,0.5546875,0.5546875,0.5546875,0.3328125,0.5,0.2765625,0.5546875,0.5,0.721875,0.5,0.5,0.5,0.3546875,0.259375,0.353125,0.5890625];
  const avg = 0.5279276315789471;
  const seed = 0;
  let size = fontsize;
  from(str.split(''))
    .pipe(
      map(c => c.charCodeAt(0) < widths.length? widths[c.charCodeAt(0)] : avg),
      reduce((acc, one) => acc + one, seed)
    )
    .subscribe(
      (times: number) => size*=times
    )
  ;
  return size + parseInt(padding.paddingLeft) + parseInt(padding.paddingRight);
}

function triggerNavigationLinkParameters() {
  triggerRef(navigationLinkParameters);
}

function handleSubCategoryOrMoreSubCategoryClicked(
  cSIndex: number | undefined,
  mindex: number,
  url: string | undefined,
  typeClicked: 'MORE-SUBCATEGORY-CLICKED' | 'SUBCATEGORY-CLICKED'
) {
  if(url) {
    if(url === navigationLinkParameters.value.path) {
      navigationLinkParameters.value.currentSubCategoryIndex = cSIndex;
      navigationLinkParameters.value.moreSubCategoriesStartFromIndex = mindex;
      navigationLinkParameters.value.isSubCategoryOrMoreSubCategoryWindowClosed = true;
      navigationLinkParameters.value.typeClicked = typeClicked;
      navigationLinkParameters.value.type = 'CATEGORY';
      triggerNavigationLinkParameters();
    }
    else {
      router.push({path: url});
    }
  }
  else {
    let currentScrollHeight = window.pageYOffset | document.body.scrollTop | window.scrollY;
    navigationLinkParameters.value.currentScrollHeight = navigationLinkParameters.value.typeClicked === ''? 
      currentScrollHeight : 
      (
        !navigationLinkParameters.value.isSubCategoryOrMoreSubCategoryWindowClosed?
          navigationLinkParameters.value.currentScrollHeight
          :
          currentScrollHeight
      )
    ;
    navigationLinkParameters.value.currentSubCategoryIndex = cSIndex;
    navigationLinkParameters.value.moreSubCategoriesStartFromIndex = mindex;
    navigationLinkParameters.value.isSubCategoryOrMoreSubCategoryWindowClosed = false;
    navigationLinkParameters.value.typeClicked = typeClicked;
    navigationLinkParameters.value.type = 'CATEGORY';
    triggerNavigationLinkParameters();
  }
}

function calculateMoreSubCategoriesStartFromIndex(fontsize: number) {
  let t = setInterval(() => {
    thereShouldBeMore.value = false;
    let 
      uldomref1width = (uldomref1.value?.offsetWidth as number), 
      sum = 0, 
      size = 0,
      entered = false
    ;
    if(uldomref1width) {
      if((subcategory.value as ClassifiedNavigationLinksType) !== undefined && Object.keys((subcategory.value as ClassifiedNavigationLinksType)).length > 0) {
        size = Object.keys((subcategory.value as ClassifiedNavigationLinksType)).length - 1;
        for(let i=0; i<=size; i++) {
          sum+=measureText((subcategory.value as ClassifiedNavigationLinksType)[i].name, fontsize, {paddingLeft:'0px',paddingRight:'0px'});
          if(sum >= uldomref1width) {
            size = (i - 1);
            sum-=measureText((subcategory.value as ClassifiedNavigationLinksType)[i].name, fontsize, {paddingLeft:'0px',paddingRight:'0px'});
            entered = true;
            break;
          }
        }
        if(entered) {
          thereShouldBeMore.value = true;
          let 
            morewidth=measureText('More', fontsize, {paddingLeft:'0px',paddingRight:'0px'}) + 17.5,
            done = false
          ;
          if(size < 0) {
            padding.value[0] = {
              paddingLeft: '0px',
              paddingRight: '0px'
            };
            moreSubCategoriesStartFromIndex.value = 0;
            done = true;
          }
          else {
            if(size===0) {
              let pad = (uldomref1width - (sum+morewidth)) / 4;
              if(pad >= 15) {
                moreSubCategoriesStartFromIndex.value = 1;
                padding.value = [
                  {
                    paddingLeft: '0px',
                    paddingRight: pad+'px'
                  },
                  {
                    paddingLeft: pad+'px',
                    paddingRight: '0px'
                  }
                ];
              }
              else {
                padding.value = [
                  {
                    paddingLeft: '0px',
                    paddingRight: '0px'
                  }
                ];
                moreSubCategoriesStartFromIndex.value = 0;
              }
              done = true;
            }
            else {
              do {
                if((sum+morewidth) < uldomref1width) {
                  let pad = (uldomref1width - (sum+morewidth)) / (2*(size+2));
                  if(pad >= 15) {
                    for(let k=0; k<=(size+1); k++) {
                      padding.value[k] = {
                        paddingLeft: pad+'px',
                        paddingRight: pad+'px'
                      };
                    }
                    moreSubCategoriesStartFromIndex.value = size+1;
                    done = true;
                  }
                  else {
                    sum-=(measureText((subcategory.value as ClassifiedNavigationLinksType)[size].name, fontsize, {paddingLeft:'0px',paddingRight:'0px'}) );
                    size-=1;
                    if(size < 0) {
                      padding.value[0] = {
                        paddingLeft: '0px',
                        paddingRight: '0px'
                      };
                      moreSubCategoriesStartFromIndex.value = 0;
                      done = true;
                    }
                  }
                }
                else{
                  sum-=(measureText((subcategory.value as ClassifiedNavigationLinksType)[size].name, fontsize, {paddingLeft:'0px',paddingRight:'0px'}) );
                  size-=1;
                  if(size < 0) {
                    padding.value[0] = {
                      paddingLeft: '0px',
                      paddingRight: '0px'
                    };
                    moreSubCategoriesStartFromIndex.value = 0;
                    done = true;
                  }
                }
              }
              while(done === false);
            }
          }
        }
        else {
          let pad = (uldomref1width - sum) / (2*(size+1));
          if(pad >= 15) {
            for(let k=0; k<=size; k++) {
              padding.value[k] = {
                paddingLeft: pad+'px',
                paddingRight: pad+'px'
              };
            }
            thereShouldBeMore.value = false;
            moreSubCategoriesStartFromIndex.value = size+1;
          }
          else {
            thereShouldBeMore.value = true;
            let 
              morewidth=measureText('More', fontsize, {paddingLeft:'0px',paddingRight:'0px'}) + 17.5,
              done = false
            ;
            do {
              sum-=(measureText((subcategory.value as ClassifiedNavigationLinksType)[size].name, fontsize, {paddingLeft:'0px',paddingRight:'0px'}) );
              size-=1;
              if(size < 0) {
                padding.value[0] = {
                  paddingLeft: '0px',
                  paddingRight: '0px'
                };
                moreSubCategoriesStartFromIndex.value = 0;
                done = true;
              }
              else {
                if((sum+morewidth) < uldomref1width) {
                  let pad = (uldomref1width - (sum+morewidth)) / (2*(size+2));
                  if(pad >= 15) {
                    for(let k=0; k<=(size+1); k++) {
                      padding.value[k] = {
                        paddingLeft: pad+'px',
                        paddingRight: pad+'px'
                      };
                    }
                    moreSubCategoriesStartFromIndex.value = size+1;
                    done = true;
                  }
                }
              }
            }
            while(done === false);
          }
        }
        clearInterval(t);
      }
    }
  }, 5);
}

function findLiDomWidth() {
  calculateMoreSubCategoriesStartFromIndex(16);
  let count = 0;
  let t = setInterval(() => {
    if(thereShouldBeMore.value === false && count === 10 && navigationLinkParameters.value.typeClicked === 'MORE-SUBCATEGORY-CLICKED') {
      navigationLinkParameters.value.isSubCategoryOrMoreSubCategoryWindowClosed = true;
      triggerNavigationLinkParameters();
      clearInterval(t);
    }
    count++;
  }, 10);
}

watch(
  () => navigationLinkParameters.value.index,
  (cIdx) => {
    if(cIdx !== undefined) {
      subcategory.value = links[cIdx].subcategory;
      findLiDomWidth();
    }
  }
);

onUnmounted(() => {
  window.removeEventListener('resize', findLiDomWidth);
})

onMounted(() => {
  thereShouldBeMore.value = false;
  subcategory.value = links[navigationLinkParameters.value.index as number].subcategory;
  findLiDomWidth();
  window.addEventListener('resize', findLiDomWidth);
});

</script>

<template>
  <div class="d-block" style="padding:0 20px;">
    <div 
      class="d-block" 
      style="background-color:#46FF0B;padding:5px;"
    >
      <template v-if="(subcategory as ClassifiedNavigationLinksType) !== undefined && Object.keys((subcategory as ClassifiedNavigationLinksType)).length > 0">
        <ul
          :ref="(el) => uldomref1 = el as HTMLUListElement"
          class="list-style-none p-0 h-100 w-100 m-0 flex-box flex-direction-row flex-nowrap justify-content-center align-items-center"
        >
          <li
            v-for="i in moreSubCategoriesStartFromIndex"
            :key="i+'-SUBCATEGORY'"
            class="text-center"
          >
            <template 
              v-if="'subcategory' in (subcategory as ClassifiedNavigationLinksType)[i-1] && Object.keys((subcategory as ClassifiedNavigationLinksType)[i-1].subcategory as ClassifiedNavigationLinksType).length > 0"
            >
              <a 
                :style="[
                  padding[i-1],
                  (
                    (navigationLinkParameters.currentSubCategoryIndex === (i-1) && navigationLinkParameters.showCollections)
                    ||
                    (navigationLinkParameters.currentSubCategoryIndex === (i-1) && navigationLinkParameters.isSubCategoryOrMoreSubCategoryWindowClosed === false)
                  )? 'background-color:#663600;color:#fff;' : ''
                ]"
                style="font-size:16px;padding-top:0px;padding-bottom:0px;"
                class="sub m-0 text-center underline-none cursor-pointer d-block"
                @click="() => { 
                  handleSubCategoryOrMoreSubCategoryClicked(
                    i-1,
                    moreSubCategoriesStartFromIndex as number,
                    undefined,
                    'SUBCATEGORY-CLICKED'
                  ); 
                }"
              >
                {{ ((subcategory as ClassifiedNavigationLinksType)[i-1].name as string) }}
              </a>
            </template>
            <template v-else>
              <a 
                :style="[
                  padding[i-1],
                  (
                    (navigationLinkParameters.currentSubCategoryIndex === (i-1) && navigationLinkParameters.showCollections)
                    ||
                    (navigationLinkParameters.currentSubCategoryIndex === (i-1) && navigationLinkParameters.isSubCategoryOrMoreSubCategoryWindowClosed === false)
                  )? 'background-color:#663600;color:#fff;' : ''
                ]"
                style="font-size:16px;padding-top:0px;padding-bottom:0px;"
                class="sub m-0 text-center underline-none cursor-pointer d-block"
                @click="() => { 
                  handleSubCategoryOrMoreSubCategoryClicked(
                    i-1,
                    moreSubCategoriesStartFromIndex as number,
                    ((subcategory as ClassifiedNavigationLinksType)[i-1].url as string),
                    'SUBCATEGORY-CLICKED'
                  ); 
                }"
              >
                {{ ((subcategory as ClassifiedNavigationLinksType)[i-1].name as string) }}
              </a>
            </template>
          </li>
          <template v-if="thereShouldBeMore">
            <li
              class="text-center"
            >
              <a 
                @click="() => { 
                  handleSubCategoryOrMoreSubCategoryClicked(
                    ((navigationLinkParameters as NavigationLinkParametersType).currentSubCategoryIndex as number), 
                    moreSubCategoriesStartFromIndex as number,
                    undefined,
                    'MORE-SUBCATEGORY-CLICKED'
                  )
                }"
                :style="padding[moreSubCategoriesStartFromIndex as number]"
                @mousehover="moreSubCategory = true"
                @mouseleave="moreSubCategory = false"
                style="font-size: 16px;padding-top:0px;padding-bottom:0px;"
                class="sub cursor-pointer underline-none flex-box flex-direction-row h-100 w-100 m-0 flex-nowrap justify-content-center align-items-center"
              >
                <span class="flex-grow-0 flex-shrink-0 align-middle">More</span>
                <span class="flex-grow-0 flex-shrink-0" style="padding-left:2.5px;">
                  <img 
                    :src="'http://localhost:5173/src/assets/logos/'+((!moreSubCategory)? 'more-menu.svg' : 'more-menu-hover.svg')" class="align-middle" 
                    style="width:15px;height:15px;" 
                  />
                </span>
              </a>
            </li>
          </template>
        </ul>
      </template>
    </div>
  </div>
</template>

<style scoped>
.sub {
  border-radius: 10px;
  color: black;
}
.sub:hover {
  background-color: #663600; 
  color: #fff;
}
</style>