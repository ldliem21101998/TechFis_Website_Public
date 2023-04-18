import {
  PhoneOutlined,
  MailOutlined,
  ArrowRightOutlined,
} from "@ant-design/icons";

const CaseCard = (props) => {
  const { title, description, imageUrl } = props;

  return (
    <>
      <img className="card-img" src={imageUrl} alt={title} />

      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{description}</p>
        <div className="button_case">Read more <ArrowRightOutlined style={{ position: 'absolute', top: 6, left: 80, }} /></div>
      </div>
    </>
  );
};

export default CaseCard;
