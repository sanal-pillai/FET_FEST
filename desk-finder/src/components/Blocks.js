import React from 'react'
import Box from '@material-ui/core/Box'

export default class Blocks extends React.PureComponent {

   render() {
       const { data } = this.props
       return (
           <Box style={{display: "inline-block",
                        width: "100px",
                        height: "100px",
                        backgroundColor: data.type === "cubicle" ? "seagreen" : "aliceblue",
                        borderLeftStyle: data.desk.includes("A") || data.desk.includes("C") === true ? 'solid' : 'none',
                        borderTopStyle: data.desk.includes("A") || data.desk.includes("B") === true ? 'solid': 'none',
                        borderRightStyle: data.desk.includes("B") || data.desk.includes("D") === true ? 'solid' : 'none',
                        borderBottomStyle: data.desk.includes("C") || data.desk.includes("D") === true ? 'solid': 'none',
                        }}>
                <span>{this.props.data.desk === "" ?
                    <span style={{visibility: 'hidden'}}>{this.props.data.id}</span>
                    : this.props.data.desk }</span>
            </Box>
       )}
}
