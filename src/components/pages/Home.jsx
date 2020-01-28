import React from 'react';
import { Row, Col } from 'antd';
import { useHistory } from 'react-router-dom';
import ImageMapper from 'react-image-mapper';
import useWindowWidth from '../../customHooks/useWindowWidth';
import HH66_MOBILE from '../../assets/boatViews/xxs.png';
import HH66_MOBILE_LARGE from '../../assets/boatViews/xs.png';
// import HH66_SM from '../../assets/images/sm.png'
import HH66_LG from '../../assets/boatViews/lg.png';
import HH66_XL from '../../assets/boatViews/xl.png';
import HH66_XXL from '../../assets/boatViews/xxl.png';
import HH66_1X from '../../assets/boatViews/1x.png';

const HH66_MOBILE_MAP = {
  name: 'hh66-map-mobile',
  areas: [
    {
      shape: 'rect', coords: [238, 369, 312, 573], name: '/cabins/stbdGuest', displayName: 'Stbd Guest Cabin',
    },
    {
      shape: 'rect', coords: [8, 351, 79, 573], name: 'cabins/owners', displayName: 'Owners Cabin',
    },
    {
      shape: 'rect', coords: [8, 177, 80, 351], name: 'cabins/portGuest', displayName: 'Port Guest Cabin',
    },
    {
      shape: 'rect', coords: [236, 180, 310, 369], name: 'cabins/crew', displayName: 'Crew Cabin',
    },
    {
      shape: 'rect', coords: [80, 285, 154, 473], name: 'saloon', displayName: 'Saloon',
    },
    {
      shape: 'rect', coords: [157, 285, 237, 473], name: 'navAndGalley', displayName: 'Galley & Nav Station',
    },
  ],
};

const HH66_MOBILE_LARGE_MAP = {
  name: 'hh66-map-mobile-large',
  areas: [
    {
      shape: 'rect', coords: [267, 416, 355, 647], name: '/cabins/stbdGuest', displayName: 'Stbd Guest Cabin',
    },
    {
      shape: 'rect', coords: [3, 394, 90, 649], name: 'cabins/owners', displayName: 'Owners Cabin',
    },
    {
      shape: 'rect', coords: [4, 202, 91, 395], name: 'cabins/portGuest', displayName: 'Port Guest Cabin',
    },
    {
      shape: 'rect', coords: [267, 200, 355, 416], name: 'cabins/crew', displayName: 'Crew Cabin',
    },
    {
      shape: 'rect', coords: [92, 321, 179, 533], name: 'saloon', displayName: 'Saloon',
    },
    {
      shape: 'rect', coords: [180, 321, 267, 533], name: 'navAndGalley', displayName: 'Galley & Nav Station',
    },
  ],
};

// const HH66_SM_MAP = {
//   name: 'hh66-map-sm',
//   areas: [
//     {
//       shape: 'rect', coords: [133, 286, 376, 377], name: '/cabins/stbdGuest', displayName: 'Stbd Guest Cabin',
//     },
//     {
//       shape: 'rect', coords: [132, 8, 400, 98], name: 'cabins/owners', displayName: 'Owners Cabin',
//     },
//     {
//       shape: 'rect', coords: [400, 8, 605, 98], name: 'cabins/portGuest', displayName: 'Port Guest Cabin',
//     },
//     {
//       shape: 'rect', coords: [376, 287, 605, 373], name: 'cabins/crew', displayName: 'Crew Cabin',
//     },
//     {
//       shape: 'rect', coords: [257, 97, 477, 187], name: 'saloon', displayName: 'Saloon',
//     },
//     {
//       shape: 'rect', coords: [257, 187, 474, 285], name: 'navAndGalley', displayName: 'Galley & Nav Station',
//     },
//   ],
// };

const HH66_LG_MAP = {
  name: 'hh66-map-lg',
  areas: [
    {
      shape: 'rect', coords: [134, 294, 343, 389], name: '/cabins/stbdGuest', displayName: 'Stbd Guest Cabin',
    },
    {
      shape: 'rect', coords: [134, 9, 410, 96], name: 'cabins/owners', displayName: 'Owners Cabin',
    },
    {
      shape: 'rect', coords: [409, 14, 619, 100], name: 'cabins/portGuest', displayName: 'Port Guest Cabin',
    },
    {
      shape: 'rect', coords: [344, 293, 621, 385], name: 'cabins/crew', displayName: 'Crew Cabin',
    },
    {
      shape: 'rect', coords: [259, 97, 486, 196], name: 'saloon', displayName: 'Saloon',
    },
    {
      shape: 'rect', coords: [259, 199, 488, 293], name: 'navAndGalley', displayName: 'Galley & Nav Station',
    },
  ],
};

const HH66_XL_MAP = {
  name: 'hh66-map-xl',
  areas: [
    {
      shape: 'rect', coords: [152, 331, 441, 442], name: '/cabins/stbdGuest', displayName: 'Stbd Guest Cabin',
    },
    {
      shape: 'rect', coords: [153, 9, 467, 113], name: 'cabins/owners', displayName: 'Owners Cabin',
    },
    {
      shape: 'rect', coords: [467, 8, 709, 112], name: 'cabins/portGuest', displayName: 'Port Guest Cabin',
    },
    {
      shape: 'rect', coords: [441, 332, 710, 439], name: 'cabins/crew', displayName: 'Crew Cabin',
    },
    {
      shape: 'rect', coords: [294, 115, 555, 215], name: 'saloon', displayName: 'Saloon',
    },
    {
      shape: 'rect', coords: [294, 217, 555, 330], name: 'navAndGalley', displayName: 'Galley & Nav Station',
    },
  ],
};

const HH66_XXL_MAP = {
  name: 'hh66-map-xxl',
  areas: [
    {
      shape: 'rect', coords: [171, 377, 494, 493], name: '/cabins/stbdGuest', displayName: 'Stbd Guest Cabin',
    },
    {
      shape: 'rect', coords: [171, 11, 527, 124], name: 'cabins/owners', displayName: 'Owners Cabin',
    },
    {
      shape: 'rect', coords: [529, 12, 799, 125], name: 'cabins/portGuest', displayName: 'Port Guest Cabin',
    },
    {
      shape: 'rect', coords: [496, 378, 797, 492], name: 'cabins/crew', displayName: 'Crew Cabin',
    },
    {
      shape: 'rect', coords: [338, 128, 620, 257], name: 'saloon', displayName: 'Saloon',
    },
    {
      shape: 'rect', coords: [339, 258, 621, 372], name: 'navAndGalley', displayName: 'Galley & Nav Station',
    },
  ],
};

const HH66_1X_MAP = {
  name: 'hh66-map-1x',
  areas: [
    {
      shape: 'rect', coords: [583, 16, 884, 144], name: '/cabins/portGuest', displayName: 'Port Guest Cabin',
    },
    {
      shape: 'rect', coords: [191, 14, 584, 142], name: 'cabins/owners', displayName: 'Owners Cabin',
    },
    {
      shape: 'rect', coords: [191, 417, 549, 545], name: 'cabins/stbdGuest', displayName: 'Stbd Guest Cabin',
    },
    {
      shape: 'rect', coords: [551, 418, 886, 540], name: 'cabins/crew', displayName: 'Crew Cabin',
    },
    {
      shape: 'rect', coords: [366, 142, 693, 277], name: 'saloon', displayName: 'Saloon',
    },
    {
      shape: 'rect', coords: [370, 278, 697, 419], name: 'navAndGalley', displayName: 'Galley & Nav Station',
    },
  ],
};

const Home = () => {
  const width = useWindowWidth();
  const history = useHistory();

  const linkToLocation = (area) => {
    history.push(`${area.name}`);
  };

  window.oncontextmenu = function (event) {
    event.preventDefault();
    event.stopPropagation();
    return false;
  };

  const renderMap = () => {
    if (width > 1198) {
      return (
        <Col span={24} className="location-view">
          <ImageMapper
            src={HH66_1X}
            map={HH66_1X_MAP}
            onClick={linkToLocation}
            fillColor="rgba(255, 255, 255, 0.5)"
            style={{ marginTop: '50%' }}
            autofocus
            oncontextmenu={false}
          />
        </Col>
      );
    } if (width > 1078) {
      return (
        <Col span={24} className="location-view">
          <ImageMapper
            src={HH66_XXL}
            map={HH66_XXL_MAP}
            onClick={linkToLocation}
            fillColor="rgba(255, 255, 255, 0.5)"
            style={{ marginTop: '50%' }}
            autofocus
            oncontextmenu={false}
          />
        </Col>
      );
    } if (width > 958) {
      return (
        <Col span={24} className="location-view">
          <ImageMapper
            src={HH66_XL}
            map={HH66_XL_MAP}
            onClick={linkToLocation}
            fillColor="rgba(255, 255, 255, 0.5)"
            style={{ marginTop: '100px' }}
            autofocus
            oncontextmenu={false}
          />
        </Col>
      );
    } if (width > 818) {
      return (
        <Col span={24} className="location-view">
          <ImageMapper
            src={HH66_LG}
            map={HH66_LG_MAP}
            onClick={linkToLocation}
            fillColor="rgba(255, 255, 255, 0.5)"
            style={{ marginTop: '100px' }}
            autofocus
            oncontextmenu={false}
          />
        </Col>
      );
    } if (width > 358) {
      return (
        <Col span={24} className="location-view">
          <ImageMapper
            src={HH66_MOBILE_LARGE}
            map={HH66_MOBILE_LARGE_MAP}
            onClick={linkToLocation}
            fillColor="rgba(255, 255, 255, 0.5)"
            style={{ marginTop: '100px' }}
            autofocus
            oncontextmenu={false}
          />
        </Col>
      );
    }
    return (
      <Col span={24} className="location-view">
        <ImageMapper
          src={HH66_MOBILE}
          map={HH66_MOBILE_MAP}
          onClick={linkToLocation}
          fillColor="rgba(255, 255, 255, 0.5)"
          style={{ marginTop: '100px' }}
          autofocus
          oncontextmenu={false}
        />
      </Col>
    );
  };

  return (
    <div>
      <Row type="flex" justify="center">
        {renderMap(width)}
      </Row>
    </div>
  );
};

export default Home;
