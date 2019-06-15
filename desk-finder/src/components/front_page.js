import React from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import {currencies,useStyles,classes} from './logic'
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import FloorPlan from  './FloorPlan';
import CardHeader from '@material-ui/core/CardHeader';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';

export default class Front_Page extends React.PureComponent {
  handleChange = name => event => {
    console.log('')
  };
  render(){
    return (
      <div style={{backgroundColor: '#cfe8fc'}}>
      <CssBaseline />
      <Container maxWidth="lg">
       <Typography component="div" style={{ backgroundColor: '#cfe8fc', height: '100vh' }}>
       <form className={classes.container} noValidate autoComplete="off">
      
      <TextField
        id="standard-name"
        label="Enter your Desk ID"
        className={classes.textField}
        onChange={this.handleChange('name')}
        margin="normal"
        placeholder="Desk"
      />
      <Button style={{marginTop:'25px',marginLeft:'20px'}} variant="contained" color="primary">
        Find it
      </Button>
            <FloorPlan></FloorPlan>
      </form>
       </Typography>
      </Container>
      </div>
      
    )
  }
}