import fashverse from "./../../img/fashVerse.png";

const imgs = {
  fashverse:fashverse
}
const FeatureProject = ({ name, desc, tagList,imgName }) => {
  console.log("taglist",tagList)
  return (
    <>
      <div className="project_img">
        {/* <img src={`${process.env.PUBLIC_URL}/public_img/service_img/redesign.svg`} alt="Not Found" /> */}
        <img className="project_image_main" src={imgs[imgName]} alt={imgName} />
      </div>
      <div className="project_desc">
        <div className="project_name">{name}</div>

        <div className="project_mini_desc">{desc}</div>
        <div className="project_tags">
          {tagList &&
            tagList.map((tag) => {
              return <li>{tag}</li>;
            })}
        </div>
      </div>
    </>
  );
};

export default FeatureProject;
