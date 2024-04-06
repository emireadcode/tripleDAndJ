<script setup lang="ts">
import type { ClassifiedNavigationLinksType, NewCategoryOrSubCategoryDetailsType, } from "./components/types/";
import {ref, shallowRef, provide, } from "vue";
import {addCategoryAndOrSubCategory, } from "./components/utility/";
import CreateAndManageCategorySubCategoryAndOrProduct from "./components/CreateAndManageCategorySubCategoryAndOrProduct.vue";

let 
  categoryAndOrSubCategory = shallowRef<ClassifiedNavigationLinksType>([
    {
      url: '/sandals/', 
      name: 'Sandals', 
      isdirectlink: false, 
      isSubCategoryCollapsed: false, 
      isClickedSubCategory: false, 
      isHoveredSubCategory: false, 
      isHoveredExpand: false, 
      subcategory: [
        {
          name: 'Gifts', 
          isdirectlink: false, 
          isSubCategoryCollapsed: false, 
          isClickedSubCategory: false, 
          isHoveredSubCategory: false, 
          isHoveredExpand: false, 
          subcategory: [
            {
              name: 'WOMEN', 
              isdirectlink: false, 
              isSubCategoryCollapsed: false,  
              isClickedSubCategory: false, 
              isHoveredSubCategory: false, 
              isHoveredExpand: false, 
              subcategory: [
                {name: 'View all', isdirectlink: true, haveCollection: false, url: '/sandals/gifts/women/view-all/'},
                {name: 'Small gifts ideas', isdirectlink: true, haveCollection: false, url: '/sandals/gifts/women/small-gifts-ideas/'},
                {name: 'Exclusive gifts', isdirectlink: true, haveCollection: false, url: '/sandals/gifts/women/exclusive-gifts/'},
                {name: 'Personalize', isdirectlink: true, haveCollection: false, url: '/sandals/gifts/women/personalize/'},
                {name: 'Lifestyle gifts', isdirectlink: true, haveCollection: false, url: '/sandals/gifts/women/lifestyle-gifts/'},
                {name: 'Gift Card', isdirectlink: true, haveCollection: false, url: '/sandals/gifts/women/gift-card/'}
              ],
              img: [
                {name:'', file:'n4.jpg', haveCollection: false, link:'/sandals/gifts/women/personalize/?FL_BAN=F987AKJDHF89'},
                {name:'', file:'n2.jpg', haveCollection: false, link:'/sandals/gifts/women/lifestyle-gifts/?FL_BAN=uytrew8UYT'},
              ]
            },
            {
              name: 'MEN', 
              isdirectlink: false, 
              isSubCategoryCollapsed: false, 
              isClickedSubCategory: false, 
              isHoveredSubCategory: false, 
              isHoveredExpand: false, 
              subcategory: [
                {name: 'View all', isdirectlink: true, haveCollection: false, url: '/sandals/gifts/men/view-all/'},
                {name: 'Small gifts ideas', isdirectlink: true, haveCollection: false, url: '/sandals/gifts/men/small-gifts-idea/'},
                {name: 'Exclusive gifts', isdirectlink: true, haveCollection: false, url: '/sandals/gifts/men/exclusive-gifts/'},
                {name: 'Personalize', isdirectlink: true, haveCollection: false, url: '/sandals/gifts/men/personalize/'},
                {name: 'Lifestyle gifts', isdirectlink: true, haveCollection: false, url: '/sandals/gifts/men/lifestyle-gifts/'},
                {name: 'Gift Card', isdirectlink: true, haveCollection: false, url: '/sandals/gifts/men/gift-card/'}
              ],
              img: [
                {name:'', file:'n4.jpg', haveCollection: false, link:'/sandals/gifts/men/personalize/?FL_BAN=UI89FUIYRSE'}
              ]
            },
            {
              name: 'CHILDREN', 
              isdirectlink: false, 
              isSubCategoryCollapsed: false, 
              isClickedSubCategory: false, 
              isHoveredSubCategory: false, 
              isHoveredExpand: false,  
              subcategory: [
                {name: 'View all', isdirectlink: true, haveCollection: false, url: '/sandals/gifts/children/view-all/'},
                {name: 'Girl', isdirectlink: true, haveCollection: false, url: '/sandals/gifts/children/girl/'},
                {name: 'Boy', isdirectlink: true, haveCollection: false, url: '/sandals/gifts/children/boy/'},
                {name: 'Gift Set', isdirectlink: true, haveCollection: false, url: '/sandals/gifts/children/gift-set/'}
              ],
              img: [
                {name:'', file:'n2.jpg', haveCollection: false, link:'/sandals/gifts/children/boy/?FL_BAN=KLKDJJF090F'}
              ]
            },
            {
              name: 'PARTY LOOKS', 
              isdirectlink: false, 
              isSubCategoryCollapsed: false,  
              isClickedSubCategory: false, 
              isHoveredSubCategory: false, 
              isHoveredExpand: false, 
              subcategory: [
                {name: 'Women', isdirectlink: true, haveCollection: false, url: '/sandals/gifts/party-looks/women/'},
                {name: 'Men', isdirectlink: true, haveCollection: false, url: '/sandals/gifts/party-looks/men/'},
                {name: 'Children', isdirectlink: true, haveCollection: false, url: '/sandals/gifts/party-looks/children/'}
              ],
              img: [
                {name:'', file:'n4.jpg', haveCollection: false, link:'/sandals/gifts/party-looks/children/?FL_BAN=YUDYEJJFY56'},
              ]
            },
            {
              name: 'VIEW ALL',
              img: [
                {name:'', file:'n6.jpg', haveCollection: false, link:'/sandals/gifts/view-all/?FL_BAN=NMDHFJF89DJF'},
                {name:'', file:'n8.jpg', haveCollection: false, link:'/sandals/gifts/view-all/?FL_BAN=NCZDHFJF89DJF'},
              ]
            },
            {
              name: 'GIFTING CAMPAIGN', 
              img: [
                {name:'', file:'n1.jpg', haveCollection: false, link:'/sandals/gifts/gifting-campaign/?FL_BAN=SDEHFJ2536K'},
                {name:'', file:'n9.jpg', haveCollection: false, link:'/sandals/gifts/gifting-campaign/?FL_BAN=XCDEHFJ2536K'},
                {name:'', file:'n2.jpg', haveCollection: false, link:'/sandals/gifts/gifting-campaign/?FL_BAN=ZQDEHFJ2536K'},
              ]
            }
          ]
        },
        {
          name: 'WOMEN', 
          isdirectlink: false, 
          isSubCategoryCollapsed: false, 
          isClickedSubCategory: false, 
          isHoveredSubCategory: false, 
          isHoveredExpand: false,   
          subcategory: [
            {
              name: 'NEW IN', 
              haveCollection: false, 
              url: '/sandals/women/new-in/',
              img: [
                {name:'', file:'n4.jpg', haveCollection: false, link:'/sandals/women/new-in/?FL_BAN=XZCVSDGDGF78HHJ'},
                {name:'', file:'n3.jpg', haveCollection: false, link:'/sandals/women/new-in/?FL_BAN=XZCVNMDDGDGF78HHJ'},
                {name:'', file:'n5.jpg', haveCollection: false, link:'/sandals/women/new-in/?FL_BAN=XZCVSVVCADGF78HHJ'},
              ]
            },
            {
              name: '3DJ SELECTION', 
              isdirectlink: false, 
              isSubCategoryCollapsed: false, 
              isClickedSubCategory: false, 
              isHoveredSubCategory: false, 
              isHoveredExpand: false,   
              subcategory: [
                {name: 'View all', isdirectlink: true, haveCollection: false, url: '/sandals/women/triple-dj-selection/view-all/'},
                {name: 'Dresses', isdirectlink: true, haveCollection: false, url: '/sandals/women/triple-dj-selection/dresses/'},
                {name: 'Blazers', isdirectlink: true, haveCollection: false, url: '/sandals/women/triple-dj-selection/blazers/'},
                {name: 'Coats and Jackets', extraname: 'NEW', isdirectlink: true, haveCollection: false, url: '/sandals/women/triple-dj-selection/coats-and-jackets/'},
                {name: 'Denim', isdirectlink: true, haveCollection: false, url: '/sandals/women/triple-dj-selection/denim/'},
                {name: 'Shirts and Tops', isdirectlink: true, haveCollection: false, url: '/sandals/women/triple-dj-selection/shirts-and-tops/'},
                {name: 'Sweaters and Cardigans', isdirectlink: true, haveCollection: false, url: '/sandals/women/triple-dj-selection/sweaters-and-cardigans/'},
                {name: 'T-Shirts and Sweatshirts', isdirectlink: true, haveCollection: false, url: '/sandals/women/triple-dj-selection/t-shirts-and-sweat-shirts/'},
                {name: 'Skirts', isdirectlink: true, haveCollection: false, url: '/sandals/women/triple-dj-selection/skirts/'},
                {name: 'Trousers and Shorts', isdirectlink: true, haveCollection: false, url: '/sandals/women/triple-dj-selection/trousers-and-shorts/'},
                {name: 'Underwear', isdirectlink: true, haveCollection: false, url: '/sandals/women/triple-dj-selection/underwear/'},
                {name: 'Beachwear', isdirectlink: true, haveCollection: false, url: '/sandals/women/triple-dj-selection/beachwear/'},
                {name: 'Wear It like #3DJCelebs', isdirectlink: true, haveCollection: false, url: '/sandals/women/triple-dj-selection/wear-it-like-3dj-celebs/'}
              ], 
              extraname: 'NEW',
              img: [
                {name:'', file:'n4.jpg', haveCollection: false, link:'/sandals/women/triple-dj-selection/beachwear/?FL_BAN=ASFRWE895KG'},
                {name:'', file:'n1.jpg', haveCollection: false, link:'/sandals/women/triple-dj-selection/underwear/?FL_BAN=GHJDK89JJFG5B'},
              ]
            },
            {
              name: '3DJ ESSENTIAL', 
              extraname: 'NEW',
              isdirectlink: false, 
              isSubCategoryCollapsed: false, 
              isClickedSubCategory: false, 
              isHoveredSubCategory: false, 
              isHoveredExpand: false,   
              subcategory: [
                {name: 'Discover the Collection', isdirectlink: true, haveCollection: false, url: '/sandals/women/triple-dj-essential/new/discover-the-collection/'},
                {name: 'View all', isdirectlink: true, haveCollection: false, url: '/sandals/women/triple-dj-essential/new/view-all/'}
              ],
              img: [
                {name:'', file:'n2.jpg', haveCollection: false, link:'/sandals/women/triple-dj-essential/new/discover-the-collection/?FL_BAN=GTTYUHFJ54HFJ'},
              ]
            },
            {
              name: 'CLOTHING', 
              isdirectlink: false, 
              isSubCategoryCollapsed: false, 
              isClickedSubCategory: false, 
              isHoveredSubCategory: false, 
              isHoveredExpand: false,   
              subcategory: [
                {name: 'View all', isdirectlink: true, haveCollection: false, url: '/sandals/women/clothing/view-all/'},
                {name: 'Dresses', isdirectlink: true, haveCollection: false, url: '/sandals/women/clothing/dresses/'},
                {name: 'Blazers', isdirectlink: true, haveCollection: false, url: '/sandals/women/clothing/blazers/'},
                {name: 'Coats and Jackets', extraname: 'NEW', isdirectlink: true, haveCollection: false, url: '/sandals/women/clothing/coats-and-jackets/'},
                {name: 'Denim', isdirectlink: true, haveCollection: false, url: '/sandals/women/clothing/denim/'},
                {name: 'Shirts and Tops', isdirectlink: true, haveCollection: false, url: '/sandals/women/clothing/shirts-and-tops/'},
                {name: 'Sweaters and Cardigans', isdirectlink: true, haveCollection: false, url: '/sandals/women/clothing/sweaters-and-cardigans/'},
                {name: 'T-Shirts and Sweatshirts', isdirectlink: true, haveCollection: false, url: '/sandals/women/clothing/t-shirts-and-sweat-shirts/'},
                {name: 'Skirts', isdirectlink: true, haveCollection: false, url: '/sandals/women/clothing/skirts/'},
                {name: 'Trousers and Shorts', isdirectlink: true, haveCollection: false, url: '/sandals/women/clothing/trousers-and-shorts/'},
                {name: 'Underwear', isdirectlink: true, haveCollection: false, url: '/sandals/women/clothing/underwear/'},
                {name: 'Beachwear', isdirectlink: true, haveCollection: false, url: '/sandals/women/clothing/beachwear/'},
                {name: 'Wear It like #3DJCelebs', isdirectlink: true, haveCollection: false, url: '/sandals/women/clothing/wear-it-like-3dj-celebs/'}
              ],
              img: [
                {name:'', file:'n4.jpg', haveCollection: false, link:'/sandals/women/clothing/trousers-and-shorts/?FL_BAN=AQWEDF56HJKLMN7H3'},
              ]
            },
            {
              name: 'BAGS', 
              isdirectlink: false, 
              isSubCategoryCollapsed: false, 
              isClickedSubCategory: false, 
              isHoveredSubCategory: false, 
              isHoveredExpand: false,   
              subcategory: [
                {name: 'View all', isdirectlink: true, haveCollection: false, url: '/sandals/women/bags/view-all/'}, 
                {name: 'Exclusive Shopper in canvas', extraname: 'ECOMMERCE EXCLUSIVELY', isdirectlink: true, haveCollection: false, url: '/sandals/women/bags/exclusive-shopper-in-canvas/'}, 
                {name: 'Handbags', isdirectlink: true, haveCollection: false, url: '/sandals/women/bags/hand-bags/'}, 
                {name: 'Totes', isdirectlink: true, haveCollection: false, url: '/sandals/women/bags/totes/'}, 
                {name: 'Shoulder and Crossbody Bags', isdirectlink: true, haveCollection: false, url: '/sandals/women/bags/shoulder-and-crossbody-bags/'}, 
                {name: 'Clutches Mini and Micro Bags', isdirectlink: true, haveCollection: false, url: '/sandals/women/bags/clutches-mini-and-micro-bags/'}, 
                {name: 'Sicily', isdirectlink: true, haveCollection: false, url: '/sandals/women/bags/sicily/'}, 
                {name: '3DJ Logo Bag', isdirectlink: true, haveCollection: false, url: '/sandals/women/bags/triple-dj-logo-bag/'}, 
                {name: 'Devotion', isdirectlink: true, haveCollection: false, url: '/sandals/women/bas/devotion/'}, 
                {name: 'DJ Girls', isdirectlink: true, haveCollection: false, url: '/sandals/women/bags/dj-girls/'}, 
                {name: '3.5', isdirectlink: true, haveCollection: false, url: '/sandals/women/bags/three-and-half/'}, 
                {name: '3DJ Box', isdirectlink: true, haveCollection: false, url: '/sandals/women/bags/triple-dj-box/'}, 
                {name: '#3DJLeo Collection', isdirectlink: true, haveCollection: false, url: '/sandals/women/bags/hash-triple-dj-leo-collection/'}, 
              ],
              img: [
                {name:'', file:'n2.jpg', haveCollection: false, link:'/sandals/women/bags/triple-dj-logo-bag/?FL_BAN=IHFJF78837JK'},
              ]
            },
            {
              name: 'SHOES', 
              isdirectlink: false, 
              isSubCategoryCollapsed: false,  
              isClickedSubCategory: false, 
              isHoveredSubCategory: false, 
              isHoveredExpand: false,   
              subcategory: [
                {name: 'View all', isdirectlink: true, haveCollection: false, url:'/sandals/women/shoes/view-all/'},
                {name: 'Pumps and Slingback', isdirectlink: true, haveCollection: false, url:'/sandals/women/shoes/pumps-and-slingback/'},
                {name: 'Boots and Booties', isdirectlink: true, haveCollection: false, url:'/sandals/women/shoes/boots-and-booties/'},
                {name: 'Sneakers', isdirectlink: true, haveCollection: false, url:'/sandals/women/shoes/sneakers/'},
                {name: 'Sandals and Wedges', isdirectlink: true, haveCollection: false, url:'/sandals/women/shoes/sandals-and-wedges/'},
                {name: 'Slides and Mules', isdirectlink: true, haveCollection: false, url:'/sandals/women/shoes/slides-and-mules/'},
                {name: 'Flat', isdirectlink: true, haveCollection: false, url:'/sandals/women/shoes/flat/'},
                {name: 'Rainbow Lace Collection', isdirectlink: true, haveCollection: false, url:'/sandals/women/shoes/rainboy-lace-collection/'},
                {name: '3.5 Collection', isdirectlink: true, haveCollection: false, url:'/sandals/women/shoes/three-and-half-collection/'},
                {name: '#3DJLIMITED Sneakers', isdirectlink: true, haveCollection: false, url:'/sandals/women/shoes/hash-triple-dj-limited-sneakers/'},
              ],
              img: [
                {name:'', file:'n9.jpg', haveCollection: false, link:'/sandals/women/shoes/hash-triple-dj-limited-sneakers/?FL_BAN=AV78ERTFJGKK8'},
              ]
            },
            {
              name: 'ACCESSORIES', 
              isdirectlink: false, 
              isSubCategoryCollapsed: false, 
              isClickedSubCategory: false, 
              isHoveredSubCategory: false, 
              isHoveredExpand: false,   
              subcategory: [
                {name: 'View all', isdirectlink: true, haveCollection: false, url: '/sandals/women/accessories/view-all/'},
                {name: 'Bijoux', isdirectlink: true, haveCollection: false, url: '/sandals/women/accessories/bijoux/'},
                {name: 'Scarves and Silks', isdirectlink: true, haveCollection: false, url: '/sandals/women/accessories/scarves-and-silks/'},
                {name: 'Wallets and Small Leather Goods', isdirectlink: true, haveCollection: false, url: '/sandals/women/accessories/wallets-and-small-leather-goods/'},
                {name: 'Belts', isdirectlink: true, haveCollection: false, url: '/sandals/women/accessories/belts/'},
                {name: 'Hats and Gloves', isdirectlink: true, haveCollection: false, url: '/sandals/women/accessories/hats-and-gloves/'},
                {name: 'Socks', isdirectlink: true, haveCollection: false, url: '/sandals/women/accessories/socks/'},
                {name: 'Technology', isdirectlink: true, haveCollection: false, url: '/sandals/women/accessories/technology/'}
              ],
              img: [
                {name:'', file:'n7.jpg', haveCollection: false, link:'/sandals/women/accessories/technology/?FL_BAN=BNM7UFHDJVVBDH'},
              ]
            },
            {
              name: 'SUNGLASSES', 
              isdirectlink: false, 
              isSubCategoryCollapsed: false, 
              isClickedSubCategory: false, 
              isHoveredSubCategory: false, 
              isHoveredExpand: false,   
              subcategory: [
                {name: 'View all', isdirectlink: true, haveCollection: false, url: '/sandals/women/sunglasses/view-all/'},
                {name: 'New Arrivals', isdirectlink: true, haveCollection: false, url: '/sandals/women/sunglasses/new-arrivals/'},
                {name: 'Icons', isdirectlink: true, haveCollection: false, url: '/sandals/women/sunglasses/icons/'},
                {name: 'ADV Campaign', extraname: 'UPDATED', isdirectlink: true, haveCollection: false, url: '/sandals/women/sunglasses/adv-campaign/'}
              ],
              img: [
                {name:'', file:'n6.jpg', haveCollection: false, link:'/sandals/women/sunglasses/icons/?FL_BAN=BNWQGHD89JGKHK7'},
              ]
            },
            {
              name: 'WATCHES & JEWELRY', 
              isdirectlink: false, 
              isSubCategoryCollapsed: false,  
              isClickedSubCategory: false, 
              isHoveredSubCategory: false, 
              isHoveredExpand: false,   
              subcategory: [
                {name: 'View all', isdirectlink: true, haveCollection: false, url: '/sandals/women/watches-and-jewelry/view-all/'},
                {name: 'Discover the collection', isdirectlink: true, haveCollection: false, url: '/sandals/women/watches-and-jewelry/discover-the-collection/'},
                {name: 'Earrings', isdirectlink: true, haveCollection: false, url: '/sandals/women/watches-and-jewelry/earrings/'},
                {name: 'Rings', isdirectlink: true, haveCollection: false, url: '/sandals/women/watches-and-jewelry/rings/'},
                {name: 'Necklaces', isdirectlink: true, haveCollection: false, url: '/sandals/women/watches-and-jewelry/necklaces/'},
                {name: 'Charms', isdirectlink: true, haveCollection: false, url: '/sandals/women/watches-and-jewelry/charms/'},
                {name: 'Bracelets', isdirectlink: true, haveCollection: false, url: '/sandals/women/watches-and-jewelry/bracelets/'},
                {name: 'Watches & Straps', isdirectlink: true, haveCollection: false, url: '/sandals/women/watches-and-jewelry/watches-and-straps/'},
                {name: 'Devotion Collection', isdirectlink: true, haveCollection: false, url: '/sandals/women/watches-and-jewelry/devotion-collection/'},
                {name: 'DNA Collection', isdirectlink: true, haveCollection: false, url: '/sandals/women/watches-and-jewelry/dna-collection/'},
                {name: 'Rainbow Collection', isdirectlink: true, haveCollection: false, url: '/sandals/women/watches-and-jewelry/rainbow-collection/'}
              ],
              img: [
                {name:'', file:'n4.jpg', haveCollection: false, link:'/sandals/women/watches-and-jewelry/rainbow-collection/?FL_BAN=ERJF78FJJGK45DS'},
              ]
            },
            {
              name: 'LIMITED EDITION', 
              isdirectlink: false, 
              isSubCategoryCollapsed: false,  
              isClickedSubCategory: false, 
              isHoveredSubCategory: false, 
              isHoveredExpand: false,   
              subcategory: [
                {name: 'View All', isdirectlink: true, haveCollection: false, url: '/sandals/women/limited-edition/view-all/'},
                {name: 'Portofino Custom', isdirectlink: true, haveCollection: false, url: '/sandals/women/limited-edition/portofino-custom/'},
                {name: 'Daymaster Custom', isdirectlink: true, haveCollection: false, url: '/sandals/women/limited-edition/daymaster-custom/'},
                {name: 'Personalize', isdirectlink: true, haveCollection: false, url: '/sandals/women/limited-edition/personalize/'}
              ],
              img: [
                {name:'', file:'n3.jpg', haveCollection: false, link:'/sandals/women/limited-edition/personalize/?FL_BAN=VBCXSGD77FDG11'},
              ]
            }
          ]
        },
        {
          name: 'MEN', 
          isdirectlink: false, 
          isSubCategoryCollapsed: false,  
          isClickedSubCategory: false, 
          isHoveredSubCategory: false, 
          isHoveredExpand: false, 
          subcategory: [
            {
              name: 'NEW IN', 
              img: [
                {name:'', file:'n4.jpg', haveCollection: false, link:'/sandals/men/new-in/?FL_BAN=XZCVSDGDGF78HHJ'},
                {name:'', file:'n3.jpg', haveCollection: false, link:'/sandals/men/new-in/?FL_BAN=XZCVNMDDGDGF78HHJ'},
                {name:'', file:'n5.jpg', haveCollection: false, link:'/sandals/men/new-in/?FL_BAN=XZCVSVVCADGF78HHJ'},
              ]
            },
            {
              name: '3DJ SELECTION', 
              isdirectlink: false, 
              isSubCategoryCollapsed: false, 
              isClickedSubCategory: false, 
              isHoveredSubCategory: false, 
              isHoveredExpand: false, 
              subcategory: [
                {name: 'View all', isdirectlink: true, haveCollection: false, url: '/sandals/men/triple-dj-selection/view-all/'},
                {name: 'Dresses', isdirectlink: true, haveCollection: false, url: '/sandals/men/triple-dj-selection/dresses/'},
                {name: 'Blazers', isdirectlink: true, haveCollection: false, url: '/sandals/men/triple-dj-selection/blazers/'},
                {name: 'Coats and Jackets', extraname: 'NEW', isdirectlink: true, haveCollection: false, url: '/sandals/men/triple-dj-selection/coats-and-jackets/'},
                {name: 'Denim', isdirectlink: true, haveCollection: false, url: '/sandals/men/triple-dj-selection/denim/'},
                {name: 'Shirts and Tops', isdirectlink: true, haveCollection: false, url: '/sandals/men/triple-dj-selection/shirts-and-tops/'},
                {name: 'Sweaters and Cardigans', isdirectlink: true, haveCollection: false, url: '/sandals/men/triple-dj-selection/sweaters-and-cardigans/'},
                {name: 'T-Shirts and Sweatshirts', isdirectlink: true, haveCollection: false, url: '/sandals/men/triple-dj-selection/t-shirts-and-sweat-shirts/'},
                {name: 'Skirts', isdirectlink: true, haveCollection: false, url: '/sandals/men/triple-dj-selection/skirts/'},
                {name: 'Trousers and Shorts', isdirectlink: true, haveCollection: false, url: '/sandals/men/triple-dj-selection/trousers-and-shorts/'},
                {name: 'Underwear', isdirectlink: true, haveCollection: false, url: '/sandals/men/triple-dj-selection/underwear/'},
                {name: 'Beachwear', isdirectlink: true, haveCollection: false, url: '/sandals/men/triple-dj-selection/beachwear/'},
                {name: 'Wear It like #3DJCelebs', isdirectlink: true, haveCollection: false, url: '/sandals/men/triple-dj-selection/wear-it-like-3dj-celebs/'}
              ], 
              extraname: 'NEW',
              img: [
                {name:'', file:'n4.jpg', haveCollection: false, link:'/sandals/men/triple-dj-selection/beachwear/?FL_BAN=ASFRWE895KG'},
                {name:'', file:'n1.jpg', haveCollection: false, link:'/sandals/men/triple-dj-selection/underwear/?FL_BAN=GHJDK89JJFG5B'},
              ]
            },
            {
              name: '3DJ ESSENTIAL', 
              extraname: 'NEW',
              isdirectlink: false, 
              isSubCategoryCollapsed: false, 
              isClickedSubCategory: false, 
              isHoveredSubCategory: false, 
              isHoveredExpand: false, 
              subcategory: [
                {name: 'Discover the Collection', isdirectlink: true, haveCollection: false, url: '/sandals/men/triple-dj-essential/new/discover-the-collection/'},
                {name: 'View all', isdirectlink: true, haveCollection: false, url: '/sandals/men/triple-dj-essential/new/view-all/'}
              ],
              img: [
                {name:'', file:'n2.jpg', haveCollection: false, link:'/sandals/men/triple-dj-essential/new/discover-the-collection/?FL_BAN=GTTYUHFJ54HFJ'},
              ]
            },
            {
              name: 'CLOTHING', 
              isdirectlink: false, 
              isSubCategoryCollapsed: false, 
              isClickedSubCategory: false, 
              isHoveredSubCategory: false, 
              isHoveredExpand: false, 
              subcategory: [
                {name: 'View all', isdirectlink: true, haveCollection: false, url: '/sandals/men/clothing/view-all/'},
                {name: 'Dresses', isdirectlink: true, haveCollection: false, url: '/sandals/men/clothing/dresses/'},
                {name: 'Blazers', isdirectlink: true, haveCollection: false, url: '/sandals/men/clothing/blazers/'},
                {name: 'Coats and Jackets', extraname: 'NEW', isdirectlink: true, haveCollection: false, url: '/sandals/men/clothing/coats-and-jackets/'},
                {name: 'Denim', isdirectlink: true, haveCollection: false, url: '/sandals/men/clothing/denim/'},
                {name: 'Shirts and Tops', isdirectlink: true, haveCollection: false, url: '/sandals/men/clothing/shirts-and-tops/'},
                {name: 'Sweaters and Cardigans', isdirectlink: true, haveCollection: false, url: '/sandals/men/clothing/sweaters-and-cardigans/'},
                {name: 'T-Shirts and Sweatshirts', isdirectlink: true, haveCollection: false, url: '/sandals/men/clothing/t-shirts-and-sweat-shirts/'},
                {name: 'Skirts', isdirectlink: true, haveCollection: false, url: '/sandals/men/clothing/skirts/'},
                {name: 'Trousers and Shorts', isdirectlink: true, haveCollection: false, url: '/sandals/men/clothing/trousers-and-shorts/'},
                {name: 'Underwear', isdirectlink: true, haveCollection: false, url: '/sandals/men/clothing/underwear/'},
                {name: 'Beachwear', isdirectlink: true, haveCollection: false, url: '/sandals/men/clothing/beachwear/'},
                {name: 'Wear It like #3DJCelebs', isdirectlink: true, haveCollection: false, url: '/sandals/men/clothing/wear-it-like-3dj-celebs/'}
              ],
              img: [
                {name:'', file:'n4.jpg', haveCollection: false, link:'/sandals/men/clothing/trousers-and-shorts/?FL_BAN=AQWEDF56HJKLMN7H3'},
              ]
            },
            {
              name: 'BAGS', 
              isdirectlink: false, 
              isSubCategoryCollapsed: false, 
              isClickedSubCategory: false, 
              isHoveredSubCategory: false, 
              isHoveredExpand: false, 
              subcategory: [
                {name: 'View all', isdirectlink: true, haveCollection: false, url: '/sandals/men/bags/view-all/'}, 
                {name: 'Exclusive Shopper in canvas', extraname: 'ECOMMERCE EXCLUSIVELY', isdirectlink: true, haveCollection: false, url: '/sandals/men/bags/exclusive-shopper-in-canvas/'}, 
                {name: 'Handbags', isdirectlink: true, haveCollection: false, url: '/sandals/men/bags/hand-bags/'}, 
                {name: 'Totes', isdirectlink: true, haveCollection: false, url: '/sandals/men/bags/totes/'}, 
                {name: 'Shoulder and Crossbody Bags', isdirectlink: true, haveCollection: false, url: '/sandals/men/bags/shoulder-and-crossbody-bags/'}, 
                {name: 'Clutches Mini and Micro Bags', isdirectlink: true, haveCollection: false, url: '/sandals/men/bags/clutches-mini-and-micro-bags/'}, 
                {name: 'Sicily', isdirectlink: true, haveCollection: false, url: '/sandals/men/bags/sicily/'}, 
                {name: '3DJ Logo Bag', isdirectlink: true, haveCollection: false, url: '/sandals/men/bags/triple-dj-logo-bag/'}, 
                {name: 'Devotion', isdirectlink: true, haveCollection: false, url: '/sandals/men/bas/devotion/'}, 
                {name: 'DJ Girls', isdirectlink: true, haveCollection: false, url: '/sandals/men/bags/dj-girls/'}, 
                {name: '3.5', isdirectlink: true, haveCollection: false, url: '/sandals/men/bags/three-and-half/'}, 
                {name: '3DJ Box', isdirectlink: true, haveCollection: false, url: '/sandals/men/bags/triple-dj-box/'}, 
                {name: '#3DJLeo Collection', isdirectlink: true, haveCollection: false, url: '/sandals/men/bags/hash-triple-dj-leo-collection/'}, 
              ],
              img: [
                {name:'', file:'n2.jpg', haveCollection: false, link:'/sandals/men/bags/triple-dj-logo-bag/?FL_BAN=IHFJF78837JK'},
              ]
            },
            {
              name: 'SHOES', 
              isdirectlink: false, 
              isSubCategoryCollapsed: false, 
              isClickedSubCategory: false, 
              isHoveredSubCategory: false, 
              isHoveredExpand: false, 
              subcategory: [
                {name: 'View all', isdirectlink: true, haveCollection: false, url:'/sandals/men/shoes/view-all/'},
                {name: 'Pumps and Slingback', isdirectlink: true, haveCollection: false, url:'/sandals/men/shoes/pumps-and-slingback/'},
                {name: 'Boots and Booties', isdirectlink: true, haveCollection: false, url:'/sandals/men/shoes/boots-and-booties/'},
                {name: 'Sneakers', isdirectlink: true, haveCollection: false, url:'/sandals/men/shoes/sneakers/'},
                {name: 'Sandals and Wedges', isdirectlink: true, haveCollection: false, url:'/sandals/men/shoes/sandals-and-wedges/'},
                {name: 'Slides and Mules', isdirectlink: true, haveCollection: false, url:'/sandals/men/shoes/slides-and-mules/'},
                {name: 'Flat', isdirectlink: true, haveCollection: false, url:'/sandals/men/shoes/flat/'},
                {name: 'Rainbow Lace Collection', isdirectlink: true, haveCollection: false, url:'/sandals/men/shoes/rainboy-lace-collection/'},
                {name: '3.5 Collection', isdirectlink: true, haveCollection: false, url:'/sandals/men/shoes/three-and-half-collection/'},
                {name: '#3DJLIMITED Sneakers', isdirectlink: true, haveCollection: false, url:'/sandals/men/shoes/hash-triple-dj-limited-sneakers/'},
              ],
              img: [
                {name:'', file:'n9.jpg', haveCollection: false, link:'/sandals/men/shoes/hash-triple-dj-limited-sneakers/?FL_BAN=AV78ERTFJGKK8'},
              ]
            },
            {
              name: 'ACCESSORIES', 
              isdirectlink: false, 
              isSubCategoryCollapsed: false, 
              isClickedSubCategory: false, 
              isHoveredSubCategory: false, 
              isHoveredExpand: false,   
              subcategory: [
                {name: 'View all', isdirectlink: true, haveCollection: false, url: '/sandals/men/accessories/view-all/'},
                {name: 'Bijoux', isdirectlink: true, haveCollection: false, url: '/sandals/men/accessories/bijoux/'},
                {name: 'Scarves and Silks', isdirectlink: true, haveCollection: false, url: '/sandals/men/accessories/scarves-and-silks/'},
                {name: 'Wallets and Small Leather Goods', isdirectlink: true, haveCollection: false, url: '/sandals/men/accessories/wallets-and-small-leather-goods/'},
                {name: 'Belts', isdirectlink: true, haveCollection: false, url: '/sandals/men/accessories/belts/'},
                {name: 'Hats and Gloves', isdirectlink: true, haveCollection: false, url: '/sandals/men/accessories/hats-and-gloves/'},
                {name: 'Socks', isdirectlink: true, haveCollection: false, url: '/sandals/men/accessories/socks/'},
                {name: 'Technology', isdirectlink: true, haveCollection: false, url: '/sandals/men/accessories/technology/'}
              ],
              img: [
                {name:'', file:'n7.jpg', haveCollection: false, link:'/sandals/men/accessories/technology/?FL_BAN=BNM7UFHDJVVBDH'},
              ]
            },
            {
              name: 'SUNGLASSES', 
              isdirectlink: false, 
              isSubCategoryCollapsed: false, 
              isClickedSubCategory: false, 
              isHoveredSubCategory: false, 
              isHoveredExpand: false,   
              subcategory: [
                {name: 'View all', isdirectlink: true, haveCollection: false, url: '/sandals/men/sunglasses/view-all/'},
                {name: 'New Arrivals', isdirectlink: true, haveCollection: false, url: '/sandals/men/sunglasses/new-arrivals/'},
                {name: 'Icons', isdirectlink: true, haveCollection: false, url: '/sandals/men/sunglasses/icons/'},
                {name: 'ADV Campaign', extraname: 'UPDATED', isdirectlink: true, haveCollection: false, url: '/sandals/men/sunglasses/adv-campaign/'}
              ],
              img: [
                {name:'', file:'n6.jpg', haveCollection: false, link:'/sandals/men/sunglasses/icons/?FL_BAN=BNWQGHD89JGKHK7'},
              ]
            },
            {
              name: 'WATCHES & JEWELRY', 
              isdirectlink: false, 
              isSubCategoryCollapsed: false, 
              isClickedSubCategory: false, 
              isHoveredSubCategory: false, 
              isHoveredExpand: false,   
              subcategory: [
                {name: 'View all', isdirectlink: true, haveCollection: false, url: '/sandals/men/watches-and-jewelry/view-all/'},
                {name: 'Discover the collection', isdirectlink: true, haveCollection: false, url: '/sandals/men/watches-and-jewelry/discover-the-collection/'},
                {name: 'Earrings', isdirectlink: true, haveCollection: false, url: '/sandals/men/watches-and-jewelry/earrings/'},
                {name: 'Rings', isdirectlink: true, haveCollection: false, url: '/sandals/men/watches-and-jewelry/rings/'},
                {name: 'Necklaces', isdirectlink: true, haveCollection: false, url: '/sandals/men/watches-and-jewelry/necklaces/'},
                {name: 'Charms', isdirectlink: true, haveCollection: false, url: '/sandals/men/watches-and-jewelry/charms/'},
                {name: 'Bracelets', isdirectlink: true, haveCollection: false, url: '/sandals/men/watches-and-jewelry/bracelets/'},
                {name: 'Watches & Straps', isdirectlink: true, haveCollection: false, url: '/sandals/men/watches-and-jewelry/watches-and-straps/'},
                {name: 'Devotion Collection', isdirectlink: true, haveCollection: false, url: '/sandals/men/watches-and-jewelry/devotion-collection/'},
                {name: 'DNA Collection', isdirectlink: true, haveCollection: false, url: '/sandals/men/watches-and-jewelry/dna-collection/'},
                {name: 'Rainbow Collection', isdirectlink: true, haveCollection: false, url: '/sandals/men/watches-and-jewelry/rainbow-collection/'}
              ],
              img: [
                {name:'', file:'n4.jpg', haveCollection: false, link:'/sandals/men/watches-and-jewelry/rainbow-collection/?FL_BAN=ERJF78FJJGK45DS'},
              ]
            },
            {
              name: 'LIMITED EDITION', 
              isdirectlink: false, 
              isSubCategoryCollapsed: false,  
              isClickedSubCategory: false, 
              isHoveredSubCategory: false, 
              isHoveredExpand: false,   
              subcategory: [
                {name: 'View All', isdirectlink: true, haveCollection: false, url: '/sandals/men/limited-edition/view-all/'},
                {name: 'Portofino Custom', isdirectlink: true, haveCollection: false, url: '/sandals/men/limited-edition/portofino-custom/'},
                {name: 'Daymaster Custom', isdirectlink: true, haveCollection: false, url: '/sandals/men/limited-edition/daymaster-custom/'},
                {name: 'Personalize', isdirectlink: true, haveCollection: false, url: '/sandals/men/limited-edition/personalize/'}
              ],
              img: [
                {name:'', file:'n3.jpg', haveCollection: false, link:'/sandals/men/limited-edition/personalize/?FL_BAN=VBCXSGD77FDG11'},
              ]
            }
          ]
        },
        {
          name: '3DJVIB3', isdirectlink: true, haveCollection: false, url: '/sandals/triple-dj-vib-3/'
        },
        {
          name: 'CHILDREN', 
          isdirectlink: false, 
          isSubCategoryCollapsed: false, 
          isClickedSubCategory: false, 
          isHoveredSubCategory: false, 
          isHoveredExpand: false,   
          subcategory: [
            {
              name: 'NEW IN', 
              isdirectlink: false, 
              isSubCategoryCollapsed: false, 
              isClickedSubCategory: false, 
              isHoveredSubCategory: false, 
              isHoveredExpand: false,   
              subcategory: [
                {name: 'New Arrivals Girl', isdirectlink: true, haveCollection: false, url: '/sandals/children/new-in/new-arrivals-girl/'},
                {name: 'New Arrivals Boy', isdirectlink: true, haveCollection: false, url: '/sandals/children/new-in/new-arrival-boy/'},
                {name: 'Most Loved Girl', isdirectlink: true, haveCollection: false, url: '/sandals/children/new-in/most-loved-girl/'},
                {name: 'Most Loved Boy', isdirectlink: true, haveCollection: false, url: '/sandals/children/new-in/most-loved-boy/'},
              ],
              img: [
                {name:'', file:'n4.jpg', haveCollection: false, link:'/sandals/children/new-in/most-loved-boy/?FL_BAN=YYTRE8977DHF'},
                {name:'', file:'n2.jpg', haveCollection: false, link:'/sandals/children/new-in/most-loved-girl/?FL_BAN=VCXXHF89DHFF'},
              ]
            },
            {
              name: 'GIRL (2-13 YEARS)', 
              isdirectlink: false, 
              isSubCategoryCollapsed: false, 
              isClickedSubCategory: false, 
              isHoveredSubCategory: false, 
              isHoveredExpand: false,   
              subcategory: [
                {name: 'View all', isdirectlink: true, haveCollection: false, url: '/sandals/children/girl-2-13-years/view-all/'},
                {name: 'Dresses', isdirectlink: true, haveCollection: false, url: '/sandals/children/girl-2-13-years/dresses/'},
                {name: 'Coats and Jackets', isdirectlink: true, haveCollection: false, url: '/sandals/children/girl-2-13-years/coats-and-jackets/'},
                {name: 'T-Shirts and Sweatshirts', isdirectlink: true, haveCollection: false, url: '/sandals/children/girl-2-13-years/t-shirts-and-sweatshirts/'},
                {name: 'Shirts and Tops', isdirectlink: true, haveCollection: false, url: '/sandals/children/girl-2-13-years/shirts-and-tops/'},
                {name: 'Sweaters', isdirectlink: true, haveCollection: false, url: '/sandals/children/girl-2-13-years/sweaters/'},
                {name: 'Trousers and Skirts', isdirectlink: true, haveCollection: false, url: '/sandals/children/girl-2-13-years/trousers-and-skirts/'},
                {name: 'Beachwear', isdirectlink: true, haveCollection: false, url: '/sandals/children/girl-2-13-years/beachwear/'},
                {name: 'Accessories', isdirectlink: true, haveCollection: false, url: '/sandals/children/girl-2-13-years/accessories/'},
                {name: 'Shoes (24-38)', isdirectlink: true, haveCollection: false, url: '/sandals/children/girl-2-13-years/shoes-24-to-38/'},
                {name: 'Jewelry', isdirectlink: true, haveCollection: false, url: '/sandals/children/girl-2-13-years/jewelry/'}
              ],
              img: [
                {name:'', file:'c1.jpg', haveCollection: false, link:'/sandals/children/girl-2-13-years/jewelry/?FL_BAN=FJJJO90OJD'},
                {name:'', file:'c2.jpg', haveCollection: false, link:'/sandals/children/girl-2-13-years/accessories/?FL_BAN=INFM90GLLLS'},
              ]
            },
            {
              name: 'BOY (2-13 YEARS)', 
              isdirectlink: false, 
              isSubCategoryCollapsed: false, 
              isClickedSubCategory: false, 
              isHoveredSubCategory: false, 
              isHoveredExpand: false,   
              subcategory: [
                {name: 'View all', isdirectlink: true, haveCollection: false, url: '/sandals/children/boy-2-13-years/view-all/'},
                {name: 'Dresses', isdirectlink: true, haveCollection: false, url: '/sandals/children/boy-2-13-years/dresses/'},
                {name: 'Coats and Jackets', isdirectlink: true, haveCollection: false, url: '/sandals/children/boy-2-13-years/coats-and-jackets/'},
                {name: 'T-Shirts and Sweatshirts', isdirectlink: true, haveCollection: false, url: '/sandals/children/boy-2-13-years/t-shirts-and-sweatshirts/'},
                {name: 'Shirts and Tops', isdirectlink: true, haveCollection: false, url: '/sandals/children/boy-2-13-years/shirts-and-tops/'},
                {name: 'Sweaters', isdirectlink: true, haveCollection: false, url: '/sandals/children/boy-2-13-years/sweaters/'},
                {name: 'Trousers and Skirts', isdirectlink: true, haveCollection: false, url: '/sandals/children/boy-2-13-years/trousers-and-skirts/'},
                {name: 'Beachwear', isdirectlink: true, haveCollection: false, url: '/sandals/children/boy-2-13-years/beachwear/'},
                {name: 'Accessories', isdirectlink: true, haveCollection: false, url: '/sandals/children/boy-2-13-years/accessories/'},
                {name: 'Shoes (24-38)', isdirectlink: true, haveCollection: false, url: '/sandals/children/boy-2-13-years/shoes-24-to-38/'},
                {name: 'Jewelry', isdirectlink: true, haveCollection: false, url: '/sandals/children/boy-2-13-years/jewelry/'}
              ],
              img: [
                {name:'', file:'c1.jpg', haveCollection: false, link:'/sandals/children/boy-2-13-years/jewelry/?FL_BAN=FJJJO90OJD'},
                {name:'', file:'c2.jpg', haveCollection: false, link:'/sandals/children/boy-2-13-years/accessories/?FL_BAN=INFM90GLLLS'},
              ]
            },
            {
              name: 'MINI ME', 
              isdirectlink: false, 
              isSubCategoryCollapsed: false, 
              isClickedSubCategory: false, 
              isHoveredSubCategory: false, 
              isHoveredExpand: false,   
              subcategory: [
                {name: 'View all', isdirectlink: true, haveCollection: false, url: '/sandals/children/mini-me/view-all/'},
                {name: 'Dresses', isdirectlink: true, haveCollection: false, url: '/sandals/children/mini-me/dresses/'},
                {name: 'Coats and Jackets', isdirectlink: true, haveCollection: false, url: '/sandals/children/mini-me/coats-and-jackets/'},
                {name: 'T-Shirts and Sweatshirts', isdirectlink: true, haveCollection: false, url: '/sandals/children/mini-me/t-shirts-and-sweatshirts/'},
                {name: 'Shirts and Tops', isdirectlink: true, haveCollection: false, url: '/sandals/children/mini-me/shirts-and-tops/'},
                {name: 'Sweaters', isdirectlink: true, haveCollection: false, url: '/sandals/children/mini-me/sweaters/'},
                {name: 'Trousers and Skirts', isdirectlink: true, haveCollection: false, url: '/sandals/children/mini-me/trousers-and-skirts/'},
                {name: 'Beachwear', isdirectlink: true, haveCollection: false, url: '/sandals/children/mini-me/beachwear/'},
                {name: 'Accessories', isdirectlink: true, haveCollection: false, url: '/sandals/children/mini-me/accessories/'},
                {name: 'Shoes (24-38)', isdirectlink: true, haveCollection: false, url: '/sandals/children/mini-me/shoes-24-to-38/'},
                {name: 'Jewelry', isdirectlink: true, haveCollection: false, url: '/sandals/children/mini-me/jewelry/'}
              ],
              img: [
                {name:'', file:'n1.jpg', haveCollection: false, link:'/sandals/children/mini-me/jewelry/?FL_BAN=IUDH009FJ45D'},
                {name:'', file:'n2.jpg', haveCollection: false, link:'/sandals/children/mini-me/sweaters/?FL_BAN=VVBMMMN7866'},
              ]
            },
            {
              name: 'NEWBORN (0-12 MONTHS)', 
              isdirectlink: false, 
              isSubCategoryCollapsed: false, 
              isClickedSubCategory: false, 
              isHoveredSubCategory: false, 
              isHoveredExpand: false,   
              subcategory: [
                {name: 'View all', isdirectlink: true, haveCollection: false, url: '/sandals/children/new-born-0-to-12-months/view-all/'},
                {name: 'Dresses', isdirectlink: true, haveCollection: false, url: '/sandals/children/new-born-0-to-12-months/dresses/'},
                {name: 'Coats and Jackets', isdirectlink: true, haveCollection: false, url: '/sandals/children/new-born-0-to-12-months/coats-and-jackets/'},
                {name: 'T-Shirts and Sweatshirts', isdirectlink: true, haveCollection: false, url: '/sandals/children/new-born-0-to-12-months/t-shirts-and-sweatshirts/'},
                {name: 'Shirts and Tops', isdirectlink: true, haveCollection: false, url: '/sandals/children/new-born-0-to-12-months/shirts-and-tops/'},
                {name: 'Sweaters', isdirectlink: true, haveCollection: false, url: '/sandals/children/new-born-0-to-12-months/sweaters/'},
                {name: 'Trousers and Skirts', isdirectlink: true, haveCollection: false, url: '/sandals/children/new-born-0-to-12-months/trousers-and-skirts/'},
                {name: 'Beachwear', isdirectlink: true, haveCollection: false, url: '/sandals/children/new-born-0-to-12-months/beachwear/'},
                {name: 'Accessories', isdirectlink: true, haveCollection: false, url: '/sandals/children/new-born-0-to-12-months/accessories/'},
                {name: 'Shoes (24-38)', isdirectlink: true, haveCollection: false, url: '/sandals/children/new-born-0-to-12-months/shoes-24-to-38/'},
                {name: 'Jewelry', isdirectlink: true, haveCollection: false, url: '/sandals/children/new-born-0-to-12-months/jewelry/'}
              ],
              img: [
                {name:'', file:'n1.jpg', haveCollection: false, link:'/sandals/children/new-born-0-to-12-months/dresses/?FL_BAN=TYYR89JFJ21I'},
                {name:'', file:'n3.jpg', haveCollection: false, link:'/sandals/children/new-born-0-to-12-months/trousers-and-skirts/?FL_BAN=CCV84DEEASDX6'},
              ]
            },
            {
              name: 'NEWBORN GIRL (0-30 MONTHS)', 
              isdirectlink: false, 
              isSubCategoryCollapsed: false, 
              isClickedSubCategory: false, 
              isHoveredSubCategory: false, 
              isHoveredExpand: false,   
              subcategory: [
                {name: 'View all', isdirectlink: true, haveCollection: false, url: '/sandals/children/new-born-girl-0-to-30-months/view-all/'},
                {name: 'Dresses', isdirectlink: true, haveCollection: false, url: '/sandals/children/new-born-girl-0-to-30-months/dresses/'},
                {name: 'Coats and Jackets', isdirectlink: true, haveCollection: false, url: '/sandals/children/new-born-girl-0-to-30-months/coats-and-jackets/'},
                {name: 'T-Shirts and Sweatshirts', isdirectlink: true, haveCollection: false, url: '/sandals/children/new-born-girl-0-to-30-months/t-shirts-and-sweatshirts/'},
                {name: 'Shirts and Tops', isdirectlink: true, haveCollection: false, url: '/sandals/children/new-born-girl-0-to-30-months/shirts-and-tops/'},
                {name: 'Sweaters', isdirectlink: true, haveCollection: false, url: '/sandals/children/new-born-girl-0-to-30-months/sweaters/'},
                {name: 'Trousers and Skirts', isdirectlink: true, haveCollection: false, url: '/sandals/children/new-born-girl-0-to-30-months/trousers-and-skirts/'},
                {name: 'Beachwear', isdirectlink: true, haveCollection: false, url: '/sandals/children/new-born-girl-0-to-30-months/beachwear/'},
                {name: 'Accessories', isdirectlink: true, haveCollection: false, url: '/sandals/children/new-born-girl-0-to-30-months/accessories/'},
                {name: 'Shoes (24-38)', isdirectlink: true, haveCollection: false, url: '/sandals/children/new-born-girl-0-to-30-months/shoes-24-to-38/'},
                {name: 'Jewelry', isdirectlink: true, haveCollection: false, url: '/sandals/children/new-born-girl-0-to-30-months/jewelry/'}
              ],
              img: [
                {name:'', file:'c4.jpg', haveCollection: false, link:'/sandals/children/new-born-girl-0-to-30-months/jewelry/?FL_BAN=CCZZXASS67'},
              ]
            },
            {
              name: 'NEWBORN BOY (0-30 MONTHS)', 
              isdirectlink: false, 
              isSubCategoryCollapsed: false, 
              isClickedSubCategory: false, 
              isHoveredSubCategory: false, 
              isHoveredExpand: false,   
              subcategory: [
                {name: 'View all', isdirectlink: true, haveCollection: false, url: '/sandals/children/new-born-boy-0-to-30-months/view-all/'},
                {name: 'Dresses', isdirectlink: true, haveCollection: false, url: '/sandals/children/new-born-boy-0-to-30-months/dresses/'},
                {name: 'Coats and Jackets', isdirectlink: true, haveCollection: false, url: '/sandals/children/new-born-boy-0-to-30-months/coats-and-jackets/'},
                {name: 'T-Shirts and Sweatshirts', isdirectlink: true, haveCollection: false, url: '/sandals/children/new-born-boy-0-to-30-months/t-shirts-and-sweatshirts/'},
                {name: 'Shirts and Tops', isdirectlink: true, haveCollection: false, url: '/sandals/children/new-born-boy-0-to-30-months/shirts-and-tops/'},
                {name: 'Sweaters', isdirectlink: true, haveCollection: false, url: '/sandals/children/new-born-boy-0-to-30-months/sweaters/'},
                {name: 'Trousers and Skirts', isdirectlink: true, haveCollection: false, url: '/sandals/children/new-born-boy-0-to-30-months/trousers-and-skirts/'},
                {name: 'Beachwear', isdirectlink: true, haveCollection: false, url: '/sandals/children/new-born-boy-0-to-30-months/beachwear/'},
                {name: 'Accessories', isdirectlink: true, haveCollection: false, url: '/sandals/children/new-born-boy-0-to-30-months/accessories/'},
                {name: 'Shoes (24-38)', isdirectlink: true, haveCollection: false, url: '/sandals/children/new-born-boy-0-to-30-months/shoes-24-to-38/'},
                {name: 'Jewelry', isdirectlink: true, haveCollection: false, url: '/sandals/children/new-born-boy-0-to-30-months/jewelry/'}
              ],
              img: [
                {name:'', file:'c4.jpg', haveCollection: false, link:'/sandals/children/new-born-boy-0-to-30-months/sweaters/?FL_BAN=HHJJFHHCCXX11253'},
              ]
            },
          ]
        },
      ],
      img: 'n1.jpg'
    },
    {isdirectlink: true, haveCollection: false, url: '/slippers/', name: 'Slippers', img: 'n2.jpg'},
    {
      url: '/belts/', 
      name: 'Belts', 
      isdirectlink: false, 
      isSubCategoryCollapsed: false, 
      isClickedSubCategory: false, 
      isHoveredSubCategory: false, 
      isHoveredExpand: false, 
      subcategory: [
        {
          name: 'Gifts', 
          isdirectlink: false, 
          isSubCategoryCollapsed: false, 
          isClickedSubCategory: false, 
          isHoveredSubCategory: false, 
          isHoveredExpand: false, 
          subcategory: [
            {
              name: 'WOMEN', 
              isdirectlink: false, 
              isSubCategoryCollapsed: false,  
              isClickedSubCategory: false, 
              isHoveredSubCategory: false, 
              isHoveredExpand: false, 
              subcategory: [
                {name: 'View all', isdirectlink: true, haveCollection: false, url: '/belts/gifts/women/view-all/'},
                {name: 'Small gifts ideas', isdirectlink: true, haveCollection: false, url: '/belts/gifts/women/small-gifts-ideas/'},
                {name: 'Exclusive gifts', isdirectlink: true, haveCollection: false, url: '/belts/gifts/women/exclusive-gifts/'},
                {name: 'Personalize', isdirectlink: true, haveCollection: false, url: '/belts/gifts/women/personalize/'},
                {name: 'Lifestyle gifts', isdirectlink: true, haveCollection: false, url: '/belts/gifts/women/lifestyle-gifts/'},
                {name: 'Gift Card', isdirectlink: true, haveCollection: false, url: '/belts/gifts/women/gift-card/'}
              ],
              img: [
                {name:'', file:'n4.jpg', haveCollection: false, link:'/belts/gifts/women/personalize/?FL_BAN=F987AKJDHF89'},
                {name:'', file:'n2.jpg', haveCollection: false, link:'/belts/gifts/women/lifestyle-gifts/?FL_BAN=uytrew8UYT'},
              ]
            },
            {
              name: 'MEN', 
              isdirectlink: false, 
              isSubCategoryCollapsed: false, 
              isClickedSubCategory: false, 
              isHoveredSubCategory: false, 
              isHoveredExpand: false, 
              subcategory: [
                {name: 'View all', isdirectlink: true, haveCollection: false, url: '/belts/gifts/men/view-all/'},
                {name: 'Small gifts ideas', isdirectlink: true, haveCollection: false, url: '/belts/gifts/men/small-gifts-idea/'},
                {name: 'Exclusive gifts', isdirectlink: true, haveCollection: false, url: '/belts/gifts/men/exclusive-gifts/'},
                {name: 'Personalize', isdirectlink: true, haveCollection: false, url: '/belts/gifts/men/personalize/'},
                {name: 'Lifestyle gifts', isdirectlink: true, haveCollection: false, url: '/belts/gifts/men/lifestyle-gifts/'},
                {name: 'Gift Card', isdirectlink: true, haveCollection: false, url: '/belts/gifts/men/gift-card/'}
              ],
              img: [
                {name:'', file:'n4.jpg', haveCollection: false, link:'/belts/gifts/men/personalize/?FL_BAN=UI89FUIYRSE'}
              ]
            },
            {
              name: 'CHILDREN', 
              isdirectlink: false, 
              isSubCategoryCollapsed: false, 
              isClickedSubCategory: false, 
              isHoveredSubCategory: false, 
              isHoveredExpand: false,  
              subcategory: [
                {name: 'View all', isdirectlink: true, haveCollection: false, url: '/belts/gifts/children/view-all/'},
                {name: 'Girl', isdirectlink: true, haveCollection: false, url: '/belts/gifts/children/girl/'},
                {name: 'Boy', isdirectlink: true, haveCollection: false, url: '/belts/gifts/children/boy/'},
                {name: 'Gift Set', isdirectlink: true, haveCollection: false, url: '/belts/gifts/children/gift-set/'}
              ],
              img: [
                {name:'', file:'n2.jpg', haveCollection: false, link:'/belts/gifts/children/boy/?FL_BAN=KLKDJJF090F'}
              ]
            },
            {
              name: 'PARTY LOOKS', 
              isdirectlink: false, 
              isSubCategoryCollapsed: false,  
              isClickedSubCategory: false, 
              isHoveredSubCategory: false, 
              isHoveredExpand: false, 
              subcategory: [
                {name: 'Women', isdirectlink: true, haveCollection: false, url: '/belts/gifts/party-looks/women/'},
                {name: 'Men', isdirectlink: true, haveCollection: false, url: '/belts/gifts/party-looks/men/'},
                {name: 'Children', isdirectlink: true, haveCollection: false, url: '/belts/gifts/party-looks/children/'}
              ],
              img: [
                {name:'', file:'n4.jpg', haveCollection: false, link:'/belts/gifts/party-looks/children/?FL_BAN=YUDYEJJFY56'},
              ]
            },
            {
              name: 'VIEW ALL',
              img: [
                {name:'', file:'n6.jpg', haveCollection: false, link:'/belts/gifts/view-all/?FL_BAN=NMDHFJF89DJF'},
                {name:'', file:'n8.jpg', haveCollection: false, link:'/belts/gifts/view-all/?FL_BAN=NCZDHFJF89DJF'},
              ]
            },
            {
              name: 'GIFTING CAMPAIGN', 
              img: [
                {name:'', file:'n1.jpg', haveCollection: false, link:'/belts/gifts/gifting-campaign/?FL_BAN=SDEHFJ2536K'},
                {name:'', file:'n9.jpg', haveCollection: false, link:'/belts/gifts/gifting-campaign/?FL_BAN=XCDEHFJ2536K'},
                {name:'', file:'n2.jpg', haveCollection: false, link:'/belts/gifts/gifting-campaign/?FL_BAN=ZQDEHFJ2536K'},
              ]
            }
          ]
        },
        {
          name: 'WOMEN', 
          isdirectlink: false, 
          isSubCategoryCollapsed: false, 
          isClickedSubCategory: false, 
          isHoveredSubCategory: false, 
          isHoveredExpand: false,   
          subcategory: [
            {
              name: 'NEW IN', 
              haveCollection: false, 
              isdirectlink: true,
              url: '/belts/women/new-in/',
              img: [
                {name:'', file:'n4.jpg', haveCollection: false, link:'/belts/women/new-in/?FL_BAN=XZCVSDGDGF78HHJ'},
                {name:'', file:'n3.jpg', haveCollection: false, link:'/belts/women/new-in/?FL_BAN=XZCVNMDDGDGF78HHJ'},
                {name:'', file:'n5.jpg', haveCollection: false, link:'/belts/women/new-in/?FL_BAN=XZCVSVVCADGF78HHJ'},
              ]
            },
            {
              name: '3DJ SELECTION', 
              isdirectlink: false, 
              isSubCategoryCollapsed: false, 
              isClickedSubCategory: false, 
              isHoveredSubCategory: false, 
              isHoveredExpand: false,   
              subcategory: [
                {name: 'View all', isdirectlink: true, haveCollection: false, url: '/belts/women/triple-dj-selection/view-all/'},
                {name: 'Dresses', isdirectlink: true, haveCollection: false, url: '/belts/women/triple-dj-selection/dresses/'},
                {name: 'Blazers', isdirectlink: true, haveCollection: false, url: '/belts/women/triple-dj-selection/blazers/'},
                {name: 'Coats and Jackets', extraname: 'NEW', isdirectlink: true, haveCollection: false, url: '/belts/women/triple-dj-selection/coats-and-jackets/'},
                {name: 'Denim', isdirectlink: true, haveCollection: false, url: '/belts/women/triple-dj-selection/denim/'},
                {name: 'Shirts and Tops', isdirectlink: true, haveCollection: false, url: '/belts/women/triple-dj-selection/shirts-and-tops/'},
                {name: 'Sweaters and Cardigans', isdirectlink: true, haveCollection: false, url: '/belts/women/triple-dj-selection/sweaters-and-cardigans/'},
                {name: 'T-Shirts and Sweatshirts', isdirectlink: true, haveCollection: false, url: '/belts/women/triple-dj-selection/t-shirts-and-sweat-shirts/'},
                {name: 'Skirts', isdirectlink: true, haveCollection: false, url: '/belts/women/triple-dj-selection/skirts/'},
                {name: 'Trousers and Shorts', isdirectlink: true, haveCollection: false, url: '/belts/women/triple-dj-selection/trousers-and-shorts/'},
                {name: 'Underwear', isdirectlink: true, haveCollection: false, url: '/belts/women/triple-dj-selection/underwear/'},
                {name: 'Beachwear', isdirectlink: true, haveCollection: false, url: '/belts/women/triple-dj-selection/beachwear/'},
                {name: 'Wear It like #3DJCelebs', isdirectlink: true, haveCollection: false, url: '/belts/women/triple-dj-selection/wear-it-like-3dj-celebs/'}
              ], 
              extraname: 'NEW',
              img: [
                {name:'', file:'n4.jpg', haveCollection: false, link:'/belts/women/triple-dj-selection/beachwear/?FL_BAN=ASFRWE895KG'},
                {name:'', file:'n1.jpg', haveCollection: false, link:'/belts/women/triple-dj-selection/underwear/?FL_BAN=GHJDK89JJFG5B'},
              ]
            },
            {
              name: '3DJ ESSENTIAL', 
              extraname: 'NEW',
              isdirectlink: false, 
              isSubCategoryCollapsed: false, 
              isClickedSubCategory: false, 
              isHoveredSubCategory: false, 
              isHoveredExpand: false,   
              subcategory: [
                {name: 'Discover the Collection', isdirectlink: true, haveCollection: false, url: '/belts/women/triple-dj-essential/new/discover-the-collection/'},
                {name: 'View all', isdirectlink: true, haveCollection: false, url: '/belts/women/triple-dj-essential/new/view-all/'}
              ],
              img: [
                {name:'', file:'n2.jpg', haveCollection: false, link:'/belts/women/triple-dj-essential/new/discover-the-collection/?FL_BAN=GTTYUHFJ54HFJ'},
              ]
            },
            {
              name: 'CLOTHING', 
              isdirectlink: false, 
              isSubCategoryCollapsed: false, 
              isClickedSubCategory: false, 
              isHoveredSubCategory: false, 
              isHoveredExpand: false,   
              subcategory: [
                {name: 'View all', isdirectlink: true, haveCollection: false, url: '/belts/women/clothing/view-all/'},
                {name: 'Dresses', isdirectlink: true, haveCollection: false, url: '/belts/women/clothing/dresses/'},
                {name: 'Blazers', isdirectlink: true, haveCollection: false, url: '/belts/women/clothing/blazers/'},
                {name: 'Coats and Jackets', extraname: 'NEW', isdirectlink: true, haveCollection: false, url: '/belts/women/clothing/coats-and-jackets/'},
                {name: 'Denim', isdirectlink: true, haveCollection: false, url: '/belts/women/clothing/denim/'},
                {name: 'Shirts and Tops', isdirectlink: true, haveCollection: false, url: '/belts/women/clothing/shirts-and-tops/'},
                {name: 'Sweaters and Cardigans', isdirectlink: true, haveCollection: false, url: '/belts/women/clothing/sweaters-and-cardigans/'},
                {name: 'T-Shirts and Sweatshirts', isdirectlink: true, haveCollection: false, url: '/belts/women/clothing/t-shirts-and-sweat-shirts/'},
                {name: 'Skirts', isdirectlink: true, haveCollection: false, url: '/belts/women/clothing/skirts/'},
                {name: 'Trousers and Shorts', isdirectlink: true, haveCollection: false, url: '/belts/women/clothing/trousers-and-shorts/'},
                {name: 'Underwear', isdirectlink: true, haveCollection: false, url: '/belts/women/clothing/underwear/'},
                {name: 'Beachwear', isdirectlink: true, haveCollection: false, url: '/belts/women/clothing/beachwear/'},
                {name: 'Wear It like #3DJCelebs', isdirectlink: true, haveCollection: false, url: '/belts/women/clothing/wear-it-like-3dj-celebs/'}
              ],
              img: [
                {name:'', file:'n4.jpg', haveCollection: false, link:'/belts/women/clothing/trousers-and-shorts/?FL_BAN=AQWEDF56HJKLMN7H3'},
              ]
            },
            {
              name: 'BAGS', 
              isdirectlink: false, 
              isSubCategoryCollapsed: false, 
              isClickedSubCategory: false, 
              isHoveredSubCategory: false, 
              isHoveredExpand: false,   
              subcategory: [
                {name: 'View all', isdirectlink: true, haveCollection: false, url: '/belts/women/bags/view-all/'}, 
                {name: 'Exclusive Shopper in canvas', extraname: 'ECOMMERCE EXCLUSIVELY', isdirectlink: true, haveCollection: false, url: '/belts/women/bags/exclusive-shopper-in-canvas/'}, 
                {name: 'Handbags', isdirectlink: true, haveCollection: false, url: '/belts/women/bags/hand-bags/'}, 
                {name: 'Totes', isdirectlink: true, haveCollection: false, url: '/belts/women/bags/totes/'}, 
                {name: 'Shoulder and Crossbody Bags', isdirectlink: true, haveCollection: false, url: '/belts/women/bags/shoulder-and-crossbody-bags/'}, 
                {name: 'Clutches Mini and Micro Bags', isdirectlink: true, haveCollection: false, url: '/belts/women/bags/clutches-mini-and-micro-bags/'}, 
                {name: 'Sicily', isdirectlink: true, haveCollection: false, url: '/belts/women/bags/sicily/'}, 
                {name: '3DJ Logo Bag', isdirectlink: true, haveCollection: false, url: '/belts/women/bags/triple-dj-logo-bag/'}, 
                {name: 'Devotion', isdirectlink: true, haveCollection: false, url: '/belts/women/bas/devotion/'}, 
                {name: 'DJ Girls', isdirectlink: true, haveCollection: false, url: '/belts/women/bags/dj-girls/'}, 
                {name: '3.5', isdirectlink: true, haveCollection: false, url: '/belts/women/bags/three-and-half/'}, 
                {name: '3DJ Box', isdirectlink: true, haveCollection: false, url: '/belts/women/bags/triple-dj-box/'}, 
                {name: '#3DJLeo Collection', isdirectlink: true, haveCollection: false, url: '/belts/women/bags/hash-triple-dj-leo-collection/'}, 
              ],
              img: [
                {name:'', file:'n2.jpg', haveCollection: false, link:'/belts/women/bags/triple-dj-logo-bag/?FL_BAN=IHFJF78837JK'},
              ]
            },
            {
              name: 'SHOES', 
              isdirectlink: false, 
              isSubCategoryCollapsed: false,  
              isClickedSubCategory: false, 
              isHoveredSubCategory: false, 
              isHoveredExpand: false,   
              subcategory: [
                {name: 'View all', isdirectlink: true, haveCollection: false, url:'/belts/women/shoes/view-all/'},
                {name: 'Pumps and Slingback', isdirectlink: true, haveCollection: false, url:'/belts/women/shoes/pumps-and-slingback/'},
                {name: 'Boots and Booties', isdirectlink: true, haveCollection: false, url:'/belts/women/shoes/boots-and-booties/'},
                {name: 'Sneakers', isdirectlink: true, haveCollection: false, url:'/belts/women/shoes/sneakers/'},
                {name: 'belts and Wedges', isdirectlink: true, haveCollection: false, url:'/belts/women/shoes/belts-and-wedges/'},
                {name: 'Slides and Mules', isdirectlink: true, haveCollection: false, url:'/belts/women/shoes/slides-and-mules/'},
                {name: 'Flat', isdirectlink: true, haveCollection: false, url:'/belts/women/shoes/flat/'},
                {name: 'Rainbow Lace Collection', isdirectlink: true, haveCollection: false, url:'/belts/women/shoes/rainboy-lace-collection/'},
                {name: '3.5 Collection', isdirectlink: true, haveCollection: false, url:'/belts/women/shoes/three-and-half-collection/'},
                {name: '#3DJLIMITED Sneakers', isdirectlink: true, haveCollection: false, url:'/belts/women/shoes/hash-triple-dj-limited-sneakers/'},
              ],
              img: [
                {name:'', file:'n9.jpg', haveCollection: false, link:'/belts/women/shoes/hash-triple-dj-limited-sneakers/?FL_BAN=AV78ERTFJGKK8'},
              ]
            },
            {
              name: 'ACCESSORIES', 
              isdirectlink: false, 
              isSubCategoryCollapsed: false, 
              isClickedSubCategory: false, 
              isHoveredSubCategory: false, 
              isHoveredExpand: false,   
              subcategory: [
                {name: 'View all', isdirectlink: true, haveCollection: false, url: '/belts/women/accessories/view-all/'},
                {name: 'Bijoux', isdirectlink: true, haveCollection: false, url: '/belts/women/accessories/bijoux/'},
                {name: 'Scarves and Silks', isdirectlink: true, haveCollection: false, url: '/belts/women/accessories/scarves-and-silks/'},
                {name: 'Wallets and Small Leather Goods', isdirectlink: true, haveCollection: false, url: '/belts/women/accessories/wallets-and-small-leather-goods/'},
                {name: 'Belts', isdirectlink: true, haveCollection: false, url: '/belts/women/accessories/belts/'},
                {name: 'Hats and Gloves', isdirectlink: true, haveCollection: false, url: '/belts/women/accessories/hats-and-gloves/'},
                {name: 'Socks', isdirectlink: true, haveCollection: false, url: '/belts/women/accessories/socks/'},
                {name: 'Technology', isdirectlink: true, haveCollection: false, url: '/belts/women/accessories/technology/'}
              ],
              img: [
                {name:'', file:'n7.jpg', haveCollection: false, link:'/belts/women/accessories/technology/?FL_BAN=BNM7UFHDJVVBDH'},
              ]
            },
            {
              name: 'SUNGLASSES', 
              isdirectlink: false, 
              isSubCategoryCollapsed: false, 
              isClickedSubCategory: false, 
              isHoveredSubCategory: false, 
              isHoveredExpand: false,   
              subcategory: [
                {name: 'View all', isdirectlink: true, haveCollection: false, url: '/belts/women/sunglasses/view-all/'},
                {name: 'New Arrivals', isdirectlink: true, haveCollection: false, url: '/belts/women/sunglasses/new-arrivals/'},
                {name: 'Icons', isdirectlink: true, haveCollection: false, url: '/belts/women/sunglasses/icons/'},
                {name: 'ADV Campaign', extraname: 'UPDATED', isdirectlink: true, haveCollection: false, url: '/belts/women/sunglasses/adv-campaign/'}
              ],
              img: [
                {name:'', file:'n6.jpg', haveCollection: false, link:'/belts/women/sunglasses/icons/?FL_BAN=BNWQGHD89JGKHK7'},
              ]
            },
            {
              name: 'WATCHES & JEWELRY', 
              isdirectlink: false, 
              isSubCategoryCollapsed: false,  
              isClickedSubCategory: false, 
              isHoveredSubCategory: false, 
              isHoveredExpand: false,   
              subcategory: [
                {name: 'View all', isdirectlink: true, haveCollection: false, url: '/belts/women/watches-and-jewelry/view-all/'},
                {name: 'Discover the collection', isdirectlink: true, haveCollection: false, url: '/belts/women/watches-and-jewelry/discover-the-collection/'},
                {name: 'Earrings', isdirectlink: true, haveCollection: false, url: '/belts/women/watches-and-jewelry/earrings/'},
                {name: 'Rings', isdirectlink: true, haveCollection: false, url: '/belts/women/watches-and-jewelry/rings/'},
                {name: 'Necklaces', isdirectlink: true, haveCollection: false, url: '/belts/women/watches-and-jewelry/necklaces/'},
                {name: 'Charms', isdirectlink: true, haveCollection: false, url: '/belts/women/watches-and-jewelry/charms/'},
                {name: 'Bracelets', isdirectlink: true, haveCollection: false, url: '/belts/women/watches-and-jewelry/bracelets/'},
                {name: 'Watches & Straps', isdirectlink: true, haveCollection: false, url: '/belts/women/watches-and-jewelry/watches-and-straps/'},
                {name: 'Devotion Collection', isdirectlink: true, haveCollection: false, url: '/belts/women/watches-and-jewelry/devotion-collection/'},
                {name: 'DNA Collection', isdirectlink: true, haveCollection: false, url: '/belts/women/watches-and-jewelry/dna-collection/'},
                {name: 'Rainbow Collection', isdirectlink: true, haveCollection: false, url: '/belts/women/watches-and-jewelry/rainbow-collection/'}
              ],
              img: [
                {name:'', file:'n4.jpg', haveCollection: false, link:'/belts/women/watches-and-jewelry/rainbow-collection/?FL_BAN=ERJF78FJJGK45DS'},
              ]
            },
            {
              name: 'LIMITED EDITION', 
              isdirectlink: false, 
              isSubCategoryCollapsed: false,  
              isClickedSubCategory: false, 
              isHoveredSubCategory: false, 
              isHoveredExpand: false,   
              subcategory: [
                {name: 'View All', isdirectlink: true, haveCollection: false, url: '/belts/women/limited-edition/view-all/'},
                {name: 'Portofino Custom', isdirectlink: true, haveCollection: false, url: '/belts/women/limited-edition/portofino-custom/'},
                {name: 'Daymaster Custom', isdirectlink: true, haveCollection: false, url: '/belts/women/limited-edition/daymaster-custom/'},
                {name: 'Personalize', isdirectlink: true, haveCollection: false, url: '/belts/women/limited-edition/personalize/'}
              ],
              img: [
                {name:'', file:'n3.jpg', haveCollection: false, link:'/belts/women/limited-edition/personalize/?FL_BAN=VBCXSGD77FDG11'},
              ]
            }
          ]
        },
        {
          name: 'MEN', 
          isdirectlink: false, 
          isSubCategoryCollapsed: false,  
          isClickedSubCategory: false, 
          isHoveredSubCategory: false, 
          isHoveredExpand: false, 
          subcategory: [
            {
              name: 'NEW IN', 
              img: [
                {name:'', file:'n4.jpg', haveCollection: false, link:'/belts/men/new-in/?FL_BAN=XZCVSDGDGF78HHJ'},
                {name:'', file:'n3.jpg', haveCollection: false, link:'/belts/men/new-in/?FL_BAN=XZCVNMDDGDGF78HHJ'},
                {name:'', file:'n5.jpg', haveCollection: false, link:'/belts/men/new-in/?FL_BAN=XZCVSVVCADGF78HHJ'},
              ]
            },
            {
              name: '3DJ SELECTION', 
              isdirectlink: false, 
              isSubCategoryCollapsed: false, 
              isClickedSubCategory: false, 
              isHoveredSubCategory: false, 
              isHoveredExpand: false, 
              subcategory: [
                {name: 'View all', isdirectlink: true, haveCollection: false, url: '/belts/men/triple-dj-selection/view-all/'},
                {name: 'Dresses', isdirectlink: true, haveCollection: false, url: '/belts/men/triple-dj-selection/dresses/'},
                {name: 'Blazers', isdirectlink: true, haveCollection: false, url: '/belts/men/triple-dj-selection/blazers/'},
                {name: 'Coats and Jackets', extraname: 'NEW', isdirectlink: true, haveCollection: false, url: '/belts/men/triple-dj-selection/coats-and-jackets/'},
                {name: 'Denim', isdirectlink: true, haveCollection: false, url: '/belts/men/triple-dj-selection/denim/'},
                {name: 'Shirts and Tops', isdirectlink: true, haveCollection: false, url: '/belts/men/triple-dj-selection/shirts-and-tops/'},
                {name: 'Sweaters and Cardigans', isdirectlink: true, haveCollection: false, url: '/belts/men/triple-dj-selection/sweaters-and-cardigans/'},
                {name: 'T-Shirts and Sweatshirts', isdirectlink: true, haveCollection: false, url: '/belts/men/triple-dj-selection/t-shirts-and-sweat-shirts/'},
                {name: 'Skirts', isdirectlink: true, haveCollection: false, url: '/belts/men/triple-dj-selection/skirts/'},
                {name: 'Trousers and Shorts', isdirectlink: true, haveCollection: false, url: '/belts/men/triple-dj-selection/trousers-and-shorts/'},
                {name: 'Underwear', isdirectlink: true, haveCollection: false, url: '/belts/men/triple-dj-selection/underwear/'},
                {name: 'Beachwear', isdirectlink: true, haveCollection: false, url: '/belts/men/triple-dj-selection/beachwear/'},
                {name: 'Wear It like #3DJCelebs', isdirectlink: true, haveCollection: false, url: '/belts/men/triple-dj-selection/wear-it-like-3dj-celebs/'}
              ], 
              extraname: 'NEW',
              img: [
                {name:'', file:'n4.jpg', haveCollection: false, link:'/belts/men/triple-dj-selection/beachwear/?FL_BAN=ASFRWE895KG'},
                {name:'', file:'n1.jpg', haveCollection: false, link:'/belts/men/triple-dj-selection/underwear/?FL_BAN=GHJDK89JJFG5B'},
              ]
            },
            {
              name: '3DJ ESSENTIAL', 
              extraname: 'NEW',
              isdirectlink: false, 
              isSubCategoryCollapsed: false, 
              isClickedSubCategory: false, 
              isHoveredSubCategory: false, 
              isHoveredExpand: false, 
              subcategory: [
                {name: 'Discover the Collection', isdirectlink: true, haveCollection: false, url: '/belts/men/triple-dj-essential/new/discover-the-collection/'},
                {name: 'View all', isdirectlink: true, haveCollection: false, url: '/belts/men/triple-dj-essential/new/view-all/'}
              ],
              img: [
                {name:'', file:'n2.jpg', haveCollection: false, link:'/belts/men/triple-dj-essential/new/discover-the-collection/?FL_BAN=GTTYUHFJ54HFJ'},
              ]
            },
            {
              name: 'CLOTHING', 
              isdirectlink: false, 
              isSubCategoryCollapsed: false, 
              isClickedSubCategory: false, 
              isHoveredSubCategory: false, 
              isHoveredExpand: false, 
              subcategory: [
                {name: 'View all', isdirectlink: true, haveCollection: false, url: '/belts/men/clothing/view-all/'},
                {name: 'Dresses', isdirectlink: true, haveCollection: false, url: '/belts/men/clothing/dresses/'},
                {name: 'Blazers', isdirectlink: true, haveCollection: false, url: '/belts/men/clothing/blazers/'},
                {name: 'Coats and Jackets', extraname: 'NEW', isdirectlink: true, haveCollection: false, url: '/belts/men/clothing/coats-and-jackets/'},
                {name: 'Denim', isdirectlink: true, haveCollection: false, url: '/belts/men/clothing/denim/'},
                {name: 'Shirts and Tops', isdirectlink: true, haveCollection: false, url: '/belts/men/clothing/shirts-and-tops/'},
                {name: 'Sweaters and Cardigans', isdirectlink: true, haveCollection: false, url: '/belts/men/clothing/sweaters-and-cardigans/'},
                {name: 'T-Shirts and Sweatshirts', isdirectlink: true, haveCollection: false, url: '/belts/men/clothing/t-shirts-and-sweat-shirts/'},
                {name: 'Skirts', isdirectlink: true, haveCollection: false, url: '/belts/men/clothing/skirts/'},
                {name: 'Trousers and Shorts', isdirectlink: true, haveCollection: false, url: '/belts/men/clothing/trousers-and-shorts/'},
                {name: 'Underwear', isdirectlink: true, haveCollection: false, url: '/belts/men/clothing/underwear/'},
                {name: 'Beachwear', isdirectlink: true, haveCollection: false, url: '/belts/men/clothing/beachwear/'},
                {name: 'Wear It like #3DJCelebs', isdirectlink: true, haveCollection: false, url: '/belts/men/clothing/wear-it-like-3dj-celebs/'}
              ],
              img: [
                {name:'', file:'n4.jpg', haveCollection: false, link:'/belts/men/clothing/trousers-and-shorts/?FL_BAN=AQWEDF56HJKLMN7H3'},
              ]
            },
            {
              name: 'BAGS', 
              isdirectlink: false, 
              isSubCategoryCollapsed: false, 
              isClickedSubCategory: false, 
              isHoveredSubCategory: false, 
              isHoveredExpand: false, 
              subcategory: [
                {name: 'View all', isdirectlink: true, haveCollection: false, url: '/belts/men/bags/view-all/'}, 
                {name: 'Exclusive Shopper in canvas', extraname: 'ECOMMERCE EXCLUSIVELY', isdirectlink: true, haveCollection: false, url: '/belts/men/bags/exclusive-shopper-in-canvas/'}, 
                {name: 'Handbags', isdirectlink: true, haveCollection: false, url: '/belts/men/bags/hand-bags/'}, 
                {name: 'Totes', isdirectlink: true, haveCollection: false, url: '/belts/men/bags/totes/'}, 
                {name: 'Shoulder and Crossbody Bags', isdirectlink: true, haveCollection: false, url: '/belts/men/bags/shoulder-and-crossbody-bags/'}, 
                {name: 'Clutches Mini and Micro Bags', isdirectlink: true, haveCollection: false, url: '/belts/men/bags/clutches-mini-and-micro-bags/'}, 
                {name: 'Sicily', isdirectlink: true, haveCollection: false, url: '/belts/men/bags/sicily/'}, 
                {name: '3DJ Logo Bag', isdirectlink: true, haveCollection: false, url: '/belts/men/bags/triple-dj-logo-bag/'}, 
                {name: 'Devotion', isdirectlink: true, haveCollection: false, url: '/belts/men/bas/devotion/'}, 
                {name: 'DJ Girls', isdirectlink: true, haveCollection: false, url: '/belts/men/bags/dj-girls/'}, 
                {name: '3.5', isdirectlink: true, haveCollection: false, url: '/belts/men/bags/three-and-half/'}, 
                {name: '3DJ Box', isdirectlink: true, haveCollection: false, url: '/belts/men/bags/triple-dj-box/'}, 
                {name: '#3DJLeo Collection', isdirectlink: true, haveCollection: false, url: '/belts/men/bags/hash-triple-dj-leo-collection/'}, 
              ],
              img: [
                {name:'', file:'n2.jpg', haveCollection: false, link:'/belts/men/bags/triple-dj-logo-bag/?FL_BAN=IHFJF78837JK'},
              ]
            },
            {
              name: 'SHOES', 
              isdirectlink: false, 
              isSubCategoryCollapsed: false, 
              isClickedSubCategory: false, 
              isHoveredSubCategory: false, 
              isHoveredExpand: false, 
              subcategory: [
                {name: 'View all', isdirectlink: true, haveCollection: false, url:'/belts/men/shoes/view-all/'},
                {name: 'Pumps and Slingback', isdirectlink: true, haveCollection: false, url:'/belts/men/shoes/pumps-and-slingback/'},
                {name: 'Boots and Booties', isdirectlink: true, haveCollection: false, url:'/belts/men/shoes/boots-and-booties/'},
                {name: 'Sneakers', isdirectlink: true, haveCollection: false, url:'/belts/men/shoes/sneakers/'},
                {name: 'belts and Wedges', isdirectlink: true, haveCollection: false, url:'/belts/men/shoes/belts-and-wedges/'},
                {name: 'Slides and Mules', isdirectlink: true, haveCollection: false, url:'/belts/men/shoes/slides-and-mules/'},
                {name: 'Flat', isdirectlink: true, haveCollection: false, url:'/belts/men/shoes/flat/'},
                {name: 'Rainbow Lace Collection', isdirectlink: true, haveCollection: false, url:'/belts/men/shoes/rainboy-lace-collection/'},
                {name: '3.5 Collection', isdirectlink: true, haveCollection: false, url:'/belts/men/shoes/three-and-half-collection/'},
                {name: '#3DJLIMITED Sneakers', isdirectlink: true, haveCollection: false, url:'/belts/men/shoes/hash-triple-dj-limited-sneakers/'},
              ],
              img: [
                {name:'', file:'n9.jpg', haveCollection: false, link:'/belts/men/shoes/hash-triple-dj-limited-sneakers/?FL_BAN=AV78ERTFJGKK8'},
              ]
            },
            {
              name: 'ACCESSORIES', 
              isdirectlink: false, 
              isSubCategoryCollapsed: false, 
              isClickedSubCategory: false, 
              isHoveredSubCategory: false, 
              isHoveredExpand: false,   
              subcategory: [
                {name: 'View all', isdirectlink: true, haveCollection: false, url: '/belts/men/accessories/view-all/'},
                {name: 'Bijoux', isdirectlink: true, haveCollection: false, url: '/belts/men/accessories/bijoux/'},
                {name: 'Scarves and Silks', isdirectlink: true, haveCollection: false, url: '/belts/men/accessories/scarves-and-silks/'},
                {name: 'Wallets and Small Leather Goods', isdirectlink: true, haveCollection: false, url: '/belts/men/accessories/wallets-and-small-leather-goods/'},
                {name: 'Belts', isdirectlink: true, haveCollection: false, url: '/belts/men/accessories/belts/'},
                {name: 'Hats and Gloves', isdirectlink: true, haveCollection: false, url: '/belts/men/accessories/hats-and-gloves/'},
                {name: 'Socks', isdirectlink: true, haveCollection: false, url: '/belts/men/accessories/socks/'},
                {name: 'Technology', isdirectlink: true, haveCollection: false, url: '/belts/men/accessories/technology/'}
              ],
              img: [
                {name:'', file:'n7.jpg', haveCollection: false, link:'/belts/men/accessories/technology/?FL_BAN=BNM7UFHDJVVBDH'},
              ]
            },
            {
              name: 'SUNGLASSES', 
              isdirectlink: false, 
              isSubCategoryCollapsed: false, 
              isClickedSubCategory: false, 
              isHoveredSubCategory: false, 
              isHoveredExpand: false,   
              subcategory: [
                {name: 'View all', isdirectlink: true, haveCollection: false, url: '/belts/men/sunglasses/view-all/'},
                {name: 'New Arrivals', isdirectlink: true, haveCollection: false, url: '/belts/men/sunglasses/new-arrivals/'},
                {name: 'Icons', isdirectlink: true, haveCollection: false, url: '/belts/men/sunglasses/icons/'},
                {name: 'ADV Campaign', extraname: 'UPDATED', isdirectlink: true, haveCollection: false, url: '/belts/men/sunglasses/adv-campaign/'}
              ],
              img: [
                {name:'', file:'n6.jpg', haveCollection: false, link:'/belts/men/sunglasses/icons/?FL_BAN=BNWQGHD89JGKHK7'},
              ]
            },
            {
              name: 'WATCHES & JEWELRY', 
              isdirectlink: false, 
              isSubCategoryCollapsed: false, 
              isClickedSubCategory: false, 
              isHoveredSubCategory: false, 
              isHoveredExpand: false,   
              subcategory: [
                {name: 'View all', isdirectlink: true, haveCollection: false, url: '/belts/men/watches-and-jewelry/view-all/'},
                {name: 'Discover the collection', isdirectlink: true, haveCollection: false, url: '/belts/men/watches-and-jewelry/discover-the-collection/'},
                {name: 'Earrings', isdirectlink: true, haveCollection: false, url: '/belts/men/watches-and-jewelry/earrings/'},
                {name: 'Rings', isdirectlink: true, haveCollection: false, url: '/belts/men/watches-and-jewelry/rings/'},
                {name: 'Necklaces', isdirectlink: true, haveCollection: false, url: '/belts/men/watches-and-jewelry/necklaces/'},
                {name: 'Charms', isdirectlink: true, haveCollection: false, url: '/belts/men/watches-and-jewelry/charms/'},
                {name: 'Bracelets', isdirectlink: true, haveCollection: false, url: '/belts/men/watches-and-jewelry/bracelets/'},
                {name: 'Watches & Straps', isdirectlink: true, haveCollection: false, url: '/belts/men/watches-and-jewelry/watches-and-straps/'},
                {name: 'Devotion Collection', isdirectlink: true, haveCollection: false, url: '/belts/men/watches-and-jewelry/devotion-collection/'},
                {name: 'DNA Collection', isdirectlink: true, haveCollection: false, url: '/belts/men/watches-and-jewelry/dna-collection/'},
                {name: 'Rainbow Collection', isdirectlink: true, haveCollection: false, url: '/belts/men/watches-and-jewelry/rainbow-collection/'}
              ],
              img: [
                {name:'', file:'n4.jpg', haveCollection: false, link:'/belts/men/watches-and-jewelry/rainbow-collection/?FL_BAN=ERJF78FJJGK45DS'},
              ]
            },
            {
              name: 'LIMITED EDITION', 
              isdirectlink: false, 
              isSubCategoryCollapsed: false,  
              isClickedSubCategory: false, 
              isHoveredSubCategory: false, 
              isHoveredExpand: false,   
              subcategory: [
                {name: 'View All', isdirectlink: true, haveCollection: false, url: '/belts/men/limited-edition/view-all/'},
                {name: 'Portofino Custom', isdirectlink: true, haveCollection: false, url: '/belts/men/limited-edition/portofino-custom/'},
                {name: 'Daymaster Custom', isdirectlink: true, haveCollection: false, url: '/belts/men/limited-edition/daymaster-custom/'},
                {name: 'Personalize', isdirectlink: true, haveCollection: false, url: '/belts/men/limited-edition/personalize/'}
              ],
              img: [
                {name:'', file:'n3.jpg', haveCollection: false, link:'/belts/men/limited-edition/personalize/?FL_BAN=VBCXSGD77FDG11'},
              ]
            }
          ]
        },
        {
          name: '3DJVIB3', isdirectlink: true, haveCollection: false, url: '/belts/triple-dj-vib-3/'
        },
        {
          name: 'CHILDREN', 
          isdirectlink: false, 
          isSubCategoryCollapsed: false, 
          isClickedSubCategory: false, 
          isHoveredSubCategory: false, 
          isHoveredExpand: false,   
          subcategory: [
            {
              name: 'NEW IN', 
              isdirectlink: false, 
              isSubCategoryCollapsed: false, 
              isClickedSubCategory: false, 
              isHoveredSubCategory: false, 
              isHoveredExpand: false,   
              subcategory: [
                {name: 'New Arrivals Girl', isdirectlink: true, haveCollection: false, url: '/belts/children/new-in/new-arrivals-girl/'},
                {name: 'New Arrivals Boy', isdirectlink: true, haveCollection: false, url: '/belts/children/new-in/new-arrival-boy/'},
                {name: 'Most Loved Girl', isdirectlink: true, haveCollection: false, url: '/belts/children/new-in/most-loved-girl/'},
                {name: 'Most Loved Boy', isdirectlink: true, haveCollection: false, url: '/belts/children/new-in/most-loved-boy/'},
              ],
              img: [
                {name:'', file:'n4.jpg', haveCollection: false, link:'/belts/children/new-in/most-loved-boy/?FL_BAN=YYTRE8977DHF'},
                {name:'', file:'n2.jpg', haveCollection: false, link:'/belts/children/new-in/most-loved-girl/?FL_BAN=VCXXHF89DHFF'},
              ]
            },
            {
              name: 'GIRL (2-13 YEARS)', 
              isdirectlink: false, 
              isSubCategoryCollapsed: false, 
              isClickedSubCategory: false, 
              isHoveredSubCategory: false, 
              isHoveredExpand: false,   
              subcategory: [
                {name: 'View all', isdirectlink: true, haveCollection: false, url: '/belts/children/girl-2-13-years/view-all/'},
                {name: 'Dresses', isdirectlink: true, haveCollection: false, url: '/belts/children/girl-2-13-years/dresses/'},
                {name: 'Coats and Jackets', isdirectlink: true, haveCollection: false, url: '/belts/children/girl-2-13-years/coats-and-jackets/'},
                {name: 'T-Shirts and Sweatshirts', isdirectlink: true, haveCollection: false, url: '/belts/children/girl-2-13-years/t-shirts-and-sweatshirts/'},
                {name: 'Shirts and Tops', isdirectlink: true, haveCollection: false, url: '/belts/children/girl-2-13-years/shirts-and-tops/'},
                {name: 'Sweaters', isdirectlink: true, haveCollection: false, url: '/belts/children/girl-2-13-years/sweaters/'},
                {name: 'Trousers and Skirts', isdirectlink: true, haveCollection: false, url: '/belts/children/girl-2-13-years/trousers-and-skirts/'},
                {name: 'Beachwear', isdirectlink: true, haveCollection: false, url: '/belts/children/girl-2-13-years/beachwear/'},
                {name: 'Accessories', isdirectlink: true, haveCollection: false, url: '/belts/children/girl-2-13-years/accessories/'},
                {name: 'Shoes (24-38)', isdirectlink: true, haveCollection: false, url: '/belts/children/girl-2-13-years/shoes-24-to-38/'},
                {name: 'Jewelry', isdirectlink: true, haveCollection: false, url: '/belts/children/girl-2-13-years/jewelry/'}
              ],
              img: [
                {name:'', file:'c1.jpg', haveCollection: false, link:'/belts/children/girl-2-13-years/jewelry/?FL_BAN=FJJJO90OJD'},
                {name:'', file:'c2.jpg', haveCollection: false, link:'/belts/children/girl-2-13-years/accessories/?FL_BAN=INFM90GLLLS'},
              ]
            },
            {
              name: 'BOY (2-13 YEARS)', 
              isdirectlink: false, 
              isSubCategoryCollapsed: false, 
              isClickedSubCategory: false, 
              isHoveredSubCategory: false, 
              isHoveredExpand: false,   
              subcategory: [
                {name: 'View all', isdirectlink: true, haveCollection: false, url: '/belts/children/boy-2-13-years/view-all/'},
                {name: 'Dresses', isdirectlink: true, haveCollection: false, url: '/belts/children/boy-2-13-years/dresses/'},
                {name: 'Coats and Jackets', isdirectlink: true, haveCollection: false, url: '/belts/children/boy-2-13-years/coats-and-jackets/'},
                {name: 'T-Shirts and Sweatshirts', isdirectlink: true, haveCollection: false, url: '/belts/children/boy-2-13-years/t-shirts-and-sweatshirts/'},
                {name: 'Shirts and Tops', isdirectlink: true, haveCollection: false, url: '/belts/children/boy-2-13-years/shirts-and-tops/'},
                {name: 'Sweaters', isdirectlink: true, haveCollection: false, url: '/belts/children/boy-2-13-years/sweaters/'},
                {name: 'Trousers and Skirts', isdirectlink: true, haveCollection: false, url: '/belts/children/boy-2-13-years/trousers-and-skirts/'},
                {name: 'Beachwear', isdirectlink: true, haveCollection: false, url: '/belts/children/boy-2-13-years/beachwear/'},
                {name: 'Accessories', isdirectlink: true, haveCollection: false, url: '/belts/children/boy-2-13-years/accessories/'},
                {name: 'Shoes (24-38)', isdirectlink: true, haveCollection: false, url: '/belts/children/boy-2-13-years/shoes-24-to-38/'},
                {name: 'Jewelry', isdirectlink: true, haveCollection: false, url: '/belts/children/boy-2-13-years/jewelry/'}
              ],
              img: [
                {name:'', file:'c1.jpg', haveCollection: false, link:'/belts/children/boy-2-13-years/jewelry/?FL_BAN=FJJJO90OJD'},
                {name:'', file:'c2.jpg', haveCollection: false, link:'/belts/children/boy-2-13-years/accessories/?FL_BAN=INFM90GLLLS'},
              ]
            },
            {
              name: 'MINI ME', 
              isdirectlink: false, 
              isSubCategoryCollapsed: false, 
              isClickedSubCategory: false, 
              isHoveredSubCategory: false, 
              isHoveredExpand: false,   
              subcategory: [
                {name: 'View all', isdirectlink: true, haveCollection: false, url: '/belts/children/mini-me/view-all/'},
                {name: 'Dresses', isdirectlink: true, haveCollection: false, url: '/belts/children/mini-me/dresses/'},
                {name: 'Coats and Jackets', isdirectlink: true, haveCollection: false, url: '/belts/children/mini-me/coats-and-jackets/'},
                {name: 'T-Shirts and Sweatshirts', isdirectlink: true, haveCollection: false, url: '/belts/children/mini-me/t-shirts-and-sweatshirts/'},
                {name: 'Shirts and Tops', isdirectlink: true, haveCollection: false, url: '/belts/children/mini-me/shirts-and-tops/'},
                {name: 'Sweaters', isdirectlink: true, haveCollection: false, url: '/belts/children/mini-me/sweaters/'},
                {name: 'Trousers and Skirts', isdirectlink: true, haveCollection: false, url: '/belts/children/mini-me/trousers-and-skirts/'},
                {name: 'Beachwear', isdirectlink: true, haveCollection: false, url: '/belts/children/mini-me/beachwear/'},
                {name: 'Accessories', isdirectlink: true, haveCollection: false, url: '/belts/children/mini-me/accessories/'},
                {name: 'Shoes (24-38)', isdirectlink: true, haveCollection: false, url: '/belts/children/mini-me/shoes-24-to-38/'},
                {name: 'Jewelry', isdirectlink: true, haveCollection: false, url: '/belts/children/mini-me/jewelry/'}
              ],
              img: [
                {name:'', file:'n1.jpg', haveCollection: false, link:'/belts/children/mini-me/jewelry/?FL_BAN=IUDH009FJ45D'},
                {name:'', file:'n2.jpg', haveCollection: false, link:'/belts/children/mini-me/sweaters/?FL_BAN=VVBMMMN7866'},
              ]
            },
            {
              name: 'NEWBORN (0-12 MONTHS)', 
              isdirectlink: false, 
              isSubCategoryCollapsed: false, 
              isClickedSubCategory: false, 
              isHoveredSubCategory: false, 
              isHoveredExpand: false,   
              subcategory: [
                {name: 'View all', isdirectlink: true, haveCollection: false, url: '/belts/children/new-born-0-to-12-months/view-all/'},
                {name: 'Dresses', isdirectlink: true, haveCollection: false, url: '/belts/children/new-born-0-to-12-months/dresses/'},
                {name: 'Coats and Jackets', isdirectlink: true, haveCollection: false, url: '/belts/children/new-born-0-to-12-months/coats-and-jackets/'},
                {name: 'T-Shirts and Sweatshirts', isdirectlink: true, haveCollection: false, url: '/belts/children/new-born-0-to-12-months/t-shirts-and-sweatshirts/'},
                {name: 'Shirts and Tops', isdirectlink: true, haveCollection: false, url: '/belts/children/new-born-0-to-12-months/shirts-and-tops/'},
                {name: 'Sweaters', isdirectlink: true, haveCollection: false, url: '/belts/children/new-born-0-to-12-months/sweaters/'},
                {name: 'Trousers and Skirts', isdirectlink: true, haveCollection: false, url: '/belts/children/new-born-0-to-12-months/trousers-and-skirts/'},
                {name: 'Beachwear', isdirectlink: true, haveCollection: false, url: '/belts/children/new-born-0-to-12-months/beachwear/'},
                {name: 'Accessories', isdirectlink: true, haveCollection: false, url: '/belts/children/new-born-0-to-12-months/accessories/'},
                {name: 'Shoes (24-38)', isdirectlink: true, haveCollection: false, url: '/belts/children/new-born-0-to-12-months/shoes-24-to-38/'},
                {name: 'Jewelry', isdirectlink: true, haveCollection: false, url: '/belts/children/new-born-0-to-12-months/jewelry/'}
              ],
              img: [
                {name:'', file:'n1.jpg', haveCollection: false, link:'/belts/children/new-born-0-to-12-months/dresses/?FL_BAN=TYYR89JFJ21I'},
                {name:'', file:'n3.jpg', haveCollection: false, link:'/belts/children/new-born-0-to-12-months/trousers-and-skirts/?FL_BAN=CCV84DEEASDX6'},
              ]
            },
            {
              name: 'NEWBORN GIRL (0-30 MONTHS)', 
              isdirectlink: false, 
              isSubCategoryCollapsed: false, 
              isClickedSubCategory: false, 
              isHoveredSubCategory: false, 
              isHoveredExpand: false,   
              subcategory: [
                {name: 'View all', isdirectlink: true, haveCollection: false, url: '/belts/children/new-born-girl-0-to-30-months/view-all/'},
                {name: 'Dresses', isdirectlink: true, haveCollection: false, url: '/belts/children/new-born-girl-0-to-30-months/dresses/'},
                {name: 'Coats and Jackets', isdirectlink: true, haveCollection: false, url: '/belts/children/new-born-girl-0-to-30-months/coats-and-jackets/'},
                {name: 'T-Shirts and Sweatshirts', isdirectlink: true, haveCollection: false, url: '/belts/children/new-born-girl-0-to-30-months/t-shirts-and-sweatshirts/'},
                {name: 'Shirts and Tops', isdirectlink: true, haveCollection: false, url: '/belts/children/new-born-girl-0-to-30-months/shirts-and-tops/'},
                {name: 'Sweaters', isdirectlink: true, haveCollection: false, url: '/belts/children/new-born-girl-0-to-30-months/sweaters/'},
                {name: 'Trousers and Skirts', isdirectlink: true, haveCollection: false, url: '/belts/children/new-born-girl-0-to-30-months/trousers-and-skirts/'},
                {name: 'Beachwear', isdirectlink: true, haveCollection: false, url: '/belts/children/new-born-girl-0-to-30-months/beachwear/'},
                {name: 'Accessories', isdirectlink: true, haveCollection: false, url: '/belts/children/new-born-girl-0-to-30-months/accessories/'},
                {name: 'Shoes (24-38)', isdirectlink: true, haveCollection: false, url: '/belts/children/new-born-girl-0-to-30-months/shoes-24-to-38/'},
                {name: 'Jewelry', isdirectlink: true, haveCollection: false, url: '/belts/children/new-born-girl-0-to-30-months/jewelry/'}
              ],
              img: [
                {name:'', file:'c4.jpg', haveCollection: false, link:'/belts/children/new-born-girl-0-to-30-months/jewelry/?FL_BAN=CCZZXASS67'},
              ]
            },
            {
              name: 'NEWBORN BOY (0-30 MONTHS)', 
              isdirectlink: false, 
              isSubCategoryCollapsed: false, 
              isClickedSubCategory: false, 
              isHoveredSubCategory: false, 
              isHoveredExpand: false,   
              subcategory: [
                {name: 'View all', isdirectlink: true, haveCollection: false, url: '/belts/children/new-born-boy-0-to-30-months/view-all/'},
                {name: 'Dresses', isdirectlink: true, haveCollection: false, url: '/belts/children/new-born-boy-0-to-30-months/dresses/'},
                {name: 'Coats and Jackets', isdirectlink: true, haveCollection: false, url: '/belts/children/new-born-boy-0-to-30-months/coats-and-jackets/'},
                {name: 'T-Shirts and Sweatshirts', isdirectlink: true, haveCollection: false, url: '/belts/children/new-born-boy-0-to-30-months/t-shirts-and-sweatshirts/'},
                {name: 'Shirts and Tops', isdirectlink: true, haveCollection: false, url: '/belts/children/new-born-boy-0-to-30-months/shirts-and-tops/'},
                {name: 'Sweaters', isdirectlink: true, haveCollection: false, url: '/belts/children/new-born-boy-0-to-30-months/sweaters/'},
                {name: 'Trousers and Skirts', isdirectlink: true, haveCollection: false, url: '/belts/children/new-born-boy-0-to-30-months/trousers-and-skirts/'},
                {name: 'Beachwear', isdirectlink: true, haveCollection: false, url: '/belts/children/new-born-boy-0-to-30-months/beachwear/'},
                {name: 'Accessories', isdirectlink: true, haveCollection: false, url: '/belts/children/new-born-boy-0-to-30-months/accessories/'},
                {name: 'Shoes (24-38)', isdirectlink: true, haveCollection: false, url: '/belts/children/new-born-boy-0-to-30-months/shoes-24-to-38/'},
                {name: 'Jewelry', isdirectlink: true, haveCollection: false, url: '/belts/children/new-born-boy-0-to-30-months/jewelry/'}
              ],
              img: [
                {name:'', file:'c4.jpg', haveCollection: false, link:'/belts/children/new-born-boy-0-to-30-months/sweaters/?FL_BAN=HHJJFHHCCXX11253'},
              ]
            },
          ]
        },
      ],
      img: 'n1.jpg'
    },
    {isdirectlink: true, haveCollection: false, url: '/bags/', name: 'Bags', img: 'n4.jpg'},
    {isdirectlink: true, haveCollection: false, url: '/jackets/', name: 'Jacket', img: 'n5.jpg'},
    {isdirectlink: true, haveCollection: false, url: '/hats/', name: 'Hats', img: 'n6.jpg'},
    {isdirectlink: true, haveCollection: false, url: '/trousers/', name: 'Trousers', img: 'n7.jpg'},
    {
      url: '/skirts/', 
      name: 'Skirts', 
      isdirectlink: false, 
      isSubCategoryCollapsed: false, 
      isClickedSubCategory: false, 
      isHoveredSubCategory: false, 
      isHoveredExpand: false, 
      subcategory: [
        {
          name: 'Gifts', 
          isdirectlink: false, 
          isSubCategoryCollapsed: false, 
          isClickedSubCategory: false, 
          isHoveredSubCategory: false, 
          isHoveredExpand: false, 
          subcategory: [
            {
              name: 'WOMEN', 
              isdirectlink: false, 
              isSubCategoryCollapsed: false,  
              isClickedSubCategory: false, 
              isHoveredSubCategory: false, 
              isHoveredExpand: false, 
              subcategory: [
                {name: 'View all', isdirectlink: true, haveCollection: false, url: '/skirts/gifts/women/view-all/'},
                {name: 'Small gifts ideas', isdirectlink: true, haveCollection: false, url: '/skirts/gifts/women/small-gifts-ideas/'},
                {name: 'Exclusive gifts', isdirectlink: true, haveCollection: false, url: '/skirts/gifts/women/exclusive-gifts/'},
                {name: 'Personalize', isdirectlink: true, haveCollection: false, url: '/skirts/gifts/women/personalize/'},
                {name: 'Lifestyle gifts', isdirectlink: true, haveCollection: false, url: '/skirts/gifts/women/lifestyle-gifts/'},
                {name: 'Gift Card', isdirectlink: true, haveCollection: false, url: '/skirts/gifts/women/gift-card/'}
              ],
              img: [
                {name:'', file:'n4.jpg', haveCollection: false, link:'/skirts/gifts/women/personalize/?FL_BAN=F987AKJDHF89'},
                {name:'', file:'n2.jpg', haveCollection: false, link:'/skirts/gifts/women/lifestyle-gifts/?FL_BAN=uytrew8UYT'},
              ]
            },
            {
              name: 'MEN', 
              isdirectlink: false, 
              isSubCategoryCollapsed: false, 
              isClickedSubCategory: false, 
              isHoveredSubCategory: false, 
              isHoveredExpand: false, 
              subcategory: [
                {name: 'View all', isdirectlink: true, haveCollection: false, url: '/skirts/gifts/men/view-all/'},
                {name: 'Small gifts ideas', isdirectlink: true, haveCollection: false, url: '/skirts/gifts/men/small-gifts-idea/'},
                {name: 'Exclusive gifts', isdirectlink: true, haveCollection: false, url: '/skirts/gifts/men/exclusive-gifts/'},
                {name: 'Personalize', isdirectlink: true, haveCollection: false, url: '/skirts/gifts/men/personalize/'},
                {name: 'Lifestyle gifts', isdirectlink: true, haveCollection: false, url: '/skirts/gifts/men/lifestyle-gifts/'},
                {name: 'Gift Card', isdirectlink: true, haveCollection: false, url: '/skirts/gifts/men/gift-card/'}
              ],
              img: [
                {name:'', file:'n4.jpg', haveCollection: false, link:'/skirts/gifts/men/personalize/?FL_BAN=UI89FUIYRSE'}
              ]
            },
            {
              name: 'CHILDREN', 
              isdirectlink: false, 
              isSubCategoryCollapsed: false, 
              isClickedSubCategory: false, 
              isHoveredSubCategory: false, 
              isHoveredExpand: false,  
              subcategory: [
                {name: 'View all', isdirectlink: true, haveCollection: false, url: '/skirts/gifts/children/view-all/'},
                {name: 'Girl', isdirectlink: true, haveCollection: false, url: '/skirts/gifts/children/girl/'},
                {name: 'Boy', isdirectlink: true, haveCollection: false, url: '/skirts/gifts/children/boy/'},
                {name: 'Gift Set', isdirectlink: true, haveCollection: false, url: '/skirts/gifts/children/gift-set/'}
              ],
              img: [
                {name:'', file:'n2.jpg', haveCollection: false, link:'/skirts/gifts/children/boy/?FL_BAN=KLKDJJF090F'}
              ]
            },
            {
              name: 'PARTY LOOKS', 
              isdirectlink: false, 
              isSubCategoryCollapsed: false,  
              isClickedSubCategory: false, 
              isHoveredSubCategory: false, 
              isHoveredExpand: false, 
              subcategory: [
                {name: 'Women', isdirectlink: true, haveCollection: false, url: '/skirts/gifts/party-looks/women/'},
                {name: 'Men', isdirectlink: true, haveCollection: false, url: '/skirts/gifts/party-looks/men/'},
                {name: 'Children', isdirectlink: true, haveCollection: false, url: '/skirts/gifts/party-looks/children/'}
              ],
              img: [
                {name:'', file:'n4.jpg', haveCollection: false, link:'/skirts/gifts/party-looks/children/?FL_BAN=YUDYEJJFY56'},
              ]
            },
            {
              name: 'VIEW ALL',
              img: [
                {name:'', file:'n6.jpg', haveCollection: false, link:'/skirts/gifts/view-all/?FL_BAN=NMDHFJF89DJF'},
                {name:'', file:'n8.jpg', haveCollection: false, link:'/skirts/gifts/view-all/?FL_BAN=NCZDHFJF89DJF'},
              ]
            },
            {
              name: 'GIFTING CAMPAIGN', 
              img: [
                {name:'', file:'n1.jpg', haveCollection: false, link:'/skirts/gifts/gifting-campaign/?FL_BAN=SDEHFJ2536K'},
                {name:'', file:'n9.jpg', haveCollection: false, link:'/skirts/gifts/gifting-campaign/?FL_BAN=XCDEHFJ2536K'},
                {name:'', file:'n2.jpg', haveCollection: false, link:'/skirts/gifts/gifting-campaign/?FL_BAN=ZQDEHFJ2536K'},
              ]
            }
          ]
        },
        {
          name: 'WOMEN', 
          isdirectlink: false, 
          isSubCategoryCollapsed: false, 
          isClickedSubCategory: false, 
          isHoveredSubCategory: false, 
          isHoveredExpand: false,   
          subcategory: [
            {
              name: 'NEW IN', 
              haveCollection: false, 
              url: '/skirts/women/new-in/',
              img: [
                {name:'', file:'n4.jpg', haveCollection: false, link:'/skirts/women/new-in/?FL_BAN=XZCVSDGDGF78HHJ'},
                {name:'', file:'n3.jpg', haveCollection: false, link:'/skirts/women/new-in/?FL_BAN=XZCVNMDDGDGF78HHJ'},
                {name:'', file:'n5.jpg', haveCollection: false, link:'/skirts/women/new-in/?FL_BAN=XZCVSVVCADGF78HHJ'},
              ]
            },
            {
              name: '3DJ SELECTION', 
              isdirectlink: false, 
              isSubCategoryCollapsed: false, 
              isClickedSubCategory: false, 
              isHoveredSubCategory: false, 
              isHoveredExpand: false,   
              subcategory: [
                {name: 'View all', isdirectlink: true, haveCollection: false, url: '/skirts/women/triple-dj-selection/view-all/'},
                {name: 'Dresses', isdirectlink: true, haveCollection: false, url: '/skirts/women/triple-dj-selection/dresses/'},
                {name: 'Blazers', isdirectlink: true, haveCollection: false, url: '/skirts/women/triple-dj-selection/blazers/'},
                {name: 'Coats and Jackets', extraname: 'NEW', isdirectlink: true, haveCollection: false, url: '/skirts/women/triple-dj-selection/coats-and-jackets/'},
                {name: 'Denim', isdirectlink: true, haveCollection: false, url: '/skirts/women/triple-dj-selection/denim/'},
                {name: 'Shirts and Tops', isdirectlink: true, haveCollection: false, url: '/skirts/women/triple-dj-selection/shirts-and-tops/'},
                {name: 'Sweaters and Cardigans', isdirectlink: true, haveCollection: false, url: '/skirts/women/triple-dj-selection/sweaters-and-cardigans/'},
                {name: 'T-Shirts and Sweatshirts', isdirectlink: true, haveCollection: false, url: '/skirts/women/triple-dj-selection/t-shirts-and-sweat-shirts/'},
                {name: 'Skirts', isdirectlink: true, haveCollection: false, url: '/skirts/women/triple-dj-selection/skirts/'},
                {name: 'Trousers and Shorts', isdirectlink: true, haveCollection: false, url: '/skirts/women/triple-dj-selection/trousers-and-shorts/'},
                {name: 'Underwear', isdirectlink: true, haveCollection: false, url: '/skirts/women/triple-dj-selection/underwear/'},
                {name: 'Beachwear', isdirectlink: true, haveCollection: false, url: '/skirts/women/triple-dj-selection/beachwear/'},
                {name: 'Wear It like #3DJCelebs', isdirectlink: true, haveCollection: false, url: '/skirts/women/triple-dj-selection/wear-it-like-3dj-celebs/'}
              ], 
              extraname: 'NEW',
              img: [
                {name:'', file:'n4.jpg', haveCollection: false, link:'/skirts/women/triple-dj-selection/beachwear/?FL_BAN=ASFRWE895KG'},
                {name:'', file:'n1.jpg', haveCollection: false, link:'/skirts/women/triple-dj-selection/underwear/?FL_BAN=GHJDK89JJFG5B'},
              ]
            },
            {
              name: '3DJ ESSENTIAL', 
              extraname: 'NEW',
              isdirectlink: false, 
              isSubCategoryCollapsed: false, 
              isClickedSubCategory: false, 
              isHoveredSubCategory: false, 
              isHoveredExpand: false,   
              subcategory: [
                {name: 'Discover the Collection', isdirectlink: true, haveCollection: false, url: '/skirts/women/triple-dj-essential/new/discover-the-collection/'},
                {name: 'View all', isdirectlink: true, haveCollection: false, url: '/skirts/women/triple-dj-essential/new/view-all/'}
              ],
              img: [
                {name:'', file:'n2.jpg', haveCollection: false, link:'/skirts/women/triple-dj-essential/new/discover-the-collection/?FL_BAN=GTTYUHFJ54HFJ'},
              ]
            },
            {
              name: 'CLOTHING', 
              isdirectlink: false, 
              isSubCategoryCollapsed: false, 
              isClickedSubCategory: false, 
              isHoveredSubCategory: false, 
              isHoveredExpand: false,   
              subcategory: [
                {name: 'View all', isdirectlink: true, haveCollection: false, url: '/skirts/women/clothing/view-all/'},
                {name: 'Dresses', isdirectlink: true, haveCollection: false, url: '/skirts/women/clothing/dresses/'},
                {name: 'Blazers', isdirectlink: true, haveCollection: false, url: '/skirts/women/clothing/blazers/'},
                {name: 'Coats and Jackets', extraname: 'NEW', isdirectlink: true, haveCollection: false, url: '/skirts/women/clothing/coats-and-jackets/'},
                {name: 'Denim', isdirectlink: true, haveCollection: false, url: '/skirts/women/clothing/denim/'},
                {name: 'Shirts and Tops', isdirectlink: true, haveCollection: false, url: '/skirts/women/clothing/shirts-and-tops/'},
                {name: 'Sweaters and Cardigans', isdirectlink: true, haveCollection: false, url: '/skirts/women/clothing/sweaters-and-cardigans/'},
                {name: 'T-Shirts and Sweatshirts', isdirectlink: true, haveCollection: false, url: '/skirts/women/clothing/t-shirts-and-sweat-shirts/'},
                {name: 'Skirts', isdirectlink: true, haveCollection: false, url: '/skirts/women/clothing/skirts/'},
                {name: 'Trousers and Shorts', isdirectlink: true, haveCollection: false, url: '/skirts/women/clothing/trousers-and-shorts/'},
                {name: 'Underwear', isdirectlink: true, haveCollection: false, url: '/skirts/women/clothing/underwear/'},
                {name: 'Beachwear', isdirectlink: true, haveCollection: false, url: '/skirts/women/clothing/beachwear/'},
                {name: 'Wear It like #3DJCelebs', isdirectlink: true, haveCollection: false, url: '/skirts/women/clothing/wear-it-like-3dj-celebs/'}
              ],
              img: [
                {name:'', file:'n4.jpg', haveCollection: false, link:'/skirts/women/clothing/trousers-and-shorts/?FL_BAN=AQWEDF56HJKLMN7H3'},
              ]
            },
            {
              name: 'BAGS', 
              isdirectlink: false, 
              isSubCategoryCollapsed: false, 
              isClickedSubCategory: false, 
              isHoveredSubCategory: false, 
              isHoveredExpand: false,   
              subcategory: [
                {name: 'View all', isdirectlink: true, haveCollection: false, url: '/skirts/women/bags/view-all/'}, 
                {name: 'Exclusive Shopper in canvas', extraname: 'ECOMMERCE EXCLUSIVELY', isdirectlink: true, haveCollection: false, url: '/skirts/women/bags/exclusive-shopper-in-canvas/'}, 
                {name: 'Handbags', isdirectlink: true, haveCollection: false, url: '/skirts/women/bags/hand-bags/'}, 
                {name: 'Totes', isdirectlink: true, haveCollection: false, url: '/skirts/women/bags/totes/'}, 
                {name: 'Shoulder and Crossbody Bags', isdirectlink: true, haveCollection: false, url: '/skirts/women/bags/shoulder-and-crossbody-bags/'}, 
                {name: 'Clutches Mini and Micro Bags', isdirectlink: true, haveCollection: false, url: '/skirts/women/bags/clutches-mini-and-micro-bags/'}, 
                {name: 'Sicily', isdirectlink: true, haveCollection: false, url: '/skirts/women/bags/sicily/'}, 
                {name: '3DJ Logo Bag', isdirectlink: true, haveCollection: false, url: '/skirts/women/bags/triple-dj-logo-bag/'}, 
                {name: 'Devotion', isdirectlink: true, haveCollection: false, url: '/skirts/women/bas/devotion/'}, 
                {name: 'DJ Girls', isdirectlink: true, haveCollection: false, url: '/skirts/women/bags/dj-girls/'}, 
                {name: '3.5', isdirectlink: true, haveCollection: false, url: '/skirts/women/bags/three-and-half/'}, 
                {name: '3DJ Box', isdirectlink: true, haveCollection: false, url: '/skirts/women/bags/triple-dj-box/'}, 
                {name: '#3DJLeo Collection', isdirectlink: true, haveCollection: false, url: '/skirts/women/bags/hash-triple-dj-leo-collection/'}, 
              ],
              img: [
                {name:'', file:'n2.jpg', haveCollection: false, link:'/skirts/women/bags/triple-dj-logo-bag/?FL_BAN=IHFJF78837JK'},
              ]
            },
            {
              name: 'SHOES', 
              isdirectlink: false, 
              isSubCategoryCollapsed: false,  
              isClickedSubCategory: false, 
              isHoveredSubCategory: false, 
              isHoveredExpand: false,   
              subcategory: [
                {name: 'View all', isdirectlink: true, haveCollection: false, url:'/skirts/women/shoes/view-all/'},
                {name: 'Pumps and Slingback', isdirectlink: true, haveCollection: false, url:'/skirts/women/shoes/pumps-and-slingback/'},
                {name: 'Boots and Booties', isdirectlink: true, haveCollection: false, url:'/skirts/women/shoes/boots-and-booties/'},
                {name: 'Sneakers', isdirectlink: true, haveCollection: false, url:'/skirts/women/shoes/sneakers/'},
                {name: 'skirts and Wedges', isdirectlink: true, haveCollection: false, url:'/skirts/women/shoes/skirts-and-wedges/'},
                {name: 'Slides and Mules', isdirectlink: true, haveCollection: false, url:'/skirts/women/shoes/slides-and-mules/'},
                {name: 'Flat', isdirectlink: true, haveCollection: false, url:'/skirts/women/shoes/flat/'},
                {name: 'Rainbow Lace Collection', isdirectlink: true, haveCollection: false, url:'/skirts/women/shoes/rainboy-lace-collection/'},
                {name: '3.5 Collection', isdirectlink: true, haveCollection: false, url:'/skirts/women/shoes/three-and-half-collection/'},
                {name: '#3DJLIMITED Sneakers', isdirectlink: true, haveCollection: false, url:'/skirts/women/shoes/hash-triple-dj-limited-sneakers/'},
              ],
              img: [
                {name:'', file:'n9.jpg', haveCollection: false, link:'/skirts/women/shoes/hash-triple-dj-limited-sneakers/?FL_BAN=AV78ERTFJGKK8'},
              ]
            },
            {
              name: 'ACCESSORIES', 
              isdirectlink: false, 
              isSubCategoryCollapsed: false, 
              isClickedSubCategory: false, 
              isHoveredSubCategory: false, 
              isHoveredExpand: false,   
              subcategory: [
                {name: 'View all', isdirectlink: true, haveCollection: false, url: '/skirts/women/accessories/view-all/'},
                {name: 'Bijoux', isdirectlink: true, haveCollection: false, url: '/skirts/women/accessories/bijoux/'},
                {name: 'Scarves and Silks', isdirectlink: true, haveCollection: false, url: '/skirts/women/accessories/scarves-and-silks/'},
                {name: 'Wallets and Small Leather Goods', isdirectlink: true, haveCollection: false, url: '/skirts/women/accessories/wallets-and-small-leather-goods/'},
                {name: 'skirts', isdirectlink: true, haveCollection: false, url: '/skirts/women/accessories/skirts/'},
                {name: 'Hats and Gloves', isdirectlink: true, haveCollection: false, url: '/skirts/women/accessories/hats-and-gloves/'},
                {name: 'Socks', isdirectlink: true, haveCollection: false, url: '/skirts/women/accessories/socks/'},
                {name: 'Technology', isdirectlink: true, haveCollection: false, url: '/skirts/women/accessories/technology/'}
              ],
              img: [
                {name:'', file:'n7.jpg', haveCollection: false, link:'/skirts/women/accessories/technology/?FL_BAN=BNM7UFHDJVVBDH'},
              ]
            },
            {
              name: 'SUNGLASSES', 
              isdirectlink: false, 
              isSubCategoryCollapsed: false, 
              isClickedSubCategory: false, 
              isHoveredSubCategory: false, 
              isHoveredExpand: false,   
              subcategory: [
                {name: 'View all', isdirectlink: true, haveCollection: false, url: '/skirts/women/sunglasses/view-all/'},
                {name: 'New Arrivals', isdirectlink: true, haveCollection: false, url: '/skirts/women/sunglasses/new-arrivals/'},
                {name: 'Icons', isdirectlink: true, haveCollection: false, url: '/skirts/women/sunglasses/icons/'},
                {name: 'ADV Campaign', extraname: 'UPDATED', isdirectlink: true, haveCollection: false, url: '/skirts/women/sunglasses/adv-campaign/'}
              ],
              img: [
                {name:'', file:'n6.jpg', haveCollection: false, link:'/skirts/women/sunglasses/icons/?FL_BAN=BNWQGHD89JGKHK7'},
              ]
            },
            {
              name: 'WATCHES & JEWELRY', 
              isdirectlink: false, 
              isSubCategoryCollapsed: false,  
              isClickedSubCategory: false, 
              isHoveredSubCategory: false, 
              isHoveredExpand: false,   
              subcategory: [
                {name: 'View all', isdirectlink: true, haveCollection: false, url: '/skirts/women/watches-and-jewelry/view-all/'},
                {name: 'Discover the collection', isdirectlink: true, haveCollection: false, url: '/skirts/women/watches-and-jewelry/discover-the-collection/'},
                {name: 'Earrings', isdirectlink: true, haveCollection: false, url: '/skirts/women/watches-and-jewelry/earrings/'},
                {name: 'Rings', isdirectlink: true, haveCollection: false, url: '/skirts/women/watches-and-jewelry/rings/'},
                {name: 'Necklaces', isdirectlink: true, haveCollection: false, url: '/skirts/women/watches-and-jewelry/necklaces/'},
                {name: 'Charms', isdirectlink: true, haveCollection: false, url: '/skirts/women/watches-and-jewelry/charms/'},
                {name: 'Bracelets', isdirectlink: true, haveCollection: false, url: '/skirts/women/watches-and-jewelry/bracelets/'},
                {name: 'Watches & Straps', isdirectlink: true, haveCollection: false, url: '/skirts/women/watches-and-jewelry/watches-and-straps/'},
                {name: 'Devotion Collection', isdirectlink: true, haveCollection: false, url: '/skirts/women/watches-and-jewelry/devotion-collection/'},
                {name: 'DNA Collection', isdirectlink: true, haveCollection: false, url: '/skirts/women/watches-and-jewelry/dna-collection/'},
                {name: 'Rainbow Collection', isdirectlink: true, haveCollection: false, url: '/skirts/women/watches-and-jewelry/rainbow-collection/'}
              ],
              img: [
                {name:'', file:'n4.jpg', haveCollection: false, link:'/skirts/women/watches-and-jewelry/rainbow-collection/?FL_BAN=ERJF78FJJGK45DS'},
              ]
            },
            {
              name: 'LIMITED EDITION', 
              isdirectlink: false, 
              isSubCategoryCollapsed: false,  
              isClickedSubCategory: false, 
              isHoveredSubCategory: false, 
              isHoveredExpand: false,   
              subcategory: [
                {name: 'View All', isdirectlink: true, haveCollection: false, url: '/skirts/women/limited-edition/view-all/'},
                {name: 'Portofino Custom', isdirectlink: true, haveCollection: false, url: '/skirts/women/limited-edition/portofino-custom/'},
                {name: 'Daymaster Custom', isdirectlink: true, haveCollection: false, url: '/skirts/women/limited-edition/daymaster-custom/'},
                {name: 'Personalize', isdirectlink: true, haveCollection: false, url: '/skirts/women/limited-edition/personalize/'}
              ],
              img: [
                {name:'', file:'n3.jpg', haveCollection: false, link:'/skirts/women/limited-edition/personalize/?FL_BAN=VBCXSGD77FDG11'},
              ]
            }
          ]
        },
        {
          name: 'MEN', 
          isdirectlink: false, 
          isSubCategoryCollapsed: false,  
          isClickedSubCategory: false, 
          isHoveredSubCategory: false, 
          isHoveredExpand: false, 
          subcategory: [
            {
              name: 'NEW IN', 
              img: [
                {name:'', file:'n4.jpg', haveCollection: false, link:'/skirts/men/new-in/?FL_BAN=XZCVSDGDGF78HHJ'},
                {name:'', file:'n3.jpg', haveCollection: false, link:'/skirts/men/new-in/?FL_BAN=XZCVNMDDGDGF78HHJ'},
                {name:'', file:'n5.jpg', haveCollection: false, link:'/skirts/men/new-in/?FL_BAN=XZCVSVVCADGF78HHJ'},
              ]
            },
            {
              name: '3DJ SELECTION', 
              isdirectlink: false, 
              isSubCategoryCollapsed: false, 
              isClickedSubCategory: false, 
              isHoveredSubCategory: false, 
              isHoveredExpand: false, 
              subcategory: [
                {name: 'View all', isdirectlink: true, haveCollection: false, url: '/skirts/men/triple-dj-selection/view-all/'},
                {name: 'Dresses', isdirectlink: true, haveCollection: false, url: '/skirts/men/triple-dj-selection/dresses/'},
                {name: 'Blazers', isdirectlink: true, haveCollection: false, url: '/skirts/men/triple-dj-selection/blazers/'},
                {name: 'Coats and Jackets', extraname: 'NEW', isdirectlink: true, haveCollection: false, url: '/skirts/men/triple-dj-selection/coats-and-jackets/'},
                {name: 'Denim', isdirectlink: true, haveCollection: false, url: '/skirts/men/triple-dj-selection/denim/'},
                {name: 'Shirts and Tops', isdirectlink: true, haveCollection: false, url: '/skirts/men/triple-dj-selection/shirts-and-tops/'},
                {name: 'Sweaters and Cardigans', isdirectlink: true, haveCollection: false, url: '/skirts/men/triple-dj-selection/sweaters-and-cardigans/'},
                {name: 'T-Shirts and Sweatshirts', isdirectlink: true, haveCollection: false, url: '/skirts/men/triple-dj-selection/t-shirts-and-sweat-shirts/'},
                {name: 'Skirts', isdirectlink: true, haveCollection: false, url: '/skirts/men/triple-dj-selection/skirts/'},
                {name: 'Trousers and Shorts', isdirectlink: true, haveCollection: false, url: '/skirts/men/triple-dj-selection/trousers-and-shorts/'},
                {name: 'Underwear', isdirectlink: true, haveCollection: false, url: '/skirts/men/triple-dj-selection/underwear/'},
                {name: 'Beachwear', isdirectlink: true, haveCollection: false, url: '/skirts/men/triple-dj-selection/beachwear/'},
                {name: 'Wear It like #3DJCelebs', isdirectlink: true, haveCollection: false, url: '/skirts/men/triple-dj-selection/wear-it-like-3dj-celebs/'}
              ], 
              extraname: 'NEW',
              img: [
                {name:'', file:'n4.jpg', haveCollection: false, link:'/skirts/men/triple-dj-selection/beachwear/?FL_BAN=ASFRWE895KG'},
                {name:'', file:'n1.jpg', haveCollection: false, link:'/skirts/men/triple-dj-selection/underwear/?FL_BAN=GHJDK89JJFG5B'},
              ]
            },
            {
              name: '3DJ ESSENTIAL', 
              extraname: 'NEW',
              isdirectlink: false, 
              isSubCategoryCollapsed: false, 
              isClickedSubCategory: false, 
              isHoveredSubCategory: false, 
              isHoveredExpand: false, 
              subcategory: [
                {name: 'Discover the Collection', isdirectlink: true, haveCollection: false, url: '/skirts/men/triple-dj-essential/new/discover-the-collection/'},
                {name: 'View all', isdirectlink: true, haveCollection: false, url: '/skirts/men/triple-dj-essential/new/view-all/'}
              ],
              img: [
                {name:'', file:'n2.jpg', haveCollection: false, link:'/skirts/men/triple-dj-essential/new/discover-the-collection/?FL_BAN=GTTYUHFJ54HFJ'},
              ]
            },
            {
              name: 'CLOTHING', 
              isdirectlink: false, 
              isSubCategoryCollapsed: false, 
              isClickedSubCategory: false, 
              isHoveredSubCategory: false, 
              isHoveredExpand: false, 
              subcategory: [
                {name: 'View all', isdirectlink: true, haveCollection: false, url: '/skirts/men/clothing/view-all/'},
                {name: 'Dresses', isdirectlink: true, haveCollection: false, url: '/skirts/men/clothing/dresses/'},
                {name: 'Blazers', isdirectlink: true, haveCollection: false, url: '/skirts/men/clothing/blazers/'},
                {name: 'Coats and Jackets', extraname: 'NEW', isdirectlink: true, haveCollection: false, url: '/skirts/men/clothing/coats-and-jackets/'},
                {name: 'Denim', isdirectlink: true, haveCollection: false, url: '/skirts/men/clothing/denim/'},
                {name: 'Shirts and Tops', isdirectlink: true, haveCollection: false, url: '/skirts/men/clothing/shirts-and-tops/'},
                {name: 'Sweaters and Cardigans', isdirectlink: true, haveCollection: false, url: '/skirts/men/clothing/sweaters-and-cardigans/'},
                {name: 'T-Shirts and Sweatshirts', isdirectlink: true, haveCollection: false, url: '/skirts/men/clothing/t-shirts-and-sweat-shirts/'},
                {name: 'Skirts', isdirectlink: true, haveCollection: false, url: '/skirts/men/clothing/skirts/'},
                {name: 'Trousers and Shorts', isdirectlink: true, haveCollection: false, url: '/skirts/men/clothing/trousers-and-shorts/'},
                {name: 'Underwear', isdirectlink: true, haveCollection: false, url: '/skirts/men/clothing/underwear/'},
                {name: 'Beachwear', isdirectlink: true, haveCollection: false, url: '/skirts/men/clothing/beachwear/'},
                {name: 'Wear It like #3DJCelebs', isdirectlink: true, haveCollection: false, url: '/skirts/men/clothing/wear-it-like-3dj-celebs/'}
              ],
              img: [
                {name:'', file:'n4.jpg', haveCollection: false, link:'/skirts/men/clothing/trousers-and-shorts/?FL_BAN=AQWEDF56HJKLMN7H3'},
              ]
            },
            {
              name: 'BAGS', 
              isdirectlink: false, 
              isSubCategoryCollapsed: false, 
              isClickedSubCategory: false, 
              isHoveredSubCategory: false, 
              isHoveredExpand: false, 
              subcategory: [
                {name: 'View all', isdirectlink: true, haveCollection: false, url: '/skirts/men/bags/view-all/'}, 
                {name: 'Exclusive Shopper in canvas', extraname: 'ECOMMERCE EXCLUSIVELY', isdirectlink: true, haveCollection: false, url: '/skirts/men/bags/exclusive-shopper-in-canvas/'}, 
                {name: 'Handbags', isdirectlink: true, haveCollection: false, url: '/skirts/men/bags/hand-bags/'}, 
                {name: 'Totes', isdirectlink: true, haveCollection: false, url: '/skirts/men/bags/totes/'}, 
                {name: 'Shoulder and Crossbody Bags', isdirectlink: true, haveCollection: false, url: '/skirts/men/bags/shoulder-and-crossbody-bags/'}, 
                {name: 'Clutches Mini and Micro Bags', isdirectlink: true, haveCollection: false, url: '/skirts/men/bags/clutches-mini-and-micro-bags/'}, 
                {name: 'Sicily', isdirectlink: true, haveCollection: false, url: '/skirts/men/bags/sicily/'}, 
                {name: '3DJ Logo Bag', isdirectlink: true, haveCollection: false, url: '/skirts/men/bags/triple-dj-logo-bag/'}, 
                {name: 'Devotion', isdirectlink: true, haveCollection: false, url: '/skirts/men/bas/devotion/'}, 
                {name: 'DJ Girls', isdirectlink: true, haveCollection: false, url: '/skirts/men/bags/dj-girls/'}, 
                {name: '3.5', isdirectlink: true, haveCollection: false, url: '/skirts/men/bags/three-and-half/'}, 
                {name: '3DJ Box', isdirectlink: true, haveCollection: false, url: '/skirts/men/bags/triple-dj-box/'}, 
                {name: '#3DJLeo Collection', isdirectlink: true, haveCollection: false, url: '/skirts/men/bags/hash-triple-dj-leo-collection/'}, 
              ],
              img: [
                {name:'', file:'n2.jpg', haveCollection: false, link:'/skirts/men/bags/triple-dj-logo-bag/?FL_BAN=IHFJF78837JK'},
              ]
            },
            {
              name: 'SHOES', 
              isdirectlink: false, 
              isSubCategoryCollapsed: false, 
              isClickedSubCategory: false, 
              isHoveredSubCategory: false, 
              isHoveredExpand: false, 
              subcategory: [
                {name: 'View all', isdirectlink: true, haveCollection: false, url:'/skirts/men/shoes/view-all/'},
                {name: 'Pumps and Slingback', isdirectlink: true, haveCollection: false, url:'/skirts/men/shoes/pumps-and-slingback/'},
                {name: 'Boots and Booties', isdirectlink: true, haveCollection: false, url:'/skirts/men/shoes/boots-and-booties/'},
                {name: 'Sneakers', isdirectlink: true, haveCollection: false, url:'/skirts/men/shoes/sneakers/'},
                {name: 'skirts and Wedges', isdirectlink: true, haveCollection: false, url:'/skirts/men/shoes/skirts-and-wedges/'},
                {name: 'Slides and Mules', isdirectlink: true, haveCollection: false, url:'/skirts/men/shoes/slides-and-mules/'},
                {name: 'Flat', isdirectlink: true, haveCollection: false, url:'/skirts/men/shoes/flat/'},
                {name: 'Rainbow Lace Collection', isdirectlink: true, haveCollection: false, url:'/skirts/men/shoes/rainboy-lace-collection/'},
                {name: '3.5 Collection', isdirectlink: true, haveCollection: false, url:'/skirts/men/shoes/three-and-half-collection/'},
                {name: '#3DJLIMITED Sneakers', isdirectlink: true, haveCollection: false, url:'/skirts/men/shoes/hash-triple-dj-limited-sneakers/'},
              ],
              img: [
                {name:'', file:'n9.jpg', haveCollection: false, link:'/skirts/men/shoes/hash-triple-dj-limited-sneakers/?FL_BAN=AV78ERTFJGKK8'},
              ]
            },
            {
              name: 'ACCESSORIES', 
              isdirectlink: false, 
              isSubCategoryCollapsed: false, 
              isClickedSubCategory: false, 
              isHoveredSubCategory: false, 
              isHoveredExpand: false,   
              subcategory: [
                {name: 'View all', isdirectlink: true, haveCollection: false, url: '/skirts/men/accessories/view-all/'},
                {name: 'Bijoux', isdirectlink: true, haveCollection: false, url: '/skirts/men/accessories/bijoux/'},
                {name: 'Scarves and Silks', isdirectlink: true, haveCollection: false, url: '/skirts/men/accessories/scarves-and-silks/'},
                {name: 'Wallets and Small Leather Goods', isdirectlink: true, haveCollection: false, url: '/skirts/men/accessories/wallets-and-small-leather-goods/'},
                {name: 'skirts', isdirectlink: true, haveCollection: false, url: '/skirts/men/accessories/skirts/'},
                {name: 'Hats and Gloves', isdirectlink: true, haveCollection: false, url: '/skirts/men/accessories/hats-and-gloves/'},
                {name: 'Socks', isdirectlink: true, haveCollection: false, url: '/skirts/men/accessories/socks/'},
                {name: 'Technology', isdirectlink: true, haveCollection: false, url: '/skirts/men/accessories/technology/'}
              ],
              img: [
                {name:'', file:'n7.jpg', haveCollection: false, link:'/skirts/men/accessories/technology/?FL_BAN=BNM7UFHDJVVBDH'},
              ]
            },
            {
              name: 'SUNGLASSES', 
              isdirectlink: false, 
              isSubCategoryCollapsed: false, 
              isClickedSubCategory: false, 
              isHoveredSubCategory: false, 
              isHoveredExpand: false,   
              subcategory: [
                {name: 'View all', isdirectlink: true, haveCollection: false, url: '/skirts/men/sunglasses/view-all/'},
                {name: 'New Arrivals', isdirectlink: true, haveCollection: false, url: '/skirts/men/sunglasses/new-arrivals/'},
                {name: 'Icons', isdirectlink: true, haveCollection: false, url: '/skirts/men/sunglasses/icons/'},
                {name: 'ADV Campaign', extraname: 'UPDATED', isdirectlink: true, haveCollection: false, url: '/skirts/men/sunglasses/adv-campaign/'}
              ],
              img: [
                {name:'', file:'n6.jpg', haveCollection: false, link:'/skirts/men/sunglasses/icons/?FL_BAN=BNWQGHD89JGKHK7'},
              ]
            },
            {
              name: 'WATCHES & JEWELRY', 
              isdirectlink: false, 
              isSubCategoryCollapsed: false, 
              isClickedSubCategory: false, 
              isHoveredSubCategory: false, 
              isHoveredExpand: false,   
              subcategory: [
                {name: 'View all', isdirectlink: true, haveCollection: false, url: '/skirts/men/watches-and-jewelry/view-all/'},
                {name: 'Discover the collection', isdirectlink: true, haveCollection: false, url: '/skirts/men/watches-and-jewelry/discover-the-collection/'},
                {name: 'Earrings', isdirectlink: true, haveCollection: false, url: '/skirts/men/watches-and-jewelry/earrings/'},
                {name: 'Rings', isdirectlink: true, haveCollection: false, url: '/skirts/men/watches-and-jewelry/rings/'},
                {name: 'Necklaces', isdirectlink: true, haveCollection: false, url: '/skirts/men/watches-and-jewelry/necklaces/'},
                {name: 'Charms', isdirectlink: true, haveCollection: false, url: '/skirts/men/watches-and-jewelry/charms/'},
                {name: 'Bracelets', isdirectlink: true, haveCollection: false, url: '/skirts/men/watches-and-jewelry/bracelets/'},
                {name: 'Watches & Straps', isdirectlink: true, haveCollection: false, url: '/skirts/men/watches-and-jewelry/watches-and-straps/'},
                {name: 'Devotion Collection', isdirectlink: true, haveCollection: false, url: '/skirts/men/watches-and-jewelry/devotion-collection/'},
                {name: 'DNA Collection', isdirectlink: true, haveCollection: false, url: '/skirts/men/watches-and-jewelry/dna-collection/'},
                {name: 'Rainbow Collection', isdirectlink: true, haveCollection: false, url: '/skirts/men/watches-and-jewelry/rainbow-collection/'}
              ],
              img: [
                {name:'', file:'n4.jpg', haveCollection: false, link:'/skirts/men/watches-and-jewelry/rainbow-collection/?FL_BAN=ERJF78FJJGK45DS'},
              ]
            },
            {
              name: 'LIMITED EDITION', 
              isdirectlink: false, 
              isSubCategoryCollapsed: false,  
              isClickedSubCategory: false, 
              isHoveredSubCategory: false, 
              isHoveredExpand: false,   
              subcategory: [
                {name: 'View All', isdirectlink: true, haveCollection: false, url: '/skirts/men/limited-edition/view-all/'},
                {name: 'Portofino Custom', isdirectlink: true, haveCollection: false, url: '/skirts/men/limited-edition/portofino-custom/'},
                {name: 'Daymaster Custom', isdirectlink: true, haveCollection: false, url: '/skirts/men/limited-edition/daymaster-custom/'},
                {name: 'Personalize', isdirectlink: true, haveCollection: false, url: '/skirts/men/limited-edition/personalize/'}
              ],
              img: [
                {name:'', file:'n3.jpg', haveCollection: false, link:'/skirts/men/limited-edition/personalize/?FL_BAN=VBCXSGD77FDG11'},
              ]
            }
          ]
        },
        {
          name: '3DJVIB3', isdirectlink: true, haveCollection: false, url: '/skirts/triple-dj-vib-3/'
        },
        {
          name: 'CHILDREN', 
          isdirectlink: false, 
          isSubCategoryCollapsed: false, 
          isClickedSubCategory: false, 
          isHoveredSubCategory: false, 
          isHoveredExpand: false,   
          subcategory: [
            {
              name: 'NEW IN', 
              isdirectlink: false, 
              isSubCategoryCollapsed: false, 
              isClickedSubCategory: false, 
              isHoveredSubCategory: false, 
              isHoveredExpand: false,   
              subcategory: [
                {name: 'New Arrivals Girl', isdirectlink: true, haveCollection: false, url: '/skirts/children/new-in/new-arrivals-girl/'},
                {name: 'New Arrivals Boy', isdirectlink: true, haveCollection: false, url: '/skirts/children/new-in/new-arrival-boy/'},
                {name: 'Most Loved Girl', isdirectlink: true, haveCollection: false, url: '/skirts/children/new-in/most-loved-girl/'},
                {name: 'Most Loved Boy', isdirectlink: true, haveCollection: false, url: '/skirts/children/new-in/most-loved-boy/'},
              ],
              img: [
                {name:'', file:'n4.jpg', haveCollection: false, link:'/skirts/children/new-in/most-loved-boy/?FL_BAN=YYTRE8977DHF'},
                {name:'', file:'n2.jpg', haveCollection: false, link:'/skirts/children/new-in/most-loved-girl/?FL_BAN=VCXXHF89DHFF'},
              ]
            },
            {
              name: 'GIRL (2-13 YEARS)', 
              isdirectlink: false, 
              isSubCategoryCollapsed: false, 
              isClickedSubCategory: false, 
              isHoveredSubCategory: false, 
              isHoveredExpand: false,   
              subcategory: [
                {name: 'View all', isdirectlink: true, haveCollection: false, url: '/skirts/children/girl-2-13-years/view-all/'},
                {name: 'Dresses', isdirectlink: true, haveCollection: false, url: '/skirts/children/girl-2-13-years/dresses/'},
                {name: 'Coats and Jackets', isdirectlink: true, haveCollection: false, url: '/skirts/children/girl-2-13-years/coats-and-jackets/'},
                {name: 'T-Shirts and Sweatshirts', isdirectlink: true, haveCollection: false, url: '/skirts/children/girl-2-13-years/t-shirts-and-sweatshirts/'},
                {name: 'Shirts and Tops', isdirectlink: true, haveCollection: false, url: '/skirts/children/girl-2-13-years/shirts-and-tops/'},
                {name: 'Sweaters', isdirectlink: true, haveCollection: false, url: '/skirts/children/girl-2-13-years/sweaters/'},
                {name: 'Trousers and Skirts', isdirectlink: true, haveCollection: false, url: '/skirts/children/girl-2-13-years/trousers-and-skirts/'},
                {name: 'Beachwear', isdirectlink: true, haveCollection: false, url: '/skirts/children/girl-2-13-years/beachwear/'},
                {name: 'Accessories', isdirectlink: true, haveCollection: false, url: '/skirts/children/girl-2-13-years/accessories/'},
                {name: 'Shoes (24-38)', isdirectlink: true, haveCollection: false, url: '/skirts/children/girl-2-13-years/shoes-24-to-38/'},
                {name: 'Jewelry', isdirectlink: true, haveCollection: false, url: '/skirts/children/girl-2-13-years/jewelry/'}
              ],
              img: [
                {name:'', file:'c1.jpg', haveCollection: false, link:'/skirts/children/girl-2-13-years/jewelry/?FL_BAN=FJJJO90OJD'},
                {name:'', file:'c2.jpg', haveCollection: false, link:'/skirts/children/girl-2-13-years/accessories/?FL_BAN=INFM90GLLLS'},
              ]
            },
            {
              name: 'BOY (2-13 YEARS)', 
              isdirectlink: false, 
              isSubCategoryCollapsed: false, 
              isClickedSubCategory: false, 
              isHoveredSubCategory: false, 
              isHoveredExpand: false,   
              subcategory: [
                {name: 'View all', isdirectlink: true, haveCollection: false, url: '/skirts/children/boy-2-13-years/view-all/'},
                {name: 'Dresses', isdirectlink: true, haveCollection: false, url: '/skirts/children/boy-2-13-years/dresses/'},
                {name: 'Coats and Jackets', isdirectlink: true, haveCollection: false, url: '/skirts/children/boy-2-13-years/coats-and-jackets/'},
                {name: 'T-Shirts and Sweatshirts', isdirectlink: true, haveCollection: false, url: '/skirts/children/boy-2-13-years/t-shirts-and-sweatshirts/'},
                {name: 'Shirts and Tops', isdirectlink: true, haveCollection: false, url: '/skirts/children/boy-2-13-years/shirts-and-tops/'},
                {name: 'Sweaters', isdirectlink: true, haveCollection: false, url: '/skirts/children/boy-2-13-years/sweaters/'},
                {name: 'Trousers and Skirts', isdirectlink: true, haveCollection: false, url: '/skirts/children/boy-2-13-years/trousers-and-skirts/'},
                {name: 'Beachwear', isdirectlink: true, haveCollection: false, url: '/skirts/children/boy-2-13-years/beachwear/'},
                {name: 'Accessories', isdirectlink: true, haveCollection: false, url: '/skirts/children/boy-2-13-years/accessories/'},
                {name: 'Shoes (24-38)', isdirectlink: true, haveCollection: false, url: '/skirts/children/boy-2-13-years/shoes-24-to-38/'},
                {name: 'Jewelry', isdirectlink: true, haveCollection: false, url: '/skirts/children/boy-2-13-years/jewelry/'}
              ],
              img: [
                {name:'', file:'c1.jpg', haveCollection: false, link:'/skirts/children/boy-2-13-years/jewelry/?FL_BAN=FJJJO90OJD'},
                {name:'', file:'c2.jpg', haveCollection: false, link:'/skirts/children/boy-2-13-years/accessories/?FL_BAN=INFM90GLLLS'},
              ]
            },
            {
              name: 'MINI ME', 
              isdirectlink: false, 
              isSubCategoryCollapsed: false, 
              isClickedSubCategory: false, 
              isHoveredSubCategory: false, 
              isHoveredExpand: false,   
              subcategory: [
                {name: 'View all', isdirectlink: true, haveCollection: false, url: '/skirts/children/mini-me/view-all/'},
                {name: 'Dresses', isdirectlink: true, haveCollection: false, url: '/skirts/children/mini-me/dresses/'},
                {name: 'Coats and Jackets', isdirectlink: true, haveCollection: false, url: '/skirts/children/mini-me/coats-and-jackets/'},
                {name: 'T-Shirts and Sweatshirts', isdirectlink: true, haveCollection: false, url: '/skirts/children/mini-me/t-shirts-and-sweatshirts/'},
                {name: 'Shirts and Tops', isdirectlink: true, haveCollection: false, url: '/skirts/children/mini-me/shirts-and-tops/'},
                {name: 'Sweaters', isdirectlink: true, haveCollection: false, url: '/skirts/children/mini-me/sweaters/'},
                {name: 'Trousers and Skirts', isdirectlink: true, haveCollection: false, url: '/skirts/children/mini-me/trousers-and-skirts/'},
                {name: 'Beachwear', isdirectlink: true, haveCollection: false, url: '/skirts/children/mini-me/beachwear/'},
                {name: 'Accessories', isdirectlink: true, haveCollection: false, url: '/skirts/children/mini-me/accessories/'},
                {name: 'Shoes (24-38)', isdirectlink: true, haveCollection: false, url: '/skirts/children/mini-me/shoes-24-to-38/'},
                {name: 'Jewelry', isdirectlink: true, haveCollection: false, url: '/skirts/children/mini-me/jewelry/'}
              ],
              img: [
                {name:'', file:'n1.jpg', haveCollection: false, link:'/skirts/children/mini-me/jewelry/?FL_BAN=IUDH009FJ45D'},
                {name:'', file:'n2.jpg', haveCollection: false, link:'/skirts/children/mini-me/sweaters/?FL_BAN=VVBMMMN7866'},
              ]
            },
            {
              name: 'NEWBORN (0-12 MONTHS)', 
              isdirectlink: false, 
              isSubCategoryCollapsed: false, 
              isClickedSubCategory: false, 
              isHoveredSubCategory: false, 
              isHoveredExpand: false,   
              subcategory: [
                {name: 'View all', isdirectlink: true, haveCollection: false, url: '/skirts/children/new-born-0-to-12-months/view-all/'},
                {name: 'Dresses', isdirectlink: true, haveCollection: false, url: '/skirts/children/new-born-0-to-12-months/dresses/'},
                {name: 'Coats and Jackets', isdirectlink: true, haveCollection: false, url: '/skirts/children/new-born-0-to-12-months/coats-and-jackets/'},
                {name: 'T-Shirts and Sweatshirts', isdirectlink: true, haveCollection: false, url: '/skirts/children/new-born-0-to-12-months/t-shirts-and-sweatshirts/'},
                {name: 'Shirts and Tops', isdirectlink: true, haveCollection: false, url: '/skirts/children/new-born-0-to-12-months/shirts-and-tops/'},
                {name: 'Sweaters', isdirectlink: true, haveCollection: false, url: '/skirts/children/new-born-0-to-12-months/sweaters/'},
                {name: 'Trousers and Skirts', isdirectlink: true, haveCollection: false, url: '/skirts/children/new-born-0-to-12-months/trousers-and-skirts/'},
                {name: 'Beachwear', isdirectlink: true, haveCollection: false, url: '/skirts/children/new-born-0-to-12-months/beachwear/'},
                {name: 'Accessories', isdirectlink: true, haveCollection: false, url: '/skirts/children/new-born-0-to-12-months/accessories/'},
                {name: 'Shoes (24-38)', isdirectlink: true, haveCollection: false, url: '/skirts/children/new-born-0-to-12-months/shoes-24-to-38/'},
                {name: 'Jewelry', isdirectlink: true, haveCollection: false, url: '/skirts/children/new-born-0-to-12-months/jewelry/'}
              ],
              img: [
                {name:'', file:'n1.jpg', haveCollection: false, link:'/skirts/children/new-born-0-to-12-months/dresses/?FL_BAN=TYYR89JFJ21I'},
                {name:'', file:'n3.jpg', haveCollection: false, link:'/skirts/children/new-born-0-to-12-months/trousers-and-skirts/?FL_BAN=CCV84DEEASDX6'},
              ]
            },
            {
              name: 'NEWBORN GIRL (0-30 MONTHS)', 
              isdirectlink: false, 
              isSubCategoryCollapsed: false, 
              isClickedSubCategory: false, 
              isHoveredSubCategory: false, 
              isHoveredExpand: false,   
              subcategory: [
                {name: 'View all', isdirectlink: true, haveCollection: false, url: '/skirts/children/new-born-girl-0-to-30-months/view-all/'},
                {name: 'Dresses', isdirectlink: true, haveCollection: false, url: '/skirts/children/new-born-girl-0-to-30-months/dresses/'},
                {name: 'Coats and Jackets', isdirectlink: true, haveCollection: false, url: '/skirts/children/new-born-girl-0-to-30-months/coats-and-jackets/'},
                {name: 'T-Shirts and Sweatshirts', isdirectlink: true, haveCollection: false, url: '/skirts/children/new-born-girl-0-to-30-months/t-shirts-and-sweatshirts/'},
                {name: 'Shirts and Tops', isdirectlink: true, haveCollection: false, url: '/skirts/children/new-born-girl-0-to-30-months/shirts-and-tops/'},
                {name: 'Sweaters', isdirectlink: true, haveCollection: false, url: '/skirts/children/new-born-girl-0-to-30-months/sweaters/'},
                {name: 'Trousers and Skirts', isdirectlink: true, haveCollection: false, url: '/skirts/children/new-born-girl-0-to-30-months/trousers-and-skirts/'},
                {name: 'Beachwear', isdirectlink: true, haveCollection: false, url: '/skirts/children/new-born-girl-0-to-30-months/beachwear/'},
                {name: 'Accessories', isdirectlink: true, haveCollection: false, url: '/skirts/children/new-born-girl-0-to-30-months/accessories/'},
                {name: 'Shoes (24-38)', isdirectlink: true, haveCollection: false, url: '/skirts/children/new-born-girl-0-to-30-months/shoes-24-to-38/'},
                {name: 'Jewelry', isdirectlink: true, haveCollection: false, url: '/skirts/children/new-born-girl-0-to-30-months/jewelry/'}
              ],
              img: [
                {name:'', file:'c4.jpg', haveCollection: false, link:'/skirts/children/new-born-girl-0-to-30-months/jewelry/?FL_BAN=CCZZXASS67'},
              ]
            },
            {
              name: 'NEWBORN BOY (0-30 MONTHS)', 
              isdirectlink: false, 
              isSubCategoryCollapsed: false, 
              isClickedSubCategory: false, 
              isHoveredSubCategory: false, 
              isHoveredExpand: false,   
              subcategory: [
                {name: 'View all', isdirectlink: true, haveCollection: false, url: '/skirts/children/new-born-boy-0-to-30-months/view-all/'},
                {name: 'Dresses', isdirectlink: true, haveCollection: false, url: '/skirts/children/new-born-boy-0-to-30-months/dresses/'},
                {name: 'Coats and Jackets', isdirectlink: true, haveCollection: false, url: '/skirts/children/new-born-boy-0-to-30-months/coats-and-jackets/'},
                {name: 'T-Shirts and Sweatshirts', isdirectlink: true, haveCollection: false, url: '/skirts/children/new-born-boy-0-to-30-months/t-shirts-and-sweatshirts/'},
                {name: 'Shirts and Tops', isdirectlink: true, haveCollection: false, url: '/skirts/children/new-born-boy-0-to-30-months/shirts-and-tops/'},
                {name: 'Sweaters', isdirectlink: true, haveCollection: false, url: '/skirts/children/new-born-boy-0-to-30-months/sweaters/'},
                {name: 'Trousers and Skirts', isdirectlink: true, haveCollection: false, url: '/skirts/children/new-born-boy-0-to-30-months/trousers-and-skirts/'},
                {name: 'Beachwear', isdirectlink: true, haveCollection: false, url: '/skirts/children/new-born-boy-0-to-30-months/beachwear/'},
                {name: 'Accessories', isdirectlink: true, haveCollection: false, url: '/skirts/children/new-born-boy-0-to-30-months/accessories/'},
                {name: 'Shoes (24-38)', isdirectlink: true, haveCollection: false, url: '/skirts/children/new-born-boy-0-to-30-months/shoes-24-to-38/'},
                {name: 'Jewelry', isdirectlink: true, haveCollection: false, url: '/skirts/children/new-born-boy-0-to-30-months/jewelry/'}
              ],
              img: [
                {name:'', file:'c4.jpg', haveCollection: false, link:'/skirts/children/new-born-boy-0-to-30-months/sweaters/?FL_BAN=HHJJFHHCCXX11253'},
              ]
            },
          ]
        },
      ],
      img: 'n1.jpg'
    },
    {isdirectlink: true, haveCollection: false, url: '/shoes/', name: 'Shoes', img: 'n9.jpg'},
  ] as ClassifiedNavigationLinksType),
  links = [
    {name: 'Create/Manage Products', url: '/create-or-manage-products/'},
    {name: 'Create/Manage Categories', url: '/create-or-manage-categories/'},
    {name: 'Create/Manage Legal Area', children: [
      {name: 'Conditions of use', url: '/create-or-manage-legal-area/conditions-of-use/'},
      {name: 'Conditions of sale', url: '/create-or-manage-legal-area/conditions-of-sale/'},
      {name: 'Cookie policy', url: '/create-or-manage-legal-area/cookie-policy/'},
      {name: 'Returns policy', url: '/create-or-manage-legal-area/returns-policy/'},
      {name: 'Privacy policy', url: '/create-or-manage-legal-area/privacy-policy/'},
      {name: 'Personal data processing', url: '/create-or-manage-legal-area/personal-data-processing/'},
    ]},
    {name: 'Create/Manage FAQ', children: [
      {name: 'Return and refund info', url: '/create-or-manage-faq/return-and-refund-info/'},
      {name: 'Shipping and delivery info', url: '/create-or-manage-faq/shipping-and-delivery-info/'},
      {name: 'Orders and payment info', url: '/create-or-manage-faq/orders-and-payment-info/'},
      {name: 'Product info', url: '/create-or-manage-faq/product-info/'},
      {name: 'Account info', url: '/create-or-manage-faq/account-info/'}
    ]},
    {name: 'Messages', children: [
      {name: 'Refunds Messages', url: '/refunds-messages/'},
      {name: 'Other Messages', url: '/other-messages/'},
    ]},
    {name: 'Manage Orders', url: '/manage-orders'},
    {name: 'Manage Shipping Carriers and Cost', url: '/manage-shipping-carriers-and-cost/'}
  ],
  menuClicked = ref<Boolean>(false),
  newCategoryOrSubCategory = shallowRef<NewCategoryOrSubCategoryDetailsType>({
    name: '',
    extraname: '',
    nameRef: null,
    directlinkornot: 'YES', 
    level: 'NORMAL',
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
    urlPathRef: null,
  }),
  addCategoryHover = ref<Boolean>(false)
;

provide('NEW-CATEGORY-OR-SUBCATEGORY', newCategoryOrSubCategory);
provide('CATEGORY-AND-OR-SUBCATEGORY', categoryAndOrSubCategory);


function localAddCategoryAndOrSubCategory(i: number | undefined, j: number | undefined, k: number | undefined, level: 'NORMAL' | 'FIRST' | 'SECOND' | 'THIRD') {
  addCategoryAndOrSubCategory(i, j, k, level, newCategoryOrSubCategory, categoryAndOrSubCategory);
}

</script>

<template>
  <div class="position-relative flex-box flex-direction-row justify-content-start align-items-center w-100 h-100 m-0 p-0">
    <template v-if="menuClicked===false">
      <div class="align-self-stretch p-0 m-0 position-fixed h-100" style="width:320px;z-index:450;">
        <div class="d-block h-100 position-relative">
          <div class="w-100 position-absolute t-0 l-0 p-0 m-0" style="border-bottom:1px solid #fff;height: 60px;background-color:#663600;z-index:400;">
          
          </div>
          <div class="d-block h-100 m-0" style="padding: 60px 0 0 0;z-index:350;">
            <div class="d-block h-100 overflow-y-auto overflow-x-hidden" style="background-color:#663600;">

            </div>
          </div>
        </div>
      </div>
    </template>
    <div
      class="flex-fill align-self-stretch m-0 position-relative h-100" 
      :style="menuClicked? 'padding: 0px;' : 'padding: 0 0 0 320px;'"
    >
      <div 
        class="w-100 position-fixed t-0 l-0 r-0" 
        style="height: 110px;z-index:330;" 
        :style="menuClicked? 'padding: 0px;' : 'padding: 0 0 0 320px;'"
      >
        <div class="w-100 h-100 m-0 p-0">
          <div class="d-block" style="height:60px;background-color:#46FF0B;"></div>
          <div class="d-block" style="height:50px;padding:20px 49px;background-color:#fff;">
            <div class="d-block text-left">
              <button 
                @mouseover="addCategoryHover=true"
                @mouseleave="addCategoryHover=false"
                @click="() => {
                  localAddCategoryAndOrSubCategory(undefined, undefined, undefined, 'NORMAL');
                }
                "
                class="btn" 
                style="font-size:14px;padding:5px 10px;" 
                :style="addCategoryHover? 'background-color:#46FF0B;color:black;' : 'background-color:#663600;color:#fff;'"
              >
                <div class="flex-box flex-direction-row flex-nowrap w-100 m-0 p-0 justify-content-center align-items-center">
                  <div style="padding-right:10px;">
                    Add Category
                  </div>
                  <div>
                    <img 
                      :src="'http://localhost:5174/src/assets/icons/'+(addCategoryHover? 'categories-hover.svg' : 'categories.svg')" 
                      style="width:20px;height:20px;" 
                    />
                  </div>
                </div>
              </button>
            </div> 
          </div>
        </div>
      </div>
      <div class="d-block m-0 h-100" style="padding:111px 0 0 0;">
        <CreateAndManageCategorySubCategoryAndOrProduct :menuClicked="menuClicked"></CreateAndManageCategorySubCategoryAndOrProduct>
      </div>
    </div>
  </div>
</template>

