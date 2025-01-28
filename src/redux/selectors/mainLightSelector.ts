export const selectMainLight = (state: { mainLight: { actionLight: boolean } }) =>
  state.mainLight.actionLight;
