import { triggerRef, type ShallowRef, } from "vue";
import type { KeysOfClassifiedNavigationLinksType, ClassifiedNavigationLinksType, NewCategoryOrSubCategoryDetailsType, } from "../types/";

export function errorCheckerStyle(key: 'URL-PATH' | 'COVER-PHOTO' | 'CATEGORY', newCategoryOrSubCategory: ShallowRef<NewCategoryOrSubCategoryDetailsType>) {
  return (newCategoryOrSubCategory.value.error.checker.includes(key))? 'background-color:#ed5249;' : '';
} 

export function openEditShowOrAddCollections(newCategoryOrSubCategory: ShallowRef<NewCategoryOrSubCategoryDetailsType>, categoryAndOrSubCategory: ShallowRef<ClassifiedNavigationLinksType>, buttonType: 'isClickedShowImageLink' | 'isClickedAddImageLink' | 'isClickedEdit' | 'isClickedShowCollections' | 'isClickedAddCollections', i?: number | undefined, j?: number | undefined, k?: number | undefined, l?: number | undefined) {
  collapseAnyExpandButtonAndFormExceptTheOneClicked(
    buttonType === 'isClickedEdit'?
    'EDIT-FORM'
    :
    (
      buttonType === 'isClickedAddImageLink'?
      'ADD-IMAGE-LINK'
      : (
        buttonType === 'isClickedShowImageLink'?
        'SHOW-IMAGE-LINK'
        : (
          buttonType === 'isClickedAddCollections'?
          'ADD-PRODUCT-FORM'
          :
          'SHOW-PRODUCT-MODAL'
        )
      )
    ),
    categoryAndOrSubCategory,
    (i !== undefined)? ((i as number) - 1) : i,
    (j !== undefined)? ((j as number) - 1) : j,
    (k !== undefined)? ((k as number) - 1) : k,
    (l !== undefined)? ((l as number) - 1) : l
  );
  (j===undefined && k===undefined && l===undefined)?
  assignPropsOfCategoryAndOrSubCategory(
    buttonType,
    true,
    categoryAndOrSubCategory,
    ((i as number) - 1)
  )
  :
  (
    (k===undefined && l===undefined)?
    assignPropsOfCategoryAndOrSubCategory(
      buttonType,
      true,
      categoryAndOrSubCategory,
      (i as number) - 1,
      (j as number) - 1
    )
    :
    (
      (l===undefined)?
      assignPropsOfCategoryAndOrSubCategory(
        buttonType,
        true,
        categoryAndOrSubCategory,
        (i as number) - 1,
        (j as number) - 1,
        (k as number) - 1
      )
      :
      assignPropsOfCategoryAndOrSubCategory(
        buttonType,
        true,
        categoryAndOrSubCategory,
        (i as number) - 1,
        (j as number) - 1,
        (k as number) - 1,
        (l as number) - 1
      )
    )
  );
  triggerRef(categoryAndOrSubCategory);
  const t = setInterval(() => {
    if(buttonType === 'isClickedEdit') {
      if(newCategoryOrSubCategory.value.nameRef) {
        scrollToElement(
          newCategoryOrSubCategory.value.nameRef, 
          (k===undefined && l===undefined)?
          0
          : (
            l===undefined?
            1
            :
            2
          )
        );
        clearInterval(t);
      }
    }
    else {
      clearInterval(t);
    }
  }, 200);
}

function subCategoryInCategoryAndOrSubCategoryTypeGuard(categoryAndOrSubCategory: ShallowRef<ClassifiedNavigationLinksType>, i: number, j?: number | undefined, k?: number | undefined) {
  if(j===undefined && k===undefined) {
    if(
      'subcategory' in 
      (
        categoryAndOrSubCategory.value as ClassifiedNavigationLinksType
      )[i] 
      &&
      (
        categoryAndOrSubCategory.value as ClassifiedNavigationLinksType
      )[i].subcategory !== undefined 
      &&
      Object.keys(
        (
          categoryAndOrSubCategory.value as ClassifiedNavigationLinksType
        )[i].subcategory as ClassifiedNavigationLinksType
      ).length > 0
    ) {
      return true;
    }
    else {
      return false;
    }
  }
  else {
    if(k===undefined) {
      if(
        'subcategory' in 
        (
          (
            (
              categoryAndOrSubCategory.value as ClassifiedNavigationLinksType
            )[i] as ClassifiedNavigationLinksType[number]
          ).subcategory as ClassifiedNavigationLinksType 
        )[j]
        &&
        (
          (
            (
              (
                categoryAndOrSubCategory.value as ClassifiedNavigationLinksType
              )[i] as ClassifiedNavigationLinksType[number]
            ).subcategory as ClassifiedNavigationLinksType 
          )[j] as ClassifiedNavigationLinksType[number]
        ).subcategory !== undefined 
        &&
        Object.keys(
          (
            (
              (
                (
                  categoryAndOrSubCategory.value as ClassifiedNavigationLinksType
                )[i] as ClassifiedNavigationLinksType[number]
              ).subcategory as ClassifiedNavigationLinksType 
            )[j] as ClassifiedNavigationLinksType[number]
          ).subcategory as ClassifiedNavigationLinksType
        ).length > 0
      ) {
        return true;
      }
      else {
        return false;
      }
    }
    else {
      if(
        'subcategory' in 
        (
          (
            (
              (
                (
                  categoryAndOrSubCategory.value as ClassifiedNavigationLinksType
                )[i] as ClassifiedNavigationLinksType[number]
              ).subcategory as ClassifiedNavigationLinksType 
            )[j] as ClassifiedNavigationLinksType[number]
          ).subcategory  as ClassifiedNavigationLinksType
        )[k]
        &&
        (
          (
            (
              (
                (
                  (
                    categoryAndOrSubCategory.value as ClassifiedNavigationLinksType
                  )[i] as ClassifiedNavigationLinksType[number]
                ).subcategory as ClassifiedNavigationLinksType 
              )[j] as ClassifiedNavigationLinksType[number]
            ).subcategory  as ClassifiedNavigationLinksType
          )[k] as ClassifiedNavigationLinksType[number]
        ).subcategory !== undefined 
        &&
        Object.keys(
          (
            (
              (
                (
                  (
                    (
                      categoryAndOrSubCategory.value as ClassifiedNavigationLinksType
                    )[i] as ClassifiedNavigationLinksType[number]
                  ).subcategory as ClassifiedNavigationLinksType 
                )[j] as ClassifiedNavigationLinksType[number]
              ).subcategory  as ClassifiedNavigationLinksType
            )[k] as ClassifiedNavigationLinksType[number]
          ).subcategory as ClassifiedNavigationLinksType
        ).length > 0
      ) {
        return true;
      }
      else {
        return false;
      }
    }
  }
}

export function collapseAnyExpandButtonAndFormExceptTheOneClicked(formType: 'SHOW-IMAGE-LINK' | 'ADD-IMAGE-LINK' | 'SHOW-PRODUCT-MODAL' | 'EXPAND-BUTTON-CLICKED' | 'CATEGORY-OR-SUBCATEGORY-FORM' | 'EDIT-FORM' | 'ADD-PRODUCT-FORM', categoryAndOrSubCategory: ShallowRef<ClassifiedNavigationLinksType>, i?: number | undefined, j?: number | undefined, k?: number | undefined, l?: number | undefined) {    
  if(i===undefined) {
    collapseAnyExpandButtonAndFormExceptTheOneClicked(
      'CATEGORY-OR-SUBCATEGORY-FORM',
      categoryAndOrSubCategory,
      Object.keys(
        categoryAndOrSubCategory.value as ClassifiedNavigationLinksType
      ).length,
      undefined,
      undefined,
      undefined
    );
  }
  else {
    for(let p=0; p<Object.keys(categoryAndOrSubCategory.value).length; p++) {
      if(p===i) { //something is clicked
        if( 
          subCategoryInCategoryAndOrSubCategoryTypeGuard(
            categoryAndOrSubCategory,
            p
          )
        ) {
          if(j!==undefined) {
            for(
              let q=0; 
              q<Object.keys(
                (
                  (
                    categoryAndOrSubCategory.value as ClassifiedNavigationLinksType
                  )[p].subcategory as ClassifiedNavigationLinksType
                )
              ).length;
              q++
            ) {
              if(q === j) {
                if(
                  subCategoryInCategoryAndOrSubCategoryTypeGuard(
                    categoryAndOrSubCategory,
                    p,
                    q
                  )
                ) {
                  if(k !== undefined) {
                    for(
                      let r=0; 
                      r<Object.keys(
                        (
                          (
                            (
                              categoryAndOrSubCategory.value as ClassifiedNavigationLinksType
                            )[p].subcategory as ClassifiedNavigationLinksType
                          )[q].subcategory as ClassifiedNavigationLinksType
                        )
                      ).length;
                      r++
                    ) {
                      if(r === k) {
                        if(
                          subCategoryInCategoryAndOrSubCategoryTypeGuard(
                            categoryAndOrSubCategory,
                            p,
                            q,
                            r
                          )
                        ) {
                          if(l !== undefined) {
                            for(
                              let s=0; 
                              s<Object.keys(
                                (
                                  (
                                    (
                                    categoryAndOrSubCategory.value as ClassifiedNavigationLinksType
                                    )[p].subcategory as ClassifiedNavigationLinksType
                                  )[q].subcategory as ClassifiedNavigationLinksType
                                )[r].subcategory as ClassifiedNavigationLinksType
                              ).length;
                              s++
                            ) {
                              if(s === l) {
                                pIQJRKSL(
                                  p,
                                  q,
                                  r,
                                  s,
                                  categoryAndOrSubCategory,
                                  formType
                                );
                              }
                              else {
                                //i = p, j = q, k = r, l != s
                                pIQJRKButSNotL(
                                  p, 
                                  q, 
                                  r, 
                                  s, 
                                  categoryAndOrSubCategory
                                );
                              }
                            }
                          }
                          else {
                            assignPropsOfCategoryAndOrSubCategory(
                              [
                                'isClickedEdit',
                                'isClickedSubCategory'
                              ] as unknown as [KeysOfClassifiedNavigationLinksType][],
                              [
                                false,
                                false
                              ],
                              categoryAndOrSubCategory,
                              p,
                              q
                            );
                            assignPropsOfCategoryAndOrSubCategory(
                              [
                                'isClickedEdit',
                                'isClickedSubCategory'
                              ] as unknown as [KeysOfClassifiedNavigationLinksType][],
                              [
                                false,
                                false
                              ],
                              categoryAndOrSubCategory,
                              p
                            );
                            if(
                              formType === 'CATEGORY-OR-SUBCATEGORY-FORM' 
                              || 
                              formType === 'EDIT-FORM' 
                              || 
                              formType === 'EXPAND-BUTTON-CLICKED'
                              ||
                              formType === 'ADD-IMAGE-LINK' 
                              ||
                              formType === 'SHOW-IMAGE-LINK'
                            ) {
                              if(formType === 'CATEGORY-OR-SUBCATEGORY-FORM') {
                                assignPropsOfCategoryAndOrSubCategory(
                                  [
                                    'isClickedEdit',
                                    'isClickedShowImageLink',
                                    'isClickedAddImageLink',
                                  ] as unknown as [KeysOfClassifiedNavigationLinksType][],
                                  [
                                    false,
                                    false,
                                    false
                                  ],
                                  categoryAndOrSubCategory,
                                  p,
                                  q,
                                  r
                                );
                              }
                              else if(formType === 'EDIT-FORM') {
                                assignPropsOfCategoryAndOrSubCategory(
                                  [
                                    'isClickedSubCategory',
                                    'isSubCategoryCollapsed',
                                    'isClickedShowImageLink',
                                    'isClickedAddImageLink'
                                  ] as unknown as [KeysOfClassifiedNavigationLinksType][],
                                  [
                                    false,
                                    false,
                                    false,
                                    false
                                  ],
                                  categoryAndOrSubCategory,
                                  p,
                                  q,
                                  r
                                );
                              }
                              else if(formType === 'ADD-IMAGE-LINK') {
                                assignPropsOfCategoryAndOrSubCategory(
                                  [
                                    'isClickedSubCategory',
                                    'isSubCategoryCollapsed',
                                    'isClickedShowImageLink',
                                    'isClickedEdit'
                                  ] as unknown as [KeysOfClassifiedNavigationLinksType][],
                                  [
                                    false,
                                    false,
                                    false,
                                    false
                                  ],
                                  categoryAndOrSubCategory,
                                  p,
                                  q,
                                  r
                                );
                              }
                              else if(formType === 'SHOW-IMAGE-LINK') {
                                assignPropsOfCategoryAndOrSubCategory(
                                  [
                                    'isClickedSubCategory',
                                    'isSubCategoryCollapsed',
                                    'isClickedAddImageLink',
                                    'isClickedEdit'
                                  ] as unknown as [KeysOfClassifiedNavigationLinksType][],
                                  [
                                    false,
                                    false,
                                    false,
                                    false
                                  ],
                                  categoryAndOrSubCategory,
                                  p,
                                  q,
                                  r
                                );
                              }
                              else {
                                assignPropsOfCategoryAndOrSubCategory(
                                  [
                                    'isClickedSubCategory',
                                    'isClickedAddImageLink',
                                    'isClickedShowImageLink',
                                    'isClickedEdit'
                                  ] as unknown as [KeysOfClassifiedNavigationLinksType][],
                                  [
                                    false,
                                    false,
                                    false,
                                    false
                                  ],
                                  categoryAndOrSubCategory,
                                  p,
                                  q,
                                  r
                                );
                              }
                            }
                            for(
                              let s=0; 
                              s<Object.keys(
                                (
                                  (
                                    (
                                      categoryAndOrSubCategory.value as ClassifiedNavigationLinksType
                                    )[p].subcategory as ClassifiedNavigationLinksType
                                  )[q].subcategory as ClassifiedNavigationLinksType
                                )[r].subcategory as ClassifiedNavigationLinksType
                              ).length;
                              s++
                            ) {
                              if(
                                (
                                  (
                                    (
                                      (
                                        categoryAndOrSubCategory.value as ClassifiedNavigationLinksType
                                      )[p].subcategory as ClassifiedNavigationLinksType
                                    )[q].subcategory as ClassifiedNavigationLinksType
                                  )[r].subcategory as ClassifiedNavigationLinksType
                                )[s].name === ''
                              ) {
                                if(formType !== 'CATEGORY-OR-SUBCATEGORY-FORM') {
                                  assignPropsOfCategoryAndOrSubCategory(
                                    'isClickedSubCategory',
                                    false,
                                    categoryAndOrSubCategory,
                                    p,
                                    q,
                                    r
                                  );
                                  delete (
                                    (
                                      (
                                        (
                                          categoryAndOrSubCategory.value as ClassifiedNavigationLinksType
                                        )[p].subcategory as ClassifiedNavigationLinksType
                                      )[q].subcategory as ClassifiedNavigationLinksType
                                    )[r].subcategory as ClassifiedNavigationLinksType
                                  )[s];
                                }
                              }
                              else {
                                assignPropsOfCategoryAndOrSubCategory(
                                  [
                                    'isClickedAddCollections',
                                    'isClickedShowCollections',
                                    'isClickedEdit'
                                  ] as unknown as [KeysOfClassifiedNavigationLinksType][],
                                  [
                                    false,
                                    false,
                                    false
                                  ],
                                  categoryAndOrSubCategory,
                                  p,
                                  q,
                                  r,
                                  s
                                );
                              }
                            }
                          }
                        }
                        else {
                          //there is no expand button, simply close lagging forms
                          assignPropsOfCategoryAndOrSubCategory(
                            [
                              'isClickedSubCategory',
                              'isClickedEdit'
                            ] as unknown as [KeysOfClassifiedNavigationLinksType][],
                            [
                              false,
                              false
                            ],
                            categoryAndOrSubCategory,
                            p
                          );
                          assignPropsOfCategoryAndOrSubCategory(
                            'isClickedEdit',
                            false,
                            categoryAndOrSubCategory,
                            p,
                            q
                          );
                          if(
                            (
                              (
                                (
                                  categoryAndOrSubCategory.value as ClassifiedNavigationLinksType
                                )[p].subcategory as ClassifiedNavigationLinksType
                              )[q].subcategory as ClassifiedNavigationLinksType
                            )[r].name === ''
                          ) {
                            assignPropsOfCategoryAndOrSubCategory(
                              'isClickedSubCategory',
                              false,
                              categoryAndOrSubCategory,
                              p,
                              q
                            );
                            delete (
                              (
                                (
                                  categoryAndOrSubCategory.value as ClassifiedNavigationLinksType
                                )[p].subcategory as ClassifiedNavigationLinksType
                              )[q].subcategory as ClassifiedNavigationLinksType
                            )[r];
                          }
                          else {
                            if(formType === 'EXPAND-BUTTON-CLICKED') {
                              assignPropsOfCategoryAndOrSubCategory(
                                [
                                  'isClickedEdit', 
                                  'isClickedAddCollections', 
                                  'isClickedAddImageLink', 
                                  'isClickedShowImageLink', 
                                  'isClickedShowCollections'
                                ] as unknown as [KeysOfClassifiedNavigationLinksType][],
                                [
                                  false,
                                  false,
                                  false,
                                  false,
                                  false
                                ],
                                categoryAndOrSubCategory,
                                p,
                                q,
                                r
                              );
                            }
                            else {
                              assignPropsOfCategoryAndOrSubCategory(
                                'isSubCategoryCollapsed',
                                false,
                                categoryAndOrSubCategory,
                                p,
                                q,
                                r
                              );
                              if(
                                formType === 'ADD-PRODUCT-FORM' 
                                ||
                                formType === 'EDIT-FORM' 
                                ||
                                formType === 'SHOW-PRODUCT-MODAL'
                                ||
                                formType === 'SHOW-IMAGE-LINK'
                                ||
                                formType === 'ADD-IMAGE-LINK'
                              ) {
                                if(formType === 'ADD-PRODUCT-FORM') {
                                  assignPropsOfCategoryAndOrSubCategory(
                                    [
                                      'isClickedEdit', 
                                      'isClickedAddImageLink', 
                                      'isClickedShowImageLink', 
                                      'isClickedShowCollections'
                                    ] as unknown as [KeysOfClassifiedNavigationLinksType][],
                                    [
                                      false,
                                      false,
                                      false,
                                      false
                                    ],
                                    categoryAndOrSubCategory,
                                    p,
                                    q,
                                    r
                                  );
                                }
                                else if(formType === 'EDIT-FORM') {
                                  assignPropsOfCategoryAndOrSubCategory(
                                    [
                                      'isClickedAddCollections', 
                                      'isClickedAddImageLink', 
                                      'isClickedShowImageLink', 
                                      'isClickedShowCollections'
                                    ] as unknown as [KeysOfClassifiedNavigationLinksType][],
                                    [
                                      false,
                                      false,
                                      false,
                                      false
                                    ],
                                    categoryAndOrSubCategory,
                                    p,
                                    q,
                                    r
                                  );
                                }
                                else if(formType === 'ADD-IMAGE-LINK') {
                                  assignPropsOfCategoryAndOrSubCategory(
                                    [
                                      'isClickedEdit', 
                                      'isClickedAddCollections', 
                                      'isClickedShowImageLink', 
                                      'isClickedShowCollections'
                                    ] as unknown as [KeysOfClassifiedNavigationLinksType][],
                                    [
                                      false,
                                      false,
                                      false,
                                      false
                                    ],
                                    categoryAndOrSubCategory,
                                    p,
                                    q,
                                    r
                                  );
                                }
                                else if(formType === 'SHOW-IMAGE-LINK') {
                                  assignPropsOfCategoryAndOrSubCategory(
                                    [
                                      'isClickedEdit', 
                                      'isClickedAddCollections', 
                                      'isClickedAddImageLink', 
                                      'isClickedShowCollections'
                                    ] as unknown as [KeysOfClassifiedNavigationLinksType][],
                                    [
                                      false,
                                      false,
                                      false,
                                      false
                                    ],
                                    categoryAndOrSubCategory,
                                    p,
                                    q,
                                    r
                                  );
                                }
                                else {
                                  assignPropsOfCategoryAndOrSubCategory(
                                    [
                                      'isClickedEdit', 
                                      'isClickedAddCollections', 
                                      'isClickedAddImageLink', 
                                      'isClickedShowImageLink', 
                                    ] as unknown as [KeysOfClassifiedNavigationLinksType][],
                                    [
                                      false,
                                      false,
                                      false,
                                      false
                                    ],
                                    categoryAndOrSubCategory,
                                    p,
                                    q,
                                    r
                                  );
                                }
                              }
                            }
                          }
                        }
                      }
                      else {
                        //collapse everything i = p, j = q, k != r
                        pIQJButRNotK(
                          p, 
                          q, 
                          r, 
                          categoryAndOrSubCategory
                        );
                      }
                    }
                  }
                  else {
                    assignPropsOfCategoryAndOrSubCategory(
                      [
                        'isClickedEdit', 
                        'isClickedSubCategory'
                      ] as unknown as [KeysOfClassifiedNavigationLinksType][],
                      [
                        false,
                        false
                      ],
                      categoryAndOrSubCategory,
                      p
                    );
                    if(
                      formType === 'CATEGORY-OR-SUBCATEGORY-FORM' 
                      ||
                      formType === 'EDIT-FORM' 
                      || 
                      formType === 'EXPAND-BUTTON-CLICKED'
                    ) {
                      if(formType === 'CATEGORY-OR-SUBCATEGORY-FORM') {
                        assignPropsOfCategoryAndOrSubCategory(
                          'isClickedEdit',
                          false,
                          categoryAndOrSubCategory,
                          p,
                          q
                        );
                      }
                      else if(formType === 'EDIT-FORM') {
                        assignPropsOfCategoryAndOrSubCategory(
                          [
                            'isClickedSubCategory', 
                            'isSubCategoryCollapsed', 
                          ] as unknown as [KeysOfClassifiedNavigationLinksType][],
                          [
                            false,
                            false
                          ],
                          categoryAndOrSubCategory,
                          p,
                          q
                        );
                      }
                      else {
                        assignPropsOfCategoryAndOrSubCategory(
                          [
                            'isClickedEdit', 
                            'isClickedSubCategory',
                          ] as unknown as [KeysOfClassifiedNavigationLinksType][],
                          [
                            false,
                            false
                          ],
                          categoryAndOrSubCategory,
                          p,
                          q
                        );
                      }
                    }
                    for(
                      let r=0; 
                      r<Object.keys(
                        (
                          (
                            (
                              categoryAndOrSubCategory.value as ClassifiedNavigationLinksType
                            )[p].subcategory as ClassifiedNavigationLinksType
                          )[q].subcategory as ClassifiedNavigationLinksType
                        )
                      ).length;
                      r++
                    ) {
                      if(
                        subCategoryInCategoryAndOrSubCategoryTypeGuard(
                          categoryAndOrSubCategory,
                          p,
                          q,
                          r
                        )
                      ) {
                        assignPropsOfCategoryAndOrSubCategory(
                          [
                            'isClickedEdit', 
                            'isSubCategoryCollapsed', 
                            'isClickedAddImageLink', 
                            'isClickedShowImageLink', 
                            'isClickedSubCategory'
                          ] as unknown as [KeysOfClassifiedNavigationLinksType][],
                          [
                            false,
                            false,
                            false,
                            false,
                            false
                          ],
                          categoryAndOrSubCategory,
                          p,
                          q,
                          r
                        );
                        for(
                          let s=0; 
                          s<Object.keys(
                            (
                              (
                                (
                                  categoryAndOrSubCategory.value as ClassifiedNavigationLinksType
                                )[p].subcategory as ClassifiedNavigationLinksType
                              )[q].subcategory as ClassifiedNavigationLinksType
                            )[r].subcategory as ClassifiedNavigationLinksType
                          ).length;
                          s++
                        ) {
                          if(
                            (
                              (
                                (
                                  (
                                    categoryAndOrSubCategory.value as ClassifiedNavigationLinksType
                                  )[p].subcategory as ClassifiedNavigationLinksType
                                )[q].subcategory as ClassifiedNavigationLinksType
                              )[r].subcategory as ClassifiedNavigationLinksType
                            )[s].name === ''
                          ) {
                            delete (
                              (
                                (
                                  (
                                    categoryAndOrSubCategory.value as ClassifiedNavigationLinksType
                                  )[p].subcategory as ClassifiedNavigationLinksType
                                )[q].subcategory as ClassifiedNavigationLinksType
                              )[r].subcategory as ClassifiedNavigationLinksType
                            )[s];
                          }
                          else {
                            assignPropsOfCategoryAndOrSubCategory(
                              [
                                'isClickedEdit', 
                                'isClickedAddCollections',
                                'isClickedShowCollections'
                              ] as unknown as [KeysOfClassifiedNavigationLinksType][],
                              [
                                false,
                                false,
                                false
                              ],
                              categoryAndOrSubCategory,
                              p,
                              q,
                              r,
                              s
                            );
                          }
                        }
                      }
                      else {
                        //there is no expand button, simply close lagging forms
                        if(
                          (
                            (
                              (
                                categoryAndOrSubCategory.value as ClassifiedNavigationLinksType
                              )[p].subcategory as ClassifiedNavigationLinksType
                            )[q].subcategory as ClassifiedNavigationLinksType
                          )[r].name === ''
                        ) {
                          if(formType !== 'CATEGORY-OR-SUBCATEGORY-FORM') {
                            assignPropsOfCategoryAndOrSubCategory(
                              'isClickedSubCategory',
                              false,
                              categoryAndOrSubCategory,
                              p,
                              q
                            );
                            delete (
                              (
                                (
                                  categoryAndOrSubCategory.value as ClassifiedNavigationLinksType
                                )[p].subcategory as ClassifiedNavigationLinksType
                              )[q].subcategory as ClassifiedNavigationLinksType
                            )[r];
                          }
                        }
                        else {
                          assignPropsOfCategoryAndOrSubCategory(
                            [
                              'isClickedEdit', 
                              'isClickedAddCollections', 
                              'isClickedAddImageLink', 
                              'isClickedShowImageLink', 
                              'isClickedShowCollections'
                            ] as unknown as [KeysOfClassifiedNavigationLinksType][],
                            [
                              false,
                              false,
                              false,
                              false,
                              false
                            ],
                            categoryAndOrSubCategory,
                            p,
                            q,
                            r
                          );
                        }
                      }
                    }
                  }
                }
                else {
                  //there is no expand button, simply close lagging forms
                  if(
                    (
                      (
                        categoryAndOrSubCategory.value as ClassifiedNavigationLinksType
                      )[p].subcategory as ClassifiedNavigationLinksType
                    )[q].name === ''
                  ) {
                    assignPropsOfCategoryAndOrSubCategory(
                      'isClickedSubCategory',
                      false,
                      categoryAndOrSubCategory,
                      p
                    );
                    delete (
                      (
                        categoryAndOrSubCategory.value as ClassifiedNavigationLinksType
                      )[p].subcategory as ClassifiedNavigationLinksType
                    )[q];
                  }
                  else {
                    assignPropsOfCategoryAndOrSubCategory(
                      [
                        'isClickedEdit', 
                        'isClickedSubCategory'
                      ] as unknown as [KeysOfClassifiedNavigationLinksType][],
                      [
                        false,
                        false
                      ],
                      categoryAndOrSubCategory,
                      p
                    );
                    if(formType === 'EXPAND-BUTTON-CLICKED') {
                      assignPropsOfCategoryAndOrSubCategory(
                        [
                          'isClickedEdit', 
                          'isClickedAddCollections',  
                          'isClickedShowCollections'
                        ] as unknown as [KeysOfClassifiedNavigationLinksType][],
                        [
                          false,
                          false,
                          false
                        ],
                        categoryAndOrSubCategory,
                        p,
                        q
                      );
                    }
                    else {
                      assignPropsOfCategoryAndOrSubCategory(
                        'isSubCategoryCollapsed', 
                        false,
                        categoryAndOrSubCategory,
                        p,
                        q
                      );
                      if(
                        formType === 'ADD-PRODUCT-FORM'
                        ||
                        formType === 'EDIT-FORM' 
                        || 
                        formType === 'SHOW-PRODUCT-MODAL'
                      ) {
                        if(formType === 'ADD-PRODUCT-FORM') {
                          assignPropsOfCategoryAndOrSubCategory(
                            [
                              'isClickedEdit',   
                              'isClickedShowCollections'
                            ] as unknown as [KeysOfClassifiedNavigationLinksType][],
                            [
                              false,
                              false
                            ],
                            categoryAndOrSubCategory,
                            p,
                            q
                          );
                        }
                        else if(formType === 'EDIT-FORM') {
                          assignPropsOfCategoryAndOrSubCategory(
                            [
                              'isClickedAddCollections',  
                              'isClickedShowCollections'
                            ] as unknown as [KeysOfClassifiedNavigationLinksType][],
                            [
                              false,
                              false
                            ],
                            categoryAndOrSubCategory,
                            p,
                            q
                          );
                        }
                        else {
                          assignPropsOfCategoryAndOrSubCategory(
                            [
                              'isClickedEdit', 
                              'isClickedAddCollections'
                            ] as unknown as [KeysOfClassifiedNavigationLinksType][],
                            [
                              false,
                              false
                            ],
                            categoryAndOrSubCategory,
                            p,
                            q
                          );
                        }
                      }
                    }
                  }
                }
              }
              else {
                //collapse everything i = p, j != q
                pIButQNotJ(
                  p, 
                  q, 
                  categoryAndOrSubCategory
                );
              }
            }
          }
          else {
            if(
              formType === 'CATEGORY-OR-SUBCATEGORY-FORM' 
              ||
              formType === 'EXPAND-BUTTON-CLICKED' 
              ||
              formType === 'EDIT-FORM'
            ) {
              if(formType === 'CATEGORY-OR-SUBCATEGORY-FORM') {
                assignPropsOfCategoryAndOrSubCategory(
                  'isClickedEdit', 
                  false,
                  categoryAndOrSubCategory,
                  p
                );
              }
              else if(formType === 'EDIT-FORM') {
                (
                  categoryAndOrSubCategory.value as ClassifiedNavigationLinksType
                )[p].isSubCategoryCollapsed = false;
                (
                  categoryAndOrSubCategory.value as ClassifiedNavigationLinksType
                )[p].isClickedSubCategory = false;
                assignPropsOfCategoryAndOrSubCategory(
                  [
                    'isSubCategoryCollapsed',  
                    'isClickedSubCategory'
                  ] as unknown as [KeysOfClassifiedNavigationLinksType][],
                  [
                    false,
                    false
                  ],
                  categoryAndOrSubCategory,
                  p
                );
              }
              else {
                assignPropsOfCategoryAndOrSubCategory(
                  [
                    'isClickedEdit',  
                    'isClickedSubCategory'
                  ] as unknown as [KeysOfClassifiedNavigationLinksType][],
                  [
                    false,
                    false
                  ],
                  categoryAndOrSubCategory,
                  p
                );
              }
            }
            for(
              let q=0; 
              q<Object.keys(
                (
                  (
                    categoryAndOrSubCategory.value as ClassifiedNavigationLinksType
                  )[p].subcategory as ClassifiedNavigationLinksType
                )
              ).length;
              q++
            ) {
              if(
                subCategoryInCategoryAndOrSubCategoryTypeGuard(
                  categoryAndOrSubCategory,
                  p,
                  q
                )
              ) {
                assignPropsOfCategoryAndOrSubCategory(
                  [
                    'isClickedEdit', 
                    'isClickedSubCategory',  
                    'isSubCategoryCollapsed'
                  ] as unknown as [KeysOfClassifiedNavigationLinksType][],
                  [
                    false,
                    false,
                    false
                  ],
                  categoryAndOrSubCategory,
                  p,
                  q
                );
                for(
                  let r=0; 
                  r<Object.keys(
                    (
                      (
                        (
                          categoryAndOrSubCategory.value as ClassifiedNavigationLinksType
                        )[p].subcategory as ClassifiedNavigationLinksType
                      )[q].subcategory as ClassifiedNavigationLinksType
                    )
                  ).length;
                  r++
                ) {
                  if(
                    subCategoryInCategoryAndOrSubCategoryTypeGuard(
                      categoryAndOrSubCategory,
                      p,
                      q,
                      r
                    )
                  ) {
                    assignPropsOfCategoryAndOrSubCategory(
                      [
                        'isClickedEdit',   
                        'isSubCategoryCollapsed',
                        'isClickedAddImageLink',
                        'isClickedShowImageLink',
                        'isClickedSubCategory'
                      ] as unknown as [KeysOfClassifiedNavigationLinksType][],
                      [
                        false,
                        false,
                        false,
                        false,
                        false
                      ],
                      categoryAndOrSubCategory,
                      p,
                      q,
                      r
                    );
                    for(
                      let s=0; 
                      s<Object.keys(
                        (
                          (
                            (
                              categoryAndOrSubCategory.value as ClassifiedNavigationLinksType
                            )[p].subcategory as ClassifiedNavigationLinksType
                          )[q].subcategory as ClassifiedNavigationLinksType
                        )[r].subcategory as ClassifiedNavigationLinksType
                      ).length;
                      s++
                    ) {
                      if(
                        (
                          (
                            (
                              (
                                categoryAndOrSubCategory.value as ClassifiedNavigationLinksType
                              )[p].subcategory as ClassifiedNavigationLinksType
                            )[q].subcategory as ClassifiedNavigationLinksType
                          )[r].subcategory as ClassifiedNavigationLinksType
                        )[s].name === ''
                      ) {
                        assignPropsOfCategoryAndOrSubCategory(
                          'isClickedSubCategory',
                          false,
                          categoryAndOrSubCategory,
                          p,
                          q,
                          r
                        );
                        delete (
                          (
                            (
                              (
                                categoryAndOrSubCategory.value as ClassifiedNavigationLinksType
                              )[p].subcategory as ClassifiedNavigationLinksType
                            )[q].subcategory as ClassifiedNavigationLinksType
                          )[r].subcategory as ClassifiedNavigationLinksType
                        )[s]
                      }
                      else {
                        assignPropsOfCategoryAndOrSubCategory(
                          [
                            'isClickedEdit',   
                            'isClickedAddCollections',
                            'isClickedShowCollections'
                          ] as unknown as [KeysOfClassifiedNavigationLinksType][],
                          [
                            false,
                            false,
                            false
                          ],
                          categoryAndOrSubCategory,
                          p,
                          q,
                          r,
                          s
                        );
                      }
                    }
                  }
                  else {
                    //there is no expand button, simply close lagging forms
                    if(
                      (
                        (
                          (
                            categoryAndOrSubCategory.value as ClassifiedNavigationLinksType
                          )[p].subcategory as ClassifiedNavigationLinksType
                        )[q].subcategory as ClassifiedNavigationLinksType
                      )[r].name === ''
                    ) {
                      assignPropsOfCategoryAndOrSubCategory(
                        'isClickedSubCategory', 
                        false,
                        categoryAndOrSubCategory,
                        p,
                        q
                      );
                      delete (
                        (
                          (
                            categoryAndOrSubCategory.value as ClassifiedNavigationLinksType
                          )[p].subcategory as ClassifiedNavigationLinksType
                        )[q].subcategory as ClassifiedNavigationLinksType
                      )[r];
                    }
                    else {
                      assignPropsOfCategoryAndOrSubCategory(
                        [
                          'isClickedEdit',   
                          'isClickedAddCollections',
                          'isClickedShowCollections',
                          'isClickedAddImageLink',
                          'isClickedShowImageLink'
                        ] as unknown as [KeysOfClassifiedNavigationLinksType][],
                        [
                          false,
                          false,
                          false,
                          false,
                          false
                        ],
                        categoryAndOrSubCategory,
                        p,
                        q,
                        r
                      );
                    }
                  }
                }
              }
              else {
                //there is no expand button, simply close lagging forms
                if(
                  (
                    (
                      categoryAndOrSubCategory.value as ClassifiedNavigationLinksType
                    )[p].subcategory as ClassifiedNavigationLinksType
                  )[q].name === ''
                ) {
                  if(formType !== 'CATEGORY-OR-SUBCATEGORY-FORM') {
                    assignPropsOfCategoryAndOrSubCategory(
                      'isClickedSubCategory',
                      false,
                      categoryAndOrSubCategory,
                      p
                    );
                    delete (
                      (
                        categoryAndOrSubCategory.value as ClassifiedNavigationLinksType
                      )[p].subcategory as ClassifiedNavigationLinksType
                    )[q];
                  }
                }
                else {
                  assignPropsOfCategoryAndOrSubCategory(
                    [
                      'isClickedEdit',   
                      'isClickedAddCollections',
                      'isClickedShowCollections'
                    ] as unknown as [KeysOfClassifiedNavigationLinksType][],
                    [
                      false,
                      false,
                      false
                    ],
                    categoryAndOrSubCategory,
                    p,
                    q
                  );
                }
              }
            }
          }
        }
        else {
          if(formType === 'EXPAND-BUTTON-CLICKED') {
            assignPropsOfCategoryAndOrSubCategory(
              [
                'isClickedEdit',   
                'isClickedAddCollections',
                'isClickedShowCollections'
              ] as unknown as [KeysOfClassifiedNavigationLinksType][],
              [
                false,
                false,
                false
              ],
              categoryAndOrSubCategory,
              p
            );
          }
          else {
            assignPropsOfCategoryAndOrSubCategory(
              'isSubCategoryCollapsed',
              false,
              categoryAndOrSubCategory,
              p
            );
            if(
              formType === 'ADD-PRODUCT-FORM'
              || 
              formType === 'EDIT-FORM' 
              || 
              formType === 'SHOW-PRODUCT-MODAL'
            ) {
              if(formType === 'ADD-PRODUCT-FORM') {
                assignPropsOfCategoryAndOrSubCategory(
                  [
                    'isClickedEdit', 
                    'isClickedShowCollections'
                  ] as unknown as [KeysOfClassifiedNavigationLinksType][],
                  [
                    false,
                    false
                  ],
                  categoryAndOrSubCategory,
                  p
                );
              }
              else if(formType === 'EDIT-FORM') {
                assignPropsOfCategoryAndOrSubCategory(
                  [ 
                    'isClickedAddCollections',
                    'isClickedShowCollections'
                  ] as unknown as [KeysOfClassifiedNavigationLinksType][],
                  [
                    false,
                    false
                  ],
                  categoryAndOrSubCategory,
                  p
                );
              }
              else {
                assignPropsOfCategoryAndOrSubCategory(
                  [
                    'isClickedEdit',   
                    'isClickedAddCollections'
                  ] as unknown as [KeysOfClassifiedNavigationLinksType][],
                  [
                    false,
                    false
                  ],
                  categoryAndOrSubCategory,
                  p
                );
              }
            }  
          }
        }
      }
      else {
        //collapse everything p != i
        pButNotI(
          p, 
          categoryAndOrSubCategory
        );
      }
    }
  }
  triggerRef(categoryAndOrSubCategory);
}

function pIQJRKSL(p: number, q: number, r: number, s: number, categoryAndOrSubCategory: ShallowRef<ClassifiedNavigationLinksType>, formType: 'SHOW-IMAGE-LINK' | 'ADD-IMAGE-LINK' | 'SHOW-PRODUCT-MODAL' | 'EXPAND-BUTTON-CLICKED' | 'CATEGORY-OR-SUBCATEGORY-FORM' | 'EDIT-FORM' | 'ADD-PRODUCT-FORM') {
  assignPropsOfCategoryAndOrSubCategory(
    [
      'isClickedEdit',   
      'isClickedSubCategory'
    ] as unknown as [KeysOfClassifiedNavigationLinksType][],
    [
      false,
      false
    ],
    categoryAndOrSubCategory,
    p
  );
  if(
    (
      (
        categoryAndOrSubCategory.value as ClassifiedNavigationLinksType
      )[p].subcategory as ClassifiedNavigationLinksType
    )[
      Object.keys(
        (
          (
            categoryAndOrSubCategory.value as ClassifiedNavigationLinksType
          )[p].subcategory as ClassifiedNavigationLinksType
        )
      ).length - 1
    ].name === ''
  ) {
    delete (
      (
        categoryAndOrSubCategory.value as ClassifiedNavigationLinksType
      )[p].subcategory as ClassifiedNavigationLinksType
    )[
      Object.keys(
        (
          (
            categoryAndOrSubCategory.value as ClassifiedNavigationLinksType
          )[p].subcategory as ClassifiedNavigationLinksType
        )
      ).length - 1
    ];
  }
  assignPropsOfCategoryAndOrSubCategory(
    'isClickedSubCategory',
    false,
    categoryAndOrSubCategory,
    p,
    q
  );
  if(
    (
      (
        (
          categoryAndOrSubCategory.value as ClassifiedNavigationLinksType
        )[p].subcategory as ClassifiedNavigationLinksType
      )[q].subcategory as ClassifiedNavigationLinksType
    )[
      Object.keys(
        (
          (
            (
              categoryAndOrSubCategory.value as ClassifiedNavigationLinksType
            )[p].subcategory as ClassifiedNavigationLinksType
          )[q].subcategory as ClassifiedNavigationLinksType
        )
      ).length - 1
    ].name === ''
  ) {
    delete (
      (
        (
          categoryAndOrSubCategory.value as ClassifiedNavigationLinksType
        )[p].subcategory as ClassifiedNavigationLinksType
      )[q].subcategory as ClassifiedNavigationLinksType
    )[
      Object.keys(
        (
          (
            (
              categoryAndOrSubCategory.value as ClassifiedNavigationLinksType
            )[p].subcategory as ClassifiedNavigationLinksType
          )[q].subcategory as ClassifiedNavigationLinksType
        )
      ).length - 1
    ];
  }
  assignPropsOfCategoryAndOrSubCategory(
    [
      'isClickedSubCategory', 
      'isClickedAddImageLink',
      'isClickedShowImageLink'
    ] as unknown as [KeysOfClassifiedNavigationLinksType][],
    [
      false,
      false,
      false
    ],
    categoryAndOrSubCategory,
    p,
    q,
    r
  );
  assignPropsOfCategoryAndOrSubCategory(
    'isClickedEdit',
    false,
    categoryAndOrSubCategory,
    p,
    q
  );
  if(
    (
      (
        (
          (
            categoryAndOrSubCategory.value as ClassifiedNavigationLinksType
          )[p].subcategory as ClassifiedNavigationLinksType
        )[q].subcategory as ClassifiedNavigationLinksType
      )[r].subcategory as ClassifiedNavigationLinksType
    )[
      Object.keys(
        (
          (
            (
              (
                categoryAndOrSubCategory.value as ClassifiedNavigationLinksType
              )[p].subcategory as ClassifiedNavigationLinksType
            )[q].subcategory as ClassifiedNavigationLinksType
          )[r].subcategory as ClassifiedNavigationLinksType
        )
      ).length - 1
    ].name === ''
  ) {
    delete (
      (
        (
          (
            categoryAndOrSubCategory.value as ClassifiedNavigationLinksType
          )[p].subcategory as ClassifiedNavigationLinksType
        )[q].subcategory as ClassifiedNavigationLinksType
      )[r].subcategory as ClassifiedNavigationLinksType
    )[
      Object.keys(
        (
          (
            (
              (
                categoryAndOrSubCategory.value as ClassifiedNavigationLinksType
              )[p].subcategory as ClassifiedNavigationLinksType
            )[q].subcategory as ClassifiedNavigationLinksType
          )[r].subcategory as ClassifiedNavigationLinksType
        )
      ).length - 1
    ];
  }
  assignPropsOfCategoryAndOrSubCategory(
    'isClickedEdit',
    false,
    categoryAndOrSubCategory,
    p,
    q,
    r
  );
  if(
    formType === 'ADD-PRODUCT-FORM' 
    ||
    formType === 'EDIT-FORM' 
    ||
    formType === 'SHOW-PRODUCT-MODAL'
  ) {
    if(formType === 'ADD-PRODUCT-FORM') {
      assignPropsOfCategoryAndOrSubCategory(
        [
          'isClickedEdit',   
          'isClickedShowCollections'
        ] as unknown as [KeysOfClassifiedNavigationLinksType][],
        [
          false,
          false
        ],
        categoryAndOrSubCategory,
        p,
        q,
        r,
        s
      );
    }
    else if(formType === 'EDIT-FORM') {
      assignPropsOfCategoryAndOrSubCategory(
        [
          'isClickedAddCollections',   
          'isClickedShowCollections'
        ] as unknown as [KeysOfClassifiedNavigationLinksType][],
        [
          false,
          false
        ],
        categoryAndOrSubCategory,
        p,
        q,
        r,
        s
      );
    }
    else {
      assignPropsOfCategoryAndOrSubCategory(
        [
          'isClickedAddCollections',   
          'isClickedEdit'
        ] as unknown as [KeysOfClassifiedNavigationLinksType][],
        [
          false,
          false
        ],
        categoryAndOrSubCategory,
        p,
        q,
        r,
        s
      );
    }
  }
  triggerRef(categoryAndOrSubCategory);
}

function pIQJRKButSNotL(p: number, q: number, r: number, s: number, categoryAndOrSubCategory: ShallowRef<ClassifiedNavigationLinksType>) {
  assignPropsOfCategoryAndOrSubCategory(
    [
      'isClickedEdit',   
      'isClickedSubCategory'
    ] as unknown as [KeysOfClassifiedNavigationLinksType][],
    [
      false,
      false
    ],
    categoryAndOrSubCategory,
    p
  );
  assignPropsOfCategoryAndOrSubCategory(
    [
      'isClickedEdit',   
      'isClickedSubCategory'
    ] as unknown as [KeysOfClassifiedNavigationLinksType][],
    [
      false,
      false
    ],
    categoryAndOrSubCategory,
    p,
    q
  );
  assignPropsOfCategoryAndOrSubCategory(
    [
      'isClickedEdit',   
      'isClickedSubCategory',
      'isClickedShowImageLink',
      'isClickedAddImageLink'
    ] as unknown as [KeysOfClassifiedNavigationLinksType][],
    [
      false,
      false,
      false,
      false
    ],
    categoryAndOrSubCategory,
    p,
    q,
    r
  );
  if(
    (
      (
        (
          (
            categoryAndOrSubCategory.value as ClassifiedNavigationLinksType
          )[p].subcategory as ClassifiedNavigationLinksType
        )[q].subcategory as ClassifiedNavigationLinksType
      )[r].subcategory as ClassifiedNavigationLinksType
    )[s].name === ''
  ) {
    assignPropsOfCategoryAndOrSubCategory(
      'isClickedSubCategory',
      false,
      categoryAndOrSubCategory,
      p,
      q,
      r
    );
    delete (
      (
        (
          (
            categoryAndOrSubCategory.value as ClassifiedNavigationLinksType
          )[p].subcategory as ClassifiedNavigationLinksType
        )[q].subcategory as ClassifiedNavigationLinksType
      )[r].subcategory as ClassifiedNavigationLinksType
    )[s];
  }
  else {
    if(
      (
        (
          (
            (
              categoryAndOrSubCategory.value as ClassifiedNavigationLinksType
            )[p].subcategory as ClassifiedNavigationLinksType
          )[q].subcategory as ClassifiedNavigationLinksType
        )[r].subcategory as ClassifiedNavigationLinksType
      )[s].name === ''
    ) {
      assignPropsOfCategoryAndOrSubCategory(
        'isClickedSubCategory',
        false,
        categoryAndOrSubCategory,
        p,
        q,
        r
      );
      delete (
        (
          (
            (
              categoryAndOrSubCategory.value as ClassifiedNavigationLinksType
            )[p].subcategory as ClassifiedNavigationLinksType
          )[q].subcategory as ClassifiedNavigationLinksType
        )[r].subcategory as ClassifiedNavigationLinksType
      )[s];
    }
    else {
      assignPropsOfCategoryAndOrSubCategory(
        [
          'isClickedEdit',   
          'isClickedShowCollections',
          'isClickedAddCollections'
        ] as unknown as [KeysOfClassifiedNavigationLinksType][],
        [
          false,
          false,
          false
        ],
        categoryAndOrSubCategory,
        p,
        q,
        r,
        s
      );
    }
  }
  triggerRef(categoryAndOrSubCategory);
}

function pIQJButRNotK(p: number, q: number, r: number, categoryAndOrSubCategory: ShallowRef<ClassifiedNavigationLinksType>) {
  assignPropsOfCategoryAndOrSubCategory(
    [
      'isClickedEdit',   
      'isClickedSubCategory'
    ] as unknown as [KeysOfClassifiedNavigationLinksType][],
    [
      false,
      false
    ],
    categoryAndOrSubCategory,
    p
  );
  assignPropsOfCategoryAndOrSubCategory(
    [
      'isClickedEdit',   
      'isClickedSubCategory'
    ] as unknown as [KeysOfClassifiedNavigationLinksType][],
    [
      false,
      false
    ],
    categoryAndOrSubCategory,
    p,
    q
  );
  if(
    (
      (
        (
          categoryAndOrSubCategory.value as ClassifiedNavigationLinksType
        )[p].subcategory as ClassifiedNavigationLinksType
      )[q].subcategory as ClassifiedNavigationLinksType
    )[r].name === ''
  ) {
    assignPropsOfCategoryAndOrSubCategory(
      'isClickedSubCategory',
      false,
      categoryAndOrSubCategory,
      p,
      q
    );
    delete (
      (
        (
          categoryAndOrSubCategory.value as ClassifiedNavigationLinksType
        )[p].subcategory as ClassifiedNavigationLinksType
      )[q].subcategory as ClassifiedNavigationLinksType
    )[r];
  }
  else {
    if(
      subCategoryInCategoryAndOrSubCategoryTypeGuard(
        categoryAndOrSubCategory,
        p,
        q,
        r
      )
    ) {
      assignPropsOfCategoryAndOrSubCategory(
        [
          'isClickedEdit',   
          'isClickedSubCategory',
          'isClickedAddImageLink',
          'isSubCategoryCollapsed',
          'isClickedShowImageLink'
        ] as unknown as [KeysOfClassifiedNavigationLinksType][],
        [
          false,
          false,
          false,
          false,
          false
        ],
        categoryAndOrSubCategory,
        p,
        q,
        r
      );
      for(
        let s=0; 
        s<Object.keys(
          (
            (
              (
                categoryAndOrSubCategory.value as ClassifiedNavigationLinksType
              )[p].subcategory as ClassifiedNavigationLinksType
            )[q].subcategory as ClassifiedNavigationLinksType
          )[r].subcategory as ClassifiedNavigationLinksType
        ).length;
        s++
      ) {
        if(
          (
            (
              (
                (
                  categoryAndOrSubCategory.value as ClassifiedNavigationLinksType
                )[p].subcategory as ClassifiedNavigationLinksType
              )[q].subcategory as ClassifiedNavigationLinksType
            )[r].subcategory as ClassifiedNavigationLinksType
          )[s].name === ''
        ) {
          assignPropsOfCategoryAndOrSubCategory(
            'isClickedSubCategory',
            false,
            categoryAndOrSubCategory,
            p,
            q,
            r
          );
          delete (
            (
              (
                (
                  categoryAndOrSubCategory.value as ClassifiedNavigationLinksType
                )[p].subcategory as ClassifiedNavigationLinksType
              )[q].subcategory as ClassifiedNavigationLinksType
            )[r].subcategory as ClassifiedNavigationLinksType
          )[s];
        }
        else {
          assignPropsOfCategoryAndOrSubCategory(
            [
              'isClickedEdit',   
              'isClickedAddCollections',
              'isClickedShowCollections'
            ] as unknown as [KeysOfClassifiedNavigationLinksType][],
            [
              false,
              false,
              false
            ],
            categoryAndOrSubCategory,
            p,
            q,
            r,
            s
          );
        }
      }
    }
    else {
      assignPropsOfCategoryAndOrSubCategory(
        'isSubCategoryCollapsed',
        false,
        categoryAndOrSubCategory,
        p,
        q,
        r
      );
      if(
        (
          (
            (
              categoryAndOrSubCategory.value as ClassifiedNavigationLinksType
            )[p].subcategory as ClassifiedNavigationLinksType
          )[q].subcategory as ClassifiedNavigationLinksType
        )[r].name === ''
      ) {
        assignPropsOfCategoryAndOrSubCategory(
          'isClickedSubCategory', 
          false,
          categoryAndOrSubCategory,
          p,
          q
        );
        delete (
          (
            (
              categoryAndOrSubCategory.value as ClassifiedNavigationLinksType
            )[p].subcategory as ClassifiedNavigationLinksType
          )[q].subcategory as ClassifiedNavigationLinksType
        )[r];
      }
      else {
        assignPropsOfCategoryAndOrSubCategory(
          [
            'isClickedEdit',   
            'isClickedAddCollections',
            'isClickedShowCollections',
            'isClickedShowImageLink',
            'isClickedAddImageLink'
          ] as unknown as [KeysOfClassifiedNavigationLinksType][],
          [
            false,
            false,
            false,
            false,
            false
          ],
          categoryAndOrSubCategory,
          p,
          q,
          r
        );
      }
    }
  }
  triggerRef(categoryAndOrSubCategory);
}

function pIButQNotJ(p: number, q: number, categoryAndOrSubCategory: ShallowRef<ClassifiedNavigationLinksType>) {
  assignPropsOfCategoryAndOrSubCategory(
    [
      'isClickedEdit',   
      'isClickedSubCategory'
    ] as unknown as [KeysOfClassifiedNavigationLinksType][],
    [
      false,
      false
    ],
    categoryAndOrSubCategory,
    p
  );
  if(
    (
      (
        categoryAndOrSubCategory.value as ClassifiedNavigationLinksType
      )[p].subcategory as ClassifiedNavigationLinksType
    )[q].name === ''
  ) {
    assignPropsOfCategoryAndOrSubCategory(
      'isClickedSubCategory', 
      false,
      categoryAndOrSubCategory,
      p
    );
    delete (
      (
        categoryAndOrSubCategory.value as ClassifiedNavigationLinksType
      )[p].subcategory as ClassifiedNavigationLinksType
    )[q];
  }
  else {
    if(
      subCategoryInCategoryAndOrSubCategoryTypeGuard(
        categoryAndOrSubCategory,
        p,
        q
      )
    ) {
      assignPropsOfCategoryAndOrSubCategory(
        [
          'isClickedEdit',   
          'isClickedSubCategory',
          'isSubCategoryCollapsed'
        ] as unknown as [KeysOfClassifiedNavigationLinksType][],
        [
          false,
          false,
          false
        ],
        categoryAndOrSubCategory,
        p,
        q
      );
      for(
        let r=0;
        r<Object.keys(
          (
            (
              categoryAndOrSubCategory.value as ClassifiedNavigationLinksType
            )[p].subcategory as ClassifiedNavigationLinksType
          )[q].subcategory as ClassifiedNavigationLinksType
        ).length;
        r++
      ) {
        if(
          subCategoryInCategoryAndOrSubCategoryTypeGuard(
            categoryAndOrSubCategory,
            p,
            q,
            r
          )
        ) {
          assignPropsOfCategoryAndOrSubCategory(
            [
              'isClickedEdit',   
              'isClickedSubCategory',
              'isSubCategoryCollapsed',
              'isClickedShowImageLink',
              'isClickedAddImageLink'
            ] as unknown as [KeysOfClassifiedNavigationLinksType][],
            [
              false,
              false,
              false,
              false,
              false
            ],
            categoryAndOrSubCategory,
            p,
            q,
            r
          );
          for(
            let s=0;
            s<Object.keys(
              (
                (
                  (
                    categoryAndOrSubCategory.value as ClassifiedNavigationLinksType
                  )[p].subcategory as ClassifiedNavigationLinksType
                )[q].subcategory as ClassifiedNavigationLinksType
              )[r].subcategory as ClassifiedNavigationLinksType
            ).length;
            s++
          ) {
            if(
              (
                (
                  (
                    (
                      categoryAndOrSubCategory.value as ClassifiedNavigationLinksType
                    )[p].subcategory as ClassifiedNavigationLinksType
                  )[q].subcategory as ClassifiedNavigationLinksType
                )[r].subcategory as ClassifiedNavigationLinksType
              )[s].name === ''
            ) {
              assignPropsOfCategoryAndOrSubCategory(
                'isClickedSubCategory',
                false,
                categoryAndOrSubCategory,
                p,
                q,
                r
              );
              delete (
                (
                  (
                    (
                      categoryAndOrSubCategory.value as ClassifiedNavigationLinksType
                    )[p].subcategory as ClassifiedNavigationLinksType
                  )[q].subcategory as ClassifiedNavigationLinksType
                )[r].subcategory as ClassifiedNavigationLinksType
              )[s];
            }
            else {
              assignPropsOfCategoryAndOrSubCategory(
                [
                  'isClickedEdit',   
                  'isClickedAddCollections',
                  'isClickedShowCollections'
                ] as unknown as [KeysOfClassifiedNavigationLinksType][],
                [
                  false,
                  false,
                  false
                ],
                categoryAndOrSubCategory,
                p,
                q,
                r,
                s
              );
            }
          }
        }
        else {
          assignPropsOfCategoryAndOrSubCategory(
            'isSubCategoryCollapsed',
            false,
            categoryAndOrSubCategory,
            p,
            q
          );
          if(
            (
              (
                (
                  categoryAndOrSubCategory.value as ClassifiedNavigationLinksType
                )[p].subcategory as ClassifiedNavigationLinksType
              )[q].subcategory as ClassifiedNavigationLinksType
            )[r].name === ''
          ) {
            assignPropsOfCategoryAndOrSubCategory(
              'isClickedSubCategory',
              false,
              categoryAndOrSubCategory,
              p,
              q
            );
            delete (
              (
                (
                  categoryAndOrSubCategory.value as ClassifiedNavigationLinksType
                )[p].subcategory as ClassifiedNavigationLinksType
              )[q].subcategory as ClassifiedNavigationLinksType
            )[r];
          }
          else {
            assignPropsOfCategoryAndOrSubCategory(
              [
                'isClickedEdit',   
                'isClickedShowImageLink',
                'isClickedAddImageLink',
                'isClickedShowCollections',
                'isClickedAddCollections'
              ] as unknown as [KeysOfClassifiedNavigationLinksType][],
              [
                false,
                false,
                false,
                false,
                false
              ],
              categoryAndOrSubCategory,
              p,
              q,
              r
            );
          }
        }
      }
    }
    else {
      if(
        (
          (
            categoryAndOrSubCategory.value as ClassifiedNavigationLinksType
          )[p].subcategory as ClassifiedNavigationLinksType
        )[q].name === ''
      ) {
        assignPropsOfCategoryAndOrSubCategory(
          'isClickedSubCategory',
          false,
          categoryAndOrSubCategory,
          p
        );
        delete (
          (
            categoryAndOrSubCategory.value as ClassifiedNavigationLinksType
          )[p].subcategory as ClassifiedNavigationLinksType
        )[q];
      }
      else {
        assignPropsOfCategoryAndOrSubCategory(
          [
            'isClickedEdit',   
            'isClickedShowCollections',
            'isClickedAddCollections'
          ] as unknown as [KeysOfClassifiedNavigationLinksType][],
          [
            false,
            false,
            false
          ],
          categoryAndOrSubCategory,
          p,
          q
        );
      }
    }
  }
  triggerRef(categoryAndOrSubCategory);
}

function pButNotI(p: number, categoryAndOrSubCategory: ShallowRef<ClassifiedNavigationLinksType>) {
  if(
    (
      categoryAndOrSubCategory.value as ClassifiedNavigationLinksType
    )[p].name === ''
  ) {
    delete (
      categoryAndOrSubCategory.value as ClassifiedNavigationLinksType
    )[p];
  }
  else {
    if(
      subCategoryInCategoryAndOrSubCategoryTypeGuard(
        categoryAndOrSubCategory,
        p
      )
    ) {
      assignPropsOfCategoryAndOrSubCategory(
        [
          'isClickedEdit',   
          'isClickedSubCategory',
          'isSubCategoryCollapsed'
        ] as unknown as [KeysOfClassifiedNavigationLinksType][],
        [
          false,
          false,
          false
        ],
        categoryAndOrSubCategory,
        p
      );
      for(
        let q=0;
        q<Object.keys(
          (
            categoryAndOrSubCategory.value as ClassifiedNavigationLinksType
          )[p].subcategory as ClassifiedNavigationLinksType
        ).length;
        q++
      ) {
        if(
          subCategoryInCategoryAndOrSubCategoryTypeGuard(
            categoryAndOrSubCategory,
            p,
            q
          )
        ) {
          assignPropsOfCategoryAndOrSubCategory(
            [
              'isClickedEdit',   
              'isClickedSubCategory',
              'isSubCategoryCollapsed'
            ] as unknown as [KeysOfClassifiedNavigationLinksType][],
            [
              false,
              false,
              false
            ],
            categoryAndOrSubCategory,
            p,
            q
          );
          for(
            let r=0;
            r<Object.keys(
              (
                (
                  categoryAndOrSubCategory.value as ClassifiedNavigationLinksType
                )[p].subcategory as ClassifiedNavigationLinksType
              )[q].subcategory as ClassifiedNavigationLinksType
            ).length;
            r++
          ) {
            if(
              subCategoryInCategoryAndOrSubCategoryTypeGuard(
                categoryAndOrSubCategory,
                p,
                q,
                r
              )
            ) {
              assignPropsOfCategoryAndOrSubCategory(
                [
                  'isClickedEdit',   
                  'isClickedSubCategory',
                  'isSubCategoryCollapsed',
                  'isClickedAddImageLink',
                  'isClickedShowImageLink'
                ] as unknown as [KeysOfClassifiedNavigationLinksType][],
                [
                  false,
                  false,
                  false,
                  false,
                  false
                ],
                categoryAndOrSubCategory,
                p,
                q,
                r
              );
              for(
                let s=0;
                s<Object.keys(
                  (
                    (
                      (
                        categoryAndOrSubCategory.value as ClassifiedNavigationLinksType
                      )[p].subcategory as ClassifiedNavigationLinksType
                    )[q].subcategory as ClassifiedNavigationLinksType
                  )[r].subcategory as ClassifiedNavigationLinksType
                ).length;
                s++
              ) {
                if(
                  (
                    (
                      (
                        (
                          categoryAndOrSubCategory.value as ClassifiedNavigationLinksType
                        )[p].subcategory as ClassifiedNavigationLinksType
                      )[q].subcategory as ClassifiedNavigationLinksType
                    )[r].subcategory as ClassifiedNavigationLinksType
                  )[s].name === ''
                ) {
                  assignPropsOfCategoryAndOrSubCategory(
                    'isClickedSubCategory',
                    false,
                    categoryAndOrSubCategory,
                    p,
                    q,
                    r
                  );
                  delete (
                    (
                      (
                        (
                          categoryAndOrSubCategory.value as ClassifiedNavigationLinksType
                        )[p].subcategory as ClassifiedNavigationLinksType
                      )[q].subcategory as ClassifiedNavigationLinksType
                    )[r].subcategory as ClassifiedNavigationLinksType
                  )[s];
                }
                else {
                  assignPropsOfCategoryAndOrSubCategory(
                    [
                      'isClickedEdit',   
                      'isClickedShowCollections',
                      'isClickedAddCollections'
                    ] as unknown as [KeysOfClassifiedNavigationLinksType][],
                    [
                      false,
                      false,
                      false
                    ],
                    categoryAndOrSubCategory,
                    p,
                    q,
                    r,
                    s
                  );
                }
              }
            }
            else {
              if(
                (
                  (
                    (
                      categoryAndOrSubCategory.value as ClassifiedNavigationLinksType
                    )[p].subcategory as ClassifiedNavigationLinksType
                  )[q].subcategory as ClassifiedNavigationLinksType
                )[r].name === ''
              ) {
                assignPropsOfCategoryAndOrSubCategory(
                  'isClickedSubCategory',
                  false,
                  categoryAndOrSubCategory,
                  p,
                  q
                );
                delete (
                  (
                    (
                      categoryAndOrSubCategory.value as ClassifiedNavigationLinksType
                    )[p].subcategory as ClassifiedNavigationLinksType
                  )[q].subcategory as ClassifiedNavigationLinksType
                )[r];
              }
              else {
                assignPropsOfCategoryAndOrSubCategory(
                  [
                    'isClickedEdit',   
                    'isClickedShowImageLink',
                    'isClickedAddImageLink',
                    'isClickedShowCollections',
                    'isClickedAddCollections'
                  ] as unknown as [KeysOfClassifiedNavigationLinksType][],
                  [
                    false,
                    false,
                    false,
                    false,
                    false
                  ],
                  categoryAndOrSubCategory,
                  p,
                  q,
                  r
                );
              }
            }
          }
        }
        else {
          if(
            (
              (
                categoryAndOrSubCategory.value as ClassifiedNavigationLinksType
              )[p].subcategory as ClassifiedNavigationLinksType
            )[q].name === ''
          ) {
            assignPropsOfCategoryAndOrSubCategory(
              'isClickedSubCategory',
              false,
              categoryAndOrSubCategory,
              p
            );
            delete (
              (
                categoryAndOrSubCategory.value as ClassifiedNavigationLinksType
              )[p].subcategory as ClassifiedNavigationLinksType
            )[q];
          }
          else {
            assignPropsOfCategoryAndOrSubCategory(
              [
                'isClickedEdit',   
                'isClickedShowCollections',
                'isClickedAddCollections'
              ] as unknown as [KeysOfClassifiedNavigationLinksType][],
              [
                false,
                false,
                false
              ],
              categoryAndOrSubCategory,
              p,
              q
            );
          }
        }
      }
    }
    else {
      if(
        (
          categoryAndOrSubCategory.value as ClassifiedNavigationLinksType
        )[p].name === ''
      ) {
        delete (
          categoryAndOrSubCategory.value as ClassifiedNavigationLinksType
        )[p];
      }
      else {
        assignPropsOfCategoryAndOrSubCategory(
          [
            'isClickedEdit',   
            'isClickedShowCollections',
            'isClickedAddCollections'
          ] as unknown as [KeysOfClassifiedNavigationLinksType][],
          [
            false,
            false,
            false
          ],
          categoryAndOrSubCategory,
          p
        );
      }
    }
  }
  triggerRef(categoryAndOrSubCategory);
}

export function toggleButtonIcon(status: string[], icon: string[], categoryAndOrSubCategory: ShallowRef<ClassifiedNavigationLinksType>, i?: number | undefined, j?: number | undefined, k?: number | undefined, l?: number | undefined) {
  if(j===undefined && k===undefined && l===undefined) {
    if(icon.length === 2) {
      if(
        (
          (categoryAndOrSubCategory.value as ClassifiedNavigationLinksType)[((i as number)-1)] as ClassifiedNavigationLinksType[number]
        )[status[0] as 'isHoveredSubCategory' | 'isHoveredAddCollections' | 'isHoveredShowCollections' | 'isHoveredEdit']
        ||
        (
          (categoryAndOrSubCategory.value as ClassifiedNavigationLinksType)[((i as number)-1)] as ClassifiedNavigationLinksType[number]
        )[status[1] as 'isClickedSubCategory' | 'isClickedAddCollections' | 'isClickedShowCollections' | 'isClickedEdit']
      ) {
        return icon[0];
      }
      else {
        return icon[1];
      }
    }
    else {
      if(
        (
          (categoryAndOrSubCategory.value as ClassifiedNavigationLinksType)[((i as number)-1)] as ClassifiedNavigationLinksType[number]
        )[status[0] as 'isHoveredExpand']
        &&
        !(
          (categoryAndOrSubCategory.value as ClassifiedNavigationLinksType)[((i as number)-1)] as ClassifiedNavigationLinksType[number]
        )[status[1] as 'isSubCategoryCollapsed']
      ) {
        return icon[0]; 
      }
      else {
        if(
          (
            (categoryAndOrSubCategory.value as ClassifiedNavigationLinksType)[((i as number)-1)] as ClassifiedNavigationLinksType[number]
          )[status[1] as 'isSubCategoryCollapsed']
        ) {
          return icon[1];
        }
        else { 
          return icon[2];
        }
      }
    }
  }
  else {
    if(k===undefined && l===undefined) {
      if(icon.length === 2) {
        if(
          (
            (
              (
                (categoryAndOrSubCategory.value as ClassifiedNavigationLinksType)[((i as number)-1)] as ClassifiedNavigationLinksType[number]
              ).subcategory as ClassifiedNavigationLinksType
            )[(j as number)-1] as ClassifiedNavigationLinksType[number]
          )[status[0] as 'isHoveredSubCategory' | 'isHoveredAddCollections' | 'isHoveredShowCollections' | 'isHoveredEdit']
          ||
          (
            (
              (
                (categoryAndOrSubCategory.value as ClassifiedNavigationLinksType)[((i as number)-1)] as ClassifiedNavigationLinksType[number]
              ).subcategory as ClassifiedNavigationLinksType
            )[(j as number)-1] as ClassifiedNavigationLinksType[number]
          )[status[1] as 'isClickedSubCategory' | 'isClickedAddCollections' | 'isClickedShowCollections' | 'isClickedEdit']
        ) {
          return icon[0];
        } 
        else { 
          return icon[1];
        }
      }
      else {
        if(
          (
            (
              (
                (categoryAndOrSubCategory.value as ClassifiedNavigationLinksType)[((i as number)-1)] as ClassifiedNavigationLinksType[number]
              ).subcategory as ClassifiedNavigationLinksType
            )[((j as number)-1)] as ClassifiedNavigationLinksType[number]
          )[status[0] as 'isHoveredExpand']
          &&
          !(
            (
              (
                (categoryAndOrSubCategory.value as ClassifiedNavigationLinksType)[((i as number)-1)] as ClassifiedNavigationLinksType[number]
              ).subcategory as ClassifiedNavigationLinksType
            )[((j as number)-1)] as ClassifiedNavigationLinksType[number]
          )[status[1] as 'isSubCategoryCollapsed']
        ) {
          return icon[0];
        } 
        else {
          if(
            (
              (
                (
                  (categoryAndOrSubCategory.value as ClassifiedNavigationLinksType)[((i as number)-1)] as ClassifiedNavigationLinksType[number]
                ).subcategory as ClassifiedNavigationLinksType
              )[((j as number)-1)] as ClassifiedNavigationLinksType[number]
            )[status[1] as 'isSubCategoryCollapsed']
          ) {
            return icon[1];
          }
          else {
            return icon[2];
          }
        }
      }
    }
    else {
      if(l===undefined) {
        if(icon.length === 2) {
          if(
            (
              (
                (
                  (
                    (categoryAndOrSubCategory.value as ClassifiedNavigationLinksType)[((i as number)-1)] as ClassifiedNavigationLinksType[number]
                  ).subcategory as ClassifiedNavigationLinksType
                )[(j as number)-1].subcategory as ClassifiedNavigationLinksType
              )[((k as number)-1)] as ClassifiedNavigationLinksType[number]
            )[status[0] as 'isHoveredSubCategory' | 'isHoveredAddCollections' | 'isHoveredShowCollections' | 'isHoveredEdit']
            ||
            (
              (
                (
                  (
                    (categoryAndOrSubCategory.value as ClassifiedNavigationLinksType)[((i as number)-1)] as ClassifiedNavigationLinksType[number]
                  ).subcategory as ClassifiedNavigationLinksType
                )[(j as number)-1].subcategory as ClassifiedNavigationLinksType
              )[((k as number)-1)] as ClassifiedNavigationLinksType[number]
            )[status[1] as 'isClickedSubCategory' | 'isClickedAddCollections' | 'isClickedShowCollections' | 'isClickedEdit']
          ) {
            return icon[0]; 
          }
          else { 
            return icon[1];
          }
        }
        else {
          if(
            (
              (
                (
                  (
                    (categoryAndOrSubCategory.value as ClassifiedNavigationLinksType)[((i as number)-1)] as ClassifiedNavigationLinksType[number]
                  ).subcategory as ClassifiedNavigationLinksType
                )[(j as number)-1].subcategory as ClassifiedNavigationLinksType
              )[((k as number)-1)] as ClassifiedNavigationLinksType[number]
            )[status[0] as 'isHoveredExpand']
            &&
            !(
              (
                (
                  (
                    (categoryAndOrSubCategory.value as ClassifiedNavigationLinksType)[((i as number)-1)] as ClassifiedNavigationLinksType[number]
                  ).subcategory as ClassifiedNavigationLinksType
                )[(j as number)-1].subcategory as ClassifiedNavigationLinksType
              )[((k as number)-1)] as ClassifiedNavigationLinksType[number]
            )[status[1] as 'isSubCategoryCollapsed']
          ) {
            return icon[0];
          } 
          else {
            if(
              (
                (
                  (
                    (
                      (categoryAndOrSubCategory.value as ClassifiedNavigationLinksType)[((i as number)-1)] as ClassifiedNavigationLinksType[number]
                    ).subcategory as ClassifiedNavigationLinksType
                  )[(j as number)-1].subcategory as ClassifiedNavigationLinksType
                )[((k as number)-1)] as ClassifiedNavigationLinksType[number]
              )[status[1] as 'isSubCategoryCollapsed']
            ) {
              return icon[1];
            }
            else {
              return icon[2];
            }
          }
        }
      }
      else {
        if(icon.length === 2) {
          if(
            (
              (
                (
                  (
                    (
                      (
                        (categoryAndOrSubCategory.value as ClassifiedNavigationLinksType)[((i as number)-1)] as ClassifiedNavigationLinksType[number]
                      ).subcategory as ClassifiedNavigationLinksType
                    )[(j as number)-1].subcategory as ClassifiedNavigationLinksType
                  )[((k as number)-1)] as ClassifiedNavigationLinksType[number]
                ).subcategory as ClassifiedNavigationLinksType
              )[(l as number)-1] as ClassifiedNavigationLinksType[number]
            )[status[0] as 'isHoveredAddCollections' | 'isHoveredShowCollections' | 'isHoveredEdit']
            ||
            (
              (
                (
                  (
                    (
                      (
                        (categoryAndOrSubCategory.value as ClassifiedNavigationLinksType)[((i as number)-1)] as ClassifiedNavigationLinksType[number]
                      ).subcategory as ClassifiedNavigationLinksType
                    )[(j as number)-1].subcategory as ClassifiedNavigationLinksType
                  )[((k as number)-1)] as ClassifiedNavigationLinksType[number]
                ).subcategory as ClassifiedNavigationLinksType
              )[(l as number)-1] as ClassifiedNavigationLinksType[number]
            )[status[1] as 'isClickedAddCollections' | 'isClickedShowCollections' | 'isClickedEdit']
          ) {
            return icon[0];
          }
          else {
            return icon[1];
          }
        }
      }
    }
  }
}

export function callMouseOverOrLeave(status: 'isHoveredShowImageLink' | 'isHoveredAddImageLink' | 'isHoveredEdit' | 'isHoveredSubCategory' | 'isHoveredShowCollections' | 'isHoveredAddCollections' | 'isHoveredExpand', categoryAndOrSubCategory: ShallowRef<ClassifiedNavigationLinksType>, booleanValue: Boolean, i?: number | undefined, j?: number | undefined, k?: number | undefined, l?: number | undefined) {
  if(j===undefined && k===undefined && l===undefined) {
    (
      (categoryAndOrSubCategory.value as ClassifiedNavigationLinksType)[((i as number)-1)] as ClassifiedNavigationLinksType[number]
    )[status] = booleanValue;
  }
  else {
    if(k===undefined && l===undefined) {
      (
        (
          (
            (categoryAndOrSubCategory.value as ClassifiedNavigationLinksType)[((i as number)-1)] as ClassifiedNavigationLinksType[number]
          ).subcategory as ClassifiedNavigationLinksType
        )[(j as number)-1] as ClassifiedNavigationLinksType[number]
      )[status] = booleanValue;
    }
    else {
      if(l===undefined) {
        (
          (
            (
              (
                (
                  (categoryAndOrSubCategory.value as ClassifiedNavigationLinksType)[((i as number)-1)] as ClassifiedNavigationLinksType[number]
                ).subcategory as ClassifiedNavigationLinksType
              )[(j as number)-1] as ClassifiedNavigationLinksType[number]
            ).subcategory as ClassifiedNavigationLinksType
          )[((k as number)-1)] as ClassifiedNavigationLinksType[number]
        )[status] = booleanValue;
      }
      else {
        (
          (
            (
              (
                (
                  (
                    (
                      (categoryAndOrSubCategory.value as ClassifiedNavigationLinksType)[((i as number)-1)] as ClassifiedNavigationLinksType[number]
                    ).subcategory as ClassifiedNavigationLinksType
                  )[(j as number)-1] as ClassifiedNavigationLinksType[number]
                ).subcategory as ClassifiedNavigationLinksType
              )[((k as number)-1)] as ClassifiedNavigationLinksType[number]
            ).subcategory as ClassifiedNavigationLinksType
          )[((l as number)-1)] as ClassifiedNavigationLinksType[number]
        )[status] = booleanValue;
      }
    }
  }
  triggerRef(categoryAndOrSubCategory);
}
  
export function addCategoryAndOrSubCategory(i: number | undefined, j: number | undefined, k: number | undefined, level: 'NORMAL' | 'FIRST' | 'SECOND' | 'THIRD', newCategoryOrSubCategory: ShallowRef<NewCategoryOrSubCategoryDetailsType>, categoryAndOrSubCategory: ShallowRef<ClassifiedNavigationLinksType>) {
  newCategoryOrSubCategory.value = {
    name: '', 
    extraname: '',
    nameRef: null,
    directlinkornot: 'YES', 
    level,
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
  collapseAnyExpandButtonAndFormExceptTheOneClicked(
    'CATEGORY-OR-SUBCATEGORY-FORM', 
    categoryAndOrSubCategory, 
    i, 
    j, 
    k, 
    undefined
  );
  
  if(level === 'NORMAL') {
    if(Object.keys(categoryAndOrSubCategory.value).length === 0) {
      categoryAndOrSubCategory.value = {
        [0]: {
          img: undefined,
          url: undefined,
          extraname: undefined,
          isdirectlink: false, 
          isSubCategoryCollapsed: false,  
          isClickedAddCollections: false, 
          isHoveredShowCollections: false, 
          isClickedAddImageLink: false, 
          isHoveredAddImageLink: false, 
          isHoveredEdit: false, 
          isClickedEdit: false, 
          isClickedShowCollections: false, 
          isHoveredAddCollections: false, 
          isClickedSubCategory: false, 
          isHoveredExpand: false,
          isHoveredSubCategory: false,
          name: '',
          subcategory: undefined
        }
      }
    }
    else {
      if(categoryAndOrSubCategory.value[Object.keys(categoryAndOrSubCategory.value).length - 1].name !== '') {
        categoryAndOrSubCategory.value = {
          ...categoryAndOrSubCategory.value,
          [Object.keys(categoryAndOrSubCategory.value).length]: {
            img: undefined,
            url: undefined,
            extraname: undefined,
            isdirectlink: false, 
            isSubCategoryCollapsed: false,  
            isClickedAddCollections: false, 
            isHoveredShowCollections: false, 
            isClickedAddImageLink: false, 
            isHoveredAddImageLink: false, 
            isHoveredEdit: false, 
            isClickedEdit: false, 
            isClickedShowCollections: false, 
            isHoveredAddCollections: false, 
            isClickedSubCategory: false, 
            isHoveredExpand: false,
            isHoveredSubCategory: false,
            name: '',
            subcategory: undefined
          }
        }
      }
    }
    const t = setInterval(() => {
      if(newCategoryOrSubCategory.value.nameRef) {
        scrollToElement(newCategoryOrSubCategory.value.nameRef, 0);
        clearInterval(t);
      }
    }, 200);
  }
  else if(level === 'FIRST') {
    (categoryAndOrSubCategory.value as ClassifiedNavigationLinksType)[i as number].isSubCategoryCollapsed = true;
    (categoryAndOrSubCategory.value as ClassifiedNavigationLinksType)[i as number].isClickedSubCategory = true;
    triggerRef(categoryAndOrSubCategory);
    if(
      !(
        'subcategory' in (
          categoryAndOrSubCategory.value as ClassifiedNavigationLinksType
        )[i as number]
      )
      ||
      (
        'subcategory' in (
          categoryAndOrSubCategory.value as ClassifiedNavigationLinksType
        )[i as number]
        && 
        (
          (
            (
              categoryAndOrSubCategory.value as ClassifiedNavigationLinksType
            )[i as number].subcategory as ClassifiedNavigationLinksType
          ) === undefined
          ||
          Object.keys(
            (
              categoryAndOrSubCategory.value as ClassifiedNavigationLinksType
            )[i as number].subcategory as ClassifiedNavigationLinksType
          ).length === 0
        )
      )
    ) {
      if(!(
        'subcategory' in (
          categoryAndOrSubCategory.value as ClassifiedNavigationLinksType
        )[i as number]
      )) {
        (
          categoryAndOrSubCategory.value as ClassifiedNavigationLinksType
        )[i as number] = {
          ...(
            categoryAndOrSubCategory.value as ClassifiedNavigationLinksType
          )[i as number],
          subcategory: {
            [0]: {
              img: undefined,
              url: undefined,
              extraname: undefined,
              isdirectlink: false, 
              isSubCategoryCollapsed: false,  
              isClickedAddCollections: false, 
              isHoveredShowCollections: false, isClickedAddImageLink: false, isHoveredAddImageLink: false, isHoveredEdit: false, isClickedEdit: false, isClickedShowCollections: false, isHoveredAddCollections: false, 
              isClickedSubCategory: false, 
              isHoveredExpand: false,
              isHoveredSubCategory: false,
              name: '',
              subcategory: undefined
            }
          } as ClassifiedNavigationLinksType
        } as ClassifiedNavigationLinksType[number];
      }
      else {
        (
          (
            categoryAndOrSubCategory.value as ClassifiedNavigationLinksType
          )[i as number].subcategory as ClassifiedNavigationLinksType
        ) = {
          [0]: {
            img: undefined,
            url: undefined,
            extraname: undefined,
            isdirectlink: false, 
            isSubCategoryCollapsed: false,  
            isClickedAddCollections: false, 
            isHoveredShowCollections: false, isClickedAddImageLink: false, isHoveredAddImageLink: false, isHoveredEdit: false, isClickedEdit: false, isClickedShowCollections: false, isHoveredAddCollections: false, 
            isClickedSubCategory: false, 
            isHoveredExpand: false,
            isHoveredSubCategory: false,
            name: '',
            subcategory: undefined
          }
        }
      }
    }
    else {
      if(
        (
          (
            categoryAndOrSubCategory.value as ClassifiedNavigationLinksType
          )[i as number].subcategory as ClassifiedNavigationLinksType
        )[
          Object.keys((
            (
              categoryAndOrSubCategory.value as ClassifiedNavigationLinksType
            )[i as number].subcategory as ClassifiedNavigationLinksType
          )).length - 1
        ].name !== ''
      ) {
        (
          (
            categoryAndOrSubCategory.value as ClassifiedNavigationLinksType
          )[i as number].subcategory as ClassifiedNavigationLinksType
        ) = {
          ...(
            (
              categoryAndOrSubCategory.value as ClassifiedNavigationLinksType
            )[i as number].subcategory as ClassifiedNavigationLinksType
          ),
          [Object.keys(
            (
              (
                categoryAndOrSubCategory.value as ClassifiedNavigationLinksType
              )[i as number].subcategory as ClassifiedNavigationLinksType
            )).length
          ]: {
            img: undefined,
            url: undefined,
            extraname: undefined,
            isdirectlink: false, 
            isSubCategoryCollapsed: false,  
            isClickedAddCollections: false, 
            isHoveredShowCollections: false, isClickedAddImageLink: false, isHoveredAddImageLink: false, isHoveredEdit: false, isClickedEdit: false, isClickedShowCollections: false, isHoveredAddCollections: false, 
            isClickedSubCategory: false, 
            isHoveredExpand: false,
            isHoveredSubCategory: false,
            name: '',
            subcategory: undefined
          }
        }
      }
    }
    const t = setInterval(() => {
      if(newCategoryOrSubCategory.value.nameRef) {
        scrollToElement(newCategoryOrSubCategory.value.nameRef, 0);
        clearInterval(t);
      }
    }, 200);
  }
  else if(level === 'SECOND') {
    (
      (categoryAndOrSubCategory.value as ClassifiedNavigationLinksType)[(i as number)] as ClassifiedNavigationLinksType[number]
    ).isSubCategoryCollapsed = true;
    (
      (categoryAndOrSubCategory.value as ClassifiedNavigationLinksType)[(i as number)] as ClassifiedNavigationLinksType[number]
    ).isClickedSubCategory = false;
    (
      (
        (
          (categoryAndOrSubCategory.value as ClassifiedNavigationLinksType)[(i as number)] as ClassifiedNavigationLinksType[number]
        ).subcategory as ClassifiedNavigationLinksType
      )[j as number] as ClassifiedNavigationLinksType[number]
    ).isSubCategoryCollapsed = true;
    (
      (
        (
          (categoryAndOrSubCategory.value as ClassifiedNavigationLinksType)[(i as number)] as ClassifiedNavigationLinksType[number]
        ).subcategory as ClassifiedNavigationLinksType
      )[j as number] as ClassifiedNavigationLinksType[number]
    ).isClickedSubCategory = true;
    triggerRef(categoryAndOrSubCategory);
    if(
      !(
        'subcategory' in (
          (
            ((categoryAndOrSubCategory.value as ClassifiedNavigationLinksType)[i as number] as ClassifiedNavigationLinksType[number]).subcategory as ClassifiedNavigationLinksType
          )[j as number] as ClassifiedNavigationLinksType[number]
        )
      )
      ||
      (
        'subcategory' in (
          (
            ((categoryAndOrSubCategory.value as ClassifiedNavigationLinksType)[i as number] as ClassifiedNavigationLinksType[number]).subcategory as ClassifiedNavigationLinksType
          )[j as number] as ClassifiedNavigationLinksType[number]
        )
        && 
        (
          (
            (
              (
                ((categoryAndOrSubCategory.value as ClassifiedNavigationLinksType)[i as number] as ClassifiedNavigationLinksType[number]).subcategory as ClassifiedNavigationLinksType
              )[j as number] as ClassifiedNavigationLinksType[number]
            ).subcategory as ClassifiedNavigationLinksType
          ) === undefined
          ||
          Object.keys(
            (
              (
                ((categoryAndOrSubCategory.value as ClassifiedNavigationLinksType)[i as number] as ClassifiedNavigationLinksType[number]).subcategory as ClassifiedNavigationLinksType
              )[j as number] as ClassifiedNavigationLinksType[number]
            ).subcategory as ClassifiedNavigationLinksType
          ).length === 0
        )
      )
    ) {
      if(!(
        'subcategory' in (
          (
            ((categoryAndOrSubCategory.value as ClassifiedNavigationLinksType)[i as number] as ClassifiedNavigationLinksType[number]).subcategory as ClassifiedNavigationLinksType
          )[j as number] as ClassifiedNavigationLinksType[number]
        )
      )) {
        (
          (
            ((categoryAndOrSubCategory.value as ClassifiedNavigationLinksType)[i as number] as ClassifiedNavigationLinksType[number]).subcategory as ClassifiedNavigationLinksType
          )[j as number] as ClassifiedNavigationLinksType[number]
        ) = {
          ...(
            (
              ((categoryAndOrSubCategory.value as ClassifiedNavigationLinksType)[i as number] as ClassifiedNavigationLinksType[number]).subcategory as ClassifiedNavigationLinksType
            )[j as number] as ClassifiedNavigationLinksType[number]
          ),
          subcategory: {
            [0]: {
              img: undefined,
              url: undefined,
              extraname: undefined,
              isdirectlink: false, 
              isSubCategoryCollapsed: false,  
              isClickedAddCollections: false, 
              isHoveredShowCollections: false, isClickedAddImageLink: false, isHoveredAddImageLink: false, isHoveredEdit: false, isClickedEdit: false, isClickedShowCollections: false, isHoveredAddCollections: false, 
              isClickedSubCategory: false, 
              isHoveredExpand: false,
              name: '',
              subcategory: undefined
            }
          } as ClassifiedNavigationLinksType
        } as ClassifiedNavigationLinksType[number];
      }
      else {
        (
          (
            (
              ((categoryAndOrSubCategory.value as ClassifiedNavigationLinksType)[i as number] as ClassifiedNavigationLinksType[number]).subcategory as ClassifiedNavigationLinksType
            )[j as number] as ClassifiedNavigationLinksType[number]
          ).subcategory as ClassifiedNavigationLinksType
        ) = {
          [0]: {
            img: undefined,
            url: undefined,
            extraname: undefined,
            isdirectlink: false, 
            isSubCategoryCollapsed: false, 
            isClickedAddCollections: false, 
            isHoveredShowCollections: false, isClickedAddImageLink: false, isHoveredAddImageLink: false, isHoveredEdit: false, isClickedEdit: false, isClickedShowCollections: false, isHoveredAddCollections: false, 
            isClickedSubCategory: false, 
            isHoveredExpand: false,
            isHoveredSubCategory: false,
            name: '',
            subcategory: undefined
          } as ClassifiedNavigationLinksType[number]
        } as ClassifiedNavigationLinksType;
      }
    }
    else {
      if(
        (
          (
            (
              ((categoryAndOrSubCategory.value as ClassifiedNavigationLinksType)[i as number] as ClassifiedNavigationLinksType[number]).subcategory as ClassifiedNavigationLinksType
            )[j as number] as ClassifiedNavigationLinksType[number]
          ).subcategory as ClassifiedNavigationLinksType
        )[
          Object.keys(
            (
              (
                ((categoryAndOrSubCategory.value as ClassifiedNavigationLinksType)[i as number] as ClassifiedNavigationLinksType[number]).subcategory as ClassifiedNavigationLinksType
              )[j as number] as ClassifiedNavigationLinksType[number]
            ).subcategory as ClassifiedNavigationLinksType
          ).length - 1
        ].name !== ''
      ) {
        (
          (
            (
              ((categoryAndOrSubCategory.value as ClassifiedNavigationLinksType)[i as number] as ClassifiedNavigationLinksType[number]).subcategory as ClassifiedNavigationLinksType
            )[j as number] as ClassifiedNavigationLinksType[number]
          ).subcategory as ClassifiedNavigationLinksType
        ) = {
          ...(
            (
              (
                ((categoryAndOrSubCategory.value as ClassifiedNavigationLinksType)[i as number] as ClassifiedNavigationLinksType[number]).subcategory as ClassifiedNavigationLinksType
              )[j as number] as ClassifiedNavigationLinksType[number]
            ).subcategory as ClassifiedNavigationLinksType
          ),
          [
            Object.keys(
              (
                (
                  ((categoryAndOrSubCategory.value as ClassifiedNavigationLinksType)[i as number] as ClassifiedNavigationLinksType[number]).subcategory as ClassifiedNavigationLinksType
                )[j as number] as ClassifiedNavigationLinksType[number]
              ).subcategory as ClassifiedNavigationLinksType
            ).length
          ]: {
            img: undefined,
            url: undefined,
            extraname: undefined,
            isdirectlink: false, 
            isSubCategoryCollapsed: false, 
            isClickedAddCollections: false, 
            isHoveredShowCollections: false, isClickedAddImageLink: false, isHoveredAddImageLink: false, isHoveredEdit: false, isClickedEdit: false, isClickedShowCollections: false, isHoveredAddCollections: false, 
            isHoveredSubCategory: false,
            isClickedSubCategory: false, 
            isHoveredExpand: false,
            name: '',
            subcategory: undefined
          }
        }
      }
    }
    const t = setInterval(() => {
      if(newCategoryOrSubCategory.value.nameRef) {
        scrollToElement(newCategoryOrSubCategory.value.nameRef, 1);
        clearInterval(t);
      }
    }, 200);
  }
  else {
    (
      (categoryAndOrSubCategory.value as ClassifiedNavigationLinksType)[(i as number)] as ClassifiedNavigationLinksType[number]
    ).isSubCategoryCollapsed = true;
    (
      (categoryAndOrSubCategory.value as ClassifiedNavigationLinksType)[(i as number)] as ClassifiedNavigationLinksType[number]
    ).isClickedSubCategory = false;
    (
      (
        (
          (categoryAndOrSubCategory.value as ClassifiedNavigationLinksType)[(i as number)] as ClassifiedNavigationLinksType[number]
        ).subcategory as ClassifiedNavigationLinksType
      )[j as number] as ClassifiedNavigationLinksType[number]
    ).isSubCategoryCollapsed = true;
    (
      (
        (
          (categoryAndOrSubCategory.value as ClassifiedNavigationLinksType)[(i as number)] as ClassifiedNavigationLinksType[number]
        ).subcategory as ClassifiedNavigationLinksType
      )[j as number] as ClassifiedNavigationLinksType[number]
    ).isClickedSubCategory = false;
    (
      (
        (
          (
            (categoryAndOrSubCategory.value as ClassifiedNavigationLinksType)[(i as number)] as ClassifiedNavigationLinksType[number]
          ).subcategory as ClassifiedNavigationLinksType
        )[j as number].subcategory as ClassifiedNavigationLinksType
      )[(k as number)] as ClassifiedNavigationLinksType[number]
    ).isSubCategoryCollapsed = true;
    (
      (
        (
          (
            (categoryAndOrSubCategory.value as ClassifiedNavigationLinksType)[(i as number)] as ClassifiedNavigationLinksType[number]
          ).subcategory as ClassifiedNavigationLinksType
        )[j as number].subcategory as ClassifiedNavigationLinksType
      )[(k as number)] as ClassifiedNavigationLinksType[number]
    ).isClickedSubCategory = true;
    triggerRef(categoryAndOrSubCategory);
    if(
      !(
        'subcategory' in (
          (
            (
              (
                (categoryAndOrSubCategory.value as ClassifiedNavigationLinksType)[(i as number)] as ClassifiedNavigationLinksType[number]
              ).subcategory as ClassifiedNavigationLinksType
            )[j as number].subcategory as ClassifiedNavigationLinksType
          )[(k as number)] as ClassifiedNavigationLinksType[number]
        )
      )
      ||
      (
        'subcategory' in (
          (
            (
              (
                (categoryAndOrSubCategory.value as ClassifiedNavigationLinksType)[(i as number)] as ClassifiedNavigationLinksType[number]
              ).subcategory as ClassifiedNavigationLinksType
            )[j as number].subcategory as ClassifiedNavigationLinksType
          )[(k as number)] as ClassifiedNavigationLinksType[number]
        )
        && 
        (
          (
            (
              (
                (
                  (
                    (categoryAndOrSubCategory.value as ClassifiedNavigationLinksType)[(i as number)] as ClassifiedNavigationLinksType[number]
                  ).subcategory as ClassifiedNavigationLinksType
                )[j as number].subcategory as ClassifiedNavigationLinksType
              )[(k as number)] as ClassifiedNavigationLinksType[number]
            ).subcategory as ClassifiedNavigationLinksType
          ) === undefined
          ||
          Object.keys(
            (
              (
                (
                  (
                    (categoryAndOrSubCategory.value as ClassifiedNavigationLinksType)[(i as number)] as ClassifiedNavigationLinksType[number]
                  ).subcategory as ClassifiedNavigationLinksType
                )[j as number].subcategory as ClassifiedNavigationLinksType
              )[(k as number)] as ClassifiedNavigationLinksType[number]
            ).subcategory as ClassifiedNavigationLinksType
          ).length === 0
        )
      )
    ) {
      if(!(
        'subcategory' in (
          (
            (
              (
                (categoryAndOrSubCategory.value as ClassifiedNavigationLinksType)[(i as number)] as ClassifiedNavigationLinksType[number]
              ).subcategory as ClassifiedNavigationLinksType
            )[j as number].subcategory as ClassifiedNavigationLinksType
          )[(k as number)] as ClassifiedNavigationLinksType[number]
        )
      )) {
        (
          (
            (
              (
                (categoryAndOrSubCategory.value as ClassifiedNavigationLinksType)[(i as number)] as ClassifiedNavigationLinksType[number]
              ).subcategory as ClassifiedNavigationLinksType
            )[j as number].subcategory as ClassifiedNavigationLinksType
          )[(k as number)] as ClassifiedNavigationLinksType[number]
        ) = {
          ...(
            (
              (
                (
                  (categoryAndOrSubCategory.value as ClassifiedNavigationLinksType)[(i as number)] as ClassifiedNavigationLinksType[number]
                ).subcategory as ClassifiedNavigationLinksType
              )[j as number].subcategory as ClassifiedNavigationLinksType
            )[(k as number)] as ClassifiedNavigationLinksType[number]
          ),
          subcategory: {
            [0]: {
              img: undefined,
              url: undefined,
              extraname: undefined,
              isdirectlink: false, 
              isSubCategoryCollapsed: false, 
              isClickedAddCollections: false, 
              isHoveredShowCollections: false, isClickedAddImageLink: false, isHoveredAddImageLink: false, isHoveredEdit: false, isClickedEdit: false, isClickedShowCollections: false, isHoveredAddCollections: false, 
              isClickedSubCategory: false, 
              isHoveredExpand: false,
              name: '',
              subcategory: undefined
            }
          } as ClassifiedNavigationLinksType
        } as ClassifiedNavigationLinksType[number];
      }
      else {
        (
          (
            (
              (
                (
                  (categoryAndOrSubCategory.value as ClassifiedNavigationLinksType)[(i as number)] as ClassifiedNavigationLinksType[number]
                ).subcategory as ClassifiedNavigationLinksType
              )[j as number].subcategory as ClassifiedNavigationLinksType
            )[(k as number)] as ClassifiedNavigationLinksType[number]
          ).subcategory as ClassifiedNavigationLinksType
        ) = {
          [0]: {
            img: undefined,
            url: undefined,
            extraname: undefined,
            isdirectlink: false, 
            isSubCategoryCollapsed: false, 
            isClickedAddCollections: false, 
            isHoveredShowCollections: false, isClickedAddImageLink: false, isHoveredAddImageLink: false, isHoveredEdit: false, isClickedEdit: false, isClickedShowCollections: false, isHoveredAddCollections: false, 
            isClickedSubCategory: false, 
            isHoveredExpand: false,
            isHoveredSubCategory: false,
            name: '',
            subcategory: undefined
          } as ClassifiedNavigationLinksType[number]
        } as ClassifiedNavigationLinksType;
      }
    }
    else {
      if(
        (
          (
            (
              (
                (
                  (categoryAndOrSubCategory.value as ClassifiedNavigationLinksType)[(i as number)] as ClassifiedNavigationLinksType[number]
                ).subcategory as ClassifiedNavigationLinksType
              )[j as number].subcategory as ClassifiedNavigationLinksType
            )[(k as number)] as ClassifiedNavigationLinksType[number]
          ).subcategory as ClassifiedNavigationLinksType
        )[
          Object.keys(
            (
              (
                (
                  (
                    (categoryAndOrSubCategory.value as ClassifiedNavigationLinksType)[(i as number)] as ClassifiedNavigationLinksType[number]
                  ).subcategory as ClassifiedNavigationLinksType
                )[j as number].subcategory as ClassifiedNavigationLinksType
              )[(k as number)] as ClassifiedNavigationLinksType[number]
            ).subcategory as ClassifiedNavigationLinksType
          ).length - 1
        ].name !== ''
      ) {
        (
          (
            (
              (
                (
                  (categoryAndOrSubCategory.value as ClassifiedNavigationLinksType)[(i as number)] as ClassifiedNavigationLinksType[number]
                ).subcategory as ClassifiedNavigationLinksType
              )[j as number].subcategory as ClassifiedNavigationLinksType
            )[(k as number)] as ClassifiedNavigationLinksType[number]
          ).subcategory as ClassifiedNavigationLinksType
        ) = {
          ...(
            (
              (
                (
                  (
                    (categoryAndOrSubCategory.value as ClassifiedNavigationLinksType)[(i as number)] as ClassifiedNavigationLinksType[number]
                  ).subcategory as ClassifiedNavigationLinksType
                )[j as number].subcategory as ClassifiedNavigationLinksType
              )[(k as number)] as ClassifiedNavigationLinksType[number]
            ).subcategory as ClassifiedNavigationLinksType
          ),
          [
            Object.keys(
              (
                (
                  (
                    (
                      (categoryAndOrSubCategory.value as ClassifiedNavigationLinksType)[(i as number)] as ClassifiedNavigationLinksType[number]
                    ).subcategory as ClassifiedNavigationLinksType
                  )[j as number].subcategory as ClassifiedNavigationLinksType
                )[(k as number)] as ClassifiedNavigationLinksType[number]
              ).subcategory as ClassifiedNavigationLinksType
            ).length
          ]: {
            img: undefined,
            url: undefined,
            extraname: undefined,
            isdirectlink: false, 
            isSubCategoryCollapsed: false, 
            isClickedAddCollections: false, 
            isHoveredShowCollections: false, isClickedAddImageLink: false, isHoveredAddImageLink: false, isHoveredEdit: false, isClickedEdit: false, isClickedShowCollections: false, isHoveredAddCollections: false, 
            isHoveredSubCategory: false,
            isClickedSubCategory: false, 
            isHoveredExpand: false,
            name: '',
            subcategory: undefined
          }
        }
      }
    }
    const t = setInterval(() => {
      if(newCategoryOrSubCategory.value.nameRef) {
        scrollToElement(newCategoryOrSubCategory.value.nameRef, 2);
        clearInterval(t);
      }
    }, 200);
  }
}
  
export function removeUnEnteredCategory(i: number, j: number | undefined, k: number | undefined, l: number | undefined, level: 'FIRST' | 'SECOND' | 'THIRD' | 'FOURTH', categoryAndOrSubCategory: ShallowRef<ClassifiedNavigationLinksType>) {
    if(level === 'FIRST') {
      delete (
        categoryAndOrSubCategory.value as ClassifiedNavigationLinksType
      )[i as number];
    }
    else if(level === 'SECOND') {
      delete (
        (
          (
            (
              categoryAndOrSubCategory.value as ClassifiedNavigationLinksType
            )[i as number] as ClassifiedNavigationLinksType[number]
          ).subcategory as ClassifiedNavigationLinksType
        )[(j as number)]
      );
      if(Object.keys((
        (
          (
            categoryAndOrSubCategory.value as ClassifiedNavigationLinksType
          )[i as number] as ClassifiedNavigationLinksType[number]
        ).subcategory as ClassifiedNavigationLinksType
      )).length === 0) {
        (
          (
            categoryAndOrSubCategory.value as ClassifiedNavigationLinksType
          )[i as number] as ClassifiedNavigationLinksType[number]
        ).isSubCategoryCollapsed = false;
      }
      (
        (
          categoryAndOrSubCategory.value as ClassifiedNavigationLinksType
        )[i as number] as ClassifiedNavigationLinksType[number]
      ).isClickedSubCategory = false;
      (
        (
          categoryAndOrSubCategory.value as ClassifiedNavigationLinksType
        )[i as number] as ClassifiedNavigationLinksType[number]
      ).isHoveredSubCategory = false;
    }
    else if(level === 'THIRD') {
      delete(
        (
          (
            (
              categoryAndOrSubCategory.value as ClassifiedNavigationLinksType
            )[i as number].subcategory as ClassifiedNavigationLinksType
          )[j as number].subcategory as ClassifiedNavigationLinksType
        )[k as number]
      );
      if(Object.keys((
        (
          (
            (
              (categoryAndOrSubCategory.value as ClassifiedNavigationLinksType)[i as number] as ClassifiedNavigationLinksType[number]
            ).subcategory as ClassifiedNavigationLinksType
          )[j as number].subcategory as ClassifiedNavigationLinksType
        )
      )).length === 0) {
        (
          (
            (
              (categoryAndOrSubCategory.value as ClassifiedNavigationLinksType)[i as number] as ClassifiedNavigationLinksType[number]
            ).subcategory as ClassifiedNavigationLinksType
          )[j as number] as ClassifiedNavigationLinksType[number]
        ).isSubCategoryCollapsed = false;
      }
      (
        (
          (
            (categoryAndOrSubCategory.value as ClassifiedNavigationLinksType)[i as number] as ClassifiedNavigationLinksType[number]
          ).subcategory as ClassifiedNavigationLinksType
        )[j as number] as ClassifiedNavigationLinksType[number]
      ).isClickedSubCategory = false;
      (
        (
          (
            (categoryAndOrSubCategory.value as ClassifiedNavigationLinksType)[i as number] as ClassifiedNavigationLinksType[number]
          ).subcategory as ClassifiedNavigationLinksType
        )[j as number] as ClassifiedNavigationLinksType[number]
      ).isHoveredSubCategory = false;
    }
    else {
      delete(
        (
          (
            (
              (
                categoryAndOrSubCategory.value as ClassifiedNavigationLinksType
              )[i as number].subcategory as ClassifiedNavigationLinksType
            )[j as number].subcategory as ClassifiedNavigationLinksType
          )[k as number].subcategory as ClassifiedNavigationLinksType
        )[l as number]
      );
      if(Object.keys((
        (
          (
            (
              (
                categoryAndOrSubCategory.value as ClassifiedNavigationLinksType
              )[i as number].subcategory as ClassifiedNavigationLinksType
            )[j as number].subcategory as ClassifiedNavigationLinksType
          )[k as number].subcategory as ClassifiedNavigationLinksType
        )
      )).length === 0) {
        (
          (
            (
              (
                categoryAndOrSubCategory.value as ClassifiedNavigationLinksType
              )[i as number].subcategory as ClassifiedNavigationLinksType
            )[j as number].subcategory as ClassifiedNavigationLinksType
          )[k as number] as ClassifiedNavigationLinksType[number]
        ).isSubCategoryCollapsed = false;
      }
      (
        (
          (
            (
              categoryAndOrSubCategory.value as ClassifiedNavigationLinksType
            )[i as number].subcategory as ClassifiedNavigationLinksType
          )[j as number].subcategory as ClassifiedNavigationLinksType
        )[k as number] as ClassifiedNavigationLinksType[number]
      ).isClickedSubCategory = false;
      (
        (
          (
            (
              categoryAndOrSubCategory.value as ClassifiedNavigationLinksType
            )[i as number].subcategory as ClassifiedNavigationLinksType
          )[j as number].subcategory as ClassifiedNavigationLinksType
        )[k as number] as ClassifiedNavigationLinksType[number]
      ).isHoveredSubCategory = false;
    }
  }
  
export function pickFile (newCategoryOrSubCategory: ShallowRef<NewCategoryOrSubCategoryDetailsType>) {
  if(newCategoryOrSubCategory.value.coverPhoto.fileInputRef !== null) {
    (newCategoryOrSubCategory.value.coverPhoto.fileInputRef as HTMLInputElement).click();
  }
}
  
export function filePicked (e: Event, newCategoryOrSubCategory: ShallowRef<NewCategoryOrSubCategoryDetailsType>) {
  if (!(e.target as HTMLInputElement).files) return;
  else {
    if(newCategoryOrSubCategory.value.coverPhoto.fileInputRef !== null) {
      const 
        input = (newCategoryOrSubCategory.value.coverPhoto.fileInputRef as HTMLInputElement),
        file = (input.files as FileList)[0]
      ;
  
      newCategoryOrSubCategory.value.coverPhoto.name = file.name;
      newCategoryOrSubCategory.value.coverPhoto.file = file;
  
  
      const t = setInterval(() => {
        if(newCategoryOrSubCategory.value.coverPhoto.fileOutputRef !== null) {
          const 
            img = new Image()
          ;
  
          img.onload = () => {
            if(img.naturalWidth === 530 && img.naturalHeight === 489) {
              newCategoryOrSubCategory.value.coverPhoto.error = ''
              newCategoryOrSubCategory.value.coverPhoto.src = URL.createObjectURL(file);
            }
            else {
              newCategoryOrSubCategory.value.coverPhoto.name = '';
              newCategoryOrSubCategory.value.coverPhoto.error = 'blah blah blah';
              const t = setTimeout(() => {
                if(
                  newCategoryOrSubCategory.value.coverPhoto.srcErrorRef
                ) {
                  scrollToElement(newCategoryOrSubCategory.value.coverPhoto.srcErrorRef, 0);
                  clearTimeout(t);
                }
              }, 200);
            }
          }
          img.src = URL.createObjectURL(file);
  
          clearInterval(t);
        }
      }, 5);
    }
  }
}

export function assignPropsOfCategoryAndOrSubCategory(prop: [KeysOfClassifiedNavigationLinksType][] | KeysOfClassifiedNavigationLinksType, assignVal: any[] | any, categoryAndOrSubCategory: ShallowRef<ClassifiedNavigationLinksType>, i:number, j?: number | undefined, k?: number | undefined, l?: number | undefined) {
  if(j===undefined && k===undefined && l===undefined) {
    if(!Array.isArray(prop) && !Array.isArray(assignVal)) {
      (
        (
          categoryAndOrSubCategory.value as ClassifiedNavigationLinksType
        )[i] as ClassifiedNavigationLinksType[number]
      )[prop] = assignVal
    }
    else {
      for(let z=0; z<prop.length; z++) {
        (
          (
            categoryAndOrSubCategory.value as ClassifiedNavigationLinksType
          )[i] as ClassifiedNavigationLinksType[number]
        )[prop[z] as 'img' | 'url' | 'extraname' | 'haveCollection' | 'isdirectlink' | 'isSubCategoryCollapsed' 
        | 'isClickedSubCategory' | 'isHoveredExpand' | 'isHoveredSubCategory' | 'isClickedAddCollections' | 'isHoveredAddCollections' 
        | 'isHoveredShowCollections' | 'isClickedShowCollections' | 'isClickedAddImageLink' | 'isHoveredAddImageLink' | 'isClickedShowImageLink' | 'isHoveredShowImageLink' 
        | 'isHoveredEdit' | 'isClickedEdit' | 'name'] = assignVal[z];
      }
    }
  }
  else {
    if(k===undefined && l===undefined) {
      if(!Array.isArray(prop) && !Array.isArray(assignVal)) {
        (
          (
            (
              (
                categoryAndOrSubCategory.value as ClassifiedNavigationLinksType
              )[i] as ClassifiedNavigationLinksType[number]
            ).subcategory as ClassifiedNavigationLinksType
          )[j as number] as ClassifiedNavigationLinksType[number]
        )[prop] = assignVal
      }
      else {
        for(let z=0; z<prop.length; z++) {
          (
            (
              (
                (
                  categoryAndOrSubCategory.value as ClassifiedNavigationLinksType
                )[i] as ClassifiedNavigationLinksType[number]
              ).subcategory as ClassifiedNavigationLinksType
            )[j as number] as ClassifiedNavigationLinksType[number]
          )[prop[z] as 'img' | 'url' | 'extraname' | 'haveCollection' | 'isdirectlink' | 'isSubCategoryCollapsed' 
          | 'isClickedSubCategory' | 'isHoveredExpand' | 'isHoveredSubCategory' | 'isClickedAddCollections' | 'isHoveredAddCollections' 
          | 'isHoveredShowCollections' | 'isClickedShowCollections' | 'isClickedAddImageLink' | 'isHoveredAddImageLink' | 'isClickedShowImageLink' | 'isHoveredShowImageLink' 
          | 'isHoveredEdit' | 'isClickedEdit' | 'name'] = assignVal[z];
        }
      }
    }
    else {
      if(l===undefined) {
        if(!Array.isArray(prop) && !Array.isArray(assignVal)) {
          (
            (
              (
                (
                  (
                    (
                      categoryAndOrSubCategory.value as ClassifiedNavigationLinksType
                    )[i] as ClassifiedNavigationLinksType[number]
                  ).subcategory as ClassifiedNavigationLinksType
                )[j as number] as ClassifiedNavigationLinksType[number]
              ).subcategory as ClassifiedNavigationLinksType
            )[k as number] as ClassifiedNavigationLinksType[number]
          )[prop] = assignVal
        }
        else {
          for(let z=0; z<prop.length; z++) {
            (
              (
                (
                  (
                    (
                      (
                        categoryAndOrSubCategory.value as ClassifiedNavigationLinksType
                      )[i] as ClassifiedNavigationLinksType[number]
                    ).subcategory as ClassifiedNavigationLinksType
                  )[j as number] as ClassifiedNavigationLinksType[number]
                ).subcategory as ClassifiedNavigationLinksType
              )[k as number] as ClassifiedNavigationLinksType[number]
            )[prop[z] as 'img' | 'url' | 'extraname' | 'haveCollection' | 'isdirectlink' | 'isSubCategoryCollapsed' 
            | 'isClickedSubCategory' | 'isHoveredExpand' | 'isHoveredSubCategory' | 'isClickedAddCollections' | 'isHoveredAddCollections' 
            | 'isHoveredShowCollections' | 'isClickedShowCollections' | 'isClickedAddImageLink' | 'isHoveredAddImageLink' | 'isClickedShowImageLink' | 'isHoveredShowImageLink' 
            | 'isHoveredEdit' | 'isClickedEdit' | 'name'] = assignVal[z];
          }
        }
      }
      else {
        if(!Array.isArray(prop) && !Array.isArray(assignVal)) {
          (
            (
              (
                (
                  (
                    (
                      (
                        (
                          categoryAndOrSubCategory.value as ClassifiedNavigationLinksType
                        )[i] as ClassifiedNavigationLinksType[number]
                      ).subcategory as ClassifiedNavigationLinksType
                    )[j as number] as ClassifiedNavigationLinksType[number]
                  ).subcategory as ClassifiedNavigationLinksType
                )[k as number] as ClassifiedNavigationLinksType[number]
              ).subcategory as ClassifiedNavigationLinksType
            )[l as number] as ClassifiedNavigationLinksType[number]
          )[prop] = assignVal
        }
        else {
          for(let z=0; z<prop.length; z++) {
            (
              (
                (
                  (
                    (
                      (
                        (
                          (
                            categoryAndOrSubCategory.value as ClassifiedNavigationLinksType
                          )[i] as ClassifiedNavigationLinksType[number]
                        ).subcategory as ClassifiedNavigationLinksType
                      )[j as number] as ClassifiedNavigationLinksType[number]
                    ).subcategory as ClassifiedNavigationLinksType
                  )[k as number] as ClassifiedNavigationLinksType[number]
                ).subcategory as ClassifiedNavigationLinksType
              )[l as number] as ClassifiedNavigationLinksType[number]
            )[prop[z] as 'img' | 'url' | 'extraname' | 'haveCollection' | 'isdirectlink' | 'isSubCategoryCollapsed' 
            | 'isClickedSubCategory' | 'isHoveredExpand' | 'isHoveredSubCategory' | 'isClickedAddCollections' | 'isHoveredAddCollections' 
            | 'isHoveredShowCollections' | 'isClickedShowCollections' | 'isClickedAddImageLink' | 'isHoveredAddImageLink' | 'isClickedShowImageLink' | 'isHoveredShowImageLink' 
            | 'isHoveredEdit' | 'isClickedEdit' | 'name'] = assignVal[z];
          }
        }
      }
    }
  }
  triggerRef(categoryAndOrSubCategory);
}

export function addNewCategoryOrSubCategoryDetails(i: number, j: number | undefined, k: number | undefined, l: number | undefined, level: 'FIRST' | 'SECOND' | 'THIRD' | 'FOURTH', newCategoryOrSubCategory: ShallowRef<NewCategoryOrSubCategoryDetailsType>, categoryAndOrSubCategory: ShallowRef<ClassifiedNavigationLinksType>) {
  newCategoryOrSubCategory.value.error.checker = [];
  newCategoryOrSubCategory.value.error.message = '';

  if(level === 'FIRST') {
    if(newCategoryOrSubCategory.value.name === '')
      newCategoryOrSubCategory.value.error.checker.push('CATEGORY');
    if(
      newCategoryOrSubCategory.value.urlPath === '' 
    )
      newCategoryOrSubCategory.value.error.checker.push('URL-PATH');
    if(newCategoryOrSubCategory.value.coverPhoto.name === '')
      newCategoryOrSubCategory.value.error.checker.push('COVER-PHOTO');
  
    if(newCategoryOrSubCategory.value.error.checker.length > 0) {
      newCategoryOrSubCategory.value.error.message = 'There is an error, fill the following required fields.';
      const t = setInterval(() => {
        if(
          newCategoryOrSubCategory.value.errorRef !== null
          &&
          (newCategoryOrSubCategory.value.errorRef as HTMLDivElement).clientHeight > 60
        ) {
          scrollToElement(newCategoryOrSubCategory.value.errorRef, 0);
          clearInterval(t);
        }
      }, 2);
    }
    else {
      assignPropsOfCategoryAndOrSubCategory(
        [
          'img',
          'isdirectlink',
          'url',
          'name'
        ] as unknown as [KeysOfClassifiedNavigationLinksType][], 
        [
          newCategoryOrSubCategory.value.coverPhoto.name,
          (newCategoryOrSubCategory.value.directlinkornot === 'YES'? true : false),
          newCategoryOrSubCategory.value.urlPath,
          newCategoryOrSubCategory.value.name
        ],
        categoryAndOrSubCategory, 
        i
      );
      newCategoryOrSubCategory.value.coverPhoto = {
        src: '',
        srcErrorRef: null,
        error: '',
        fileOutputRef: null,
        file: null,
        fileInputRef: null,
        name: ''
      };
      newCategoryOrSubCategory.value.name = '';
      newCategoryOrSubCategory.value.urlPath = '';
    }
  }
  else if(level === 'SECOND') {
    if(newCategoryOrSubCategory.value.name === '')
      newCategoryOrSubCategory.value.error.checker.push('CATEGORY');
    if(
      newCategoryOrSubCategory.value.urlPath === '' 
      && 
      newCategoryOrSubCategory.value.directlinkornot === 'YES'
    )
      newCategoryOrSubCategory.value.error.checker.push('URL-PATH');
  
    if(newCategoryOrSubCategory.value.error.checker.length > 0) {
      newCategoryOrSubCategory.value.error.message = 'There is an error, fill the following required fields.';
      const t = setInterval(() => {
        if(
          newCategoryOrSubCategory.value.errorRef !== null
          &&
          (newCategoryOrSubCategory.value.errorRef as HTMLDivElement).clientHeight > 60
         
        ) {
          scrollToElement(newCategoryOrSubCategory.value.errorRef, 0);
          clearInterval(t);
        }
      }, 2);
    }
    else {
      if(newCategoryOrSubCategory.value.directlinkornot === 'YES') {
        assignPropsOfCategoryAndOrSubCategory(
          'url',
          newCategoryOrSubCategory.value.urlPath,
          categoryAndOrSubCategory, 
          i,
          j
        );
      }
      assignPropsOfCategoryAndOrSubCategory(
        [
          'name',
          'isdirectlink'
        ] as unknown as [KeysOfClassifiedNavigationLinksType][], 
        [
          newCategoryOrSubCategory.value.name,
          (newCategoryOrSubCategory.value.directlinkornot === 'YES'? true : false)
        ],
        categoryAndOrSubCategory, 
        i,
        j
      );

      assignPropsOfCategoryAndOrSubCategory(
        [
          'isClickedSubCategory',
          'isHoveredSubCategory'
        ] as unknown as [KeysOfClassifiedNavigationLinksType][], 
        [
          false,
          false
        ],
        categoryAndOrSubCategory, 
        i
      );
      newCategoryOrSubCategory.value.name = '';
      newCategoryOrSubCategory.value.urlPath = '';
    }
  }
  else if(level === 'THIRD') {
    if(newCategoryOrSubCategory.value.name === '')
      newCategoryOrSubCategory.value.error.checker.push('CATEGORY');
    if(
      newCategoryOrSubCategory.value.urlPath === '' 
      && 
      newCategoryOrSubCategory.value.directlinkornot === 'YES'
    )
      newCategoryOrSubCategory.value.error.checker.push('URL-PATH');
  
  
    if(newCategoryOrSubCategory.value.error.checker.length > 0) {
      newCategoryOrSubCategory.value.error.message = 'There is an error, fill the following required fields.';
      const t = setInterval(() => {
        if(
          newCategoryOrSubCategory.value.errorRef !== null
          &&
          (newCategoryOrSubCategory.value.errorRef as HTMLDivElement).clientHeight > 60
         
        ) {
          scrollToElement(newCategoryOrSubCategory.value.errorRef, 1);
          clearInterval(t);
        }
      }, 2);
    }
    else {
      if(newCategoryOrSubCategory.value.directlinkornot === 'YES') {
        assignPropsOfCategoryAndOrSubCategory(
          'url', 
          newCategoryOrSubCategory.value.urlPath,
          categoryAndOrSubCategory, 
          i,
          j,
          k
        );
      }
      newCategoryOrSubCategory.value.name = '';
      newCategoryOrSubCategory.value.urlPath = '';
       
      assignPropsOfCategoryAndOrSubCategory(
        [
          'name',
          'isdirectlink'
        ] as unknown as [KeysOfClassifiedNavigationLinksType][], 
        [
          newCategoryOrSubCategory.value.name,
          (newCategoryOrSubCategory.value.directlinkornot === 'YES'? true : false)
        ],
        categoryAndOrSubCategory, 
        i,
        j,
        k
      );
      assignPropsOfCategoryAndOrSubCategory(
        [
          'isClickedSubCategory',
          'isHoveredSubCategory'
        ] as unknown as [KeysOfClassifiedNavigationLinksType][], 
        [
          false,
          false
        ],
        categoryAndOrSubCategory, 
        i,
        j
      );
    }
  }
  else {
    if(newCategoryOrSubCategory.value.name === '')
      newCategoryOrSubCategory.value.error.checker.push('CATEGORY');
    if(
      newCategoryOrSubCategory.value.urlPath === '' 
    )
      newCategoryOrSubCategory.value.error.checker.push('URL-PATH');
  
    if(newCategoryOrSubCategory.value.error.checker.length > 0) {
      newCategoryOrSubCategory.value.error.message = 'There is an error, fill the following required fields.';
      const t = setInterval(() => {
        if(
          newCategoryOrSubCategory.value.errorRef !== null
          &&
          (newCategoryOrSubCategory.value.errorRef as HTMLDivElement).clientHeight > 60
         
        ) {
          scrollToElement(newCategoryOrSubCategory.value.errorRef, 2);
          clearInterval(t);
        }
      }, 2);
    }
    else {
      newCategoryOrSubCategory.value.name = '';
      newCategoryOrSubCategory.value.urlPath = '';
      assignPropsOfCategoryAndOrSubCategory(
        [
          'name',
          'isdirectlink',
          'url'
        ] as unknown as [KeysOfClassifiedNavigationLinksType][], 
        [
          newCategoryOrSubCategory.value.name,
          (newCategoryOrSubCategory.value.directlinkornot === 'YES'? true : false),
          newCategoryOrSubCategory.value.urlPath
        ],
        categoryAndOrSubCategory, 
        i,
        j,
        k,
        l
      );
      assignPropsOfCategoryAndOrSubCategory(
        [
          'isClickedSubCategory',
          'isHoveredSubCategory'
        ] as unknown as [KeysOfClassifiedNavigationLinksType][], 
        [
          false,
          false
        ],
        categoryAndOrSubCategory, 
        i,
        j,
        k
      );
    }
  }
  triggerRef(newCategoryOrSubCategory);
}
  
function scrollToElement(view: HTMLElement | null, index: number) { 
  if(view) {
    (view as HTMLElement).scrollIntoView({
      behavior: 'smooth'
    });
    let 
      count = 0, 
      scrolledY = -1
    ;
    const 
      t = setInterval(() => {
        if(scrolledY > -1 && scrolledY === window.scrollY) {
          if(count === 10) {
            window.scroll((index*300), scrolledY - (111 + (view as HTMLElement).offsetTop));
            clearInterval(t);
          }
          count++;
        }
        scrolledY = window.scrollY;
      }, 30)
    ;
  }
}