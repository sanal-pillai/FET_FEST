import React from 'react'
import floordata from './actual_data.json'
import Box from '@material-ui/core/Box'
import Blocks from './Blocks'

export default class FloorPlan extends React.PureComponent {

    constructor(props) {
        super(props)
        this.state = {
            path: []
        }
    }

    static getDerivedStateFromProps(props, state) {
        if(props.deskId.length === 4) {
            fetch('/nodes/'+ props.deskId).then(res => {
                const { floor_plan } = res
                this.setState = {
                    path: floor_plan
                }
            }).catch(err => {
                console.log(err)
            })
        } 
    }

    getPath = (id) => {
        let result = this.state.path.filter(path => path.id === id)
        if(result.length > 0) {
            return true
        } 
        return false
    }

   render() {
       return (
           <Box>
               <Box>
                {floordata.floor_plan.map((data) => {
                    return data.id.includes("X10") === false ?
                        <Blocks data={data} path={this.getPath(data.id)}/> :
                        <span><Blocks data={data} path={this.getPath(data.id)}/><br/></span>
                })}
            </Box>
            <Box style={{borderStyle:'dotted',Width:'300px',marginLeft:'200px'}}> Entrance </Box>
           </Box>
           
       )}
}