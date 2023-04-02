export const getTestBorderPrimitives = (color?: string) => {
  console.log("env", process.env.NODE_ENV);
  return `test-border ${color ?? `border-red-600`} border border-solid`;
};
