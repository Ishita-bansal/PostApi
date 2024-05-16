import React,{useState,useEffect} from "react";
import { useFormik } from "formik";

const initialValues = {
    userId:'',
    title:"",
    body:""
}
function Postapi(){
  

 const [data, setData] = useState();
    useEffect(()=>{
        fetch("https://jsonplaceholder.typicode.com/posts").then((result)=>{
            result.json().then((result)=>{
                setData(result);
            })
        }) 
    },[])


  const onSubmit = () =>{
    fetch("https://jsonplaceholder.typicode.com/posts", {
     method:"POST",
     headers:{
        'Accept':'application/json',
        'Content-Type':'application/json'
     },
     body:JSON.stringify(values)
    }).then((result) => {
        console.log("result",result);
        return result.json(); 
    }).then((res) => {
        console.log("response",res);
    })
  }

  const handleRemove = (id) =>{
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`,{
        method:"DELETE"
    }).then(() => {
        setData(data.filter((item) => item.id !== id));
      })
      .catch((error) => {
        console.error("Error removing item:", error);
      });
}

  const formik = useFormik({
    initialValues:initialValues,
    onSubmit:onSubmit,
    
  });
   
  const {values,setFieldValue,handleSubmit} = formik;
    return(
        <>
     <div>
        <form onSubmit={handleSubmit}>
             <div>
              <input  placeholder="userId" value={values.userId}  />
            </div>
             <div>
               <input  placeholder="title" value={values.title}  onChange={(e)=>setFieldValue("title",e.target.value)} />
             </div>
             <div>
                <input  placeholder="body"  value={values.body}   onChange={(e)=>setFieldValue("body",e.target.value)}  />
             </div>
            <button type="submit">Submit</button>
        </form>
    </div>

    <div>

        <table border="1">
             <tr>
                <td>User Id:-</td>
                <td>Title:-</td>
                <td>Body:-</td>
             </tr>
             {
             data?.map((user)=>{
                return(
                    <>
                <tr>
                    <td>{user.userId}</td>
                    <td>{user.title}</td>
                    <td>{user.body}</td>
                    <button onClick={()=>handleRemove(user.id)} style={{border:"1px solid"}}>Remove</button>
                </tr>
                    </>
                )
             })    
             } 
              
        </table>
    </div>
        </>
    )
}

export default  Postapi;