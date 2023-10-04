import React from 'react';
import Header from '../shared/Header/Header';
import RightSideNav from '../shared/RightSideNav/RightSideNav';
import { useParams } from 'react-router-dom';

const News = () => {
    const {_id} = useParams();
    return (
        <div>
            <Header></Header>
          
            <div className="grid md:grid-cols-4 gap-3">
             <div className="col-span-3">
             <h3>News Detail</h3>
             <p>{_id}</p>
             </div>
             <div>
                <RightSideNav></RightSideNav>
             </div>
            </div>
        </div>
    );
};

export default News;