export const getTestBorderPrimitives = (color?: string) => {
  console.log("env", process.env.NODE_ENV);
  return `test-border ${color ?? `border-red-600`} border border-solid`;
};

export const capitalize = (name: string) =>
  name[0].toLocaleUpperCase() + name.slice(1);

export const getPathClass = (activePath: string, currentPath?: string) => {
  if (isActivePath(activePath, currentPath)) {
    return "activePath";
  }
  return "";
};

export const isActivePath = (activePath: string, currentPath?: string) => {
  if (currentPath) {
    return activePath.replace("/", "") === currentPath;
  }
  return activePath.replace("/", "") === "";
};
