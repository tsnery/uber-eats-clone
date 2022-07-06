import React, {useRef} from 'react';
import {CellContainer} from '@shopify/flash-list';
import {View} from 'react-native';
import {TDefaultTabs} from '../../mock/defaultTabs';
import {useTabs} from '../../hooks/useTabs';
import {HEADER_IMAGE_HEIGHT} from '../HeaderImage';
import {MIN_HEADER_HEIGHT} from '../Header';

export type Props = any & {
  onMeasurement: (index: number, tab: TDefaultTabs) => void;
};

export const CustomCellRendererComponent = React.forwardRef<any, Props>(
  (props: any, _) => {
    const cellContainerRef = useRef<View>(null);
    const onAddAnchor = useTabs(store => store.onAddAnchor);

    React.useEffect(() => {
      onAddAnchor(
        props.index,
        props.style.top + HEADER_IMAGE_HEIGHT + MIN_HEADER_HEIGHT + 66,
      );
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [props.index]);
    3;
    return (
      <CellContainer ref={cellContainerRef} {...props} style={props.style} />
    );
  },
);
