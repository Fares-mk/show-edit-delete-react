import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { addcourse } from "../../services/courses.services";
function create() {
    const [course, setCourse] = useState({
        title: "",
        price: "",
        instructor: "",
        desc: ""
    });
    const navigate = useNavigate();
    const createnewcourse = (event ) =>{
        event.preventDefault();
        if(course.title === "" ||course.price === "" ||
            course.instructor === "" ||course.desc === "" )
            alert("All Inputs Are required")
            else{
                addcourse(course)
                .then(()=>{
                    alert("Course Added Successfully")
                    navigate("/");
                })
            }
    }
    return ( 
        <>  
        <h1 className="bg-dark text-center py-3 shadow  text-white mt-2 fs-5 border w-50 rounded-3 mx-auto">create course</h1>
        <section className="container w-50 mx-auto">
            <form onSubmit={createnewcourse}>
                <div className="form-group my-2">
                    <label htmlFor="" className="fw-bold" >course title</label>
                    <input type="text" className="form-control" id="title"onChange={e=>setCourse({...course,title :e.target.value})}/>
                </div>
                <div className="form-group my-2">
                    <label htmlFor="" className="fw-bold" >course price</label>
                    <input type="number" className="form-control" id="price"onChange={e=>setCourse({...course,price:e.target.value})} />
                </div>
                <div className="form-group my-2">
                    <label htmlFor="" className="fw-bold" >course instructor</label>
                    <input type="text" className="form-control" id="instructor"onChange={e=>setCourse({...course,instructor:e.target.value})} />
                </div>
                <div className="form-group my-2">
                    <label htmlFor="" className="fw-bold">course desc</label>
                    <textarea className="form-control" id="desc"onChange={e=>setCourse({...course,desc:e.target.value})} />
                </div>
                <input type="submit" className="btn btn-dark" value="Add Coures" />
            </form>
        </section>
        </>
    );
}
export default create;