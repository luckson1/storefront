import ReactPixel, { Options } from 'react-facebook-pixel';

export const initFacebookPixel = () => {
  const options:Options = {
    autoConfig: true,
    debug: false,
  };

  ReactPixel.init('806579787480746', undefined, options);
};

export const trackPurchase = (value: number, currency: string) => {
  ReactPixel.track('Purchase', {
    value: value,
    currency: currency,
  });
};
