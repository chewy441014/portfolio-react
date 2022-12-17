import React from 'react';
import { useParams } from 'react-router-dom';
import assets from '../assets/assets.json';

// import components
// import SearchCard from '../components/searchcard';

const Project = () => {
    // console.log(props.match.params);
    const { id } = useParams();
    console.log(id)
    switch (id) {
        case '01':
            console.log(id);
            break;
        case '02':
            console.log(id);
            break;
        case '03':
            console.log(id);
            break;
        case '04':
            console.log(id);
            break;
        case '05':
            console.log(id);
            break;
        case '06':
            console.log(id);
            break;
    }
    return (
        <div>
            {/* <SearchCard data={props}/> */}
            <h1>blah</h1>
        </div>
    )
}

export default Project;