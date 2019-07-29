import React from 'react';
import { Button } from 'use/widgets';
import styles from './ButtonExample.module.scss';

const ButtonExample = () => {
  return (
    <div className={styles.wrapper}>
      <div>
        <h1>size</h1>
        <Button size={'sm'}>
          small
        </Button>
        <Button size={'md'}>
          medium
        </Button>
        <Button size={'lg'}>
          large
        </Button>
      </div>
      <div>
        <h1>fade</h1>
        <Button styleName={'fade'}>
          fade
        </Button>
        <Button styleName={'fade__lr'}>
          left-to-right
        </Button>
        <Button styleName={'fade__rl'}>
          right-to-left
        </Button>
        <Button styleName={'fade__tb'}>
          top-to-bottom
        </Button>
        <Button styleName={'fade__bt'}>
          bottom-to-top
        </Button>
        <Button styleName={'fade__ho'}>
          horizontal-out
        </Button>
        <Button styleName={'fade__hi'}>
          horizontal-in
        </Button>
        <Button styleName={'fade__vo'}>
          vertical-out
        </Button>
        <Button styleName={'fade__vi'}>
          vertical-in
        </Button>
      </div>
      <div>
        <h1>top / bottom line</h1>
        <Button styleName={'topline__lr'}>
          topline-left-to-right
        </Button>
        <Button styleName={'topline__rl'}>
          topline-right-to-left
        </Button>
        <Button styleName={'topline__ho'}>
          topline-horizontal-out
        </Button>
        <Button styleName={'bottomline__lr'}>
          bottomline-left-to-right
        </Button>
        <Button styleName={'bottomline__rl'}>
          bottomline-right-to-left
        </Button>
        <Button styleName={'bottomline__ho'}>
          bottomline-horizontal-out
        </Button>
      </div>
      <div>
        <h1>shape</h1>
        <Button styleName={'sizeup'}>
          size-up
        </Button>
        <Button styleName={'sizedown'}>
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
        <Button styleName={'outline__shrink'}>
          outline-shrink
        </Button>
        <Button styleName={'outline__spread'}>
          outline-spread
        </Button>
        <Button styleName={'shake__horizontal'}>
          shake-horizontal
        </Button>
        <Button styleName={'shake__vertical'}>
          shake-vertical
        </Button>
        <Button styleName={'shake__twist'}>
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
      <div>
        <h1>test</h1>
        <Button styleName={'test'}>
          test
        </Button>
      </div>
    </div>
  );
};

export default ButtonExample;