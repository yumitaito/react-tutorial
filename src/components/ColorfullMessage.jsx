export const ColorfulMessage = ({ color, children }) => {
  console.log('colorfull');
  const contentStyleA = {
    color,
    fontSize: '18px',
  };
  return <p style={contentStyleA}>{children}</p>;
};
