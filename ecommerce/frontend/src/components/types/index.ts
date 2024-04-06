
export type ClassifiedNavigationLinksType = {
  [key: number]: {
    img?: string | {
      [key: number]: {
        file: string;
        link: string;
      };
    } | undefined;
    url?: string | undefined;
    extraname?: string | undefined;
    isHovered?: Boolean | undefined;
    name: string;
    subcategory?: [] | ClassifiedNavigationLinksType[number] | undefined;
  }
};

export type ImgLinkType =  {[key: number]: {name: string; file: string; link: string;};};