import React from 'react';
import './Blog.css'
import  nosql from '../../images/nosql.jpg'
import nodejs from'../../images/nodejs.jpg'
import jwt from '../../images/jwt.png'
import PageTitle from '../Shared/PageTitle/PageTitle';

const Blog = () => {
    return (
        <div>
            
            <PageTitle title="blog"></PageTitle>
            <div  className='dash-header'>
            <h2>Daily Treeding blog</h2>
            <p>Our daily 50m people read blog and They writes own question and answer </p>
        
            
    </div>
            <div className='blog-cotnianer'>
                <div className='quest-contianer'>
                    <h1>WHAT IS DIFFERENT BETWEEN JAVASCRIPT AND NODEJS</h1>
                    <div>
                        <h5>By: <span className='name-blog'>Alex Harry</span> <span className='date-blog'>Mar 20, 2021</span></h5>
                    </div>
         <img src={nodejs} alt="" />
                </div>
                <h2>Answer: </h2>  <p>Java script is a programming language, Java script can run on any browser, you just need to have a proper browser engine.

We use Java script to perform client side activities in any web application. Such as validation of any attribute (ex: any field of the form), or refreshing the page at different intervals. To perform any dynamic activity without refreshing the page.
Java script can be run on any browser, such as Spider Monkey (Firefox), Java Script Core (safari), and V8 (google Chrome).
The Java script language follows the standard of the Java programming language, while the Java script language may have its own way of writing code, but its base is always inspired by the Java programming language.
                </p>
            </div>
            <div className='blog-cotnianer'>
                <div className='quest-contianer'>
                <h1> What is the purpose of jwt and how does it work</h1>
                    <div>
                        <h5>By: <span className='name-blog'>Aman Datter Wala</span> <span className='date-blog'>Mar 9, 2022</span></h5>
                    </div>
                 <img src={jwt} alt="" />

                </div>
                <h2>Answer: </h2>  
                <p>
               JWT means (JSON WEB TOKEN) .A JSON Web Token (JWT, pronounced "jot") is a token that has some information about the user included. This information is "signed" rather than "encrypted", which means that it can be read by the browser, but not edited. 
                JWT provide mainly security for web applications, but can be used and for storing and exchanging session related information between the client and the server.
JWT consist of several parts, which are decoded and used by the client. They have several benefits over cookies,
                </p>
            </div>
            <div className='blog-cotnianer'>
                <div className='quest-contianer'>
                    <h1> Differences between sql and nosql databases.</h1>
                    <div>
                        <h5>By: <span className='name-blog'>Janker Mahbub</span> <span className='date-blog'>Mar 9, 2022</span></h5>
                    </div>
                 <img src={nosql} alt="" />

                </div>
                <h2>Answer: </h2>  

                <p>
                    <span className="fs-4">SQL:</span> SQL databases have fixed or static or predefined schema	.   SQL databases are not suited for hierarchical data storage. These databases are best suited for complex queries and Vertically Scalable
             
                </p>
                <p>
                    <span className='fs-4'>NSQL:</span>They have dynamic schema. hierarchical data storage.	These databases are best suited for hierarchical data storage.These databases are not so good for complex queries
                    Horizontally scalable

                </p>
            </div>
        </div>
    );
};

export default Blog;