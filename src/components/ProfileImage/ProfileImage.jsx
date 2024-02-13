 import './profileImage.scss'
 import profilePic from '../../assets/images/profilePic.webp'
 import bgPic from "../../assets/images/bg-pattern.webp"


const ProfileImage = () => {
  return (
    <div className='myImage'>
        <div className="myImage__container">
            <img className='myImage__circle picBgColor' alt="" />
            <img className='myImage__Makiko' src={profilePic} alt="Makiko Yokoyama photo" />
        </div>

    </div>
  )
}

export default ProfileImage