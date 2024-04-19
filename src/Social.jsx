const Social = ({ url, img }) => {
  return (
    <a href={url} target="_blank" rel="noreferrer">
      <img src={img} alt="error" />
    </a>
  );
};
export default Social;
