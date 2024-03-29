export const isMobile = () => {
  if (window.innerWidth < 576) {
    return true;
  }

  return false;
};

export const isTablet = () => {
  if (window.innerWidth >= 576 && window.innerWidth <= 1024) {
    return true;
  }

  return false;
};

export const isDesktop = () => {
  if (window.innerWidth > 1025) {
    return true;
  }

  return false;
};

export const isIpad = () => {
  if (window.innerWidth >= 576 && window.innerWidth <= 1366) {
    return true;
  }

  return false;
};
