import React from 'react';
import { Button } from 'use/widgets';
import styles from './ButtonExample.module.scss';

const ButtonExample = () => {
  return (
    <div className={styles.wrapper}>
      <span>Buttons</span>
      <div>
        <h1>size</h1>
        <Button size={'small'}>
          small
        </Button>
        <Button size={'medium'}>
          medium
        </Button>
        <Button size={'large'}>
          large
        </Button>
      </div>
      <div>
        <h1>fade</h1>
        <Button styleName={'fade'}>
          fade
        </Button>
        <Button styleName={'fadeLeftRight'}>
          left-to-right
        </Button>
        <Button styleName={'fadeRightLeft'}>
          right-to-left
        </Button>
        <Button styleName={'fadeTopBottom'}>
          top-to-bottom
        </Button>
        <Button styleName={'fadeBottomTop'}>
          bottom-to-top
        </Button>
        <Button styleName={'fadeHorizontalOut'}>
          horizontal-out
        </Button>
        <Button styleName={'fadeHorizontalIn'}>
          horizontal-in
        </Button>
        <Button styleName={'fadeVerticalOut'}>
          vertical-out
        </Button>
        <Button styleName={'fadeVerticalIn'}>
          vertical-in
        </Button>
      </div>
      <div>
        <h1>top / bottom line</h1>
        <Button styleName={'toplineLeftRight'}>
          topline-left-to-right
        </Button>
        <Button styleName={'toplineRightLeft'}>
          topline-right-to-left
        </Button>
        <Button styleName={'toplineHorizontalOut'}>
          topline-horizontal-out
        </Button>
        <Button styleName={'bottomlineLeftRight'}>
          bottomline-left-to-right
        </Button>
        <Button styleName={'bottomlineRightLeft'}>
          bottomline-right-to-left
        </Button>
        <Button styleName={'bottomlineHorizontalOut'}>
          bottomline-horizontal-out
        </Button>
      </div>
      <div>
        <h1>shape</h1>
        <Button styleName={'sizeUp'}>
          size-up
        </Button>
        <Button styleName={'sizeDown'}>
          size-down
        </Button>
        <Button styleName={'sizeSpread'}>
          size-spread
        </Button>
        <Button styleName={'sizeShrink'}>
          size-shrink
        </Button>
        <Button styleName={'round'}>
          round
        </Button>
        <Button styleName={'push'}>
          push
        </Button>
        <Button styleName={'pull'}>
          pull
        </Button>
      </div>
      <div>
        <h1>effect</h1>
        <Button styleName={'outlineShrink'}>
          outline-shrink
        </Button>
        <Button styleName={'outlineSpread'}>
          outline-spread
        </Button>
        <Button styleName={'shakeHorizontal'}>
          shake-horizontal
        </Button>
        <Button styleName={'shakeVertical'}>
          shake-vertical
        </Button>
        <Button styleName={'shakeTwist'}>
          shake-twist
        </Button>
        <Button styleName={'blinking'}>
          blinking
        </Button>
        <Button styleName={'hideTop'}>
          hide-top
        </Button>
        <Button styleName={'hideBottom'}>
          hide-bottom
        </Button>
        <Button styleName={'hideLeft'}>
          hide-left
        </Button>
        <Button styleName={'hideRight'}>
          hide-right
        </Button>
      </div>
    </div>
  );
};

export default ButtonExample;