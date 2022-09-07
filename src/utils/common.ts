const ALPHA_BET_TEXT = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

export const randomNumber = (min: number, max: number) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

export const randomText = (charLength: number) => {
  let text = "";
  for(let i= 0;i<= charLength - 1;i++){
    text += ALPHA_BET_TEXT.charAt(Math.floor(Math.random() * ALPHA_BET_TEXT.length));
  }
  return text 
}

