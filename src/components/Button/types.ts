export default interface IButton {
  title?: string;
  variant?: string;
  onClick?: () => void;
  type?: string;
}

export default interface IButtonStyled {
  variant?: string;
}
