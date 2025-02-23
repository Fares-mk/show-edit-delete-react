import { useEffect, useState } from "react";
import { deletecourse, getcourses } from "../../services/courses.services";
import { Link } from "react-router-dom";
function Home() {
    const[courses,setcourses]=useState([])
    useEffect(()=>{
        getcourses()
        .then(res=>setcourses(res.data))
    },[])
    const deletecourses=(id)=>{
        deletecourse(id)
        .then(()=>{
            alert("course deleted")
        })
    }
    return (
        <>
        <h1 className="bg-dark text-center py-3 text-white mt-2 fs-5 shadow border w-50 rounded-3 mx-auto">Home</h1>
        <section className="container my-5 text-center">
            <table className="table  table-bordered table-hover  ">
            <thead>
                <tr>
                    <td>id</td>
                    <td>title</td>
                    <td>price</td>
                    <td>instructor</td>
                    <td>desc</td>
                    <td>Active</td>
                </tr>
            </thead>
            {
            courses.length>0&&
                <tbody>
                    {
                    courses.map(course=>(
                        <tr key={course.id}>
                            <td>{course.id}</td>
                            <td>{course.title}</td>
                            <td>{course.price}</td>
                            <td>{course.instructor}</td>
                            <td>{course.desc}</td>
                            <td>
                                <Link to={`/${course.id}`} className="btn btn-sm link-hover mx-1  btn-info  rounded-3">Show</Link>
                                <Link to={`/edit/${course.id}`} className="btn btn-sm link-hover mx-1  btn-success rounded-3">Edit</Link>
                                <button onClick={()=>deletecourses(course.id)} className="btn btn-sm link-hover mx-1 btn-danger  rounded-3">Delete</button>
                            </td>
                        </tr>
                    ))
                    }
                </tbody>
            }
            </table>

        </section>
        </>
    );
    }

export default Home;
