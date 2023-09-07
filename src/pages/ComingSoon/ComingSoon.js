import { Button, Result } from 'antd'
import React from 'react'
import { useNavigate } from 'react-router-dom'

const ComingSoon = () => {
  const navigate = useNavigate();
  return (
    <Result
      status="404"
      title="Coming Soon!"
      subTitle="Sorry, the page you visited does not exist."
      extra={<Button type="primary" onClick={() => navigate('/')}>Back Home</Button>}
    />
  )
}

export default ComingSoon