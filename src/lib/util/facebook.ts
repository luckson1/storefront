import ReactPixel, { Options } from 'react-facebook-pixel';

export const initFacebookPixel = () => {
  const options:Options = {
    autoConfig: true,
    debug: false,
  };

  ReactPixel.init('806579787480746', undefined, options);
};

export const trackPurchase = (value: number, currency: string) => {
  if (typeof window !== 'undefined') {  ReactPixel.track('Purchase', {
    value: value,
    currency: currency,
  });
}
};

export const trackAddToCart = () => {
  if (typeof window !== 'undefined') {
  ReactPixel.track('AddToCart');}
};