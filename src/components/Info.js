import React from 'react'
import picture from '../images/spanish.png'

export default function Info(){
    return(
        <div className='info'>
            <img src={picture}
                alt='Profile pic'>
            </img>
            <h1>Jordan Owens</h1>
            <h3>Software Developer</h3>
            <h4>My website</h4>
            <button><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24"><path d="M12 12.713l-11.985-9.713h23.971l-11.986 9.713zm-5.425-1.822l-6.575-5.329v12.501l6.575-7.172zm10.85 0l6.575 7.172v-12.501l-6.575 5.329zm-1.557 1.261l-3.868 3.135-3.868-3.135-8.11 8.848h23.956l-8.11-8.848z"/></svg>
            Email</button>
        </div>
    )
}