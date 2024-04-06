<script lang="ts" setup>
import type { ClassifiedNavigationLinksType } from "./types/";
import {ref, onMounted, onUnmounted, inject, watch, type ShallowRef, triggerRef, nextTick, } from "vue";
import { map, reduce, from, } from 'rxjs';
import {useRouter} from "vue-router";

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
  bottom: Boolean;
}>();

const 
  router = useRouter(),
  uldomref = ref<HTMLUListElement>(),
  links = inject('LINKS') as ClassifiedNavigationLinksType
;

let 
  padding = ref<{paddingLeft:string; paddingRight:string;}[]>([]),
  adCampaignLinks = [
    {url: '/link1', name: 'Link 1'},
    {url: '/link2', name: 'Link 2'},
    {url: '/link3', name: 'Link 3'},
    {url: '/link4', name: 'Link 4'},
    {url: '/link5', name: 'Link 5'}
  ],
  moreCategoriesStartFromIndex = ref<number>(0), 
  adCampaignButtonClicked = ref<Boolean>(false), 
  shoppingBagClicked = ref<Boolean>(false),
  openMoreCategories = ref<Boolean>(false),
  moreHover = ref<Boolean>(false),
  thereShouldBeMore = ref<Boolean>(false),
  searchHover = ref<Boolean>(false),
  advertizeHover = ref<Boolean>(false),
  shoppingBagHover = ref<Boolean>(false),
  loginButtonClicked = ref<Boolean>(false), 
  loginButtonHover = ref<Boolean>(false), 
  menuClicked = ref<Boolean>(false), 
  menuHover = ref<Boolean>(false), 
  currentlyClickedName = ref<string>(''),
  moreRef = ref<HTMLAnchorElement>(),
  modalTargetRef = ref<HTMLDivElement>(),
  moreCategoryIndexes = ref<number[]>([]),
  left = ref<number>(0),
  navigationLinkParameters = inject('NAVIGATION-LINK-PARAMETERS') as ShallowRef<NavigationLinkParametersType>
;

function openLink(url: string | undefined) {
  if(url !== undefined) {
    router.push({path: url});
  }
}

function getMoreCategoryIndexes() {
  moreCategoryIndexes.value = [];
  for(let i=(moreCategoriesStartFromIndex.value as number); i<Object.keys(links as ClassifiedNavigationLinksType).length; i++) {
    moreCategoryIndexes.value.push(i);
  }
}

function removeBodyScroll() {
  document.body.style.overflow = 'hidden';
}

function addBodyScroll() {
  document.body.style.overflow = 'visible';
}

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

function calculateMoreCategoriesStartFromIndex(fontsize: number) {
  let t = setInterval(() => {
    thereShouldBeMore.value = false;
    let 
      uldomrefwidth = (uldomref.value?.offsetWidth as number), 
      sum = 0, 
      size = 0,
      entered = false
    ;
    if(uldomrefwidth) {
      if((links as ClassifiedNavigationLinksType) !== undefined && Object.keys((links as ClassifiedNavigationLinksType)).length > 0) {
        size = Object.keys((links as ClassifiedNavigationLinksType)).length - 1;
        for(let i=0; i<=size; i++) {
          sum+=(measureText((links as ClassifiedNavigationLinksType)[i].name, fontsize, {paddingLeft:'0px',paddingRight:'0px'}) + 20);
          if(sum >= uldomrefwidth) {
            size = (i - 1);
            sum-=(measureText((links as ClassifiedNavigationLinksType)[i].name, fontsize, {paddingLeft:'0px',paddingRight:'0px'}) + 20);
            entered = true;
            break;
          }
        }
        if(entered) {
          thereShouldBeMore.value = true;
          let 
            morewidth=measureText('More', fontsize, {paddingLeft:'0px',paddingRight:'0px'}) + 55,
            done = false
          ;
          if(size < 0) {
            padding.value[0] = {
              paddingLeft: '0px',
              paddingRight: '0px'
            };
            moreCategoriesStartFromIndex.value = 0;
            done = true;
          }
          else {
            if(size===0) {
              let pad = (uldomrefwidth - (sum+morewidth)) / 4;
              if(pad >= 5) {
                moreCategoriesStartFromIndex.value = 1;
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
                moreCategoriesStartFromIndex.value = 0;
              }
              done = true;
            }
            else {
              do {
                if((sum+morewidth) < uldomrefwidth) {
                  let pad = (uldomrefwidth - (sum+morewidth)) / (2*(size+2));
                  if(pad >= 5) {
                    for(let k=0; k<=(size+1); k++) {
                      if(k===0){
                        padding.value[k] = {
                          paddingLeft: '0px',
                          paddingRight: pad+'px'
                        };
                      }
                      else if(k===(size+1)) {
                        padding.value[k] = {
                          paddingLeft: pad+'px',
                          paddingRight: '0px'
                        };
                      }
                      else {
                        padding.value[k] = {
                          paddingLeft: pad+'px',
                          paddingRight: pad+'px'
                        };
                      }
                    }
                    moreCategoriesStartFromIndex.value = size+1;
                    done = true;
                  }
                  else {
                    sum-=(measureText((links as ClassifiedNavigationLinksType)[size].name, fontsize, {paddingLeft:'0px',paddingRight:'0px'}) + 20);
                    size-=1;
                    if(size < 0) {
                      padding.value[0] = {
                        paddingLeft: '0px',
                        paddingRight: '0px'
                      };
                      moreCategoriesStartFromIndex.value = 0;
                      done = true;
                    }
                  }
                }
                else{
                  sum-=(measureText((links as ClassifiedNavigationLinksType)[size].name, fontsize, {paddingLeft:'0px',paddingRight:'0px'}) + 20);
                  size-=1;
                  if(size < 0) {
                    padding.value[0] = {
                      paddingLeft: '0px',
                      paddingRight: '0px'
                    };
                    moreCategoriesStartFromIndex.value = 0;
                    done = true;
                  }
                }
              }
              while(done === false);
            }
          }
        }
        else {
          let pad = (uldomrefwidth - sum) / (2*(size+1));
          if(pad >= 5) {
            for(let k=0; k<=size; k++) {
              if(k===0) {
                padding.value[k] = {
                  paddingLeft: '0px',
                  paddingRight: pad+'px'
                };
              }
              else if(k === size) {
                padding.value[k] = {
                  paddingLeft: pad+'px',
                  paddingRight: '0px'
                };
              }
              else {
                padding.value[k] = {
                  paddingLeft: pad+'px',
                  paddingRight: pad+'px'
                };
              }
            }
            thereShouldBeMore.value = false;
            moreCategoriesStartFromIndex.value = size+1;
          }
          else {
            thereShouldBeMore.value = true;
            let 
              morewidth=measureText('More', fontsize, {paddingLeft:'0px',paddingRight:'0px'}) + 55,
              done = false
            ;
            do {
              sum-=(measureText((links as ClassifiedNavigationLinksType)[size].name, fontsize, {paddingLeft:'0px',paddingRight:'0px'}) + 20);
              size-=1;
              if(size < 0) {
                padding.value[0] = {
                  paddingLeft: '0px',
                  paddingRight: '0px'
                };
                moreCategoriesStartFromIndex.value = 0;
                done = true;
              }
              else {
                if((sum+morewidth) < uldomrefwidth) {
                  let pad = (uldomrefwidth - (sum+morewidth)) / (2*(size+2));
                  if(pad >= 5) {
                    for(let k=0; k<=(size+1); k++) {
                      if(k===0){
                        padding.value[k] = {
                          paddingLeft: '0px',
                          paddingRight: pad+'px'
                        };
                      }
                      else if(k===(size+1)) {
                        padding.value[k] = {
                          paddingLeft: pad+'px',
                          paddingRight: '0px'
                        };
                      }
                      else {
                        padding.value[k] = {
                          paddingLeft: pad+'px',
                          paddingRight: pad+'px'
                        };
                      }
                    }
                    moreCategoriesStartFromIndex.value = size+1;
                    done = true;
                  }
                }
              }
            }
            while(done === false);
          }
        }
        getMoreCategoryIndexes();
        if(openMoreCategories.value) {
          findModalPosition();
        }
        clearInterval(t);
      }
    }
  }, 5);
}

function findModalPosition() {
  calculateMoreCategoriesStartFromIndex(16);
  if((moreRef.value?.offsetLeft as number) && openMoreCategories.value) {
    left.value = (moreRef.value?.offsetLeft as number) - ((measureText('more', 16, {paddingLeft: '0px', paddingRight: '0px'}) + 35) / 2) - (((moreRef.value?.offsetLeft as number) > 80)? 80 : 0);
  }
  /*else {
    calculateMoreCategoriesStartFromIndex(16);
  }*/
}

function handleClickOutside(evt: Event) {
  if(openMoreCategories.value) {
    if(modalTargetRef.value && moreRef.value && (evt.target as Node)) {
      const targetElement1 = modalTargetRef.value as HTMLDivElement;
      const targetElement2 = moreRef.value as HTMLAnchorElement;
      if (!targetElement1.contains(evt.target as Node) && !targetElement2.contains(evt.target as Node)) {
        openMoreCategories.value = false;
        addBodyScroll();
      }
    }
  }
}

watch(
  () => navigationLinkParameters.value.name,
  (newButtonName) => {
    currentlyClickedName.value = newButtonName.toUpperCase()+'-TRIPLE-D-AND-J';
  }
);

/*watch(
  () => openMoreCategories.value,
  (x) => {
    if(!x) {
      calculateMoreCategoriesStartFromIndex(16);
    }
  }
);*/

onUnmounted(() => {
  window.removeEventListener('resize', findModalPosition);
  window.removeEventListener('click', handleClickOutside);
}),

onMounted(() => {
  currentlyClickedName.value = navigationLinkParameters.value.name.toUpperCase()+'-TRIPLE-D-AND-J';
  findModalPosition();
  window.addEventListener('click', handleClickOutside);
  window.addEventListener('resize', findModalPosition);
});

</script>

<template>
  <div class="flex-box flex-direction-row w-100 p-0 m-0 flex-nowrap justify-content-start align-items-center">
    <div :style="bottom?'width:100%;' : 'width:50%;'" class="p-0 m-0 align-self-stretch">
      <template v-if="!bottom">
        <div id="company-name-sm" class="w-100 p-0 m-0 text-left">
          <img 
            src="http://localhost:5173/src/assets/logos/company-name-sm.svg" 
          />
        </div>
      </template>
      <div :id="bottom?'':'left-nav-links'" class="flex-box flex-direction-row w-100 p-0 m-0 flex-nowrap justify-content-start align-items-center">
        <div class="w-100 m-0 p-0">
          <ul
            :ref="(el) => uldomref = el as HTMLUListElement"
            class="list-style-none flex-box flex-direction-row w-100 p-0 m-0 flex-nowrap justify-content-start align-items-center"
          >
            <li 
              :style="padding[i-1]"
              class="flex-shrink-0 flex-grow-0 m-0" 
              v-for="i in moreCategoriesStartFromIndex" 
              :key="i+'-CLASSIFIED-NAVIGATION-LINK'"
            >
              <a
                class="cursor-pointer link underline-none d-block m-0"
                @click="() => {
                  openLink(links[i-1].url);
                }" 
                style="font-size:16px;padding:10px;border-radius:10px;"
                :style="currentlyClickedName === (links[i-1].name.toUpperCase()+'-TRIPLE-D-AND-J')? 'color:black;background-color:#46FF0B;' : 'color:white;'"
              >
                {{ links[i-1].name }}
              </a>
            </li>
            <template v-if="thereShouldBeMore">
              <li 
                class="flex-shrink-0 flex-grow-0"
                :style="padding[moreCategoriesStartFromIndex]"
              >
                <a 
                  :ref="(el) => moreRef = el as HTMLAnchorElement"
                  @mouseover="moreHover = true"
                  @mouseleave="moreHover = false"
                  class="link underline-none cursor-pointer flex-box flex-direction-row w-100 m-0 flex-nowrap justify-content-center align-items-center" 
                  @click="() => { openMoreCategories = true; findModalPosition(); removeBodyScroll(); }" 
                  style="font-size:16px;padding:10px;border-radius:10px;"
                  :style="openMoreCategories?'color:black;background-color:#46FF0B;' : 'color:white;'"
                >
                  <span class="flex-shrink-0 flex-grow-0 m-0" style="padding-right:10px;">
                    <img 
                      :src="'http://localhost:5173/src/assets/logos/'+((moreHover || openMoreCategories)? 'categories-hover.svg' : 'categories.svg')" 
                      class="align-middle" 
                      style="width:25px;height:25px;" 
                    />
                  </span>
                  <span class="flex-shrink-0 flex-grow-0">More</span>
                </a>
                <Teleport to="body">
                  <div v-if="openMoreCategories" class="modal-mask">
                    <div class="modal-wrapper">
                      <div 
                        :style="bottom? 'padding: 80px 0;' : 'padding: 80px 0px 80px '+(left+ 'px;')"
                        class="scrollable w-100 h-100 t-0 r-0"
                        style="background-color:transparent;"
                      >
                        <div 
                          :ref="(el) => modalTargetRef = el as HTMLDivElement"
                          class="h-auto modal-container"
                          style="width:320px;"
                        >
                          <ul class="list-style-none flex-box flex-direction-row flex-wrap w-100 p-0 m-0 justify-content-start">
                            <li 
                              v-for="i in moreCategoryIndexes.length"
                              :key="i+'-MORE-CATEGORY-INDEX'"
                              class="w-100 flex-shrink-0 flex-grow-0"
                            >
                              <a
                                class="link underline-none d-block m-0 cursor-pointer"
                                @click="() => {
                                  openLink(links[moreCategoryIndexes[(i-1)]].url);
                                  nextTick(() => {
                                    openMoreCategories = false; 
                                    addBodyScroll();
                                  });
                                }
                                " 
                                style="font-size:16px;padding:10px;color:black;"
                                :style="currentlyClickedName === (links[moreCategoryIndexes[(i-1)]].name.toUpperCase()+'-TRIPLE-D-AND-J')? 'background-color:#46FF0B;' : ''"
                              >
                                {{ links[moreCategoryIndexes[(i-1)]].name }}
                              </a>
                            </li>
                          </ul>
                        </div> 
                      </div>
                    </div>
                  </div>
                </Teleport>
              </li>
            </template>
          </ul>
        </div>
      </div>
    </div>
    <template v-if="!bottom">
      <div style="width:50%;" class="align-self-stretch h-100">
        <ul
          class="list-style-none flex-box flex-direction-row w-100 p-0 m-0 flex-nowrap justify-content-end align-items-center"
        >
          <li
            class="flex-shrink-0 flex-grow-0 m-0 right-nav-links-lg"
            style="padding-left:0px;padding-right:15px;font-size:16px;"
          >
            <a
              @click="() => {
                openLink('/search');
              }
              "
              @mouseover="searchHover = true" 
              @mouseleave="searchHover = false"
              class="cursor-pointer link underline-none flex-box flex-direction-row w-100 m-0 flex-nowrap justify-content-center align-items-center" 
              style="padding:10px;border-radius:10px;"
              :style="(currentlyClickedName === 'SEARCH-TRIPLE-D-AND-J')?'color:black;background-color:#46FF0B;' : 'color:white;'"
            >
              <img 
                :src="'http://localhost:5173/src/assets/logos/'+((searchHover || currentlyClickedName === 'SEARCH-TRIPLE-D-AND-J')?'search-hover.svg':'search.svg')" 
                class="align-middle" 
                style="width: 20px;height: 20px;" 
              />
              <span style="padding-left: 10px;">Search</span>
            </a>
          </li>
          <li
            class="flex-shrink-0 flex-grow-0 m-0"
            style="padding-left:0px; padding-right:15px;font-size: 16px;"
          >
            <a 
              @click="() => { loginButtonClicked = true; removeBodyScroll(); }"
              class="cursor-pointer link underline-none m-0 right-nav-links-lg"
              style="padding:10px;border-radius:10px;"
              :style="loginButtonClicked?'color:black;background-color:#46FF0B;' : 'color:white;'"
            >
              Login
            </a>
            <a 
              :style="loginButtonClicked?'background-color:#46FF0B;' : ''" 
              @mouseover="loginButtonHover = true" 
              @mouseleave="loginButtonHover = false" 
              @click="() => { loginButtonClicked = true; removeBodyScroll(); }" 
              style="padding:10px;border-radius:10px;" 
              class="cursor-pointer link underline-none m-0 right-nav-links-sm"
            >
              <img 
                :src="'http://localhost:5173/src/assets/logos/'+((loginButtonHover || loginButtonClicked)?'person-hover.svg':'person.svg')" 
                class="align-middle imglink" 
                style="width:20px;height:20px;" 
              />
            </a>
            <Teleport to="body">
              <Transition name="slide">
                <div 
                  v-if="loginButtonClicked" 
                  class="modal-mask" 
                >
                  <div class="modal-wrapper">
                    <div class="scrollable h-100 t-0" style="width:550px;right:0">
                      <div class="modal-container h-auto w-100">
                        <p>Hello from the modal!</p>
                        <button @click="() => { loginButtonClicked = false; addBodyScroll(); }">Close</button>
                      </div>
                    </div>
                  </div>
                </div>
              </Transition>
            </Teleport>
          </li>
          <li
            class="flex-shrink-0 flex-grow-0 m-0"
            style="padding-left:0px;padding-right:15px;font-size: 16px;"
          >
            <template v-if="adCampaignLinks.length > 0">
              <a 
                @mouseover="advertizeHover = true" 
                @mouseleave="advertizeHover = false" 
                class="link cursor-pointer underline-none d-block m-0" 
                @click="()=>{ adCampaignButtonClicked = true; removeBodyScroll(); }" 
                style="padding:10px;border-radius:10px;"
                :style="adCampaignButtonClicked?'background-color:#46FF0B;' : ''"
              >
                <img 
                  :src="'http://localhost:5173/src/assets/logos/'+((advertizeHover || adCampaignButtonClicked)?'advertising-hover.svg':'advertising.svg')" 
                  class="align-middle imglink" 
                  style="width: 20px; height: 20px;" 
                />
              </a>
              <Teleport to="body">
                <Transition name="slide">
                  <div 
                    v-if="adCampaignButtonClicked" 
                    class="modal-mask" 
                  >
                    <div class="modal-wrapper">
                      <div class="scrollable h-100 t-0" style="width:550px;right:0">
                        <div class="modal-container h-auto w-100">
                          <div class="d-block">
                            <button @click="() => { adCampaignButtonClicked = false; addBodyScroll(); }">Close</button>
                          </div>
                          <div class="d-block">
                            <ul class="list-style-none">
                              <li 
                                v-for="(adLink, i) in adCampaignLinks" 
                                :key="i+'-LINK-ON-OTHERS-ON-THE-SAME-LINE-WITH-CLASSIFIED-NAVIGATION-LINKS'"
                                style="padding:2px;"
                              >
                                <a 
                                  class="d-block underline-none m-0" 
                                  style="padding:10px;"
                                  :style="currentlyClickedName === (adLink.name.toUpperCase()+'-TRIPLE-D-AND-J') && !loginButtonClicked && !openMoreCategories && !shoppingBagClicked? 'color:black;background-color:#46FF0B;' : 'color:white;'"
                                  @click="() => {
                                    openLink(adLink.url);
                                    nextTick(() => {
                                      adCampaignButtonClicked = false;
                                      addBodyScroll();
                                    });
                                  }"
                                >{{ 
                                  adLink.name 
                                }}</a>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </Transition>
              </Teleport>
            </template>
          </li>
          <li
            class="flex-shrink-0 flex-grow-0 m-0"
            style="padding-left:0px; padding-right:0px;font-size: 16px;"
          >
            <a 
              :style="shoppingBagClicked?'background-color:#46FF0B;' : ''" 
              @mouseover="shoppingBagHover = true" 
              @mouseleave="shoppingBagHover = false" 
              @click="()=>{ shoppingBagClicked = true; removeBodyScroll(); }" 
              style="padding:10px;border-radius:10px;" 
              class="cursor-pointer link underline-none d-block m-0"
            >
              <img 
                :src="'http://localhost:5173/src/assets/logos/'+((shoppingBagHover || shoppingBagClicked)?'bag-hover.svg':'bag.svg')" 
                class="align-middle imglink" 
                style="width: 20px; height: 20px;" 
              />
            </a>
            <Teleport to="body">
              <Transition name="slide">
                <div 
                  v-if="shoppingBagClicked" 
                  class="modal-mask" 
                >
                  <div class="modal-wrapper">
                    <div class="scrollable h-100 t-0" style="width:550px;right:0">
                      <div class="modal-container h-auto w-100">
                        <p>Hello from the modal!</p>
                        <button @click="() => { shoppingBagClicked = false; addBodyScroll(); }">Close</button>
                        <p>Hello from the modal!</p>
                        <button @click="shoppingBagClicked = false">Close</button>
                        <p>Hello from the modal!</p>
                        <button @click="shoppingBagClicked = false">Close</button>
                        <p>Hello from the modal!</p>
                        <button @click="shoppingBagClicked = false">Close</button>
                        <p>Hello from the modal!</p>
                        <button @click="shoppingBagClicked = false">Close</button>
                        <p>Hello from the modal!</p>
                        <button @click="shoppingBagClicked = false">Close</button>
                        <p>Hello from the modal!</p>
                        <button @click="shoppingBagClicked = false">Close</button>
                      </div>
                    </div>
                  </div>
                </div>
              </Transition>
            </Teleport>
          </li>
          <li
            class="flex-shrink-0 flex-grow-0 m-0 right-nav-links-sm"
            style="padding-left:15px; padding-right:0px;font-size: 16px;"
          >
            <a 
              :style="menuClicked?'background-color:#46FF0B;' : ''" 
              @mouseover="menuHover = true" 
              @mouseleave="menuHover = false" 
              @click="()=>{ menuClicked = true; removeBodyScroll(); }" 
              style="padding:10px;border-radius:10px;" 
              class="cursor-pointer link underline-none d-block m-0"
            >
              <img 
                :src="'http://localhost:5173/src/assets/logos/'+((menuHover || menuClicked)?'menu-hover.svg':'menu.svg')" 
                class="align-middle imglink" 
                style="width: 20px; height: 20px;" 
              />
            </a>
            <Teleport to="body">
              <Transition name="slide">
                <div 
                  v-if="menuClicked" 
                  class="modal-mask" 
                >
                  <div class="modal-wrapper">
                    <div class="scrollable h-100 t-0" style="width:550px;right:0">
                      <div class="modal-container h-auto w-100">
                        <p>Hello from the modal!</p>
                        <button @click="menuClicked = false">Close</button>
                        <p>Hello from the modal!</p>
                        <button @click="menuClicked = false">Close</button>
                        <p>Hello from the modal!</p>
                        <button @click="menuClicked = false">Close</button>
                        <p>Hello from the modal!</p>
                        <button @click="menuClicked = false">Close</button>
                        <p>Hello from the modal!</p>
                        <button @click="menuClicked = false">Close</button>
                        <p>Hello from the modal!</p>
                        <button @click="menuClicked = false">Close</button>
                      </div>
                    </div>
                  </div>
                </div>
              </Transition>
            </Teleport>
          </li>
        </ul>
      </div>
    </template>
  </div>
</template>

<style scoped>
.slide-enter-active {
  transition: all 0.3s ease-out;
}

.slide-leave-active {
  transition: all 0.3s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-enter-from,
.slide-leave-to {
  transform: translateX(100%);
  -webkit-transform: translateX(100%);
}

.link:hover {
  color: black !important;
  background-color: #46FF0B;
}
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
@media only screen and (max-width: 991px) {
  #company-name-sm, .right-nav-links-sm {
    display: block;
  }
  #left-nav-links, .right-nav-links-lg {
    display: none;
  }
}
@media only screen and (min-width: 990px) {
  #company-name-sm, .right-nav-links-sm {
    display: none;
  }
  #left-nav-links, .right-nav-links-lg {
    display: block;
  }
}
</style>