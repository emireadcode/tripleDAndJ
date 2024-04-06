<script setup lang="ts">
import type { ClassifiedNavigationLinksType, NewCategoryOrSubCategoryDetailsType, } from "./types/";
import DisplayError from "./DisplayError.vue";
import {inject, type ShallowRef, triggerRef, onMounted, } from "vue";
import {
  errorCheckerStyle,
  addNewCategoryOrSubCategoryDetails,
  removeUnEnteredCategory,
} from "./utility/";

const props = defineProps<{
  i?: number | undefined;
  j?: number | undefined;
  k?: number | undefined;
  l?: number | undefined;
}>();

let
  newCategoryOrSubCategory = inject('NEW-CATEGORY-OR-SUBCATEGORY') as ShallowRef<NewCategoryOrSubCategoryDetailsType>, 
  categoryAndOrSubCategory = inject('CATEGORY-AND-OR-SUBCATEGORY') as ShallowRef<ClassifiedNavigationLinksType>
;

function categoryAndOrSubCategoryObj(i?: number | undefined, j?: number | undefined, k?: number | undefined, l?: number | undefined) {
  if(j===undefined && k===undefined && l===undefined) {
    return (
      (
        categoryAndOrSubCategory.value as ClassifiedNavigationLinksType
      )[((i as number)-1)] as ClassifiedNavigationLinksType[number]
    );
  }
  else {
    if(k===undefined && l===undefined) {
      return (
        (
          (
            (
              categoryAndOrSubCategory.value as ClassifiedNavigationLinksType
            )[((i as number)-1)] as ClassifiedNavigationLinksType[number]
          ).subcategory as ClassifiedNavigationLinksType
        )[((j as number)-1)] as ClassifiedNavigationLinksType[number]
      );
    }
    else {
      if(l===undefined) {
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
        );
      }
      else {
        return (
          (
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
            ).subcategory as ClassifiedNavigationLinksType
          )[((l as number)-1)] as ClassifiedNavigationLinksType[number]
        );
      }
    }
  }
}

function triggerNewCategoryOrSubCategoryDetails() {
    triggerRef(newCategoryOrSubCategory);
  }
function triggerCategoryAndOrSubCategory() {
    triggerRef(categoryAndOrSubCategory);
  }

function localRemoveUnEnteredCategory(i: number, j: number | undefined, k: number | undefined, l: number | undefined, level: 'FIRST' | 'SECOND' | 'THIRD' | 'FOURTH') {
  removeUnEnteredCategory(i, j, k, l, level, categoryAndOrSubCategory);
  triggerCategoryAndOrSubCategory();
}
  
function localAddNewCategoryOrSubCategoryDetails(i: number, j: number | undefined, k: number | undefined, l: number | undefined, level: 'FIRST' | 'SECOND' | 'THIRD' | 'FOURTH') {
  addNewCategoryOrSubCategoryDetails(i, j, k, l, level, newCategoryOrSubCategory, categoryAndOrSubCategory);
  triggerNewCategoryOrSubCategoryDetails();
  triggerCategoryAndOrSubCategory();
}

function localErrorCheckerStyle(key: 'URL-PATH' | 'COVER-PHOTO' | 'CATEGORY') {
  return errorCheckerStyle(key, newCategoryOrSubCategory);
}

onMounted(() => {
  newCategoryOrSubCategory.value = {
    level: (props.j===undefined && props.k===undefined && props.l===undefined)?
      'FIRST'
      : (
        (props.k===undefined && props.l===undefined)?
        'SECOND'
        : (
          (props.l===undefined)?
          'THIRD'
          :
          'FOURTH'
        )
      ),
    name: categoryAndOrSubCategoryObj(
      props.i, props.j, props.k, props.l
    ).name,
    extraname: categoryAndOrSubCategoryObj(
      props.i, props.j, props.k, props.l
    ).extraname as string,
    nameRef: null,
    directlinkornot: categoryAndOrSubCategoryObj(
      props.i, props.j, props.k, props.l
    ).isdirectlink? 'YES' : 'NO',
    error: {
      checker: [],
      message: ''
    },
    errorRef: null,
    coverPhoto: {
      src: '',
      error: '',
      srcErrorRef: null,
      fileOutputRef: null,
      file: null,
      fileInputRef: null,
      name: ''
    },
    urlPath: '',
    urlPathRef: null
  };
  triggerRef(newCategoryOrSubCategory);
})

</script>

<template>
  <form @submit.prevent="">
    <template v-if="newCategoryOrSubCategory.error.checker.length > 0">
      <div 
        class="d-block" 
        :ref="(el) => newCategoryOrSubCategory.errorRef = el as HTMLDivElement" 
      >
        <DisplayError 
          @error:close="() => {
            newCategoryOrSubCategory.error.message = ''; 
            newCategoryOrSubCategory.error.checker=[]; 
            triggerNewCategoryOrSubCategoryDetails(); 
          }" 
          :bottom="'15px'" 
          :error="newCategoryOrSubCategory.error.message" 
        ></DisplayError>
      </div>
    </template>
    <div class="d-block" style="padding-bottom:15px;">
      <label 
        :ref="(el) => newCategoryOrSubCategory.nameRef = el as HTMLLabelElement"
        for="categoryorsubcategoryname"
      >
        {{ 
          (i===undefined || (i && j===undefined))? 'Category' : 'Subcategory'
        }}:
      </label>
      <input 
        id="categoryorsubcategoryname" 
        type="text" 
        :style="localErrorCheckerStyle('CATEGORY')" 
        v-model="newCategoryOrSubCategory.name" 
        @input="triggerNewCategoryOrSubCategoryDetails()" 
        style="height:40px;border:1px solid #663600;" 
        class="w-100" 
      />
    </div>
    <template v-if="l === undefined">
      <div class="d-block" style="padding-bottom:15px;">
        <div class="d-block" style="padding-bottom:7.5px;">Is this going to be a direct link to collection of products?</div>
        <div class="flex-box flex-direction-row flex-nowrap align-items-start justify-content-start m-0 p-0 w-100">
          <div style="width:50%;padding-right:5px;" class="align-self-stretch">
            <input @change="triggerNewCategoryOrSubCategoryDetails()" id="yesdirectlink" type="radio" name="directlinkornot" style="width:30px;height:30px;" value="YES" v-model="newCategoryOrSubCategory.directlinkornot"  />
            <label for="yesdirectlink">Yes, this subcategory will be a direct link to collection of products</label>
          </div>
          <div style="width:50%;padding-left:5px;">
            <input @change="triggerNewCategoryOrSubCategoryDetails(); newCategoryOrSubCategory.urlPath='';" id="nohassubcategories" type="radio" name="directlinkornot" style="width:30px;height:30px;" value="NO" v-model="newCategoryOrSubCategory.directlinkornot" />
            <label for="nohassubcategories">No, this subcategory will have one or more subcategories</label>
          </div>
        </div>
      </div>
      <template v-if="i===undefined || (i && j===undefined)">
        <div class="d-block" style="padding-bottom:15px;">
          <label 
            :ref="(el) => newCategoryOrSubCategory.nameRef = el as HTMLLabelElement"
            for="categoryorcollectionurlpath" 
          >
            URL Path:
          </label>
          <input 
            type="text" 
            id="categoryorcollectionurlpath" 
            name="categoryorcollectionurlpath" 
            v-model="newCategoryOrSubCategory.urlPath" 
            @input="triggerNewCategoryOrSubCategoryDetails()" 
            style="height:40px;border:1px solid #663600;" 
            class="w-100" 
            :style="localErrorCheckerStyle('URL-PATH')" 
            readonly
          />
        </div>
      </template>
      <template v-else>
        <div class="d-block" style="padding-bottom:15px;">
          <fieldset>
            <legend>If Yes</legend>
            <div class="d-block" style="padding:10px 0;">
              <label for="categoryorcollectionurlpath">URL Path:</label>
              <input 
                type="text" 
                id="categoryorcollectionurlpath"
                name="categoryorcollectionurlpath"
                v-model="newCategoryOrSubCategory.urlPath" 
                @input="triggerNewCategoryOrSubCategoryDetails()" 
                style="height:40px;border:1px solid #663600;" 
                class="w-100" 
                :style="localErrorCheckerStyle('URL-PATH')" 
                :disabled="newCategoryOrSubCategory.directlinkornot === 'NO'? true : false"
                readonly
              />
            </div>
          </fieldset>
        </div>
      </template>
    </template>
    <template v-else>
      <div class="d-block" style="padding-bottom:15px;">
        <label 
          :ref="(el) => newCategoryOrSubCategory.nameRef = el as HTMLLabelElement"
          for="categoryorcollectionurlpath" 
        >
          URL Path:
        </label>
        <input 
          type="text" 
          id="categoryorcollectionurlpath" 
          name="categoryorcollectionurlpath" 
          v-model="newCategoryOrSubCategory.urlPath" 
          @input="triggerNewCategoryOrSubCategoryDetails()" 
          style="height:40px;border:1px solid #663600;" 
          class="w-100" 
          :style="localErrorCheckerStyle('URL-PATH')" 
          readonly
        />
      </div>
    </template>
    <template v-if="k !== undefined">
      <div class="d-block" style="padding-bottom:15px;">
        <label 
          for="categoryorsubcategoryname"
        >
          Extra Name:
        </label>
        <input 
          id="categoryorsubcategoryname" 
          type="text" 
          v-model="newCategoryOrSubCategory.extraname" 
          @input="triggerNewCategoryOrSubCategoryDetails()" 
          style="height:40px;border:1px solid #663600;" 
          class="w-100" 
        />
        <span class="d-block" style="font-size:12px;">example: updated, exclusive, new, etc.</span>
      </div>
    </template>
    <slot name="uploadCoverPhoto"></slot>
    <div style="padding:15px 0 0 0;" class="flex-box flex-direction-row flex-nowrap align-items-center justify-content-start m-0 w-100">
      <div style="padding-right:3px;width:50%;">
        <button 
          class="w-100" 
          type="button"
          @click="
            (j===undefined && k===undefined && l===undefined)?
            localAddNewCategoryOrSubCategoryDetails(
              ((i as number)-1),
              undefined,
              undefined,
              undefined,
              'FIRST'
            )
            :
            (
              (k===undefined && l===undefined)?
              localAddNewCategoryOrSubCategoryDetails(
                ((i as number)-1),
                ((j as number)-1),
                undefined,
                undefined,
                'SECOND'
              )
              :
              (
                (l===undefined)?
                localAddNewCategoryOrSubCategoryDetails(
                  ((i as number)-1),
                  ((j as number)-1),
                  ((k as number)-1),
                  undefined,
                  'THIRD'
                )
                :
                localAddNewCategoryOrSubCategoryDetails(
                  ((i as number)-1),
                  ((j as number)-1),
                  ((k as number)-1),
                  ((l as number)-1),
                  'FOURTH'
                )
              )
            )
          "
        >
          Update
        </button>
      </div>
      <div style="padding-left:3px;width:50%;">
        <button 
          class="w-100" 
          style="background-color:red;color:#fff;" 
          type="button"
          @click="
            (j===undefined && k===undefined && l===undefined)?
            localRemoveUnEnteredCategory(
              ((i as number)-1),
              undefined,
              undefined,
              undefined,
              'FIRST'
            )
            :
            (
              (k===undefined && l===undefined)?
              localRemoveUnEnteredCategory(
                ((i as number)-1),
                ((j as number)-1),
                undefined,
                undefined,
                'SECOND'
              )
              : 
              (
                (l===undefined)?
                localRemoveUnEnteredCategory(
                  ((i as number)-1),
                  ((j as number)-1),
                  ((k as number)-1),
                  undefined,
                  'THIRD'
                )
                :
                localRemoveUnEnteredCategory(
                  ((i as number)-1),
                  ((j as number)-1),
                  ((k as number)-1),
                  ((l as number)-1),
                  'FOURTH'
                )
              )
            )
          "
        >
          Cancel
        </button>
      </div>
    </div>
  </form>
</template>