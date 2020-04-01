import Precipitation from './components/Precipitation';
import PrecipitationMenuBar from './components/PrecipitationMenuBar';
import PrecipitationDrawerItems from './components/PrecipitationDrawerItems';
import PrecipitationWidget from './components/PrecipitationWidget';

export default {
  name: 'precipitation',
  drawer: PrecipitationDrawerItems,
  widget: PrecipitationWidget,
  routes: [
    {
      name: 'precipitation',
      path: '/precipitation',
      components: {
        default: Precipitation,
        menubar: PrecipitationMenuBar,
      },
    },
  ],
};
