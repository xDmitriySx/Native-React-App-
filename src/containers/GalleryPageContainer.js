import { connect } from 'react-redux';
import * as galleryActions from '../actions/gallery_action'
import { bindActionCreators } from 'redux';
import GalleryPageComponent from '../components/GalleryPageComponent';



const mapStateToProps = ({gallery_reducer }) => ({
   loadIsReady: gallery_reducer.loadIsReady,
   gallery_reducer: gallery_reducer.gallery_reducer_items,
});

  const mapDispatchToProps = dispatch => ({
     ...bindActionCreators(galleryActions, dispatch)
  })
  
  export default connect(mapStateToProps, mapDispatchToProps)(GalleryPageComponent);