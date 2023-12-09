import './main.scss';
import profile from '../../assets/images/ProfilePic.png'

const Main = () => {
  return (
    <div className='main'>
     <div className='main__contentWrapper'>
     <section className='main__content'>
      <h2>Makiko Yokoyama</h2>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis eum beatae itaque doloribus nisi, sunt temporibus praesentium sapiente similique deleniti porro, hic, quae quod voluptates quidem aliquam possimus? Ea, provident.</p>
    </section>
    <section className='main__profilePic'>
    <div className='profile-imgBg'></div>
     <img src={profile} className='profile-img'/>
   
     </section>
    
   
     </div>
     
     </div>
  )
}

export default Main