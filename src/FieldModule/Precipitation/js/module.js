import Precipitation from './components/Precipitation';
import PrecipitationMenuBar from './components/PrecipitationMenuBar';
import PrecipitationWidget from './components/PrecipitationWidget';

export default {
  name: 'precipitation',
  label: 'Precipitation',
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
