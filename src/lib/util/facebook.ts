import { Options } from 'react-facebook-pixel';

export const initFacebookPixel = () => {
  const options:Options = {
    autoConfig: true,
    debug: false,
  };
  if (typeof window !== 'undefined') {
    const ReactPixel =  require('react-facebook-pixel');
    ReactPixel.default.init('806579787480746')
 
};}

export const trackPurchase = (value: number, currency: string) => {
  const ReactPixel =  require('react-facebook-pixel');
  ReactPixel.default.init('806579787480746')
  if (typeof window !== 'undefined') {  ReactPixel.track('Purchase', {
    value: value,
    currency: currency,
  });
}
};

export const trackAddToCart = () => {
  if (typeof window !== 'undefined') {
    const ReactPixel =  require('react-facebook-pixel');
    ReactPixel.default.init('806579787480746')
  ReactPixel.track('AddToCart');}
};