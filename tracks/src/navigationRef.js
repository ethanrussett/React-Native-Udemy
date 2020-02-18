import { NavigationActions } from 'react-navigation'

let navigator // let allows us to reasign this variable in the future

export const setNavigator = (nav) => {
    navigator = nav;
}

export const navigate = (routeName, params) => {

    navigator.dispatch(
        NavigationActions.navigate({
            routeName: routeName,
            params: params
        })
    )
}