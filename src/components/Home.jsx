import React from 'react'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import EarningChart from '@/components/EarningChart'
import OrdersChart from '@/components/OrdersChart'
import ProfitChart from '@/components/ProfitChart'
import Footer from '@/components/Footer'
import TotalProfitChart from './TotalProfitChart'

const inter = Inter({ subsets: ['latin'] })

const Home = () => {
    return (
        <main className="relative h-screen overflow-hidden bg-gray-100 dark:bg-[#151A2E]">
            <div className="flex items-start justify-between">
                <div className="relative hidden h-screen shadow-lg lg:block w-80">
                    <div className="h-full bg-white dark:bg-[#171E37]">
                        <div className="flex items-center justify-center">
                            <a className="flex items-center justify-start w-full p-4 my-2 font-thin text-white transition-colors duration-200"
                                href="#">
                                <span>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="31" height="30" viewBox="0 0 31 30" fill="none">
                                        <path d="M30.16 10.11C30.1601 8.11967 29.5591 6.17573 28.4357 4.53279C27.3123 2.88985 25.7188 1.6245 23.8641 0.9025C22.0094 0.18049 19.9798 0.0354902 18.0413 0.48648C16.1027 0.93747 14.3456 1.96343 13 3.42997H0.52002V29.77H26.87V17.46C27.9042 16.535 28.7318 15.4023 29.2987 14.1358C29.8656 12.8693 30.1591 11.4976 30.16 10.11ZM25.09 10.11C25.092 11.0637 24.811 11.9966 24.2826 12.7906C23.7541 13.5845 23.0021 14.2039 22.1215 14.5702C21.2409 14.9366 20.2715 15.0335 19.3358 14.8486C18.4002 14.6638 17.5404 14.2055 16.8653 13.5318C16.1902 12.8581 15.7302 11.9993 15.5434 11.064C15.3566 10.1288 15.4515 9.15907 15.816 8.27777C16.1805 7.39643 16.7983 6.64306 17.5911 6.11299C18.384 5.58292 19.3163 5.29998 20.27 5.29997C21.5466 5.29997 22.7711 5.80642 23.6747 6.70818C24.5784 7.60994 25.0874 8.83337 25.09 10.11ZM21.8 24.7H5.59002V8.49997H10.53C10.4346 9.03147 10.3844 9.57007 10.38 10.11C10.3827 12.7322 11.4255 15.2462 13.2797 17.1004C15.1338 18.9545 17.6478 19.9974 20.27 20C20.7827 19.9973 21.2943 19.9538 21.8 19.87V24.7Z" fill="#FF814A" />
                                    </svg>
                                </span>
                                <span className="mx-4 text-lg font-normal">Inter-act</span>
                            </a>
                        </div>
                        <nav className="p-4 mt-6">
                            <div>
                                <a
                                    className="flex items-center justify-start w-full p-4 my-2 font-thin text-[#6C747D] transition-colors duration-200 rounded-lg bg-[#1F2849] dark:bg-[#1F2849] group"
                                    href="#"
                                >
                                    <span className="text-left">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="17" height="16" viewBox="0 0 17 16" fill="none">
                                            <path fillRule="evenodd" clipRule="evenodd" d="M0 7.45345C0 6.77185 0.289293 6.12228 0.795921 5.66632L6.40604 0.617208C7.32042 -0.205735 8.7085 -0.205736 9.62288 0.617207L15.233 5.66632C15.7396 6.12228 16.0289 6.77185 16.0289 7.45345V13.5957C16.0289 14.9235 14.9525 16 13.6246 16H11.2202L11.2158 16H4.81315L4.80868 16H2.40434C1.07646 16 0 14.9235 0 13.5957V7.45345Z" fill="#0BB885" />
                                            <path d="M5.60999 11.5884C5.60999 10.4838 6.50542 9.58838 7.60999 9.58838H8.41866C9.52323 9.58838 10.4187 10.4838 10.4187 11.5884V15.9999H5.60999V11.5884Z" fill="#98FFE0" />
                                        </svg>
                                    </span>
                                    <span className="mx-4 text-lg font-normal">Home</span>
                                </a>
                                <a
                                    className="flex items-center justify-start w-full p-4 my-2 font-thin text-[#6C747D] transition-colors duration-200 dark:text-[#6C747D]"
                                    href="#"
                                >
                                    <span className="text-left">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
                                            <path fillRule="evenodd" clipRule="evenodd" d="M7.2 3.60004C5.77598 3.60004 4.38393 4.02231 3.1999 4.81346C2.01586 5.6046 1.09302 6.72909 0.548071 8.04472C0.00311963 9.36034 -0.139464 10.808 0.138349 12.2047C0.416163 13.6013 1.1019 14.8843 2.10883 15.8912C3.11577 16.8981 4.39869 17.5839 5.79535 17.8617C7.19202 18.1395 8.6397 17.9969 9.95532 17.452C11.271 16.907 12.3954 15.9842 13.1866 14.8001C13.9777 13.6161 14.4 12.2241 14.4 10.8C14.4 10.303 13.9971 9.90004 13.5 9.90004H9C8.50295 9.90004 8.1 9.49709 8.1 9.00004V4.50004C8.1 4.00298 7.69706 3.60004 7.2 3.60004Z" fill="#0BB885" />
                                            <path d="M10.8 0C10.5613 0 10.3324 0.0948211 10.1636 0.263604C9.99485 0.432387 9.90002 0.661305 9.90002 0.9V7.2C9.90002 7.4387 9.99485 7.66761 10.1636 7.8364C10.3324 8.00518 10.5613 8.1 10.8 8.1L17.1 8.1C17.3387 8.1 17.5676 8.00518 17.7364 7.83639C17.9052 7.66761 18 7.43869 18 7.2C18 5.29044 17.2415 3.45909 15.8912 2.10883C14.5409 0.758569 12.7096 0 10.8 0Z" fill="#98FFE0" />
                                        </svg>
                                    </span>
                                    <span className="mx-4 text-lg font-normal">Reports</span>
                                </a>
                                <a
                                    className="flex items-center justify-start w-full p-4 my-2 font-thin text-gray-500 transition-colors duration-200 dark:text-[#6C747D]"
                                    href="#"
                                >
                                    <span className="text-left">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                                            <circle cx="8.00005" cy="12.8" r="3.2" fill="#98FFE0" />
                                            <path d="M14.8686 12.8H1.12326C0.502902 12.8 0 12.2971 0 11.6767C0 11.3721 0.123765 11.0805 0.342909 10.8688L1.04345 10.1922C1.43514 9.81386 1.65563 9.29217 1.654 8.74761L1.64694 6.39568C1.63635 2.86656 4.49431 0 8.02345 0C11.5451 0 14.4 2.85487 14.4 6.37653L14.4 8.77157C14.4 9.30201 14.6107 9.81071 14.9858 10.1858L15.6686 10.8686C15.8808 11.0808 16 11.3686 16 11.6686C16 12.2935 15.4935 12.8 14.8686 12.8Z" fill="#0BB885" />
                                        </svg>
                                    </span>
                                    <span className="mx-4 text-lg font-normal">Notifications</span>
                                </a>
                                <a
                                    className="flex items-center justify-start w-full p-4 my-2 font-thin text-gray-500 transition-colors duration-200 dark:text-[#6C747D]"
                                    href="#"
                                >
                                    <span className="text-left">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
                                            <path d="M5.4663 3.16265C5.96327 2.88492 6.38555 2.46542 6.57233 1.92762L6.77508 1.34384C7.05449 0.539325 7.81272 0 8.66438 0H9.33567C10.1873 0 10.9456 0.539325 11.225 1.34384L11.4277 1.92763C11.6145 2.46542 12.0368 2.88492 12.5337 3.16265C13.0136 3.43081 13.5618 3.56491 14.1012 3.45897L14.8655 3.30886C15.6916 3.14662 16.5308 3.51904 16.9648 4.24043L17.2265 4.67546C17.6848 5.43743 17.5851 6.41051 16.9816 7.06362L16.556 7.52433C16.1896 7.92091 16.0324 8.46004 16.0324 8.99998C16.0324 9.53992 16.1896 10.079 16.556 10.4756L16.9816 10.9363C17.5851 11.5894 17.6848 12.5625 17.2264 13.3245L16.9648 13.7595C16.5308 14.4809 15.6916 14.8533 14.8655 14.6911L14.1013 14.541C13.5619 14.4351 13.0136 14.5692 12.5338 14.8373C12.0368 15.1151 11.6145 15.5346 11.4277 16.0724L11.225 16.6562C10.9456 17.4607 10.1873 18 9.33567 18H8.66438C7.81272 18 7.05449 17.4607 6.77508 16.6562L6.57234 16.0724C6.38555 15.5346 5.96326 15.1151 5.46628 14.8373C4.98639 14.5692 4.43814 14.435 3.89871 14.541L3.1345 14.6911C2.30843 14.8533 1.46919 14.4809 1.03524 13.7595L0.773549 13.3245C0.31519 12.5625 0.414946 11.5894 1.01837 10.9363L1.44409 10.4755C1.81048 10.079 1.96768 9.53989 1.96768 8.99998C1.96768 8.46007 1.81048 7.92096 1.44409 7.5244L1.01837 7.06362C0.414945 6.41051 0.31519 5.43742 0.773548 4.67546L1.03524 4.24043C1.46919 3.51903 2.30843 3.14662 3.1345 3.30886L3.89881 3.45897C4.43822 3.56491 4.98644 3.43082 5.4663 3.16265Z" fill="#0BB885" />
                                            <path fillRule="evenodd" clipRule="evenodd" d="M8.9998 11.4545C10.4122 11.4545 11.5572 10.3556 11.5572 8.99999C11.5572 7.64438 10.4122 6.54544 8.9998 6.54544C7.58738 6.54544 6.44238 7.64438 6.44238 8.99999C6.44238 10.3556 7.58738 11.4545 8.9998 11.4545Z" fill="#98FFE0" />
                                        </svg>
                                    </span>
                                    <span className="mx-4 text-lg font-normal">Settings</span>
                                </a>
                                <a
                                    className="flex items-center justify-start w-full p-4 my-2 font-thin text-[#6C747D]  transition-colors duration-200 dark:text-[#6C747D]"
                                    href="#"
                                >
                                    <span className="text-left">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="18" viewBox="0 0 16 18" fill="none">
                                            <path d="M7.96205 0C9.42783 0 10.6161 1.18824 10.6161 2.65402V15.0394C10.6161 16.5052 9.42783 17.6935 7.96205 17.6935H2.65402C1.18824 17.6935 0 16.5052 0 15.0394V2.65402C0 1.18824 1.18824 0 2.65402 0H7.96205Z" fill="#0BB885" />
                                            <path d="M13.011 5.12481C12.6655 4.77932 12.1053 4.77932 11.7598 5.12481C11.4143 5.47029 11.4143 6.03044 11.7598 6.37592L13.346 7.96205H5.30801C4.81942 7.96205 4.42334 8.35813 4.42334 8.84672C4.42334 9.33531 4.81942 9.73139 5.30801 9.73139H13.346L11.7598 11.3175C11.4143 11.663 11.4143 12.2231 11.7598 12.5686C12.1053 12.9141 12.6655 12.9141 13.011 12.5686L15.4817 10.0978C16.1727 9.40686 16.1727 8.28657 15.4817 7.5956L13.011 5.12481Z" fill="#98FFE0" />
                                        </svg>
                                    </span>
                                    <span className="mx-4 text-lg font-normal">Log out</span>
                                </a>
                            </div>
                        </nav>
                    </div>
                </div>
                <div className="flex flex-col w-full md:p-4 md:space-y-4">
                    <header className="z-40 items-center w-full">
                        <a className="flex justify-end">
                            <img
                                alt="profil"
                                src="https://img.freepik.com/free-photo/portrait-dark-skinned-cheerful-woman-with-curly-hair-touches-chin-gently-laughs-happily-enjoys-day-off-feels-happy-enthusiastic-hears-something-positive-wears-casual-blue-turtleneck_273609-43443.jpg"
                                className="object-cover w-10 h-10 rounded-full "
                            />
                            <span className='mt-1 ml-3 text-lg mr-[44.5px] text-white'>Hello, User!</span>
                        </a>
                        <div className="z-40 items-center w-full h-1 mt-3 bg-white shadow-lg dark:bg-gray-700" />
                    </header>


                    <div className='flex flex-col'>
                        <h1 className='text-2xl text-white'>Marketing Dashboard</h1>
                        <span className='text-[#6C747D] mb-3'>Home / <a className='text-[#0BB885]'>Dashboard</a></span>
                    </div>



                    <div className="rounded-lg dark:border-gray-700">

                        <div className='grid grid-cols-[3fr_2fr] gap-4 mb-4'>

                            <div>
                                <div className="grid grid-cols-3 gap-4 mb-4">
                                    <div className="flex items-center justify-start h-24 rounded bg-[#0BB885] dark:bg-[#0BB885] gap-2">
                                        <span className='pl-5'>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="56" height="56" viewBox="0 0 56 56" fill="none">
                                                <circle opacity="0.25" cx="28" cy="28" r="22" fill="white" />
                                                <path d="M52.3151 17.842C53.1551 17.491 53.556 16.523 53.1562 15.7051C51.5865 12.4933 49.4138 9.60703 46.7514 7.20616C43.6804 4.43676 40.034 2.38199 36.0744 1.18948C32.1148 -0.00302925 27.9401 -0.303662 23.8505 0.309182C19.7608 0.922026 15.8577 2.43313 12.4215 4.73392C8.98534 7.0347 6.10147 10.068 3.97709 13.616C1.85272 17.1639 0.540594 21.1384 0.135001 25.2538C-0.270591 29.3691 0.240418 33.5233 1.63131 37.4177C2.83712 40.7938 4.67825 43.9021 7.05004 46.5768C7.65403 47.258 8.70177 47.256 9.34621 46.613C9.99065 45.97 9.98715 44.9297 9.38852 44.2439C7.35778 41.9171 5.77801 39.2263 4.736 36.3088C3.50887 32.8729 3.05803 29.2079 3.41587 25.5771C3.7737 21.9463 4.93134 18.4398 6.80558 15.3096C8.67983 12.1794 11.2242 9.50319 14.2557 7.4733C17.2873 5.44341 20.7309 4.11023 24.339 3.56954C27.9472 3.02885 31.6303 3.29409 35.1237 4.34619C38.6171 5.39829 41.8342 7.21113 44.5436 9.65445C46.8443 11.7292 48.7306 14.2148 50.1084 16.9787C50.5145 17.7934 51.475 18.1929 52.3151 17.842Z" fill="white" />
                                            </svg>
                                        </span>
                                        <div className='ml-5'>
                                            <b className="text-lg text-white dark:text-white">
                                                Total Cost
                                            </b>
                                            <p className="text-lg text-white dark:text-white">
                                                $31.868
                                            </p>
                                        </div>
                                    </div>
                                    <div className="flex items-center justify-start h-24 rounded bg-[#1C243F] dark:bg-[#1C243F] gap-2">
                                        <span className='pl-5'>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="29" height="25" viewBox="0 0 29 25" fill="none">
                                                <path fillRule="evenodd" clipRule="evenodd" d="M15.7727 22.5H19.5909C20.2938 22.5 20.8636 23.0597 20.8636 23.75C20.8636 24.4404 20.2938 25 19.5909 25H9.40908C8.70617 25 8.13635 24.4404 8.13635 23.75C8.13635 23.0597 8.70617 22.5 9.40908 22.5H13.2273V16.25H15.7727V22.5Z" fill="#98FFE0" />
                                                <path fillRule="evenodd" clipRule="evenodd" d="M5.59091 5.00003H3.04545V7.50003C3.04545 8.88074 4.18509 10 5.59091 10V5.00003ZM3.04545 2.50003C1.63964 2.50003 0.5 3.61932 0.5 5.00003V7.50003C0.5 10.2615 2.77928 12.5 5.59091 12.5H8.13636V2.50003H3.04545Z" fill="#98FFE0" />
                                                <path fillRule="evenodd" clipRule="evenodd" d="M23.4091 5.00003H25.9545V7.50003C25.9545 8.88074 24.8149 10 23.4091 10V5.00003ZM25.9545 2.50003C27.3604 2.50003 28.5 3.61932 28.5 5.00003V7.50003C28.5 10.2615 26.2207 12.5 23.4091 12.5H20.8636V2.50003H25.9545Z" fill="#98FFE0" />
                                                <path d="M5.59088 2C5.59088 0.895431 6.48631 0 7.59088 0H21.4091C22.5136 0 23.4091 0.895431 23.4091 2V10.75C23.4091 15.1683 19.8273 18.75 15.4091 18.75H13.5909C9.17261 18.75 5.59088 15.1683 5.59088 10.75V2Z" fill="#0BB885" />
                                            </svg>
                                        </span>
                                        <div className='ml-5'>
                                            <b className="text-lg text-white dark:text-white">
                                                Total Sales
                                            </b>
                                            <p className="text-lg text-[#6C747D] dark:text-[#6C747D]">
                                                $66,053
                                            </p>
                                        </div>
                                    </div>
                                    <div className="flex items-center justify-start h-24 rounded bg-[#1C243F] dark:bg-[#1C243F] gap-2">
                                        <span className='pl-5'>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="29" height="28" viewBox="0 0 29 28" fill="none">
                                                <rect x="0.5" y="2.80002" width="28" height="25.2" rx="3" fill="#0BB885" />
                                                <path d="M0.5 5.80002C0.5 4.14317 1.84315 2.80002 3.5 2.80002H25.5C27.1569 2.80002 28.5 4.14316 28.5 5.80002V11.2H0.5V5.80002Z" fill="#98FFE0" />
                                                <path fillRule="evenodd" clipRule="evenodd" d="M7.50004 0C8.27324 0 8.90004 0.626801 8.90004 1.4V4.2C8.90004 4.9732 8.27324 5.6 7.50004 5.6C6.72684 5.6 6.10004 4.9732 6.10004 4.2V1.4C6.10004 0.626801 6.72684 0 7.50004 0Z" fill="#0BB885" />
                                                <path fillRule="evenodd" clipRule="evenodd" d="M21.5 0C22.2732 0 22.9 0.626801 22.9 1.4V4.2C22.9 4.9732 22.2732 5.6 21.5 5.6C20.7268 5.6 20.1 4.9732 20.1 4.2V1.4C20.1 0.626801 20.7268 0 21.5 0Z" fill="#0BB885" />
                                            </svg>
                                        </span>
                                        <div className='ml-5'>
                                            <b className="text-lg text-white dark:text-white">
                                                This Week
                                            </b>
                                            <p className="text-lg text-[#6C747D] dark:text-[#6C747D]">
                                                $315,000,00
                                            </p>
                                        </div>
                                    </div>

                                </div>

                                <div className="grid grid-cols-[2fr_1.6fr_1.3fr] col-span-1 gap-4 mb-4">

                                    <EarningChart />
                                    <OrdersChart />
                                    <ProfitChart />

                                </div>

                                <TotalProfitChart />

                                <Footer />
                            </div>

                            <div>
                                <div className="grid grid-cols-2 gap-4 mb-4">
                                    <div className="flex items-center justify-start h-24 rounded bg-[#1C243F] dark:bg-[#1C243F] gap-2">
                                        <span className='pl-5'>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="33" height="32" viewBox="0 0 33 32" fill="none">
                                                <path fillRule="evenodd" clipRule="evenodd" d="M13.3 6.39999C10.7684 6.39999 8.29366 7.1507 6.18871 8.55718C4.08376 9.96366 2.44315 11.9628 1.47435 14.3016C0.505546 16.6405 0.252063 19.2142 0.745954 21.6972C1.23984 24.1801 2.45893 26.4608 4.24904 28.251C6.03915 30.0411 8.31989 31.2602 10.8028 31.754C13.2858 32.2479 15.8595 31.9945 18.1984 31.0257C20.5372 30.0569 22.5363 28.4162 23.9428 26.3113C25.3493 24.2063 26.1 21.7316 26.1 19.2C26.1 18.3163 25.3837 17.6 24.5 17.6H16.5C15.6163 17.6 14.9 16.8836 14.9 16V7.99999C14.9 7.11634 14.1837 6.39999 13.3 6.39999Z" fill="#0BB885" />
                                                <path d="M19.7003 0C19.2759 0 18.8689 0.168571 18.5689 0.468629C18.2688 0.768687 18.1003 1.17565 18.1003 1.6V12.8C18.1003 13.2243 18.2688 13.6313 18.5689 13.9314C18.8689 14.2314 19.2759 14.4 19.7003 14.4L30.9002 14.4C31.3246 14.4 31.7316 14.2314 32.0316 13.9314C32.3317 13.6313 32.5002 13.2243 32.5002 12.8C32.5002 9.40523 31.1517 6.1495 28.7512 3.74903C26.3507 1.34857 23.095 0 19.7003 0Z" fill="#98FFE0" />
                                            </svg>
                                        </span>
                                        <div className='ml-5'>
                                            <b className="text-lg text-white dark:text-white">
                                                Revenue
                                            </b>
                                            <p className="text-lg text-[#6C747D] dark:text-[#6C747D]">
                                                $63,00K
                                            </p>
                                        </div>
                                    </div>
                                    <div className="flex items-center justify-start h-24 rounded bg-[#1C243F] dark:bg-[#1C243F] gap-2">
                                        <span className='pl-5'>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28" fill="none">
                                                <path d="M28 25V8.60002C28 6.94316 26.6569 5.60002 25 5.60002H4.2V2.80002H0V25C0 26.6569 1.34315 28 3 28H25C26.6569 28 28 26.6569 28 25Z" fill="#0BB885" />
                                                <path d="M19.6 16.8C19.6 15.2536 20.8536 14 22.4 14H28V19.6H22.4C20.8536 19.6 19.6 18.3464 19.6 16.8Z" fill="#98FFE0" />
                                                <path d="M2.8 0C1.2536 0 0 1.2536 0 2.8C0 4.3464 1.2536 5.6 2.8 5.6H23.8C24.2909 5.6 24.7621 5.68422 25.2 5.83899V1.4C25.2 0.626801 24.5732 0 23.8 0H2.8Z" fill="#98FFE0" />
                                            </svg>
                                        </span>
                                        <div className='ml-5'>
                                            <b className="text-lg text-white dark:text-white">
                                                $1250
                                            </b>
                                            <p className="text-lg text-[#6C747D] dark:text-[#6C747D]">
                                                Last payment
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                <div className="rounded h-[461px] bg-[#1C243F] dark:bg-[#1C243F] col-span-1">
                                    <div className='p-6'>
                                        <p className="font-bold text-white text-md dark:text-white">
                                            Activity overview
                                        </p>
                                        <span className='flex mt-3 mb-4'>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="15" height="18" viewBox="0 0 15 18" fill="none">
                                                <path d="M7.72571 1.25L7.72571 16.25" stroke="#1AA053" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                                <path d="M1.70131 7.2998L7.72531 1.2498L13.7503 7.2998" stroke="#1AA053" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                            </svg>
                                            <p className='flex ml-3 text-white'>16% this month</p>
                                        </span>
                                        <ol className="relative border-l border-gray-200 dark:border-gray-700 ml-[8px]">
                                            <li className="mb-10 ml-6">
                                                <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -left-3 ring-white dark:ring-gray-900 dark:bg-[#1C243F]">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="21" height="21" viewBox="0 0 21 21" fill="none">
                                                        <circle cx="10.5" cy="10.5" r="9.5" stroke="#FF814A" strokeWidth="2" />
                                                    </svg>
                                                </span>
                                                <h3 className="flex items-center mb-1 text-sm text-gray-900 dark:text-white">
                                                    <b className='mr-[5px]'>Nick Mark</b> Mentioned <b className='mx-[4px]'>Sara Smith</b> In New Post
                                                </h3>
                                                <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">11 JUL 8:10 PM</time>
                                            </li>
                                            <li className="mb-10 ml-6">
                                                <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -left-3 ring-white dark:ring-gray-900 dark:bg-[#1C243F]">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="21" height="21" viewBox="0 0 21 21" fill="none">
                                                        <circle cx="10.5" cy="10.5" r="9.5" stroke="#FF814A" strokeWidth="2" />
                                                    </svg>
                                                </span>
                                                <h3 className="mb-1 text-sm text-gray-900 dark:text-white">The <b>Post Name</b> was removed by <b>Nick Mark</b></h3>
                                                <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">11 JUL 9:10 PM</time>
                                            </li>
                                            <li className="mb-10 ml-6">
                                                <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -left-3 ring-white dark:ring-gray-900 dark:bg-[#1C243F]">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="21" height="21" viewBox="0 0 21 21" fill="none">
                                                        <circle cx="10.5" cy="10.5" r="9.5" stroke="#FF814A" strokeWidth="2" />
                                                    </svg>
                                                </span>
                                                <h3 className="mb-1 text-sm text-gray-900 dark:text-white"><b>Patrick Sulivan</b> Published a New Post</h3>
                                                <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">12 JUL 10:10 PM</time>
                                            </li>
                                            <li className="mb-10 ml-6">
                                                <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -left-3 ring-white dark:ring-gray-900 dark:bg-[#1C243F]">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="21" height="21" viewBox="0 0 21 21" fill="none">
                                                        <circle cx="10.5" cy="10.5" r="9.5" stroke="#FF814A" strokeWidth="2" />
                                                    </svg>
                                                </span>
                                                <h3 className="mb-1 text-sm text-gray-900 dark:text-white"><b>240+ users</b> have subscribed to Newslettter #1</h3>
                                                <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">18 JUL 19:10 PM</time>
                                            </li>
                                            <li className="mb-10 ml-6">
                                                <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -left-3 ring-white dark:ring-gray-900 dark:bg-[#1C243F]">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="21" height="21" viewBox="0 0 21 21" fill="none">
                                                        <circle cx="10.5" cy="10.5" r="9.5" stroke="#FF814A" strokeWidth="2" />
                                                    </svg>
                                                </span>
                                                <h3 className="mb-1 text-sm text-gray-900 dark:text-white">The <b>Post Name</b>  was suspanded by <b>Nick Mark</b></h3>
                                                <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">11 JUL 9:10 PM</time>
                                            </li>
                                        </ol>
                                    </div>
                                </div>
                            </div>

                        </div>

                        <div>

                        </div>

                    </div>

                </div>
            </div>
        </main>
    )
}

export default Home