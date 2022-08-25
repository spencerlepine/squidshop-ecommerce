import React from 'react';
import { Alert, Typography, Button, CircularProgress } from '@mui/material';

const LoadingStatusWrapper = (props) => {
  const props = {
    loading,
    isError,
    apiRunning,
    handleRefresh,
    dataForChild
  }

  const RefreshBtn = () => <Button style={{ marginLeft: '0.5em' }} onClick={handleRefresh}><CachedIcon /> Refresh</Button>

  if (!apiRunning || isError || !dataForChild) {
    return (
      <Alert severity="warning" style={{ marginTop: '2em' }}>
        <Typography>Failed to load <RefreshBtn /></Typography>
      </Alert>
    )
  }

  if (loading) {
    return <CircularProgress />
  }

  return <>{props.children}</>
}

export default LoadingStatusWrapper;