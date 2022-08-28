import * as React from 'react';
import LoadingStatusWrapper from 'layout/LoadStatusWrapper';
import useDemoSettings from 'context/DemoSettingsContext';

const dataLoadingHandler = (Component: any, fetchFunction: Function, customProps: any = {}) =>
  () => {
    const { apiRunning, useDemoData } = useDemoSettings()
    const [dataForChild, setDataForChild] = React.useState(null);
    const [loading, setLoading] = React.useState(false);
    const [isError, setIsError] = React.useState(false);

    const handleRefresh = () => {
      setIsError(false);
      setLoading(true);

      return fetchFunction()
        .then((data: any) => setDataForChild(data))
        .catch((err: any) => err ? setIsError(true) : '')
        .then(() => setLoading(false))
    }

    React.useEffect(() => {
      if (process.env.NODE_ENV !== 'test' && !loading) {
        handleRefresh()
      }
    }, [])

    const loadingStatusProps = {
      loading,
      isError,
      apiRunning,
      handleRefresh,
      dataForChild,
      usingDemoData: useDemoData
    }

    return (
      <LoadingStatusWrapper {...loadingStatusProps}>
        <Component data={dataForChild} {...customProps} />
      </LoadingStatusWrapper>
    )
  };

export default dataLoadingHandler;