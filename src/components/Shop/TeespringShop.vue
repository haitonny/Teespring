<template>
  <div class="">
    <div class="grid grid-cols-2 mt-4 mx-auto sm:container">
      <div class="flex">
        <div class="flex items-center">
          <svg class="fill-current text-red-600 pt-3" style="width: 43px; height: 40px">
            <path
              id="teespring-logo"
              d="M27.22 2.52c-1.328 0-2.408 1.06-2.408 2.363 0 1.855.7 3.55 1.854 4.852.478.538 1.033 1.008 1.65 1.393.37-.553.68-1.15.918-1.78.358-.95.554-1.977.554-3.048 0-.636-.07-1.256-.202-1.855-.01-.05-.023-.1-.035-.15-.267-1.02-1.21-1.775-2.33-1.775zM12.364 9.348c.238.63.548 1.227.92 1.78.615-.385 1.17-.855 1.648-1.393 1.155-1.3 1.856-2.997 1.856-4.852 0-1.303-1.08-2.363-2.41-2.363-1.12 0-2.062.756-2.33 1.774-.01.05-.024.1-.035.15-.13.6-.2 1.22-.2 1.856 0 1.07.195 2.098.553 3.048zm26.74-1.156L41.4 9.32c-1.66 3.25-5.085 5.484-9.044 5.484-1.164 0-2.28-.195-3.322-.55-2.097 2.088-5.01 3.385-8.235 3.385-3.225 0-6.14-1.298-8.236-3.387-1.04.356-2.16.55-3.323.55-4.12 0-7.665-2.42-9.24-5.89l2.35-1.025c1.176 2.587 3.82 4.396 6.89 4.396.56 0 1.107-.062 1.632-.176-1.035-1.7-1.63-3.685-1.63-5.808 0-.808.087-1.597.25-2.357.024-.11.05-.216.077-.324C10.136 1.534 12.073 0 14.376 0c.046 0 .09.002.136.003.14.004.28.013.418.028 2.49.27 4.424 2.34 4.424 4.853 0 3.378-1.722 6.36-4.35 8.15 1.566 1.3 3.588 2.086 5.795 2.086 2.206 0 4.228-.787 5.794-2.086-2.628-1.79-4.35-4.773-4.35-8.15C22.243 2.37 24.177.3 26.665.03c.138-.014.277-.023.418-.027.046 0 .09-.003.137-.003 2.304 0 4.24 1.535 4.808 3.62.027.107.053.214.077.323.164.76.25 1.55.25 2.357 0 2.123-.595 4.11-1.63 5.808.526.114 1.07.176 1.63.176 2.95 0 5.506-1.668 6.747-4.092z"
            ></path>
          </svg>
          <h3 class="text-indigo-900 font-bold text-lg">Teespring</h3>
        </div>
        <div class="border ml-8 hidden lg:flex">
          <div class="pt-3 px-3 bg-white">
            <img class="" style="width: 15px; height: 15px" src="../../assets/image/search-magnifier-outline-svgrepo-com.svg" alt="" />
          </div>
          <input type="text" placeholder="search the marketplace " class="py-2 outline-none w-64 placeholder-font-light" />
        </div>
      </div>
      <div class="justify-end text-sm items-center hidden lg:flex">
        <a href="" class="font-light mr-8 hover:text-red-700">Start Designing</a>
        <a href="" class="font-medium text-red-700">Login</a>
      </div>
      <div class="lg:hidden flex justify-end mt-3 mr-6">
        <img style="width: 15px; height: 15px" src="../../assets/image/search-magnifier-outline-svgrepo-com.svg" alt="" />
      </div>
    </div>
    <div class="border-b mt-3"></div>
    <div class="grid-cols-1 mt-3 border-b hidden lg:grid">
      <div class="flex mx-auto container mb-3">
        <ul>
          <li>
            <a class="font-light text-sm text-gray-700 " href="">Apparel</a>
            <a class="font-light text-sm text-gray-700 mx-6" href="">Home Decor</a>
            <a class="font-light text-sm text-gray-700" href="">Socks</a>
            <a class="font-light text-sm text-gray-700 mx-6" href="">Phone Cases</a>
            <a class="font-light text-sm text-gray-700" href="">Accessories</a>
            <a class="font-light text-sm text-gray-700 mx-6" href="">Mugs</a>
          </li>
        </ul>
      </div>
    </div>
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
    <div class="grid md:grid-cols-1 lg:grid-cols-2 mx-auto container mt-12">
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
      <div class="ml-4 mt-6 lg:ml-24">
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
        <div class="border-t leading-loose text-xs font-light ">
          <p>
            If you're not 100% satisfied with your physical order, let us know and we'll make it right. Learn more about our return policy
            <a href="" class="text-teal-400 font-semibold">here.</a>
          </p>
        </div>
        <p class="text-sm font-semibold mb-1 mt-5">Campaign ID</p>
        <p class="border-t leading-loose text-xs font-light">needbeer</p>
      </div>
      <div class=""></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "TeespringShop",
  inject: ["responsive"],
  computed: {
    responsiveValue() {
      return this.responsive.isMobile ? "Mobile" : "Desktop";
    }
  }
};
</script>

<style scoped></style>
