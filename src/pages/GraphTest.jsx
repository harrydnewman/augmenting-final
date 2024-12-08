import ScatterPlot from "../components/LinePlot";

export default function GraphTest() {
  const data = [
    { x: 10, y: 20, label: "A", link: "/information", icon: "🗿" },
    { x: 40, y: 90, label: "B", link: null, icon: "🎭" },
    { x: 80, y: 50, label: "C", link: null, icon: "💀" },
  ];
  return (
    <ScatterPlot data={data} xText={"now"} yText={"instant"} zeroText={"snail mail"} />
  )
}