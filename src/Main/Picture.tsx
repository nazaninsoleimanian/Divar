import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';

const Picture: React.FunctionComponent<{ img: string }> = ({ img }) => {
    const classes = useStyles();

    return (
        <Box component="picture" className={classes.postCardPicture}>
            <source srcSet="" />
            {img && <img src={img} className={classes.postCardImg} alt="" />}
        </Box>
    );
};
const useStyles = makeStyles({
    postCardPicture: {
        width: '100%',
        borderRadius: '0.4rem',
    },
    postCardImg: {
        display: 'block',
        position: 'absolute',
        width: '100%',
        height: '100%',
        top: 0,
        left: 0,
        objectFit: 'cover',
    },
});

export default Picture;
