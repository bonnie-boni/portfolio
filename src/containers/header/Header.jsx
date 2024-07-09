import React from 'react'
import './header.css'
import bonnie from '../../media/bonnie.png';

const Header = () => {
  return (
    <div className='header' id='Home'>
      <div className="header__content">
      <div className="header__content-text">
        <h1>Hi,it's <span> Bonnie </span> </h1>
        <h2>I am a <span> </span></h2>
        <p>naknxkjnxkjsankxn j anxkjanskx xkjakjnksjakc abjkbackjnkjsa
          abjkabckjkjc bajbjkbakjdnkjnkajbda a ajbkja  ajkskkjansdkjnkasd bdjkdasd
          bjkabskjdnakndkasd abdkjadkjnd bdkjasdkjnas asbdjkandkjnkd asdbakjdkaj dasdbkjad
          nalkndlkasdlknklas jdakdnaklnd dakjnsnsd askjnaknda akdkansdlknasd asdnkjndasd asbdjkandkjnkdbakjs
          bkasdkjand dakdkjnd asnkjand sd
        </p>
      </div>
      <div className="header__content-image">
        <img src={bonnie} alt="Bonnie" />
      </div>
      </div>
    </div>
  )
}

export default Header
