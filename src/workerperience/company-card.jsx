// import light from "../../styles/light.module.css";
// import dark from "../../styles/dark.module.css";

function CompanyCard({ theme, name, img, address, learn }) {
  let styles;
  //   theme ? (styles = light) : (styles = dark);

  return (
    <div className={styles.institution} data-aos="slide-up">
      <div>
        <h3>{name}</h3>
        <div>{address}</div>
        <div className={styles.skills}>
          {learn.map((item) => (
            <div>
              <img src={item.logo} alt={item.title} />
              <span>{item.title}</span>
            </div>
          ))}
        </div>
      </div>
      <div className={styles.instImgDiv}>
        <img src={img} alt="institution" />
      </div>
    </div>
  );
}

export default CompanyCard;
