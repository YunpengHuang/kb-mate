import React, { useState } from "react";
import { KeyboardPartial } from "@/src/atoms/snippetAtom";
import { Flex } from "@chakra-ui/react";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "@/src/firebase/clientApp";

import {
  VictoryLine,
  VictoryChart,
  VictoryZoomContainer,
  VictoryBrushContainer,
  VictoryAxis,
  VictoryTooltip,
  createContainer,
} from "victory";

type LineChartProps = {
  keyboardData: KeyboardPartial;
};

// TODO placeholder right now, comeback to finish, victory (remember to remove other libraries)
const LineChart: React.FC<LineChartProps> = ({ keyboardData }) => {
  const [activeX, setActiveX] = useState();
  const [zoomDomain, setZoomDomain] = useState();

  return (
    <>
      <VictoryChart
        width={550}
        height={300}
        scale={{ x: "time" }}
        containerComponent={
          <VictoryZoomContainer
            responsive={false}
            zoomDimension="x"
            zoomDomain={zoomDomain}
            // onZoomDomainChange={(domain) => setZoomDomain(domain)}
          />
        }
      >
        <VictoryLine
          style={{
            data: { stroke: "tomato" },
          }}
          data={[
            { x: new Date(1982, 1, 1), y: 125 },
            { x: new Date(1987, 1, 1), y: 257 },
            { x: new Date(1993, 1, 1), y: 345 },
            { x: new Date(1997, 1, 1), y: 515 },
            { x: new Date(2001, 1, 1), y: 132 },
            { x: new Date(2005, 1, 1), y: 305 },
            { x: new Date(2011, 1, 1), y: 270 },
            { x: new Date(2015, 1, 1), y: 470 },
          ]}
          x="a"
          y="b"
        />
      </VictoryChart>
      <VictoryChart
        padding={{ top: 0, left: 50, right: 50, bottom: 30 }}
        width={600}
        height={100}
        scale={{ x: "time" }}
        containerComponent={
          <VictoryBrushContainer
            brushDimension={"x"}
            brushDomain={zoomDomain}
            onBrushDomainChange={(domain) => setZoomDomain(domain)}
          />
        }
      >
        <VictoryAxis tickFormat={[]} />
        <VictoryLine
          style={{ data: { stroke: "tomato" } }}
          data={[
            { key: new Date(1982, 1, 1), b: 125 },
            { key: new Date(1987, 1, 1), b: 257 },
            { key: new Date(1993, 1, 1), b: 345 },
            { key: new Date(1997, 1, 1), b: 515 },
            { key: new Date(2001, 1, 1), b: 132 },
            { key: new Date(2005, 1, 1), b: 305 },
            { key: new Date(2011, 1, 1), b: 270 },
            { key: new Date(2015, 1, 1), b: 470 },
          ]}
          x="key"
          y="b"
        />
      </VictoryChart>
    </>
  );
};
export default LineChart;
