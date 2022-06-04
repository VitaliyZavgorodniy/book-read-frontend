import { createContext } from 'react';

const format = {
  mobile: 'mobile',
  tablet: 'tablet',
  laptop: 'laptop',
};

const PageFormatContext = createContext(format.mobile);

export { PageFormatContext, format };