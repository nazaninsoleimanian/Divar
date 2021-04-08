import { Box, makeStyles, Theme, Typography } from '@material-ui/core';
import { useDivarContext } from '../../data/DivarContext';
import { DivarReducerActionTypes } from '../../data/divarReducer';
import Button from '../Button';
import { Link } from 'react-router-dom';
import preLoad from '../../data/preLoadData';

export interface ICityBoxProps {
    title: string;
    cities: any[][]; //template: [[id,cityInPersian, cityInEnglish]]
}

const CityBox: React.FunctionComponent<ICityBoxProps> = ({ cities, title }) => {
    const classes = useStyles();
    const { state, dispatch } = useDivarContext();

    const changeCity = (id: number) => {
        const item = preLoad.city.compressedData
            .find((city) => city[0] === id)
            ?.slice(0, 3);
        //@ts-ignore
        dispatch({
            type: DivarReducerActionTypes.ChangeCity,
            payload: {
                city: item,
            },
        });
    };
    return (
        <Box display="flex" flexGrow="1" flexDirection="column">
            <Typography variant="h4" className={classes.title}>
                {title}
            </Typography>
            <Box
                display="grid"
                gridAutoColumns="auto"
                width="100%"
                className={classes.container}
            >
                {cities.map((item, index) => {
                    return (
                        <Box
                            className={classes.item}
                            key={'city' + item[0]}
                            onClick={() => changeCity(item[0])}
                        >
                            <Link to={`/s/${item[2]}`} className={classes.button}>
                                <Button
                                    className={classes.button}
                                    key={index}
                                    customVariant={
                                        state.city[2] === item[2] ? 'main' : 'secondary'
                                    }
                                >
                                    {item[1]}
                                </Button>
                            </Link>
                        </Box>
                    );
                })}
            </Box>
        </Box>
    );
};

//styles

const useStyles = makeStyles((theme: Theme) => ({
    title: {
        padding: theme.spacing(2),
    },
    button: {
        width: '100%',
        maxWidth: '400px',
    },
    item: {
        padding: theme.spacing(2),
    },
    container: {
        [theme.breakpoints.up('sm')]: {
            gridTemplateColumns: 'repeat(5, 1fr)',
        },
        [theme.breakpoints.down('sm')]: {
            gridTemplateColumns: 'repeat(3, 1fr)',
        },
        [theme.breakpoints.down('xs')]: {
            gridTemplateColumns: 'repeat(2, 1fr)',
        },
    },
}));

export default CityBox;
