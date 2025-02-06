'use client'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'

export default function Footer() {

  const pathname = usePathname()

    return (
      <footer className="px-[30px] lg:pl-[0px]  lg:pr-[60px] lg:mx-10 mb-[100px] lg:mb-[200px] flex flex-col lg:flex-row mt-[50px] lg:mt-[100px]">
        <div className="lg:w-1/2">
          {
            pathname.includes('contact') ? 
            <Image 
              className="m-auto lg:ml-6"
              src="/about/placeholder.jpeg"
              width={100}
              height={100}
              alt="my logo"
            />
            :
            <>
              <Image 
                className="lg:hidden m-auto lg:ml-6"
                src="/about/placeholder.jpeg"
                width={100}
                height={100}
                style={{'marginBottom': '4rem'}}
                alt="my logo"
              />
              <Link className="contact-link uppercase hover:bg-white hover:text-black transition-colors get-in-touch block text-center text-[30px] w-full lg:!w-fit lg:text-[40px] rounded-full px-9 lg:px-[4rem] py-2 border" href="/contact">Get in touch</Link>
            </>
          }
        </div>
        <div className="flex flex-col w-full lg:items-end lg:w-1/2 gap-6 mt-16 lg:mt-0">
          <a className="link-underline gap-4 text-[20px] social-link lg:text-[30px] flex items-center relative lg:w-1/3 justify-between" href="#" target="_blank">
            Link 1
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g id="Arrow / Arrow_Up_Right_LG">
                <path id="Vector" d="M18.3646 5.63623H11.2939M18.3646 5.63623L18.3643 12.7073M18.3646 5.63623L5.63672 18.3642" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
              </g>
            </svg>
          </a>
          <a className="link-underline gap-4 text-[20px] social-link lg:text-[30px] flex items-center relative lg:w-1/3 justify-between" href="#" target="_blank">
            Link 2
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g id="Arrow / Arrow_Up_Right_LG">
                <path id="Vector" d="M18.3646 5.63623H11.2939M18.3646 5.63623L18.3643 12.7073M18.3646 5.63623L5.63672 18.3642" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
              </g>
            </svg>
          </a>
        </div>
      </footer>
    )
}