import React, {Component} from 'react';
import '../Wizard.css';
// import axios from 'axios';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { updateImage } from '../../../ducks/reducer';


class StepTwo extends Component {
    // constructor(){
    //     super();
    //     this.state = {
    //         image: '',
    //     }
    // }
    // updateI = (val)=>{
    //     this.setState({
    //         image: val
    //     })
    // }
    
   

    render(){
        const { updateImage } = this.props;
        return (
             <div className='stepp'>
                <div className='stepc'>
                   <p>Image URL</p>
                    <input onChange={e=>updateImage(e.target.value)} type="text"/>
                   
                    <br/>
                    <br/>
                    <br/>
                    <div className='btnspace'>

                    <Link to='/wizard/stepone' ><button className='prvnxt step1'>Previous Step</button></Link>
                     <Link to='/wizard/stepthree' ><button className='prvnxt step3'>Next Step</button></Link>
                    </div>
                </div>
                
            </div>
        )
    }
}

function mapStateToProps(sT){
    const { image  } = sT;
    return {
       image
    };
};

export default connect(mapStateToProps,{updateImage})(StepTwo); 