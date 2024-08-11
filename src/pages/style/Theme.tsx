export const getThemeStyles = (dark?: boolean) => {
  // Determina se o modo escuro deve ser aplicado
  const isDarkMode = dark ?? window.matchMedia('(prefers-color-scheme: dark)').matches;

  // Define os estilos com base na preferência de tema
  const colors = {
    primary: isDarkMode ? '#0D0D0D' : '#e2e2e2',
  };

  return { colors };
};
  