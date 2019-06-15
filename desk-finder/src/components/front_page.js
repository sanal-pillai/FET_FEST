import React from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import {classes} from './logic'
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import FloorPlan from  './FloorPlan';

export default class FrontPage extends React.PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      deskId: ""
    }
  }

  handleChange = event => {
    this.setState({
      deskId: event.target.value,
    })
  }

  render(){
    return (
      <div style={{borderStyle:'dotted',Width:'500px'}}>
      <CssBaseline />
      <Container maxWidth="lg">
       <Typography component="div" style={{ backgroundColor: '', height: '100vh' }}>
       <form className={classes.container} noValidate autoComplete="off">
      
      <TextField
        id="standard-name"
        label="Enter your Desk ID"
        className={classes.textField}
        onChange={this.handleChange}
        margin="normal"
        placeholder="Desk"
      />
      <Button style={{marginTop:'25px',marginLeft:'20px'}}
              variant="contained"
              color="primary"
              onClick={this.handleChange}>
        Find it
      </Button>
            <FloorPlan deskId={this.state.deskId}></FloorPlan>
      </form>
       </Typography>
      </Container>
      </div>
      
    )
  }
}