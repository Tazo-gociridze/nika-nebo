import { useEffect, useState } from 'react';
import { Spin } from 'antd';

interface DelayedLoadingProps {
  delay: number;
  children: React.ReactNode;
}

const DelayedLoading: React.FC<DelayedLoadingProps> = ({ delay, children }) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, delay);

    return () => clearTimeout(timer);
  }, [delay]);

  return (
    <div className="flex min-h-screen items-center justify-center">
      {loading ? <Spin size="large" /> : children}
    </div>
  );
};

export default DelayedLoading;
