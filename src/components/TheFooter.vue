<template>
  <div class="">
    <div class="" v-if="!responsive.isMobile">
      <div class="border-t"></div>
      <div class="grid grid-cols-5 mt-12 md: ml-16 lg:mx-12 xl:container mx-auto">
        <div class="">
          <div class="mb-10" style="width: 42px;height: 18px">
            <svg>
              <path
                d="M27.22 2.52c-1.328 0-2.408 1.06-2.408 2.363 0 1.855.7 3.55 1.854 4.852.478.538 1.033 1.008 1.65 1.393.37-.553.68-1.15.918-1.78.358-.95.554-1.977.554-3.048 0-.636-.07-1.256-.202-1.855-.01-.05-.023-.1-.035-.15-.267-1.02-1.21-1.775-2.33-1.775zM12.364 9.348c.238.63.548 1.227.92 1.78.615-.385 1.17-.855 1.648-1.393 1.155-1.3 1.856-2.997 1.856-4.852 0-1.303-1.08-2.363-2.41-2.363-1.12 0-2.062.756-2.33 1.774-.01.05-.024.1-.035.15-.13.6-.2 1.22-.2 1.856 0 1.07.195 2.098.553 3.048zm26.74-1.156L41.4 9.32c-1.66 3.25-5.085 5.484-9.044 5.484-1.164 0-2.28-.195-3.322-.55-2.097 2.088-5.01 3.385-8.235 3.385-3.225 0-6.14-1.298-8.236-3.387-1.04.356-2.16.55-3.323.55-4.12 0-7.665-2.42-9.24-5.89l2.35-1.025c1.176 2.587 3.82 4.396 6.89 4.396.56 0 1.107-.062 1.632-.176-1.035-1.7-1.63-3.685-1.63-5.808 0-.808.087-1.597.25-2.357.024-.11.05-.216.077-.324C10.136 1.534 12.073 0 14.376 0c.046 0 .09.002.136.003.14.004.28.013.418.028 2.49.27 4.424 2.34 4.424 4.853 0 3.378-1.722 6.36-4.35 8.15 1.566 1.3 3.588 2.086 5.795 2.086 2.206 0 4.228-.787 5.794-2.086-2.628-1.79-4.35-4.773-4.35-8.15C22.243 2.37 24.177.3 26.665.03c.138-.014.277-.023.418-.027.046 0 .09-.003.137-.003 2.304 0 4.24 1.535 4.808 3.62.027.107.053.214.077.323.164.76.25 1.55.25 2.357 0 2.123-.595 4.11-1.63 5.808.526.114 1.07.176 1.63.176 2.95 0 5.506-1.668 6.747-4.092z"
              ></path>
            </svg>
          </div>
          <div class="lg:flex">
            <a href="" class="bg-gray-200 rounded-full">
              <svg viewBox="0 0 512 512" style="width: 24px; height: 24px; margin: 4px">
                <path
                  fill="#BEC2C4"
                  d="M211.9 197.4h-36.7v59.9h36.7V433.1h70.5V256.5h49.2l5.2-59.1h-54.4c0 0 0-22.1 0-33.7 0-13.9 2.8-19.5 16.3-19.5 10.9 0 38.2 0 38.2 0V82.9c0 0-40.2 0-48.8 0 -52.5 0-76.1 23.1-76.1 67.3C211.9 188.8 211.9 197.4 211.9 197.4z"
                ></path>
              </svg>
            </a>
            <a href="" class="bg-gray-200 mx-3 rounded-full">
              <svg viewBox="0 0 512 512" style="width: 24px; height: 24px; margin: 4px">
                <path
                  d="M419.6 168.6c-11.7 5.2-24.2 8.7-37.4 10.2 13.4-8.1 23.8-20.8 28.6-36 -12.6 7.5-26.5 12.9-41.3 15.8 -11.9-12.6-28.8-20.6-47.5-20.6 -42 0-72.9 39.2-63.4 79.9 -54.1-2.7-102.1-28.6-134.2-68 -17 29.2-8.8 67.5 20.1 86.9 -10.7-0.3-20.7-3.3-29.5-8.1 -0.7 30.2 20.9 58.4 52.2 64.6 -9.2 2.5-19.2 3.1-29.4 1.1 8.3 25.9 32.3 44.7 60.8 45.2 -27.4 21.4-61.8 31-96.4 27 28.8 18.5 63 29.2 99.8 29.2 120.8 0 189.1-102.1 185-193.6C399.9 193.1 410.9 181.7 419.6 168.6z"
                  fill="#BEC2C4"
                ></path>
              </svg>
            </a>
            <a href="" class="bg-gray-200 rounded-full">
              <svg viewBox="0 0 32 32" style="width: 24px; height: 24px; margin:4px; padding:3px ">
                <path
                  d="M16 2.88c4.275 0 4.78.02 6.462.095 1.563.07 2.406.33 2.97.55.743.288 1.28.638 1.836 1.194.563.56.906 1.09 1.2 1.834.22.563.48 1.412.55 2.97.075 1.687.094 2.193.094 6.462s-.02 4.78-.094 6.462c-.07 1.562-.33 2.405-.55 2.97-.288.742-.637 1.28-1.194 1.835-.563.563-1.094.906-1.837 1.2-.563.22-1.413.48-2.97.55-1.687.075-2.193.094-6.462.094s-4.78-.02-6.463-.095c-1.563-.07-2.406-.33-2.97-.55-.743-.288-1.28-.637-1.837-1.194-.563-.562-.906-1.093-1.2-1.836-.22-.563-.48-1.413-.55-2.97-.075-1.687-.094-2.193-.094-6.462s.02-4.78.098-6.463c.07-1.564.33-2.407.55-2.97.288-.744.638-1.28 1.194-1.838.563-.564 1.094-.907 1.838-1.2.563-.22 1.412-.48 2.97-.55 1.68-.076 2.187-.095 6.462-.095zM16 0c-4.344 0-4.887.02-6.594.094-1.7.075-2.87.35-3.88.744-1.057.412-1.95.956-2.838 1.85-.894.888-1.438 1.78-1.85 2.83C.444 6.54.168 7.7.094 9.4.02 11.113 0 11.656 0 16s.02 4.887.094 6.594c.075 1.7.35 2.87.744 3.88.413 1.057.956 1.95 1.85 2.838.887.887 1.78 1.438 2.83 1.844 1.02.394 2.182.67 3.882.744 1.706.075 2.25.094 6.594.094s4.888-.02 6.594-.094c1.7-.075 2.87-.35 3.88-.744 1.05-.406 1.945-.956 2.832-1.844s1.438-1.78 1.844-2.83c.394-1.02.67-2.182.744-3.882.075-1.706.094-2.25.094-6.594s-.02-4.887-.094-6.594c-.075-1.7-.35-2.87-.744-3.88-.394-1.064-.938-1.957-1.83-2.845C28.424 1.8 27.53 1.25 26.48.843 25.46.45 24.3.173 22.6.1 20.888.016 20.344 0 16 0z"
                  fill="#BEC2C4"
                ></path>
                <path
                  d="M16 7.78c-4.537 0-8.22 3.682-8.22 8.22s3.682 8.22 8.22 8.22 8.22-3.682 8.22-8.22c0-4.537-3.682-8.22-8.22-8.22zm0 13.55c-2.944 0-5.33-2.386-5.33-5.33s2.386-5.33 5.33-5.33 5.33 2.386 5.33 5.33-2.386 5.33-5.33 5.33zM26.462 7.456c0 1.06-.86 1.92-1.92 1.92s-1.918-.86-1.918-1.92.86-1.92 1.92-1.92 1.918.86 1.918 1.92z"
                  fill="#BEC2C4"
                ></path>
              </svg>
            </a>
            <a href="" class="bg-gray-200 mx-3 rounded-full">
              <svg viewBox="0 0 512 512" style="width: 24px; height: 24px; margin: 4px">
                <path
                  fill="#BEC2C4"
                  d="M266.6 76.5c-100.2 0-150.7 71.8-150.7 131.7 0 36.3 13.7 68.5 43.2 80.6 4.8 2 9.2 0.1 10.6-5.3 1-3.7 3.3-13 4.3-16.9 1.4-5.3 0.9-7.1-3-11.8 -8.5-10-13.9-23-13.9-41.3 0-53.3 39.9-101 103.8-101 56.6 0 87.7 34.6 87.7 80.8 0 60.8-26.9 112.1-66.8 112.1 -22.1 0-38.6-18.2-33.3-40.6 6.3-26.7 18.6-55.5 18.6-74.8 0-17.3-9.3-31.7-28.4-31.7 -22.5 0-40.7 23.3-40.7 54.6 0 19.9 6.7 33.4 6.7 33.4s-23.1 97.8-27.1 114.9c-8.1 34.1-1.2 75.9-0.6 80.1 0.3 2.5 3.6 3.1 5 1.2 2.1-2.7 28.9-35.9 38.1-69 2.6-9.4 14.8-58 14.8-58 7.3 14 28.7 26.3 51.5 26.3 67.8 0 113.8-61.8 113.8-144.5C400.1 134.7 347.1 76.5 266.6 76.5z"
                >
                  &gt;
                </path>
              </svg>
            </a>
          </div>
        </div>
        <div class="block">
          <ul class="ml-10">
            <h4 class="font-semibold mb-4">Sell</h4>
            <li class="inline-grid font-light text-sm text-gray-600">
              <a href="" class="my-2">Quickstart guide</a>
              <a href="" class="my-2">Sell anything</a>
              <a href="" class="my-2">Sell everywhere</a>
              <a href="" class="my-2">Products</a>
              <a href="" class="my-2">Brands</a>
              <a href="" class="my-2">Training center</a>
              <a href="" class="my-2">Start selling</a>
              <a href="">Login</a>
            </li>
          </ul>
        </div>
        <div class="">
          <ul class="ml-10">
            <h4 class="font-semibold mb-4">Buy</h4>
            <li class="inline-grid font-light text-sm text-gray-600">
              <a href="" class="my-2">Quickstart guide</a>
              <a href="" class="my-2">Sell anything</a>
              <a href="" class="my-2">Sell everywhere</a>
              <a href="" class="my-2">Products</a>
              <a href="" class="my-2">Brands</a>
              <a href="" class="my-2">Training center</a>
              <a href="">Start selling</a>
            </li>
          </ul>
        </div>
        <div class="">
          <ul class="ml-10">
            <h4 class="font-semibold mb-4">Integrations</h4>
            <li class="inline-grid font-light text-sm text-gray-600">
              <a href="" class="my-2">Quickstart guide</a>
              <a href="" class="my-2">Sell anything</a>
              <a href="" class="my-2">Sell everywhere</a>
              <a href="" class="my-2">Products</a>
              <a href="" class="my-2">Brands</a>
              <a href="">Training center</a>
            </li>
          </ul>
        </div>
        <div class="">
          <ul class="ml-10">
            <h4 class="font-semibold mb-4">About</h4>
            <li class="inline-grid font-light text-sm text-gray-600">
              <a href="" class="my-2">Quickstart guide</a>
              <a href="" class="my-2">Sell anything</a>
              <a href="" class="my-2">Sell everywhere</a>
              <a href="">Products</a>
            </li>
          </ul>
        </div>
      </div>
      <div class="grid grid-cols-1 container mx-auto">
        <div class="flex text-gray-600 text-sm font-light my-10">
          <p class="">© 2020 Teespring, Inc.</p>
          <p class="mx-2">Terms of service</p>
          <p class="mx-2">Privacy policy</p>
          <p class="mx-2">Security</p>
          <p class="mx-2">Do not sell my info. | CA privacy rights</p>
          <p class="">Impressum</p>
        </div>
      </div>
    </div>
    <div class="mx-10" v-if="responsive.isMobile">
      <div class="">
        <div class="text-sm font-semibold border-t border-b py-5 pl-3 flex justify-between">
          <a href="#t" class="w-full" @click="isOpen = !isOpen"
            >Sell
            <ul v-if="isOpen">
              <li class="font-light text-gray-600">
                <a href="" class="block my-3">Quickstart Guide</a>
                <a href="" class="block">Sell anything</a>
                <a href="" class="block my-3">Sell everywhere</a>
                <a href="" class="block">product</a>
                <a href="" class="block my-3">Brands</a>
                <a href="" class="block">Training center</a>
              </li>
            </ul>
          </a>
        </div>
        <div class="text-sm font-semibold border-b py-5 pl-3 flex justify-between">
          <a href="#r" @click="isOpen = !isOpen" class="w-full"
            >Buy
            <ul v-show="isOpen">
              <li class="font-light text-gray-600">
                <a href="" class="block my-3">Quickstart Guide</a>
                <a href="" class="block">Sell anything</a>
                <a href="" class="block my-3">Sell everywhere</a>
                <a href="" class="block">product</a>
                <a href="" class="block my-3">Brands</a>
                <a href="" class="block">Training center</a>
              </li>
            </ul></a
          >
        </div>
        <div class="text-sm font-semibold border-b py-5 pl-3 flex justify-between">
          <a href="">Integrations</a>
        </div>
        <div class="text-sm font-semibold border-b py-5 pl-3 flex justify-between">
          <a href="">About</a>
        </div>
      </div>
      <div class="mt-4">
        <lable>
          <select name="" class="border border-black p-2 w-1/3 outline-none border-r-0 text-sm font-light">
            <option value="">USA</option>
            <option value="">EU</option>
            <option value="">Canada</option>
          </select>
          <select name="" class="border border-black p-2  w-1/3 outline-none border-r-0 text-sm font-light">
            <option value="">Deutsch</option>
            <option value="">English(USA)</option>
            <option value="">English(UK)</option>
          </select>
          <select name="" class="border border-black p-2  w-1/3 outline-none text-sm font-light">
            <option value="">$ USD</option>
            <option value=""><span>&#163;</span> GBP</option>
            <option value=""><span>&#8364;</span> EUR</option>
          </select>
        </lable>
      </div>
      <div class="">
        <div class="mb-4 mt-10 ml-5" style="width: 42px;height: 18px">
          <svg>
            <path
              d="M27.22 2.52c-1.328 0-2.408 1.06-2.408 2.363 0 1.855.7 3.55 1.854 4.852.478.538 1.033 1.008 1.65 1.393.37-.553.68-1.15.918-1.78.358-.95.554-1.977.554-3.048 0-.636-.07-1.256-.202-1.855-.01-.05-.023-.1-.035-.15-.267-1.02-1.21-1.775-2.33-1.775zM12.364 9.348c.238.63.548 1.227.92 1.78.615-.385 1.17-.855 1.648-1.393 1.155-1.3 1.856-2.997 1.856-4.852 0-1.303-1.08-2.363-2.41-2.363-1.12 0-2.062.756-2.33 1.774-.01.05-.024.1-.035.15-.13.6-.2 1.22-.2 1.856 0 1.07.195 2.098.553 3.048zm26.74-1.156L41.4 9.32c-1.66 3.25-5.085 5.484-9.044 5.484-1.164 0-2.28-.195-3.322-.55-2.097 2.088-5.01 3.385-8.235 3.385-3.225 0-6.14-1.298-8.236-3.387-1.04.356-2.16.55-3.323.55-4.12 0-7.665-2.42-9.24-5.89l2.35-1.025c1.176 2.587 3.82 4.396 6.89 4.396.56 0 1.107-.062 1.632-.176-1.035-1.7-1.63-3.685-1.63-5.808 0-.808.087-1.597.25-2.357.024-.11.05-.216.077-.324C10.136 1.534 12.073 0 14.376 0c.046 0 .09.002.136.003.14.004.28.013.418.028 2.49.27 4.424 2.34 4.424 4.853 0 3.378-1.722 6.36-4.35 8.15 1.566 1.3 3.588 2.086 5.795 2.086 2.206 0 4.228-.787 5.794-2.086-2.628-1.79-4.35-4.773-4.35-8.15C22.243 2.37 24.177.3 26.665.03c.138-.014.277-.023.418-.027.046 0 .09-.003.137-.003 2.304 0 4.24 1.535 4.808 3.62.027.107.053.214.077.323.164.76.25 1.55.25 2.357 0 2.123-.595 4.11-1.63 5.808.526.114 1.07.176 1.63.176 2.95 0 5.506-1.668 6.747-4.092z"
            ></path>
          </svg>
        </div>
        <ul>
          <li class="flex">
            <a href="" class="bg-gray-200 rounded-full">
              <svg viewBox="0 0 512 512" style="width: 24px; height: 24px; margin: 4px">
                <path
                  fill="#BEC2C4"
                  d="M211.9 197.4h-36.7v59.9h36.7V433.1h70.5V256.5h49.2l5.2-59.1h-54.4c0 0 0-22.1 0-33.7 0-13.9 2.8-19.5 16.3-19.5 10.9 0 38.2 0 38.2 0V82.9c0 0-40.2 0-48.8 0 -52.5 0-76.1 23.1-76.1 67.3C211.9 188.8 211.9 197.4 211.9 197.4z"
                ></path>
              </svg>
            </a>
            <a href="" class="bg-gray-200 mx-3 rounded-full">
              <svg viewBox="0 0 512 512" style="width: 24px; height: 24px; margin: 4px">
                <path
                  d="M419.6 168.6c-11.7 5.2-24.2 8.7-37.4 10.2 13.4-8.1 23.8-20.8 28.6-36 -12.6 7.5-26.5 12.9-41.3 15.8 -11.9-12.6-28.8-20.6-47.5-20.6 -42 0-72.9 39.2-63.4 79.9 -54.1-2.7-102.1-28.6-134.2-68 -17 29.2-8.8 67.5 20.1 86.9 -10.7-0.3-20.7-3.3-29.5-8.1 -0.7 30.2 20.9 58.4 52.2 64.6 -9.2 2.5-19.2 3.1-29.4 1.1 8.3 25.9 32.3 44.7 60.8 45.2 -27.4 21.4-61.8 31-96.4 27 28.8 18.5 63 29.2 99.8 29.2 120.8 0 189.1-102.1 185-193.6C399.9 193.1 410.9 181.7 419.6 168.6z"
                  fill="#BEC2C4"
                ></path>
              </svg>
            </a>
            <a href="" class="bg-gray-200 rounded-full">
              <svg viewBox="0 0 32 32" style="width: 24px; height: 24px; margin:4px; padding:3px ">
                <path
                  d="M16 2.88c4.275 0 4.78.02 6.462.095 1.563.07 2.406.33 2.97.55.743.288 1.28.638 1.836 1.194.563.56.906 1.09 1.2 1.834.22.563.48 1.412.55 2.97.075 1.687.094 2.193.094 6.462s-.02 4.78-.094 6.462c-.07 1.562-.33 2.405-.55 2.97-.288.742-.637 1.28-1.194 1.835-.563.563-1.094.906-1.837 1.2-.563.22-1.413.48-2.97.55-1.687.075-2.193.094-6.462.094s-4.78-.02-6.463-.095c-1.563-.07-2.406-.33-2.97-.55-.743-.288-1.28-.637-1.837-1.194-.563-.562-.906-1.093-1.2-1.836-.22-.563-.48-1.413-.55-2.97-.075-1.687-.094-2.193-.094-6.462s.02-4.78.098-6.463c.07-1.564.33-2.407.55-2.97.288-.744.638-1.28 1.194-1.838.563-.564 1.094-.907 1.838-1.2.563-.22 1.412-.48 2.97-.55 1.68-.076 2.187-.095 6.462-.095zM16 0c-4.344 0-4.887.02-6.594.094-1.7.075-2.87.35-3.88.744-1.057.412-1.95.956-2.838 1.85-.894.888-1.438 1.78-1.85 2.83C.444 6.54.168 7.7.094 9.4.02 11.113 0 11.656 0 16s.02 4.887.094 6.594c.075 1.7.35 2.87.744 3.88.413 1.057.956 1.95 1.85 2.838.887.887 1.78 1.438 2.83 1.844 1.02.394 2.182.67 3.882.744 1.706.075 2.25.094 6.594.094s4.888-.02 6.594-.094c1.7-.075 2.87-.35 3.88-.744 1.05-.406 1.945-.956 2.832-1.844s1.438-1.78 1.844-2.83c.394-1.02.67-2.182.744-3.882.075-1.706.094-2.25.094-6.594s-.02-4.887-.094-6.594c-.075-1.7-.35-2.87-.744-3.88-.394-1.064-.938-1.957-1.83-2.845C28.424 1.8 27.53 1.25 26.48.843 25.46.45 24.3.173 22.6.1 20.888.016 20.344 0 16 0z"
                  fill="#BEC2C4"
                ></path>
                <path
                  d="M16 7.78c-4.537 0-8.22 3.682-8.22 8.22s3.682 8.22 8.22 8.22 8.22-3.682 8.22-8.22c0-4.537-3.682-8.22-8.22-8.22zm0 13.55c-2.944 0-5.33-2.386-5.33-5.33s2.386-5.33 5.33-5.33 5.33 2.386 5.33 5.33-2.386 5.33-5.33 5.33zM26.462 7.456c0 1.06-.86 1.92-1.92 1.92s-1.918-.86-1.918-1.92.86-1.92 1.92-1.92 1.918.86 1.918 1.92z"
                  fill="#BEC2C4"
                ></path>
              </svg>
            </a>
            <a href="" class="bg-gray-200 mx-3 rounded-full">
              <svg viewBox="0 0 512 512" style="width: 24px; height: 24px; margin: 4px">
                <path
                  fill="#BEC2C4"
                  d="M266.6 76.5c-100.2 0-150.7 71.8-150.7 131.7 0 36.3 13.7 68.5 43.2 80.6 4.8 2 9.2 0.1 10.6-5.3 1-3.7 3.3-13 4.3-16.9 1.4-5.3 0.9-7.1-3-11.8 -8.5-10-13.9-23-13.9-41.3 0-53.3 39.9-101 103.8-101 56.6 0 87.7 34.6 87.7 80.8 0 60.8-26.9 112.1-66.8 112.1 -22.1 0-38.6-18.2-33.3-40.6 6.3-26.7 18.6-55.5 18.6-74.8 0-17.3-9.3-31.7-28.4-31.7 -22.5 0-40.7 23.3-40.7 54.6 0 19.9 6.7 33.4 6.7 33.4s-23.1 97.8-27.1 114.9c-8.1 34.1-1.2 75.9-0.6 80.1 0.3 2.5 3.6 3.1 5 1.2 2.1-2.7 28.9-35.9 38.1-69 2.6-9.4 14.8-58 14.8-58 7.3 14 28.7 26.3 51.5 26.3 67.8 0 113.8-61.8 113.8-144.5C400.1 134.7 347.1 76.5 266.6 76.5z"
                >
                  &gt;
                </path>
              </svg>
            </a>
          </li>
        </ul>
        <div class="flex text-gray-600 text-xs font-light mt-6 mb-20">
          <p class="">© 2020 Teespring, Inc.</p>
          <p class="mx-2">Terms of service</p>
          <p class="mx-2">Privacy policy</p>
          <p class="mx-2">Security</p>
          <p class="">Impressum</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "TheFooter",
  inject: ["responsive"],
  computed: {
    responsiveValue() {
      return this.responsive.isMobile ? "Mobile" : "Desktop";
    }
  },
  data() {
    return {
      isOpen: false
    };
  }
};
</script>

<style scoped></style>
