<template>
  <div class="">
    <header-shop />
    <div class="bg-gradient-to-r from-purple-900  via-blue-600 to-pink-600">
      <div class="grid grid-cols-2 mx-auto container">
        <div class="ml-4 lg:ml-20 my-10 text-white">
          <h1 class="font-bold text-4xl">Apparel</h1>
          <p class="font-medium hidden xl:block">Shop for Apparel shirts, hoodies and gifts. Find Apparel designs printed with care on top quality garments.</p>
        </div>
        <div class=""></div>
      </div>
    </div>
    <div class="grid grid-cols-3 lg:grid-cols-4 gap-4 mt-16 mx-auto container">
      <div class="hidden lg:block lg:ml-10 xl:ml-20">
        <div class="bg-gray-200 pt-5 pl-4 text-red-700 font-semibold text-sm">
          <a href="" class="block">All Categories</a>
          <a href="" class="block py-6">Apparel</a>
        </div>
        <div class="bg-gray-200 pl-4 text-sm font-medium">
          Apparel
          <div class="text-gray-600 pl-6 pb-4">
            <a href="" class="block my-2">Hobbies</a>
            <a href="" class="block">Apparel</a>
            <a href="" class="block my-2">Patriotic</a>
            <a href="" class="block">Teespring Exclusives</a>
            <a href="" class="block my-2">Names</a>
          </div>
        </div>
        <div class="mt-4">
          Related to Apparel:
          <div class="pl-10 text-sm font-medium text-gray-600">
            <a href="" class="block my-2">Hobbies</a>
            <a href="" class="block">Apparel</a>
            <a href="" class="block my-2">Patriotic</a>
            <a href="" class="block">Teespring Exclusives</a>
            <a href="" class="block my-2">Names</a>
          </div>
        </div>
      </div>
      <div class="text-center text-sm font-semibold mx-auto pt-4">
        <div class="">
          <img class="" src="../../assets/image/1.jpg" height="340" width="250" />
          <p class="mt-4">Limited Edition.</p>
        </div>
        <div class="my-16">
          <img class="" src="../../assets/image/4.jpg" height="340" width="250" />
          <p class="mt-4">Just Eat It Burger Love</p>
        </div>
        <div class="">
          <img src="../../assets/image/1.jpg" height="340" width="250" />
          <p class="mt-4">Win some,Lose some,Dim sum</p>
        </div>
      </div>
      <div class="text-center text-sm font-semibold mx-auto pt-4">
        <div class="">
          <img class="" src="../../assets/image/2.jpg" height="340" width="250" />
          <p class="mt-4">Pizza Lover's Food Pyramid</p>
        </div>
        <div class="my-16">
          <img class="" src="../../assets/image/2.jpg" height="340" width="250" />
          <p class="mt-4">Fries Before Guys</p>
        </div>
        <div class="">
          <img class="" src="../../assets/image/4.jpg" height="340" width="250" />
          <p class="mt-4">Silliest</p>
        </div>
      </div>
      <div class="text-center text-sm font-semibold mx-auto pt-4">
        <div class="">
          <img class="" src="../../assets/image/1.jpg" height="340" width="250" />
          <p class="mt-4">Ameowica the Great - Funny patriotic</p>
        </div>
        <div class="my-16">
          <img class="" src="../../assets/image/1.jpg" height="340" width="250" />
          <p class="mt-4">Step Aside Coffee - Alcohol is Here</p>
        </div>
        <div class="">
          <img src="../../assets/image/4.jpg" height="340" width="250" />
          <p class="mt-4">Salt Bae Merica Edition</p>
        </div>
      </div>
    </div>
    <div class="grid grid-cols-3 lg:grid-cols-4 ml-20 mt-10">
      <div class="hidden lg:block"></div>
      <div class="col-span-3">
        <p class="font-light text-sm mb-4">Related Categories:</p>
        <a href="" class="text-white bg-indigo-900 border text-xs p-2 font-semibold">Patriotic</a>
        <a href="" class="text-white bg-indigo-900 border text-xs p-2 font-semibold mx-4">Artistic</a>
        <a href="" class="text-white bg-indigo-900 border text-xs p-2 font-semibold">LGBT</a>
        <a href="" class="text-white bg-indigo-900 border text-xs p-2 font-semibold mx-4">For a Cause</a>
        <a href="" class="text-white bg-indigo-900 border text-xs p-2 font-semibold">Hoodies</a>
        <a href="" class="text-white bg-indigo-900 border text-xs p-2 font-semibold mx-4">Adventure</a>
        <a href="" class="text-white bg-indigo-900 border text-xs p-2 font-semibold">Names</a>
        <a href="" class="text-white bg-indigo-900 border text-xs p-2 font-semibold mx-4">Trending Collection</a>
        <a href="" class="text-white bg-indigo-900 border text-xs p-2 font-semibold">Funny</a>
        <a href="" class="text-white bg-indigo-900 border text-xs p-2 font-semibold mx-4">Leggings</a>
      </div>
    </div>
    <div class="grid grid-cols-3 lg:grid-cols-4 gap-4 mt-20">
      <div class="hidden lg:block"></div>
      <div class="text-center mx-auto">
        <img src="../../assets/image/1.jpg" height="340" width="250" />
        <p>Totally Gay Hoodie</p>
      </div>
      <div class="text-center mx-auto ">
        <img src="../../assets/image/2.jpg" height="340" width="250" />
        <p>Silliest</p>
      </div>
      <div class="text-center mx-auto">
        <img src="../../assets/image/3.jpg" height="340" width="250" />
        <p>Salt Bae Merica Edition</p>
      </div>
    </div>
  </div>
</template>

<script>
import HeaderShop from "@/components/HeaderShop";
export default {
  name: "Apparel",
  components: { HeaderShop }
};
</script>

<style scoped></style>
