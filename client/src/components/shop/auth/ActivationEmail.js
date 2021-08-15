import React, { useState, useEffect } from 'react'
import { useHistory, useParams } from 'react-router-dom'
import { activationEmailReq } from "./fetchApi";

const ActivationEmail = () => {
    const { activation_token } = useParams()

    useEffect(async () => {
        if (activation_token) {
            try {
                let responseData = await activationEmailReq(activation_token)
                console.log(responseData)
                if (responseData.token) {
                    localStorage.setItem("jwt", JSON.stringify(responseData));
                    window.location.href = "/";
                }
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