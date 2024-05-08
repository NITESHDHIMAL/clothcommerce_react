import React from 'react'
import { useGetProductQuery } from '../services/productApi'
import { Link } from 'react-router-dom'
import Wrapper from '../components/Wrapper'

const Home = () => {

  const { data, isError, isLoading } = useGetProductQuery()

  // const responseInfo = useGetProductQuery()

  // console.log(responseInfo)



  return (
    <>
      <Wrapper>
        <div class="mx-auto max-w-screen-lg">
          {/* <div class="relative h-56 rounded-b-lg bg-cover bg-center bg-no-repeat shadow-lg" style="background-image: url(/images/GAcBPDmKfWAyDJgnTmg0A.png)"> */}
          <div class="relative h-56 rounded-b-lg bg-cover bg-center bg-no-repeat shadow-lg">
            <div class="px-4 pt-8 pb-10">
              <div class="absolute inset-x-0 -bottom-10 mx-auto w-36 rounded-full border-8 border-white shadow-lg">
                <span class="absolute right-0 m-3 h-3 w-3 rounded-full bg-green-500 ring-2 ring-green-300 ring-offset-2"></span>
                <img class="mx-auto h-auto w-full rounded-full" src="/images/n2yIu0Buhpft9wZ6tROzn.png" alt="" />
              </div>
            </div>
          </div>
          <div class="mt-10 flex flex-col items-start justify-center space-y-4 py-8 px-4 sm:flex-row sm:space-y-0 md:justify-between lg:px-0">
            <div class="max-w-lg">
              <h1 class="text-2xl font-bold text-gray-800">Beep Essences</h1>
              <p class="mt-2 text-gray-600">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Explicabo, alias. Quas necessitatibus exercitationem praesentium.</p>
            </div>
            <div class="">
              <button class="flex whitespace-nowrap rounded-lg bg-pink-600 px-6 py-2 font-bold text-white transition hover:translate-y-1">
                <svg xmlns="http://www.w3.org/2000/svg" class="mr-2 inline h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
                Chat with us
              </button>
              <p class="mt-4 flex items-center whitespace-nowrap text-gray-500 sm:justify-end">
                <svg xmlns="http://www.w3.org/2000/svg" class="mr-2 inline h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
                +1 432 923 0001
              </p>
            </div>
          </div>

          <main class="grid grid-cols-2 gap-x-6 gap-y-10 px-2 pb-20 sm:grid-cols-3 sm:px-8 lg:mt-16 lg:grid-cols-4 lg:gap-x-4 lg:px-0">
            {data?.map((data) => (
              <article class="relative">
                <div class="aspect-square overflow-hidden">
                  <img class="h-full w-full object-cover transition-all duration-300 group-hover:scale-125" src={data?.image} alt="product" />
                </div>
                <div class="absolute top-0 m-1 rounded-full bg-white">
                  <p class="rounded-full bg-black p-1 text-[10px] font-bold uppercase tracking-wide text-white sm:py-1 sm:px-3">Sale</p>
                </div>
                <div class="mt-4 flex items-start justify-between">
                  <div class="">
                    <h3 class="text-xs font-semibold sm:text-sm md:text-base">
                      <Link to={`/productdetails/${data?.id}`} title="" class="">
                        {data?.title}
                        <span class="absolute" aria-hidden="true"></span>
                      </Link>
                    </h3>
                    <div class="mt-2 flex items-center">
                      <svg class="block h-3 w-3 align-middle text-pink-600 sm:h-4 sm:w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" class=""></path>
                      </svg>
                      <svg class="block h-3 w-3 align-middle text-pink-600 sm:h-4 sm:w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" class=""></path>
                      </svg>
                      <svg class="block h-3 w-3 align-middle text-pink-600 sm:h-4 sm:w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" class=""></path>
                      </svg>
                      <svg class="block h-3 w-3 align-middle text-pink-600 sm:h-4 sm:w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" class=""></path>
                      </svg>
                      <svg class="block h-3 w-3 align-middle text-gray-400 sm:h-4 sm:w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" class=""></path>
                      </svg>
                    </div>
                  </div>

                  <div class="text-right">
                    <del class="mt-px text-xs font-semibold text-gray-600 sm:text-sm"> $79.00 </del>
                    <p class="text-xs font-normal sm:text-sm md:text-base">${data?.price}</p>
                  </div>
                </div>
              </article>
            ))}

          </main>
        </div>
      </Wrapper>
    </>
  )
}

export default Home