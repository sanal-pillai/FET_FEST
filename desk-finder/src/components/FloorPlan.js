import React from 'react';
import floordata from './actual_data.json'
import Box from '@material-ui/core/Box'

export default class FloorPlan extends React.PureComponent {

   render() {
       return (
            floordata.floor_plan.map((data) => {
                return data.id.includes("X10") === false ? <span> {data.id} </span> : <span> {data.id}<br/></span>
            })
       )}
}

