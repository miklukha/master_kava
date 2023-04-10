import { MutatingDots } from 'react-loader-spinner';
import { colors } from 'styles/utils/variables';

export function Loader() {
  return (
    <MutatingDots
      height="100"
      width="100"
      color={colors.accent}
      secondaryColor={colors.accent}
      radius="12.5"
      ariaLabel="mutating-dots-loading"
      visible={true}
      wrapperStyle={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100vw',
        height: '100vh',
      }}
    />
  );
}
