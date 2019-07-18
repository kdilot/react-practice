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
        <Button styleName={'btn__fade'}>
          fade
        </Button>
        <Button styleName={'btn__fade__lr'}>
          left-to-right
        </Button>
        <Button styleName={'btn__fade__rl'}>
          right-to-left
        </Button>
        <Button styleName={'btn__fade__tb'}>
          top-to-bottom
        </Button>
        <Button styleName={'btn__fade__bt'}>
          bottom-to-top
        </Button>
        <Button styleName={'btn__fade__ho'}>
          horizontal-out
        </Button>
        <Button styleName={'btn__fade__hi'}>
          horizontal-in
        </Button>
        <Button styleName={'btn__fade__vo'}>
          vertical-out
        </Button>
        <Button styleName={'btn__fade__vi'}>
          vertical-in
        </Button>
      </div>
      <div>
        <h1>top / bottom line</h1>
        <Button styleName={'btn__topline__lr'}>
          topline-left-to-right
        </Button>
        <Button styleName={'btn__topline__rl'}>
          topline-right-to-left
        </Button>
        <Button styleName={'btn__topline__ho'}>
          topline-horizontal-out
        </Button>
        <Button styleName={'btn__bottomline__lr'}>
          bottomline-left-to-right
        </Button>
        <Button styleName={'btn__bottomline__rl'}>
          bottomline-right-to-left
        </Button>
        <Button styleName={'btn__bottomline__ho'}>
          bottomline-horizontal-out
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