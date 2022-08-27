
import * as React from 'react';
import { Alert, Typography, Button, CircularProgress } from '@mui/material';
import CachedIcon from '@mui/icons-material/Cached';

type Props = {
  loading: boolean;
  isError: any;
  apiRunning: boolean;
  handleRefresh: () => any;
  dataForChild: any;
  usingDemoData: boolean;
  children: any;
}

const LoadingStatusWrapper: React.FC<Props> = (props) => {
  const {
    loading,
    isError,
    apiRunning,
    handleRefresh,
    dataForChild,
    usingDemoData
  } = props

  const RefreshBtn = () => <Button style={{ marginLeft: '0.5em' }} onClick={handleRefresh}><CachedIcon /> Refresh</Button>

  if (loading) {
    return <CircularProgress />
  }

  if (isError || !dataForChild || (!usingDemoData && apiRunning === false)) {
    return (
      <Alert severity="warning" style={{ marginTop: '2em' }}>
        <Typography>Failed to load <RefreshBtn /></Typography>
      </Alert>
    )
  }

  return <>{props.children}</>
}

export default LoadingStatusWrapper;