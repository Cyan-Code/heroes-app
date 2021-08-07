// let heroImages = () => ({default: ''});
 
//try {

// } catch (e){};
  
export const heroImages = require.context('../../assets/heroes',true);
// export const loadImage = (image) => (heroImages(`./${image}.jpg`).default);
