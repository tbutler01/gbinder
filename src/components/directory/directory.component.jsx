import React from 'react';

import MenuItem from '../menu-item/menu-item.component';

import './directory.styles.scss';

class Directory extends React.Component {
    constructor() {
        super();

        this.state = {
            sections: [
                {
                    id: 0,
                    title: 'ballad',
                    imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/61Z-qRw050L._AC_SX522_.jpg'
                },
                {
                    id: 1,
                    title: 'swing',
                    imageUrl: 'https://cdn2.jazztimes.com/2011/12/OscarPeterson_HPF.jpg'
                },
                {
                    id: 2,
                    title: 'latin',
                    imageUrl: 'https://vmp-www.imgix.net/images/album_9.original.jpg?auto=format&w=1660&h=1660'
                },
                {
                    id: 3,
                    title: 'blues',
                    size: 'large',
                    imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/51dEb2ab%2BAL.__AC_SX300_SY300_QL70_ML2_.jpg'
                },
                {
                    id: 4,
                    title: 'funk',
                    size: 'large',
                    imageUrl: 'https://media.pitchfork.com/photos/5e84ffabc2ed2400096ee289/2:1/w_1000/Head%20Hunters_Herbie%20Hancock.jpg'
                },
            ]
        };
    }

    render() {
        return (
            <div className='directory-menu'>
                {
                    this.state.sections.map(({ id, title, imageUrl, size }) => (
                        <MenuItem key={id} title={title} imageUrl={imageUrl} size={size} />
                    ))
                }
            </div>
        );
    }
}

export default Directory;