import React, { useEffect, useState } from "react";
import { KeyboardPartial } from "@/src/atoms/snippetAtom";
import { Flex } from "@chakra-ui/react";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, firestore } from "@/src/firebase/clientApp";
import { collection, getDocs, query, where } from "firebase/firestore";

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
// use firebase query to retrieve the data, then render the data using victory
const LineChart: React.FC<LineChartProps> = ({ keyboardData }) => {
  const [activeX, setActiveX] = useState();
  const [zoomDomain, setZoomDomain] = useState();
  const [data, setData] = useState();

  useEffect(() => {
    const fetchChartData = async () => {
      const chartDataQuerey = query(
        collection(firestore, "keyboards"),
        where("keybordId", "==", keyboardData.id)
      );
      
      const chartDocs = await getDocs(chartDataQuerey);
      const chart = chartDocs.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));

      
    };
    fetchChartData();

  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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
            data: { stroke: "red" },
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
        <VictoryAxis tickFormat={(x) => new Date(x).getFullYear} />
        <VictoryLine
          style={{ data: { stroke: "blue" } }}
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

// example
// TimeSeriesGraph.tsx
/* import React, { useEffect } from 'react';
import { VictoryChart, VictoryAxis, VictoryLine } from 'victory';
import db from './firebase';
import { useRecoilState } from 'recoil';
import { timeSeriesData } from './atoms';

const TimeSeriesGraph: React.FC = () => {
  const [data, setData] = useRecoilState(timeSeriesData);

  useEffect(() => {
    const fetchData = async () => {
      const dataRef = db.ref('your_data_path/');
      dataRef.on('value', (snapshot) => {
        let array: number[] = [];
        snapshot.forEach((childSnapshot) => {
          array.push(childSnapshot.val());
        });
        for (let x = 0; x <= array.length; x++) {
          setData((prevState) => [
            ...prevState,
            { x: x, y: JSON.parse("[" + array + "]")[x] },
          ]);
        }
      });
    };

    fetchData();
  }, []);

  return (
    <VictoryChart>
      <VictoryAxis
        tickFormat={(x) => new Date(x).getHours() + ':' + new Date(x).getMinutes()}
      />
      <VictoryAxis dependentAxis />
      <VictoryLine data={data} />
    </VictoryChart>
  );
};

export default TimeSeriesGraph;
 */
