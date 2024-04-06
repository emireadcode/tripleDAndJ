<script lang="ts" setup>
import {type ShallowRef, shallowRef, ref, } from "vue";
import {useRouter} from "vue-router";

type CategoryNavigationLinkParametersType = { 
  name: string; 
  type: 'CATEGORY' | 'SEARCH' | 'AD-CAMPAIGN-LINK' | 'FOOTER-LINK';
  index: number | undefined;
  subcategory?: Boolean | undefined;
};

const 
  emits = defineEmits<{
    (e: "button:nameTypeIndexAndOrSubCategory", action: CategoryNavigationLinkParametersType): void;
  }>(),
  router = useRouter()
;

type FooterLinksType = {
  [key: number]: {
    title: string;
    url?: string | undefined;
    italic?: string | undefined;
    children?: FooterLinksType[number] | undefined;
    collapsed?: Boolean | undefined;
  };
};
let 
  emailToReceiveNewsLetter = ref<string>(''), 
  footerLinks = shallowRef([
  /*{
    title: 'DISCOVER SERVICES', 
    url: '/services',
  },
  {
    title: 'TRACK ORDER', 
    url: '/order-tracking',
  },
  {
    title: 'CHECK RETURN AUTHORIZATION', 
    url: '/return-authorization',
  },*/
  {
    title: 'CONTACT US', 
    url: '/contact-us',
  },
  {
    title: 'FREQUENTLY ASKED QUESTIONS', 
    italic: 'RELATED TO',
    collapsed: true,
    children: [
      {
        title: 'RETURN AND REFUND INFORMATION', 
        url: '/faq/return-and-refund-info',
      },
      {
        title: 'SHIPPING AND DELIVERY INFORMATION', 
        url: '/faq/shipping-and-delivery-info',
      },
      {
        title: 'ORDERS AND PAYMENT INFORMATION', 
        url: '/faq/orders-and-payment-info',
      },
      {
        title: 'PRODUCT INFORMATION', 
        url: '/faq/product-info',
      },
      {
        title: 'ACCOUNT INFORMATION', 
        url: '/faq/account-info',
      },
    ],
  },
  {
    title: 'LEGAL AREA', 
    italic: 'ON',
    collapsed: false,
    children: [
      {
        title: 'CONDITIONS OF USE', 
        url: '/legal-area/conditions-of-use',
      },
      {
        title: 'CONDITIONS OF SALE', 
        url: '/legal-area/conditions-of-sale',
      },
      {
        title: 'COOKIE POLICY', 
        url: '/legal-area/cookie-policy',
      },
      {
        title: 'RETURNS POLICY', 
        url: '/legal-area/returns-policy',
      },
      {
        title: 'PRIVACY POLICY', 
        url: '/legal-area/privacy-policy',
      },
      {
        title: 'PERSONAL DATA PROCESSING', 
        url: '/legal-area/personal-data-processing',
      },
    ],
  },
]) as ShallowRef<FooterLinksType>;


function openLink(b: CategoryNavigationLinkParametersType, url: string | undefined) {
  emits('button:nameTypeIndexAndOrSubCategory', b);
  if(url !== undefined) {
    let t = setTimeout(() => {
      router.push({path: url});
      clearTimeout(t);
    }, 100);
  }
}

</script>

<template>
  <div class="d-block w-100 m-0" style="background-color:#663600;">
    <div class="d-block text-center" style="padding:60px 0;border-bottom:1px solid #FFF;">
      <img src="http://localhost:5173/src/assets/logos/company-logo.jpg" style="width:350px;height:350px;border-radius:50%;" />
    </div>
    <div id="footer" class="flex-box align-items-start m-0">
      <div id="footer-left" class="align-self-stretch">
        <ul style="color:#fff;font-size:14.5px !important;" class="w-100 list-style-none flex-wrap flex-box flex-direction-row justify-content-start align-items-center m-0 p-0">
          <!--<li class="w-100 m-0" style="padding:0 0 10px 0;">
            <a 
              @click="openLink(
                {
                  name: 'DISCOVER SERVICES', 
                  index: undefined, 
                  type: 'FOOTER-LINK'
                },
                '/discover-services'
              )"
              class="footer-link d-block underline-none" 
              style="padding:15px;"
            >DISCOVER SERVICES</a>
          </li>
          <li class="w-100 m-0" style="padding:10px 0;">
            <RouterLink to="/track-order" class="footer-link d-block underline-none" style="padding:15px;">TRACK ORDER</RouterLink>
          </li>
          <li class="w-100 m-0" style="padding:10px 0;">
            <a 
              @click="openLink(
                {
                  name: 'CHECK RETURN AUTHORIZATION', 
                  index: undefined, 
                  type: 'FOOTER-LINK'
                },
                '/check-return-authorization'
              )"
              class="footer-link d-block underline-none" 
              style="padding:15px;"
            >CHECK RETURN AUTHORIZATION</a>
          </li>-->
          <li class="w-100 m-0" style="padding:10px 0;">
            <a 
              @click="openLink(
                {
                  name: 'CONTACT US', 
                  index: undefined, 
                  type: 'FOOTER-LINK'
                },
                '/contact-us'
              )"
              class="footer-link d-block underline-none" 
              style="padding:15px;"
            >CONTACT US</a>
          </li>
          <li class="w-100 m-0" style="padding:0;">
            <div class="d-block" style="padding:10px 0;">
              <span class="d-block" style="padding:15px;background-color: #5A5A5A;">FREQUENTLY ASKED QUESTIONS</span>
            </div>
            <ul class="w-100 list-style-none d-block flex-box flex-direction-row justify-content-start align-items-center m-0 p-0">
              <li class="w-100 m-0" style="padding:10px 0;">
                <a 
                  @click="openLink(
                    {
                      name: 'RETURN AND REFUND INFORMATION', 
                      index: undefined, 
                      type: 'FOOTER-LINK'
                    },
                    '/faq/return-and-refund-info'
                  )"
                  class="footer-link d-block underline-none" 
                  style="padding:15px;"
                >RETURN AND REFUND INFORMATION</a>
              </li>
              <li class="w-100 m-0" style="padding:10px 0;">
                <a 
                  @click="openLink(
                    {
                      name: 'SHIPPING AND DELIVERY INFORMATION', 
                      index: undefined, 
                      type: 'FOOTER-LINK'
                    },
                    '/faq/shipping-and-delivery-info'
                  )"
                  class="footer-link d-block underline-none" 
                  style="padding:15px;"
                >SHIPPING AND DELIVERY INFORMATION</a>
              </li>
              <li class="w-100 m-0" style="padding:10px 0;">
                <a 
                  @click="openLink(
                    {
                      name: 'ORDERS AND PAYMENT INFORMATION', 
                      index: undefined, 
                      type: 'FOOTER-LINK'
                    },
                    '/faq/orders-and-payment-info'
                  )"
                  class="footer-link d-block underline-none" 
                  style="padding:15px;"
                >ORDERS AND PAYMENT INFORMATION</a>
              </li>
              <li class="w-100 m-0" style="padding:10px 0;">
                <RouterLink to="/faq/product-info" class="footer-link d-block underline-none" style="padding:15px;">PRODUCT INFORMATION</RouterLink>
              </li>
              <li class="w-100 m-0" style="padding:10px 0;">
                <RouterLink to="/faq/account-info" class="footer-link d-block underline-none" style="padding:15px;">ACCOUNT INFORMATION</RouterLink>
              </li>
            </ul>
          </li>
          <li class="w-100 m-0" style="padding:0;">
            <div class="d-block" style="padding:10px 0;">
              <span class="d-block" style="padding:15px;background-color: #5A5A5A;">LEGAL AREA</span>
            </div>
            <ul class="w-100 list-style-none d-block flex-box flex-direction-row justify-content-start align-items-center m-0 p-0">
              <li class="w-100 m-0" style="padding:10px 0;">
                <RouterLink to="/legal-area/conditions-of-use" class="footer-link d-block underline-none" style="padding:15px;">CONDITIONS OF USE</RouterLink>
              </li>
              <li class="w-100 m-0" style="padding:10px 0;">
                <RouterLink to="/legal-area/conditions-of-sale" class="footer-link d-block underline-none" style="padding:15px;">CONDITIONS OF SALE</RouterLink>
              </li>
              <li class="w-100 m-0" style="padding:10px 0;">
                <RouterLink to="/legal-area/cookie-policy" class="footer-link d-block underline-none" style="padding:15px;">COOKIE POLICY</RouterLink>
              </li>
              <li class="w-100 m-0" style="padding:10px 0;">
                <RouterLink to="/legal-area/returns-policy" class="footer-link d-block underline-none" style="padding:15px;">RETURNS POLICY</RouterLink>
              </li>
              <li class="w-100 m-0" style="padding:10px 0;">
                <RouterLink to="/legal-area/privacy-policy" class="footer-link d-block underline-none" style="padding:15px;">PRIVACY POLICY</RouterLink>
              </li>
              <li class="w-100 m-0" style="padding:10px 0;">
                <RouterLink to="/legal-area/personal-data-processing" class="footer-link d-block underline-none" style="padding:15px;">PERSONAL DATA PROCESSING</RouterLink>
              </li>
            </ul>
          </li>
        </ul>
      </div>
      <div id="footer-right" class="align-self-stretch">
        <div class="d-block">
          <form>
            <label style="color:#fff;">SUBSCRIBE TO NEWSLETTER</label>
            <div class="d-block" style="border-bottom:2px solid #46FF0B;padding-top:60px;">
              <div class="w-100 h-100 position-relative flex-box flex-nowrap flex-direction-row align-items-start justify-cotentent-end">
                <input placeholder="Enter your e-mail" v-model="emailToReceiveNewsLetter" class="w-100" style="background-color:#663600;color:#fff;height:35px;border:none;outline:none;padding-right:128px;" />
                <button class="position-absolute t-0" style="width:120px;right:0">Confirm</button>
              </div>
            </div>
          </form>
        </div>
        <div class="d-block" style="padding-top:102px;">
          <a class="underline-none d-block text-center" style="padding:15px;background-color:#46FF0B;font-weight: bold;color:black;font-size:1.5rem;border-radius:50px;">Locate Store</a>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
@media only screen and (max-width: 991px) {
  #footer {
    flex-direction: row; 
    -ms-flex-pack: start;
    justify-content: flex-start;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
    padding: 60px 0px;
  }
  #footer-left {
    width: 100%;
    padding-right: 20px;
    padding-left: 20px;
    padding-bottom: 30px;
    order: 2;
    padding-top: 60px;
  }
  #footer-right {
    width: 100%;
    padding-right: 20px;
    padding-left: 20px;
    order: 1;
    padding-bottom: 60px;
    border-bottom: 1px solid #fff;
  }
  .footer-link {
    border: 1px solid transparent;
    color:#fff;
  }
}
@media only screen and (min-width: 990px) {
  #footer {
    flex-direction: row; 
    justify-content: center;
    -ms-flex-wrap: nowrap;
    flex-wrap: nowrap;
    padding: 60px 90px;
  }
  #footer-left {
    width: 50%;
    padding-right:20px;
    order: 1;
  }
  #footer-right {
    width: 50%;
    padding-left:20px;
    order: 2;
  }
  .footer-link {
    border: 1px solid #fff;
    color:#fff;
  }
}
</style>