import React, { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';

const Chart = dynamic(() => import('react-apexcharts'), { ssr: false });

const ProfitChart = () => {
    const [chartOptions, setChartOptions] = useState(null);

    useEffect(() => {
        const data = [0, 30, 10, 40, 20, 60];

        const annotations = chartOptions ? chartOptions.options.annotations.xaxis : data.map((value, idx) => ({
            x: idx,
            strokeDashArray: 5,
            borderColor: '#000000',
        }));

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
                    offsetY: -22,
                    offsetX: 0
                },
                colors: ['#00E396'],
                dataLabels: {
                    enabled: false,
                },
                stroke: {
                    curve: 'straight',
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
                annotations: {
                    xaxis: annotations,
                },
            },
        };

        setChartOptions(options);
    }, []);

    return (
        <div className="h-[180px] rounded pt-5 pl-5 bg-[#1C243F] dark:bg-[#1C243F]">
            <p className="text-lg text-white">Profit</p>
            <p className='text-3xl mt-2 text-[#0BB885]'>8,24K</p>
            {chartOptions && (
                <Chart
                    options={chartOptions.options}
                    series={chartOptions.series}
                    type="area"
                    height='110px'
                    width='87%'
                />
            )}
        </div>
    )
}

export default ProfitChart;
