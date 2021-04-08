import { Box, createStyles, Theme, Divider } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core';
import ShareIcon from '@material-ui/icons/Share';
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';
import { IconButton } from '@material-ui/core';
import { useProductContext } from './ProductContext/ProductProvider';
import Button from '../../components/Button';

const Description = () => {
    const classes = useStyles();
    const { pageData } = useProductContext();
    const { title, description } =
        'data' in pageData ? pageData.data.share : { title: null, description: null };
    console.log(
        'imageUrl',
        //@ts-ignore
        pageData,
    );

    return (
        <>
            <Box className={classes.description}>
                <Typography variant="h1" className={classes.descriptionHeader}>
                    {title}
                </Typography>
                <Typography variant="h5" className={classes.descriptionHelper}>
                    {'widgets' in pageData && pageData.widgets.header.subtitle}
                </Typography>
                <Box className={classes.descriptionBtnContainer}>
                    <Box>
                        <Button customVariant="main" className={classes.ButtonsMargin}>
                            اطلاعات تماس
                        </Button>
                        <Button
                            customVariant="secondaryGray"
                            className={classes.ButtonsMargin}
                        >
                            چت
                        </Button>
                    </Box>
                    <Box className={classes.socialMedia}>
                        <IconButton>
                            <BookmarkBorderIcon style={{ fontSize: '2rem' }} />
                        </IconButton>
                        <IconButton>
                            <ShareIcon style={{ fontSize: '2rem' }} />
                        </IconButton>
                    </Box>
                </Box>
                <Box width="95%" my={3}>
                    {'widgets' in pageData &&
                        pageData.widgets.list_data.map((data) => (
                            <>
                                <Box display="flex" justifyContent="space-between" p={1}>
                                    <Typography className={classes.listDataTitle}>
                                        {data.title}
                                    </Typography>
                                    <Typography className={classes.listDataValue}>
                                        {data.value}
                                    </Typography>
                                </Box>
                                <Divider variant="fullWidth" />
                            </>
                        ))}
                </Box>
                <Typography variant="h6" className={classes.totalDescriptionTitle}>
                    توضیحات
                </Typography>
                <Typography className={classes.totalDescriptionSubtitle}>
                    {description}
                </Typography>
                {'widgets' in pageData && (
                    <Box my={2}>
                        {pageData.widgets.links.map((link) => (
                            <Button
                                customVariant="containerGray"
                                className={classes.ButtonsMargin}
                            >
                                {link.title}
                            </Button>
                        ))}
                    </Box>
                )}
            </Box>
        </>
    );
};

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        description: {
            width: '100%',
            textAlign: 'right',
        },
        descriptionHeader: {
            fontFamily: 'Vazir',
            fontSize: '2.2rem',
            color: 'var(--font-clr-primary)',
            fontWeight: 'bold',
        },
        descriptionHelper: {
            margin: '8px 0 16px',
            color: 'var(--font-clr-secondary)',
            lineHeight: 2,
            fontFamily: 'Vazir',
            fontSize: '1.6rem',
        },
        descriptionBtnContainer: {
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
        },
        ButtonsMargin: {
            margin: '.5rem',
        },
        socialMedia: {
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-around',
        },
        listDataTitle: {
            fontFamily: 'Vazir',
            fontSize: '1.6rem',
            color: 'var(--font-clr-secondary)',
        },
        listDataValue: {
            fontFamily: 'Vazir',
            fontSize: '1.6rem',
        },
        totalDescriptionTitle: {
            fontFamily: 'Vazir',
            fontWeight: 'bold',
            fontSize: '1.6rem',
            marginBottom: '2rem',
        },
        totalDescriptionSubtitle: {
            fontFamily: 'Vazir',
            fontSize: '1.3rem',
            color: 'var(--font-clr-secondary)',
            lineHeight: 2,
        },
    }),
);

export default Description;
