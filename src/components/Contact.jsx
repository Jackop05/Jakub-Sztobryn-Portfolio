import React from 'react'
import { FaArrowDown } from '@fortawesome/free-solid-svg-icons';
import { FaPaperPlane } from '@fortawesome/free-solid-svg-icons';

const Contact = () => {
  return (
    <div>
        <div className=''>Send me a message! <FaArrowDown /></div>
        <div className=''>
            <div className=''>
                <form>
                    <div>
                        <label for="name">Name:</label>
                        <input type="text" id="name" name="name">
                    </div>
                    <div>
                        <label for="email">Email:</label>
                        <input type="email" id="email" name="email">
                    </div>
                </form>
            </div>
            <div className=''>
                <form>
                    <label for="email">Your message:</label>
                    <input type="email" id="email" name="email">
                </form>
            </div>
            <div className='' onClick={() => {}} >Send <FaPaperPlane /></div>
        </div>
    </div>
  )
}

export default Contact;