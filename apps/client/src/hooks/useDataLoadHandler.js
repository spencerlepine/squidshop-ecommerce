import React, { useState, useEffect } from 'react';
import LoadingStatusWrapper from '../layout/LoadingStatusWrapper';
import useDemoSettings from '../context/DemoSettingsContext';

const dataLoadingHandler = (Component, fetchFunction, customProps = {}) =>
  () => {
    const { apiRunning } = useDemoSettings()
    const [dataForChild, setDataForChild] = useState(null);
    const [loading, setLoading] = useState(false);
    const [isError, setIsError] = useState(false);

    const handleRefresh = () => {
      setIsError(false);
      setLoading(true);
      fetchFunction()
        .then((data) => setDataForChild(data))
        .catch(() => setIsError(true))
        .then(() => setLoading(false))
    }

    useEffect(() => {
      if (process.env.NODE_ENV !== 'test') {
        handleRefresh()
      }
    }, [])

    const loadingStatusProps = {
      loading,
      isError,
      apiRunning,
      handleRefresh,
      dataForChild
    }

    return (
      <LoadingStatusWrapper {...loadingStatusProps}>
        <Component data={dataForChild} {...customProps} />
      </LoadingStatusWrapper>
    )
  };

export default dataLoadingHandler;