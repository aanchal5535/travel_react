import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';


const data = [
    {

        name: 'Eric Matthew',
        review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Venenatis urna cursus eget nunc scelerisque viverra mauris in. Tellus in hac habitasse platea dictumst vestibulum rhoncus. Nisl suscipit adipiscing bibendum est ultricies integer quis. Eu lobortis elementum nibh tellus molestie nunc non. Ut placerat orci nulla pellentesque. Risus feugiat in ante metus. Cras semper auctor neque vitae tempus quam pellentesque nec. Est ultricies integer quis auctor elit sed vulputate mi sit. Tincidunt ornare massa eget egestas purus.  '
    },
    {

        name: 'Eric Matthew',
        review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Venenatis urna cursus eget nunc scelerisque viverra mauris in. Tellus in hac habitasse platea dictumst vestibulum rhoncus. Nisl suscipit adipiscing bibendum est ultricies integer quis. Eu lobortis elementum nibh tellus molestie nunc non. Ut placerat orci nulla pellentesque. Risus feugiat in ante metus. Cras semper auctor neque vitae tempus quam pellentesque nec. Est ultricies integer quis auctor elit sed vulputate mi sit. Tincidunt ornare massa eget egestas purus.'
    },
    {

        name: 'Eric Matthew',
        review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Venenatis urna cursus eget nunc scelerisque viverra mauris in. Tellus in hac habitasse platea dictumst vestibulum rhoncus. Nisl suscipit adipiscing bibendum est ultricies integer quis. Eu lobortis elementum nibh tellus molestie nunc non. Ut placerat orci nulla pellentesque. Risus feugiat in ante metus. Cras semper auctor neque vitae tempus quam pellentesque nec. Est ultricies integer quis auctor elit sed vulputate mi sit. Tincidunt ornare massa eget egestas purus.'
    },
    {

        name: 'Eric Matthew',
        review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Venenatis urna cursus eget nunc scelerisque viverra mauris in. Tellus in hac habitasse platea dictumst vestibulum rhoncus. Nisl suscipit adipiscing bibendum est ultricies integer quis. Eu lobortis elementum nibh tellus molestie nunc non. Ut placerat orci nulla pellentesque. Risus feugiat in ante metus. Cras semper auctor neque vitae tempus quam pellentesque nec. Est ultricies integer quis auctor elit sed vulputate mi sit. Tincidunt ornare massa eget egestas purus. '
    },
]

const faq =[

    {
        question:'Flight Ticket',
        answer : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et ipsum sapien. Vestibulum molestieporttitor augue vitae vulputate. Aliquam nec ex maximus, suscipit diam vel, tristique tellus"
    },
    {
        question:'Accomodation',
        answer : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et ipsum sapien. Vestibulum molestieporttitor augue vitae vulputate. Aliquam nec ex maximus, suscipit diam vel, tristique tellus"
    },
    {
        question:'Packaged Tour',
        answer : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et ipsum sapien. Vestibulum molestieporttitor augue vitae vulputate. Aliquam nec ex maximus, suscipit diam vel, tristique tellus"
    },
    {
        question:'Getting Premium membership',
        answer : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et ipsum sapien. Vestibulum molestieporttitor augue vitae vulputate. Aliquam nec ex maximus, suscipit diam vel, tristique tellus"
    }

]
const Testimonals = () => {

    return (
        <div className='w-full mx-auto px-4 py-16 cursor-pointer grid sm:grid-cols-2 lg:grid-cols-2 gap-4'>
            <div className='w-full block text-center py-4'>
                <h1>FAQ</h1>
                <p className='py-4'>Frequently Asked Questions</p>
                <div className='w-full lg:col-span-2 flex flex-col justify-evenly'>
                    <ul class="  divide-y  shadow shadow-blue-600 rounded-xl">
                        <li>
                            { faq.map(({ question, answer }, index) => {
                                return (
                            <details class="group">
                                <summary class="flex items-center gap-3 px-4 py-3 font-medium marker:content-none hover:cursor-pointer">
                                    <svg class="w-5 h-5 text-gray-500 transition group-open:rotate-90" xmlns="http://www.w3.org/2000/svg"
                                        width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                                        <path fill-rule="evenodd"
                                            d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z">
                                        </path>
                                    </svg>
                                    <span>{question}</span>
                                </summary>

                                <article class="px-4 pb-4">
                                    <p>{answer}</p>
                                </article>
                            </details>
                                )
                            })
                        }
                        </li>
                    </ul>
                </div>
            </div>

            <div>
                <div className='w-full block text-center py-4 '>
                    <h1>Reviews from clients</h1>
                    <p className='py-4'>On the Caribbean's Best Beaches</p>
                    <Swiper className='max-w-[1240px]  mx-auto grid h-96 lg:grid-cols-3 gap-4 px-4 py-16 md:h-96'
                        navigation={{ clickable: true }}
                        spaceBetween={40}
                        modules={[Navigation]}
                        slidesPerView={1}>
                        {
                            data.map(({ name, review }, index) => {
                                return (
                                    <SwiperSlide key={index} className="text-center p-16 rounded-xl   border-2 ">
                                        <h2 >{name}</h2>
                                        <p className='py-2'>{review}</p>
                                    </SwiperSlide>
                                )
                            })
                        }
                    </Swiper>

                </div>
            </div>
        </div>
    );
};

export default Testimonals;