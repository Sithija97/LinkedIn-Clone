const url =
  "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8dXNlciUyMHByb2ZpbGV8ZW58MHx8MHx8fDA%3D";

type IProps = {
  src?: string;
  styles?: string;
};

export const ProfileImage = ({ src = url, styles = "" }: IProps) => {
  return <img src={src} alt="profile image" className={styles} />;
};
