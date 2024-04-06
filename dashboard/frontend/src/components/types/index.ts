
export type ClassifiedNavigationLinksType = {
  [key: number]: {
    img?: string | ImgLinkType | undefined;
    url?: string | undefined;
    extraname?: string | undefined;
    haveCollection?: Boolean | undefined;
    isdirectlink?: Boolean | undefined;
    isSubCategoryCollapsed?: Boolean | undefined;
    isClickedSubCategory?: Boolean | undefined;
    isHoveredExpand?: Boolean | undefined;
    isHoveredSubCategory?: Boolean | undefined;
    isClickedAddCollections?: Boolean | undefined;
    isHoveredAddCollections?: Boolean | undefined;
    isHoveredShowCollections?: Boolean | undefined;
    isClickedShowCollections?: Boolean | undefined;
    isClickedAddImageLink?: Boolean | undefined;
    isHoveredAddImageLink?: Boolean | undefined;
    isClickedShowImageLink?: Boolean | undefined;
    isHoveredShowImageLink?: Boolean | undefined;
    isHoveredEdit?: Boolean | undefined;
    isClickedEdit?: Boolean | undefined;
    name: string;
    subcategory?: [] | ClassifiedNavigationLinksType[number] | undefined;
  }
};

export type KeysOfClassifiedNavigationLinksType = 'img' | 'url' | 'extraname' | 'haveCollection' | 'isdirectlink' | 'isSubCategoryCollapsed' 
| 'isClickedSubCategory' | 'isHoveredExpand' | 'isHoveredSubCategory' | 'isClickedAddCollections' | 'isHoveredAddCollections' 
| 'isHoveredShowCollections' | 'isClickedShowCollections' | 'isClickedAddImageLink' | 'isHoveredAddImageLink' | 'isClickedShowImageLink' | 'isHoveredShowImageLink' 
| 'isHoveredEdit' | 'isClickedEdit' | 'name';

export type NewCategoryOrSubCategoryDetailsType = {
  name: string; 
  extraname: string;
  nameRef: HTMLLabelElement | null;
  directlinkornot: 'YES' | 'NO'; 
  level: 'NORMAL' | 'FIRST' | 'SECOND' | 'THIRD' | 'FOURTH';
  error: {
    checker: string[];
    message: string;
  };
  errorRef: HTMLDivElement | null;
  coverPhoto: {
    src: string; 
    error: string; 
    srcErrorRef: HTMLDivElement | null; 
    fileOutputRef: HTMLImageElement | null; 
    file: File | FileList[number] | null; 
    fileInputRef: HTMLInputElement | null; 
    name: string;
  }; 
  urlPath: string;
  urlPathRef: HTMLLabelElement | null;
};

export type ImgLinkType =  {[key: number]: {name: string; haveCollection: Boolean; isdirectlink: true; file: string; link: string;};};