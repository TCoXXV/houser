import React, {Component} from 'react';
import House from '../House/House';
import './Dashboard.css';
import axios from 'axios';
// import routes from './routes.js';
import { Link } from 'react-router-dom';

export default class Dashboard extends Component {
    constructor(){
        super();
        this.state = {
            houses: []
        }
    }

    componentDidMount(){
        this.getRequest()
      }    
    
      getRequest = ()=>{
        axios.get('/api/houses').then(res =>  this.setState({ houses: res.data }))
      }

      deleteHouse = (id)=>{
        console.log(id);
        axios.delete(`/api/house/${id}`)
        .then(res => {
          console.log(res)
          this.setState({ houses: res.data})
        })
      }
    

    render(){
        const {houses}=this.state;
        let mapHouses = houses.map((house,i)=>{
            
            return <House key={i} delete={() => this.deleteHouse(house.id)} house={house} /> 
        })
        return (
            <div className='dashboardp'>
                <div className='dashboardc'>
                <h1 className='dashh1'>Dashboard       <Link to='/wizard/stepone' className='link1'><button className='addnewprop'>Add New Property</button></Link> </h1>
                <hr/>
                <h3>Home Listings</h3>
                {mapHouses}
                </div>
            </div>
        )
    }
}