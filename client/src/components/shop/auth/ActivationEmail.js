import React, { useState, useEffect } from 'react'
import { useHistory, useParams } from 'react-router-dom'
import { activationEmail } from "./fetchApi";

const ActivationEmail = () => {
    const { activation_token } = useParams()
    
    useEffect(() => {
        if (activation_token) {
            try {
                activationEmail(activation_token)
                // window.location.href = "/";
            } catch (error) {
                console.log(error)
            }
        }
    }, [activation_token])

    return (
        <div>
        </div>
    )
}

export default ActivationEmail