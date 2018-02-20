import React, { Component } from 'react';

export default class ResultList extends Component {
    render() {
        const images = this.props.images;
        return (
            <div className="">
                {
                    images.map((image) => {
                        return (
                            <div key={image.id}>
                                <img
                                    src={image.urls.small}
                                    alt=""
                                />
                            </div>
                        );
                    })
                }
            </div>
        );
    }
}

// import React, { Component } from 'react';

// const ResultList = (images) => {

//     return (
//         <div className="">
//             {
//                 [...images].map((image) => {
//                     return (
//                         <div key={image.id}>
//                             <img
//                                 src={image.urls.small}
//                                 alt=""
//                             />
//                         </div>
//                     );
//                 })
//             }
//         </div>
//     );
// };

// export default ResultList;
