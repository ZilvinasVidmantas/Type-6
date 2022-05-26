const openedMixin = (theme, drawerWidth) => ({
  width: drawerWidth,
  [theme.breakpoints.down('lg')]: {
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  overflowX: 'hidden',
});

export default openedMixin;
