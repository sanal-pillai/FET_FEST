import React from 'react'
import floordata from './actual_data.json'
import Box from '@material-ui/core/Box'
import Blocks from './Blocks'

export default class FloorPlan extends React.PureComponent {

   render() {
       return (
           <Box>
                {floordata.floor_plan.map((data) => {
                    return data.id.includes("X10") === false ?
                        <Blocks data={data}/> :
                        <span><Blocks data={data}/><br/></span>
                })}
            </Box>
       )}
}