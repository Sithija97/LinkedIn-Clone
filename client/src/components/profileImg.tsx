const url =
  "https://media.licdn.com/dms/image/D5603AQEfkQw-4ldn0A/profile-displayphoto-shrink_200_200/0/1672366176271?e=1710979200&v=beta&t=lBdfjv1xNQp8JeJF4nNHZaZVjiu2idHXi0eepbNvxX4";

type IProps = {
  src?: string;
  styles?: string;
};

export const ProfileImage = ({ src = url, styles = "" }: IProps) => {
  return <img src={src} alt="profile image" className={styles} />;
};
