import React from 'react'
import Button from "@/components/common/Button"

const Header = () => {
  return (
    <header className="w-full z-50 sticky top-0">
      <nav>
        <div className="bg-white max-w-7xl mx-auto flex flex-wrap items-center justify-between ps-6 py-3 pe-3 border-b border-gray-200 rounded-2xl">
          <a href="https://flowbite.com/" className="flex items-center space-x-3 rtl:space-x-reverse">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="#000000" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M0 1.5C0 1.10218 0.158035 0.720644 0.43934 0.43934C0.720644 0.158035 1.10218 0 1.5 0L9 0C9.39782 0 9.77936 0.158035 10.0607 0.43934C10.342 0.720644 10.5 1.10218 10.5 1.5V22.5C10.5 22.8978 10.342 23.2794 10.0607 23.5607C9.77936 23.842 9.39782 24 9 24H1.5C1.10218 24 0.720644 23.842 0.43934 23.5607C0.158035 23.2794 0 22.8978 0 22.5V1.5ZM13.5 1.5C13.5 1.10218 13.658 0.720644 13.9393 0.43934C14.2206 0.158035 14.6022 0 15 0L22.5 0C22.8978 0 23.2794 0.158035 23.5607 0.43934C23.842 0.720644 24 1.10218 24 1.5V9C24 9.39782 23.842 9.77936 23.5607 10.0607C23.2794 10.342 22.8978 10.5 22.5 10.5H15C14.6022 10.5 14.2206 10.342 13.9393 10.0607C13.658 9.77936 13.5 9.39782 13.5 9V1.5ZM13.5 15C13.5 14.6022 13.658 14.2206 13.9393 13.9393C14.2206 13.658 14.6022 13.5 15 13.5H22.5C22.8978 13.5 23.2794 13.658 23.5607 13.9393C23.842 14.2206 24 14.6022 24 15V22.5C24 22.8978 23.842 23.2794 23.5607 23.5607C23.2794 23.842 22.8978 24 22.5 24H15C14.6022 24 14.2206 23.842 13.9393 23.5607C13.658 23.2794 13.5 22.8978 13.5 22.5V15Z"
                class="logo-icon" />
            </svg>
            <span className="self-center text-2xl font-semibold whitespace-nowrap ">Bento<span className="text-primary">Folio</span></span>
          </a>
          <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
            <Button variant="dark">
              Let's Talk
              <svg className="icon" width="20" height="20" viewBox="0 0 20 20" fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path d="M17.5 11.6665V6.6665H12.5" stroke="white" stroke-width="1.5" stroke-linecap="round"
                  stroke-linejoin="round" />
                <path d="M17.5 6.6665L10 14.1665L2.5 6.6665" stroke="white" stroke-width="1.5" stroke-linecap="round"
                  stroke-linejoin="round" />
              </svg>
            </Button>
            <button data-collapse-toggle="navbar-sticky" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200" aria-controls="navbar-sticky" aria-expanded="false">
              <span className="sr-only">Open main menu</span>
              <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15" />
              </svg>
            </button>
          </div>
          <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
            <ul className="flex flex-col md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-1 md:flex-row md:mt-0 md:border-0 md:bg-white">
              <li>
                <a href="#" className="py-2 px-3 rounded md:bg-transparent md:text-primary md:p-0 " aria-current="page"><svg class="nav-icon" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M13.475 4.92481L9.03083 1.46814C8.64082 1.16473 8.1608 1 7.66667 1C7.17254 1 6.69251 1.16473 6.3025 1.46814L1.8575 4.92481C1.59037 5.13254 1.37424 5.39858 1.22563 5.7026C1.07701 6.00662 0.99984 6.34058 1 6.67897V12.679C1 13.121 1.17559 13.5449 1.48816 13.8575C1.80072 14.17 2.22464 14.3456 2.66667 14.3456H12.6667C13.1087 14.3456 13.5326 14.17 13.8452 13.8575C14.1577 13.5449 14.3333 13.121 14.3333 12.679V6.67897C14.3333 5.99314 14.0167 5.34564 13.475 4.92481Z"
                    stroke-width="1.4" className='stroke-[#4770FF]' stroke-linecap="round" stroke-linejoin="round" />
                  <path d="M10.9753 10.1665C9.13359 11.2773 6.14859 11.2773 4.30859 10.1665" stroke-width="1.4"
                    stroke-linecap="round" className='stroke-[#4770FF]' stroke-linejoin="round" />
                </svg>
                  <span>Home</span></a>
              </li>
              <li>
                <a href="#" className="py-2 px-3 text-gray-900 rounded md:p-0 "> <svg class="nav-icon" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M9 9.8335C9.66304 9.8335 10.2989 9.5701 10.7678 9.10126C11.2366 8.63242 11.5 7.99654 11.5 7.3335C11.5 6.67045 11.2366 6.03457 10.7678 5.56573C10.2989 5.09689 9.66304 4.8335 9 4.8335C8.33696 4.8335 7.70107 5.09689 7.23223 5.56573C6.76339 6.03457 6.5 6.67045 6.5 7.3335C6.5 7.99654 6.76339 8.63242 7.23223 9.10126C7.70107 9.5701 8.33696 9.8335 9 9.8335Z"
                    stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round" />
                  <path d="M9 1.5C15 1.5 16.5 3 16.5 9C16.5 15 15 16.5 9 16.5C3 16.5 1.5 15 1.5 9C1.5 3 3 1.5 9 1.5Z"
                    stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round" />
                  <path
                    d="M4 15.7085V15.6668C4 14.7828 4.35119 13.9349 4.97631 13.3098C5.60143 12.6847 6.44928 12.3335 7.33333 12.3335H10.6667C11.5507 12.3335 12.3986 12.6847 13.0237 13.3098C13.6488 13.9349 14 14.7828 14 15.6668V15.7085"
                    stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
                  About</a>
              </li>
              <li>
                <a href="#" className="py-2 px-3 text-gray-900 rounded md:p-0    "> <svg class="nav-icon" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M7.99967 1.3335L1.33301 4.66683L7.99967 8.00016L14.6663 4.66683L7.99967 1.3335Z"
                    stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round" />
                  <path d="M1.33301 8L7.99967 11.3333L14.6663 8" stroke-width="1.4" stroke-linecap="round"
                    stroke-linejoin="round" />
                  <path d="M1.33301 11.3335L7.99967 14.6668L14.6663 11.3335" stroke-width="1.4" stroke-linecap="round"
                    stroke-linejoin="round" />
                </svg>
                  Services</a>
              </li>
              <li>
                <a href="#" className="py-2 px-3 text-gray-900 rounded md:p-0"><svg class="nav-icon" viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M2.00326 3.99733L7.95159 1.40649C8.04974 1.36442 8.15533 1.34243 8.26212 1.34181C8.3689 1.34119 8.47473 1.36196 8.57337 1.40289C8.67201 1.44382 8.76145 1.50408 8.83642 1.58013C8.9114 1.65617 8.97039 1.74646 9.00992 1.84566L13.1133 11.764C13.1985 11.9651 13.2014 12.1917 13.1213 12.3949C13.0412 12.5982 12.8845 12.7618 12.6849 12.8507L6.73742 15.4415C6.63922 15.4837 6.53356 15.5058 6.42668 15.5065C6.3198 15.5072 6.21387 15.4864 6.11514 15.4455C6.0164 15.4046 5.92688 15.3442 5.85184 15.2681C5.7768 15.192 5.71778 15.1016 5.67826 15.0023L1.57492 5.08316C1.48963 4.88204 1.48673 4.65546 1.56684 4.45222C1.64696 4.24898 1.80367 4.08616 2.00326 3.99733Z"
                    stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round" />
                  <path
                    d="M11.5 1.3335H12.3333C12.5543 1.3335 12.7663 1.42129 12.9226 1.57757C13.0789 1.73385 13.1667 1.94582 13.1667 2.16683V5.0835"
                    stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round" />
                  <path
                    d="M15.6663 3C15.8863 3.09333 16.0997 3.18083 16.3063 3.2625C16.5098 3.34882 16.6706 3.51241 16.7534 3.71729C16.8362 3.92217 16.8343 4.15155 16.748 4.355L14.833 8.83334"
                    stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
                  Works</a>
              </li>
              <li>
                <a href="#" className="py-2 px-3 text-gray-900 rounded md:p-0"> <svg class="nav-icon" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M12.1663 6.16676L13.4163 4.91676C13.6352 4.69789 13.8088 4.43805 13.9273 4.15208C14.0457 3.86612 14.1067 3.55962 14.1067 3.25009C14.1067 2.94056 14.0457 2.63406 13.9273 2.3481C13.8088 2.06213 13.6352 1.80229 13.4163 1.58342C13.1975 1.36455 12.9376 1.19094 12.6517 1.07248C12.3657 0.954033 12.0592 0.893066 11.7497 0.893066C11.4401 0.893066 11.1336 0.954033 10.8477 1.07248C10.5617 1.19094 10.3019 1.36455 10.083 1.58342L1.33301 10.3334V13.6668H4.66634L6.33301 12.0001"
                        stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round" />
                      <path
                        d="M13.0004 15.3335L15.7921 12.5968C15.9633 12.4307 16.0995 12.232 16.1926 12.0124C16.2857 11.7927 16.3339 11.5567 16.3343 11.3181C16.3347 11.0796 16.2873 10.8434 16.1948 10.6235C16.1024 10.4035 15.9669 10.2044 15.7963 10.0377C15.448 9.69712 14.9806 9.50602 14.4935 9.50509C14.0065 9.50415 13.5383 9.69346 13.1888 10.0327L13.0021 10.216L12.8163 10.0327C12.4681 9.69237 12.0008 9.50143 11.5139 9.50049C11.0271 9.49956 10.5591 9.68871 10.2096 10.0277C10.0383 10.1937 9.9021 10.3924 9.80891 10.612C9.71572 10.8316 9.66746 11.0677 9.667 11.3062C9.66653 11.5447 9.71386 11.781 9.80619 12.0009C9.89853 12.2209 10.034 12.4201 10.2046 12.5868L13.0004 15.3335Z"
                        stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                    Blog</a>
              </li>
              <li>
                <a href="#" className="py-2 px-3 text-gray-900 rounded md:p-0"><svg class="nav-icon" viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M5.66699 5.5H12.3337" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round" />
                      <path d="M5.66699 8.8335H10.667" stroke-width="1.4" stroke-linecap="round"
                        stroke-linejoin="round" />
                      <path
                        d="M14 1.3335C14.663 1.3335 15.2989 1.59689 15.7678 2.06573C16.2366 2.53457 16.5 3.17045 16.5 3.8335V10.5002C16.5 11.1632 16.2366 11.7991 15.7678 12.2679C15.2989 12.7368 14.663 13.0002 14 13.0002H9.83333L5.66667 15.5002V13.0002H4C3.33696 13.0002 2.70107 12.7368 2.23223 12.2679C1.76339 11.7991 1.5 11.1632 1.5 10.5002V3.8335C1.5 3.17045 1.76339 2.53457 2.23223 2.06573C2.70107 1.59689 3.33696 1.3335 4 1.3335H14Z"
                        stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                    Contact</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Header