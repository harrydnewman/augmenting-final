import React, { useEffect, useRef } from "react";
import * as d3 from "d3";
import { useNavigate } from "react-router-dom";

const ScatterPlot = ({data, zeroText, xText, yText}) => {
  const svgRef = useRef();
  const navigate = useNavigate(); // React Router navigate function

  useEffect(() => {
    d3.select(svgRef.current).selectAll("*").remove();

    const width = 300;
    const height = 300;
    const margin = { top: 20, right: 20, bottom: 40, left: 40 };
  
    const svg = d3
      .select(svgRef.current)
      .attr("width", width)
      .attr("height", height);
  
    // Clear any previous content
    svg.selectAll("*").remove();
  
    // Define marker for arrowheads
    svg.append("defs")
      .append("marker")
      .attr("id", "arrowhead")
      .attr("viewBox", "0 0 10 10")
      .attr("refX", 5)
      .attr("refY", 5)
      .attr("markerWidth", 6)
      .attr("markerHeight", 6)
      .attr("orient", "auto")
      .append("path")
      .attr("d", "M 0 0 L 10 5 L 0 10 Z")
      .attr("fill", "black");
  
    // Create scales
    const xScale = d3
      .scaleLinear()
      // .domain([0, d3.max(data, (d) => d.x) + 10])
      .domain([0,100])
      .range([margin.left, width - margin.right]);
  
    const yScale = d3
      .scaleLinear()
      // .domain([0, d3.max(data, (d) => d.y) + 10])
      .domain([0,100])
      .range([height - margin.bottom, margin.top]);
  
    // Add X axis line with arrowhead
    svg.append("line")
      .attr("x1", margin.left - 30)
      .attr("x2", width - margin.right + 10)
      .attr("y1", height - margin.bottom)
      .attr("y2", height - margin.bottom)
      .attr("stroke", "blue")
      .attr("stroke-width", 2.5)
      .attr("marker-end", "url(#arrowhead)");
  
    // Add Y axis line with arrowhead
    svg.append("line")
      .attr("x1", margin.left - 30)
      .attr("x2", margin.left - 30)
      .attr("y1", height - margin.bottom)
      .attr("y2", margin.top - 10)
      .attr("stroke", "purple")
      .attr("stroke-width", 2.5)
      .attr("marker-end", "url(#arrowhead)");
  
    // Add X axis custom labels
    const xTicks = [margin.left, width / 2, width - margin.right];
    const xLabels = [`${zeroText}`, "", `${xText}`];
  
    xTicks.forEach((tick, index) => {
      svg
        .append("text")
        .attr("x", tick - 30)
        .attr("y", height - margin.bottom + 20)
        .attr("text-anchor", "start")
        .text(xLabels[index])
        .attr("font-size", "18px");
    });
  
    // Add Y axis custom labels
    const yTicks = [height - margin.bottom, height / 2, margin.top];
    const yLabels = ["", "", `${yText}`];
  
    yTicks.forEach((tick, index) => {
      svg
        .append("text")
        .attr("x", margin.left - 20)
        .attr("y", tick)
        .attr("text-anchor", "start")
        .attr("alignment-baseline", "start")
        .text(yLabels[index])
        .attr("font-size", "18px");
    });
  
    // Add emoji icons
    svg
      .selectAll(".icon")
      .data(data)
      .enter()
      .append("text")
      .attr("x", (d) => xScale(d.x))
      .attr("y", (d) => yScale(d.y))
      .text((d) => d.icon)
      .attr("font-size", "30px")
      .attr("text-anchor", "middle")
      .attr("alignment-baseline", "middle")
      .style("cursor", (d) => (d.link ? "pointer" : "default"))
      .on("click", (event, d) => {
        if (d.link) {
          navigate(d.link);
        }
      });
  }, [data, navigate, zeroText, xText, yText]);
  

  return <svg ref={svgRef}></svg>;
};

export default ScatterPlot;
