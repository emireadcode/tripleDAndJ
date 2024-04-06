import { createRouter, createWebHistory } from 'vue-router';
import DisplayShopCollections from "../components/DisplayShopCollections.vue";
import ContactUs from "../components/ContactUs.vue";
import CheckReturnAuthorization from "../components/CheckReturnAuthorization.vue";
import DiscoverServices from "../components/DiscoverServices.vue";
import FrequentlyAskedQuestions from "../components/FrequentlyAskedQuestions.vue";
import LegalArea from "../components/LegalArea.vue";
import LocateStore from "../components/LocateStore.vue";
import TrackOrder from "../components/TrackOrder.vue";
import Search from "../components/Search.vue";
import AccountInfo from '@/components/AccountInfo.vue';
import OrdersAndPaymentInfo from '@/components/OrdersAndPaymentInfo.vue';
import ShippingAndDeliveryInfo from '@/components/ShippingAndDeliveryInfo.vue';
import ReturnAndRefundInfo from '@/components/ReturnAndRefundInfo.vue';
import ProductInfo from '@/components/ProductInfo.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {path: '/', component: DisplayShopCollections},
    {path: '/contact-us', component: ContactUs },
    {path: '/search', component: Search },
    {path: '/check-return-authorization', component: CheckReturnAuthorization },
    {path: '/discover-services', component: DiscoverServices},
    {path: '/faq', component: FrequentlyAskedQuestions, children: [
      {path: 'account-info', component: AccountInfo},
      {path: 'orders-and-payment-info', component: OrdersAndPaymentInfo},
      {path: 'shipping-and-delivery-info', component: ShippingAndDeliveryInfo},
      {path: 'return-and-refund-info', component: ReturnAndRefundInfo },
      {path: 'product-info', component: ProductInfo}
    ]},
    {path: '/legal-area', component: LegalArea, /*children: [
    ]*/},
    {path: '/locate-store', component: LocateStore },
    {path: '/track-order', component: TrackOrder },
    {path: '/:categoryandsubcategory+', component: DisplayShopCollections},
  ]
});

export default router
