import React,{useState} from 'react';


const AddTodo = ({addTodo}) => {
    const [title,setTitle] = useState("");
    const[desc,setDesc] = useState("");

    const submit = (e)=>{
        e.preventDefault(); //ensures no page reloading
        if(!title||!desc)
            alert("Title or description can't be blank");
        else
        {
            addTodo(title,desc);
            setTitle("");
            setDesc("");
        }
    }


    return <div className='container my-3'>
        <form onSubmit={submit}>
            <div className="mb-3 mt-5">
                <label htmlFor="title" className="form-label">Title</label>
                <input type="text" value={title} onChange={(e)=>setTitle(e.target.value)} className="form-control" id="title"/>
            </div>
            <div className="mb-3">
                <label htmlFor="desc" className="form-label">Description</label>
                <input type="text" value={desc} onChange={(e)=>setDesc(e.target.value)} className="form-control" id="desc"/>
            </div>
        
            <button type="submit" className="btn  btn-success  mt-3  ">Add</button>

        </form>
    </div>;
}



export default AddTodo;