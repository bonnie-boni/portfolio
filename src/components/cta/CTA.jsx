import React from 'react'
import './cta.css'
import pdf from "../../media/PROVISIONAL RESULTS-INTEMG17980922.pdf"

const CTA = () => {
  return (
    <div className='education' id="Education">
      <div className="education__content">

          <div className="education__content-intro">
              <h1>My Educational Backgroud  ???</h1>
              <p>hdjkahksjdhkjad ajkhd ahsdkjad ashdjkahskdj  dhjkahd asdjhakjdh sdhkasj
                jfsdjkfsdjkf sdjfsdkj fsjfskdj fjksdfh ksdjf sjdfhk fjsf df sdjkfsd fjksd f
                hjkshfkjshfjkshfjkhksd
                <br /><br /> 
                <button type="button"> <a href={pdf} download="pdf" >DOWNLOAD CV</a> </button>
                <p id='test'></p>
              </p>
          </div>

          <div className="education__content-skills-set">

          <h1> My Skill Set</h1>

            <div className="education__content-skills">
              
              <div>
                  <h2> CHATBOTS </h2>
                    <p>hdjkahksjdhkjad ajkhd ahsdkjad ashdjkahskdj  dhjkahd asdjhakjdh sdhkasj
                    jfsdjkfsdjkf sdjfsdkj fsjfskdj fjksdfh ksdjf sjdfhk fjsf df sdjkfsd fjksd f
                    hjkshfkjshfjkshfjkhksd
                    <br /><br /> 
                    <a href="#"> Have a look </a>
                    </p>
                </div>

                <div>
                <h2> WEB-DEV </h2>
                    <p>hdjkahksjdhkjad ajkhd ahsdkjad ashdjkahskdj  dhjkahd asdjhakjdh sdhkasj
                    jfsdjkfsdjkf sdjfsdkj fsjfskdj fjksdfh ksdjf sjdfhk fjsf df sdjkfsd fjksd f
                    hjkshfkjshfjkshfjkhksd
                    <br /><br /> 
                    <a href="#"> Have a look </a>
                    </p>
                </div>

                <div>
                <h2> OPEN-CV </h2>
                    <p>hdjkahksjdhkjad ajkhd ahsdkjad ashdjkahskdj  dhjkahd asdjhakjdh sdhkasj
                    jfsdjkfsdjkf sdjfsdkj fsjfskdj fjksdfh ksdjf sjdfhk fjsf df sdjkfsd fjksd f
                    hjkshfkjshfjkshfjkhksd
                    <br /><br /> 
                    <a href="#"> Have a look </a>
                    </p>
                </div>
              
            </div>
          </div>
        
      </div>
     </div>
  )
}

export default CTA
