import "./styles.css"

const ServiceCard = (props) => {
    const { icon, title, description, isNew } = props

    return (
        <div className="service-card">
            <div className="service-card_icon">
                <div className="eclipse">
                    <img className="eclipse-icon" src={icon} />
                </div>
            </div>
            <div className="service-card_title">
                <h2>
                    {title}
                </h2>
            </div>
            <div className="service-card_seperator"></div>
            <div className="service-card_description">
                {description}
            </div>
            {isNew ?
                <div className="service-card_badge_isNew">
                    <div className="badge_isNew_retangle_1">
                        <h2>NEW</h2>
                        <div className="retangle_1_arrow"></div>
                    </div>
                    <div className="badge_isNew_retangle_2"></div>
                    <div className="badge_isNew_retangle_3"></div>
                </div> : <></>}
        </div>
    )
}

export default ServiceCard