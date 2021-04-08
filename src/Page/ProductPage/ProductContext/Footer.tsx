import {
    Container,
    createStyles,
    IconButton,
    makeStyles,
    Box,
    Divider,
    Link,
} from '@material-ui/core';
import { AppBar, Toolbar, Button } from '@material-ui/core';
import { Link as RouterLink } from 'react-router-dom';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import Logo from '../../../logo/logo.svg';

const Footer = () => {
    const classes = useStyles();
    return (
        <Container maxWidth="md">
            <AppBar position="static" className={classes.appBar}>
                <Box display="flex" alignItems="center">
                    <RouterLink to="/tehran">
                        <img src={Logo} alt="logo" className={classes.logo} />
                    </RouterLink>
                    <Toolbar className={classes.toolbar}>
                        <Box display="flex">
                            <RouterLink to="/about">
                                <Button className={classes.button}>درباره دیوار</Button>
                            </RouterLink>
                            <Divider
                                variant="fullWidth"
                                orientation="vertical"
                                flexItem
                            />
                            <RouterLink to="/support">
                                <Button className={classes.button}>پشتیبانی</Button>
                            </RouterLink>
                            <Divider
                                variant="fullWidth"
                                orientation="vertical"
                                flexItem
                            />

                            <RouterLink to="/blog">
                                <Button className={classes.button}> بلاگ دیوار</Button>
                            </RouterLink>
                        </Box>
                    </Toolbar>
                </Box>
                <Box className={classes.socialMedia}>
                    <Link
                        underline="none"
                        href="https://www.instagram.com/divar.official"
                    >
                        <IconButton className={classes.iconBtn}>
                            <InstagramIcon style={{ fontSize: '.9em' }} />
                        </IconButton>
                    </Link>
                    <Link underline="none" href="https://twitter.com/divar_official">
                        <IconButton className={classes.iconBtn}>
                            <TwitterIcon style={{ fontSize: '.9em' }} />
                        </IconButton>
                    </Link>
                    <Link
                        underline="none"
                        href="https://www.linkedin.com/company/divarofficial"
                    >
                        <IconButton className={classes.iconBtn}>
                            <LinkedInIcon style={{ fontSize: '.9em' }} />
                        </IconButton>
                    </Link>
                </Box>
            </AppBar>
        </Container>
    );
};

const useStyles = makeStyles(() =>
    createStyles({
        appBar: {
            direction: 'rtl',
            display: 'flex',
            alignItems: 'center',
            flexDirection: 'row',
            justifyContent: 'space-between',
            backgroundColor: 'white',
            height: '4rem',
            position: 'relative',
            margin: 0,
            marginTop: '12.8rem',
            boxShadow: 'none',
        },
        iconBtn: {
            transition: 'opacity 0.2s',
            padding: '0px 10px',
            opacity: '0.5',
            '&:hover': {
                backgroundColor: 'white',
                opacity: '0.7',
            },
        },
        button: {
            color: '#999',
            backgroundColor: 'white',
            fontFamily: 'Vazir',
            fontSize: '10px',
            transition: 'color 0.2s',
            '&:hover': {
                backgroundColor: '#fff',
                color: '#666',
                curser: 'pointer',
            },
        },
        toolbar: {
            minHeight: '50px',
            diplay: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-around',
        },
        socialMedia: {
            marginRight: '100px',
        },
        logo: {
            width: '30px',
            height: '30px',
            filter: 'grayscale(90%) opacity(50%)',
            transition: 'filter 0.2s',
            '&:hover': {
                filter: 'grayscale(90%) opacity(70%)',
            },
        },
    }),
);

export default Footer;
