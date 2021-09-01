
import { useEffect, useState } from 'react';

function Message({ size, featherCount }) {
    const [message, setMessage] = useState('');
    const [sizeClass, setSizeClass] = useState('');

    useEffect(() => {
        if (featherCount <= 0)
            setMessage('Oh my! Your bird is naked!');
        else if (featherCount >= 10) {
            setMessage('Full turkey!');
        } else {
            setMessage('Coming along...');
        }
    }, [featherCount])

    useEffect(() => {
        console.log('PictureDisplay size', size);
        let cname = ''
        // if what you click on is the case, then the cname is going to be set to medium
        switch (size) {
            case 'm':
                cname = 'medium';
                break;
            case 'l':
                cname = 'large';
                break;
            case 'xl':
                cname = 'xlarge';
                break;
            default:
                cname = 'small';
                break;
        }
        console.log(cname);
        // does not want to mutate the state, setSizeClass = cname
        setSizeClass(cname);
    }, [size])

    return (
        <div className={`message ${sizeClass}`}>
            (Oh my! Your bird is naked!)
        </div>
    );
};

export default Message;

