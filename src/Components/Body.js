import { AiTwotoneInfoCircle } from 'react-icons/ai';
// import { AiTwotoneInfoCircle } from 'react-icons/ai';

function Body(){
    return(
        <div>
            <div style={{backgroundColor:"#ECE6E1",height:"240px",display:"flex"}}>
                <div style={{width:"40%",marginLeft:"10%",padding:"30px 0"}}>
                    <h1>Header Footer</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam, adipisci!Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam, adipisci! </p>
                   <div style={{fontSize:"24px",margin:"30px 30px",color:"#F0740F"}}><AiTwotoneInfoCircle/>
                    <AiTwotoneInfoCircle/></div> 
                </div>
                <div >
                    <img src="https://static.toiimg.com/photo/59054761.cms"style={{height:"230px",width:"440px",padding:"10px",}} />
                </div>
            </div>
        </div>
    )
}
export default Body