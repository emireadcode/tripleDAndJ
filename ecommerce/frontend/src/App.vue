<script setup lang="ts">
import { ref, provide, onMounted, onUnmounted, watch, triggerRef, type ShallowRef, shallowRef } from "vue";
import ShopHeader from "./components/ShopHeader.vue";
import type { ClassifiedNavigationLinksType } from "./components/types";

const 
  links = [
    {
      url: '/sandals/', 
      name: 'Sandals', 
      subcategory: [
        {
          name: 'Gifts', 
          subcategory: [
            {
              name: 'WOMEN', 
              subcategory:[
                {name: 'View all', url: '/sandals/gifts/women/view-all/'},
                {name: 'Small gifts ideas', url: '/sandals/gifts/women/small-gifts-ideas/'},
                {name: 'Exclusive gifts', url: '/sandals/gifts/women/exclusive-gifts/'},
                {name: 'Personalize', url: '/sandals/gifts/women/personalize/'},
                {name: 'Lifestyle gifts', url: '/sandals/gifts/women/lifestyle-gifts/'},
                {name: 'Gift Card', url: '/sandals/gifts/women/gift-card/'}
              ],
              img: [
                {file:'n4.jpg', link:'/sandals/gifts/women/personalize/?FL_BAN=F987AKJDHF89'},
                {file:'n2.jpg', link:'/sandals/gifts/women/lifestyle-gifts/?FL_BAN=uytrew8UYT'},
              ]
            },
            {
              name: 'MEN', 
              subcategory: [
                {name: 'View all', url: '/sandals/gifts/men/view-all/'},
                {name: 'Small gifts ideas', url: '/sandals/gifts/men/small-gifts-idea/'},
                {name: 'Exclusive gifts', url: '/sandals/gifts/men/exclusive-gifts/'},
                {name: 'Personalize', url: '/sandals/gifts/men/personalize/'},
                {name: 'Lifestyle gifts', url: '/sandals/gifts/men/lifestyle-gifts/'},
                {name: 'Gift Card', url: '/sandals/gifts/men/gift-card/'}
              ],
              img: [
                {file:'n4.jpg', link:'/sandals/gifts/men/personalize/?FL_BAN=UI89FUIYRSE'}
              ]
            },
            {
              name: 'CHILDREN', 
              subcategory: [
                {name: 'View all', url: '/sandals/gifts/children/view-all/'},
                {name: 'Girl', url: '/sandals/gifts/children/girl/'},
                {name: 'Boy', url: '/sandals/gifts/children/boy/'},
                {name: 'Gift Set', url: '/sandals/gifts/children/gift-set/'}
              ],
              img: [
                {file:'n2.jpg', link:'/sandals/gifts/children/boy/?FL_BAN=KLKDJJF090F'}
              ]
            },
            {
              name: 'PARTY LOOKS', 
              subcategory: [
                {name: 'Women', url: '/sandals/gifts/party-looks/women/'},
                {name: 'Men', url: '/sandals/gifts/party-looks/men/'},
                {name: 'Children', url: '/sandals/gifts/party-looks/children/'}
              ],
              img: [
                {file:'n4.jpg', link:'/sandals/gifts/party-looks/children/?FL_BAN=YUDYEJJFY56'},
              ]
            },
            {
              name: 'VIEW ALL',
              img: [
                {file:'n6.jpg', link:'/sandals/gifts/view-all/?FL_BAN=NMDHFJF89DJF'},
                {file:'n8.jpg', link:'/sandals/gifts/view-all/?FL_BAN=NCZDHFJF89DJF'},
              ]
            },
            {
              name: 'GIFTING CAMPAIGN', 
              img: [
                {file:'n1.jpg', link:'/sandals/gifts/gifting-campaign/?FL_BAN=SDEHFJ2536K'},
                {file:'n9.jpg', link:'/sandals/gifts/gifting-campaign/?FL_BAN=XCDEHFJ2536K'},
                {file:'n2.jpg', link:'/sandals/gifts/gifting-campaign/?FL_BAN=ZQDEHFJ2536K'},
              ]
            }
          ]
        },
        {
          name: 'WOMEN', 
          subcategory: [
            {
              name: 'NEW IN', 
              img: [
                {file:'n4.jpg', link:'/sandals/women/new-in/?FL_BAN=XZCVSDGDGF78HHJ'},
                {file:'n3.jpg', link:'/sandals/women/new-in/?FL_BAN=XZCVNMDDGDGF78HHJ'},
                {file:'n5.jpg', link:'/sandals/women/new-in/?FL_BAN=XZCVSVVCADGF78HHJ'},
              ]
            },
            {
              name: '3DJ SELECTION', 
              subcategory: [
                {name: 'View all', url: '/sandals/women/triple-dj-selection/view-all/'},
                {name: 'Dresses', url: '/sandals/women/triple-dj-selection/dresses/'},
                {name: 'Blazers', url: '/sandals/women/triple-dj-selection/blazers/'},
                {name: 'Coats and Jackets', isHovered: false, extraname: 'NEW', url: '/sandals/women/triple-dj-selection/coats-and-jackets/'},
                {name: 'Denim', url: '/sandals/women/triple-dj-selection/denim/'},
                {name: 'Shirts and Tops', url: '/sandals/women/triple-dj-selection/shirts-and-tops/'},
                {name: 'Sweaters and Cardigans', url: '/sandals/women/triple-dj-selection/sweaters-and-cardigans/'},
                {name: 'T-Shirts and Sweatshirts', url: '/sandals/women/triple-dj-selection/t-shirts-and-sweat-shirts/'},
                {name: 'Skirts', url: '/sandals/women/triple-dj-selection/skirts/'},
                {name: 'Trousers and Shorts', url: '/sandals/women/triple-dj-selection/trousers-and-shorts/'},
                {name: 'Underwear', url: '/sandals/women/triple-dj-selection/underwear/'},
                {name: 'Beachwear', url: '/sandals/women/triple-dj-selection/beachwear/'},
                {name: 'Wear It like #3DJCelebs', url: '/sandals/women/triple-dj-selection/wear-it-like-3dj-celebs/'}
              ], 
              isHovered: false, extraname: 'NEW',
              img: [
                {file:'n4.jpg', link:'/sandals/women/triple-dj-selection/beachwear/?FL_BAN=ASFRWE895KG'},
                {file:'n1.jpg', link:'/sandals/women/triple-dj-selection/underwear/?FL_BAN=GHJDK89JJFG5B'},
              ]
            },
            {
              name: '3DJ ESSENTIAL', 
              isHovered: false, extraname: 'NEW',
              subcategory: [
                {name: 'Discover the Collection', url: '/sandals/women/triple-dj-essential/new/discover-the-collection/'},
                {name: 'View all', url: '/sandals/women/triple-dj-essential/new/view-all/'}
              ],
              img: [
                {file:'n2.jpg', link:'/sandals/women/triple-dj-essential/new/discover-the-collection/?FL_BAN=GTTYRPUHFJ54HFJ'},
              ]
            },
            {
              name: 'CLOTHING', 
              subcategory: [
                {name: 'View all', url: '/sandals/women/clothing/view-all/'},
                {name: 'Dresses', url: '/sandals/women/clothing/dresses/'},
                {name: 'Blazers', url: '/sandals/women/clothing/blazers/'},
                {name: 'Coats and Jackets', isHovered: false, extraname: 'NEW', url: '/sandals/women/clothing/coats-and-jackets/'},
                {name: 'Denim', url: '/sandals/women/clothing/denim/'},
                {name: 'Shirts and Tops', url: '/sandals/women/clothing/shirts-and-tops/'},
                {name: 'Sweaters and Cardigans', url: '/sandals/women/clothing/sweaters-and-cardigans/'},
                {name: 'T-Shirts and Sweatshirts', url: '/sandals/women/clothing/t-shirts-and-sweat-shirts/'},
                {name: 'Skirts', url: '/sandals/women/clothing/skirts/'},
                {name: 'Trousers and Shorts', url: '/sandals/women/clothing/trousers-and-shorts/'},
                {name: 'Underwear', url: '/sandals/women/clothing/underwear/'},
                {name: 'Beachwear', url: '/sandals/women/clothing/beachwear/'},
                {name: 'Wear It like #3DJCelebs', url: '/sandals/women/clothing/wear-it-like-3dj-celebs/'}
              ],
              img: [
                {file:'n4.jpg', link:'/sandals/women/clothing/trousers-and-shorts/?FL_BAN=AQWEDF56HJKLMN7H3'},
              ]
            },
            {
              name: 'BAGS', 
              subcategory: [
                {name: 'View all', url: '/sandals/women/bags/view-all/'}, 
                {name: 'Exclusive Shopper in canvas', isHovered: false, extraname: 'ECOMMERCE EXCLUSIVELY', url: '/sandals/women/bags/exclusive-shopper-in-canvas/'}, 
                {name: 'Handbags', url: '/sandals/women/bags/hand-bags/'}, 
                {name: 'Totes', url: '/sandals/women/bags/totes/'}, 
                {name: 'Shoulder and Crossbody Bags', url: '/sandals/women/bags/shoulder-and-crossbody-bags/'}, 
                {name: 'Clutches Mini and Micro Bags', url: '/sandals/women/bags/clutches-mini-and-micro-bags/'}, 
                {name: 'Sicily', url: '/sandals/women/bags/sicily/'}, 
                {name: '3DJ Logo Bag', url: '/sandals/women/bags/triple-dj-logo-bag/'}, 
                {name: 'Devotion', url: '/sandals/women/bas/devotion/'}, 
                {name: 'DJ Girls', url: '/sandals/women/bags/dj-girls/'}, 
                {name: '3.5', url: '/sandals/women/bags/three-and-half/'}, 
                {name: '3DJ Box', url: '/sandals/women/bags/triple-dj-box/'}, 
                {name: '#3DJLeo Collection', url: '/sandals/women/bags/hash-triple-dj-leo-collection/'}, 
              ],
              img: [
                {file:'n2.jpg', link:'/sandals/women/bags/triple-dj-logo-bag/?FL_BAN=IHFJF78837JK'},
              ]
            },
            {
              name: 'SHOES', 
              subcategory: [
                {name: 'View all', url:'/sandals/women/shoes/view-all/'},
                {name: 'Pumps and Slingback', url:'/sandals/women/shoes/pumps-and-slingback/'},
                {name: 'Boots and Booties', url:'/sandals/women/shoes/boots-and-booties/'},
                {name: 'Sneakers', url:'/sandals/women/shoes/sneakers/'},
                {name: 'Sandals and Wedges', url:'/sandals/women/shoes/sandals-and-wedges/'},
                {name: 'Slides and Mules', url:'/sandals/women/shoes/slides-and-mules/'},
                {name: 'Flat', url:'/sandals/women/shoes/flat/'},
                {name: 'Rainbow Lace Collection', url:'/sandals/women/shoes/rainboy-lace-collection/'},
                {name: '3.5 Collection', url:'/sandals/women/shoes/three-and-half-collection/'},
                {name: '#3DJLIMITED Sneakers', url:'/sandals/women/shoes/hash-triple-dj-limited-sneakers/'},
              ],
              img: [
                {file:'n9.jpg', link:'/sandals/women/shoes/hash-triple-dj-limited-sneakers/?FL_BAN=AV78ERTFJGKK8'},
              ]
            },
            {
              name: 'ACCESSORIES', 
              subcategory: [
                {name: 'View all', url: '/sandals/women/accessories/view-all/'},
                {name: 'Bijoux', url: '/sandals/women/accessories/bijoux/'},
                {name: 'Scarves and Silks', url: '/sandals/women/accessories/scarves-and-silks/'},
                {name: 'Wallets and Small Leather Goods', url: '/sandals/women/accessories/wallets-and-small-leather-goods/'},
                {name: 'Belts', url: '/sandals/women/accessories/belts/'},
                {name: 'Hats and Gloves', url: '/sandals/women/accessories/hats-and-gloves/'},
                {name: 'Socks', url: '/sandals/women/accessories/socks/'},
                {name: 'Technology', url: '/sandals/women/accessories/technology/'}
              ],
              img: [
                {file:'n7.jpg', link:'/sandals/women/accessories/technology/?FL_BAN=BNM7UFHDJVVBDH'},
              ]
            },
            {
              name: 'SUNGLASSES', 
              subcategory: [
                {name: 'View all', url: '/sandals/women/sunglasses/view-all/'},
                {name: 'New Arrivals', url: '/sandals/women/sunglasses/new-arrivals/'},
                {name: 'Icons', url: '/sandals/women/sunglasses/icons/'},
                {name: 'ADV Campaign', isHovered: false, extraname: 'UPDATED', url: '/sandals/women/sunglasses/adv-campaign/'}
              ],
              img: [
                {file:'n6.jpg', link:'/sandals/women/sunglasses/icons/?FL_BAN=BNWQGHD89JGKHK7'},
              ]
            },
            {
              name: 'WATCHES & JEWELRY', 
              subcategory: [
                {name: 'View all', url: '/sandals/women/watches-and-jewelry/view-all/'},
                {name: 'Discover the collection', url: '/sandals/women/watches-and-jewelry/discover-the-collection/'},
                {name: 'Earrings', url: '/sandals/women/watches-and-jewelry/earrings/'},
                {name: 'Rings', url: '/sandals/women/watches-and-jewelry/rings/'},
                {name: 'Necklaces', url: '/sandals/women/watches-and-jewelry/necklaces/'},
                {name: 'Charms', url: '/sandals/women/watches-and-jewelry/charms/'},
                {name: 'Bracelets', url: '/sandals/women/watches-and-jewelry/bracelets/'},
                {name: 'Watches & Straps', url: '/sandals/women/watches-and-jewelry/watches-and-straps/'},
                {name: 'Devotion Collection', url: '/sandals/women/watches-and-jewelry/devotion-collection/'},
                {name: 'DNA Collection', url: '/sandals/women/watches-and-jewelry/dna-collection/'},
                {name: 'Rainbow Collection', url: '/sandals/women/watches-and-jewelry/rainbow-collection/'}
              ],
              img: [
                {file:'n4.jpg', link:'/sandals/women/watches-and-jewelry/rainbow-collection/?FL_BAN=ERJF78FJJGK45DS'},
              ]
            },
            {
              name: 'LIMITED EDITION', 
              subcategory: [
                {name: 'View All', url: '/sandals/women/limited-edition/view-all/'},
                {name: 'Portofino Custom', url: '/sandals/women/limited-edition/portofino-custom/'},
                {name: 'Daymaster Custom', url: '/sandals/women/limited-edition/daymaster-custom/'},
                {name: 'Personalize', url: '/sandals/women/limited-edition/personalize/'}
              ],
              img: [
                {file:'n3.jpg', link:'/sandals/women/limited-edition/personalize/?FL_BAN=VBCXSGD77FDG11'},
              ]
            }
          ]
        },
        {
          name: 'MEN', 
          subcategory: [
            {
              name: 'NEW IN', 
              img: [
                {file:'n4.jpg', link:'/sandals/men/new-in/?FL_BAN=XZCVSDGDGF78HHJ'},
                {file:'n3.jpg', link:'/sandals/men/new-in/?FL_BAN=XZCVNMDDGDGF78HHJ'},
                {file:'n5.jpg', link:'/sandals/men/new-in/?FL_BAN=XZCVSVVCADGF78HHJ'},
              ]
            },
            {
              name: '3DJ SELECTION', 
              subcategory: [
                {name: 'View all', url: '/sandals/men/triple-dj-selection/view-all/'},
                {name: 'Dresses', url: '/sandals/men/triple-dj-selection/dresses/'},
                {name: 'Blazers', url: '/sandals/men/triple-dj-selection/blazers/'},
                {name: 'Coats and Jackets', isHovered: false, extraname: 'NEW', url: '/sandals/men/triple-dj-selection/coats-and-jackets/'},
                {name: 'Denim', url: '/sandals/men/triple-dj-selection/denim/'},
                {name: 'Shirts and Tops', url: '/sandals/men/triple-dj-selection/shirts-and-tops/'},
                {name: 'Sweaters and Cardigans', url: '/sandals/men/triple-dj-selection/sweaters-and-cardigans/'},
                {name: 'T-Shirts and Sweatshirts', url: '/sandals/men/triple-dj-selection/t-shirts-and-sweat-shirts/'},
                {name: 'Skirts', url: '/sandals/men/triple-dj-selection/skirts/'},
                {name: 'Trousers and Shorts', url: '/sandals/men/triple-dj-selection/trousers-and-shorts/'},
                {name: 'Underwear', url: '/sandals/men/triple-dj-selection/underwear/'},
                {name: 'Beachwear', url: '/sandals/men/triple-dj-selection/beachwear/'},
                {name: 'Wear It like #3DJCelebs', url: '/sandals/men/triple-dj-selection/wear-it-like-3dj-celebs/'}
              ], 
              isHovered: false, extraname: 'NEW',
              img: [
                {file:'n4.jpg', link:'/sandals/men/triple-dj-selection/beachwear/?FL_BAN=ASFRWE895KG'},
                {file:'n1.jpg', link:'/sandals/men/triple-dj-selection/underwear/?FL_BAN=GHJDK89JJFG5B'},
              ]
            },
            {
              name: '3DJ ESSENTIAL', 
              isHovered: false, extraname: 'NEW',
              subcategory: [
                {name: 'Discover the Collection', url: '/sandals/men/triple-dj-essential/new/discover-the-collection/'},
                {name: 'View all', url: '/sandals/men/triple-dj-essential/new/view-all/'}
              ],
              img: [
                {file:'n2.jpg', link:'/sandals/men/triple-dj-essential/new/discover-the-collection/?FL_BAN=GTTYUHFJ54HFJ'},
              ]
            },
            {
              name: 'CLOTHING', 
              subcategory: [
                {name: 'View all', url: '/sandals/men/clothing/view-all/'},
                {name: 'Dresses', url: '/sandals/men/clothing/dresses/'},
                {name: 'Blazers', url: '/sandals/men/clothing/blazers/'},
                {name: 'Coats and Jackets', isHovered: false, extraname: 'NEW', url: '/sandals/men/clothing/coats-and-jackets/'},
                {name: 'Denim', url: '/sandals/men/clothing/denim/'},
                {name: 'Shirts and Tops', url: '/sandals/men/clothing/shirts-and-tops/'},
                {name: 'Sweaters and Cardigans', url: '/sandals/men/clothing/sweaters-and-cardigans/'},
                {name: 'T-Shirts and Sweatshirts', url: '/sandals/men/clothing/t-shirts-and-sweat-shirts/'},
                {name: 'Skirts', url: '/sandals/men/clothing/skirts/'},
                {name: 'Trousers and Shorts', url: '/sandals/men/clothing/trousers-and-shorts/'},
                {name: 'Underwear', url: '/sandals/men/clothing/underwear/'},
                {name: 'Beachwear', url: '/sandals/men/clothing/beachwear/'},
                {name: 'Wear It like #3DJCelebs', url: '/sandals/men/clothing/wear-it-like-3dj-celebs/'}
              ],
              img: [
                {file:'n4.jpg', link:'/sandals/men/clothing/trousers-and-shorts/?FL_BAN=AQWEDF56HJKLMN7H3'},
              ]
            },
            {
              name: 'BAGS', 
              subcategory: [
                {name: 'View all', url: '/sandals/men/bags/view-all/'}, 
                {name: 'Exclusive Shopper in canvas', isHovered: false, extraname: 'ECOMMERCE EXCLUSIVELY', url: '/sandals/men/bags/exclusive-shopper-in-canvas/'}, 
                {name: 'Handbags', url: '/sandals/men/bags/hand-bags/'}, 
                {name: 'Totes', url: '/sandals/men/bags/totes/'}, 
                {name: 'Shoulder and Crossbody Bags', url: '/sandals/men/bags/shoulder-and-crossbody-bags/'}, 
                {name: 'Clutches Mini and Micro Bags', url: '/sandals/men/bags/clutches-mini-and-micro-bags/'}, 
                {name: 'Sicily', url: '/sandals/men/bags/sicily/'}, 
                {name: '3DJ Logo Bag', url: '/sandals/men/bags/triple-dj-logo-bag/'}, 
                {name: 'Devotion', url: '/sandals/men/bas/devotion/'}, 
                {name: 'DJ Girls', url: '/sandals/men/bags/dj-girls/'}, 
                {name: '3.5', url: '/sandals/men/bags/three-and-half/'}, 
                {name: '3DJ Box', url: '/sandals/men/bags/triple-dj-box/'}, 
                {name: '#3DJLeo Collection', url: '/sandals/men/bags/hash-triple-dj-leo-collection/'}, 
              ],
              img: [
                {file:'n2.jpg', link:'/sandals/men/bags/triple-dj-logo-bag/?FL_BAN=IHFJF78837JK'},
              ]
            },
            {
              name: 'SHOES', 
              subcategory: [
                {name: 'View all', url:'/sandals/men/shoes/view-all/'},
                {name: 'Pumps and Slingback', url:'/sandals/men/shoes/pumps-and-slingback/'},
                {name: 'Boots and Booties', url:'/sandals/men/shoes/boots-and-booties/'},
                {name: 'Sneakers', url:'/sandals/men/shoes/sneakers/'},
                {name: 'Sandals and Wedges', url:'/sandals/men/shoes/sandals-and-wedges/'},
                {name: 'Slides and Mules', url:'/sandals/men/shoes/slides-and-mules/'},
                {name: 'Flat', url:'/sandals/men/shoes/flat/'},
                {name: 'Rainbow Lace Collection', url:'/sandals/men/shoes/rainboy-lace-collection/'},
                {name: '3.5 Collection', url:'/sandals/men/shoes/three-and-half-collection/'},
                {name: '#3DJLIMITED Sneakers', url:'/sandals/men/shoes/hash-triple-dj-limited-sneakers/'},
              ],
              img: [
                {file:'n9.jpg', link:'/sandals/men/shoes/hash-triple-dj-limited-sneakers/?FL_BAN=AV78ERTFJGKK8'},
              ]
            },
            {
              name: 'ACCESSORIES', 
              subcategory: [
                {name: 'View all', url: '/sandals/men/accessories/view-all/'},
                {name: 'Bijoux', url: '/sandals/men/accessories/bijoux/'},
                {name: 'Scarves and Silks', url: '/sandals/men/accessories/scarves-and-silks/'},
                {name: 'Wallets and Small Leather Goods', url: '/sandals/men/accessories/wallets-and-small-leather-goods/'},
                {name: 'Belts', url: '/sandals/men/accessories/belts/'},
                {name: 'Hats and Gloves', url: '/sandals/men/accessories/hats-and-gloves/'},
                {name: 'Socks', url: '/sandals/men/accessories/socks/'},
                {name: 'Technology', url: '/sandals/men/accessories/technology/'}
              ],
              img: [
                {file:'n7.jpg', link:'/sandals/men/accessories/technology/?FL_BAN=BNM7UFHDJVVBDH'},
              ]
            },
            {
              name: 'SUNGLASSES', 
              subcategory: [
                {name: 'View all', url: '/sandals/men/sunglasses/view-all/'},
                {name: 'New Arrivals', url: '/sandals/men/sunglasses/new-arrivals/'},
                {name: 'Icons', url: '/sandals/men/sunglasses/icons/'},
                {name: 'ADV Campaign', isHovered: false, extraname: 'UPDATED', url: '/sandals/men/sunglasses/adv-campaign/'}
              ],
              img: [
                {file:'n6.jpg', link:'/sandals/men/sunglasses/icons/?FL_BAN=BNWQGHD89JGKHK7'},
              ]
            },
            {
              name: 'WATCHES & JEWELRY', 
              subcategory: [
                {name: 'View all', url: '/sandals/men/watches-and-jewelry/view-all/'},
                {name: 'Discover the collection', url: '/sandals/men/watches-and-jewelry/discover-the-collection/'},
                {name: 'Earrings', url: '/sandals/men/watches-and-jewelry/earrings/'},
                {name: 'Rings', url: '/sandals/men/watches-and-jewelry/rings/'},
                {name: 'Necklaces', url: '/sandals/men/watches-and-jewelry/necklaces/'},
                {name: 'Charms', url: '/sandals/men/watches-and-jewelry/charms/'},
                {name: 'Bracelets', url: '/sandals/men/watches-and-jewelry/bracelets/'},
                {name: 'Watches & Straps', url: '/sandals/men/watches-and-jewelry/watches-and-straps/'},
                {name: 'Devotion Collection', url: '/sandals/men/watches-and-jewelry/devotion-collection/'},
                {name: 'DNA Collection', url: '/sandals/men/watches-and-jewelry/dna-collection/'},
                {name: 'Rainbow Collection', url: '/sandals/men/watches-and-jewelry/rainbow-collection/'}
              ],
              img: [
                {file:'n4.jpg', link:'/sandals/men/watches-and-jewelry/rainbow-collection/?FL_BAN=ERJF78FJJGK45DS'},
              ]
            },
            {
              name: 'LIMITED EDITION', 
              subcategory: [
                {name: 'View All', url: '/sandals/men/limited-edition/view-all/'},
                {name: 'Portofino Custom', url: '/sandals/men/limited-edition/portofino-custom/'},
                {name: 'Daymaster Custom', url: '/sandals/men/limited-edition/daymaster-custom/'},
                {name: 'Personalize', url: '/sandals/men/limited-edition/personalize/'}
              ],
              img: [
                {file:'n3.jpg', link:'/sandals/men/limited-edition/personalize/?FL_BAN=VBCXSGD77FDG11'},
              ]
            }
          ]
        },
        {
          name: '3DJVIB3', url: '/sandals/triple-dj-vib-3/'
        },
        {
          name: 'CHILDREN', 
          subcategory: [
            {
              name: 'NEW IN', 
              subcategory: [
                {name: 'New Arrivals Girl', url: '/sandals/children/new-in/new-arrivals-girl/'},
                {name: 'New Arrivals Boy', url: '/sandals/children/new-in/new-arrival-boy/'},
                {name: 'Most Loved Girl', url: '/sandals/children/new-in/most-loved-girl/'},
                {name: 'Most Loved Boy', url: '/sandals/children/new-in/most-loved-boy/'},
              ],
              img: [
                {file:'n4.jpg', link:'/sandals/children/new-in/most-loved-boy/?FL_BAN=YYTRE8977DHF'},
                {file:'n2.jpg', link:'/sandals/children/new-in/most-loved-girl/?FL_BAN=VCXXHF89DHFF'},
              ]
            },
            {
              name: 'GIRL (2-13 YEARS)', 
              subcategory: [
                {name: 'View all', url: '/sandals/children/girl-2-13-years/view-all/'},
                {name: 'Dresses', url: '/sandals/children/girl-2-13-years/dresses/'},
                {name: 'Coats and Jackets', url: '/sandals/children/girl-2-13-years/coats-and-jackets/'},
                {name: 'T-Shirts and Sweatshirts', url: '/sandals/children/girl-2-13-years/t-shirts-and-sweatshirts/'},
                {name: 'Shirts and Tops', url: '/sandals/children/girl-2-13-years/shirts-and-tops/'},
                {name: 'Sweaters', url: '/sandals/children/girl-2-13-years/sweaters/'},
                {name: 'Trousers and Skirts', url: '/sandals/children/girl-2-13-years/trousers-and-skirts/'},
                {name: 'Beachwear', url: '/sandals/children/girl-2-13-years/beachwear/'},
                {name: 'Accessories', url: '/sandals/children/girl-2-13-years/accessories/'},
                {name: 'Shoes (24-38)', url: '/sandals/children/girl-2-13-years/shoes-24-to-38/'},
                {name: 'Jewelry', url: '/sandals/children/girl-2-13-years/jewelry/'}
              ],
              img: [
                {file:'c1.jpg', link:'/sandals/children/girl-2-13-years/jewelry/?FL_BAN=FJJJO90OJD'},
                {file:'c2.jpg', link:'/sandals/children/girl-2-13-years/accessories/?FL_BAN=INFM90GLLLS'},
              ]
            },
            {
              name: 'BOY (2-13 YEARS)', 
              subcategory: [
                {name: 'View all', url: '/sandals/children/boy-2-13-years/view-all/'},
                {name: 'Dresses', url: '/sandals/children/boy-2-13-years/dresses/'},
                {name: 'Coats and Jackets', url: '/sandals/children/boy-2-13-years/coats-and-jackets/'},
                {name: 'T-Shirts and Sweatshirts', url: '/sandals/children/boy-2-13-years/t-shirts-and-sweatshirts/'},
                {name: 'Shirts and Tops', url: '/sandals/children/boy-2-13-years/shirts-and-tops/'},
                {name: 'Sweaters', url: '/sandals/children/boy-2-13-years/sweaters/'},
                {name: 'Trousers and Skirts', url: '/sandals/children/boy-2-13-years/trousers-and-skirts/'},
                {name: 'Beachwear', url: '/sandals/children/boy-2-13-years/beachwear/'},
                {name: 'Accessories', url: '/sandals/children/boy-2-13-years/accessories/'},
                {name: 'Shoes (24-38)', url: '/sandals/children/boy-2-13-years/shoes-24-to-38/'},
                {name: 'Jewelry', url: '/sandals/children/boy-2-13-years/jewelry/'}
              ],
              img: [
                {file:'c1.jpg', link:'/sandals/children/boy-2-13-years/jewelry/?FL_BAN=FJJJO90OJD'},
                {file:'c2.jpg', link:'/sandals/children/boy-2-13-years/accessories/?FL_BAN=INFM90GLLLS'},
              ]
            },
            {
              name: 'MINI ME', 
              subcategory: [
                {name: 'View all', url: '/sandals/children/mini-me/view-all/'},
                {name: 'Dresses', url: '/sandals/children/mini-me/dresses/'},
                {name: 'Coats and Jackets', url: '/sandals/children/mini-me/coats-and-jackets/'},
                {name: 'T-Shirts and Sweatshirts', url: '/sandals/children/mini-me/t-shirts-and-sweatshirts/'},
                {name: 'Shirts and Tops', url: '/sandals/children/mini-me/shirts-and-tops/'},
                {name: 'Sweaters', url: '/sandals/children/mini-me/sweaters/'},
                {name: 'Trousers and Skirts', url: '/sandals/children/mini-me/trousers-and-skirts/'},
                {name: 'Beachwear', url: '/sandals/children/mini-me/beachwear/'},
                {name: 'Accessories', url: '/sandals/children/mini-me/accessories/'},
                {name: 'Shoes (24-38)', url: '/sandals/children/mini-me/shoes-24-to-38/'},
                {name: 'Jewelry', url: '/sandals/children/mini-me/jewelry/'}
              ],
              img: [
                {file:'n1.jpg', link:'/sandals/children/mini-me/jewelry/?FL_BAN=IUDH009FJ45D'},
                {file:'n2.jpg', link:'/sandals/children/mini-me/sweaters/?FL_BAN=VVBMMMN7866'},
              ]
            },
            {
              name: 'NEWBORN (0-12 MONTHS)', 
              subcategory: [
                {name: 'View all', url: '/sandals/children/new-born-0-to-12-months/view-all/'},
                {name: 'Dresses', url: '/sandals/children/new-born-0-to-12-months/dresses/'},
                {name: 'Coats and Jackets', url: '/sandals/children/new-born-0-to-12-months/coats-and-jackets/'},
                {name: 'T-Shirts and Sweatshirts', url: '/sandals/children/new-born-0-to-12-months/t-shirts-and-sweatshirts/'},
                {name: 'Shirts and Tops', url: '/sandals/children/new-born-0-to-12-months/shirts-and-tops/'},
                {name: 'Sweaters', url: '/sandals/children/new-born-0-to-12-months/sweaters/'},
                {name: 'Trousers and Skirts', url: '/sandals/children/new-born-0-to-12-months/trousers-and-skirts/'},
                {name: 'Beachwear', url: '/sandals/children/new-born-0-to-12-months/beachwear/'},
                {name: 'Accessories', url: '/sandals/children/new-born-0-to-12-months/accessories/'},
                {name: 'Shoes (24-38)', url: '/sandals/children/new-born-0-to-12-months/shoes-24-to-38/'},
                {name: 'Jewelry', url: '/sandals/children/new-born-0-to-12-months/jewelry/'}
              ],
              img: [
                {file:'n1.jpg', link:'/sandals/children/new-born-0-to-12-months/dresses/?FL_BAN=TYYR89JFJ21I'},
                {file:'n3.jpg', link:'/sandals/children/new-born-0-to-12-months/trousers-and-skirts/?FL_BAN=CCV84DEEASDX6'},
              ]
            },
            {
              name: 'NEWBORN GIRL (0-30 MONTHS)', 
              subcategory: [
                {name: 'View all', url: '/sandals/children/new-born-girl-0-to-30-months/view-all/'},
                {name: 'Dresses', url: '/sandals/children/new-born-girl-0-to-30-months/dresses/'},
                {name: 'Coats and Jackets', url: '/sandals/children/new-born-girl-0-to-30-months/coats-and-jackets/'},
                {name: 'T-Shirts and Sweatshirts', url: '/sandals/children/new-born-girl-0-to-30-months/t-shirts-and-sweatshirts/'},
                {name: 'Shirts and Tops', url: '/sandals/children/new-born-girl-0-to-30-months/shirts-and-tops/'},
                {name: 'Sweaters', url: '/sandals/children/new-born-girl-0-to-30-months/sweaters/'},
                {name: 'Trousers and Skirts', url: '/sandals/children/new-born-girl-0-to-30-months/trousers-and-skirts/'},
                {name: 'Beachwear', url: '/sandals/children/new-born-girl-0-to-30-months/beachwear/'},
                {name: 'Accessories', url: '/sandals/children/new-born-girl-0-to-30-months/accessories/'},
                {name: 'Shoes (24-38)', url: '/sandals/children/new-born-girl-0-to-30-months/shoes-24-to-38/'},
                {name: 'Jewelry', url: '/sandals/children/new-born-girl-0-to-30-months/jewelry/'}
              ],
              img: [
                {file:'c4.jpg', link:'/sandals/children/new-born-girl-0-to-30-months/jewelry/?FL_BAN=CCZZXASS67'},
              ]
            },
            {
              name: 'NEWBORN BOY (0-30 MONTHS)', 
              subcategory: [
                {name: 'View all', url: '/sandals/children/new-born-boy-0-to-30-months/view-all/'},
                {name: 'Dresses', url: '/sandals/children/new-born-boy-0-to-30-months/dresses/'},
                {name: 'Coats and Jackets', url: '/sandals/children/new-born-boy-0-to-30-months/coats-and-jackets/'},
                {name: 'T-Shirts and Sweatshirts', url: '/sandals/children/new-born-boy-0-to-30-months/t-shirts-and-sweatshirts/'},
                {name: 'Shirts and Tops', url: '/sandals/children/new-born-boy-0-to-30-months/shirts-and-tops/'},
                {name: 'Sweaters', url: '/sandals/children/new-born-boy-0-to-30-months/sweaters/'},
                {name: 'Trousers and Skirts', url: '/sandals/children/new-born-boy-0-to-30-months/trousers-and-skirts/'},
                {name: 'Beachwear', url: '/sandals/children/new-born-boy-0-to-30-months/beachwear/'},
                {name: 'Accessories', url: '/sandals/children/new-born-boy-0-to-30-months/accessories/'},
                {name: 'Shoes (24-38)', url: '/sandals/children/new-born-boy-0-to-30-months/shoes-24-to-38/'},
                {name: 'Jewelry', url: '/sandals/children/new-born-boy-0-to-30-months/jewelry/'}
              ],
              img: [
                {file:'c4.jpg', link:'/sandals/children/new-born-boy-0-to-30-months/sweaters/?FL_BAN=HHJJFHHCCXX11253'},
              ]
            },
          ]
        },
      ],
      img: 'n1.jpg'
    },
    {url: '/slippers/', name: 'Slippers', img: 'n2.jpg'},
    {
      url: '/belts/', 
      name: 'Belts', 
      subcategory: [
        {
          name: 'Gifts', 
          subcategory: [
            {
              name: 'WOMEN', 
              subcategory:[
                {name: 'View all', url: '/belts/gifts/women/view-all/'},
                {name: 'Small gifts ideas', url: '/belts/gifts/women/small-gifts-ideas/'},
                {name: 'Exclusive gifts', url: '/belts/gifts/women/exclusive-gifts/'},
                {name: 'Personalize', url: '/belts/gifts/women/personalize/'},
                {name: 'Lifestyle gifts', url: '/belts/gifts/women/lifestyle-gifts/'},
                {name: 'Gift Card', url: '/belts/gifts/women/gift-card/'}
              ],
              img: [
                {file:'n4.jpg', link:'/belts/gifts/women/personalize/?FL_BAN=F987AKJDHF89'},
                {file:'n2.jpg', link:'/belts/gifts/women/lifestyle-gifts/?FL_BAN=uytrew8UYT'},
              ]
            },
            {
              name: 'MEN', 
              subcategory: [
                {name: 'View all', url: '/belts/gifts/men/view-all/'},
                {name: 'Small gifts ideas', url: '/belts/gifts/men/small-gifts-idea/'},
                {name: 'Exclusive gifts', url: '/belts/gifts/men/exclusive-gifts/'},
                {name: 'Personalize', url: '/belts/gifts/men/personalize/'},
                {name: 'Lifestyle gifts', url: '/belts/gifts/men/lifestyle-gifts/'},
                {name: 'Gift Card', url: '/belts/gifts/men/gift-card/'}
              ],
              img: [
                {file:'n4.jpg', link:'/belts/gifts/men/personalize/?FL_BAN=UI89FUIYRSE'}
              ]
            },
            {
              name: 'CHILDREN', 
              subcategory: [
                {name: 'View all', url: '/belts/gifts/children/view-all/'},
                {name: 'Girl', url: '/belts/gifts/children/girl/'},
                {name: 'Boy', url: '/belts/gifts/children/boy/'},
                {name: 'Gift Set', url: '/belts/gifts/children/gift-set/'}
              ],
              img: [
                {file:'n2.jpg', link:'/belts/gifts/children/boy/?FL_BAN=KLKDJJF090F'}
              ]
            },
            {
              name: 'PARTY LOOKS', 
              subcategory: [
                {name: 'Women', url: '/belts/gifts/party-looks/women/'},
                {name: 'Men', url: '/belts/gifts/party-looks/men/'},
                {name: 'Children', url: '/belts/gifts/party-looks/children/'}
              ],
              img: [
                {file:'n4.jpg', link:'/belts/gifts/party-looks/children/?FL_BAN=YUDYEJJFY56'},
              ]
            },
            {
              name: 'VIEW ALL',
              url: '/belts/gifts/view-all/',
            },
            {
              name: 'GIFTING CAMPAIGN', 
              img: [
                {file:'n1.jpg', link:'/belts/gifts/gifting-campaign/?FL_BAN=SDEHFJ2536K'},
                {file:'n9.jpg', link:'/belts/gifts/gifting-campaign/?FL_BAN=XCDEHFJ2536K'},
                {file:'n2.jpg', link:'/belts/gifts/gifting-campaign/?FL_BAN=ZQDEHFJ2536K'},
              ]
            }
          ]
        },
        {
          name: 'WOMEN', 
          subcategory: [
            {
              name: 'NEW IN', 
              url: '/belts/women/new-in/',
              img: [
                {file:'n1.jpg', link:'/belts/women/new-in/?FL_BAN=SDEHFJ2536K'},
                {file:'n9.jpg', link:'/belts/women/new-in/?FL_BAN=XCDEHFJ2536K'},
                {file:'n2.jpg', link:'/belts/women/new-in/?FL_BAN=ZQDEHFJ2536K'},
              ]
            },
            {
              name: '3DJ SELECTION', 
              subcategory: [
                {name: 'View all', url: '/belts/women/triple-dj-selection/view-all/'},
                {name: 'Dresses', url: '/belts/women/triple-dj-selection/dresses/'},
                {name: 'Blazers', url: '/belts/women/triple-dj-selection/blazers/'},
                {name: 'Coats and Jackets', isHovered: false, extraname: 'NEW', url: '/belts/women/triple-dj-selection/coats-and-jackets/'},
                {name: 'Denim', url: '/belts/women/triple-dj-selection/denim/'},
                {name: 'Shirts and Tops', url: '/belts/women/triple-dj-selection/shirts-and-tops/'},
                {name: 'Sweaters and Cardigans', url: '/belts/women/triple-dj-selection/sweaters-and-cardigans/'},
                {name: 'T-Shirts and Sweatshirts', url: '/belts/women/triple-dj-selection/t-shirts-and-sweat-shirts/'},
                {name: 'Skirts', url: '/belts/women/triple-dj-selection/skirts/'},
                {name: 'Trousers and Shorts', url: '/belts/women/triple-dj-selection/trousers-and-shorts/'},
                {name: 'Underwear', url: '/belts/women/triple-dj-selection/underwear/'},
                {name: 'Beachwear', url: '/belts/women/triple-dj-selection/beachwear/'},
                {name: 'Wear It like #3DJCelebs', url: '/belts/women/triple-dj-selection/wear-it-like-3dj-celebs/'}
              ], 
              isHovered: false, extraname: 'NEW',
              img: [
                {file:'n4.jpg', link:'/belts/women/triple-dj-selection/beachwear/?FL_BAN=ASFRWE895KG'},
                {file:'n1.jpg', link:'/belts/women/triple-dj-selection/underwear/?FL_BAN=GHJDK89JJFG5B'},
              ]
            },
            {
              name: '3DJ ESSENTIAL', 
              isHovered: false, extraname: 'NEW',
              subcategory: [
                {name: 'Discover the Collection', url: '/belts/women/triple-dj-essential/new/discover-the-collection/'},
                {name: 'View all', url: '/belts/women/triple-dj-essential/new/view-all/'}
              ],
              img: [
                {file:'n2.jpg', link:'/belts/women/triple-dj-essential-new/discover-the-collection/?FL_BAN=GTTYUHFJ54HFJ'},
              ]
            },
            {
              name: 'CLOTHING', 
              subcategory: [
                {name: 'View all', url: '/belts/women/clothing/view-all/'},
                {name: 'Dresses', url: '/belts/women/clothing/dresses/'},
                {name: 'Blazers', url: '/belts/women/clothing/blazers/'},
                {name: 'Coats and Jackets', isHovered: false, extraname: 'NEW', url: '/belts/women/clothing/coats-and-jackets/'},
                {name: 'Denim', url: '/belts/women/clothing/denim/'},
                {name: 'Shirts and Tops', url: '/belts/women/clothing/shirts-and-tops/'},
                {name: 'Sweaters and Cardigans', url: '/belts/women/clothing/sweaters-and-cardigans/'},
                {name: 'T-Shirts and Sweatshirts', url: '/belts/women/clothing/t-shirts-and-sweat-shirts/'},
                {name: 'Skirts', url: '/belts/women/clothing/skirts/'},
                {name: 'Trousers and Shorts', url: '/belts/women/clothing/trousers-and-shorts/'},
                {name: 'Underwear', url: '/belts/women/clothing/underwear/'},
                {name: 'Beachwear', url: '/belts/women/clothing/beachwear/'},
                {name: 'Wear It like #3DJCelebs', url: '/belts/women/clothing/wear-it-like-3dj-celebs/'}
              ],
              img: [
                {file:'n4.jpg', link:'/belts/women/clothing/trousers-and-shorts/?FL_BAN=AQWEDF56HJKLMN7H3'},
              ]
            },
            {
              name: 'BAGS', 
              subcategory: [
                {name: 'View all', url: '/belts/women/bags/view-all/'}, 
                {name: 'Exclusive Shopper in canvas', isHovered: false, extraname: 'ECOMMERCE EXCLUSIVELY', url: '/belts/women/bags/exclusive-shopper-in-canvas/'}, 
                {name: 'Handbags', url: '/belts/women/bags/hand-bags/'}, 
                {name: 'Totes', url: '/belts/women/bags/totes/'}, 
                {name: 'Shoulder and Crossbody Bags', url: '/belts/women/bags/shoulder-and-crossbody-bags/'}, 
                {name: 'Clutches Mini and Micro Bags', url: '/belts/women/bags/clutches-mini-and-micro-bags/'}, 
                {name: 'Sicily', url: '/belts/women/bags/sicily/'}, 
                {name: '3DJ Logo Bag', url: '/belts/women/bags/triple-dj-logo-bag/'}, 
                {name: 'Devotion', url: '/belts/women/bas/devotion/'}, 
                {name: 'DJ Girls', url: '/belts/women/bags/dj-girls/'}, 
                {name: '3.5', url: '/belts/women/bags/three-and-half/'}, 
                {name: '3DJ Box', url: '/belts/women/bags/triple-dj-box/'}, 
                {name: '#3DJLeo Collection', url: '/belts/women/bags/hash-triple-dj-leo-collection/'}, 
              ],
              img: [
                {file:'n2.jpg', link:'/belts/women/bags/triple-dj-logo-bag/?FL_BAN=IHFJF78837JK'},
              ]
            },
            {
              name: 'SHOES', 
              subcategory: [
                {name: 'View all', url:'/belts/women/shoes/view-all/'},
                {name: 'Pumps and Slingback', url:'/belts/women/shoes/pumps-and-slingback/'},
                {name: 'Boots and Booties', url:'/belts/women/shoes/boots-and-booties/'},
                {name: 'Sneakers', url:'/belts/women/shoes/sneakers/'},
                {name: 'belts and Wedges', url:'/belts/women/shoes/belts-and-wedges/'},
                {name: 'Slides and Mules', url:'/belts/women/shoes/slides-and-mules/'},
                {name: 'Flat', url:'/belts/women/shoes/flat/'},
                {name: 'Rainbow Lace Collection', url:'/belts/women/shoes/rainboy-lace-collection/'},
                {name: '3.5 Collection', url:'/belts/women/shoes/three-and-half-collection/'},
                {name: '#3DJLIMITED Sneakers', url:'/belts/women/shoes/hash-triple-dj-limited-sneakers/'},
              ],
              img: [
                {file:'n9.jpg', link:'/belts/women/shoes/hash-triple-dj-limited-sneakers/?FL_BAN=AV78ERTFJGKK8'},
              ]
            },
            {
              name: 'ACCESSORIES', 
              subcategory: [
                {name: 'View all', url: '/belts/women/accessories/view-all/'},
                {name: 'Bijoux', url: '/belts/women/accessories/bijoux/'},
                {name: 'Scarves and Silks', url: '/belts/women/accessories/scarves-and-silks/'},
                {name: 'Wallets and Small Leather Goods', url: '/belts/women/accessories/wallets-and-small-leather-goods/'},
                {name: 'Belts', url: '/belts/women/accessories/belts/'},
                {name: 'Hats and Gloves', url: '/belts/women/accessories/hats-and-gloves/'},
                {name: 'Socks', url: '/belts/women/accessories/socks/'},
                {name: 'Technology', url: '/belts/women/accessories/technology/'}
              ],
              img: [
                {file:'n7.jpg', link:'/belts/women/accessories/technology/?FL_BAN=BNM7UFHDJVVBDH'},
              ]
            },
            {
              name: 'SUNGLASSES', 
              subcategory: [
                {name: 'View all', url: '/belts/women/sunglasses/view-all/'},
                {name: 'New Arrivals', url: '/belts/women/sunglasses/new-arrivals/'},
                {name: 'Icons', url: '/belts/women/sunglasses/icons/'},
                {name: 'ADV Campaign', isHovered: false, extraname: 'UPDATED', url: '/belts/women/sunglasses/adv-campaign/'}
              ],
              img: [
                {file:'n6.jpg', link:'/belts/women/sunglasses/icons/?FL_BAN=BNWQGHD89JGKHK7'},
              ]
            },
            {
              name: 'WATCHES & JEWELRY', 
              subcategory: [
                {name: 'View all', url: '/belts/women/watches-and-jewelry/view-all/'},
                {name: 'Discover the collection', url: '/belts/women/watches-and-jewelry/discover-the-collection/'},
                {name: 'Earrings', url: '/belts/women/watches-and-jewelry/earrings/'},
                {name: 'Rings', url: '/belts/women/watches-and-jewelry/rings/'},
                {name: 'Necklaces', url: '/belts/women/watches-and-jewelry/necklaces/'},
                {name: 'Charms', url: '/belts/women/watches-and-jewelry/charms/'},
                {name: 'Bracelets', url: '/belts/women/watches-and-jewelry/bracelets/'},
                {name: 'Watches & Straps', url: '/belts/women/watches-and-jewelry/watches-and-straps/'},
                {name: 'Devotion Collection', url: '/belts/women/watches-and-jewelry/devotion-collection/'},
                {name: 'DNA Collection', url: '/belts/women/watches-and-jewelry/dna-collection/'},
                {name: 'Rainbow Collection', url: '/belts/women/watches-and-jewelry/rainbow-collection/'}
              ],
              img: [
                {file:'n4.jpg', link:'/belts/women/watches-and-jewelry/rainbow-collection/?FL_BAN=ERJF78FJJGK45DS'},
              ]
            },
            {
              name: 'LIMITED EDITION', 
              subcategory: [
                {name: 'View All', url: '/belts/women/limited-edition/view-all/'},
                {name: 'Portofino Custom', url: '/belts/women/limited-edition/portofino-custom/'},
                {name: 'Daymaster Custom', url: '/belts/women/limited-edition/daymaster-custom/'},
                {name: 'Personalize', url: '/belts/women/limited-edition/personalize/'}
              ],
              img: [
                {file:'n3.jpg', link:'/belts/women/limited-edition/personalize/?FL_BAN=VBCXSGD77FDG11'},
              ]
            }
          ]
        },
        {
          name: 'MEN', 
          subcategory: [
            {
              name: 'NEW IN', 
              img: [
                {file:'n4.jpg', link:'/belts/men/new-in/?FL_BAN=XZCVSDGDGF78HHJ'},
                {file:'n3.jpg', link:'/belts/men/new-in/?FL_BAN=XZCVNMDDGDGF78HHJ'},
                {file:'n5.jpg', link:'/belts/men/new-in/?FL_BAN=XZCVSVVCADGF78HHJ'},
              ]
            },
            {
              name: '3DJ SELECTION', 
              subcategory: [
                {name: 'View all', url: '/belts/men/triple-dj-selection/view-all/'},
                {name: 'Dresses', url: '/belts/men/triple-dj-selection/dresses/'},
                {name: 'Blazers', url: '/belts/men/triple-dj-selection/blazers/'},
                {name: 'Coats and Jackets', isHovered: false, extraname: 'NEW', url: '/belts/men/triple-dj-selection/coats-and-jackets/'},
                {name: 'Denim', url: '/belts/men/triple-dj-selection/denim/'},
                {name: 'Shirts and Tops', url: '/belts/men/triple-dj-selection/shirts-and-tops/'},
                {name: 'Sweaters and Cardigans', url: '/belts/men/triple-dj-selection/sweaters-and-cardigans/'},
                {name: 'T-Shirts and Sweatshirts', url: '/belts/men/triple-dj-selection/t-shirts-and-sweat-shirts/'},
                {name: 'Skirts', url: '/belts/men/triple-dj-selection/skirts/'},
                {name: 'Trousers and Shorts', url: '/belts/men/triple-dj-selection/trousers-and-shorts/'},
                {name: 'Underwear', url: '/belts/men/triple-dj-selection/underwear/'},
                {name: 'Beachwear', url: '/belts/men/triple-dj-selection/beachwear/'},
                {name: 'Wear It like #3DJCelebs', url: '/belts/men/triple-dj-selection/wear-it-like-3dj-celebs/'}
              ], 
              isHovered: false, extraname: 'NEW',
              img: [
                {file:'n4.jpg', link:'/belts/men/triple-dj-selection/beachwear/?FL_BAN=ASFRWE895KG'},
                {file:'n1.jpg', link:'/belts/men/triple-dj-selection/underwear/?FL_BAN=GHJDK89JJFG5B'},
              ]
            },
            {
              name: '3DJ ESSENTIAL', 
              isHovered: false, extraname: 'NEW',
              subcategory: [
                {name: 'Discover the Collection', url: '/belts/men/triple-dj-essential/new/discover-the-collection/'},
                {name: 'View all', url: '/belts/men/triple-dj-essential/new/view-all/'}
              ],
              img: [
                {file:'n2.jpg', link:'/belts/men/triple-dj-essential/new/discover-the-collection/?FL_BAN=GTTYUHFJ54HFJ'},
              ]
            },
            {
              name: 'CLOTHING', 
              subcategory: [
                {name: 'View all', url: '/belts/men/clothing/view-all/'},
                {name: 'Dresses', url: '/belts/men/clothing/dresses/'},
                {name: 'Blazers', url: '/belts/men/clothing/blazers/'},
                {name: 'Coats and Jackets', isHovered: false, extraname: 'NEW', url: '/belts/men/clothing/coats-and-jackets/'},
                {name: 'Denim', url: '/belts/men/clothing/denim/'},
                {name: 'Shirts and Tops', url: '/belts/men/clothing/shirts-and-tops/'},
                {name: 'Sweaters and Cardigans', url: '/belts/men/clothing/sweaters-and-cardigans/'},
                {name: 'T-Shirts and Sweatshirts', url: '/belts/men/clothing/t-shirts-and-sweat-shirts/'},
                {name: 'Skirts', url: '/belts/men/clothing/skirts/'},
                {name: 'Trousers and Shorts', url: '/belts/men/clothing/trousers-and-shorts/'},
                {name: 'Underwear', url: '/belts/men/clothing/underwear/'},
                {name: 'Beachwear', url: '/belts/men/clothing/beachwear/'},
                {name: 'Wear It like #3DJCelebs', url: '/belts/men/clothing/wear-it-like-3dj-celebs/'}
              ],
              img: [
                {file:'n4.jpg', link:'/belts/men/clothing/trousers-and-shorts/?FL_BAN=AQWEDF56HJKLMN7H3'},
              ]
            },
            {
              name: 'BAGS', 
              subcategory: [
                {name: 'View all', url: '/belts/men/bags/view-all/'}, 
                {name: 'Exclusive Shopper in canvas', isHovered: false, extraname: 'ECOMMERCE EXCLUSIVELY', url: '/belts/men/bags/exclusive-shopper-in-canvas/'}, 
                {name: 'Handbags', url: '/belts/men/bags/hand-bags/'}, 
                {name: 'Totes', url: '/belts/men/bags/totes/'}, 
                {name: 'Shoulder and Crossbody Bags', url: '/belts/men/bags/shoulder-and-crossbody-bags/'}, 
                {name: 'Clutches Mini and Micro Bags', url: '/belts/men/bags/clutches-mini-and-micro-bags/'}, 
                {name: 'Sicily', url: '/belts/men/bags/sicily/'}, 
                {name: '3DJ Logo Bag', url: '/belts/men/bags/triple-dj-logo-bag/'}, 
                {name: 'Devotion', url: '/belts/men/bas/devotion/'}, 
                {name: 'DJ Girls', url: '/belts/men/bags/dj-girls/'}, 
                {name: '3.5', url: '/belts/men/bags/three-and-half/'}, 
                {name: '3DJ Box', url: '/belts/men/bags/triple-dj-box/'}, 
                {name: '#3DJLeo Collection', url: '/belts/men/bags/hash-triple-dj-leo-collection/'}, 
              ],
              img: [
                {file:'n2.jpg', link:'/belts/men/bags/triple-dj-logo-bag/?FL_BAN=IHFJF78837JK'},
              ]
            },
            {
              name: 'SHOES', 
              subcategory: [
                {name: 'View all', url:'/belts/men/shoes/view-all/'},
                {name: 'Pumps and Slingback', url:'/belts/men/shoes/pumps-and-slingback/'},
                {name: 'Boots and Booties', url:'/belts/men/shoes/boots-and-booties/'},
                {name: 'Sneakers', url:'/belts/men/shoes/sneakers/'},
                {name: 'belts and Wedges', url:'/belts/men/shoes/belts-and-wedges/'},
                {name: 'Slides and Mules', url:'/belts/men/shoes/slides-and-mules/'},
                {name: 'Flat', url:'/belts/men/shoes/flat/'},
                {name: 'Rainbow Lace Collection', url:'/belts/men/shoes/rainboy-lace-collection/'},
                {name: '3.5 Collection', url:'/belts/men/shoes/three-and-half-collection/'},
                {name: '#3DJLIMITED Sneakers', url:'/belts/men/shoes/hash-triple-dj-limited-sneakers/'},
              ],
              img: [
                {file:'n9.jpg', link:'/belts/men/shoes/hash-triple-dj-limited-sneakers/?FL_BAN=AV78ERTFJGKK8'},
              ]
            },
            {
              name: 'ACCESSORIES', 
              subcategory: [
                {name: 'View all', url: '/belts/men/accessories/view-all/'},
                {name: 'Bijoux', url: '/belts/men/accessories/bijoux/'},
                {name: 'Scarves and Silks', url: '/belts/men/accessories/scarves-and-silks/'},
                {name: 'Wallets and Small Leather Goods', url: '/belts/men/accessories/wallets-and-small-leather-goods/'},
                {name: 'Belts', url: '/belts/men/accessories/belts/'},
                {name: 'Hats and Gloves', url: '/belts/men/accessories/hats-and-gloves/'},
                {name: 'Socks', url: '/belts/men/accessories/socks/'},
                {name: 'Technology', url: '/belts/men/accessories/technology/'}
              ],
              img: [
                {file:'n7.jpg', link:'/belts/men/accessories/technology/?FL_BAN=BNM7UFHDJVVBDH'},
              ]
            },
            {
              name: 'SUNGLASSES', 
              subcategory: [
                {name: 'View all', url: '/belts/men/sunglasses/view-all/'},
                {name: 'New Arrivals', url: '/belts/men/sunglasses/new-arrivals/'},
                {name: 'Icons', url: '/belts/men/sunglasses/icons/'},
                {name: 'ADV Campaign', isHovered: false, extraname: 'UPDATED', url: '/belts/men/sunglasses/adv-campaign/'}
              ],
              img: [
                {file:'n6.jpg', link:'/belts/men/sunglasses/icons/?FL_BAN=BNWQGHD89JGKHK7'},
              ]
            },
            {
              name: 'WATCHES & JEWELRY', 
              subcategory: [
                {name: 'View all', url: '/belts/men/watches-and-jewelry/view-all/'},
                {name: 'Discover the collection', url: '/belts/men/watches-and-jewelry/discover-the-collection/'},
                {name: 'Earrings', url: '/belts/men/watches-and-jewelry/earrings/'},
                {name: 'Rings', url: '/belts/men/watches-and-jewelry/rings/'},
                {name: 'Necklaces', url: '/belts/men/watches-and-jewelry/necklaces/'},
                {name: 'Charms', url: '/belts/men/watches-and-jewelry/charms/'},
                {name: 'Bracelets', url: '/belts/men/watches-and-jewelry/bracelets/'},
                {name: 'Watches & Straps', url: '/belts/men/watches-and-jewelry/watches-and-straps/'},
                {name: 'Devotion Collection', url: '/belts/men/watches-and-jewelry/devotion-collection/'},
                {name: 'DNA Collection', url: '/belts/men/watches-and-jewelry/dna-collection/'},
                {name: 'Rainbow Collection', url: '/belts/men/watches-and-jewelry/rainbow-collection/'}
              ],
              img: [
                {file:'n4.jpg', link:'/belts/men/watches-and-jewelry/rainbow-collection/?FL_BAN=ERJF78FJJGK45DS'},
              ]
            },
            {
              name: 'LIMITED EDITION', 
              subcategory: [
                {name: 'View All', url: '/belts/men/limited-edition/view-all/'},
                {name: 'Portofino Custom', url: '/belts/men/limited-edition/portofino-custom/'},
                {name: 'Daymaster Custom', url: '/belts/men/limited-edition/daymaster-custom/'},
                {name: 'Personalize', url: '/belts/men/limited-edition/personalize/'}
              ],
              img: [
                {file:'n3.jpg', link:'/belts/men/limited-edition/personalize/?FL_BAN=VBCXSGD77FDG11'},
              ]
            }
          ]
        },
        {
          name: '3DJVIB3', url: '/belts/triple-dj-vib-3/'
        },
        {
          name: 'CHILDREN', 
          subcategory: [
            {
              name: 'NEW IN', 
              subcategory: [
                {name: 'New Arrivals Girl', url: '/belts/children/new-in/new-arrivals-girl/'},
                {name: 'New Arrivals Boy', url: '/belts/children/new-in/new-arrival-boy/'},
                {name: 'Most Loved Girl', url: '/belts/children/new-in/most-loved-girl/'},
                {name: 'Most Loved Boy', url: '/belts/children/new-in/most-loved-boy/'},
              ],
              img: [
                {file:'n4.jpg', link:'/belts/children/new-in/most-loved-boy/?FL_BAN=YYTRE8977DHF'},
                {file:'n2.jpg', link:'/belts/children/new-in/most-loved-girl/?FL_BAN=VCXXHF89DHFF'},
              ]
            },
            {
              name: 'GIRL (2-13 YEARS)', 
              subcategory: [
                {name: 'View all', url: '/belts/children/girl-2-13-years/view-all/'},
                {name: 'Dresses', url: '/belts/children/girl-2-13-years/dresses/'},
                {name: 'Coats and Jackets', url: '/belts/children/girl-2-13-years/coats-and-jackets/'},
                {name: 'T-Shirts and Sweatshirts', url: '/belts/children/girl-2-13-years/t-shirts-and-sweatshirts/'},
                {name: 'Shirts and Tops', url: '/belts/children/girl-2-13-years/shirts-and-tops/'},
                {name: 'Sweaters', url: '/belts/children/girl-2-13-years/sweaters/'},
                {name: 'Trousers and Skirts', url: '/belts/children/girl-2-13-years/trousers-and-skirts/'},
                {name: 'Beachwear', url: '/belts/children/girl-2-13-years/beachwear/'},
                {name: 'Accessories', url: '/belts/children/girl-2-13-years/accessories/'},
                {name: 'Shoes (24-38)', url: '/belts/children/girl-2-13-years/shoes-24-to-38/'},
                {name: 'Jewelry', url: '/belts/children/girl-2-13-years/jewelry/'}
              ],
              img: [
                {file:'c1.jpg', link:'/belts/children/girl-2-13-years/jewelry/?FL_BAN=FJJJO90OJD'},
                {file:'c2.jpg', link:'/belts/children/girl-2-13-years/accessories/?FL_BAN=INFM90GLLLS'},
              ]
            },
            {
              name: 'BOY (2-13 YEARS)', 
              subcategory: [
                {name: 'View all', url: '/belts/children/boy-2-13-years/view-all/'},
                {name: 'Dresses', url: '/belts/children/boy-2-13-years/dresses/'},
                {name: 'Coats and Jackets', url: '/belts/children/boy-2-13-years/coats-and-jackets/'},
                {name: 'T-Shirts and Sweatshirts', url: '/belts/children/boy-2-13-years/t-shirts-and-sweatshirts/'},
                {name: 'Shirts and Tops', url: '/belts/children/boy-2-13-years/shirts-and-tops/'},
                {name: 'Sweaters', url: '/belts/children/boy-2-13-years/sweaters/'},
                {name: 'Trousers and Skirts', url: '/belts/children/boy-2-13-years/trousers-and-skirts/'},
                {name: 'Beachwear', url: '/belts/children/boy-2-13-years/beachwear/'},
                {name: 'Accessories', url: '/belts/children/boy-2-13-years/accessories/'},
                {name: 'Shoes (24-38)', url: '/belts/children/boy-2-13-years/shoes-24-to-38/'},
                {name: 'Jewelry', url: '/belts/children/boy-2-13-years/jewelry/'}
              ],
              img: [
                {file:'c1.jpg', link:'/belts/children/boy-2-13-years/jewelry/?FL_BAN=FJJJO90OJD'},
                {file:'c2.jpg', link:'/belts/children/boy-2-13-years/accessories/?FL_BAN=INFM90GLLLS'},
              ]
            },
            {
              name: 'MINI ME', 
              subcategory: [
                {name: 'View all', url: '/belts/children/mini-me/view-all/'},
                {name: 'Dresses', url: '/belts/children/mini-me/dresses/'},
                {name: 'Coats and Jackets', url: '/belts/children/mini-me/coats-and-jackets/'},
                {name: 'T-Shirts and Sweatshirts', url: '/belts/children/mini-me/t-shirts-and-sweatshirts/'},
                {name: 'Shirts and Tops', url: '/belts/children/mini-me/shirts-and-tops/'},
                {name: 'Sweaters', url: '/belts/children/mini-me/sweaters/'},
                {name: 'Trousers and Skirts', url: '/belts/children/mini-me/trousers-and-skirts/'},
                {name: 'Beachwear', url: '/belts/children/mini-me/beachwear/'},
                {name: 'Accessories', url: '/belts/children/mini-me/accessories/'},
                {name: 'Shoes (24-38)', url: '/belts/children/mini-me/shoes-24-to-38/'},
                {name: 'Jewelry', url: '/belts/children/mini-me/jewelry/'}
              ],
              img: [
                {file:'n1.jpg', link:'/belts/children/mini-me/jewelry/?FL_BAN=IUDH009FJ45D'},
                {file:'n2.jpg', link:'/belts/children/mini-me/sweaters/?FL_BAN=VVBMMMN7866'},
              ]
            },
            {
              name: 'NEWBORN (0-12 MONTHS)', 
              subcategory: [
                {name: 'View all', url: '/belts/children/new-born-0-to-12-months/view-all/'},
                {name: 'Dresses', url: '/belts/children/new-born-0-to-12-months/dresses/'},
                {name: 'Coats and Jackets', url: '/belts/children/new-born-0-to-12-months/coats-and-jackets/'},
                {name: 'T-Shirts and Sweatshirts', url: '/belts/children/new-born-0-to-12-months/t-shirts-and-sweatshirts/'},
                {name: 'Shirts and Tops', url: '/belts/children/new-born-0-to-12-months/shirts-and-tops/'},
                {name: 'Sweaters', url: '/belts/children/new-born-0-to-12-months/sweaters/'},
                {name: 'Trousers and Skirts', url: '/belts/children/new-born-0-to-12-months/trousers-and-skirts/'},
                {name: 'Beachwear', url: '/belts/children/new-born-0-to-12-months/beachwear/'},
                {name: 'Accessories', url: '/belts/children/new-born-0-to-12-months/accessories/'},
                {name: 'Shoes (24-38)', url: '/belts/children/new-born-0-to-12-months/shoes-24-to-38/'},
                {name: 'Jewelry', url: '/belts/children/new-born-0-to-12-months/jewelry/'}
              ],
              img: [
                {file:'n1.jpg', link:'/belts/children/new-born-0-to-12-months/dresses/?FL_BAN=TYYR89JFJ21I'},
                {file:'n3.jpg', link:'/belts/children/new-born-0-to-12-months/trousers-and-skirts/?FL_BAN=CCV84DEEASDX6'},
              ]
            },
            {
              name: 'NEWBORN GIRL (0-30 MONTHS)', 
              subcategory: [
                {name: 'View all', url: '/belts/children/new-born-girl-0-to-30-months/view-all/'},
                {name: 'Dresses', url: '/belts/children/new-born-girl-0-to-30-months/dresses/'},
                {name: 'Coats and Jackets', url: '/belts/children/new-born-girl-0-to-30-months/coats-and-jackets/'},
                {name: 'T-Shirts and Sweatshirts', url: '/belts/children/new-born-girl-0-to-30-months/t-shirts-and-sweatshirts/'},
                {name: 'Shirts and Tops', url: '/belts/children/new-born-girl-0-to-30-months/shirts-and-tops/'},
                {name: 'Sweaters', url: '/belts/children/new-born-girl-0-to-30-months/sweaters/'},
                {name: 'Trousers and Skirts', url: '/belts/children/new-born-girl-0-to-30-months/trousers-and-skirts/'},
                {name: 'Beachwear', url: '/belts/children/new-born-girl-0-to-30-months/beachwear/'},
                {name: 'Accessories', url: '/belts/children/new-born-girl-0-to-30-months/accessories/'},
                {name: 'Shoes (24-38)', url: '/belts/children/new-born-girl-0-to-30-months/shoes-24-to-38/'},
                {name: 'Jewelry', url: '/belts/children/new-born-girl-0-to-30-months/jewelry/'}
              ],
              img: [
                {file:'c4.jpg', link:'/belts/children/new-born-girl-0-to-30-months/jewelry/?FL_BAN=CCZZXASS67'},
              ]
            },
            {
              name: 'NEWBORN BOY (0-30 MONTHS)', 
              subcategory: [
                {name: 'View all', url: '/belts/children/new-born-boy-0-to-30-months/view-all/'},
                {name: 'Dresses', url: '/belts/children/new-born-boy-0-to-30-months/dresses/'},
                {name: 'Coats and Jackets', url: '/belts/children/new-born-boy-0-to-30-months/coats-and-jackets/'},
                {name: 'T-Shirts and Sweatshirts', url: '/belts/children/new-born-boy-0-to-30-months/t-shirts-and-sweatshirts/'},
                {name: 'Shirts and Tops', url: '/belts/children/new-born-boy-0-to-30-months/shirts-and-tops/'},
                {name: 'Sweaters', url: '/belts/children/new-born-boy-0-to-30-months/sweaters/'},
                {name: 'Trousers and Skirts', url: '/belts/children/new-born-boy-0-to-30-months/trousers-and-skirts/'},
                {name: 'Beachwear', url: '/belts/children/new-born-boy-0-to-30-months/beachwear/'},
                {name: 'Accessories', url: '/belts/children/new-born-boy-0-to-30-months/accessories/'},
                {name: 'Shoes (24-38)', url: '/belts/children/new-born-boy-0-to-30-months/shoes-24-to-38/'},
                {name: 'Jewelry', url: '/belts/children/new-born-boy-0-to-30-months/jewelry/'}
              ],
              img: [
                {file:'c4.jpg', link:'/belts/children/new-born-boy-0-to-30-months/sweaters/?FL_BAN=HHJJFHHCCXX11253'},
              ]
            },
          ]
        },
      ],
      img: 'n1.jpg'
    },
    {url: '/bags/', name: 'Bags', img: 'n4.jpg'},
    {url: '/jackets/', name: 'Jacket', img: 'n5.jpg'},
    {url: '/hats/', name: 'Hats', img: 'n6.jpg'},
    {url: '/trousers/', name: 'Trousers', img: 'n7.jpg'},
    {
      url: '/skirts/', 
      name: 'Skirts', 
      subcategory: [
        {
          name: 'Gifts', 
          subcategory: [
            {
              name: 'WOMEN', 
              subcategory:[
                {name: 'View all', url: '/skirts/gifts/women/view-all/'},
                {name: 'Small gifts ideas', url: '/skirts/gifts/women/small-gifts-ideas/'},
                {name: 'Exclusive gifts', url: '/skirts/gifts/women/exclusive-gifts/'},
                {name: 'Personalize', url: '/skirts/gifts/women/personalize/'},
                {name: 'Lifestyle gifts', url: '/skirts/gifts/women/lifestyle-gifts/'},
                {name: 'Gift Card', url: '/skirts/gifts/women/gift-card/'}
              ],
              img: [
                {file:'n4.jpg', link:'/skirts/gifts/women/personalize/?FL_BAN=F987AKJDHF89'},
                {file:'n2.jpg', link:'/skirts/gifts/women/lifestyle-gifts/?FL_BAN=uytrew8UYT'},
              ]
            },
            {
              name: 'MEN', 
              subcategory: [
                {name: 'View all', url: '/skirts/gifts/men/view-all/'},
                {name: 'Small gifts ideas', url: '/skirts/gifts/men/small-gifts-idea/'},
                {name: 'Exclusive gifts', url: '/skirts/gifts/men/exclusive-gifts/'},
                {name: 'Personalize', url: '/skirts/gifts/men/personalize/'},
                {name: 'Lifestyle gifts', url: '/skirts/gifts/men/lifestyle-gifts/'},
                {name: 'Gift Card', url: '/skirts/gifts/men/gift-card/'}
              ],
              img: [
                {file:'n4.jpg', link:'/skirts/gifts/men/personalize/?FL_BAN=UI89FUIYRSE'}
              ]
            },
            {
              name: 'CHILDREN', 
              subcategory: [
                {name: 'View all', url: '/skirts/gifts/children/view-all/'},
                {name: 'Girl', url: '/skirts/gifts/children/girl/'},
                {name: 'Boy', url: '/skirts/gifts/children/boy/'},
                {name: 'Gift Set', url: '/skirts/gifts/children/gift-set/'}
              ],
              img: [
                {file:'n2.jpg', link:'/skirts/gifts/children/boy/?FL_BAN=KLKDJJF090F'}
              ]
            },
            {
              name: 'PARTY LOOKS', 
              subcategory: [
                {name: 'Women', url: '/skirts/gifts/party-looks/women/'},
                {name: 'Men', url: '/skirts/gifts/party-looks/men/'},
                {name: 'Children', url: '/skirts/gifts/party-looks/children/'}
              ],
              img: [
                {file:'n4.jpg', link:'/skirts/gifts/party-looks/children/?FL_BAN=YUDYEJJFY56'},
              ]
            },
            {
              name: 'VIEW ALL',
              img: [
                {file:'n6.jpg', link:'/skirts/gifts/view-all/?FL_BAN=NMDHFJF89DJF'},
                {file:'n8.jpg', link:'/skirts/gifts/view-all/?FL_BAN=NCZDHFJF89DJF'},
              ]
            },
            {
              name: 'GIFTING CAMPAIGN', 
              url: '/skirts/gifts/gifting-campaign/',
            }
          ]
        },
        {
          name: 'WOMEN', 
          subcategory: [
            {
              name: 'NEW IN', 
              img: [
                {file:'n4.jpg', link:'/skirts/women/new-in/?FL_BAN=XZCVSDGDGF78HHJ'},
                {file:'n3.jpg', link:'/skirts/women/new-in/?FL_BAN=XZCVNMDDGDGF78HHJ'},
                {file:'n5.jpg', link:'/skirts/women/new-in/?FL_BAN=XZCVSVVCADGF78HHJ'},
              ]
            },
            {
              name: '3DJ SELECTION', 
              subcategory: [
                {name: 'View all', url: '/skirts/women/triple-dj-selection/view-all/'},
                {name: 'Dresses', url: '/skirts/women/triple-dj-selection/dresses/'},
                {name: 'Blazers', url: '/skirts/women/triple-dj-selection/blazers/'},
                {name: 'Coats and Jackets', isHovered: false, extraname: 'NEW', url: '/skirts/women/triple-dj-selection/coats-and-jackets/'},
                {name: 'Denim', url: '/skirts/women/triple-dj-selection/denim/'},
                {name: 'Shirts and Tops', url: '/skirts/women/triple-dj-selection/shirts-and-tops/'},
                {name: 'Sweaters and Cardigans', url: '/skirts/women/triple-dj-selection/sweaters-and-cardigans/'},
                {name: 'T-Shirts and Sweatshirts', url: '/skirts/women/triple-dj-selection/t-shirts-and-sweat-shirts/'},
                {name: 'Skirts', url: '/skirts/women/triple-dj-selection/skirts/'},
                {name: 'Trousers and Shorts', url: '/skirts/women/triple-dj-selection/trousers-and-shorts/'},
                {name: 'Underwear', url: '/skirts/women/triple-dj-selection/underwear/'},
                {name: 'Beachwear', url: '/skirts/women/triple-dj-selection/beachwear/'},
                {name: 'Wear It like #3DJCelebs', url: '/skirts/women/triple-dj-selection/wear-it-like-3dj-celebs/'}
              ], 
              isHovered: false, extraname: 'NEW',
              img: [
                {file:'n4.jpg', link:'/skirts/women/triple-dj-selection/beachwear/?FL_BAN=ASFRWE895KG'},
                {file:'n1.jpg', link:'/skirts/women/triple-dj-selection/underwear/?FL_BAN=GHJDK89JJFG5B'},
              ]
            },
            {
              name: '3DJ ESSENTIAL', 
              isHovered: false, 
              extraname: 'NEW',
              subcategory: [
                {name: 'Discover the Collection', url: '/skirts/women/triple-dj-essential/new/discover-the-collection/'},
                {name: 'View all', url: '/skirts/women/triple-dj-essential/new/view-all/'}
              ],
              img: [
                {file:'n2.jpg', link:'/skirts/women/triple-dj-essential/new/discover-the-collection/?FL_BAN=GTTYXUHFJ54HFJ'},
              ]
            },
            {
              name: 'CLOTHING', 
              subcategory: [
                {name: 'View all', url: '/skirts/women/clothing/view-all/'},
                {name: 'Dresses', url: '/skirts/women/clothing/dresses/'},
                {name: 'Blazers', url: '/skirts/women/clothing/blazers/'},
                {name: 'Coats and Jackets', isHovered: false, extraname: 'NEW', url: '/skirts/women/clothing/coats-and-jackets/'},
                {name: 'Denim', url: '/skirts/women/clothing/denim/'},
                {name: 'Shirts and Tops', url: '/skirts/women/clothing/shirts-and-tops/'},
                {name: 'Sweaters and Cardigans', url: '/skirts/women/clothing/sweaters-and-cardigans/'},
                {name: 'T-Shirts and Sweatshirts', url: '/skirts/women/clothing/t-shirts-and-sweat-shirts/'},
                {name: 'Skirts', url: '/skirts/women/clothing/skirts/'},
                {name: 'Trousers and Shorts', url: '/skirts/women/clothing/trousers-and-shorts/'},
                {name: 'Underwear', url: '/skirts/women/clothing/underwear/'},
                {name: 'Beachwear', url: '/skirts/women/clothing/beachwear/'},
                {name: 'Wear It like #3DJCelebs', url: '/skirts/women/clothing/wear-it-like-3dj-celebs/'}
              ],
              img: [
                {file:'n4.jpg', link:'/skirts/women/clothing/trousers-and-shorts/?FL_BAN=AQWEDF56HJKLMN7H3'},
              ]
            },
            {
              name: 'BAGS', 
              subcategory: [
                {name: 'View all', url: '/skirts/women/bags/view-all/'}, 
                {name: 'Exclusive Shopper in canvas', isHovered: false, extraname: 'ECOMMERCE EXCLUSIVELY', url: '/skirts/women/bags/exclusive-shopper-in-canvas/'}, 
                {name: 'Handbags', url: '/skirts/women/bags/hand-bags/'}, 
                {name: 'Totes', url: '/skirts/women/bags/totes/'}, 
                {name: 'Shoulder and Crossbody Bags', url: '/skirts/women/bags/shoulder-and-crossbody-bags/'}, 
                {name: 'Clutches Mini and Micro Bags', url: '/skirts/women/bags/clutches-mini-and-micro-bags/'}, 
                {name: 'Sicily', url: '/skirts/women/bags/sicily/'}, 
                {name: '3DJ Logo Bag', url: '/skirts/women/bags/triple-dj-logo-bag/'}, 
                {name: 'Devotion', url: '/skirts/women/bas/devotion/'}, 
                {name: 'DJ Girls', url: '/skirts/women/bags/dj-girls/'}, 
                {name: '3.5', url: '/skirts/women/bags/three-and-half/'}, 
                {name: '3DJ Box', url: '/skirts/women/bags/triple-dj-box/'}, 
                {name: '#3DJLeo Collection', url: '/skirts/women/bags/hash-triple-dj-leo-collection/'}, 
              ],
              img: [
                {file:'n2.jpg', link:'/skirts/women/bags/triple-dj-logo-bag/?FL_BAN=IHFJF78837JK'},
              ]
            },
            {
              name: 'SHOES', 
              subcategory: [
                {name: 'View all', url:'/skirts/women/shoes/view-all/'},
                {name: 'Pumps and Slingback', url:'/skirts/women/shoes/pumps-and-slingback/'},
                {name: 'Boots and Booties', url:'/skirts/women/shoes/boots-and-booties/'},
                {name: 'Sneakers', url:'/skirts/women/shoes/sneakers/'},
                {name: 'skirts and Wedges', url:'/skirts/women/shoes/skirts-and-wedges/'},
                {name: 'Slides and Mules', url:'/skirts/women/shoes/slides-and-mules/'},
                {name: 'Flat', url:'/skirts/women/shoes/flat/'},
                {name: 'Rainbow Lace Collection', url:'/skirts/women/shoes/rainboy-lace-collection/'},
                {name: '3.5 Collection', url:'/skirts/women/shoes/three-and-half-collection/'},
                {name: '#3DJLIMITED Sneakers', url:'/skirts/women/shoes/hash-triple-dj-limited-sneakers/'},
              ],
              img: [
                {file:'n9.jpg', link:'/skirts/women/shoes/hash-triple-dj-limited-sneakers/?FL_BAN=AV78ERTFJGKK8'},
              ]
            },
            {
              name: 'ACCESSORIES', 
              subcategory: [
                {name: 'View all', url: '/skirts/women/accessories/view-all/'},
                {name: 'Bijoux', url: '/skirts/women/accessories/bijoux/'},
                {name: 'Scarves and Silks', url: '/skirts/women/accessories/scarves-and-silks/'},
                {name: 'Wallets and Small Leather Goods', url: '/skirts/women/accessories/wallets-and-small-leather-goods/'},
                {name: 'skirts', url: '/skirts/women/accessories/skirts/'},
                {name: 'Hats and Gloves', url: '/skirts/women/accessories/hats-and-gloves/'},
                {name: 'Socks', url: '/skirts/women/accessories/socks/'},
                {name: 'Technology', url: '/skirts/women/accessories/technology/'}
              ],
              img: [
                {file:'n7.jpg', link:'/skirts/women/accessories/technology/?FL_BAN=BNM7UFHDJVVBDH'},
              ]
            },
            {
              name: 'SUNGLASSES', 
              subcategory: [
                {name: 'View all', url: '/skirts/women/sunglasses/view-all/'},
                {name: 'New Arrivals', url: '/skirts/women/sunglasses/new-arrivals/'},
                {name: 'Icons', url: '/skirts/women/sunglasses/icons/'},
                {name: 'ADV Campaign', isHovered: false, extraname: 'UPDATED', url: '/skirts/women/sunglasses/adv-campaign/'}
              ],
              img: [
                {file:'n6.jpg', link:'/skirts/women/sunglasses/icons/?FL_BAN=BNWQGHD89JGKHK7'},
              ]
            },
            {
              name: 'WATCHES & JEWELRY', 
              subcategory: [
                {name: 'View all', url: '/skirts/women/watches-and-jewelry/view-all/'},
                {name: 'Discover the collection', url: '/skirts/women/watches-and-jewelry/discover-the-collection/'},
                {name: 'Earrings', url: '/skirts/women/watches-and-jewelry/earrings/'},
                {name: 'Rings', url: '/skirts/women/watches-and-jewelry/rings/'},
                {name: 'Necklaces', url: '/skirts/women/watches-and-jewelry/necklaces/'},
                {name: 'Charms', url: '/skirts/women/watches-and-jewelry/charms/'},
                {name: 'Bracelets', url: '/skirts/women/watches-and-jewelry/bracelets/'},
                {name: 'Watches & Straps', url: '/skirts/women/watches-and-jewelry/watches-and-straps/'},
                {name: 'Devotion Collection', url: '/skirts/women/watches-and-jewelry/devotion-collection/'},
                {name: 'DNA Collection', url: '/skirts/women/watches-and-jewelry/dna-collection/'},
                {name: 'Rainbow Collection', url: '/skirts/women/watches-and-jewelry/rainbow-collection/'}
              ],
              img: [
                {file:'n4.jpg', link:'/skirts/women/watches-and-jewelry/rainbow-collection/?FL_BAN=ERJF78FJJGK45DS'},
              ]
            },
            {
              name: 'LIMITED EDITION', 
              subcategory: [
                {name: 'View All', url: '/skirts/women/limited-edition/view-all/'},
                {name: 'Portofino Custom', url: '/skirts/women/limited-edition/portofino-custom/'},
                {name: 'Daymaster Custom', url: '/skirts/women/limited-edition/daymaster-custom/'},
                {name: 'Personalize', url: '/skirts/women/limited-edition/personalize/'}
              ],
              img: [
                {file:'n3.jpg', link:'/skirts/women/limited-edition/personalize/?FL_BAN=VBCXSGD77FDG11'},
              ]
            }
          ]
        },
        {
          name: 'MEN', 
          subcategory: [
            {
              name: 'NEW IN', 
              img: [
                {file:'n4.jpg', link:'/skirts/men/new-in/?FL_BAN=XZCVSDGDGF78HHJ'},
                {file:'n3.jpg', link:'/skirts/men/new-in/?FL_BAN=XZCVNMDDGDGF78HHJ'},
                {file:'n5.jpg', link:'/skirts/men/new-in/?FL_BAN=XZCVSVVCADGF78HHJ'},
              ]
            },
            {
              name: '3DJ SELECTION', 
              subcategory: [
                {name: 'View all', url: '/skirts/men/triple-dj-selection/view-all/'},
                {name: 'Dresses', url: '/skirts/men/triple-dj-selection/dresses/'},
                {name: 'Blazers', url: '/skirts/men/triple-dj-selection/blazers/'},
                {name: 'Coats and Jackets', isHovered: false, extraname: 'NEW', url: '/skirts/men/triple-dj-selection/coats-and-jackets/'},
                {name: 'Denim', url: '/skirts/men/triple-dj-selection/denim/'},
                {name: 'Shirts and Tops', url: '/skirts/men/triple-dj-selection/shirts-and-tops/'},
                {name: 'Sweaters and Cardigans', url: '/skirts/men/triple-dj-selection/sweaters-and-cardigans/'},
                {name: 'T-Shirts and Sweatshirts', url: '/skirts/men/triple-dj-selection/t-shirts-and-sweat-shirts/'},
                {name: 'Skirts', url: '/skirts/men/triple-dj-selection/skirts/'},
                {name: 'Trousers and Shorts', url: '/skirts/men/triple-dj-selection/trousers-and-shorts/'},
                {name: 'Underwear', url: '/skirts/men/triple-dj-selection/underwear/'},
                {name: 'Beachwear', url: '/skirts/men/triple-dj-selection/beachwear/'},
                {name: 'Wear It like #3DJCelebs', url: '/skirts/men/triple-dj-selection/wear-it-like-3dj-celebs/'}
              ], 
              isHovered: false, extraname: 'NEW',
              img: [
                {file:'n4.jpg', link:'/skirts/men/triple-dj-selection/beachwear/?FL_BAN=ASFRWE895KG'},
                {file:'n1.jpg', link:'/skirts/men/triple-dj-selection/underwear/?FL_BAN=GHJDK89JJFG5B'},
              ]
            },
            {
              name: '3DJ ESSENTIAL', 
              isHovered: false, extraname: 'NEW',
              subcategory: [
                {name: 'Discover the Collection', url: '/skirts/men/triple-dj-essential/new/discover-the-collection/'},
                {name: 'View all', url: '/skirts/men/triple-dj-essential/new/view-all/'}
              ],
              img: [
                {file:'n2.jpg', link:'/skirts/men/triple-dj-essential/new/discover-the-collection/?FL_BAN=GTTYUHFJ54HFJ'},
              ]
            },
            {
              name: 'CLOTHING', 
              subcategory: [
                {name: 'View all', url: '/skirts/men/clothing/view-all/'},
                {name: 'Dresses', url: '/skirts/men/clothing/dresses/'},
                {name: 'Blazers', url: '/skirts/men/clothing/blazers/'},
                {name: 'Coats and Jackets', isHovered: false, extraname: 'NEW', url: '/skirts/men/clothing/coats-and-jackets/'},
                {name: 'Denim', url: '/skirts/men/clothing/denim/'},
                {name: 'Shirts and Tops', url: '/skirts/men/clothing/shirts-and-tops/'},
                {name: 'Sweaters and Cardigans', url: '/skirts/men/clothing/sweaters-and-cardigans/'},
                {name: 'T-Shirts and Sweatshirts', url: '/skirts/men/clothing/t-shirts-and-sweat-shirts/'},
                {name: 'Skirts', url: '/skirts/men/clothing/skirts/'},
                {name: 'Trousers and Shorts', url: '/skirts/men/clothing/trousers-and-shorts/'},
                {name: 'Underwear', url: '/skirts/men/clothing/underwear/'},
                {name: 'Beachwear', url: '/skirts/men/clothing/beachwear/'},
                {name: 'Wear It like #3DJCelebs', url: '/skirts/men/clothing/wear-it-like-3dj-celebs/'}
              ],
              img: [
                {file:'n4.jpg', link:'/skirts/men/clothing/trousers-and-shorts/?FL_BAN=AQWEDF56HJKLMN7H3'},
              ]
            },
            {
              name: 'BAGS', 
              subcategory: [
                {name: 'View all', url: '/skirts/men/bags/view-all/'}, 
                {name: 'Exclusive Shopper in canvas', isHovered: false, extraname: 'ECOMMERCE EXCLUSIVELY', url: '/skirts/men/bags/exclusive-shopper-in-canvas/'}, 
                {name: 'Handbags', url: '/skirts/men/bags/hand-bags/'}, 
                {name: 'Totes', url: '/skirts/men/bags/totes/'}, 
                {name: 'Shoulder and Crossbody Bags', url: '/skirts/men/bags/shoulder-and-crossbody-bags/'}, 
                {name: 'Clutches Mini and Micro Bags', url: '/skirts/men/bags/clutches-mini-and-micro-bags/'}, 
                {name: 'Sicily', url: '/skirts/men/bags/sicily/'}, 
                {name: '3DJ Logo Bag', url: '/skirts/men/bags/triple-dj-logo-bag/'}, 
                {name: 'Devotion', url: '/skirts/men/bas/devotion/'}, 
                {name: 'DJ Girls', url: '/skirts/men/bags/dj-girls/'}, 
                {name: '3.5', url: '/skirts/men/bags/three-and-half/'}, 
                {name: '3DJ Box', url: '/skirts/men/bags/triple-dj-box/'}, 
                {name: '#3DJLeo Collection', url: '/skirts/men/bags/hash-triple-dj-leo-collection/'}, 
              ],
              img: [
                {file:'n2.jpg', link:'/skirts/men/bags/triple-dj-logo-bag/?FL_BAN=IHFJF78837JK'},
              ]
            },
            {
              name: 'SHOES', 
              subcategory: [
                {name: 'View all', url:'/skirts/men/shoes/view-all/'},
                {name: 'Pumps and Slingback', url:'/skirts/men/shoes/pumps-and-slingback/'},
                {name: 'Boots and Booties', url:'/skirts/men/shoes/boots-and-booties/'},
                {name: 'Sneakers', url:'/skirts/men/shoes/sneakers/'},
                {name: 'skirts and Wedges', url:'/skirts/men/shoes/skirts-and-wedges/'},
                {name: 'Slides and Mules', url:'/skirts/men/shoes/slides-and-mules/'},
                {name: 'Flat', url:'/skirts/men/shoes/flat/'},
                {name: 'Rainbow Lace Collection', url:'/skirts/men/shoes/rainboy-lace-collection/'},
                {name: '3.5 Collection', url:'/skirts/men/shoes/three-and-half-collection/'},
                {name: '#3DJLIMITED Sneakers', url:'/skirts/men/shoes/hash-triple-dj-limited-sneakers/'},
              ],
              img: [
                {file:'n9.jpg', link:'/skirts/men/shoes/hash-triple-dj-limited-sneakers/?FL_BAN=AV78ERTFJGKK8'},
              ]
            },
            {
              name: 'ACCESSORIES', 
              subcategory: [
                {name: 'View all', url: '/skirts/men/accessories/view-all/'},
                {name: 'Bijoux', url: '/skirts/men/accessories/bijoux/'},
                {name: 'Scarves and Silks', url: '/skirts/men/accessories/scarves-and-silks/'},
                {name: 'Wallets and Small Leather Goods', url: '/skirts/men/accessories/wallets-and-small-leather-goods/'},
                {name: 'skirts', url: '/skirts/men/accessories/skirts/'},
                {name: 'Hats and Gloves', url: '/skirts/men/accessories/hats-and-gloves/'},
                {name: 'Socks', url: '/skirts/men/accessories/socks/'},
                {name: 'Technology', url: '/skirts/men/accessories/technology/'}
              ],
              img: [
                {file:'n7.jpg', link:'/skirts/men/accessories/technology/?FL_BAN=BNM7UFHDJVVBDH'},
              ]
            },
            {
              name: 'SUNGLASSES', 
              subcategory: [
                {name: 'View all', url: '/skirts/men/sunglasses/view-all/'},
                {name: 'New Arrivals', url: '/skirts/men/sunglasses/new-arrivals/'},
                {name: 'Icons', url: '/skirts/men/sunglasses/icons/'},
                {name: 'ADV Campaign', isHovered: false, extraname: 'UPDATED', url: '/skirts/men/sunglasses/adv-campaign/'}
              ],
              img: [
                {file:'n6.jpg', link:'/skirts/men/sunglasses/icons/?FL_BAN=BNWQGHD89JGKHK7'},
              ]
            },
            {
              name: 'WATCHES & JEWELRY', 
              subcategory: [
                {name: 'View all', url: '/skirts/men/watches-and-jewelry/view-all/'},
                {name: 'Discover the collection', url: '/skirts/men/watches-and-jewelry/discover-the-collection/'},
                {name: 'Earrings', url: '/skirts/men/watches-and-jewelry/earrings/'},
                {name: 'Rings', url: '/skirts/men/watches-and-jewelry/rings/'},
                {name: 'Necklaces', url: '/skirts/men/watches-and-jewelry/necklaces/'},
                {name: 'Charms', url: '/skirts/men/watches-and-jewelry/charms/'},
                {name: 'Bracelets', url: '/skirts/men/watches-and-jewelry/bracelets/'},
                {name: 'Watches & Straps', url: '/skirts/men/watches-and-jewelry/watches-and-straps/'},
                {name: 'Devotion Collection', url: '/skirts/men/watches-and-jewelry/devotion-collection/'},
                {name: 'DNA Collection', url: '/skirts/men/watches-and-jewelry/dna-collection/'},
                {name: 'Rainbow Collection', url: '/skirts/men/watches-and-jewelry/rainbow-collection/'}
              ],
              img: [
                {file:'n4.jpg', link:'/skirts/men/watches-and-jewelry/rainbow-collection/?FL_BAN=ERJF78FJJGK45DS'},
              ]
            },
            {
              name: 'LIMITED EDITION', 
              subcategory: [
                {name: 'View All', url: '/skirts/men/limited-edition/view-all/'},
                {name: 'Portofino Custom', url: '/skirts/men/limited-edition/portofino-custom/'},
                {name: 'Daymaster Custom', url: '/skirts/men/limited-edition/daymaster-custom/'},
                {name: 'Personalize', url: '/skirts/men/limited-edition/personalize/'}
              ],
              img: [
                {file:'n3.jpg', link:'/skirts/men/limited-edition/personalize/?FL_BAN=VBCXSGD77FDG11'},
              ]
            }
          ]
        },
        {
          name: '3DJVIB3', url: '/skirts/triple-dj-vib-3/'
        },
        {
          name: 'CHILDREN', 
          subcategory: [
            {
              name: 'NEW IN', 
              subcategory: [
                {name: 'New Arrivals Girl', url: '/skirts/children/new-in/new-arrivals-girl/'},
                {name: 'New Arrivals Boy', url: '/skirts/children/new-in/new-arrival-boy/'},
                {name: 'Most Loved Girl', url: '/skirts/children/new-in/most-loved-girl/'},
                {name: 'Most Loved Boy', url: '/skirts/children/new-in/most-loved-boy/'},
              ],
              img: [
                {file:'n4.jpg', link:'/skirts/children/new-in/most-loved-boy/?FL_BAN=YYTRE8977DHF'},
                {file:'n2.jpg', link:'/skirts/children/new-in/most-loved-girl/?FL_BAN=VCXXHF89DHFF'},
              ]
            },
            {
              name: 'GIRL (2-13 YEARS)', 
              subcategory: [
                {name: 'View all', url: '/skirts/children/girl-2-13-years/view-all/'},
                {name: 'Dresses', url: '/skirts/children/girl-2-13-years/dresses/'},
                {name: 'Coats and Jackets', url: '/skirts/children/girl-2-13-years/coats-and-jackets/'},
                {name: 'T-Shirts and Sweatshirts', url: '/skirts/children/girl-2-13-years/t-shirts-and-sweatshirts/'},
                {name: 'Shirts and Tops', url: '/skirts/children/girl-2-13-years/shirts-and-tops/'},
                {name: 'Sweaters', url: '/skirts/children/girl-2-13-years/sweaters/'},
                {name: 'Trousers and Skirts', url: '/skirts/children/girl-2-13-years/trousers-and-skirts/'},
                {name: 'Beachwear', url: '/skirts/children/girl-2-13-years/beachwear/'},
                {name: 'Accessories', url: '/skirts/children/girl-2-13-years/accessories/'},
                {name: 'Shoes (24-38)', url: '/skirts/children/girl-2-13-years/shoes-24-to-38/'},
                {name: 'Jewelry', url: '/skirts/children/girl-2-13-years/jewelry/'}
              ],
              img: [
                {file:'c1.jpg', link:'/skirts/children/girl-2-13-years/jewelry/?FL_BAN=FJJJO90OJD'},
                {file:'c2.jpg', link:'/skirts/children/girl-2-13-years/accessories/?FL_BAN=INFM90GLLLS'},
              ]
            },
            {
              name: 'BOY (2-13 YEARS)', 
              subcategory: [
                {name: 'View all', url: '/skirts/children/boy-2-13-years/view-all/'},
                {name: 'Dresses', url: '/skirts/children/boy-2-13-years/dresses/'},
                {name: 'Coats and Jackets', url: '/skirts/children/boy-2-13-years/coats-and-jackets/'},
                {name: 'T-Shirts and Sweatshirts', url: '/skirts/children/boy-2-13-years/t-shirts-and-sweatshirts/'},
                {name: 'Shirts and Tops', url: '/skirts/children/boy-2-13-years/shirts-and-tops/'},
                {name: 'Sweaters', url: '/skirts/children/boy-2-13-years/sweaters/'},
                {name: 'Trousers and Skirts', url: '/skirts/children/boy-2-13-years/trousers-and-skirts/'},
                {name: 'Beachwear', url: '/skirts/children/boy-2-13-years/beachwear/'},
                {name: 'Accessories', url: '/skirts/children/boy-2-13-years/accessories/'},
                {name: 'Shoes (24-38)', url: '/skirts/children/boy-2-13-years/shoes-24-to-38/'},
                {name: 'Jewelry', url: '/skirts/children/boy-2-13-years/jewelry/'}
              ],
              img: [
                {file:'c1.jpg', link:'/skirts/children/boy-2-13-years/jewelry/?FL_BAN=FJJJO90OJD'},
                {file:'c2.jpg', link:'/skirts/children/boy-2-13-years/accessories/?FL_BAN=INFM90GLLLS'},
              ]
            },
            {
              name: 'MINI ME', 
              subcategory: [
                {name: 'View all', url: '/skirts/children/mini-me/view-all/'},
                {name: 'Dresses', url: '/skirts/children/mini-me/dresses/'},
                {name: 'Coats and Jackets', url: '/skirts/children/mini-me/coats-and-jackets/'},
                {name: 'T-Shirts and Sweatshirts', url: '/skirts/children/mini-me/t-shirts-and-sweatshirts/'},
                {name: 'Shirts and Tops', url: '/skirts/children/mini-me/shirts-and-tops/'},
                {name: 'Sweaters', url: '/skirts/children/mini-me/sweaters/'},
                {name: 'Trousers and Skirts', url: '/skirts/children/mini-me/trousers-and-skirts/'},
                {name: 'Beachwear', url: '/skirts/children/mini-me/beachwear/'},
                {name: 'Accessories', url: '/skirts/children/mini-me/accessories/'},
                {name: 'Shoes (24-38)', url: '/skirts/children/mini-me/shoes-24-to-38/'},
                {name: 'Jewelry', url: '/skirts/children/mini-me/jewelry/'}
              ],
              img: [
                {file:'n1.jpg', link:'/skirts/children/mini-me/jewelry/?FL_BAN=IUDH009FJ45D'},
                {file:'n2.jpg', link:'/skirts/children/mini-me/sweaters/?FL_BAN=VVBMMMN7866'},
              ]
            },
            {
              name: 'NEWBORN (0-12 MONTHS)', 
              subcategory: [
                {name: 'View all', url: '/skirts/children/new-born-0-to-12-months/view-all/'},
                {name: 'Dresses', url: '/skirts/children/new-born-0-to-12-months/dresses/'},
                {name: 'Coats and Jackets', url: '/skirts/children/new-born-0-to-12-months/coats-and-jackets/'},
                {name: 'T-Shirts and Sweatshirts', url: '/skirts/children/new-born-0-to-12-months/t-shirts-and-sweatshirts/'},
                {name: 'Shirts and Tops', url: '/skirts/children/new-born-0-to-12-months/shirts-and-tops/'},
                {name: 'Sweaters', url: '/skirts/children/new-born-0-to-12-months/sweaters/'},
                {name: 'Trousers and Skirts', url: '/skirts/children/new-born-0-to-12-months/trousers-and-skirts/'},
                {name: 'Beachwear', url: '/skirts/children/new-born-0-to-12-months/beachwear/'},
                {name: 'Accessories', url: '/skirts/children/new-born-0-to-12-months/accessories/'},
                {name: 'Shoes (24-38)', url: '/skirts/children/new-born-0-to-12-months/shoes-24-to-38/'},
                {name: 'Jewelry', url: '/skirts/children/new-born-0-to-12-months/jewelry/'}
              ],
              img: [
                {file:'n1.jpg', link:'/skirts/children/new-born-0-to-12-months/dresses/?FL_BAN=TYYR89JFJ21I'},
                {file:'n3.jpg', link:'/skirts/children/new-born-0-to-12-months/trousers-and-skirts/?FL_BAN=CCV84DEEASDX6'},
              ]
            },
            {
              name: 'NEWBORN GIRL (0-30 MONTHS)', 
              subcategory: [
                {name: 'View all', url: '/skirts/children/new-born-girl-0-to-30-months/view-all/'},
                {name: 'Dresses', url: '/skirts/children/new-born-girl-0-to-30-months/dresses/'},
                {name: 'Coats and Jackets', url: '/skirts/children/new-born-girl-0-to-30-months/coats-and-jackets/'},
                {name: 'T-Shirts and Sweatshirts', url: '/skirts/children/new-born-girl-0-to-30-months/t-shirts-and-sweatshirts/'},
                {name: 'Shirts and Tops', url: '/skirts/children/new-born-girl-0-to-30-months/shirts-and-tops/'},
                {name: 'Sweaters', url: '/skirts/children/new-born-girl-0-to-30-months/sweaters/'},
                {name: 'Trousers and Skirts', url: '/skirts/children/new-born-girl-0-to-30-months/trousers-and-skirts/'},
                {name: 'Beachwear', url: '/skirts/children/new-born-girl-0-to-30-months/beachwear/'},
                {name: 'Accessories', url: '/skirts/children/new-born-girl-0-to-30-months/accessories/'},
                {name: 'Shoes (24-38)', url: '/skirts/children/new-born-girl-0-to-30-months/shoes-24-to-38/'},
                {name: 'Jewelry', url: '/skirts/children/new-born-girl-0-to-30-months/jewelry/'}
              ],
              img: [
                {file:'c4.jpg', link:'/skirts/children/new-born-girl-0-to-30-months/jewelry/?FL_BAN=CCZZXASS67'},
              ]
            },
            {
              name: 'NEWBORN BOY (0-30 MONTHS)', 
              subcategory: [
                {name: 'View all', url: '/skirts/children/new-born-boy-0-to-30-months/view-all/'},
                {name: 'Dresses', url: '/skirts/children/new-born-boy-0-to-30-months/dresses/'},
                {name: 'Coats and Jackets', url: '/skirts/children/new-born-boy-0-to-30-months/coats-and-jackets/'},
                {name: 'T-Shirts and Sweatshirts', url: '/skirts/children/new-born-boy-0-to-30-months/t-shirts-and-sweatshirts/'},
                {name: 'Shirts and Tops', url: '/skirts/children/new-born-boy-0-to-30-months/shirts-and-tops/'},
                {name: 'Sweaters', url: '/skirts/children/new-born-boy-0-to-30-months/sweaters/'},
                {name: 'Trousers and Skirts', url: '/skirts/children/new-born-boy-0-to-30-months/trousers-and-skirts/'},
                {name: 'Beachwear', url: '/skirts/children/new-born-boy-0-to-30-months/beachwear/'},
                {name: 'Accessories', url: '/skirts/children/new-born-boy-0-to-30-months/accessories/'},
                {name: 'Shoes (24-38)', url: '/skirts/children/new-born-boy-0-to-30-months/shoes-24-to-38/'},
                {name: 'Jewelry', url: '/skirts/children/new-born-boy-0-to-30-months/jewelry/'}
              ],
              img: [
                {file:'c4.jpg', link:'/skirts/children/new-born-boy-0-to-30-months/sweaters/?FL_BAN=HHJJFHHCCXX11253'},
              ]
            },
          ]
        },
      ],
      img: 'n1.jpg'
    },
    {url: '/shoes/', name: 'Shoes', img: 'n9.jpg'},
  ] as ClassifiedNavigationLinksType
;

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
  headerHeight = ref<number>(0),
  scrollHeight = ref<number>(0),
  navigationLinkParameters = shallowRef({
    name: '',
    type: 'CATEGORY',
    index: 0,
    subcategory: undefined,
    moreSubCategoriesStartFromIndex: undefined,
    currentScrollHeight: 0,
    currentSubCategoryIndex: undefined,
    isSubCategoryOrMoreSubCategoryWindowClosed: true,
    showCollections: false,
    path: '/',
    typeClicked: ''
  }) as ShallowRef<NavigationLinkParametersType>
;

provide('LINKS', links);
provide('NAVIGATION-LINK-PARAMETERS', navigationLinkParameters);

function setCurrentScrollHeight(height: number) {
  let t=setInterval(() => {
    window.scrollTo(0, height);
    let sc = (window.pageYOffset | document.body.scrollTop | window.scrollY);
    if(sc === height) {
      window.scrollTo(0, height);
      clearInterval(t);
    }
  }, 5);
}

function handleScroll() {
  scrollHeight.value = (window.pageYOffset | document.body.scrollTop | window.scrollY);
}

function triggerNavigationLinkParameters() {
  triggerRef(navigationLinkParameters);
}

watch(
  () => navigationLinkParameters.value.name,
  () => {
    setCurrentScrollHeight(0);
  }
)

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
});

onMounted(() => {
  handleScroll();
  window.addEventListener('scroll', handleScroll);
});

</script>

<template>
  <div class="d-block w-100 h-100 position-relative">
    <ShopHeader 
      @header:height="($val) => headerHeight = $val"
      style="z-index:500"
    ></ShopHeader>
    <template v-if="navigationLinkParameters.type === 'CATEGORY'">
      <RouterView v-slot="{ Component }">
        <component :is="Component" 
          :headerHeight="(headerHeight as number)"
          syle="z-index:400"
        >
          <template v-slot:close>
            <button @click="() => {
              navigationLinkParameters.isSubCategoryOrMoreSubCategoryWindowClosed = true;
              triggerNavigationLinkParameters();
              setCurrentScrollHeight(navigationLinkParameters.currentScrollHeight as number)
            }"
            >Close</button>
          </template>
        </component>
      </RouterView>
    </template>
    <template v-else>
      <RouterView>
      </RouterView>
    </template>
  </div>
</template>

<style>
*,
*::before,
*::after {
  box-sizing: border-box;
}
html {
  font-family: sans-serif;
  line-height: 1.15;
  -webkit-text-size-adjust: 100%;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
}
footer,
header,
nav,
section {
  display: block;
}
body {
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial,
    'Noto Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol',
    'Noto Color Emoji';
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5;
  color: #212529;
  text-align: left;
  background-color: #fff;
}
.pointer-event-auto {
  pointer-events:auto !important;
}
[tabindex='-1']:focus:not(:focus-visible) {
  outline: 0 !important;
}
hr {
  box-sizing: content-box;
  height: 0;
  overflow: visible;
}
h1,
h2,
h3,
h4,
h5,
h6 {
  margin-top: 0;
  margin-bottom: 0.5rem;
}
p {
  margin-top: 0;
  margin-bottom: 1rem;
}
ul {
  margin-top: 0;
  margin-bottom: 1rem;
}
ul ul {
  margin-bottom: 0;
}
a {
  text-decoration: none;
  background-color: transparent;
}
a:hover {
  text-decoration: underline;
}
a:not([href]):not([class]) {
  color: inherit;
  text-decoration: none;
}
a:not([href]):not([class]):hover {
  color: inherit;
  text-decoration: none;
}
img {
  vertical-align: middle;
  border-style: none;
}
svg {
  overflow: hidden;
  vertical-align: middle;
}
table {
  border-collapse: collapse;
}
caption {
  padding-top: 0.75rem;
  padding-bottom: 0.75rem;
  color: #6c757d;
  text-align: left;
  caption-side: bottom;
}
th {
  text-align: inherit;
}
label {
  display: inline-block;
}
button {
  border-radius: 0;
}
button:focus {
  outline: 1px dotted;
  outline: 5px auto -webkit-focus-ring-color;
}
button,
input {
  overflow: visible;
  margin: 0;
  font-family: inherit;
  font-size: inherit;
  line-height: inherit;
}
button {
  text-transform: none;
}
[role='button'] {
  cursor: pointer;
}
button:not(:disabled),
[type='button']:not(:disabled),
[type='reset']:not(:disabled),
[type='submit']:not(:disabled) {
  cursor: pointer;
}
button::-moz-focus-inner,
[type='button']::-moz-focus-inner,
[type='reset']::-moz-focus-inner,
[type='submit']::-moz-focus-inner {
  padding: 0;
  border-style: none;
}
input[type='radio'],
input[type='checkbox'] {
  box-sizing: border-box;
  padding: 0 !important;
  margin: 0 !important;
}
[type='number']::-webkit-inner-spin-button,
[type='number']::-webkit-outer-spin-button {
  height: auto;
}
[type='search'] {
  outline-offset: -2px;
}
[type='search']::-webkit-search-decoration {
  -webkit-appearance: none;
}
::-webkit-file-upload-button {
  font: inherit;
  -webkit-appearance: button;
}
template {
  display: none;
}
[hidden] {
  display: none !important;
}
input[type='text'] {
  display: block;
  width: 100%;
  height: calc(1.5em + 0.75rem + 2px);
  padding: 0.375rem 0.75rem;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5;
  color: #495057;
  border: 0;
  background-color: #fff;
  background-clip: padding-box;
  outline: 1px solid rgba(0, 0, 0, 0.2);
  transition:
    border-color 0.15s ease-in-out,
    box-shadow 0.15s ease-in-out;
}
@media (prefers-reduced-motion: reduce) {
  input[type='text'] {
    transition: none;
  }
}
input[type='text']::-ms-expand {
  background-color: transparent;
  border: 0;
}
input[type='text']:-moz-focusring {
  color: transparent;
  text-shadow: 0 0 0 #495057;
}
input[type='text']:focus {
  color: #495057;
  background-color: #fff;
  outline-color: #80bdff;
  border: 0;
  box-shadow: 0 0 0 0.115rem rgba(0, 123, 255, 0.25);
  z-index: 1200;
}
input[type='text']::-webkit-input-placeholder {
  color: #6c757d;
  opacity: 1;
}
input[type='text']::-moz-placeholder {
  color: #6c757d;
  opacity: 1;
}
input[type='text']:-ms-input-placeholder {
  color: #6c757d;
  opacity: 1;
}
input[type='text']::-ms-input-placeholder {
  color: #6c757d;
  opacity: 1;
}
input[type='text']::placeholder {
  color: #6c757d;
  opacity: 1;
}
input[type='text']:disabled,
input[type='text'][readonly] {
  background-color: #e9ecef;
  opacity: 1;
}
.cursor-pointer {
  cursor: pointer !important;
}
.cursor-disabled {
  cursor: not-allowed !important;
}
.position-absolute {
  position: absolute !important;
}
.position-relative {
  position: relative !important;
}
.position-fixed {
  position: fixed !important;
}
.w-50 {
  width: 50% !important;
}
.w-100, body, html, #app {
  width: 100% !important;
}
.h-100, body, html, #app  {
  height: 100% !important;
}
.vh-100{
  height: 100vh !important;
}
.vw-100 {
  width: 100vw !important;
}
.h-auto {
  height: auto !important;
}
.m-0 {
  margin: 0 !important;
}
.p-0 {
  padding: 0 !important;
}
.t-0 {
  top: 0 !important;
}
.l-0 {
  left: 0 !important;
}
.r-0 {
  right: 0 !important;
}
.align-middle {
  vertical-align: middle !important;
}
.text-center {
  text-align: center !important;
}
.text-left {
  text-align: left !important;
}
.text-right {
  text-align: right !important;
}
.justify-content-center {
  justify-content: center !important;
}
.justify-content-start {
  -ms-flex-pack: start !important;
  justify-content: flex-start !important;
}
.justify-content-end {
  -ms-flex-pack: end !important;
  justify-content: flex-end !important;
}
.align-items-start {
  -ms-flex-align: start !important;
  align-items: flex-start !important;
}
.align-items-center {
  align-items: center !important;
}
.shadow-bg {
  box-shadow:
    0 0.46667rem 0.991667rem 0 rgba(0, 0, 0, 0.2),
    0 0.35rem 1.16667rem 0 rgba(0, 0, 0, 0.19);
}
.shadow-sm {
  box-shadow:
    rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,
    rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;
}
.user-select-none,
.btn {
  -webkit-user-select: none !important;
  -moz-user-select: none !important;
  -ms-user-select: none !important;
  user-select: none !important;
}
.d-none {
  display: none !important;
}
.d-inline-block {
  display: -moz-inline-stack;
  display: inline-block !important;
  zoom: 1;
}
.overflow-hidden {
  overflow: hidden !important;
}
.overflow-auto {
  overflow: auto !important;
}
.overflow-y-auto {
  overflow-y: auto !important;
}
.overflow-x-hidden {
  overflow-x: hidden !important;
}
.overflow-x-scroll {
  overflow-x: scroll !important;
}
.underline-none {
  text-decoration: none !important;
}
.text-break {
  word-break: break-word !important;
  overflow-wrap: break-word !important;
}
.text-wrap {
  white-space: normal !important;
}
.text-lowercase {
  text-transform: lowercase !important;
}
.text-uppercase {
  text-transform: uppercase !important;
}
.text-capitalize {
  text-transform: capitalize !important;
}
.flex-box {
  display: -webkit-box; /* OLD - iOS 6-, Safari 3.1-6 */
  display: -moz-box; /* OLD - Firefox 19- (buggy but mostly works) */
  display: -ms-flexbox; /* TWEENER - IE 10 */
  display: -webkit-flex; /* NEW - Chrome */
  display: flex; /* NEW, Spec - Opera 12.1, Firefox 20+ */
}
.flex-direction-row {
  -ms-flex-direction: row !important;
  flex-direction: row !important;
}
.flex-nowrap {
  -ms-flex-wrap: nowrap !important;
  flex-wrap: nowrap !important;
}
.flex-wrap {
  -ms-flex-wrap: wrap !important;
  flex-wrap: wrap !important;
}
.flex-w-70 {
  -webkit-box-flex: 0 0 70%; /* OLD - iOS 6-, Safari 3.1-6 */
  -moz-box-flex: 0 0 70%; /* OLD - Firefox 19- */
  width: 70%; /* For old syntax, otherwise collapses. */
  -webkit-flex: 0 0 70%; /* Chrome */
  -ms-flex: 0 0 70%; /* IE 10 */
  flex: 0 0 70%; /* NEW, Spec - Opera 12.1, Firefox 20+ */
}
.flex-w-30 {
  -webkit-box-flex: 0 0 30%; /* OLD - iOS 6-, Safari 3.1-6 */
  -moz-box-flex: 0 0 30%; /* OLD - Firefox 19- */
  width: 30%; /* For old syntax, otherwise collapses. */
  -webkit-flex: 0 0 30%; /* Chrome */
  -ms-flex: 0 0 30%; /* IE 10 */
  flex: 0 0 30%; /* NEW, Spec - Opera 12.1, Firefox 20+ */
}
.align-self-stretch {
  align-self: stretch !important;
}
.flex-fill {
  -ms-flex: 1 1 auto !important;
  flex: 1 1 auto !important;
}
.flex-grow-1 {
  -ms-flex-positive: 1 !important;
  flex-grow: 1 !important;
}
.flex-shrink-1 {
  -ms-flex-negative: 1 !important;
  flex-shrink: 1 !important;
}
.flex-grow-0 {
  -ms-flex-positive: 0 !important;
  flex-grow: 0 !important;
}
.flex-shrink-0 {
  -ms-flex-negative: 0 !important;
  flex-shrink: 0 !important;
}
.list-style-none {
  list-style: none !important;
}
.btn {
  font-weight: 400;
  color: #212529;
  text-align: center;
  vertical-align: middle;
  background-color: transparent;
  border: 1px solid transparent;
  border-radius: 0.25rem;
  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
}
@media (prefers-reduced-motion: reduce) {
  .btn {
    transition: none;
  }
}
.btn:hover {
  color: #212529;
  text-decoration: none;
}
.btn:focus,
.btn.focus {
  outline: 0;
  box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.25);
}
.btn.disabled,
.btn:disabled {
  opacity: 0.65;
}
.btn:not(:disabled):not(.disabled) {
  cursor: pointer;
}
a.btn.disabled {
  pointer-events: none;
}
.d-block {
  display: block !important;
}
.letter-spacing {
  letter-spacing: 0.0583333333333rem;
}
.font-family {
  font-family: -apple-system, blinkmacsystemfont, 'Segoe UI', roboto, oxygen, ubuntu, cantarell,
    'Open Sans', 'Helvetica Neue', sans-serif;
}

</style>
