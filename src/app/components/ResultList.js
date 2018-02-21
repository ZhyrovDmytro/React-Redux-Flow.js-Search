import React, { Component } from 'react';

export default class ResultList extends Component {
    render() {
        const images = this.props.images;
        return (
            <div className="results">
                {
                    images.map((image) => {
                        return (
                            <figure
                                key={image.id}
                            >
                                <picture
                                    className="results__item"
                                >
                                    <img
                                        className="results__image"
                                        src={image.urls.small}
                                        alt=""
                                    />
                                </picture>
                            </figure>
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
//                                 className="results__image"
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
