import React, { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';

const Chart = dynamic(() => import('react-apexcharts'), { ssr: false });

const ProfitChart = () => {
    const [chartOptions, setChartOptions] = useState(null);

    useEffect(() => {
        const options = {
            series: [{
                name: "Desktops",
                data: [10, 41, 35, 51, 49, 62, 69, 91, 148]
            }],
            options: {
                chart: {
                    height: 350,
                    type: 'line',
                    zoom: {
                        enabled: false
                    },
                    toolbar: {
                        show: false,
                    },
                },
                dataLabels: {
                    enabled: false
                },
                stroke: {
                    curve: 'straight'
                },
                grid: {
                    row: {
                        colors: ['#f3f3f3', 'transparent'],
                        opacity: 0.5
                    },
                },
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
                            Profit
                        </p>
                        <p className='text-3xl mt-2 text-[#0BB885]'>8,24K</p>
                        <Chart
                            options={chartOptions}
                            series={chartOptions.series}
                            type="line"
                            height='130px'
                            width='80%'
                        />
                    </div>
                )
            }
        </div>
    )
}

export default ProfitChart