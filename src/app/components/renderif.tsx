type Props = {
  condition: boolean;
  children: React.ReactNode;
};

export const RenderIf = (props: Props) => {
  return props.condition ? props.children : null;
};
