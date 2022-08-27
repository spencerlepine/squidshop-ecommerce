import { useState, useEffect } from 'react';
import LoadingStatusWrapper from 'layout/LoadingStatusWrapper/LoadStatusWrapper';
import useDemoSettings from 'context/DemoSettingsContext';

const dataLoadingHandler = (Component, fetchFunction, customProps = {}) =>
  () => {
    const { apiRunning, useDemoData } = useDemoSettings()
    const [dataForChild, setDataForChild] = useState(null);
    const [loading, setLoading] = useState(false);
    const [isError, setIsError] = useState(false);

    const handleRefresh = () => {
      setIsError(false);
      setLoading(true);

      return fetchFunction()
        .then((data) => setDataForChild(data))
        .catch((err) => err ? setIsError(true) : '')
        .then(() => setLoading(false))
    }

    useEffect(() => {
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