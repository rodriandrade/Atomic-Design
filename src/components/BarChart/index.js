import React from "react";
import { ResponsiveBar } from '@nivo/bar'
import { linearGradientDef } from '@nivo/core'
// make sure parent container have a defined height when using
// responsive component, otherwise height will be 0 and
// no chart will be rendered.
// website examples showcase many properties,
// you'll often use just a few of them.
const BarChart = props => {

    const { danceability, energy, speechiness, acousticness, instrumentalness, liveness, valence } = props.trackData;
    console.log(danceability);
    const values = [danceability, energy, speechiness, acousticness, instrumentalness, liveness, valence];
    const newValues = values.map((value) => (Math.round(value * 100)));

    const data = [
        {
          "feature": "Danceability",
          "value": newValues[0] 
        },
        {
          "feature": "Energy",
          "value": newValues[1] ,
        },
        {
          "feature": "Speechiness",
          "value": newValues[2] ,
        },
        {
          "feature": "Acousticness",
          "value": newValues[3] ,
        },
        {
          "feature": "Instrumentalness",
          "value": newValues[4] ,
        },
        {
            "feature": "Liveness",
            "value": newValues[5] ,
        },
        {
            "feature": "Valence",
            "value": newValues[6] ,
        }
      ];

      console.log(data);

    return(
    <ResponsiveBar
        data={data}
        keys={[ 'value' ]}
        indexBy="feature"
        margin={{ top: 50, right: 130, bottom: 50, left: 60 }}
        maxValue={100}
        padding={0.3}
        colors={{ scheme: 'nivo' }}
        defs={[
            {
                id: 'dots',
                type: 'patternDots',
                background: 'inherit',
                color: '#38bcb2',
                size: 4,
                padding: 1,
                stagger: true
            },
            {
                id: 'lines',
                type: 'patternLines',
                background: 'inherit',
                color: '#eed312',
                rotation: -45,
                lineWidth: 6,
                spacing: 10
            },
            {
                id: 'gradientA',
                type: 'linearGradient',
                colors: [
                    { offset: 0, color: '#1E0358' },
                    { offset: 100, color: '#68F4DB' },
                ],
            },
        ]}
        fill={[
            {
                match: {
                    id: 'fries'
                },
                id: 'dots'
            },
            {
                match: {
                    id: 'sandwich'
                },
                id: 'lines'
            },
            { match: '*', id: 'gradientA' },
        ]}
        borderColor={{ from: 'color', modifiers: [ [ 'darker', 1.6 ] ] }}
        axisTop={null}
        axisRight={null}
        axisBottom={{
            tickSize: 0,
            tickPadding: 5,
            tickRotation: 0,
            legend: 'Spotify Data',
            legendPosition: 'middle',
            legendOffset: 45
        }}
        axisLeft={{
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: 'Percentage',
            legendPosition: 'middle',
            legendOffset: -50
        }}
        enableGridY={false}
        labelSkipWidth={12}
        labelSkipHeight={12}
        labelTextColor={{ from: 'color', modifiers: [ [ 'darker', 1.6 ] ] }}
        legends={[
            {
                dataFrom: 'keys',
                anchor: 'bottom-right',
                direction: 'column',
                justify: false,
                translateX: 120,
                translateY: 0,
                itemsSpacing: 2,
                itemWidth: 100,
                itemHeight: 20,
                itemDirection: 'left-to-right',
                itemOpacity: 0.85,
                symbolSize: 20,
                effects: [
                    {
                        on: 'hover',
                        style: {
                            itemOpacity: 1
                        }
                    }
                ]
            }
        ]}
        animate={true}
        motionStiffness={90}
        motionDamping={15}
    />
    )
}

export default BarChart