import React, { useState } from 'react';
import {motion} from 'framer-motion';

const Chooser = ({ elegido }) => {
    return <div>{elegido}</div>;
};

const Choosers = ({ chosen }) => {
    return (
        <div >
            {<Chooser elegido={chosen} />}
        </div>
    );
};

export default Choosers;
