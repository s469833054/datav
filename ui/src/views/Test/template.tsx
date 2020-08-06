import React,{ReactNode} from 'react'

import { connect } from 'react-redux';
import {StoreState} from 'src/types'  
import { store } from 'src/store/store';

interface Props {
    locale: string,
    children: ReactNode
}

const Config = (props:Props) =>{
    return (
        <>
            <div>
                {props.children}
            </div>
        </>
    )
}

export const mapStateToProps = (state: StoreState) => ({
    locale: state.application.locale    
});

export default connect(mapStateToProps)(Config);