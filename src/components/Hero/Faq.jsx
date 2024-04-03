import React from 'react'


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
const Faq = () => {
  return (
    <div>
       <div className='w-full block text-center py-4'>
                <h1>FAQ</h1>
                <p className='py-4'>Frequently Asked Questions</p>
                <div className='w-full  lg:col-span-2 flex flex-col items-center justify-center'>
                    <ul class="w-[70%]  divide-y  shadow shadow-blue-600 rounded-xl">
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
    </div>
  )
}

export default Faq
