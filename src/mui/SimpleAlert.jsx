import * as React from 'react';
import Alert from '@mui/material/Alert';
import CheckIcon from '@mui/icons-material/Check';
import Stack from '@mui/material/Stack';

export default function SimpleAlert() {
  return (
    <>
    <Stack sx={{ width: '100%' }} spacing={2}>
        <Alert icon={<CheckIcon fontSize="inherit" />} severity="success">
        한시간 뒤면 점심시간 입니다. 오늘의 점심은 추천 받습니다.
        </Alert>
        <Alert variant="filled" severity="success">
        This is a filled success Alert. 햄버거
        </Alert>
        <Alert variant="filled" severity="info">
        This is a filled info Alert. 제육
        </Alert>
        <Alert variant="filled" severity="warning">
        This is a filled warning Alert. 국밥
        </Alert>
        <Alert variant="filled" severity="error">
        This is a filled error Alert. 우동
        </Alert>
  </Stack>
    </>
  );
}