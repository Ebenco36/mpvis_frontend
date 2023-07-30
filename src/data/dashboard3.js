export const widgetBarChartThree = {
  series: [
    {
      name: "Inflation",
      data: [5, 15, 25, 35, 55, 75, 100, 75, 55, 35, 25, 15, 5],
    },
  ],
  chartOptions: {
    chart: {
      type: "bar",
      width: "70%",
      height: 100,
      sparkline: {
        enabled: true,
      },
    },
    tooltip: {
      enabled: true,
      theme: "dark",
    },
    plotOptions: {
      bar: {
        columnWidth: "30%",
        endingShape: "rounded",
      },
    },
    dataLabels: {
      enabled: false,
    },
    xaxis: {
      crosshairs: {
        width: 1,
      },
    },
    colors: ["#A855F7"],
  },
};

export const widgetBarChartFour = {
  series: [
    {
      name: "Inflation",
      data: [5, 15, 15, 35, 35, 75, 90, 75, 35, 35, 15, 15, 5],
    },
  ],
  chartOptions: {
    chart: {
      type: "bar",
      width: "70%",
      height: 100,
      sparkline: {
        enabled: true,
      },
    },
    plotOptions: {
      bar: {
        columnWidth: "30%",
        endingShape: "rounded",
      },
    },
    dataLabels: {
      enabled: false,
    },
    xaxis: {
      crosshairs: {
        width: 1,
      },
    },
    tooltip: {
      enabled: true,
      theme: "dark",
    },
    // colors: ['#6534ff'],
    colors: ["#f44336"],
  },
};
export const widgetBarChartFive = {
  series: [
    {
      name: "Inflation",
      data: [5, 15, 25, 35, 25, 15, 5, 10, 20, 30, 45, 65, 45, 30, 20, 10],
    },
  ],
  chartOptions: {
    chart: {
      type: "bar",
      width: "70%",
      height: 100,
      sparkline: {
        enabled: true,
      },
    },
    plotOptions: {
      bar: {
        columnWidth: "30%",
        endingShape: "rounded",
      },
    },
    dataLabels: {
      enabled: false,
    },
    xaxis: {
      crosshairs: {
        width: 1,
      },
    },
    colors: ["#7d6cbb"],
    tooltip: {
      enabled: true,
      theme: "dark",
    },
  },
};
export const widgetBarChartSix = {
  series: [
    {
      name: "Inflation",
      data: [100, 85, 75, 55, 35, 25, 15, 5, 15, 25, 35, 55, 75, 85, 90, 100],
    },
  ],
  chartOptions: {
    chart: {
      type: "bar",
      width: "70%",
      height: 100,
      sparkline: {
        enabled: true,
      },
    },
    plotOptions: {
      bar: {
        columnWidth: "30%",
        endingShape: "rounded",
      },
    },
    dataLabels: {
      enabled: false,
    },
    xaxis: {
      crosshairs: {
        width: 1,
      },
    },
    colors: ["#7566b5"],
    tooltip: {
      enabled: true,
      theme: "dark",
    },
  },
};

export const basicColumnChart = {
  series: [
    {
      name: "Net Profit",
      data: [44, 55, 57, 56, 61, 58, 63, 60, 66],
    },
    {
      name: "Revenue",
      data: [76, 85, 101, 98, 87, 105, 91, 114, 94],
    },
    {
      name: "Free Cash Flow",
      data: [35, 41, 36, 26, 45, 48, 52, 53, 41],
    },
  ],
  chartOptions: {
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: "55%",
        endingShape: "rounded",
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      show: true,
      width: 2,
      colors: ["transparent"],
    },

    xaxis: {
      categories: [
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
      ],
    },
    yaxis: {
      title: {
        text: "$ (thousands)",
      },
    },
    fill: {
      opacity: 1,
    },

    tooltip: {
      theme: "dark",
      y: {
        formatter: function (val) {
          return "$ " + val + " thousands";
        },
      },
    },
    colors: ["#C4B5FD", "#A78BFA", "#A855F7"],
  },
};

export const dashboardOne = {
  series: [
    {
      name: "Free Cash Flow",
      data: [20, 55, 30, 56, 20, 58, 33, 60, 46],
    },
  ],
  chartOptions: {
    colors: "#A78BFA",
    chart: {
      type: "bar",
      height: 300,
      toolbar: {
        show: false,
      },
    },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: "10%",
        endingShape: "rounded",
      },
    },
    grid: {
      show: false,
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      show: false,
      width: 0,
      colors: ["transparent"],
    },
    xaxis: {
      labels: {
        show: false,
      },
      axisBorder: {
        show: false,
      },
    },
    yaxis: {
      labels: {
        show: false,
      },
    },
    fill: {
      opacity: 1,
    },
    tooltip: {
      theme: "dark",
      y: {
        formatter: function (val) {
          return "$ " + val + " thousands";
        },
      },
    },
  },
};
export const dashboardTwo = {
  series: [
    {
      name: "Free Cash Flow",
      data: [20, 55, 30, 56, 20, 58, 33, 60, 46],
    },
  ],
  chartOptions: {
    colors: "#ef4444",
    chart: {
      type: "bar",
      height: 300,
      toolbar: {
        show: false,
      },
    },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: "10%",
        endingShape: "rounded",
      },
    },
    grid: {
      show: false,
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      show: false,
      width: 0,
      colors: ["transparent"],
    },
    xaxis: {
      labels: {
        show: false,
      },
      axisBorder: {
        show: false,
      },
    },
    yaxis: {
      labels: {
        show: false,
      },
    },
    fill: {
      opacity: 1,
    },
    tooltip: {
      theme: "dark",
      y: {
        formatter: function (val) {
          return "$ " + val + " thousands";
        },
      },
    },
  },
};
