import React, {Component} from 'react';
import '../Wizard.css';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { updateMonthlyMortgage, updateDesiredRent } from '../../../ducks/reducer';


class StepThree extends Component {
    // constructor(){
    //     super();
    //     this.state = {
    //         monthly_mortgage: 0,
    //         desired_rent: 0,
    //     }
    // }
    // updateMonthly = (val)=>{
    //     this.setState({
    //         monthly_mortgage: val
    //     })
    // }
    
    // updateDesired = (val)=>{
    //     this.setState({
    //         desired_rent: val
    //     })
    // }
    
    //  postReq = ()=>{
    //      axios.post('/api/house', this.state)
    //      .then(() => {
    //       this.clear()})
    //  }

    //  clear = ()=>{
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
       
    //     axios.post('/api/house', this.props)
    //     .then(() => {
    //      this.clear()})
    // }

    render(){
        const { updateMonthlyMortgage, updateDesiredRent } = this.props;
        console.log(this.props)
        return (
             <div className='stepp'>
                <div className='stepc'>
                    <p>Recommended Rent: $</p>
                    <br/>
                   <p>Monthly Mortgage Amount</p>
                    <input onChange={e=>updateMonthlyMortgage(e.target.value)} type="text"/>
                   <p>Desired Monthly Rent</p>
                    <input onChange={e=>updateDesiredRent(e.target.value)} type="text"/>
                   
                    <br/>
                    <br/>
                    <br/>
                    <div className='btnspace'>
                    <Link to='/wizard/steptwo' ><button className='prvnxt'>Previous Step</button></Link> <button className='compbtn'>Complete</button>
                    </div>
                </div>
                
            </div>
        )
    }
}

function mapStateToProps(sT){
    const { monthly_mortgage, desired_rent } = sT;
    return {
        monthly_mortgage,
        desired_rent
    };
};

export default connect(mapStateToProps,{ updateMonthlyMortgage, updateDesiredRent })(StepThree); 