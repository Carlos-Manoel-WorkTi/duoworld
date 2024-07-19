import React, { ReactNode } from 'react';
import { NameLogo } from './style/LogoStyle';

export function LogoName({ children }: { children: ReactNode }) {
  return (
    <NameLogo>{children}</NameLogo>
  );
}
