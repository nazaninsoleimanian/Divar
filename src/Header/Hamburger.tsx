import React, { useState } from 'react';
// React-icons
import { GoThreeBars } from 'react-icons/go';

//Components
import MenuHeader from '../Header/MenuHeader';

//Material Components
import Box from '@material-ui/core/Box';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import { makeStyles } from '@material-ui/core/styles';

const Hamburger: React.FunctionComponent = () => {
    const classes = useStyles();

    const [isShown, setIsShown] = useState(false);

    const showMenu = () => {
        setIsShown(!isShown);
    };

    const handleClickAway = () => {
        setIsShown(false);
    };

    return (
        <ClickAwayListener onClickAway={handleClickAway}>
            <Box component="div" onClick={showMenu} className={classes.boxBar}>
                <GoThreeBars className={classes.bars} />
                {isShown && (
                    <Box position="absolute" top="4.5rem" left="1.2rem">
                        <MenuHeader menuLocation="bars" />
                    </Box>
                )}
            </Box>
        </ClickAwayListener>
    );
};

const useStyles = makeStyles({
    boxBar: {
        cursor: 'pointer',
    },
    bars: {
        color: ' var(--font-clr-secondary)',
        fontSize: '1.6rem',
        marginRight: '2rem',
    },
});

export default Hamburger;
