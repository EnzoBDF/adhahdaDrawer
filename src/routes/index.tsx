import { NavigationContainer } from '@react-navigation/native';
import 'react-native-gesture-handler';

import { DrawerRoutes } from './drawer.routes';

export function Routes(){
    return(
    <NavigationContainer>
        <DrawerRoutes/>
    </NavigationContainer>
    )
}