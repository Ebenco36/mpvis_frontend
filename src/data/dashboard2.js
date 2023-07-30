export const dashboardOne = {
  series: [
    {
      name: "Desktops",
      data: [40, 80, 20, 90, 30, 80, 40],
    },
  ],

  chartOptions: {
    colors: ["#8b5cf6"],
    chart: {
      colors: ["#8b5cf6"],
      height: 350,
      type: "line",
      zoom: {
        enabled: false,
      },
      toolbar: {
        show: false,
      },
      markers: {
        size: 5,
        colors: "#8b5cf6",
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: "smooth",
    },

    tooltip: {
      enabled: true,
      theme: "dark",
    },
    xaxis: {
      labels: {
        show: false,
      },
    },
    yaxis: {
      labels: {
        show: false,
      },
    },
  },
};

export const dashboardTwo = {
  series: [30, 70],
  chartOptions: {
    colors: ["rgba(221, 214, 254, 0.3)", "#8b5cf6"],
    legend: {
      show: false,
    },
    dataLabels: {
      enabled: false,
    },
    chart: {
      type: "donut",
    },
    responsive: [
      {
        breakpoint: 480,
        options: {
          chart: {
            width: 200,
          },
          legend: {
            position: "bottom",
          },
        },
      },
    ],
  },
};
