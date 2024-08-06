import * as React from "react";
import { BarChart } from "@mui/x-charts/BarChart";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const data = [
  { name: "5", value: 4000 },
  { name: "9", value: 3000 },
  { name: "11", value: 2000 },
  { name: "13", value: 2780 },
  { name: "15", value: 1890 },
  { name: "17", value: 2390 },
  { name: "19", value: 3490 },
  { name: "21", value: 4200 },
  { name: "23", value: 2100 },
  { name: "25", value: 3000 },
  { name: "27", value: 2000 },
  { name: "29", value: 3100 },
  { name: "31", value: 5900 },
  { name: "33", value: 2200 },
  { name: "35", value: 2700 },
  { name: "37", value: 5100 },
  { name: "39", value: 2900 },
  { name: "41", value: 1800 },
  { name: "43", value: 3900 },
  { name: "45", value: 1500 },
  { name: "47", value: 3700 },
  { name: "49", value: 2200 },
  { name: "51", value: 2600 },
  { name: "53", value: 3000 },
  { name: "55", value: 3300 },
  { name: "57", value: 4100 },
  { name: "59", value: 6000 },
];

// custom theme
const theme = createTheme({
  palette: {
    text: {
      primary: "#aaa",
    },
  },
});

const BarChartComponent = () => {
  return (
    <ThemeProvider theme={theme}>
      <div style={{ width: "100%" }}>
        <BarChart
          xAxis={[{ scaleType: "band", data: data.map((d) => d.name) }]}
          yAxis={[{}]}
          series={[{ data: data.map((d) => d.value) }]}
          height={230}
          colors={["#7594fa"]}
          sx={{ marginLeft: "1rem" }}
        />
      </div>
    </ThemeProvider>
  );
};

export default BarChartComponent;
