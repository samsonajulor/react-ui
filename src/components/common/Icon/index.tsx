import React, {
  createElement,
  forwardRef,
  ElementType,
  ForwardedRef,
  ElementRef,
  isValidElement,
  ReactNode,
  ReactSVGElement,
  ReactElement,
} from 'react';
import type {
  PolymorphicForwardRefExoticComponent,
  PolymorphicPropsWithoutRef,
  PolymorphicPropsWithRef,
} from 'react-polymorphic-types';
import styled from 'styled-components';

import { system } from '~lib';
import { SystemProps } from '~types/system';

const _defaultElement = 'div';

type CustomProps = {
  icon: ReactElement | ReactNode;
  className?: string;
} & SystemProps;

type Props<
  T extends ElementType = typeof _defaultElement
> = PolymorphicPropsWithRef<CustomProps, T>;

const StyledIcon = styled.div`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  line-height: 1;

  svg: {
    vertical-align: middle;
  }

  ${(props) => props.css}
  ${system}
`;

export const Icon: PolymorphicForwardRefExoticComponent<
  CustomProps,
  typeof _defaultElement
> = forwardRef(function Icon<
  AsElement extends ElementType = typeof _defaultElement
>(
  { icon, ...rest }: PolymorphicPropsWithoutRef<Props, AsElement>,
  ref: ForwardedRef<ElementRef<AsElement>>,
) {
  return (
    // @ts-ignore
    <StyledIcon {...rest} ref={ref}>
      {/* @ts-ignore */}
      {isValidElement<ReactSVGElement>(icon) ? icon : createElement(icon)}
    </StyledIcon>
  );
});
