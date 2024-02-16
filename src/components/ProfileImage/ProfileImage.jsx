import './profileImage.scss'
import profilePic from '../../assets/images/profilePic.webp'
import splashImage from '../../assets/images/splash.png'


const ProfileImage = () => {
  return (
    <>
      <div className='myImage'>
        <div className="myImage__container"> 
          <img className='myImage__circle picBg-color' alt="" />
          <img className='myImage__Makiko' src={profilePic} alt="Makiko Yokoyama photo" />
        </div>
        <div className='myImage__background'>
          <img src={splashImage} className='myImage__background__splash' />
        </div>
      </div>

    </>
  )
}

export default ProfileImage