/*!
 *
 * Util模块 React Native module
 * 主要提供工具方法
 *
 */

import React, {
     PixelRatio
} from 'react-native';

import Dimensions from 'Dimensions';

module.exports = {

    /*最小线宽*/
    pixel: 1 / PixelRatio.get(),

    /*屏幕尺寸*/
    size: {
      width: Dimensions.get('window').width,
      height: Dimensions.get('window').height
    }
};
