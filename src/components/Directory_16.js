import React from 'react';
import './Directory_16.scss';
import MenuItem__16 from './MenuItem_16';

const Directory_16 = () => {
    return (
        <div className="directory-menu">
            <div>
                <MenuItem__16 name='HATS' remoteUrl='https://i.ibb.co/cvpntL1/hats.png' size='' />
                <MenuItem__16 name='JACKETS' remoteUrl='https://i.ibb.co/px2tCc3/jackets.png' size='' />
                <MenuItem__16 name='SNEAKERS' remoteUrl='https://i.ibb.co/0jqHpnp/sneakers.png' size='' />
                <MenuItem__16 name='WOMENS' remoteUrl='https://i.ibb.co/GCCdy8t/womens.png' size='' />
                <MenuItem__16 name='MENS' remoteUrl='https://i.ibb.co/R70vBrQ/men.png' size='' />
            </div>
        </div>
    );
};

export default Directory_16;