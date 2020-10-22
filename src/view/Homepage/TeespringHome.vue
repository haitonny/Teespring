<template>
  <div class="mx-auto font-body">
    <div class="bg-white fixed top-0 w-full flex justify-between">
      <div class="font-light text-sm py-6 flex lg:ml-16 xl:ml-24">
        <div class="ml-4 lg:ml-0"><img style="width: 120px" src="../../assets/image/teespring.png" /></div>
        <div class="hidden lg:flex ml-10">
          <div class="pr-10 pr-4">How it works</div>
          <div class="pr-10 pr-4">Sell anything</div>
          <div class="pr-10 pr-4">Sell everywhere</div>
        </div>
      </div>
      <div class="py-4 lg:mr-16 xl:mr-24 hidden lg:flex">
        <button class="bg-red-600 text-white font-medium text-sm py-2 px-4 rounded">Start Designing</button>
        <div class="pl-8 pt-2 text-red-600 font-semibold hover:text-red-700 cursor-pointer">Login</div>
      </div>
    </div>
    <div class="grid grid-cols-1 lg:grid-cols-2 bg-current bg-gradient-to-r from-blue-900">
      <div class="lg:ml-20 xl:ml-32 mt-32 lg:mt-32 xl:mt-10 lg:mb-20 xl:mb-0 text-left text-center lg:text-left">
        <h1 class="text-4xl lg:text-5xl xl:text-6xl font-black text-white mt-12">Commerce. <br />Not Complicated.</h1>
        <p class="text-white pt-2 pb-6 text-sm">Teespring is a free end to end solution for your e-commerce business. Create & <br />sell online.</p>
        <button class="bg-red-600 text-white font-medium text-sm py-2 px-6 rounded-sm mb-0 lg:mb-56">Get Started</button>
      </div>
      <div class="bg-contain bg-center bg-left-top bg-no-repeat mt-20 xl:mt-20" style="background-image: url('image/heroCropGraphic2Web.png')"></div>
    </div>
    <div class="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-0 mx-4 mt-8 lg:-mt-32 mb-20 lg:mx-20 xl:container xl:mx-auto">
      <div class="shadow-2xl"><img class="rounded-sm" src="../../assets/image/tiktok_homepage_v2.png" /></div>
      <div class="shadow-2xl"><img class="rounded-sm" src="../../assets/image/YouTubeTile.jpg" /></div>
      <div class="shadow-2xl"><img class="rounded-sm" src="../../assets/image/CreatorTile.jpg" /></div>
    </div>
    <div class="bg-gray-200 lg:mx-12 xl:mx-auto xl:container hidden lg:flex">
      <div class="ml-20 my-6">
        <p class="font-extrabold text-5xl mb-6">Browse products <br />created with<br />Teespring</p>
        <div class="inline-flex">
          <div class="pt-4 px-3 bg-white">
            <img class="" style="width: 15px; height: 15px" src="../../assets/image/search-magnifier-outline-svgrepo-com.svg" alt="" />
          </div>
          <input type="text" placeholder="search the marketplace " class="py-3 outline-none w-56" />
          <button class="bg-red-600 text-white font-medium text-sm py-3 px-8">Go</button>
        </div>
      </div>
      <div class="">
        <img class="mt-10 lg:ml-4 xl:ml-64" style="height: 250px" src="../../../public/image/searchProducts.png" />
      </div>
    </div>
    <div class="bg-contain bg-center bg-no-repeat bg-gray-500 lg:hidden" style="background-image: url('image/searchProducts.png');">
      <div class="text-center py-40">
        <p class="text-4xl font-bold text-white leading-tight mb-8">
          Browse products<br />
          created with Teespring
        </p>
        <div class="inline-flex">
          <div class="pt-4 px-3 bg-white">
            <img class="" style="width: 15px; height: 15px" src="../../assets/image/search-magnifier-outline-svgrepo-com.svg" alt="" />
          </div>
          <input type="text" placeholder="search the marketplace " class="py-3 outline-none w-56" />
          <button class="bg-red-600 text-white font-medium text-sm py-3 px-8">Go</button>
        </div>
      </div>
      <div class="bg-blue-900 text-white text-sm font-normal bg-opacity-75 text-center">
        <div class="py-3"><a href="">Shop by Categories</a></div>
      </div>
    </div>
    <div class="lg:grid hidden grid-cols-1 bg-gray-900 lg:mx-12 xl:container mx-auto">
      <div class="flex items-center my-6 lg:ml-4 xl:ml-48">
        <p class="text-white font-medium">Design your own products?</p>
        <p class="text-white">Teespring makes it easy to create, sell, and order custom products.</p>
        <button class="bg-red-600 text-white font-medium text-sm py-3 px-8 rounded ml-8">Start Designing</button>
      </div>
    </div>
    <div class="grid grid-cols-1 lg:mx-12 xl:container mx-auto ">
      <div class="my-12"><h2 class="font-extrabold text-2xl">Recommendations For You</h2></div>
      <div class="inline-flex">
        <router-link to="/teespring-shop">
          <div class="pr-8">
            <img style="width:309px; height: 350px" src="../../assets/image/1.jpg" />
            <div class="text-center my-4">
              <p class="text-sm">Limited Edition</p>
              <p class="text-xs text-gray-600">by COLLECTION BEER T-SHIRTS.</p>
            </div>
          </div>
        </router-link>
        <div class="pr-8">
          <img style="width:309px; height: 350px" src="../../assets/image/2.jpg" />
          <div class="text-center my-4">
            <p class="text-sm">Beer o'clok</p>
            <p class="text-xs text-gray-600">by COLLECTION BEER T-SHIRTS.</p>
          </div>
        </div>
        <div class="pr-8">
          <img style="width:309px; height: 350px" src="../../assets/image/3.jpg" />
          <div class="text-center my-4">
            <p class="text-sm">Buy beer</p>
            <p class="text-xs text-gray-600">by COLLECTION BEER T-SHIRTS.</p>
          </div>
        </div>
        <div class="">
          <img style="width:309px; height: 350px" src="../../assets/image/4.jpg" />
          <div class="text-center my-4">
            <p class="text-sm">BFF Beer Friends Borever</p>
            <p class="text-xs text-gray-600">by COLLECTION BEER T-SHIRTS.</p>
          </div>
        </div>
      </div>
    </div>
    <div class="grid grid-cols-1 lg:mx-12 xl:container mx-auto">
      <div class="my-12"><h2 class="font-extrabold text-2xl">Trending</h2></div>
      <div class="inline-flex">
        <div class="pr-8">
          <img class="bg-gray-600" style="width:309px; height: 350px" src="../../assets/image/1.jpg" />
          <div class="text-center my-4">
            <p class="text-sm">Limited Edition</p>
            <p class="text-xs text-gray-600">by COLLECTION BEER T-SHIRTS.</p>
          </div>
        </div>
        <div class="pr-8">
          <img style="width:309px; height: 350px" src="../../assets/image/2.jpg" />
          <div class="text-center my-4">
            <p class="text-sm">Beer o'clok</p>
            <p class="text-xs text-gray-600">by COLLECTION BEER T-SHIRTS.</p>
          </div>
        </div>
        <div class="pr-8">
          <img style="width:309px; height: 350px" src="../../assets/image/3.jpg" />
          <div class="text-center my-4">
            <p class="text-sm">Buy beer</p>
            <p class="text-xs text-gray-600">by COLLECTION BEER T-SHIRTS.</p>
          </div>
        </div>
        <div class="">
          <img style="width:309px; height: 350px" src="../../assets/image/4.jpg" />
          <div class="text-center my-4">
            <p class="text-sm">BFF Beer Friends Borever</p>
            <p class="text-xs text-gray-600">by COLLECTION BEER T-SHIRTS.</p>
          </div>
        </div>
      </div>
    </div>
    <div class="grid hidden lg:block grid-cols-1 mt-6 mb-20 lg:mx-12 xl:container mx-auto">
      <div class="text-2xl font-extrabold my-6">Featured</div>
      <div class="inline-flex">
        <div class=""><img src="../../assets/image/5.png" /></div>
        <div class="mx-8"><img src="../../assets/image/6.png" /></div>
        <div class=""><img src="../../assets/image/7.png" /></div>
      </div>
    </div>
    <div class="mx-4 lg:hidden">
      <h1 class="text-center font-bold text-3xl my-3">Featured Collections</h1>
      <div class="grid grid-cols-1 mb-8">
        <div class=""><img src="../../assets/image/5.png" height="420" width="740" /></div>
      </div>
      <div class="grid grid-cols-2 gap-8">
        <div class=""><img src="../../assets/image/6.png" height="420" width="600" /></div>
        <div class=""><img src="../../assets/image/7.png" height="420" width="600" /></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "TeespringHome",
  inject: ["responsive"],
  computed: {
    responsiveValue() {
      return this.responsive.isMobile ? "Mobile" : "Desktop";
    }
  }
};
</script>

<style scoped></style>
