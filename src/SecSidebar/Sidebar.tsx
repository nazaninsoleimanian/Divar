import React, { useContext } from 'react';
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';
import preLoad from '../data/preLoadData';
import Typography from '@material-ui/core/Typography';

import SidebarTopLevel from './SidebarTopLevel';
import { List } from '@material-ui/core';
import SidebarGoBack from './SidebarGoBack';
import { Switch, Route, useRouteMatch } from 'react-router-dom';
import { DivarContext } from '../data/DivarContext';
import SidebarMiddleLevel from './SidebarMiddleLevel';
import SidebarThirdLevel from './SidebarThirdLevel';
const Sidebar: React.FunctionComponent = () => {
    const classes = useStyles();
    const { children } = preLoad.search.rootCat;
    const { state } = useContext(DivarContext);

    const match = useRouteMatch<{ category: string }>();
    console.log(match);
    console.log(!match.params.category);

    return (
        <>
            <Box className={classes.sidebarContainer}>
                <Box component="aside" className={classes.sidebarFilterBox}>
                    <Typography component="h2" className={classes.sidebarHeading}>
                        دسته‌بندی‌ها
                    </Typography>
                    {match.params.category && <SidebarGoBack />}

                    <List disablePadding className={classes.sidebarTopLevel}>
                        {!match.params.category &&
                            children.map((category) => {
                                return (
                                    <SidebarTopLevel
                                        category={category}
                                        key={category.id}
                                    />
                                );
                            })}
                        <Switch>
                            {console.log('cat', match.params.category)}
                            {console.log('children', children)}
                            {children.map((category) => {
                                if (match?.params.category === category.slug) {
                                    return (
                                        <>
                                            <SidebarTopLevel
                                                category={category}
                                                key={category.id}
                                            />
                                            {category.children.map((item) => (
                                                <SidebarMiddleLevel
                                                    middleCategoty={item}
                                                />
                                            ))}
                                            {/* <Route
                                                path={`/s/${state.city}/${category.slug}`}
                                                component={SidebarMiddleLevel}
                                            ></Route> */}
                                        </>
                                    );
                                } else if (
                                    !!category.children.find(
                                        (child) => child.slug === match?.params.category,
                                    )
                                ) {
                                    return (
                                        <>
                                            <SidebarTopLevel
                                                category={category}
                                                key={category.id}
                                            />
                                            {category.children.map((item) => {
                                                if (item.slug === match?.params.category)
                                                    return (
                                                        <>
                                                            <SidebarMiddleLevel
                                                                middleCategoty={item}
                                                            />
                                                            {item.children.map((item) => {
                                                                if (
                                                                    item.slug ===
                                                                    match?.params.category
                                                                )
                                                                    return (
                                                                        <SidebarThirdLevel
                                                                            thirdLevelCategoty={
                                                                                item
                                                                            }
                                                                        />
                                                                    );
                                                            })}
                                                        </>
                                                    );
                                            })}
                                        </>
                                    );
                                }
                            })}
                        </Switch>
                    </List>
                </Box>
            </Box>
        </>
    );
};

const useStyles = makeStyles({
    sidebarContainer: {
        width: '280px',
        minHeight: '15rem',
        // position: 'absolute',
        marginBottom: '21.875rem',
    },
    sidebarFilterBox: {
        display: 'flex',
        flexDirection: 'column',
        padding: '1.5rem',
    },
    sidebarHeading: {
        fontFamily: 'Vazir',
        fontSize: '1.5rem',
        fontWeight: 400,
        lineHeight: 2,
    },
    sidebarTopLevel: {
        display: 'flex',
        flexDirection: 'column',
    },
});
export default Sidebar;
