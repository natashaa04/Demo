"use client"
import React from 'react'
import CardGiftcardIcon from '@mui/icons-material/CardGiftcard';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import LocalAtmIcon from '@mui/icons-material/LocalAtm';
import CreditScoreIcon from '@mui/icons-material/CreditScore';
import HeadsetMicIcon from '@mui/icons-material/HeadsetMic';
import "./Element.css"


export default function ElementSection() {
  return (
    <div>
        <div className='elementWrapper'>
            <div className='elementItem'>
             <div className='icons'> <LocalShippingIcon /></div>
                <h5>FREE SHIPPING</h5>
                <p>Free Shipping for all US order</p>
            </div>
             <div className='elementItem'>
                <div className='icons'> <HeadsetMicIcon/></div>
                <h5>SUPPORT 24/7</h5>
                <p>We support 24h a day</p>
            </div>
             <div className='elementItem'>
                <div className='icons'> <LocalAtmIcon/></div>
                <h5>100% MONEY BACK</h5>
                <p>You have 14 days to Return</p>
            </div>
             <div className='elementItem'>
                <div className='icons'> <CreditScoreIcon /></div>
                <h5>PAYMENT SECURE</h5>
                <p>We ensure secure payment</p>
            </div>
             <div className='elementItem'>
                <div className='icons'> <CardGiftcardIcon /></div>
                <h5>DISCOUNT</h5>
                <p>Up to 30% for member</p>
            </div>

        </div>
    </div>
  )
}
