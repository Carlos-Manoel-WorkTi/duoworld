import { useNavigate, useParams } from "react-router-dom";

export const NavigateHistory = () => {
  const navigate = useNavigate();
  const navigateBack = () => {
    navigate(-1);
  };

  const navigateTo = (path: string) => {
    navigate(path);
  };

  return {
    navigateBack,
    navigateTo,
  };
};

export const Params = () => {
    const params = useParams<{ [key: string]: string  }>();

    const getParams = (name: string) => {
        const paramValue = params[name];
        if (paramValue) {
          const index = paramValue.indexOf("=") + 1;
          return paramValue.substring(index);
        }
        return '';
      };

      return {
        getParams
      };
}

export const calculateReadingPercentage = (currentPage: number, totalPages: number | undefined): number => {
  if (!totalPages || totalPages === 0) return 0;
  return (currentPage / totalPages) * 100;
};
