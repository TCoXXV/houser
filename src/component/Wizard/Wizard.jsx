import React, {Component} from 'react';
import './Wizard.css';
// import axios from 'axios';
// import routes from './routes.js';
import { Link } from 'react-router-dom';
import {Route} from 'react-router-dom';
import StepOne from './Steps/StepOne';
import StepTwo from './Steps/StepTwo';
import StepThree from './Steps/StepThree';


export default class Wizard extends Component {
   

    render(){
        return (
             <div className='wizardp'>
                 <div className='wizardc' >
                 <Link to='/' className='linkwiz'><button className='cancelbtn'>Cancel</button></Link> 
                 <h1 className='wizardh1'>Add New Listing</h1>
                 <hr/>
                    
                        <Route exact path='/wizard/stepone' component={StepOne} />
                        <Route exact path='/wizard/steptwo' component={StepTwo} />
                        <Route exact path='/wizard/stepthree' component={StepThree} />
                    
                 </div>
             </div>
        )
    }
}