const widgetData = [
    {
        icon: 'mdi mdi-android-studio',
        color: 'success',
        number: 64570,
        title: 'Today\'s Visits'
    },
    {
        icon: 'mdi mdi-amazon',
        color: 'primary',
        number: 31570,
        title: 'Total Revenue'
    },
    {
        icon: 'mdi mdi-apple',
        color: 'danger',
        number: 280,
        title: 'Today\'s Sales'
    },
    {
        icon: 'mdi mdi-barley',
        color: 'purple',
        number: 16,
        title: 'Conversion'
    },
    {
        icon: 'mdi mdi-black-mesa',
        color: 'info',
        number: 23570,
        title: 'Today\'s Visits'
    },
    {
        icon: 'mdi mdi-bullseye',
        color: 'warning',
        number: 9654,
        title: 'Total Revenue'
    },
    {
        icon: 'mdi mdi-cart',
        color: 'dark',
        number: 965,
        title: 'Today\'s Sales'
    },
    {
        icon: 'mdi mdi-clock',
        color: 'pink',
        number: 65,
        title: 'Conversion'
    },
];

const widgetuser = [
    {
        image: require('~/assets/images//users/avatar-1.jpg'),
        name: 'Chadengle',
        type: 'Admin',
        color: 'warning'
    },
    {
        image: require('~/assets/images//users/avatar-2.jpg'),
        name: 'Tomaslau',
        type: 'User',
        color: 'success'
    },
    {
        image: require('~/assets/images//users/avatar-3.jpg'),
        name: 'Stillnotdavid',
        type: 'Admin',
        color: 'danger'
    },
    {
        image: require('~/assets/images//users/avatar-4.jpg'),
        name: 'Arashasghari',
        type: 'User',
        color: 'info'
    }
];

const widget = [
    {
        icon: 'mdi mdi-coffee',
        iconcolor: 'primary',
        title: 'New User',
        number: 8541,
        text: '39% Up',
        textcolor: 'success'
    },
    {
        icon: 'mdi mdi-contrast-circle',
        iconcolor: 'warning',
        title: 'New Orders',
        number: 6521,
        text: '56% Down',
        textcolor: 'danger'
    },
    {
        icon: 'mdi mdi-crown',
        iconcolor: 'success',
        title: 'Bug Reports',
        number: 1452,
        text: '0%',
        textcolor: 'info'
    },
    {
        icon: 'mdi mdi-download',
        iconcolor: 'pink',
        title: 'Total Downloads',
        number: 562,
        text: '39% Up',
        textcolor: 'success'
    }
];

const revenueAreaChart = {
    chartOptions: {
        chart: {
            toolbar: {
                show: false,
            },
            sparkline: {
                enabled: true
            },
        },
        colors: ['#3bafda', '#5d9cec'],
        stroke: {
            curve: 'straight',
            width: 1,
        },
        dataLabels: {
            enabled: false
        },
        grid: {
            show: false,
            padding: {
                top: 40,
                left: 0,
                right: 0,
                bottom: 0
            }
        },
        legend: {
            show: false,
        },
        tooltip: {
            x: {
                show: false
            },
            y: {
                title: {
                    formatter: (seriesName) => {
                        return '';
                    }
                }
            },
            // marker: {
            //     show: false
            // },
            theme: 'dark',
        },
        xaxis: {
            labels: {
                show: false
            },
            axisBorder: {
                show: false
            },
            lines: {
                show: false,
            }
        }
    },
    series: [{
        data: [0, 23, 43, 35, 44, 45, 56, 37, 40],
    }, {
        data: [25, 23, 26, 24, 25, 32, 30, 24, 19]
    }],
};

const revenueBarChart = {
    chartOptions: {
        chart: {
            toolbar: {
                show: false,
            },
            sparkline: {
                enabled: true
            },
        },
        colors: ['rgb(59, 175, 218)'],
        dataLabels: {
            enabled: false
        },
        grid: {
            show: false,
            padding: {
                top: 40,
                left: 0,
                right: 0,
                bottom: 0
            }
        },
        xaxis: {
            labels: {
                show: false
            },
            axisBorder: {
                show: false
            },
            lines: {
                show: false,
            }
        },
        legend: {
            show: false
        },
        tooltip: {
            x: {
                show: false
            },
            theme: 'dark',
            y: {
                title: {
                    formatter: (seriesName) => {
                        return '';
                    }
                }
            },
        },
        stroke: {
            show: true,
            width: 4,   // thickness of the lines
        },
        plotOptions: {
            bar: {
                columnWidth: '50%'
            }
        },
    },
    series: [{
        data: [70, 90, 100, 140, 50, 80, 130, 90, 80, 120, 120, 140],
    }],
};

const revenuePieChart = {
    series: [20, 40, 30, 10],
    chartOptions: {
        pie: {
            expandOnClick: false
        },
        colors: ['#dcdcdc', '#3bafda', '#333333', '#00b19d'],
        dataLabels: {
            enabled: false
        },
        legend: {
            show: false,
        },
        tooltip: {
            x: {
                labels: false,
                show: false
            },
            y: {
                title: {
                    formatter: (seriesName) => {
                        return '';
                    }
                }
            },
        },
        grid: {
            show: false,
            padding: {
                top: 0,
                left: 0,
                right: 0,
                bottom: 0
            }
        },
    },
};
const revenueLineChart = {
    series: [{
        data: [0, 23, 43, 35, 44, 45, 56, 37, 40],
    }, {
        data: [25, 23, 26, 24, 25, 32, 30, 24, 19]
    }],
    chartOptions: {
        chart: {
            toolbar: {
                show: false,
            },
            sparkline: {
                enabled: true
            },
        },
        colors: ['#3bafda', '#5d9cec'],
        stroke: {
            curve: 'straight',
            width: 1,
        },
        dataLabels: {
            enabled: false
        },
        grid: {
            show: false,
            padding: {
                top: 0,
                left: 0,
                right: 0,
                bottom: 0
            }
        },
        legend: {
            show: false,
        },
        tooltip: {
            theme: 'dark',
            x: {
                show: false
            },
            y: {
                title: {
                    formatter: (seriesName) => {
                        return '';
                    }
                }
            },
            marker: {
                show: false
            }
        },
        xaxis: {
            labels: {
                show: false
            },
            axisBorder: {
                show: false
            },
            lines: {
                show: false,
            }
        }
    }
};
const revenueLineColumnChart = {
    series: [{
        type: 'column',
        data: [3, 6, 7, 8, 6, 4, 7, 10, 12, 7, 4, 9, 12, 13, 11, 12]
    }, {
        type: 'line',
        data: [3, 6, 7, 8, 6, 4, 7, 10, 12, 7, 4, 9, 12, 13, 11, 12]
    }],
    chartOptions: {
        chart: {
            toolbar: {
                show: false
            },
            sparkline: {
                enabled: true
            },
        },
        colors: ['#00b19d', '#fb6d9d'],
        stroke: {
            curve: 'straight',
            width: 1,
        },
        dataLabels: {
            enabled: false
        },
        grid: {
            show: false,
            padding: {
                top: 0,
                left: 0,
                right: 0,
                bottom: 0
            }
        },
        legend: {
            show: false,
        },
        tooltip: {
            x: {
                show: false
            },
            y: {
                title: {
                    formatter: (seriesName) => {
                        return '';
                    }
                }
            },
            marker: {
                show: false
            },
            theme: 'dark'
        },
        xaxis: {
            labels: {
                show: false
            },
            axisBorder: {
                show: false
            },
            lines: {
                show: false,
            }
        }
    }
};
let lastDate = 0;
const data = [];
const TICKINTERVAL = 86400000;
const XAXISRANGE = 777600000;

const getDayWiseTimeSeries = (baseval, count, yrange) => {
    let i = 0;
    while (i < count) {
        const x = baseval;
        const y = Math.floor(Math.random() * (yrange.max - yrange.min + 1)) + yrange.min;

        data.push({
            x, y
        });
        lastDate = baseval;
        baseval += TICKINTERVAL;
        i++;
    }
};

const getNewRealTimeSeries = (yrange) => {
    // tslint:disable-next-line: prefer-const
    const newDate = lastDate + TICKINTERVAL;
    lastDate = newDate;

    for (let i = 0; i < data.length - 10; i++) {
        // IMPORTANT
        // we reset the x and y of the data which is out of drawing area
        // to prevent memory leaks
        data[i].x = newDate - XAXISRANGE - TICKINTERVAL;
        data[i].y = 0;
    }

    data.push({
        x: newDate,
        y: Math.floor(Math.random() * (yrange.max - yrange.min + 1)) + yrange.min
    });

    return data;
};

// get initial data
getDayWiseTimeSeries(new Date('11 Feb 2017 GMT').getTime(), 10, {
    min: 10,
    max: 90
});

const revenueRealTimeChart = {
    chartOptions: {
        chart: {
            animations: {
                enabled: true,
                easing: 'linear',
                dynamicAnimation: {
                    speed: 1000
                }
            },
            toolbar: {
                show: false
            },
            sparkline: {
                enabled: true
            },
        },
        zoom: {
            enabled: false
        },
        colors: ['#00b19d'],
        grid: {
            show: false,
            padding: {
                top: 0,
                left: 0,
                right: 0,
                bottom: 0
            }
        },
        tooltip: {
            x: {
                show: false
            },
            y: {
                title: {
                    formatter: (seriesName) => {
                        return '';
                    }
                }
            },
            marker: {
                show: false
            },
            theme: 'dark'
        },
        dataLabels: {
            enabled: false
        },
        stroke: {
            curve: 'smooth'
        },
        markers: {
            size: 0
        },
        xaxis: {
            type: 'datetime',
            range: XAXISRANGE,
            labels: {
                show: false
            },
            axisBorder: {
                show: false,
            }
        },
        yaxis: {
            max: 100
        },
        legend: {
            show: false
        },
    },
    series: [
        {
            name: 'Data',
            data
        }
    ]
};

export {
    widgetData, widgetuser, widget, revenueAreaChart, revenueBarChart, revenuePieChart,
    revenueLineColumnChart, revenueLineChart, revenueRealTimeChart, getNewRealTimeSeries
};