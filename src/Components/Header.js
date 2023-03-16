import { BsFacebook } from 'react-icons/bs';
import { BsTwitter } from 'react-icons/bs';
import { BsInstagram } from 'react-icons/bs';


function Header(){
    return(
       <div>
        <div style={{display:"flex",justifyContent:"space-around",backgroundColor:"#CAE5F5",height:"50px",alignItems:"center"}}>
            <div style={{marginLeft:"-40PX",color:"#62727B"}}><h1>LOGO</h1></div>
            <div style={{display:"flex",justifyContent:"space-between",width:"20%",color:"#62727B",cursor:"pointer"}}>
                <a>Home </a>
                <a>About as</a>
                <a>Contact</a>
            </div>
            <div style={{display:"flex",justifyContent:"space-between",width:"16%",marginRight:"-16PX",fontSize:"20px",color:"#62727B",cursor:"pointer"}}>
                <BsFacebook/>
                <BsTwitter/>
                <BsInstagram/>

            </div>
        </div>
       </div>

    )
}
export default Header