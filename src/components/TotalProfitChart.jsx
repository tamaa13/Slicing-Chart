import React, { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';

const Chart = dynamic(() => import('react-apexcharts'), { ssr: false });

const TotalProfitChart = () => {
    const [chartOptions, setChartOptions] = useState(null);
    const [chartColumnOptions, setChartColumnOptions] = useState(null);

    useEffect(() => {
        const data = [40, 20, 50, 30, 10, 70, 55, 15, 60];

        const options = {
            series: [{
                data,
            }],
            options: {
                chart: {
                    type: 'line',
                    height: 160,
                    zoom: {
                        enabled: false
                    },
                    toolbar: {
                        show: false
                    },
                    offsetY: -23,
                    offsetX: 11
                },
                colors: ['#00E396'],
                dataLabels: {
                    enabled: false,
                },
                stroke: {
                    curve: 'smooth',
                    markers: {
                        size: 5,
                        strokeWidth: 0,
                        fillOpacity: 5,
                        strokeColors: ['#000000'],
                        hover: {
                            size: 1,
                        }
                    },
                },
                grid: {
                    show: false,
                },
                xaxis: {
                    labels: {
                        show: true,
                        style: {
                            fontSize: '0px'
                        }
                    },

                    axisBorder: {
                        show: false,
                    },
                    axisTicks: {
                        show: false,
                    },
                },
                yaxis: {
                    show: false
                },
                tooltip: {
                    enabled: false
                },
                fill: {
                    enabled: false,
                    opacity: 0,
                    gradient: {
                        enabled: false
                    },
                },
            },
        };

        setChartOptions(options);
    }, []);

    useEffect(() => {
        const options = {
            series: [
                {
                    color: "#FF814A",
                    data: [
                        { x: "", y: 18 },
                        { x: "", y: 10 },
                        { x: "", y: 8 },
                        { x: "", y: 20 },
                        { x: "", y: 13 },
                        { x: "", y: 8 },
                        { x: "", y: 10 },
                        { x: "", y: 9 },
                        { x: "", y: 10 }
                    ],
                },
                {
                    color: "#0BB885",
                    data: [
                        { x: "", y: 12 },
                        { x: "", y: 22 },
                        { x: "", y: 32 },
                        { x: "", y: 30 },
                        { x: "", y: 15 },
                        { x: "", y: 8 },
                        { x: "", y: 20 },
                        { x: "", y: 29 },
                        { x: "", y: 11 }
                    ],
                }
            ],
            chart: {
                stacked: true,
                stackType: "100%",
                type: "bar",
                height: "100px",
                fontFamily: "Inter, sans-serif",
                toolbar: {
                    show: false,
                },
                offsetY: 35,
                offsetX: 11
            },
            plotOptions: {
                bar: {
                    horizontal: false,
                    columnWidth: "30%",
                    borderRadiusApplication: "around",
                    borderRadiusWhenStacked: 'all',
                    borderRadius: 4,
                    colors: {
                        backgroundBarColors: ['#2E4B85'],
                        backgroundBarOpacity: 0,
                        backgroundBarRadius: 4,
                    },
                },
            },
            tooltip: {
                shared: true,
                intersect: false,
                style: {
                    fontFamily: "Inter, sans-serif",
                },
            },
            states: {
                hover: {
                    filter: {
                        type: "darken",
                        value: 1,
                        borderRadius: 17,
                    },
                },
            },
            stroke: {
                lineCap: 'round',
                show: true,
                width: 0,
                colors: ["transparent"],
            },
            grid: {
                show: false,
                strokeDashArray: 4,
                padding: {
                    left: 2,
                    right: 2,
                    top: -14
                },
            },
            dataLabels: {
                enabled: false,
            },
            legend: {
                show: false,
            },
            xaxis: {
                labels: {
                    show: true,
                    style: {
                        fontFamily: "Inter, sans-serif",
                        cssClass: 'text-xs font-normal fill-gray-500 dark:fill-gray-400'
                    },
                },
                categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "July", "Aug", "Sep"],
                axisTicks: {
                    show: false,
                },
                axisBorder: {
                    show: false,
                },
            },
            yaxis: {
                show: false,
            },
            fill: {
                opacity: 1,
                colors: '#FF814A'
            },
        }

        setChartColumnOptions(options);
    }, []);


    return (
        <div className=" rounded h-[265px] bg-[#1C243F] dark:bg-[#1C243F] col-span-1">
            <div className='grid grid-cols-[5fr_2fr]'>
                <div>
                    <div className='flex pt-5 pl-5'>
                        <p className="text-lg text-white">Total Profit</p>
                        <div className='absolute '>
                            <div className='grid grid-cols-2 gap-4 ml-72'>
                                <div className='flex items-center mr-2 '>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none">
                                        <circle cx="5.73985" cy="5.82884" r="5.36119" fill="#0BB885" />
                                    </svg>
                                    <p className='text-lg ml-2 text-[#828282]'>Earning</p>
                                </div>
                                <div className='flex items-center justify-center'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="11" height="12" viewBox="0 0 11 12" fill="none">
                                        <circle cx="5.62535" cy="5.82884" r="5.36119" fill="#FF9F43" />
                                    </svg>
                                    <p className='text-lg ml-2 text-[#828282]'>Expense</p>
                                </div>
                            </div>
                        </div>
                        <div>
                            {chartColumnOptions && (
                                <Chart
                                    options={chartColumnOptions}
                                    series={chartColumnOptions.series}
                                    type="bar"
                                    stacked={true}
                                    height='130%'
                                    width='100%'
                                />
                            )}
                        </div>
                    </div>
                </div>
                <div className='flex'>
                    <div>
                        <div className='bg-[#2E4B85] h-[264px] w-[2px]' />
                    </div>
                    <div>
                        <label className="text-[#0BB885]">
                            <select
                                id="year"
                                className="block ml-14 mt-4 px-3 py-1 bg-[#1C243F] border-2 border-[#0BB885] rounded-md shadow-sm w-24 focus:outline-none focus:ring-primary-500 focus:border-primary-500"
                                name="year"
                            >
                                <option value="">2023</option>
                            </select>
                        </label>
                        <p className='mt-3 ml-12 text-3xl text-white'>
                            <b>$842.98</b>
                        </p>
                        <p className='mt-1 ml-5 text-xs text-[#828282]'>Latest Month Balance $426.20K</p>
                        {chartOptions && (
                            <Chart
                                options={chartOptions.options}
                                series={chartOptions.series}
                                type="area"
                                height='110px'
                                width='87%'
                            />
                        )}
                        <button type="button" className="text-white ml-12 mb-5 -translate-y-7 bg-[#0BB885] font-medium rounded-lg text-sm px-5 py-2.5">View Report</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TotalProfitChart