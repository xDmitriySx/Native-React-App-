import { createStackNavigator } from 'react-navigation'
import GalleryPageContainer from '../containers/GalleryPageContainer'
import PhotoDetailsComponent from '../components/PhotoDetailsComponent'
import {
    GALLERY_PAGE,
    PHOTO_DETAILS
} from './routes_navigation'



const RootStack = createStackNavigator(
    {
        [GALLERY_PAGE]: GalleryPageContainer,
        [PHOTO_DETAILS]: PhotoDetailsComponent
     },
     {
         headerMode: 'none'
     }
)


export default RootStack


