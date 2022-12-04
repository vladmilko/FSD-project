import { Flex, FlexProps } from '../Flex/Flex';

type VStackProps = Omit<FlexProps, 'direction'>;

export const VStack = ({ align = 'start', ...props }: VStackProps) => (
  // eslint-disable-next-line react/jsx-props-no-spreading
  <Flex {...props} direction="column" align={align} />
);
