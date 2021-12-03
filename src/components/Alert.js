import React from 'react'

export const Alert = (props) => {
    return (
        
        props.alert!==null && (
            <div className={`alert alert-${props.alert.type}`}>
                <i className="fas fa-info-circle " /> {props.alert.msg}
            </div>
        )

    )
}
