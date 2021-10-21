import React from 'react'
import Content from './Content';

function Container({children}) {
    var container = {
        flexGrow: 1,
        // width: '100%',
        // height: '100%',
        position: 'relative',
        display: 'flex',
        alignItems: 'stretch'
    };

    return (
        <div className='container' style={container}>
            <Content>{children}</Content>
        </div>
    )
}

export default Container
