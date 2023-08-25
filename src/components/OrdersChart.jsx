import React, { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';

const Chart = dynamic(() => import('react-apexcharts'), { ssr: false });

const OrdersChart = () => {
    const [chartOptions, setChartOptions] = useState(null);

    useEffect(() => {
        const options = {
            series: [
                {
                    color: "#FF814A",
                    data: [
                        { x: "", y: 2 },
                        { x: "", y: 5 },
                        { x: "", y: 3 },
                        { x: "", y: 2 },
                        { x: "", y: 4 }
                    ],
                },
                {
                    color: "#2E4B85",
                    data: [
                        { x: "", y: 4 },
                        { x: "", y: 1 },
                        { x: "", y: 3 },
                        { x: "", y: 4 },
                        { x: "", y: 2 }
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
                offsetY: -11,
                offsetX: 11
            },
            plotOptions: {
                bar: {
                    horizontal: false,
                    columnWidth: "30%",
                    borderRadiusApplication: "around",
                    borderRadiusWhenStacked: 'all',
                    borderRadius: 5,
                    colors: {
                        backgroundBarColors: ['#2E4B85'],
                        backgroundBarOpacity: 1,
                        backgroundBarRadius: 5,
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
                floating: false,
                labels: {
                    show: true,
                    style: {
                        fontFamily: "Inter, sans-serif",
                        cssClass: 'text-xs font-normal fill-gray-500 dark:fill-gray-400'
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
                show: false,
            },
            fill: {
                opacity: 1,
                colors: '#FF814A'
            },
        }

        setChartOptions(options);
    }, []);

    if (!chartOptions) {
        return null;
    }

    return (
        <div>
            {
                typeof window !== 'undefined' && (
                    <div className="h-[180px] rounded pt-5 pl-5  bg-[#1C243F] dark:bg-[#1C243F]">
                        <p className="text-lg text-white">
                            Orders
                        </p>
                        <p className='text-3xl mt-2 text-[#FF814A]'>189K</p>
                        <Chart
                            options={chartOptions}
                            series={chartOptions.series}
                            type="bar"
                            stacked={true}
                            height='130px'
                            width='80%'
                        />
                    </div>
                )
            }
        </div>
    )
}

export default OrdersChart