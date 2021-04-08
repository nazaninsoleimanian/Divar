import { Button as MuiButton, ButtonProps, makeStyles, Theme } from '@material-ui/core';
import { FC } from 'react';

export interface IButtonProps {
    customVariant:
        | 'main'
        | 'secondary'
        | 'secondaryGray'
        | 'suggestion'
        | 'location'
        | 'filter'
        | 'containerGray';
}

const color = {
    main: '#a62626',
    white: '#fff',
};

const foreGroundColor = {
    main: color.white,
    secondary: color.main,
    secondaryGray: 'var(--font-clr-secondary)',
    suggestion: color.main,
    location: 'rgba(0,0,0, .45)',
    filter: 'var(--font-clr-secondary)',
    containerGray: 'var(--font-clr-secondary)',
};

const border = {
    main: `none`,
    secondary: `1px solid ${color.main}`,
    secondaryGray: `1px solid var(--font-clr-secondary)`,
    suggestion: `1px solid ${color.main}`,
    location: `none`,
    filter: `none`,
    containerGray: 'none',
};

const minWidth = {
    main: '6rem',
    secondary: '6rem',
    secondaryGray: '12rem',
    suggestion: 'unset',
    location: '6rem',
    filter: '100%',
    containerGray: '4rem',
};

const backgroundColor = {
    main: color.main,
    secondary: color.white,
    secondaryGray: 'none',
    suggestion: color.white,
    location: 'none',
    filter: 'none',
    containerGray: 'var(--bg-clr-hover)',
};

const borderRadius = {
    main: '.4rem',
    secondary: '.4rem',
    secondaryGray: '.4rem',
    suggestion: '2rem',
    location: '.4rem',
    filter: 'none',
    containerGray: '.2rem',
};

const height = {
    main: '2.5rem',
    secondary: '2.5rem',
    secondaryGray: '2.5rem',
    suggestion: '1.75rem',
    location: '2.5rem',
    filter: '2.5rem',
    containerGray: '1rem',
};

const fontSize = {
    main: '1.3rem',
    secondary: '1.3rem',
    secondaryGray: '1.3rem',
    suggestion: '1.2rem',
    location: '1.4rem',
    filter: '1.2rem',
    containerGray: '1.2rem',
};

const padding = {
    main: '2rem',
    secondary: '2rem 4rem',
    secondaryGray: '2rem 4rem',
    suggestion: '1.4rem',
    location: '2rem',
    filter: 0,
    containerGray: '1.4rem 1rem',
};

const fontWeight = {
    main: 'bold',
    secondary: 'bold',
    secondaryGray: 'bold',
    suggestion: 'normal',
    location: '300',
    filter: 'normal',
    containerGray: '600',
};

const hoverBackgroundColor = {
    main: '#be2929',
    secondary: color.main,
    secondaryGray: 'var(--bg-clr-hover)',
    suggestion: color.main,
    location: 'rgba(0,0,0,0.1)',
    filter: color.white,
    containerGray: 'var(--bg-clr-hover)',
};

const hoverForegroundColor = {
    main: color.white,
    secondary: color.white,
    secondaryGray: 'var(--font-clr-primary)',
    suggestion: color.white,
    location: 'var(--font-clr-primary)',
    filter: 'var(--font-clr-primary)',
    containerGray: 'var(--font-clr-secondary)',
};
export const Button: FC<IButtonProps & ButtonProps> = (props) => {
    const useStyleProps: IButtonProps = {
        customVariant: props.customVariant,
    };
    const classes = useStyles(useStyleProps);

    const { customVariant, className: MUIClassName, ...muiProps } = props;

    return (
        <MuiButton
            className={`${classes.button} ${MUIClassName}`}
            {...muiProps}
        ></MuiButton>
    );
};

const useStyles = makeStyles<Theme, IButtonProps>((theme: Theme) => ({
    button: {
        padding: (props) => padding[props.customVariant],
        height: (props) => height[props.customVariant],
        minWidth: (props) => minWidth[props.customVariant],
        backgroundColor: (props) => backgroundColor[props.customVariant],
        border: (props) => border[props.customVariant],
        color: (props) => foreGroundColor[props.customVariant],
        borderRadius: (props) => borderRadius[props.customVariant],
        fontSize: (props) => fontSize[props.customVariant],
        fontWeight: (props) =>
            fontWeight[props.customVariant] as 'bold' | 'normal' | 'bolder',
        fontFamily: 'Vazir',
        boxShadow: 'none',
        transition: 'all 0.2s',

        '&:hover': {
            backgroundColor: (props) => hoverBackgroundColor[props.customVariant],
            color: (props) => hoverForegroundColor[props.customVariant],
            boxShadow: 'none',
        },

        margin: 0,
    },
}));

export default Button;
