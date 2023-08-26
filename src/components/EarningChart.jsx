import React, { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';

const Chart = dynamic(() => import('react-apexcharts'), { ssr: false });

const EarningChart = () => {
    const [chartOptions, setChartOptions] = useState(null);
    const [datas, setDatas] = useState([80, 55])
    const [sales, setSales] = useState('251K')
    const [orders, setOrders] = useState('176K')

    const handleChange = (e) => {
        e.preventDefault();
        const value = e.target.value;

        if (value === 'last_week') {
            setDatas([80, 55]);
            setSales('251K');
            setOrders('176K');
        }
        if (value === 'two_weeks_ago') {
            setDatas([50, 45]);
            setSales('165K');
            setOrders('147K');
        }
        if (value === 'last_month') {
            setDatas([90, 90]);
            setSales('500K');
            setOrders('600K');
        }
    };


    useEffect(() => {
        const options = {
            chart: {
                id: 'radial-chart',
                offsetX: 9
            },
            plotOptions: {
                radialBar: {
                    dataLabels: {
                        name: {
                            fontSize: '10px'
                        },
                        value: {
                            fontSize: '8px'
                        }
                    },
                    track: {
                        background: '#1F2849'
                    }
                }
            },
            stroke: {
                lineCap: 'round'
            },
            fill: {
                colors: ['#0BB885', '#FF814A'],
            },
            series: datas
        };

        setChartOptions(options);
    }, [datas, sales, orders]);

    if (!chartOptions) {
        return null;
    }

    return (
        <div>
            {typeof window !== 'undefined' && (
                <div className="h-[180px] rounded bg-[#1C243F] dark:bg-[#1C243F]">
                    <div className='flex'>
                        <p className="pt-5 pl-5 text-lg text-white">
                            Earnings
                        </p>
                        <div className='flex px-2 pt-5 ml-24'>
                            <select
                                className="block text-[#2E4B85] bg-inherit"
                                name="time" onChange={handleChange}>
                                <option className='bg-[#2E4B85] text-white' key='last_week' value="last_week">Last Week</option>
                                <option className='bg-[#2E4B85] text-white' key='two_weeks_ago' value="two_weeks_ago">2 Weeks ago</option>
                                <option className='bg-[#2E4B85] text-white' key='last_month' value="last_month">Last Month</option>
                            </select>
                        </div>
                    </div>
                    <div className='grid grid-cols-2 gap-4'>
                        <Chart
                            options={chartOptions}
                            series={chartOptions.series}
                            type="radialBar"
                            height={165}
                            width={135}
                        />
                        <div>
                            <div className="relative ml-[8px]">
                                <div className="mt-6 mb-5 ml-3">
                                    <span className="absolute flex items-center justify-center w-6 h-6 rounded-full -left-3 dark:ring-gray-900 dark:bg-[#1C243F]">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="10" height="9" viewBox="0 0 10 9" fill="none">
                                            <circle cx="4.93875" cy="4.3757" r="4.06253" fill="#0BB885" />
                                        </svg>
                                    </span>
                                    <p className="block mb-2 text-sm font-normal leading-none text-white dark:text-white">Total Sales</p>
                                    <p className="block mb-2 text-sm font-normal leading-none text-[#8A92A6] dark:text-[#8A92A6]">{sales}</p>
                                </div>
                            </div>
                            <div className="relative ml-[8px]">
                                <div className="mt-6 mb-10 ml-3">
                                    <span className="absolute flex items-center justify-center w-6 h-6 rounded-full -left-3 dark:ring-gray-900 dark:bg-[#1C243F]">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="10" height="9" viewBox="0 0 10 9" fill="none">
                                            <circle cx="4.93875" cy="4.37588" r="4.06253" fill="#FF814A" />
                                        </svg>
                                    </span>
                                    <p className="block mb-2 text-sm font-normal leading-none text-white dark:text-white">Total Orders</p>
                                    <p className="block mb-2 text-sm font-normal leading-none text-[#8A92A6] dark:text-[#8A92A6]">{orders}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default EarningChart;
