import React, {Component} from 'react';
import '../Wizard.css';
// import axios from 'axios';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { updateName, updateAddress, updateCity, updateState, updateZip } from '../../../ducks/reducer';


class StepOne extends Component {
    // constructor(){
    //     super();
    //     this.state = {
    //         name: '',
    //         address: '',
    //         city: '',
    //         state: '',
    //         zip: 0
    //     }
    // }
    // updatePN = (val)=>{
    //     this.setState({
    //         name: val
    //     })
    // }
    // updateA = (val)=>{
    //     this.setState({
    //         address: val
    //     })
    // }
    // updateC = (val)=>{
    //     this.setState({
    //         city: val
    //     })
    // }
    // updateS = (val)=>{
    //     this.setState({
    //         state: val
    //     })
    // }
    // updateZ = (val)=>{
    //     this.setState({
    //         zip: val
    //     })
    // }

    // clear = ()=>{
    //     this.setState({
    //         name: '',
    //         address: '',
    //         city: '',
    //         state: '',
    //         zip: 0
    //     })
    //     console.log(this.state)
    // }

    // postReq = ()=>{
    //     axios.post('/api/house', this.state)
    //     .then(() => {
    //      this.clear()})
    // }
    /* onClick={this.postReq} */

    render(){
        const { updateName, updateAddress, updateCity, updateState, updateZip } = this.props;
        console.log(this.props);
        
        return (
             <div className='stepp'>
                <div className='stepc'>
                   <p>Property Name</p>
                    <input onChange={e=>updateName(e.target.value)} type="text"/>
                    <p>Address</p>
                    <input onChange={e=>updateAddress(e.target.value)} type="text"/>
                    <p>City</p>
                    <input onChange={e=>updateCity(e.target.value)} type="text"/>
                    <p>State</p>
                    <input onChange={e=>updateState(e.target.value)} type="text"/>
                    <p>Zip</p>
                    <input onChange={e=>updateZip(e.target.value)} type="number"/>
                    <br/>
                    <br/>
                    <br/>
                    <Link to='/wizard/steptwo' className='linkwiz'><button className='prvnxt'>Next Step</button></Link>
                </div>
                
            </div>
        )
    }
};


function mapStateToProps(sT){
    const { name, address, city, state, zip  } = sT;
    return {
        name,
        address,
        city,
        state,
        zip
    };
};

export default connect(mapStateToProps,{updateName, updateAddress, updateCity, updateState, updateZip})(StepOne); 