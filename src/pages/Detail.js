import React, { useEffect } from 'react';

function Detail(props) {
    const { location, history } = props;

    useEffect(() => {
        if (location.state === undefined) {
            history.push('/');
        }
    }, []);

    return location.state ? <span>{location.state.title}</span> : null;
}

export default Detail;
