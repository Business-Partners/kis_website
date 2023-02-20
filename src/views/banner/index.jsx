import { BannerTag } from "./styles";
import { Link } from "react-router-dom";

function Banner() {
  return (
    <BannerTag>
      <div>
        <h1> Kindergarten Integrated System </h1>
        <strong>
          O Sistema que a sua creche precisa para melhorar a gestão e
          comunicação.
        </strong>

        <div>
          <Link to="/"> Saber Mais </Link>
        </div>
      </div>
    </BannerTag>
  );
}

export default Banner;
