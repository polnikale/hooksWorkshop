import { useCallback, useState } from 'react';

type ValidateType = 'filled';

const useField = (
  startingValue: string,
  validateType: ValidateType = 'filled',
): [string, (value: string) => void, boolean | undefined] => {
  const [field, setField] = useState(startingValue);
  const [error, setError] = useState<boolean | undefined>(undefined);

  const onFieldChange = useCallback((newValue: string) => {
    setField(newValue);
    if (validateType === 'filled') {
      setError(newValue === '');
    }
  }, []);

  return [field, onFieldChange, error];
};

export default useField;
