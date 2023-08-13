import { cloneElement, useEffect, useState } from "react";

function Carousel(props) {
    const [active, setActive] = useState(0);
    let scrollInterval = null;
    const style = {
      carousel: {
        position: "relative"
      },
      carouselItem: {
        position: "absolute",
        visibility: "hidden"
      },
      visible: {
        visibility: "visible"
      }
    };
    useEffect(() => {
      scrollInterval = setTimeout(() => {
        const { carouselItems } = props;
        setActive((active + 1) % carouselItems.length);
      }, 2000);
    });
    const { carouselItems, ...rest } = props;

    return (
        <div style={style.carousel}>
            {carouselItems.map((item, index) => {
                const activeStyle = active === index ? style.visible : {};
                return cloneElement(item, {
                    ...rest,
                    style: {
                        ...style.carouselItem,
                        ...activeStyle
                    }
                });
            })}
        </div>
    );
}

export default Carousel;