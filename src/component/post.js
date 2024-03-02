import React from 'react';
import { data } from '../datapost';
import './post.css'
export default function Post() {
    return (
        <>
            <section className="post">
                <div className="container" >
                    
                        {data.map((course, index) => {
                            return (
                                <>
                                <h1> {course.title} </h1>
                                <div className='auth'>
                                    Author: {course.auth}
                                    <br></br>
                                    Created at: {course.created_at}
                                </div>
                                <did className="content">
                                    {course.content}
                                </did>
                               <hr />
                                
                                </>
                            )
                        })}
                    
                </div>
            </section>
        </>
    )
}