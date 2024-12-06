import React, { useEffect, useRef } from "react";
import * as d3 from "d3";
import { useNavigate } from "react-router-dom";

const ScatterPlot = ({data, zeroText, xText, yText}) => {
  const svgRef = useRef();
  const navigate = useNavigate(); // React Router navigate function

  useEffect(() => {
    // Data for the scatterplot with emoji icons
    {data}

    // Set up dimensions
    const width = 300;
    const height = 200;
    const margin = { top: 20, right: 20, bottom: 40, left: 40 };

    const svg = d3
      .select(svgRef.current)
      .attr("width", width)
      .attr("height", height);

    // Clear any previous content
    svg.selectAll("*").remove();

    // Create scales
    const xScale = d3
      .scaleLinear()
      .domain([0, d3.max(data, (d) => d.x) + 10])
      .range([margin.left, width - margin.right]);

    const yScale = d3
      .scaleLinear()
      .domain([0, d3.max(data, (d) => d.y) + 10])
      .range([height - margin.bottom, margin.top]);

    // Add X axis with custom labels
    const xAxis = svg
      .append("g")
      .attr("transform", `translate(0, ${height - margin.bottom})`)
      .call(d3.axisBottom(xScale).tickFormat(() => "").tickSizeOuter(0)); // Keep axis lines but hide ticks

    // Add custom labels for X-axis
    const xTicks = [margin.left, width / 2, width - margin.right];
    const xLabels = [`${zeroText}`, "", `${xText}`];

    xTicks.forEach((tick, index) => {
      svg
        .append("text")
        .attr("x", tick)
        .attr("y", height - margin.bottom + 20)
        .attr("text-anchor", "middle")
        .text(xLabels[index])
        .attr("font-size", "12px");
    });

    // Add Y axis with custom labels
    const yAxis = svg
      .append("g")
      .attr("transform", `translate(${margin.left}, 0)`)
      .call(d3.axisLeft(yScale).tickFormat(() => "").tickSizeOuter(0)); // Keep axis lines but hide ticks

    // Add custom labels for Y-axis
    const yTicks = [height - margin.bottom, height / 2, margin.top];
    const yLabels = ["", "", `${yText}`];

    yTicks.forEach((tick, index) => {
      svg
        .append("text")
        .attr("x", margin.left + 45)
        .attr("y", tick)
        .attr("text-anchor", "end")
        .attr("alignment-baseline", "middle")
        .text(yLabels[index])
        .attr("font-size", "12px");
    });

    // Add emoji icons with click handling
    svg
      .selectAll(".icon")
      .data(data)
      .enter()
      .append("text")
      .attr("x", (d) => xScale(d.x))
      .attr("y", (d) => yScale(d.y))
      .text((d) => d.icon)
      .attr("font-size", "20px")
      .attr("text-anchor", "middle")
      .attr("alignment-baseline", "middle")
      .style("cursor", (d) => (d.link ? "pointer" : "default")) // Pointer cursor for clickable icons
      .on("click", (event, d) => {
        if (d.link) {
          navigate(d.link); // Navigate to the link
        }
      });
  }, [navigate]);

  return <svg ref={svgRef}></svg>;
};

export default ScatterPlot;
