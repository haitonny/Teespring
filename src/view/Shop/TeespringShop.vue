<template>
  <div class="">
    <header-shop />
    <div class="container">
      <div class="grid lg:grid-cols-2 md:grid-cols-1 mt-16 ">
        <div class="md:ml-0 lg:ml-24">
          <div class="flex sticky top-0">
            <div class="mt-3 dlg:hidden ">
              <a href=""
                ><img class="border rounded mb-2 hover:border-red-500" style="width: 50px; height: 50px" src="../../assets/image/1.jpg" height="560" width="470"
              /></a>
              <a href="">
                <img class="border rounded hover:border-red-500" style="width: 50px; height: 50px" src="../../assets/image/8.jpg" height="560" width="470"
              /></a>
            </div>
            <div class="md:m-auto lg:ml-8">
              <div class="text-center leading-loose mb-2" v-if="responsive.isMobile">
                <p class="font-semibold">Limited Edition.</p>
                <span class="text-sm text-gray-600">from</span>
                <a href="" class="font-semibold text-gray-600 text-sm hover:text-red-500 pb-20">COLLECTION BEER T-SHIRTS.</a>
              </div>
              <img src="../../assets/image/1.jpg" height="560" width="470" />
            </div>
          </div>
        </div>
        <div class="md:ml-0 lg:ml-20 md:mr-0 lg:mr-20">
          <div class="hidden lg:block">
            <div class="mb-5">
              <p class="font-extrabold text-3xl">Limited Edition.</p>
              <span class="text-sm">from</span>
              <a href="" class="font-bold text-base hover:text-red-500 pb-20">COLLECTION BEER T-SHIRTS.</a>
            </div>
            <div class="mb-8">
              <i><u class="font-light text-sm">Secure Checkout</u></i>
              <span class="font-light text-sm">/ Shipped & printed in the U.S.A.</span><br />
              <u class="font-semibold text-sm">SHARE</u>
              <span class="font-light text-sm">
                & order with your friends & save on shipping.
              </span>
            </div>
            <p class="text-sm font-semibold">
              Click on the green button the select size and order.
            </p>
            <i class="text-sm font-semibold">Need Help? </i><span class="font-light text-sm">support@teespring.com</span>
          </div>
          <div class="bg-gray-200 mt-6">
            <div class="ml-4 pt-6">
              <p class="text-xs text-indigo-800 font-semibold">
                Available Products:
              </p>
              <lable>
                <select class="outline-none w-4/5 p-2 border">
                  <option selected>Classic Tee - $21.00 USD</option>
                  <option>Premium V-Neck Tee - $24.00 USD</option>
                  <option>Classic Pullover Hoodie - $39.00 USD</option>
                  <option>Women's Classic V-Neck Tee - $22.99 USD</option>
                  <option>Women's Classic Tee - $21.99 USD</option>
                  <option>Mug - $14.99 USD</option>
                </select>
              </lable>
              <div class="flex lg:block">
                <div class="flex mt-3">
                  <div class="border-2 hover:border-red-500 rounded bg-cover" style="background-image: url('image/1.jpg') ;width: 90px; height: 60px"></div>
                  <div class="border-2 hover:border-red-500 rounded bg-cover" style="width: 90px; height: 60px; background-image: url('image/9.jpg')"></div>
                  <div class="border-2 hover:border-red-500 rounded bg-cover " style="width: 90px; height: 60px; background-image: url('image/10.jpg')"></div>
                  <div class="border-2 hover:border-red-500 rounded bg-cover" style="width: 90px; height: 60px ; background-image: url('image/11.jpg')"></div>
                </div>
                <div class="flex mt-3 pb-8">
                  <div class="border-2 hover:border-red-500 rounded bg-cover" style="width: 90px; height: 60px ; background-image: url('image/12.jpg')"></div>
                  <div class="border-2 hover:border-red-500 rounded bg-cover" style="width: 90px; height: 60px; background-image: url('image/13.jpg')"></div>
                </div>
              </div>
              <div class="">
                <p class="text-xs text-indigo-800 font-bold">Description:</p>
                <p class="font-normal text-indigo-800 text-xs">
                  Regular fit, unisex
                </p>
              </div>
              <div class="text-xs text-teal-400 font-normal mt-3">
                <a href="">Show More Detail</a>
              </div>
              <div class="flex mt-6">
                <div class="mr-5">
                  <p class="text-indigo-800 text-xs font-semibold">
                    Select size:
                  </p>
                  <select name="" id="" class="py-2 px-6 border rounded-sm">
                    <option value="">S</option>
                    <option value="">M</option>
                    <option value="">L</option>
                  </select>
                </div>
                <div class="text-indigo-800 text-xs font-semibold">
                  <p>Quantity</p>
                  <input type="text" class="w-16 h-10 border rounded-sm" />
                </div>
              </div>
              <div class="my-6">
                <p class="text-xs text-indigo-800 font-semibold">Color:</p>
                <div class="flex mt-2 cursor-pointer">
                  <div class=" border border-gray-500 rounded-full p-2 hover:border-red-500">
                    <div class="bg-black p-3 rounded-full "></div>
                  </div>
                  <div class=" border border-gray-500 rounded-full p-2 mx-3 hover:border-red-500">
                    <div class="bg-red-700 p-3 rounded-full "></div>
                  </div>
                  <div class=" border border-gray-500 rounded-full p-2 hover:border-red-500">
                    <div class="bg-blue-800 p-3 rounded-full"></div>
                  </div>
                  <div class=" border border-gray-500 rounded-full p-2 mx-3 hover:border-red-500">
                    <div class="bg-indigo-800 p-3 rounded-full"></div>
                  </div>
                  <div class=" border border-gray-500 rounded-full p-2 hover:border-red-500">
                    <div class="bg-purple-900 p-3 rounded-full"></div>
                  </div>
                </div>
              </div>
            </div>
            <div class="bg-green-500 text-center">
              <button class="my-3 font-semibold text-white">Add to cart</button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="grid md:grid-cols-1 lg:grid-cols-2 mx-auto container md:mt-0 lg:mt-12">
      <div class="text-center my-6" v-if="responsive.isMobile">
        <p class="font-light text-sm mb-4">Share this design!</p>
        <div class="flex ml-4 ">
          <button class="border border-black hover:border-gray-400 py-2 px-32 mx-4 rounded font-semibold text-sm flex">
            <div class="">
              <svg viewBox="0 0 800 800" style="height: 24px">
                <path d="M445 643h-90V419h-75v-87h75v-64q0-55 32-86 30-29 80-29 28 0 67 3v78h-47q-42 0-42 38v60h86l-11 87h-75v224z"></path>
              </svg>
            </div>
            <div class="">Facebook</div>
          </button>
          <button class="border border-black hover:border-gray-400 py-2 px-32 rounded font-semibold text-sm flex">
            <div class="">
              <svg viewBox="0 0 800 800" style="height: 24px">
                <path
                  d="M679 239s-21 34-55 57c7 156-107 329-314 329-103 0-169-50-169-50s81 17 163-45c-83-5-103-77-103-77s23 6 50-2c-93-23-89-110-89-110s23 14 50 14c-84-65-34-148-34-148s76 107 228 116c-22-121 117-177 188-101 37-6 71-27 71-27s-12 41-49 61c30-2 63-17 63-17z"
                ></path>
              </svg>
            </div>
            <div class="">Twitter</div>
          </button>
        </div>
      </div>
      <div class="border-t" v-if="responsive.isMobile"></div>
      <div class="mt-8 ml-4 mb-3" v-if="responsive.isMobile">
        <div class="mb-8">
          <i><u class="font-light text-sm">Secure Checkout</u></i>
          <span class="font-light text-sm">/ Shipped & printed in the U.S.A.</span><br />
          <u class="font-semibold text-sm">SHARE</u>
          <span class="font-light text-sm">
            & order with your friends & save on shipping.
          </span>
        </div>
        <p class="text-sm font-semibold">
          Click on the green button the select size and order.
        </p>
        <i class="text-sm font-semibold">Need Help? </i><span class="font-light text-sm">support@teespring.com</span>
      </div>
      <div class="border-b" v-if="responsive.isMobile"></div>
      <div class="ml-4 mt-6 lg:ml-24 mb-10">
        <p class="text-sm font-semibold mb-1">Delivery details</p>
        <div class="border-t" v-if="!responsive.isMobile"></div>
        <div class="leading-loose text-xs font-light ">
          <p class="mt-2 ">
            All products are printed to order.<br />
            If you place your order now, it will ship on or before October 23, 2020.<br />
            Please allow additional 6 - 9 business days for standard shipping.<br />
            Expedited or Rush shipping may be available depending upon the product(s) selected and the destination country.<br />
            Shipping costs start at:
          </p>
          <div class="ml-4">
            <p>
              $12.50 for the first apparel item and $4.00 for each additional apparel item.
            </p>
            <p>$9.50 for the first mug and $4.00 for each additional mug.</p>
          </div>
          Products are fulfilled in the US
        </div>
        <p class="text-sm font-semibold mb-1 mt-5">Return Policy</p>
        <div class="border-t" v-if="!responsive.isMobile"></div>
        <div class="leading-loose text-xs font-light ">
          <p>
            If you're not 100% satisfied with your physical order, let us know and we'll make it right. Learn more about our return policy
            <a href="" class="text-teal-400 font-semibold">here.</a>
          </p>
        </div>
        <p class="text-sm font-semibold mb-1 mt-5">Campaign ID</p>
        <div class="border-t" v-if="!responsive.isMobile"></div>
        <p class="leading-loose text-xs font-light">needbeer</p>
      </div>
      <div class="text-center mt-8 hidden lg:block">
        <p class="font-light text-sm mb-4">Share this design!</p>
        <div class="flex m-auto w-1/2">
          <button class="border border-black hover:border-gray-400 py-2 px-6 mx-4 rounded font-semibold text-sm flex">
            <div class="">
              <svg viewBox="0 0 800 800" style="height: 24px">
                <path d="M445 643h-90V419h-75v-87h75v-64q0-55 32-86 30-29 80-29 28 0 67 3v78h-47q-42 0-42 38v60h86l-11 87h-75v224z"></path>
              </svg>
            </div>
            <div class="">Facebook</div>
          </button>
          <button class="border border-black hover:border-gray-400 py-2 px-8 rounded font-semibold text-sm flex">
            <div class="">
              <svg viewBox="0 0 800 800" style="height: 24px">
                <path
                  d="M679 239s-21 34-55 57c7 156-107 329-314 329-103 0-169-50-169-50s81 17 163-45c-83-5-103-77-103-77s23 6 50-2c-93-23-89-110-89-110s23 14 50 14c-84-65-34-148-34-148s76 107 228 116c-22-121 117-177 188-101 37-6 71-27 71-27s-12 41-49 61c30-2 63-17 63-17z"
                ></path>
              </svg>
            </div>
            <div class="">Twitter</div>
          </button>
        </div>
        <p class="text-xs font-light text-gray-600 mt-8">Report this listing</p>
      </div>
    </div>
  </div>
</template>

<script>
import HeaderShop from "@/components/HeaderShop";
export default {
  name: "TeespringShop",
  components: { HeaderShop },
  inject: ["responsive"],
  computed: {
    responsiveValue() {
      return this.responsive.isMobile ? "Mobile" : "Desktop";
    }
  }
};
</script>

<style scoped></style>
